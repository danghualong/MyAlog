//接雨水问题
var rainWater = function (nums) {
    if (nums == null || nums.length < 1) {
        return 0;
    }
    //插入一个哨兵牌
    nums.unshift(Number.MAX_VALUE);
    //单调递减栈
    const stack = [0];
    let total = 0;
    for (let i = 1; i < nums.length; i++) {
        let lastIndex = stack.length - 1;
        // 当前值大于栈顶元素
        while (nums[stack[lastIndex]] < nums[i]) {
            let t = stack.pop();
            lastIndex = stack.length - 1;
            // 排除第一个哨兵元素
            if (stack[lastIndex] != 0) {
                // 类似木桶的最短板长度
                const shortestBoundary = Math.min(nums[stack[lastIndex]], nums[i]);
                // 木桶的跨度
                const span = i - stack[lastIndex] - 1;
                // 桶高*跨度等于接的雨水量
                total += (shortestBoundary - nums[t]) * span;
            }
        }
        stack.push(i);
    }
    return total;
};

let nums = [2, 8, 5, 4, 7, 9, 2, 7];
let result = rainWater(nums.slice(1));
console.log(nums);
console.log("最大雨水量:", result);