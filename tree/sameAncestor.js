
var bs=(node,p)=>{
    if(node==null){
        return null;
    }
    if(node.val==p.val){
        return node;
    }
    else if(node.val<p.val){
        return bs(node.right,p);
    }else{
        return bs(node.left,p);
    }
};
var lowestCommonAncestor = function(root, p, q) {
    if(root==null){
        return null;
    }
    if(root.val==p.val){
        if(bs(root,q)!=null){
            return root.val;
        }
    }
    if(root.val==q.val){
        if(bs(root,p)!=null){
            return root.val;
        }
    }
    if(p.val<root.val && q.val<root.val){
        return lowestCommonAncestor(root.left,p,q);
    }else if(p.val>root.val && q.val>root.val){
        return lowestCommonAncestor(root.right,p,q);
    }else{
        if(bs(root,p)!=null && bs(root,q)!=null){
            return root.val;
        }else{
            return null;
        }
    }
};

const {TreeNode}=require("../model");
let treeUtil=require("../treeUtil");
let nums= [6,2,8,0,4,7,9,null,null,3,5];
let p = new TreeNode(2);
let q = new TreeNode(8);
let root=treeUtil.deserialize(nums);
let result=lowestCommonAncestor(root,p,q);
console.log(result);