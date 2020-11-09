
//数据集是否可以分割成和相等的两个子集
var canPartition = function(nums) {
    let half=0;
    for(let i=0;i<nums.length;i++){
        half+=nums[i];
    }
    if(half%2!=0){
        return false;
    }
    half=half/2;
    //动态规划求解（类似于0-1背包问题）
    let dp=new Array(half+1).fill(0);
    for(let i=0;i<nums.length;i++){
        //倒序遍历防止本次迭代时，使用已经变更的值
        for(let j=half;j>0;j--){
            if(j>=nums[i]){
                dp[j]=Math.max(dp[j-nums[i]]+nums[i],dp[j]);
            }
        }
        if(dp[half]==half){
            return true;
        }
    }
    return false;
};

let nums=[1,2,5];
let result=canPartition(nums);
console.log(result);