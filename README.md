# interviewCake
Preparation and practice for technical interviews

## Big O Notation
1. how quickly runtime grows
2. relative to the input (size of the input expressed as n)
3. as the input get arbitrarily large

N could be the actual input (e.g., a number), or the size of the input (e.g., number of items in an input array).

Drop the constants
Drop the less significant terms
Worst case

Space complexity

Sometimes the constants matter

Beware of premature optimizations

Balance runtime, space, implementation time, maintainability, and readability.

## Data Structures for Coding Interviews
- Random Access Memory
- Binary Numbers
- Fixed-Width Integers
- Arrays
- Strings
- Pointers
- Dynamic Arrays
- Linked Lists
- Hash Tables

### Random Access Memory (RAM)
- variables are stored in RAM, working memory or just memory
- storage is where we keep files
- address: a shelf's number that holds 8 bits
- byte = 8 bits, each shelf has one byte (8 bits) of storage
- processor
- memory controller: reads and writes to and from RAM with direct connection to each shelf of RAM right away
- processor's cache: place where it stores a copy of stuff it's recently read from RAM. much faster to read from cache than from RAM.
- when the processor asks for contents of a given memory address, the memory controller also sends the contents of a handful of nearby memory addresses and the processor puts all of it in the cache.
- reading from sequential memory addresses is faster than jumping around

### Binary Numbers
- computers use the base 2 or binary number system
- the places in binary are sequential powers of 2
- unsigned integers (unsigned = non-negative, whole numbers)
- fractions: store two numbers, the numerator and the denominator
- decimals: two numbers: 1) the number with the decimal point removed, and 2) the position where the decimal point goes (how many digits over from the leftmost digit).
- negative numbers: reserve the leftmost bit for expressing the sign of the number. 0 for positive and 1 for negative.

### Fixed-width Integers
- with 1 byte (8 bits) we can express 256 different numbers
- integer overflow: the number is too big to fit into the memory; in JS this is automatically converted to Infinity if it gets too big.
- now can use 4, 8, 32 or 64 bits to store integers
- Ever created a table in SQL? When you specify that a column will hold integers, you have to specify how many bytes: 1 byte (tinyint), 2 bytes (smallint), 4 bytes (int), or 8 bytes (bigint).
- most integers are fixed-width or fixed-length, which means the number of bits they take up doesn't change. e.g., if the integer is 0 or 193,457 it still takes up the same amount of space in RAM: 64 bits.
- fixed-width integers take up O(1) constant space
- with constant number of bits, most simple operations take O(1) constant time
- fixed width integers are very space and time efficient but values are limited

### Arrays
- RAM is basically an array already
- the elements of an array are numbered via an index
- Arrays have fast lookups (O(1) time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

### Strings
- strings are a series of characters (letters, punctuation, etc.)
- character encoding: the mapping of numbers to characters; e.g., ASCII
- strings are expressed as arrays of 8-bit characters

### Pointers
- pointer-based arrays create a tradeoff because they require less uninterrupted memory and can accommodate elements that aren't the same size, but it's slower because its' not cache-friendly

### Dynamic Arrays
- an array that resizes itself when it runs out of memory space.
- in Java array is static and ArrayList is dynamic
- How a dynamic array works
1. Makes a new, bigger array (usually twice as big)
2. Copies each element from the old array into the new array.
3. Frees up the old array
4. Appends the new item.
- the advantage of dynamic arrays is that you don't have to specify the size ahead of time, but the disadvantage is that some appends can be expensive.

### Linked Lists
- linked list: a series of two-item arrays known as nodes
- first node is called the head and the last node is called the tail
- linked lists have O(1) time appends vs. O(n) for dynamic arrays (worst-case)
- linked lists also have faster prepends O(1) vs. O(n) for dynamic arrays
- linked lists have slower lookups than dynamic arrays

### Hash Tables
- hashing function: the process of translating a key into an array index is an example
- hash collision

## Logarithms
- what power must we raise this base to, in order to get this answer?
- log10(100) = "log base 10 of 100" = 2
- use logarithms to solve for x when x is an exponent
