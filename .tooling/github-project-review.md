# GitHub project review

Reviewed all 83 public repositories from the GitHub owner-repository API. Read available default-branch READMEs, inspected source for unclear original repositories, and checked user-authored commit history for potentially relevant forks. This review is a curated selection rather than an import of every repository.

Selection favors usable tools, substantive engineering implementations, maintained applications, and evidenced open-source contributions. Empty/profile repositories, duplicate/legacy stacks, small tests, old playground demos, and forks without an established personal contribution are omitted. An empty authored-commit response only describes the checked default-branch history; it does not establish that the user never contributed elsewhere.

Selected 32 projects; omitted 51. Forks retained in the manifest are the main Mira team stack and Mira simulator. Smaller upstream patches and supporting simulation forks are omitted from the project showcase, even where a personal contribution was verified. Language labels use GitHub metadata except where inspected source establishes the project or contribution language: dither-experiments is Zig, Bling widget changes are Lua, and passwd-shell-benchmarks contributions are C.

## Review by repository

### androidino — Include

Conference-related original app with documented serial, scripting, sensor and MediaPipe integration.

Android app for USB-connected microcontrollers, combining serial communication, Lua scripting, and sensor and camera input.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/androidino/master/README.md)

### arpa — Omit

Single HTML mirror links back to canonical site; duplicate portfolio, not a standalone project.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/arpa/main/index.html)

### Aster — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/Aster/master/README.md), [History](https://api.github.com/repos/davidnoronha1/Aster/commits?author=davidnoronha1&per_page=10)

### AUV-algos — Omit

Inherited enhancement-algorithm fork; README is only a pointer and no authored commits found in default-branch history.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/AUV-algos/main/README.md), [History](https://api.github.com/repos/davidnoronha1/AUV-algos/commits?author=davidnoronha1&per_page=5)

### av1pack — Include

Substantial client-side codec, container-metadata and extraction pipeline documented with architecture and usage.

Compress photo albums into WebM using browser video codecs, with embedded image metadata, slideshow playback, and ZIP extraction.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/av1pack/master/README.md)

### awesome — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/awesome/master/README.md), [History](https://api.github.com/repos/davidnoronha1/awesome/commits?author=davidnoronha1&per_page=10)

### awesome-firefox-integration — Include

Original browser/window-manager integration with native messaging and working configuration references.

Firefox extension and Python bridge that expose browser tabs to AwesomeWM titlebars and window switching.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/awesome-firefox-integration/master/README.md)

### bcd-table — Include

Documented reusable web API lookup and iframe integration service.

Cloudflare Worker that turns MDN browser compatibility data into embeddable HTML tables for web documentation.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/bcd-table/master/README.md)

### bling — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Several authored widget changes; present as contributions rather than claiming the upstream widget library.

Contributions to AwesomeWM widgets, including configurable titlebar indicators, task previews, and custom task-list layouts.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/bling/master/README.md), [Commit](https://github.com/davidnoronha1/bling/commit/a525299d4f7f7277503f181130de50085a356ed0)

### bluerov2_gz — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Authored stereo/point-cloud and sensors-system commits provide specific contribution evidence.

BlueROV2 Gazebo Harmonic fork adding stereo cameras, point-cloud sensing, and sensor-system fixes for underwater simulation.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/bluerov2_gz/main/README.md), [Commit](https://github.com/davidnoronha1/bluerov2_gz/commit/cf78fb89ba3f3432ca0948f282363dafde2b7775), [Commit](https://github.com/davidnoronha1/bluerov2_gz/commit/be37ca485fbbff093b94f79924484c841497c12e)

### bootstrap — Include

Substantial maintained setup script, configurable steps, tests, bundled tool configs and FFmpeg recorder; source reviewed because README absent.

Interactive Linux workstation setup for development tools, shells, terminal configuration, Docker, and optional screen recording tools.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/bootstrap/main/bootstrap.sh), [README/source](https://raw.githubusercontent.com/davidnoronha1/bootstrap/main/tools/rec/README.md)

### camera_driver — Include

Substantial current README documents YAML-configured pipeline elements, hardware encoder paths, publishers and recording.

Configurable C++20 GStreamer camera framework with hardware encoding, recording, streaming, and optional ROS 2 integration.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/camera_driver/master/README.md)

