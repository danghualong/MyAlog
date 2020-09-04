var graphUtil= require("../graphUtil");

var maxPossibility=function(n,edges,poss,start,end){
    let nodes=graphUtil.createGraph(n,edges,poss);
    let dp=new Array(n).fill(0);
    let visited=new Array(n).fill(false);
    //起始点先选中，概率是1
    dp[start]=1;
    visited[start]=true;
    let curIndex=start;
    let selectedSize=1;
    while(selectedSize<n){
        //松弛其他节点概率
        nodes[curIndex].children.forEach(p=>{
            dp[p[0].val]=Math.max(dp[p[0].val],dp[curIndex]*p[1]);
        });
        //选择最大节点值
        let maxP=-1;
        let maxIndex=-1;
        for(let i=0;i<n;i++){
            if(!visited[i]){
                if(dp[i]>maxP){
                    maxP=dp[i];
                    maxIndex=i;
                }
            }
        }
        //最大值为终节点即可退出
        if(maxIndex==end){
            break;
        }
        //将最大值节点作为新的起始点
        visited[maxIndex]=true;
        curIndex=maxIndex;
        selectedSize++;
    }
    return dp[end];
};
//shortest path fastest 
//rq. no negative edge
var maxPossibility_spfa=(n,edges,poss,start,end)=>{
    let graph=graphUtil.createGraph(n,edges,poss);
    let queue=[];
    let scores=new Array(graph.length).fill(0);
    scores[start]=1;
    queue.push(start);
    while(queue.length>0){
        let idx=queue.shift();
        for(let node of graph[idx].children){
            if(scores[node[0].val]<scores[idx]*node[1]){
                scores[node[0].val]=scores[idx]*node[1];
                queue.push(node[0].val);
            }
        }
    }
    console.log(scores);
    return scores[end];
};

let n=4;
let edges=[[0,1],[0,3],[2,1],[0,2]];
let poss=[0.2,0.3,0.4,0.8];
let result=maxPossibility_spfa(n,edges,poss,0,1);
console.log(result);

