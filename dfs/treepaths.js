var binaryTreePaths = function(root) {
    let result=[];
    if(root==null){
        return result;
    }
    var dfs=(node,path)=>{
        path.push(node.val);
        if(node.left==null && node.right==null){
            result.push(path.join('->'));
            return;
        }
        if(node.left!=null){
            dfs(node.left,path);
            path.pop();
        }
        if(node.right!=null){
            dfs(node.right,path);
            path.pop();
        }
    };
    dfs(root,[]);
    return result;
};

let treeUtil=require("../treeUtil");

let nums=[1,2,3,null,5];
let root=treeUtil.deserialize(nums);
let result=binaryTreePaths(root);
console.log(result);