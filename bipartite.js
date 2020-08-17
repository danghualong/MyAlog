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

let graph= [[1,2,3], [0,2], [0,1,3], [0,2]];
let result=isBipartite(graph);
console.log(result);

