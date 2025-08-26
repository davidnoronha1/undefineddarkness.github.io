#include <stdlib.h>
#include "tigr.h"
#include <time.h>
#include <stdio.h>

int randomNo(int min, int max) {
  return min + rand() / (RAND_MAX / (max - min + 1) + 1);
}

int main() {

  srand(time(NULL));

  Tigr *screen = tigrWindow(320, 240, "Hello", 0);
  int x, y;
  char *fmt = malloc(100);
  while (!tigrClosed(screen)) {
    tigrClear(screen, tigrRGB(0x11, 0x11, 0x11));

    tigrPrint(screen, tfont, 120, 110, tigrRGB(0xf0, 0xf0, 0xf0),
              "Hello, world.");
	snprintf(fmt, 100, "%d, %d", x, y);
	tigrPrint(screen, tfont, 120, 110 + 16, tigrRGB(0xf0, 0xf0, 0xf0), fmt);

    tigrMouse(screen, &x, &y, NULL);
    tigrFillCircle(screen, x, y, 8, tigrRGB(0xff, 0x00, 0x00));

    for (int i = 0; i < 100; i++) {
      int x = randomNo(0, 320);
      int y = randomNo(0, 240);
      tigrLine(screen, x, y, x, y + 10, tigrRGB(0x00, 0x00, 0xff));
    }

    tigrUpdate(screen);
  }
  free(fmt);
  tigrFree(screen);
  return 0;
}	
