function MinCoinChange(coins) {
  var coins = coins
  var cache = {}
  this.makeChange = function (amount) {
    if (!amount) {
      return []
    }
    if (cache[amount]) {
      return cache[amount]
    }
    var min = [], newMin, newAmount
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i]
      newAmount = amount - coin
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('new Min ' + min + ' for ' + amount)
      }
    }
    return (cache[amount] = min)
  }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36)) // [25, 10, 1]

var minCoinChange = new MinCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6)) // [3, 3]