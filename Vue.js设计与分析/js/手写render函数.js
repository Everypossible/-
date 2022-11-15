// 定义一个虚拟DOM结点
let VNode = {
  tag: "div",
  props: {
    onclick: () => alert("hello woeld"),
  },
  children: "click me",
};

/**
 * @description 定义一个组件（有函数式和对象式两种，以下为函数式。注意若定义为对象式则渲染函数判断条件需要相应修改）
 * @param 
 * @public
 */
const myComponent = function() {
  return {
    tag: "div",
    props: {
      onClick: () => alert("hello"),
    },
    children: "click me",
  };
};

/**
 * @description: 将虚拟DOM渲染成真实DOM
 * @param {vnode: 虚拟节点  container: 挂载到的真实结点}
 * @public
 */
const myMountElement = function (vnode, container) {
  // 生成标签
  let el = document.createElement(vnode.tag);
  // 绑定属性、事件
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // on开头说明是事件
      el.addEventListener(key.substring(2).toLowerCase(), vnode.props[key]);
    }
  }
  if (typeof vnode.children === "string") {
    el.appendChild(document.createTextNode(vnode.children));
  } else if (Array.isArray(vnode.children)) {
    vnode, children.forEach((vnode) => render1(vnode, el));
  }
  container.appendChild(el);
};

/**
 * @description 将组件渲染成真实DOM
 * @param {vnode: 组件  container: 挂载到的真实结点}
 * @public
 */
const myMountComponent = function (vnode, container) {
  // 调用组件函数，获取组件要渲染的内容（虚拟DOM）
  const subtree = vnode.tag();
  myRender(subtree, container);
};

/**
 * @description 渲染器函数
 * @param {vnode: 虚拟节点 / 组件  container: 挂载到的真实结点}
 * @public
 */
const myRender = function (vnode, container) {
  if (typeof vnode.tag === "string") {
    // 说明 vnode 描述的是标签元素
    myMountElement(vnode, container);
  } else if (typeof vnode.tag === "function") {
    // 说明 vnode 描述的是组件元素
    myMountComponent(vnode, container);
  }
};

// 调用render1函数测试
myRender(VNode, document.body);
