// 得到子序列的最小操作次数
function minOperations(target, arr) {
    let m = target.length;
    let n = arr.length;
    let dp = [];
    for (let i = 0; i <= n; i++){
        dp.push(0);
    }
    let nextNum = 0;
    for (let i = 1; i <= m; i++){
        nextNum = i;
        for (let j = 1; j <= n; j++){
            let minNum = Number.MAX_VALUE;
            if (arr[j-1] == target[i-1]) {
                minNum = dp[j - 1];
            } else {
                minNum = dp[j - 1] + 1;
            }
            minNum = Math.min(minNum, nextNum, dp[j] + 1);
            dp[j - 1] = nextNum;
            nextNum = minNum
        }
        dp[n] = nextNum;
        console.log(dp);
    }
    return dp[n];
}



