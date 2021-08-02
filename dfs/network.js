// 单源最短路径(DFS)
var networkDelayTime = function (times, n, k) {
    // 初始化存放结果的哈希表
    let hash = {};
    for (let i = 1; i <= n; i++){
        hash[i] = Number.MAX_VALUE;
    }
    // 初始化邻接表 a->[b,s1]->[c,s2]....
    let hashAdj = {};
    for (let i = 0; i < times.length; i++){
        const t = times[i];
        if (!hashAdj[t[0]]) {
            hashAdj[t[0]] = [];
        }
        hashAdj[t[0]].push([t[1],t[2]]);
    }
    // 深度优先计算到达各个节点的最小值
    let dfs = (tk, hashAdj, hash) => {
        if (!hashAdj[tk]) {
            return;
        }
        const keys = hashAdj[tk];
        for (let i = 0; i < keys.length; i++){
            if (hash[keys[i][0]] <= hash[tk] + keys[i][1]) {
                continue;
            }
            hash[keys[i][0]] =hash[tk] + keys[i][1];
            dfs(keys[i][0], hashAdj, hash);
        }
    }
    // 初始化起始节点的值为0
    hash[k] = 0;
    dfs(k, hashAdj, hash);
    // 计算所有节点的最大值
    let maxNum = -1;
    for (let i = 1; i <= n; i++){
        maxNum = Math.max(hash[i], maxNum);
    }
    return maxNum != Number.MAX_VALUE ? maxNum : -1;
};


let result = networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2);
console.log(result);