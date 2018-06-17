// function maxStockProfit (pricesArr) {
//   let maxProfit = -1;
//   let buyPrice = 0;
//   let sellPrice = 0;
//
//   let changeBuyPrice = true;
//
//   for (let i = 0; i < pricesArr.length; i++) {
//     if (changeBuyPrice) buyPrice = pricesArr[i];
//     sellPrice = pricesArr[i + 1];
//
//     if (sellPrice < buyPrice) {
//       changeBuyPrice = true;
//     }
//     else {
//       let tempProfit = sellPrice - buyPrice;
//       if (tempProfit > maxProfit) maxProfit = tempProfit;
//       changeBuyPrice = false;
//     }
//   }
//
//   return maxProfit;
// }
//
// console.log(maxStockProfit([10,8,99,5,1,2,3]))


function maxStockProfit2(prices) {
  const buyPrice = Math.min(...prices)
  const buyIndex = prices.indexOf(buyPrice)
  const sellPrice = Math.max(...prices)

  return sellPrice >= buyPrice ? sellPrice - buyPrice : -1
}

console.log(maxStockProfit2([10,8,99,5,1,2,3]))
