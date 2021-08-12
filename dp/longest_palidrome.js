let util = require("../arrUtil");
//返回最长的回文字符
function getLongestPanlidrome(txt) {
    if (!txt || txt.length == 0) {
        return 0;
    }
    let n = txt.length;
    // 状态代表 从i到j的回文串最大长度
    let dp = util.matrix(n, n);
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            //当前值坐标(j,i+j+1)，即dp[j][i+j+1]
            let leftVal = dp[j][i + j];
            let downVal = dp[j + 1][i + j + 1];
            // 当首尾两个值一样，则需要比较3种情况
            if (txt[j] === txt[i + j + 1]) {
                // 当j+1>i+j时，即i==0时，
                // 说明当前序列只包含2个一样的元素
                if (i == 0) {
                    dp[j][i + j + 1] = Math.max(leftVal, downVal, 2);
                } else {
                    dp[j][i + j + 1] = Math.max(leftVal, downVal, dp[j + 1][i + j] + 2);
                }
            } else { // 当首尾两个值不一样，则只需要比较2种情况
                dp[j][i + j + 1] = Math.max(leftVal, downVal);
            }
        }
    }
    //console.log(dp);
    return dp[0][n - 1];
}

let txt = 'bbbbb';
let result = getLongestPanlidrome(txt);
console.log(result);
