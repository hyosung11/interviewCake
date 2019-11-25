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

### Arrays
Arrays have fast lookups (O(1) time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.
