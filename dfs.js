
const treeUtil=require("./tree");
// 打家劫舍(从二叉树结构中选择)
var rob=function(root){
    var dfs=(node)=>{
        if(node==null){
            return [0,0];
        }
        let leftVals=dfs(node.left);
        let rightVals=dfs(node.right);
        
        let selectedSum=leftVals[0]+rightVals[0]+node.val;
        let unselectSum=Math.max(leftVals[1]+rightVals[1],leftVals[0]+rightVals[1],
            leftVals[1]+rightVals[0],leftVals[0]+rightVals[0]);
        // console.log(selectedSum,unselectSum,node.val);
        return [unselectSum,selectedSum];
    }
    let result= dfs(root)
    return Math.max(result[0],result[1]);
};
// let nums=[1,4,7,6,5,3,3,4,3,1,2,null,null,null,4];
// let root=treeUtil.deserialize(nums);
// console.log(rob2(root));

// 环形打家劫舍
var rob2=function(nums){
    if(nums.length==1){
        return nums[0];
    }
    let r1=0;
    let r2=0;
    for(let i=1;i<nums.length;i++){
        let tmp=Math.max(r1,r2);
        r2=r1+nums[i];
        r1=tmp;
    }
    let r3=0;
    let r4=0;
    for(let i=0;i<nums.length-1;i++){
        let tmp=Math.max(r3,r4);
        r4=r3+nums[i];
        r3=tmp;
    }

    return Math.max(r1,r2,r3,r4);
};

let nums=[1,2,3,1];
let result=rob2(nums);
console.log(result);


var isBalanced=function(root){
    let result=true;
    var height=(node)=>{
        if(node==null){
            return 0;
        }
        let lh=height(node.left)+1;
        let rh=height(node.right)+1;
        if(Math.abs(lh-rh)>1){
            result=false;
        }
        return Math.max(lh,rh);
    };
    height(root);
    return result;
};

// let nums=[1,2,2,3,null,null,3,4,null,null,4];
// let root=treeUtil.deserialize(nums);
// console.log(isBalanced(root));
