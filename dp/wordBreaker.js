// 字符是否可以正确分解
var wordBreaks=function(s,wordDict){
    let set=new Set(wordDict);
    let dp=new Array(s.length+1).fill(false);
    dp[0]=true;
    for(let i=1;i<dp.length;i++){
        for(let j=0;j<i;j++){
            let word=s.substring(j,i);
            if(set.has(word)){
                dp[i]=dp[j];
                break;
            }
        }
    }
    return dp;
}

let s='catsanddog';
let wordDict=['cat','sand','cats','dog'];
console.log(wordBreaks(s,wordDict));