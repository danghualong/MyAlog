let { sort } = require("../sorter/heap");

// 从长度为n的数组中，只取k个元素的所有组合
// C(n,k)=
var combine = function (items, k) {
    let result = [];
    let t = Number.MAX_VALUE;
    var backtrack = (i, arr) => {
        if (arr.length == k) {
            result.push(arr.slice());
            return;
        }
        for (let j = i; j < items.length; j++) {
            if (t == items[j]) {
                continue;
            }
            t = Number.MAX_VALUE;
            arr.push(items[j]);
            backtrack(j + 1, arr);
            t = arr.pop();
        }
    }
    backtrack(0, []);
    return result;
};

//一个数组的所有组合(如果不考虑重复有2^n种)
var combine2 = function (items) {
    let result = [];
    let t = Number.MAX_VALUE;
    var backtrack = (k, arr) => {
        if (k >= items.length) {
            if (arr.length > 0) {
                result.push(arr.slice());
            }
            return;
        }
        // 当上次从arr中出栈的数与当前的数相等
        // 不需要将该数再次压入栈中，以免造成重复
        if (t != items[k]) {
            // 入栈之前，重置t值
            t = Number.MAX_VALUE;
            arr.push(items[k]);
            backtrack(k + 1, arr);
            // 记住最后一次出栈的值
            t = arr.pop();
        }
        backtrack(k + 1, arr);
    }
    backtrack(0, []);
    return result;
};

let n = 4;
let vector = new Array();
for (let i = 1; i <= n; i++) {
    vector.push(i);
}
vector[0] = 3;
sort(vector);
console.log(vector);
let k = 2;
let result = combine(vector, k);
console.log(result);


let result2 = combine2(vector);
console.log(result2);