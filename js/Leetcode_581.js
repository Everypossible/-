var findUnsortedSubarray = function(nums) {
    const n = nums.length;
    let mid = Math.floor(n / 2);
    let left = mid, right = mid;
    let i = left, j = right;
    let min = nums[mid], max = nums[mid];
    // console.log(i);
    // console.log(j);
    while(i >= 0 || j <= n - 1){
        if(i >= 0){
            if(nums[i] >= min){
                left = i;
            }
            min = Math.min(nums[i], min);
            console.log(left);
            i--;
        }
        if(j <= n - 1){
            if(nums[j] <= max){
                right = j;
            }
            max = Math.max(max, nums[j]);
            console.log(right);
            j++;
        }
    }
    console.log("daan", right - left + 1);
    return right - left + 1;
};

findUnsortedSubarray([2,6,4,8,10,9,15]);