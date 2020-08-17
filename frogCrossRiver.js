let util=require("./util");

var crossOver=function(nums){
    if(nums.length==1){
        return true;
    }
    if(nums.length==2){
        return nums[1]==1;
    }
    let dp=new Array(nums.length);
    for(let i=0;i<dp.length;i++){
        dp[i]=[];
    }
    dp[0]=[0];
    dp[1]=[1];
    for(let i=2;i<nums.length;i++){
        if(dp[i-1].length==0){
            return false;
        }
        for(let j=0;j<dp[i-1].length;j++){
            let step=dp[i-1][j];
            for(let k=0;k<3;k++){
                if(step+k-1<=0){
                    continue;
                }else{
                    let index=util.bs(nums,step+k-1+nums[i-1]);
                    if(index>-1){
                        dp[index].push(step+k-1);
                    }
                }
            }
        }
    }
    return dp[nums.length-1].length>0;
};

let nums=[0,1,3,5,6,8,12,17];
let result=crossOver(nums);
console.log(result);