const { GraphNode } = require("./model");

var createGraph=function(n,edges,poss){
    let nodes=[];
    for(let i=0;i<n;i++){
        nodes.push(new GraphNode(i));
    }
    let i=0;
    edges.forEach(p=>{
        nodes[p[0]].children.push([nodes[p[1]],poss[i]]);
        nodes[p[1]].children.push([nodes[p[0]],poss[i]]);
        i++;
    });
    return nodes;
}

var maxPossibility=function(n,edges,poss,start,end){
    let nodes=createGraph(n,edges,poss);
    let dp=new Array(n).fill(0);
    let visited=new Array(n).fill(false);
    dp[start]=1;
    visited[start]=true;
    let selectedIndices=[];
    selectedIndices.push(start);
    while(selectedIndices.length<n){
        let curIndex=selectedIndices[selectedIndices.length-1];
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
        if(maxIndex==end){
            break;
        }
        visited[maxIndex]=true;
        selectedIndices.push(maxIndex);
    }
    return dp[end];
}

// let n=4;
// let edges=[[0,1],[0,3],[2,1],[0,2]];
// let poss=[0.2,0.3,0.4,0.8];
// let result=maxPossibility(n,edges,poss,0,1);
// console.log(result);

