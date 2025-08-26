#HEADER Memory for Idiots (like me)
A collection of notes on memory management in C
#END HEADER
Just a collection of my notes from my time learning C,
I'd tried learning C a couple of times but it took a while for it to really click in my head

#f Analogy for memory access speeds
![](/assets/images/memory-analogy.svg)
Essentially the CPU cache is like a tub of water you have at home (program), But since it's at home, its very fast to access it.
The stack is like a outdoor water tank, still very fast to access but slower than the cache and you can access a lot more water at once too.
The heap is like a village well, It takes time to get to it but once you're there, you can effectivley get as much water as you want.

There technically, is a much more nuanced difference between the stack and the heap and they can be entirely just in one's head but it makes explaining stuff a lot simpler.
#END f

### Preface
I'm going to assume you know what variables are, can more - or - less read C code (as in you know what functions and variables are) and have a rough idea of the fact that computer memory is (for explanation's sake) a long list of bytes which you can read and write to

C has no concept of an array (it kind of does but its not very useful) or a slice and its usually with compiled / static languages where you'd be dealing with this either way so its good to start from there only, What it does have is a pointer that is an address to _somewhere_ in system memory, Where exactly isn't relevant right now

For example,
Lets say I have the following program
```c
int main() {
    int x = 42;
    int a[3] = { 1, 5, 6 };
	printf("%d, %d\n", sizeof(a), sizeof(a[0]));
    for (int i = 0; i < (sizeof(a) / sizeof(a[0])); i++) {
        printf("%p -> %d [%p]\n", &a[i], a[i], &i);
    }
}
```

If it helps to understand the code, Know that
`sizeof(X)` simply gives you the number of bytes that the data type takes **THIS IS NOT USEFUL FOR POINTER TYPES OR ANYTHING ON THE HEAP**
More simply - if the number of bytes taken up by that variable is known at compile-time, then this value is useful.

