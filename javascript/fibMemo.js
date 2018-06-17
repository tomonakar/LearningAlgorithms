function fibMemo(index, cache) {
  // index: index of nubar in fibonacci sequence
  // cache: an array used as memory

  cache = cache || []

  // base case Algorithm
  if (cache[index]) return cache[index]
  else {
    if (index < 3) return 1
    else {
      cache[index] = fibMemo(index -1, cache) + fibMemo(index - 2, cache)
    }
  }
  console.log('cache', cache);
  return cache[index]
}

console.log(fibMemo(7))


/*
Memoization:
- check to see if number aleady exists in cache
- if number is in cache, use that number
- if number is not in cache, calculate it and put it in cache so it can be used multiple times in future.
*/
