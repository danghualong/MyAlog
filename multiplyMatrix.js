var multiply=function(dimens){
    let n=dimens.length;
    let dp=new Array(n);
    for(let i=0;i<n;i++){
        dp[i]=new Array(n).fill(0);
    }
    for(let i=1;i<n;i++){
        for(let j=0;j<n-i;j++){
            dp[j][j+i]=Math.min(dp[j][j+i-1]+dimens[j][0]*dimens[j+i-1][1]*dimens[j+i][1],
                dp[j+1][j+i]+dimens[j][0]*dimens[j+1][0]*dimens[j+i][1]);
        }
    }
    return dp[0][n-1];
};
let dimens=[[3,5],[5,2],[2,7],[7,3]];
let result=multiply(dimens);
console.log(result);