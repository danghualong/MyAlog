const model=require("./model");

var createGraph=function(n,edges,weights){
    let nodes=[];
    for(let i=0;i<n;i++){
        nodes.push(new model.GraphNode(i));
    }
    let i=0;
    edges.forEach(p=>{
        nodes[p[0]].children.push([nodes[p[1]],weights[i]]);
        nodes[p[1]].children.push([nodes[p[0]],weights[i]]);
        i++;
    });
    return nodes;
};

module.exports={
    createGraph
};