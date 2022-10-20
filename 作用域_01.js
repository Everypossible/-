// a = 2;
// a = null
// a()
// console.log(a)

// function foo(){
//     function bar(){
//         function baz(){
//             console.log(3);
//         }
//         console.log(2);
//     }
//     console.log(1)
//     function baz(){
//         console.log(4);
//     }
// }
// hhh = foo.bar();
// hhh()

// let a = Object("212");
// a = 1;
// console.log(a)

// (function(){
//     console.log(24323)
// })()

// var a = 2;
// (function IIFE(def){
//     console.log(1);
//     def(window)
//     console.log(4);
// })(function def(global){
//     var a = 3;
//     console.log(a)
//     console.log(global.a);
// });

// for(let i = 1; i <= 5; i++){
//     console.log(i)
//     setTimeout(() => {
//         console.log(i)
//     });
// }
// console.log(i)

// var是否有块作用域
// if(1){
//     var a = 1;
// }
// console.log(a); // 1 --- 说明 var 没有块级作用域

// var 是否有函数作用域
// function foo(){
//     var a = 1;
// }
// console.log(a) // ReferenceError --- 说明 var 有函数作用域

// foo()
// var a = true;
// if(a){
//     var foo = function(){
//         console.log("a");
//     }
// } else {
//     function foo(){
//         console.log("b");
//     }
// }

// for循环 settimeout
// for(let i = 1; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// }

function foo(){
    console.log(a)
}

function bar(){
    var a = 3;
    foo();
}

var a = 2;
bar();