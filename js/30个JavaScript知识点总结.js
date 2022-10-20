// 数组克隆
const arr1 = [1, 2, 3, 4, 5]
const copyArray1 = arr1.slice(0);
const copyArray2 = Array.from(arr1);
const copyArray3 = [...arr1];
arr1[2] = 6;
console.log(copyArray1);
console.log(copyArray2);
console.log(copyArray3);