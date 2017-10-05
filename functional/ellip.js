function ellip(s, numCharsKept, fillStr='...') {
  return s.substring(0, numCharsKept) + fillStr
}

function ellipfront(s, numCharsKept, fillStr='...') {
  const l = s.length
  return fillStr + s.substring(l - numCharsKept, l)
}

function ellipmiddle(s, numCharsKept, fillStr='...') {
  const l = s.length
  const i = numCharsKept * .5
  return s.substring(0, Math.ceil(i))
    + fillStr
    + s.substring(l - Math.floor(i), l)
}
