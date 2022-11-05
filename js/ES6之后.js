// ES13 (ES2022)
// 正则表达式匹配索引
const expr = /a+(?<B>b+)+c/d;
const result = expr.exec("aaabbbc");
console.log(result);

// .at( )
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.at(-1));

// 可访问的 Object.prototype.hasOwnProperty
const x = { foo: "bar" };
const res1 = x.hasOwnProperty("foo");
console.log(res1);
const res2 = Object.hasOwnProperty.call(x, "foo");
console.log(res2);

// Error Cause
async function fetcUserPreferences() {
  try {
    const users = await fetch("//user/preferences").catch((err) => {
      // { cause: err } 使得更简单、标准且易于理解深度嵌套的错误
      throw new Error("Failed to fetch user preferences", { cause: err });
      //   throw new Error(err);
    });
  } catch (err) {
    console.log(err.cause);
  }
}
fetcUserPreferences();

// Class Fields 在类中声明私有字段 这表明 class 关键字不再只是糖语法。
class Foo {
  #iteration = 0;

  increment() {
    this.#iteration++;
  }

  logIteration() {
    console.log(this.#iteration);
  }
}

const x2 = new Foo();

// ❌ Uncaught SyntaxError: Private field '#iteration' must be declared in an enclosing class
// x2.#iteration;

// ✅ works
x2.increment();

// ✅ works
x2.logIteration();

// Class Static Block
let getPrivateField;

class A {
  #privateField;
  constructor(x) {
    this.#privateField = x;
  }
  static {
    // ✅ it can access any private field
    getPrivateField = (a) => a.#privateField;
  }
}

let a = new A("foo");
a = new A("bar");
// ✅ Works, foo is printed
console.log(getPrivateField(a));


// ES12 (ES2021)
// 数字分割符
const num1 = 7_111_233_312
console.log(typeof(num1));

// String.replaceAll
const name = "nikola edisonedison"
const newName = name.replaceAll("edison", "tesla");
console.log(newName);

// 逻辑赋值运算符
let a2 = true;
let b2 = false;
a2 ||= b2;
a2 &&= b2;
console.log(a2);
console.log(b2);
