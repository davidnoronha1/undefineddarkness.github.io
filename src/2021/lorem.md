---
title: Lorem Ipsum
description: Test page for all the various markup used on this site
---

<p class="txt-c"><a href="/src/2021/lorem.md">View Page Source</a></p>

Testing Inlines:
Normal text - *italic text* - **bold text** - ~~struck text~~
I am a [link](https://example.com)
<mark>Pay attention to me</mark>
`1 * 2 * 3 = 3!`
https://www.youtube.com/watch?v=dQw4w9WgXcQ - Link is automatically generated
Newlines should intuitively
be preserved...

> A quote,
> over two lines

---

Testing list
- Pumpkin
- Milk
- [Coriander](https://en.wikipedia.org/wiki/Coriander)
is a spice.

1. Numbered
2. Lists

> [!NOTE]
> Callouts: NOTE, TIP, IMPORTANT, WARNING and CAUTION.

> [!WARNING]
> Like this one.

Checking for Syntax Highlighting:
```c
#include <stdio.h>

float Q_rsqrt( float number )
{
    long i;
    float x2, y;
    const float threehalfs = 1.5F;

    x2 = number * 0.5F;
    y  = number;
    i  = * ( long * ) &y;                       // evil floating point bit level hacking
    i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
    y  = * ( float * ) &i;
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration

    return y;
}
```

The same block as a reusable element:
<x-code language="c">
#include <stdio.h>

int main() { printf("hi\n"); }
</x-code>

<x-fold title="Do folds work?">
I guess they do :)
```sh
echo "even with code inside"
```
</x-fold>

<x-fold title="A fold with a heading for a title" level="3">
</x-fold>

What about tables?
<x-table>
Fruits	Vegetables
Apple	Carrot
Orange	**Tomato**
Banana	Eggplant
</x-table>

Math: \(e^{i\pi} + 1 = 0\) inline, and as a block:
```math
\sin(x) = \frac{x}{1!} - \frac{x^3}{3!} + \frac{x^5}{5!} \cdots
```

Charts:
<x-chart unit="MB" title="A bar chart">
protocol	size
jpeg	56.22
h264	7.22
kitty	177.11
</x-chart>

<x-plot x="-6:6" y="-2:2" title="A function plot">
sin(x)	sin(x)
x - x**3/6	3rd order
</x-plot>

<div class="split">
![Images on their own line become figures](/assets/images/nes-export.avif)
![Side by side in a split](/assets/images/pfp.avif)
</div>

## Edge Cases
Inline in code sections:
```sh
export __OPENGL__=1
printf '%d' $(( 2 * 3 * 5 ))
```

Elements inside code sections stay as text:
```
<x-fold title="not a fold">
</x-fold>
> [!NOTE]
> not a callout
```

Inline in code inline:
`Hello **world** - I hope I dont trigger any edge *cases*`
