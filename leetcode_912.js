var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

var mergeSort = function(nums, lo, hi) {
    if(lo === hi) return;
    let mid = Math.floor(lo + (hi - lo) / 2);
    mergeSort(nums, lo, mid);
    mergeSort(nums, mid + 1, hi);
    merge(nums, lo, mid, hi);
}

var merge = function(nums, lo, mid, hi) {
    const temp = [];
    for(let i = lo; i <= hi; i++){
        temp[i] = nums[i];
    }
    for(let p = lo, i = lo, j = mid + 1; p <= hi; p++){
        if(i === mid + 1){
            nums[p] = temp[j++];
        } else if(j === hi + 1){
            nums[p] = temp[i++];
        } else if(temp[i] > temp[j]){
            nums[p] = temp[j++];
        } else {
            nums[p] = temp[i++];
        }
    }
    return;
}

let nums = [5,2,3,1]
sortArray(nums)
console.log(nums)