var model=require("../model");
var treeUtil=require("../treeUtil");

var invertTree=function(root){
    if(root==null){
        return;
    }
    let tmp=root.left;
    root.left=root.right;
    root.right=tmp;
    invertTree(root.left);
    invertTree(root.right);
};

let nums=[4,2,7,1,3,6,9];
let root=treeUtil.deserialize(nums);
flip(root);
let result=treeUtil.serialize(root);
console.log(nums);
console.log(result);
