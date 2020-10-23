//接雨水问题
var rainWater=function(nums){
    let stack=[];
    let maxHeight=0;
    let s=0;
    for(let i=0;i<nums.length;i++){
        while(stack.length>0){
            if(nums[i]>stack[stack.length-1]){
                let height=stack.pop();
                s+=(maxHeight-height);
                //console.log(height,maxHeight,s);
            }else{
                break;
            }
        }
        stack.push(nums[i]);
        maxHeight=Math.max(maxHeight,nums[i]);
    }
    return s;
};

let nums=[2,8,5,4,7,9,2,7];
let result=rainWater(nums);
console.log(nums);
console.log("最大雨水量:",result);