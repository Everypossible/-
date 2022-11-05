import { init } from 'snabbdom/build/init.js'
import { h } from 'snabbdom/build/h.js'
// const snabbdom = require('snabbdom');

// const init = snabbdom.init;
const h = snabbdom.h;

const patch = init([])

// h() 函数主要是用来生成 vnode
// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是标签中的文本内容
let vnode = h('div#container.cls', 'Hello World')
let app = document.querySelector('#app')

// 第一个参数：旧的 VNode，（也可以是真实 DOM 元素，patch 会把他转成 VNode）
// 第二个参数：新的 VNode
// 返回新的 VNode
let oldVnode = patch(app, vnode)

vnode = h('div#container.xxx', 'Hello Snabbdom')
// patch 的作用是对比新旧两个 vnode，将差异更新到真实 DOM 元素上
patch(oldVnode, vnode)