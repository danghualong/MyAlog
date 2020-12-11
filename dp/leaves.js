var minimumOperations = function(leaves) {
    // let n=leaves.length;
    // let dp=new Array(n);
    // for(let i=0;i<n;i++){
    //     dp[i]=new Array(3).fill(0);
    // }
    // dp[0][0]=leaves[0]=='r'?0:1;
    // dp[0][1]=Infinity;
    // dp[0][2]=Infinity;
    // for(let i=1;i<n;i++){
    //     dp[i][0]=dp[i-1][0]+(leaves[i]=='y'?1:0);
    //     dp[i][1]=Math.min(dp[i-1][0],dp[i-1][1])+(leaves[i]=='r'?1:0);
    //     dp[i][2]=Math.min(dp[i-1][1],dp[i-1][2])+(leaves[i]=='y'?1:0);
    // }
    // console.log(dp);
    // return dp[n-1][2];


    let n = leaves.length;
    // 初始状态不可能为 1, 2，设置为 Infinity
    var dp = [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity];

    for (var i = 1; i < n; i++) {
        var isRed = leaves[i] === 'r';
        dp = [
        dp[0] + (isRed ? 0 : 1),
        Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
        Math.min(dp[1], dp[2]) + (isRed ? 0 : 1),
        ];
    }

    return dp[2];
};

let leaves = "yry";
let result=minimumOperations(leaves);
console.log(result);