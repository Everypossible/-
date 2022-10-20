var maxProfit = function(prices) {
    const n = prices.length;
    // const dp = new Array(n);
    // for(let i = 0; i < n; i++){
    //     dp[i] = [0, 0];
    // }
    // for(let i = 0; i < n; i++){
    //     if(i === 0){
    //         dp[0][0] = 0;
    //         dp[0][1] = -prices[i];
    //         continue        
    //     }
    //     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    //     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    // }
    let dp_0 = 0;
    let dp_1 = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        const temp = dp_0;
        dp_0 = Math.max(dp_0, dp_1 + prices[i]);
        dp_1 = Math.max(dp_1, temp - prices[i]);
    }
    // return dp[n - 1][0];
    return dp_0;
};