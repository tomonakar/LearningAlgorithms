/**
* エラトステネスの篩（ふるい） : 指定された整数以下の素数を見つけるアルゴリズム
* https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%A9%E3%83%88%E3%82%B9%E3%83%86%E3%83%8D%E3%82%B9%E3%81%AE%E7%AF%A9
*/

function sieveOfEratosthnes (n) {
  let primes = []
  for (let i = 0; i <= n; i++) {
    primes[i] = true
  }
  primes[0] = false
  primes[1] = false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false
    }
  }

  let result = []
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i)
  }

  return result
}

console.log(sieveOfEratosthnes(200));