### cc-t1 — Omit

Stock Vite README; App.tsx contains hardcoded sample users/rankings and no working data or backend integration; UI exercise.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/cc-t1/master/README.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/cc-t1/master/src/App.tsx)

### cello — Include

A functional original desktop application with releases, archive playback and playlist support, despite README describing it as a toy.

Godot music player with playlists and direct playback from ZIP archives, with Linux and Windows release builds.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/cello/master/README.md)

### colr — Include

Documented original desktop utility with installable packages and screenshots.

GTK color picker for X11, inspired by PowerToys, with packaged binaries and a Meson build.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/colr/main/README.md)

### crawly — Include

Original extension with build/install instructions and implemented network visualization.

Browser extension that crawls page links and visualizes connections between websites as an interactive graph.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/crawly/master/README.md)

### davidnoronha1 — Omit

Profile README repository, not a standalone project.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/davidnoronha1/main/README.md)

### dither-experiments — Include

Original graphics program with explicit implemented algorithms and CLI usage. Inspected main.zig and source tree establish Zig as the implementation language despite C being the API primary-language label; avoid claiming TODO Floyd–Steinberg support.

GPU image-processing tool built with Zig and Mach, supporting palette lookup, LUTs, grayscale, and several dithering methods.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dither-experiments/master/README.md), [Source](https://raw.githubusercontent.com/davidnoronha1/dither-experiments/master/main.zig)

### dmenu-flexipatch — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dmenu-flexipatch/master/README.md), [History](https://api.github.com/repos/davidnoronha1/dmenu-flexipatch/commits?author=davidnoronha1&per_page=10)

### dnt-thing — Omit

One-kilobyte repository with only a slogan README; no substantive project description.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dnt-thing/main/README)

### dockercpp — Include

Documented usable installer addressing a concrete development setup problem.

A Windows C/C++ development environment that installs VS Code and Docker, then opens a Linux dev container with clangd and LLDB.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dockercpp/master/README.md)

### dotnet-chrome-protocol — Omit

Only a small authored LogLevel enum addition found; upstream library is not presented as an original project.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dotnet-chrome-protocol/main/README.md), [History](https://api.github.com/repos/davidnoronha1/dotnet-chrome-protocol/commits?author=davidnoronha1&per_page=10), [Commit](https://github.com/davidnoronha1/dotnet-chrome-protocol/commit/439e8b85d6e12ee47fc22b89b733e1b1c4068b9e)

### dots — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dots/master/README.md), [History](https://api.github.com/repos/davidnoronha1/dots/commits?author=davidnoronha1&per_page=10)

### dreadnoughtrobotics.github.io — Omit

Team website fork with minimal README and no user-authored commits found; insufficient contribution evidence.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/dreadnoughtrobotics.github.io/main/README.md), [History](https://api.github.com/repos/davidnoronha1/dreadnoughtrobotics.github.io/commits?author=davidnoronha1&per_page=5)

### ducktape — Omit

README explicitly marks this desktop-wrapper experiment abandoned and very incomplete; omitted in favor of usable original tools.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/ducktape/master/README.md)

### emacs-format-all-the-code — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Verified authored formatter integration patch; label as fork contribution, not original formatter package.

