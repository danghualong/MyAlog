// 利用2个鸡蛋，测试在n层高楼中，
// 使用最少次数计算出刚好摔碎的楼层。
function throwEgg(n) {
    const c = 2;
    let minTimes = Number.MAX_VALUE;
    // dp[i][j] 为i个鸡蛋情况下,
    // 共有j楼需要测量的最少次数
    let dp = new Array(c);
    for (let i = 0; i < c; i++) {
        dp[i] = new Array(n + 1);
        dp[i][1] = 1;
        dp[i][0] = 0;
    }
    // i=0,即只有一个蛋的情况下
    for (let j = 0; j < n; j++) {
        dp[0][j + 1] = (j + 1);
    }
    for (let j = 2; j <= n; j++) {
        // 总层数为j时，至少需要多少次能找到结果
        var tmpMax = Number.MAX_VALUE;
        for (let k = 1; k < j; k++) {
            //从第k层开始往下摔
            // 第一个被摔碎情况下
            const t1 = 1 + dp[0][k - 1];
            // 第一个没有摔碎的情况下
            const t2 = 1 + dp[1][j - k];
            // 取以上两种情况的最坏情况，即其中的最大值
            const t3 = Math.max(t1, t2);
            // 取每层开始往下摔的次数的最小值，即至少需要多少次
            tmpMax = Math.min(tmpMax, t3);
        }
        dp[1][j] = tmpMax;
    }
    //console.log(dp[1]);
    return dp[1][n];
}

times = throwEgg(50);
console.log("times:", times);