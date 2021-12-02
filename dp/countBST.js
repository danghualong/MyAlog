// 备忘录+递归 实现动态规划效果
var numTrees = function (n) {
    let dict = new Map();
    var count = function (n) {
        if (dict.has(n)) {
            return dict.get(n);
        }
        if (n <= 0) {
            return 1;
        }
        let size = 0;
        for (let i = 1; i <= n; i++) {
            size += count(i - 1) * count(n - i);
        }
        dict.set(n, size);
        return size;
    }
    return count(n);
};
// 动态规划实现
var numTrees_dp = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }
    return dp[n];
}

const N = 8;
console.log(numTrees(N));
console.log(numTrees_dp(N));
