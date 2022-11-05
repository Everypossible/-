var topKFrequent = function(nums, k) {
    const map = new Map();
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const val = nums[i];
        map.set(val, map.has(val) ? map.get(val) + 1 : 1);
    }
    let ans = [];
    map.forEach((val, key) => {
        console.log(typeof ans[val]);
        if(typeof ans[val] !== "object"){
            ans[val] = [];
        }
        ans[val].push(key);
    });
    console.log(map);
    console.log(ans);
    let res = [];
    for(let i = ans.length - 1; i >= 0; i--){
        if(k <= 0) return res;
        if(ans[i] && ans[i].length > 0) {
            for(let j = 0; j < ans[i].length; j++){
                res.push(ans[i][j]);
                k--;
                if(k <= 0) return res;
            }
        }
    }
    return res;
};
topKFrequent([1,2], 2);