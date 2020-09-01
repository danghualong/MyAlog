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

let piles=[1,10,3,7,6];
let result=maxPiles(piles);
console.log(result);

