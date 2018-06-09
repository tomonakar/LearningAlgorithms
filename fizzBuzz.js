function fizzBuzz(num) {
  // let i = 0
  // while(i <= num) {
  //   console.log(i)
  //   i++
  // }
  for (var i = 1; i <= num; i++ ) {
    if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz')
    else if (i % 3 === 0 && i % 5 === 0) return console.log('fizzBuzz')
    else console.log(i)
  }
}

fizzBuzz(50)