`%p` is used to print a pointer type in [hexadecimal](https://learn.sparkfun.com/tutorials/hexadecimal/all) (base-16)

This is the output from that code
```
12, 4
[140733356259068] 0x7fff09b536fc -> 1 140733356259060 [0x7fff09b536f4]
[140733356259072] 0x7fff09b53700 -> 5 140733356259060 [0x7fff09b536f4]
[140733356259076] 0x7fff09b53704 -> 6 140733356259060 [0x7fff09b536f4]
```

First look at `sizeof(a) / sizeof(a[0])`, What do you think it is trying to do, Why am I calculating that?

#f ans
This is to obtain the no of elements in the array (\(l \unit{element}\)), I can get the number of bytes the array is using since it is known to the compiler (a[] is a stack variable) -> Let's say its \(y \unit{byte}\)

So it says the array of 3 elements takes up 12 bytes, Arrays do not have padding (any extra bytes besides the bytes of the data itself), How many bytes is each element? -> Let's say is \(x \unit{element/byte}\)

So if I divide the number of bytes the entire array takes by the bytes taken by each data element I get,
\(\frac{y \unit{byte}}{x \unit{element/byte}} = l \unit{element}\)

The program prints out the values of `sizeof(a)` and `sizeof(a[0])` respectivley which we can see to be `12` and `4` respectivley, we can relate this to $3 * 4 = 12$ so $12 / 4 = 3$ the number of elements in the array

THIS IS A TRICK FOR STATIC ARRAYS - DO NOT DO THIS FOR HEAP ARRAYS, STORE THE LENGTH
#END f

Now the rest out of the code which gives us this print out
```
[140733356259068] 0x7fff09b536fc -> 1 140733356259060 [0x7fff09b536f4]
[140733356259072] 0x7fff09b53700 -> 5 140733356259060 [0x7fff09b536f4]
[140733356259076] 0x7fff09b53704 -> 6 140733356259060 [0x7fff09b536f4]
```

Ignore the hex values (the ones starting with 0x),
If you notice the decimal values in the first column differ from each other by 4, $-140733356259068 + 140733356259072 = 4$, so there's exactly 4 bytes of space till the next address (offset), which is just enough space for our 32 bit integer $\frac{32 \unit{bits}}{8 \unit{bits / byte}} = 4 \unit{byte}$


```math
```


### Example Problem: Returning a string from a function
Let's say we want to write a function in C to return a string time stamp, Very simple right?

#### Initial Attempt:
```c
char *getTimestamp() {
    char timestamp[100];
    snprintf(timestamp, sizeof(timestamp), "%llu", time(NULL));
    return timestamp;
}
```
But this won't work, The compiler even gives us a warning
```
e.c:6:12: warning: function returns address of local variable [-Wreturn-local-addr]
    6 |     return timestamp;
      |            ^~~~~~~~~
```
Okay but why doesn't this work? It's because our `timestamp` variable doesnt exist anymore once timestamp returns, So the pointer we return is pointing to garbage.
There's three ways we can fix it, By marking our memory static, By taking a char buffer as a argument or by *allocating* our memory so that it won't disapper once our function is complete.

==📜 Plain old data types can be simply passed around without any memory shenanigans, This is most efficient for smaller structures==

#### Solution 1: static
```c
char *getTimestamp() {
    static char timestamp[100];
    snprintf(timestamp, sizeof(timestamp), "%llu");
    return timestamp;
}
```
This works, because now `timestamp` is static so it will exist for the lifetime of the program, But the problem is if the function is called again, timestamp gets overwritten!
Example:
```c
char*a = getTimestamp();
printf("%s\n",a);
sleep(5);
char*b = getTimestamp();
printf("%s, %s\n",a,b);
```
gives
```
1682173737
1682173742, 1682173742
```
so the memory `a` is pointing to changes when `getTimestamp()` is called again.

**NOTE**: static memory is only initialized once

### Solution 2: taking a pointer
```c
char *getTimestamp(char* buf, size_t bufSize) {
    snprintf(buf, bufSize, "%llu", time(NULL));
    return buf;
}
```
In this version, we ignore memory entirely, We simply take in a pointer to some memory (stack or heap, doesn't matter) and write to it.
But if we didn't take in a size for the buffer there's a chance we could overflow the buffer. So there is added risk with this, but it allows for better memory reusability, since the caller can call it with the same memory.

### Solution 3: allocating on the heap
```c
// Caller must free() the given memory
char* getTimestamp() {
    char* timestamp = malloc(100);
    snprintf(buf, 100, "%llu", time(NULL));
    return timestamp;   
}
```
In this case, each time our function is called, we allocate a tiny buffer and write to it, This isn't the best solution for this particular problem since allocating such a small chunk wastes time, But if we are dealing with bigger chunks, It's a good solution

### Conclusion
Solution 1 has the chance of corruption so it's kind of impractical but if you know you won't need the previous result again then it is fine.
Solution 2 & 3 both offload some work on the callee, namely allocating / freeing memory.

Solution 2 might also need a sanity check for bufSize being sufficient and the pointer not being NULL.
Solution 3 could cause a memory leak if the caller forgets to free the memory.

So it's important to pick the correct solution for the problem at hand, in this case, Solution 2 or 3 would be good.

## Pointers Primer
Pointers are simply (64bit integer) **addresses to somewhere in memory**, They can either point to nothing (NULL) or a valid memory address.
Pointers usually are associated with a certain type but since C doesn't have generics, It's commonplace to cast them to `void*` which can then be casted again to any type you wish.

Whenever you want to give a function access to something without giving it a whole copy of it (Nothing wrong with this for small things), you use a pointer.

You can obtain the address of local variables with the `&` operator.

C arrays are contiguous in memory meaning that each element is directly after another so if you know the element size, You can loop through the array with only pointers,
This can be useful if you don't know the size of the array but you know that it terminates in NULL
```c
void example(char** strArray) {
    char* str = strArray;
    while(str != NULL) {
        printf("%s\t",str);
        str += sizeof(char*);
    }
}
```

The biggest difference between a 32bit architecture and 64bit is that in 32bit, the pointers are only 32bits long (4bytes) which limits memory size to 4GB, on 64bit they are double the size so can access as much as 16 exabytes of memory. 

[More on pointers](https://beej.us/blog/data/c-pointers/)

<div class="row">
#TABLE  Type		Bytes
        int			4 
        short		2
        void*		8
        float		4
        double		8
        char		1
		long		8
		llu			8
		size_t		8
		ptrdiff_t	8
#END TABLE
<p>
**NOTE**: Size of integer types tends to vary according to platform
If you need exactly sized integers use `stdint.h`
[manpage](https://man7.org/linux/man-pages/man7/system_data_types.7.html)
</p>
</div>

## Handling Memory
Note: In case of encountering an error like insufficient memory, these functions will return NULL and set `errno`, See the manpage.
<div class="row">
<div>
#### malloc
Get unitialized memory 
</div>
<div>
#### calloc
Get zero initialized memory 
</div>
<div>
#### aligned_alloc
Get uninitialized memory aligned on a given boundry
</div>
</div>

Whenever you wish to resize your given block of memory, `realloc` is used.
[[man:malloc]]

### mmap
This is a linux syscall for mapping pages of memory but it can be useful for certain things like,
Loading a entire file into memory:
```c
int fd = open("passwd", O_RDONLY);
struct stat s;
fstat(fd, &s);
char *buffer = mmap(0, s.st_size, PROT_READ | PROT_WRITE, MAP_PRIVATE, fd, 0);
buffer[s.st_size-1] = '\0';
printf("%s",buffer);
munmap(buffer, s.st_size);
```

Writing to a file:
```c
char *str = "Hello World";
int fd = open("test", O_RDWR | O_CREAT);
ftruncate(fd, strlen(str)+1);
char* buffer = mmap(0, strlen(str)+1, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
memcpy(buffer, str, strlen(str)+1);
msync(buffer, strlen(str)+1, MS_SYNC);
munmap(buffer, strlen(str)+1);
```
[Full example](https://kuafu1994.github.io/MoreOnMemory/shared-memory.html)
[[man:mmap]]

### alloca
This is used to sort of pretend the stack works like the heap and can be used to allocate memory on the stack, The benefit is that it will automatically be freed and it's possible that the memory returned will be faster to access,
But with alloca you can never know if the allocation failed or not since if the allocation causes stack overflow, behaviour is not defined.
[[man:alloca]]

## Leaks
Unfortunatley we aren't always forget and it is all too easy to forget to ever free a block of memory.
This isn't bad when the chunk is small but it's best to try to plug all the **big** leaks you can since it can crash your application or slow it down a lot.

### -fsanitize=address
These days any program compiled with AddressSanitizer (ASAN) should automatically any leaks in it even with line numbers.

```c
int main(void) {
	char* rand = malloc(100);
	rand[99] = '\0';
	printf("%s\n", rand);
	// No free: free(rand);
}
```
when compiled with asan (& debug info) will give
```
=================================================================
==16713==ERROR: LeakSanitizer: detected memory leaks

Direct leak of 100 byte(s) in 1 object(s) allocated from:
    #0 0x29a2cd in malloc (/tmp/e+0x29a2cd)
    #1 0x2c9f21 in main /tmp/e.c:3:15
    #2 0x7fe53f6ead09 in __libc_start_main csu/../csu/libc-start.c:308:16

SUMMARY: AddressSanitizer: 100 byte(s) leaked in 1 allocation(s).
```

### Valgrind
An external tool called valgrind can also be used to find memory leaks
**NOTE**: Asan and valgrind aren't compatible with each other
It can even report other stuff like using uninitialized values etc.

```
$ valgrind --leak-check=full ./e
...
==18045== 100 bytes in 1 blocks are definitely lost in loss record 1 of 1
==18045==    at 0x483877F: malloc (vg_replace_malloc.c:307)
==18045==    by 0x201171: main (e.c:3)
...
```

## Other Documents
Beej's Guide to C: https://beej.us/guide/bgc/html/split/
Beej's Guide to the C stdlib: https://beej.us/guide/bgclr/html/split/
https://www.rfleury.com/p/untangling-lifetimes-the-arena-allocator
