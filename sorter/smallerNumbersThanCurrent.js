var smallerNumbersThanCurrent = function(nums) {
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<nums.length;i++){
        min=Math.min(nums[i],min);
        max=Math.max(nums[i],max);
    }
    let counts=new Array(max-min+1).fill(0);
    for(let i=0;i<nums.length;i++){
        counts[nums[i]-min]+=1;
    }
    let tmp=counts[0];
    counts[0]=0;
    for(let i=1;i<counts.length;i++){
        let p=counts[i];
        counts[i]=counts[i-1]+tmp;
        tmp=p;
    }
    let result=new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        result[i]=counts[nums[i]-min];
    } 
    return result;
};


let nums=[8,1,2,2,3];
let result=smallerNumbersThanCurrent(nums);
console.log(result);