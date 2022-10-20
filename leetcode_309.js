var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = [0, 0];
    }
    for(let i = 0; i < n; i++){
        if(i === 0){
            dp[0][0] = 0;
            dp[0][1] = -prices[i]
            continue;
        }
        if(i === 1){
            dp[1][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[1][1] = Math.max(dp[i - 1][1], -prices[i]);
            continue;
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
    return dp[n - 1][0];
};