Contribution adding StyLua support to Emacs format-all, enabling automatic formatting for Lua buffers.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/emacs-format-all-the-code/master/README.md), [Commit](https://github.com/davidnoronha1/emacs-format-all-the-code/commit/18f61465eafd182f8dddae97be7beaa5e10b23c7)

### eww — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/eww/master/README.md), [History](https://api.github.com/repos/davidnoronha1/eww/commits?author=davidnoronha1&per_page=10)

### ewwxml — Include

A useful original migration utility with documented install, conversion command and supported fixes.

Archived command-line converter that migrates Eww widget configurations from XML to the Yuck format.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/ewwxml/main/README.md)

### filters — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/filters/master/README.md), [History](https://api.github.com/repos/davidnoronha1/filters/commits?author=davidnoronha1&per_page=10)

### flutter-demo — Omit

README explicitly describes a couple-hour demo with known functionality and input gaps; exclude toy/learning demos per requested curation.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/flutter-demo/master/README.md)

### gate-detection — Include

Original implementation documents a C++ port and threaded detection pipeline.

Multithreaded C++ gate detection and pose estimation for the SAUVC underwater navigation task.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/gate-detection/main/README.md)

### gbz — Include

Substantial CPU/memory implementation with test-ROM results; description explicitly preserves incomplete emulator status.

C# Game Boy emulator in progress, with an implemented SM83 CPU and memory model; graphics and other subsystems remain unfinished.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/gbz/master/README.md)

### generate-gb-opcodes — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/generate-gb-opcodes/master/README.md), [History](https://api.github.com/repos/davidnoronha1/generate-gb-opcodes/commits?author=davidnoronha1&per_page=10)

### gh-project-display — Omit

Source retrieves readmes but root request handler has no implementation or response; README only installation commands.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/gh-project-display/master/README.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/gh-project-display/master/src/index.ts)

### gitgraph-demo — Omit

README identifies educational demo; excludes one-off demos in favor of substantive tools, per user direction.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/gitgraph-demo/master/README.md)

### gluon — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/gluon/main/README.md), [History](https://api.github.com/repos/davidnoronha1/gluon/commits?author=davidnoronha1&per_page=10)

### HVB_To_Do — Omit

Fork with a title-only README and no distinct documented personal project scope.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/HVB_To_Do/main/README.md)

### imv — Omit

Source works as a small experiment but limited and undocumented; not prioritized for substantive curated listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/imv/master/src/app.cpp)

### libuvc_ros — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/libuvc_ros/master/README.md)

### lookaway-project — Omit

Repository holds exported game .pck/.wasm and generated shell but no editable Godot project or descriptive README; original playground/hackathon toy.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/lookaway-project/main/index.html), [README/source](https://raw.githubusercontent.com/davidnoronha1/lookaway-project/main/index.ts)

### Lorien — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/Lorien/main/README.md), [History](https://api.github.com/repos/davidnoronha1/Lorien/commits?author=davidnoronha1&per_page=10)

### mach — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mach/main/README.md), [History](https://api.github.com/repos/davidnoronha1/mach/commits?author=davidnoronha1&per_page=10)

### mem — Include

Detailed architecture and implemented local file persistence, custom canvas shapes, and document workflow; substantive application.

A local-first browser workspace combining an infinite canvas, local files, bookmarks, PDF viewing, and rich-text notes.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mem/master/README.md)

### meshmerize — Include

Competition-related simulator and write-up are documented in README; useful algorithm-testing project despite incomplete archival media.

A C and Raylib simulator for testing maze-solving line followers, with competition notes from MeshMerize 2024.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/meshmerize/main/README.md)

### mira — Include

Team project with authored CI/devcontainer changes and integration work; describe as team stack, not sole authorship.

Dreadnought Robotics’ Mira AUV software stack, with ROS 2 control, perception, navigation, and vehicle telemetry.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mira/master/README.md), [Commit](https://github.com/davidnoronha1/mira/commit/5f384dd98648f8fa817657c6f0b64d26c4f4f53a), [Commit](https://github.com/davidnoronha1/mira/commit/0ea23a7779e90d340fc6c031f1013a782a0ff7da), [Commit](https://github.com/davidnoronha1/mira/commit/55f6cb6559f52279c060c46f59432eed0e04261b)

### mira-control-a1 — Include

Detailed README describes own Go rewrite, ROS2 interfaces and concurrency architecture.

Go ROS 2 MAVLink controller for Mira, handling Pixhawk commands, telemetry, and emergency controls with concurrent workers.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mira-control-a1/main/README.md)

