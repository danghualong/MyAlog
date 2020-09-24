//两棵子树合并为一棵树，对应位置进行加和
var mergeTrees = function(t1, t2) {
    if(t1==null && t2==null){
        return null;
    }
    let node=new TreeNode(0);
    if(t1!=null){
        node.val+=t1.val;
    }
    if(t2!=null){
        node.val+=t2.val;
    }
    node.left=mergeTrees(t1==null?null:t1.left,t2==null?null:t2.left);
    node.right=mergeTrees(t1==null?null:t1.right,t2==null?null:t2.right);
    return node;
};

var TreeNode=require("../model").TreeNode;
var treeUtil=require("../treeUtil");

let nums1=[1,3,2,5];
let nums2=[2,1,3,null,4,null,7];
let t1=treeUtil.deserialize(nums1);
let t2=treeUtil.deserialize(nums2);
let root=mergeTrees(t1,t2);
let result=treeUtil.serialize(root);
console.log(result);

