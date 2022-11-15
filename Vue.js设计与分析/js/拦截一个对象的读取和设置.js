// // 存储副作用函数的桶
// const bucket = new Set();
// // 定义原始数据
// const data = {text: "hello world"};
// // 设置代理
// const obj = new Proxy(data, {
//     // 拦截读取操作
//     get(target, key){
//         // 将副作用函数存入桶中
//         bucket.add(activeEffect);
//         // 返回属性值
//         return target[key];
//     },
//     // 拦截设置操作
//     set(target, key, newVal) {
//         target[key] = newVal;
//         // 从桶中取出副作用函数执行
//         bucket.forEach((fn) => fn());
//         // 返回true代表执行成功
//         return true;
//     }
// });

// // 副作用函数硬绑定
// // // 副作用函数
// // function effect(){
// //     document.body.innerText = obj.text;
// // }
// // // 执行副作用函数，触发对数据的读取操作
// // effect();
// // // 1秒后修改响应式数据
// // setTimeout(() => {
// //     obj.text = "hello, vue3";
// // }, 1000);

// // 副作用函数灵活绑定
// // 用一个全局变量存储被注册的副作用函数
// let activeEffect;
// function effect(fn){
//     activeEffect = fn;
//     fn();
// }
// effect(
//     () => {
//         document.body.innerText = obj.text;
//     }
// );

// 定义一个全局变量存储副作用函数
let activeEffect;
function effect(fn) {
    activeEffect = fn;
    fn();
}
effect(() => {
    document.body.innerText = obj.text;
});

// 存储副作用函数的桶
const bucket = new WeakMap();

// 定义原始数据
const data = { text: "hello world" };

// 封装 将副作用函数放入桶中
function track(target, key) {
    // 没有activeEffect，直接return
    if (!activeEffect) return;
    // 根据target从桶中取出depsMap,它也是一个Map类型（key -> effects）
    let depsMap = bucket.get(target);
    // 如果不存在depsMap, 如果不存在depsMap, 那么新建一个Map与它相联
    if (!depsMap) bucket.set(target, (depsMap = new Map()));
    // 再根据 key 从当前 depsMap 中取出 deps, 它是一个Set类型
    // 存储着当前 key 对应的 effects
    let deps = depsMap.get(key);
    if (!deps) depsMap.set(key, (deps = new Set()));
    // 最后将当前的副作用函数添加到桶里
    deps.add(activeEffect);
}

// 封装 将相关的副作用函数从桶中取出执行
function trigger(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    const effects = depsMap.get(key);
    effects && effects.forEach((fn) => fn());
}

// Proxy实现操作拦截
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key);
        return target[key];
    },
    set(target, key, newVal) {
        target[key] = newVal;
        trigger(target, key);
        return true;
    },
});
