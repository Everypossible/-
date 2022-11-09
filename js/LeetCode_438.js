var findAnagrams = function(s, p) {
    const m = s.length, n = p.length;
    const map = new Map();
    for(let i = 0; i + n <=  m; i++){
        map.set(i, s.substr(i, n));
    }
    let res = [];
    map.forEach((val, key) => {
        if(isAnagrams(val, p)){
            res.push(key);
        }
    });
    return res;
};

var isAnagrams = function(s, target){
    let count1 = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        count1[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    let count2 = new Array(26).fill(0);
    for(let i = 0; i < target.length; i++){
        count2[target[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for(let i = 0; i < 26; i++){
        if(count1[i] !== count2[i]) return false;
    }
    return true;
}

let s = "cbaebabacd", p = "abc";
findAnagrams(s, p);
s = "abab", p = "ab"
findAnagrams(s, p);