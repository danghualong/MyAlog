// 异构词归类
var groupAnagrams = function (strs) {
    let resMap = new Map();
    for (let item of strs) {
        // 统计每个单词的字母频率
        let freqArr = new Array(26).fill(0);
        for (let i = 0; i < item.length; i++){
            freqArr[item[i].charCodeAt() - 97]++;
        }
        // 拼接每个单词的 字母+频率 作为键值
        let key = "";
        for (let i = 0; i < freqArr.length; i++){
            if (freqArr[i] > 0) {
                key += (String.fromCharCode(i + 97) + freqArr[i]);
            }
        }
        // 以key作为键，分类单词
        if (!resMap.has(key)) {
            resMap.set(key, [item]);
        } else {
            resMap.get(key).push(item);
        }
    }
    // 将字典转为数组
    let result = [];
    for (let entry of resMap) {
        result.push(entry[1]);
    }
    return result;
};

let strs=['abc','',''];
let result = groupAnagrams(strs);
console.log(result);