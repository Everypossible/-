var maxProfit = function (prices) {
  const n = prices.length;
  // dp[i][j][k]: i: 第i天     j：第i天的交易次数上限    k：是否持有股票
  const dp = new Array(n);
  for(let i = 0; i < n; i++){
    dp[i] = new Array(2).fill(0);
  }
  for (let i = 0; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};
