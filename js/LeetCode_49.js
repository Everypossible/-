/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Map();
    for(let s of strs){
        let count = new Array(26).fill(0);
        for(let c of s){
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        let index = "";
        for(let i = 0; i < count.length; i++){
            if(count[i] !== 0){
                for(let j = 0; j < count[i]; j++){
                    index = index + i;
                }
            }
        }
        if(index == "") continue; 
        map.has(index) ? map.set(map.get(index).push(s)) : map.set(index, [s]);
        
        // map.has(count) ? map.set(map.get(count).push(s)) : map.set(count, [s]);
    }
    console.log(map);
    console.log([...map.values()].filter(item => item !== undefined));
    return [...map.values()];
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);