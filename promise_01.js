// 在new 一个函数里传入参数的代码是不是立即执行
console.log(1111)
const a = new Promise(function(){
    console.log(2222)
});
console.log(33333)
function foo(bar){
    bar();
}
foo(function(){
    console.log(44444)
});
console.log(5555)
function Baz(bar){
    // bar();
}
new Baz(function(){
    console.log(66666)
});
console.log(777777)