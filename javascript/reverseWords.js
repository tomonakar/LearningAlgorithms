function reverseWords(string) {
  const wordsArr = string.split(' ')
  let reversedWordsArr = []

  wordsArr.forEach(word => {
    let reversedWords = ''
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWords += word[i]
    }
    reversedWordsArr.push(reversedWords)
  })

  return reversedWordsArr.join(' ')
}

console.log(reverseWords('hello again'))
