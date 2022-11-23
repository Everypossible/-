function createRenderer(options) {
    // 通过 options 得到操作 DOM 的 API
    const {
        createElement, insert, setElementText
    } = options;
    // patch承载着最重要的渲染功能（n1: 旧node, n2: 新node, container: 挂载点）
    function patch(n1, n2, container) {
        if (!n1) {
            // 如果不存在旧node,则直接挂载
            mountElement(n2, container);
        } else {
            // n1存在, 意味着打补丁
        }
    }

    function mountElement(vnode, container) {
        // 创建dom元素
        const el = createElement(vnode.type);
        if (typeof vnode.children === "string") {
            // 如果子结点是字符串，代表元素具有文本结点
            setElementText(el, vnode.children);
        }
        // 将元素添加到容器中
        insert(el, container);
    }
    function render(vnode, container) {
        if (vnode) {
            // 新node存在
            patch(container._vnode, vnode, container);
        } else {
            // 新node不存在，说明是卸载(uncomunt)操作
            container.innerHTML = '';
        }
        // 把 vnode 赋值给 container._vnode, 作为下一次渲染的旧 vnode
        container._vnode = vnode;
    }
    // 服务器渲染相关的函数
    function hydrate() {

    }
    return { render, hydrate }
}
const vnode = {
    type: 'h1',
    children: 'hello'
}
// 使用一个对象模拟挂载点
const container = { type: 'root' }

const renderer = createRenderer({
    // insert: 将结点挂载到容器中
    insert(el, parent, anchor = null) {
        console.log(`设置 ${JSON.stringify(el)} 添加到的: ${JSON.stringify(parent)} 下`);
        parent.children = el;
    },
    // 设置结点文本内容
    setElementText(el, text) {
        console.log(`设置 ${JSON.stringify(el)} 的文本内容为 ${text}`);
        el.textContent = text;
    },
    // 用于创造元素
    createElement(tag){
        return document.createElement(tag);
    }
});
// 首次渲染
renderer.render(vnode, container);