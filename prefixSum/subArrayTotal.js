
function countSubArray(nums, target) {
    let n = nums.length;
    //设置前缀和
    let sums = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++){
        sums[i] += sums[i - 1] + nums[i - 1];
    }
    // console.log(sums);
    let r = 0;
    // 统计每个前缀和出现的次数
    let map = {};
    // 注意：第一个为空的前缀和，默认次数为1,
    // 便于统计从第一个到i的和刚好为target的次数
    map[0] = 1;
    for (let i = 1; i <= n; i++){
        // 添加前缀和
        if (!(sums[i] in map)) {
            map[sums[i]] = 0;
        }
        map[sums[i]]++;
        // 如果sum[i]-sums[j]=target,
        // 则认为(j,i]区间和为target,
        // 将增加出现次数
        if ((sums[i] - target) in map) {
            r += map[(sums[i] - target)];
        }
    }
    // console.log(map);
    return r;
}

let nums = [1, 0, 1, 0, 1];
console.log(countSubArray(nums, 2));