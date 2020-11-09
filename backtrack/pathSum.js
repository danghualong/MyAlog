//找出从根节点到叶结点路径上的和为sum的所有路径
var pathSum = function(root, sum) {
    let result=[];
    var backtrack=(node,sum,path)=>{
        if(node==null){
            return;
        }
        sum-=node.val;
        path.push(node.val);
        if(sum==0 && node.left==null && node.right==null){
            result.push(path.slice());
            //return;
        }
        backtrack(node.left,sum,path);
        backtrack(node.right,sum,path);
        sum+=path.pop();
    };
    backtrack(root,sum,[]);
    return result;
};
var treeUtil=require("../treeUtil");
let nums=[3,1,4,null,2,-1,6];
let root=treeUtil.deserialize(nums);
let result=pathSum(root,6);
console.log(result);