### Mira2.0_Rpi_1 — Omit

Legacy team master-Pi workspace, minimal README and no authored commits found; current Mira stack is more representative.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/Mira2.0_Rpi_1/main/README.md), [History](https://api.github.com/repos/davidnoronha1/Mira2.0_Rpi_1/commits?author=davidnoronha1&per_page=5)

### Mira2.0_Surface_Comp — Omit

Legacy surface-computer fork; only a CMake fix found under user author; not a distinct substantial project.

Evidence: [Repository](https://github.com/davidnoronha1/Mira2.0_Surface_Comp/tree/master), [Commit](https://github.com/davidnoronha1/Mira2.0_Surface_Comp/commit/de6eb253c625ea3d22ce18fa9f4652535be7bc66)

### mira_sim — Include

Multiple authored commits integrate Docker, sensor bridges, simulation resources and competition worlds.

Containerized underwater simulation combining Gazebo Harmonic, ArduPilot SITL, competition worlds, and QGroundControl.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mira_sim/master/README.md), [Commit](https://github.com/davidnoronha1/mira_sim/commit/7676665f2d378d90fff3a4e73e61cf5df840bf61), [Commit](https://github.com/davidnoronha1/mira_sim/commit/c18c338fdcc8300f5a72d93fcd8b5b054756866a), [Commit](https://github.com/davidnoronha1/mira_sim/commit/a5c6b10f4ad32e9c9b3abe18100220b7271472d4)

### mkr — Include

README brief, but inspected source and mode tree show substantive multi-mode launcher and configurable UI.

A customizable GTK application launcher in C with modular modes for applications, emoji, scripts, and calculations.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/mkr/master/README.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/mkr/master/structure.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/mkr/master/src/app.c), [README/source](https://raw.githubusercontent.com/davidnoronha1/mkr/master/config.ini)

### nhai-road-viz — Include

README sparse; reviewed React application and source tree with actual map, analysis tables, mobile views, video and data ingestion components.

A responsive road-survey dashboard with route maps, chainage information, lane analysis, and synchronized video views.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/nhai-road-viz/main/README.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/nhai-road-viz/main/src/App.tsx), [README/source](https://raw.githubusercontent.com/davidnoronha1/nhai-road-viz/main/src/components/InfoText.tsx)

### notein-export — Include

Current README documents actual supported file formats and export pipeline; newer than GitHub summary.

Local browser viewer for Notein and Nebo handwriting files, with WebAssembly parsing, media extraction, and PNG, PDF, and SVG export.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/notein-export/master/README.md)

### olive_dnt_github — Omit

Undocumented fork with no user-authored commits found; insufficient evidence for useful project description.

Evidence: [Repository](https://github.com/davidnoronha1/olive_dnt_github/tree/main), [History](https://api.github.com/repos/davidnoronha1/olive_dnt_github/commits?author=davidnoronha1&per_page=5)

### p2p-file-transfer — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/p2p-file-transfer/main/README.md)

### passwd-shell-benchmarks — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Multiple substantial authored C implementation rewrites and pthread changes verified in source patches.

C performance work on login-shell counting benchmarks, including memory-mapped input and multithreaded parsing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/passwd-shell-benchmarks/main/README.md), [Commit](https://github.com/davidnoronha1/passwd-shell-benchmarks/commit/79b6be84eb951ba54620e9ec833a62f5f0157495)

### pastebin-worker — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/pastebin-worker/goshujin/README.md), [History](https://api.github.com/repos/davidnoronha1/pastebin-worker/commits?author=davidnoronha1&per_page=10)

### pixless — Omit

Has substantive shader implementation, but explicitly a playground and previously one of portfolio toys; exclude in this pass per instruction to replace toy cards.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/pixless/master/README.md)

### portmidi-lua — Include

Reusable original binding with concrete build steps and documented exported API.

Lua bindings for PortMidi generated with SWIG, exposing MIDI device and event APIs to Lua programs.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/portmidi-lua/master/README.md)

