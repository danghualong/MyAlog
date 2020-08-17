/**
 * 1.最大子数组和
 */
var maxSum=function(nums){
    let dp=new Array(nums.length-1);
    //确定状态dp[i]为前i个元素的最大和
    dp[0]=nums[0];
    let max=nums[0];
    for(let i=1;i<nums.length;i++){
        //状态转移方程：是当前值还是当前值加上一个最大值
        dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
        if(dp[i]>max){
            max=dp[i];
        }
    }
    return max;
};
//状态压缩
var maxSum_zip=function(nums){
    //确定状态dp0为前i个元素的最大和
    dp0=nums[0];
    let max=dp0;
    for(let i=1;i<nums.length;i++){
        //状态转移方程：是当前值还是当前值加前一个最大值
        dp0=Math.max(dp0+nums[i],nums[i]);
        if(dp0>max){
            max=dp0;
        }
    }
    return max;
};

// let nums=[3,-5,2,7,-4,6];
// console.log(maxSum_zip(nums));


/**
 * 2.整数拆分后求乘积最大
 */
var integerBreak=function(n){
    let dp=new Array(n+1);
    //不拆分的情况
    for(let i=1;i<n+1;i++){
        dp[i]=i;
    }
    let max=0;
    for(let i=2;i<=n;i++){
        for(let j=n;j>=i;j--){
            let tmp=0;
            for(let k=1;k<=j-i+1;k++){
                tmp=Math.max(dp[j-k]*k,tmp);
            }
            dp[j]=tmp;
        }
        max=Math.max(dp[n],max);
    }
    return max;
};

// let n=12;
// console.log(integerBreak(n));

/**
 * 3.博弈类取石子数最大值
 * @param {} piles 
 */
var maxPiles=function(piles){
    let n=piles.length;
    //状态为从i到j获取的先手和后手获取的最高分
    let dp=new Array(n);
    for(let i=0;i<n;i++){
        dp[i]=new Array(n);
    }
    for(let i=0;i<n;i++){
        dp[i][i]=[piles[i],0];
    }
    for(let j=1;j<n;j++){
        for(let i=0;i<n-j;i++){
            let oldfir=dp[i][i+j-1][0];
            let newfir=dp[i][i+j-1][1]+piles[i+j];
            if(dp[i+1][i+j][1]+piles[i]>newfir){
                oldfir=dp[i+1][i+j][0];
                newfir=dp[i+1][i+j][1]+piles[i];
            }
            dp[i][i+j]=[newfir,oldfir];
        }
    }
    console.log(dp);
    return dp[0][n-1];
}

// let piles=[1,10,3,7,6];
// let result=maxPiles(piles);
// console.log(result);

/**
 * 4.戳气球
 * @param {} nums 
 */
var maxBalls=function(nums){
    nums.unshift(1);
    nums.push(1);
    let n=nums.length;
    let dp=new Array(n);
    //dp[i][j]为戳破i到j之后的积分
    for(let i=1;i<n-1;i++){
        dp[i]=new Array(n).fill(0);
        dp[i][i]=nums[i]*nums[i-1]*nums[i+1];
    }
    for(let j=2;j<n-1;j++){
        for(let i=1;i<n-j;i++){
            dp[i][i+j-1]=Math.max(dp[i][i+j-2]+nums[i-1]*nums[i+j-1]*nums[i+j],
                dp[i+1][i+j-1]+nums[i-1]*nums[i]*nums[i+j]);
        }
    }
    console.log(dp);
    return dp[1][n-2];
}

// let nums=[3,4,5,2];
// console.log(maxBalls(nums));

