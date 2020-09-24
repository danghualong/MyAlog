///将BST所有较小的节点进行累加（反向中序遍历)
var convertBST = function(root) {
    let total=0;
    var inorder=(root)=>{
        if(root==null){
            return;
        }
        inorder(root.right);
        total+=root.val;
        root.val=total;
        inorder(root.left);
    };
    inorder(root);
};

var model=require("../model");
var treeUtil=require("../treeUtil");

let nums=[5,2,13,1,4,9];
let root=treeUtil.deserialize(nums);
convertBST(root);
let result=treeUtil.serialize(root);
console.log(result);