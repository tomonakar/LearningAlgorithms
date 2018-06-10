function caesarCipher2(str, num) {
  const lowercaseCharPos = 'a'.charCodeAt(0)
  const uppercaseCharPos = 'A'.charCodeAt(0)
  const characters = 26

  let newStr = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/i)) {
      const charCode = str[i].charCodeAt(0)
      const offset = charCode < lowercaseCharPos ? uppercaseCharPos : lowercaseCharPos
      const tempPos = charCode - offset + (num % characters)
      const position = (tempPos + (tempPos < 0 ? characters : 0)) % characters
      newStr += String.fromCharCode(position + offset)
    }
    else newStr += str[i]
  }
  return newStr
}

console.log(caesarCipher2('Big Car', -16))
console.log(caesarCipher2('Lsq Mkb', 16))
