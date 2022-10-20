// function foo(){
//     var a = 2;
//     bar();
// }

// function bar(){
//     console.log(this.a);
// }

// foo()

// 硬绑定
// function foo(){
//     console.log(this.a)
// }
// const a = {
//     a: 1
// }
// const b = {
//     a: 2
// }
// const c = {
//     a: 3,
//     foo: foo
// }
// foo.call(a)
// foo.call(b)
// const foo1 = c.foo;
// foo1();

// 箭头函数 this 无法被修改
// const foo = () => {
//     console.log(this.a)
// }
// const a = {
//     a: 1
// }
// const b = {
//     a: 2
// }
// const c = {
//     a: 3,
//     foo: foo
// }
// foo.call(a)
// foo.call(b)
// c.foo();

function foo(){
    console.log(this)
}
new foo();