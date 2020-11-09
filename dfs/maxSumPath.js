const objTree=require("./treeNode");

var maxPathSum = function(root) {
    if(root==null){
        return 0;
    }
    let result=-Infinity;
    var getLongestDistance=(node)=>{
        if(node==null){
            return 0;
        }
        let result=node.val;
        let left=getLongestBranch(node.left);
        let right=getLongestBranch(node.right);
        result=Math.max(result,result+left,result+right,result+left+right);
        return result;
    };

    var getLongestBranch=node=>{
        if(node==null){
            return 0;
        }
        let result=node.val;
        let left=getLongestBranch(node.left);
        let right=getLongestBranch(node.right);
        result=Math.max(0,left+result,right+result);
        return result;
    };

    var tranverse=(node)=>{
        if(node==null){
            return;
        }
        let distance=getLongestDistance(node);
        if(result<distance){
            result=distance;
        }
        tranverse(node.left);
        tranverse(node.right);
    };
    tranverse(root);
    return result;
    
};




let nums=[9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6];
let root=objTree.createTree(nums);
let nodes=objTree.traverseNodes(root,0);
console.log(nodes);
let result=maxPathSum(root);
console.log(result);


