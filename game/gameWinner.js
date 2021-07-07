// 有一组数字，A，B分别从两边拿取数字，
// 直到拿取完毕，看谁拿到的数字和最大？

let arrUtil = require("../arrUtil");
// 使用递归的方法
// 获取A、B两玩家谁会胜出
function winner_dfs(nums) {
    var dfs = (nums, left,right) => {
        if (left==right) {
            return nums[left];
        }
        let b1 = nums[left] - dfs(nums, left + 1, right);
        let b2 = nums[right] - dfs(nums, left, right - 1);
        return Math.max(b1, b2);
    }
    return dfs(nums, 0, nums.length - 1);
}
// 使用递归+备忘录的方法
// 获取A、B两玩家谁会胜出
function winner_memo(nums) {
    const n = nums.length;
    let memo = arrUtil.matrix(n, n,Number.MAX_VALUE);
    var dfs = (nums, l,r) => {
        if (l==r) {
            return nums[l];
        }
        if (memo[l][r] != Number.MAX_VALUE) {
            return memo[l][r];
        }
        let b1 = nums[l] - dfs(nums, l + 1, r);
        let b2 = nums[r] - dfs(nums, l, r - 1);
        // 将结果添加到备忘录
        memo[l][r] = Math.max(b1, b2);
        return memo[l][r];
    }
    return dfs(nums, 0, nums.length - 1);
}

// A,B两个玩家分别从两边拿取分数
// 最后看谁的分数最大
function winner_dp(nums) {
    const n = nums.length;
    let dp = arrUtil.matrix(n,n);
    for (let i = 0; i < n; i++){
        dp[i][i] = nums[i];
    }
    for (let i = 1; i < n; i++){
        for (let j = 0; j < n - i; j++){
            dp[j][j + i] = Math.max(nums[j + i]-dp[j][j + i - 1] , nums[j]-dp[j + 1][j + i] );
        }
    }
    // console.log(dp);
    return dp[0][n - 1];
}


let nums = [3, 8, 12, 6, 4];
console.log(winner_dfs(nums));
console.log(winner_memo(nums));
console.log(winner_dp(nums));