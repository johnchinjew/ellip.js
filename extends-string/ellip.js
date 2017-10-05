Object.assign(String.prototype, {
  ellip(numCharsKept, fillStr='...') {
    return this.substring(0, numCharsKept) + fillStr
  },
  ellipfront(numCharsKept, fillStr='...') {
    const l = this.length
    return fillStr + this.substring(l - numCharsKept, l)
  },
  ellipmiddle(numCharsKept, fillStr='...') {
    const l = this.length
    const i = numCharsKept * .5
    return this.substring(0, Math.ceil(i))
      + fillStr
      + this.substring(l - Math.floor(i), l)
  }
})
