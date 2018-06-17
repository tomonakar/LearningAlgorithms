function twoSum(numArray, sum) {
  let pairs = []
  let hashtable = []

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i]
    let counterpart = sum - currNum

    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ])
    }
    hashtable.push(currNum)
  }

  return pairs
}

console.log(twoSum([2,2,3,1,2,4,5],5))


const twoSums = (arr, targetSum) => {
 let pairs = [];
 let hashTable = {};

 arr.forEach(num => {
   let counterpart = targetSum - num
   if (counterpart in hashTable) {
     pairs.push([num, counterpart])
   }
 hashTable[num] = true;
})
 return pairs
}

console.log(twoSums([2,2,3,1,2,4,5],5))
