
// 获取最长递增子序列
// 1.动态规划法
function LIS(arr) {
    let n = arr.length;
    let dp = [];
    for (let i = 0; i < n; i++){
        dp[i] = 1;
    }
    for (let i = 1; i < n; i++){
        for (let j = 0; j < i;j++){
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i],dp[j] + 1);
            }
        }
    }
    // console.log(dp);
    return Math.max(...dp);
}

let arr = [5, 9, 3, 5, 3, 7, 11];
console.log(LIS(arr));