
var tranverse=function(root){
    let result=[];
    var dfs=function(root,result){
        if(root==null){
            return;
        }
        dfs(root.left,result);
        result.push(root.val);
        dfs(root.right,result);
    };
    dfs(root,result);
    return result;
};

var model=require("../model");
var treeUtil=require("../treeUtil");
let root=treeUtil.deserialize([1,null,2,3]);
console.log(root);
let result=tranverse(root);
console.log(result);