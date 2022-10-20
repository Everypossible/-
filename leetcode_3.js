var minWindow = function(s, t) {
    const need = new Map();
    const window = new Map();
    // 把需要的目标字符串 s 拆成每个字母放入 need
    for(let i = 0; i < t.length; i++){
        const c = t.charAt(i);
        setMap(c, need);
    }
    // 定义滑动使用到的变量
    let left = 0;
    let right = 0;
    let vaild = 0;    // 表示窗口中满足need条件的字符个数，如果valid === need.length，则说明窗口已经包含t中所有字母的种类和数量
    let len = Number.MAX_SAFE_INTEGER;
    let start = 0;
    while(right < s.length){
        // 1、什么时候应该移动right扩大窗口
        // 2、什么时候应该移动left缩小窗口
        // 3、结果应该是在扩大的时候更新还是缩小的时候更新
        let c = s.charAt(right);
        right++;
        if(need.has(c)){
            setMap(c, window);
            if(window.get(c) === need.get(c)){
                vaild++;
            }
        }
        // 判断左侧窗口是否需要收缩
        while(vaild === need.size){
            if(right - left < len){
                start = left;
                len = right - left;
            }
            let d = s.charAt(left);
            left++;
            if(need.has(d)){
                if(window.get(d) === need.get(d)){
                    vaild--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len);
};

var setMap = function(c, map){
    if(map.has(c)){
        map.set(c, map.get(c) + 1);
    } else {
        map.set(c, 0);
    }
}