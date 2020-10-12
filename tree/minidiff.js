var getMinimumDifference = function(root) {
    if(root==null){
        return 0;
    }
    let minDiff=Infinity;
    let preNode=null;
    var inorder=function(root){
        if(root==null){
            return;
        }
        inorder(root.left);
        if(preNode!=null){
            minDiff=Math.min(minDiff,Math.abs(root.val-val1));
        }
        preNode=root;
        inorder(root.right);
    };
    return minDiff;
};