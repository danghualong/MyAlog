// 返回等差子序列数
var numberOfArithmeticSlices = function (nums) {
    let n = nums.length;
    let dp = [];
    dp[0] = {};
    dp[0][0] = 0;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = {};
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j];
            const cnt = dp[j][d] || 0;
            result += cnt;
            dp[i][d] = (dp[i][d] || 0) + cnt + 1;
        }
    }
    //console.log(dp);
    return result;
};

// let nums = [7, 7, 7, 7, 7];
let nums = [2, 4, 6, 8, 10];
console.log(numberOfArithmeticSlices(nums));