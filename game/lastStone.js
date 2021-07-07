// 一堆石子，A，B轮流拿取，每人最多拿3个，最少拿1个，
// 谁拿到最后一个石子，谁就被判负？

// 使用递归的方法
// 获取A、B两玩家谁会胜出
function winner_dfs(count) {
    var dfs = (count) => {
        if (count == 1) {
            return false;
        }
        let a1 = true;
        let a2 = true;
        let a3 = true;
        if (count > 1) {
            a1 = dfs(count - 1);
        }
        if (count > 2) {
            a2 = dfs(count - 2);
        }
        if (count > 3) {
            a3 = dfs(count - 3);
        }
        return !(a1 && a2 && a3);
    }
    return dfs(count);
}
// 使用递归+备忘录的方法
// 获取A、B两玩家谁会胜出
function winner_memo(count) {
    // A在不同count下胜负值备忘录，胜为true,败为false
    let memo = new Array(count+1);
    var dfs = (count,i) => {
        if (count == 1) {
            memo[count] = false;
            return false;
        }
        if (memo[count]) {
            return memo[count];
        }
        let a1 = true;
        let a2 = true;
        let a3 = true;
        if (count > 1) {
            a1 = dfs(count - 1);
        }
        if (count > 2) {
            a2 = dfs(count - 2);
        }
        if (count > 3) {
            a3 = dfs(count - 3);
        }
        // 只要三种情况中任何一个为false,
        // 则当前A肯定胜出
        memo[count] = !(a1 && a2 && a3);
        return memo[count];
    }
    const result = dfs(count);
    console.log(memo);
    return result;
}

// A,B两个玩家分别从两边拿取分数
// 最后看谁的分数最大
function winner_dp(count) {
    let dp = new Array(count + 1);
    dp[1] = false;
    if (count > 1) {
        dp[2] = true;
    }
    if (count > 2) {
        dp[3] = true;
    }
    for (let i = 4; i <= count; i++){
        dp[i] = !(dp[i - 1] && dp[i - 2] && dp[i - 3]);
    }
    console.log(dp);
    return dp[count];
}

const count = 9;
console.log(winner_dfs(count));
console.log(winner_memo(count));
console.log(winner_dp(count));