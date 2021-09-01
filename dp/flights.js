let util = require("../arrUtil");

// （787） 最多经过k站，从src到dst的最便宜航班
var findCheapestPrice = function (n, flights, src, dst, k) {
    const dp = util.matrix(k + 1, n, Number.MAX_VALUE);
    for (let i = 0; i <= k; i++) {
        dp[i][src] = 0;
    }
    let visited = {};
    visited[src] = 1;
    for (let i = 0; i < k + 1; i++) {
        const childVisited = {};
        for (let p = 0; p < flights.length; p++) {
            //目的地还没有出现在visited时
            let tmpSrc = flights[p][0];
            let tmpdest = flights[p][1];
            let tmpPrice = flights[p][2];
            if (visited[tmpSrc] != null) {
                // 目的地没有被重新选中
                if (childVisited[tmpdest] == null) {
                    childVisited[tmpdest] = 1;
                }
                // 先计算没有中转的距离
                if (i == 0) {
                    dp[i][tmpdest] = tmpPrice;
                } else {
                    //如果有中转
                    dp[i][tmpdest] = Math.min(dp[i][tmpdest], tmpPrice + dp[i - 1][tmpSrc]);
                }
            }
        }
        visited = {};
        for (let key in childVisited) {
            visited[key] = childVisited[key];
        }
    }
    let minDist = Number.MAX_VALUE;
    for (let i = 0; i < k + 1; i++) {
        minDist = Math.min(dp[i][dst], minDist);
    }
    return minDist != Number.MAX_VALUE ? minDist : -1;
};

const n = 3;
const edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
const src = 0;
const dst = 2;
const k = 1;

const result = findCheapestPrice(n, edges, src, dst, k);
console.log(result);