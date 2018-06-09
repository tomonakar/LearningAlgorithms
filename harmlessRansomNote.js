/* What is Big O ?
  Big O Notation is use to test the speed algorithm taskes to finish base on the input size.
  On the next few examples will focus on understanding Big O.
*/

// Constant runtime
// Big O Notation: "O(1)"
function log(array) {
  console.log(array[0])
  console.log(array[1])
}

log([1, 2, 3, 4])
log([1, 2, 3, 4, 5, 6, 7, 8, 9])



// Linear runtime
// Big O Notatin: "O(n)"

function logAll(array) {
  for (var i = 0; i < array,length; i++) {
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4, 5])
logAll([1, 2, 3, 4, 5, 6])
logAll([1, 2, 3, 4, 5, 6, 7])
