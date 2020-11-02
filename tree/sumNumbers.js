var sumNumbers = function(root) {
    //tmp为到当前节点为止之前的加和
    var dfs=function(node,tmp){
        if(node==null){
            return 0;
        }
        tmp=(10*tmp+node.val);
        if(node.left==null && node.right==null){
            return tmp;
        }
        return dfs(node.left,tmp)+dfs(node.right,tmp);
    }
    let result=dfs(root,0);
    return result;
};

var treeUtil=require("../treeUtil");
let nums=[1,null,5,2,7];
let root=treeUtil.deserialize(nums);

let result=sumNumbers(root);
console.log(result);
