var maxCoins = function (nums) {
    // dp[i][j] = x: 戳破气球i和气球j之间（开区间，不包括i也不包括j）的所有气球，可以获得的最大分数为 x
    const n = nums.length;
    const points = new Array(n + 2).fill(0);
    points[0] = points[n + 1] = 1;
    for(let i = 1; i < n + 1; i++){
        points[i] = nums[i - 1];
    }
    const dp = new Array(n + 2);
    for(let i = 0; i < n + 2; i++){
        dp[i] = new Array(n + 2).fill(0);
    }
    for(let i = n; i >= 0; i--){
        for(j = i + 1; j < n + 2; j++){
            for(let k = i + 1; k < j; k++){
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]);
            }
        }
    }
    return dp[0][n + 1];
  };

const res = maxCoins([3,1,5,8]);
console.log(res)