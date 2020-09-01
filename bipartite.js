const {UnionFindSet}=require("./model");
var isBipartite = function(graph) {
    let n=graph.length;
    let indices=new Array(n);
    for(let i=0;i<indices.length;i++){
        indices[i]=i;
    }
    let ufs=new UnionFindSet(indices);
    for(let i=0;i<graph.length;i++){
        for(let j=0;j<graph[i].length;j++){
            let k=graph[i][j];
            if(ufs.isconnected(i,k)){
                return false;
            }
            ufs.union(graph[i][0],k);
        }
    }
    return true;
};
//染色法判断是否二分图
var isBipartite_bfs = function(graph) {
    let n=graph.length;
    let color=new Array(n).fill(0);
    let queue=[];
    for(let j=0;j<n;j++){
        if(color[j]==0){
            queue.push(j);
            color[j]=1;
            while(queue.length>0){
                let k=queue.pop();
                let items=graph[k];
                for(let i=0;i<items.length;i++){
                    let m=items[i];
                    if(color[m]==color[k]){
                        return false;
                    }
                    if(color[m]!=0){
                        continue;
                    }
                    color[m]=-color[k];
                    queue.push(m);
                }
            }
        }
    }
    return true;
};

let graph= [[1,3], [0,2],[1],[0]];
let result=isBipartite(graph);
console.log(result);
result=isBipartite_bfs(graph);
console.log(result);

