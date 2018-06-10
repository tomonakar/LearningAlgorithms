function caesarCipher(str, num) {
  num = num % 26
  const lowerCaseString  = str.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let newString = ''

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentletter = lowerCaseString[i]
    if (currentletter === ' ') {
      newString += currentletter
      continue
    }
    let currentIndex = alphabet.indexOf(currentletter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = 26 + newIndex
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    }
    else newString += alphabet[newIndex]
  }
  return newString
}

console.log(caesarCipher('Big car', -16))
console.log(caesarCipher('Lsq mkb', +16))
