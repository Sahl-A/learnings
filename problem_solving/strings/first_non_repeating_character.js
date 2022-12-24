function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string; i++) {
    const char = string[i]
    if (!isRepeated(string.slice(0, i) + string.slice(i+1), char)) {
      return i
    }
  }
  return -1;

  function isRepeated(string, char) {
    for (let currChar of string) {
      if (currChar === char) return true
    }
    return false 
  }
}

firstNonRepeatingCharacter('ababac')