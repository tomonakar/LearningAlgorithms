function reveseArrayInPlace(arr) {
  arr.forEach((item, index)=> {
    arr.unshift(arr.splice(index,1)[0]
  })
  return arr
}

console.log(reveseArrayInPlace([1,2,3,4,5]))
