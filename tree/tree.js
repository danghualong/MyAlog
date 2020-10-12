var calHeight=function(root){
    if(root==null){
        return 0;
    }
    let leftH=1+calHeight(root.left);
    let rightH=1+calHeight(root.right);
    return Math.max(leftH,rightH);
}

var isBalanceTree=function(root){
    if(root==null){
        return true;
    }
    let leftH=calHeight(root.left);
    let rightH=calHeight(root.right);
    return Math.abs(leftH-rightH)<=1 && isBalanceTree(root.left) &&
    isBalanceTree(root.right);
}

const { TreeNode } = require("../model");
var model=require("../model");
var treeUtil=require("../treeUtil");

let nums=[0,0,null,0,null,0,null,null,0];
let root=treeUtil.deserialize(nums);
let h=calHeight(root);
console.log(h);
console.log(isBalanceTree(root));

nums=[0,0,0,0,0,0,null,0,0,0,0];
root=treeUtil.deserialize(nums);
console.log(calHeight(root));
console.log(isBalanceTree(root));

nums=[3,9,20,null,null,15,7];
root=treeUtil.deserialize(nums);
console.log(calHeight(root));
console.log(isBalanceTree(root));

var insertIntoBST = function(root, val) {
    var dfs=(node,val)=>{
        if(val>node.val){
            if(node.right==null){
                node.right=new TreeNode(val);
                return;
            }else{
                dfs(node.right,val);
            }
        }else{
            if(node.left==null){
                node.left=new TreeNode(val);
                return;
            }else{
                dfs(node.left,val);
            }
        }
    };
    if(root==null){
        root=new TreeNode(val);
        return root;
    }
    dfs(root,val);
    return root;
};