const {TreeNode}=require("../model");
let treeUtil=require("../treeUtil");
//根据中序和后序遍历结果，重塑二叉树
//如果只有前序和后序遍历，则无法确定二叉树的结构
var buildTree = function(inorder, postorder) {
    var dfs=(inorder,postorder,istart,istop,pstart,pstop)=>{
        if(pstart>pstop){
            return null;
        }
        let data=postorder[pstop];
        let node=new TreeNode(data);
        let mid=-1;
        for(let i=istart;i<=istop;i++){
            if(inorder[i]==data){
                mid=i;
                break; 
            }
        }
        node.left=dfs(inorder,postorder,istart,mid-1,pstart,pstart+mid-istart-1);
        node.right=dfs(inorder,postorder,mid+1,istop,pstop+mid-istop,pstop-1);
        return node; 
    };
    return dfs(inorder,postorder,0,inorder.length-1,0,postorder.length-1);
};

let inorder=[];
let postorder=[];
let root=buildTree(inorder,postorder);
console.log(treeUtil.serialize(root));

