# ellip.js
> 3 neat-o functions that'll truncate your strings with ellipses.

## Usage
Extending String.prototype:
```
"abcxyz".ellip(1)       // a...
"abcxyz".ellipfront(3)  // ...xyz
"abcxyz".ellipmiddle(2) // a...z
"abcxyz".ellip(1, '**') // a**
```
Or, just pure functions:
```
ellip("abcxyz", 1)       // a...
ellipfront("abcxyz", 3)  // ...xyz
ellipmiddle("abcxyz", 2) // a...z
ellip("abcxyz", 1, '**') // a**
```
