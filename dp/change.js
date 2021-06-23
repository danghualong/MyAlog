// 凑够零钱n至少需要多少枚硬币
function change(n, vs) {
    let dp=[];
    for(let i=0;i<=n;i++){
        dp[i]=Number.MAX_VALUE;
    }
    dp[0]=0;
    for(let i=1;i<=n;i++){
        for(let j=vs.length-1;j>=0;j--){
            if(i>=vs[j]){
                dp[i]=Math.min(dp[i],dp[i-vs[j]]+1);
            }
        }
    }
    console.log(dp);
    return dp[n];
}
const n = 14;
const vs = [1, 2, 5];
console.log("凑够零钱",n,"至少需要",change(n, vs),"枚硬币");

// 凑够零钱n的所有排列
let change2 = function (n,coins) {
    let result = [];
    let backtrack = (k, arr) => {
        if (k < 0) {
            return;
        }
        if (k == 0) {
            result.push([...arr]);
            return;
        }
        for (let i = 0; i < coins.length; i++){
            arr.push(coins[i]);
            backtrack(k - coins[i], arr);
            arr.pop(coins[i]);
        }
    }
    backtrack(n, []);
    return result;
};
console.log("\n凑够零钱", n, "的所有排列:");
console.log(change2(5, [1, 2, 5]));

// 凑够零钱n的所有组合
let change3 = function (n,coins) {
    let result = [];
    let backtrack = (k, arr,t) => {
        if (k < 0) {
            return;
        }
        if (k == 0) {
            result.push([...arr]);
            return;
        }
        for (let i = t; i < coins.length;i++){
            arr.push(coins[i]);
            // 允许重复使用某一种币
            backtrack(k - coins[i], arr, i);
            // 每次只能使用一个类型的币
            // backtrack(k - coins[i], arr, i+1);
            arr.pop(coins[i]);
        }
    }
    backtrack(n, [], 0);
    return result;
};
console.log("\n凑够零钱", n, "的所有组合:");
console.log(change3(7, [1, 2, 5]));