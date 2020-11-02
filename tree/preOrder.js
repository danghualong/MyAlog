const {TreeNode}=require("../model");
const treeUtil=require("../treeUtil");

var preOrderTraversal=function(root){
    let result=[];
    if(root==null){
        return result;
    }
    let stack=[];
    let node=root;
    while(true){
        while(node!=null){
            //前序遍历
            result.push(node.val);
            stack.push(node);
            node=node.left;
        }
        if(stack.length==0){
            break;
        }
        // node=stack[stack.length-1];
        // if(node.right==null){
        //     stack.push(node.val);
        //     stack.pop();
        // }else{
        //     node=node.right;
        // }

        node=stack.pop();
        //中序遍历
        //result.push(node.val);
        node=node.right;
    }
    return result;
};

let nums=[5,2,13,1,4,9];
let root=treeUtil.deserialize(nums);
let result=preOrderTraversal(root);
console.log(nums);
console.log(result);