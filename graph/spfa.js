var graphUtil= require("../graphUtil");

var spfa=(graph,start,end)=>{
    let queue=[];
    let scores=new Array(graph.length).fill(Infinity);
    scores[start]=0;
    queue.push(start);
    while(queue.length>0){
        let idx=queue.shift();
        for(let node of graph[idx].children){
            if(scores[node[0].val]>scores[idx]+node[1]){
                scores[node[0].val]=scores[idx]+node[1];
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
let graph=graphUtil.createGraph(n,edges,poss);
let result=spfa_poss(graph,0,1);
console.log(result);


// let n=5;
// let edges=[[0,1],[0,3],[1,2],[1,4],[2,3],[3,4],[2,4]];
// let weights=[1,5,3,6,3,2,3];
// let graph=graphUtil.createGraph(n,edges,weights);
// let result=spfa(graph,0,4);
// console.log(result);
