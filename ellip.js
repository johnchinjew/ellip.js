function ellip(s, numCharsKept, fillStr='...') {
  return s.length > numCharsKept ? s.substring(0, numCharsKept) + fillStr : s
}

function ellipfront(s, numCharsKept, fillStr='...') {
  const l = s.length
  return l > numCharsKept ? fillStr + s.substring(l - numCharsKept, l) : s
}

function ellipmiddle(s, numCharsKept, fillStr='...') {
  const l = s.length
  const i = numCharsKept * .5
  return l > numCharsKept ? s.substring(0, Math.ceil(i)) + fillStr
                          + s.substring(l - Math.floor(i), l)
                          : s
}

// Usage
// console.log(ellip("abcxyz", 1)      ) // a...
// console.log(ellip("abcxyz", 6)      ) // abcxyz
// console.log(ellipfront("abcxyz", 3) ) // ...xyz
// console.log(ellipmiddle("abcxyz", 2)) // a...z
// console.log(ellip("abcxyz", 1, '**')) // a**