### programming-books — Omit

Personal ebook collection, not an authored software project.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/programming-books/master/README.md)

### Project-Mira — Omit

Older ROS1 team workspace, no authored commits found in default-branch history; avoid duplicate legacy Mira entries.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/Project-Mira/main/README.md), [History](https://api.github.com/repos/davidnoronha1/Project-Mira/commits?author=davidnoronha1&per_page=5)

### register — Omit

Domain-registration fork rather than an independently authored service.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/register/main/README.md)

### rice — Include

Extensive original desktop configuration and patches with build/dependency documentation.

Personal AwesomeWM desktop setup with custom patches, widgets, Neovim configuration, and system integration scripts.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/rice/master/README.md)

### ricing-guide — Include

Authored documentation project with chapter structure and public guide.

Practical Linux desktop customization guide covering setup, visual design, terminals, and frequently asked questions.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/ricing-guide/master/README.md)

### robbb — Omit

Authored kick-command prototype and follow-up fixes found, but no README or substantial distinct project scope; omitted as a minor incomplete fork.

Evidence: [Repository](https://github.com/davidnoronha1/robbb), [History](https://api.github.com/repos/davidnoronha1/robbb/commits?author=davidnoronha1&per_page=10), [Commit](https://github.com/davidnoronha1/robbb/commit/56e8ae3e9990e58d7abdccf213beb747260752e7)

### robotics-demos — Include

README marks implemented demos; inspected source tree confirms physics, estimators, feature trackers and graph/search implementations.

Browser-based IMU sensor fusion, webcam feature tracking, and an interactive map of NVIDIA robotics projects.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/robotics-demos/main/README.md)

### sauvc_sim — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Authored commits add 2026 arenas, migrate plugins and fix buoyancy, water and IMU behavior.

SAUVC underwater competition simulation fork with 2026 arena assets and Gazebo Harmonic compatibility fixes.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/sauvc_sim/master/README.md), [Commit](https://github.com/davidnoronha1/sauvc_sim/commit/22f941d82305185174460a4877157b05711a189b), [Commit](https://github.com/davidnoronha1/sauvc_sim/commit/33f5b7703e7c3302a42f47631e08846f4413de4f), [Commit](https://github.com/davidnoronha1/sauvc_sim/commit/2fc6ea901508069afe49492944251e8fe1ca94eb)

### scpt — Include

Detailed operational documentation, persistent SSH host integration, smart splits, multiplexing and rsync companion utility.

A tmux connection manager for SSH hosts, Docker containers, and local shells, with smart pane controls and companion file transfers.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/scpt/main/README.md)

### ss — Omit

Partial prototype; application module empty while emoji mode implemented. Superseded in relevance by fuller mkr launcher.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/ss/master/init.lua), [README/source](https://raw.githubusercontent.com/davidnoronha1/ss/master/appl/init.lua), [README/source](https://raw.githubusercontent.com/davidnoronha1/ss/master/emoji/init.lua)

### stonefish — Omit

Upstream marine simulation library fork; no user-authored commits found, and upstream credits identify Patryk Cieslak.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/stonefish/master/README.md), [History](https://api.github.com/repos/davidnoronha1/stonefish/commits?author=davidnoronha1&per_page=5)

### stonefish_ros2 — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Authored commits specifically add static-body publishing, gdbserver option and NED/ENU documentation.

Stonefish ROS 2 integration fork with static-body publishing, remote-debugging support, and coordinate-frame documentation.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/stonefish_ros2/master/README.md), [Commit](https://github.com/davidnoronha1/stonefish_ros2/commit/75308833aa4c8580a71ee851574cdaf4150f1aee), [Commit](https://github.com/davidnoronha1/stonefish_ros2/commit/21c6cfa7e9b653acbc398b4e8c015faf05db3fcd), [Commit](https://github.com/davidnoronha1/stonefish_ros2/commit/29e5d800d73f8f7685d7f6b277f398e3748634ff)

### stremio-mpris — Include

Functional original integration with add-on installation and service startup instructions.

Node.js Stremio add-on that publishes playback metadata through MPRIS for Linux media controls such as playerctl.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/stremio-mpris/main/README.md)

