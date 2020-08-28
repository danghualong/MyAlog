var Node=function(val) {
    this.val = val;
    this.neighbors = [];
};
//克隆图
var cloneGraph=function(node){
    if(node==null){
        return null;
    }
    let queue=[node];
    let map=new Map();
    let firstNode=new Node(node.val);
    map.set(node.val,firstNode);
    while(queue.length>0){
        let cur=queue.shift();
        let newNode=map.get(cur.val);
        for(let nb in cur.neighbors){
            let childNode=cur.neighbors[nb]
            if(!map.has(childNode.val)){
                queue.push(childNode);
                map.set(childNode.val,new Node(childNode.val));
            }
            newNode.neighbors.push(map.get(childNode.val));
        }
    }
    return firstNode;
}