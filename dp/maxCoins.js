var arrUtil = require("../arrUtil");
// 戳气球
var maxCoins = function(nums) {
    let n=nums.length;
    let dp=arrUtil.matrix(n+2,n+2,0);
    nums.unshift(1);
    nums.push(1);
    for(let j=2;j<=n+1;j++){
        for(let i=0;i<=n-j+1;i++){
            let max=0;
            for(let k=i+1;k<i+j;k++){
                let sum=nums[i]*nums[i+j]*nums[k]+dp[i][k]+dp[k][i+j];
                if(max<sum){
                    max=sum;
                }
            }
            dp[i][i+j]=max;
        } 
    }
    console.log(dp);
    return dp[0][n+1];
};

let nums=[3,5,2,4];
console.log(maxCoins(nums));




