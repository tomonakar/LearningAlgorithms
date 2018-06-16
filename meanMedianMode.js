// mean: 平均値
// median: 中央値
// Mode: 最頻値

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  let sum = 0

  array.forEach(num => {
    sum += num
  })

  let mean = sum / array.length
  return mean
}

function getMedian(array) {
  // 比較関数が無いと文字列としてソートされる
  // sortについての参考： https://goma.pw/article/2015-11-18-0/
  array.sort(function(a, b) {return a - b})
  let median

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)]
  }
  else {
    let mid1 = array[(array.length / 2) - 1]
    let mid2 = array[array.length / 2]
    median = (mid1 + mid2) / 2
  }
  return median

}

function getMode(array) {
  console.log('array', array);
  var modeObj = {}

  // create mode object
  array.forEach(num => {
    console.log('num', num);
    console.log('modeObj[num]', modeObj[num]);
    if (!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
    console.log('modeObj[num]', modeObj[num]);
  })
  console.log('modeObj', modeObj);

  // create array of mode/s
  let maxFrequency = 0
  let modes = []
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [ num ]
      maxFrequency = modeObj[num]
    }
    else if (modeObj[num] === maxFrequency) modes.push(num)
  }

  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = []

  return modes
}

console.log(meanMedianMode([100,100,100,100, 2,2,2,2]))
