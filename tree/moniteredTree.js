
var minCameraCover = function(root) {
    var dfs=(node)=>{
        if(node==null){
            return 1;
        }
        let sizeL=dfs(node.left);
        let sizeR=dfs(node.right);
        //当前节点未被监控，但左右孩子被监控
        if(sizeL==1 && sizeR==1){
            return 0;
        }
        //左右孩子至少放一个放相机
        if(sizeL+sizeR>2){
            return 1;
        }
        //当前节点放一个相机
        size++;
        return 2;
    };
    let size=0;
    if(dfs(root)==0){
        size++;
    }
    return size;
    
    
};

var model=require("../model");
var treeUtil=require("../treeUtil");

let nums=[0,0,null,0,null,0,null,null,0];
let root=treeUtil.deserialize(nums);
let size=minCameraCover(root);
console.log(size);
