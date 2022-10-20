// ES6之前的继承
function Foo(a) {
    this.a = 1;
}
function Bar(b) {
    this.b = b;
    Foo.call(this);
}
Bar.prototype = Object.create(Foo.prototype);
let bar = new Bar(2);
console.log(bar.a)
console.log(bar.b)

// ES6以后
class Foo2 {
    constructor(){
        this.a = 1;
    }
}
class Bar2 extends Foo2 {
    constructor(){
        super();
        this.b = 2;
    }
}
let bar2 = new Bar2();
console.log(bar2.a)
console.log(bar2.b)