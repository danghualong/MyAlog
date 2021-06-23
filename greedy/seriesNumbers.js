var isPossible = function (nums) {
    // 初始化数据
    let maxNum = nums[nums.length - 1];
    // buckets 记录每个数值的数量
    let buckets = new Array(maxNum + 1).fill(0);
    // tails记录每个序列结尾值的数量(如 3，4，5 则tails[5]=1)
    let tails = new Array(maxNum + 1).fill(0);
    for (let i = 0; i < nums.length; i++){
        buckets[nums[i]]++;
    }
    // 满足最小条件（3个连续数）序列
    for (let i = 1; i < buckets.length; i++){
        const minVal=Math.min(tails[i-1],buckets[i]);
        tails[i-1]-=minVal;
        tails[i]+=minVal;
        buckets[i]-=minVal;
        if(i < buckets.length-2) {
            let num=Math.min(buckets[i],buckets[i+1],buckets[i+2]);
            buckets[i]-=num;
            buckets[i+1]-=num;
            buckets[i+2]-=num;
            tails[i+2]+=num;
        }
    }
    // 检查buckets中其他未被选中的
    for(let i=1;i<buckets.length;i++){
        if(buckets[i]!=0){
            return false;
        }
    }
    return true;

};

const nums=[1,2,3,3,4,4,5];
let result=isPossible(nums);
console.log(result);