### styllink — Include

Substantial original native Android/Linux/browser system with documented input and video paths.

Use an Android stylus as a Linux pen tablet over USB or Wi-Fi, with pressure, tilt, eraser input, and screen sharing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/styllink/main/README.md)

### Sumi — Omit

Brief README describes a single-evening programmatic-art playground; omitted with the toy/demo material as requested.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/Sumi/master/README.md)

### SuperTinyIcons — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/SuperTinyIcons/master/README.md), [History](https://api.github.com/repos/davidnoronha1/SuperTinyIcons/commits?author=davidnoronha1&per_page=10)

### surface_filters — Omit

Removed from the showcase under the narrower selection: this contribution or supporting fork is not a primary project. The contribution evidence below is retained for reference.

Two source patches verify specific personal compatibility work; no claim of original filter authorship.

Compatibility contributions to AwesomeWM surface filters, adding Lua 5.1 support and more flexible module loading.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/surface_filters/master/README.md), [Commit](https://github.com/davidnoronha1/surface_filters/commit/f0a1960573e96faa95cc6427700423f31a3f5edd)

### tcolors — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/tcolors/master/README.md), [History](https://api.github.com/repos/davidnoronha1/tcolors/commits?author=davidnoronha1&per_page=10)

### tinyws — Include

Reusable original desktop widget system with API, examples, capability interfaces and dependencies.

Python widget framework that connects HTML and JavaScript interfaces to Linux system capabilities through WebKit2GTK.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/tinyws/main/README.md)

### TRNet — Omit

Unrelated coronary-artery stenosis research fork with upstream authors; no user-authored commits found.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/TRNet/main/README.md), [History](https://api.github.com/repos/davidnoronha1/TRNet/commits?author=davidnoronha1&per_page=5)

### undefineddarkness.github.io — Include

README documents custom generator, markup pipeline and live workflow; substantive system rather than only a profile page.

A personal publishing site with a custom shell-based static-site generator, document markup, and live rebuilding.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/undefineddarkness.github.io/master/README.md), [README/source](https://raw.githubusercontent.com/davidnoronha1/undefineddarkness.github.io/master/generate)

### UR-MVO — Omit

Underwater odometry research fork credits upstream contributors; no user-authored commits found.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/UR-MVO/master/README.md), [History](https://api.github.com/repos/davidnoronha1/UR-MVO/commits?author=davidnoronha1&per_page=5)

### vial — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/vial/master/README.md), [History](https://api.github.com/repos/davidnoronha1/vial/commits?author=davidnoronha1&per_page=10)

### WTF — Omit

Fork README describes the upstream project; no personal authored commits found in the checked default-branch history. No distinct contribution scope established for this listing.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/WTF/master/README.md), [History](https://api.github.com/repos/davidnoronha1/WTF/commits?author=davidnoronha1&per_page=10)

### zed-jetson — Include

README documents layered Jetson/ROS2/ZED image and custom ONNX detection launch script.

Docker environment for running ZED cameras and custom object detection on NVIDIA Jetson with ROS 2 Jazzy.

Evidence: [README/source](https://raw.githubusercontent.com/davidnoronha1/zed-jetson/master/README.md)
