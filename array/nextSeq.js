var nextSeq=function(nums){
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            //从之后的所有里 找到大于nums[i-1]的最小值
            let minIndex=Infinity;
            for(let j=nums.length-1;j>=i;j--){
                if(nums[j]>nums[i-1]){
                    if(minIndex==Infinity){
                        minIndex=j;
                    }else{
                        if(nums[j]<nums[minIndex]){
                            minIndex=j;
                        }
                    }
                }
            }
            //交换位置
            let tmp=nums[i-1];
            nums[i-1]=nums[minIndex];
            nums[minIndex]=tmp;
            //排序子数组[i:]
            let tailArr=nums.splice(i)
            tailArr.sort((a,b)=>a-b);
            nums.push(...tailArr);
            return nums;
        }
    }
    return nums.reverse();
}