function reveseArrayInPlace(arr) {
  arr.forEach((item, index)=> {
    arr.unshift(arr.splice(index,1)[0])
  })
  return arr
}

console.log(reveseArrayInPlace([1,2,3,4,5]))


function reveseArrayInPlaceBasic(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i]
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length -1 -i] = tempVar
  }
  return arr
}

console.log(reveseArrayInPlaceBasic([1,2,3,4,5]))
