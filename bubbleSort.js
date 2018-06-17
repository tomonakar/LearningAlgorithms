function bubbleSort(array) {
  // return array, sotted with bubble sort
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++)  {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(bubbleSort([20,20,31,56, 1,12,12]))
