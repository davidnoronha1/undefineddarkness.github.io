#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = [ "aiohttp", "watchfiles", "aiohttp_compress" ]
# ///

from aiohttp import web, WSMsgType
from aiohttp_compress import compress_middleware
from mimetypes import guess_type as guess_mime_type
from pathlib import Path
from watchfiles import awatch
import asyncio
import subprocess
import platform
import argparse
import sys
import tty
import termios
import os
import threading

prefix="\033[1m\033[31mHS\033[0m  " 

# A terribly simple little hot server

fileNotFoundDoc = """
<html>
    <head>
    </head>
    <body>
        File was not found on this server.
    </body>
</html>
"""

injectionScript = """
<script defer>
    <!-- INJECTED BY WEB SERVER -->
    const socket = new WebSocket('ws://localhost:5000/ws-connect')
    socket.addEventListener('message', e => {
        if (e.data == "UPDATE")
            document.location.reload();
    })
    socket.addEventListener('open', e => {
        let fileName = document.location.pathname.split('/').pop();
        if (fileName.length == 0)
            fileName = "index.html"
        socket.send(`REGISTER ${fileName}`);
    })
</script>
</body>
"""

def injectHTML(path):
    with open(path, "r", encoding="utf8") as fp:
        content = fp.read()
    return content.replace("</body>", injectionScript)

async def generichandle(req):
    path = Path(req.match_info.get('name', 'index.html'))
    # print(path)

    if not path.is_file():
        return web.Response(status=404, text=fileNotFoundDoc, content_type="text/html")

    if path.suffix == '.html':
        html_content = injectHTML(path)
        content_bytes = html_content.encode('utf-8')
        mimetype = "text/html"
    else:
        with open(path, "rb") as fp:
            content_bytes = fp.read()
        mimetype = guess_mime_type(str(path))[0] or "text/plain"

    return web.Response(body=content_bytes, content_type=mimetype, headers={'Cache-Control': 'max-age=31536000'})

sockets = []
async def wshandle(req):
    global sockets
    ws = web.WebSocketResponse()
    await ws.prepare(req)

    async for msg in ws:
        if msg.type == WSMsgType.TEXT:
            words = msg.data.split(" ")
            if words[0] == "REGISTER":
                filename = Path(words[1])
                sockets.append((filename.stem, ws))
                print(prefix + f"Registered {filename.stem}")
        else:
            print("Unexpected WS message of type:", msg.type)

    # sockets = [conn for conn in sockets if conn[1] != ws]

    return ws

app = web.Application()
app.middlewares.append(compress_middleware)
app.add_routes([
    web.get('/', generichandle),
    web.get('/ws-connect', wshandle),
    web.get(r'/{name:.*}', generichandle)
])

script_path = Path(__file__).resolve()
generate_script = script_path.parent / 'generate.sh'

# if in windows, get path to git bash
if platform.system() == 'Windows':
    import winreg
    key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, r'SOFTWARE\\GitForWindows')
    git_path, _ = winreg.QueryValueEx(key, 'InstallPath')
    bash_path = Path(git_path) / 'bin' / 'bash.exe'
    winreg.CloseKey(key)
else:
    bash_path = Path('/bin/bash')

script_dir = Path.cwd()


async def watch():
    async for changes in awatch('./src'):
        for change in changes:
            fp = Path(change[1])

            print(prefix + f" Rebuilding {fp.stem} ({str(fp)})")
            process = subprocess.run([ bash_path, "./generate", fp.relative_to(script_dir) ], stdout=subprocess.PIPE)
            print(process.stdout.decode('utf8').strip())
            # print(process.stderr)
            applicable = [conn for conn in sockets if conn[0] == fp.stem] 
            for socket in applicable:
                try:
                    await socket[1].send_str("UPDATE")
                except:
                    pass

async def rebuild():
    print(prefix + " Rebuilding all files")
    process = await asyncio.create_subprocess_exec(bash_path, "./generate", stdout=subprocess.PIPE)
    stdout, _ = await process.communicate()
    print(stdout.decode('utf8').strip())
    for socket in sockets:
        try:
            await socket[1].send_str("UPDATE")
        except:
            pass

async def listen_for_keys():
    loop = asyncio.get_event_loop()
    rebuilding = False
    try:
        while True:
            # Prompt user for a command
            cmd = await loop.run_in_executor(None, lambda: input("> ").strip())

            if cmd in ['r', ''] and not rebuilding:  # allow 'r' or just Enter
                rebuilding = True
                print(prefix + "Rebuilding...")
                await rebuild()
                rebuilding = False
            elif cmd == 'q':
                print(prefix + "Goodbye!")
                sys.exit(0)  # quit the whole script
    except (KeyboardInterrupt, EOFError):
        print(prefix + "Goodbye!")
        sys.exit(0)



async def main():

    parser = argparse.ArgumentParser()
    parser.add_argument('--ui', action='store_true', help='Enable UI mode with key listeners.')
    args = parser.parse_args()

    # Initiate Web Server
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, "localhost", 5000)
    await site.start()
    print(prefix + "Server Started @ \u001b[31mhttp://127.0.0.1:5000\u001b[0m")

    if args.ui:
        print(prefix + "UI mode enabled. Press 'r' or space to rebuild, 'q' to quit.")
        await rebuild()
        asyncio.create_task(listen_for_keys())

    # Initialize File Watcher
    await watch()

    await asyncio.Event().wait()

try:
    asyncio.run(main())
except KeyboardInterrupt:
    print(prefix + "Goodbye!")
    pass