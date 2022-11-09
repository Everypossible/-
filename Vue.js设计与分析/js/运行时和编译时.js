// 规定树形结构的数据对象
const obj = {
    tag: 'div',
    children: [
        {tag: 'span', children: "hello world"}
    ]
}
// 实现一个运行时Render函数
function Render(obj, root) {
    const el = document.createElement(obj.tag);
    if(typeof obj.children === "string"){
        const text = document.createTextNode(children);
        el.append(text);
    } else if(obj.children){
        obj.children.forEach(child => {
            Render(child, el);
        });
    }
    root.append(el);
}

// 实现一个编译时的render函数，将HTML标签编译成树形结构的数据对象
const html = `
<div>
    <span>hello world</span>
</div>
`
const obj2 = Compiler(html);
Render(obj2, document.body);

// 注意一个问题：如果将HTML标签直接编译成命令式代码的话就会变成纯编译时框架，
// 不支持任何运行时的内容。但是如果编译成JavaScript的树形对象的话就是编译时+运行时的框架

