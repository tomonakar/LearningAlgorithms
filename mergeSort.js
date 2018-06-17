function mergeSort (arr) {
  // take in a single, unsorted array as a parameter
  // split the array into two halves
  if (arr.length < 2) return arr
  let middleIndex = Math.floor(arr.length / 2)
  let firstHalf = arr.slice(0, middleIndex)
  let secondHalf = arr.slice(middleIndex)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}


function merge (array1, array2) {
  // take in two sorted arrays as parameters
  // merges those sorted arrays into one sorted array
  // returns one sorted array
  let result = []
  while (array1.length && array2.length) {
    let minElem
    if (array1[0] < array2[0]) minElem = array1.shift()
    else minElem = array2.shift()
    result.push(minElem)
  }

  if (array1.length) result = result.concat(array1)
  else result = result.concat(array2)
  return result
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]))
