// myObject = {
//     a: 3
// }
// Object.defineProperty(myObject, "a", {
//     // value: 2,
//     // writable: true,
//     enumerable: true,
//     configurable: true,
//     get: function(){
//         return 4;
//     }
// })
// myObject.a = 3;
// console.log(myObject)

// setter 和 getter
// let myObject = {
//     get a(){
//         return this._a_;
//     },
//     set a(val){
//         this._a_ = val * 2;
//     }
// }
// myObject.a = 2
// console.log(myObject)

// 给对象一个遍历的定义@@iterator
// let myObject = {
//   a: 2,
//   b: 3,
// };

// Object.defineProperty(myObject, Symbol.iterator, {
//   enumerable: false,
//   configurable: true,
//   writable: false,
//   value: function () {
//     let o = this;
//     let idx = 0;
//     let keys = Object.keys(myObject);
//     return {
//       next: function() {
//         return {
//         //   value: this[keys[idx++]],
//           value: this,
//           done: idx++ > keys.length,
//         // done: true
//         };
//       },
//     };
//   },
// });

// 原型风格
function Foo(name){
  this.name = name;
}
Foo.prototype.myName = function(){
  return this.name;
}
function Bar(name, babel){
  Foo.call(this, name);
  this.babel = babel;
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.myBabel = function(){
  return this.babel
}
var a = new Bar("a", "obj a");
console.log(a.myName())
console.log(a.myBabel());
console.log(a)


for (const item of myObject) {
  console.log(item);
}
