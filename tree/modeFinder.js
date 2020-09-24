///从BST中寻找众位数(出现次数最多的数)
var findMode = function(root) {
    let result=[];
    let maxCount=0;
    let curNum=Infinity;
    let curSize=0;
    var updateResult=()=>{
        if(curSize>maxCount){
            maxCount=curSize;
            result=new Array();
            result.push(curNum);
        }else if(curSize==maxCount){
            result.push(curNum);
        }
    };
    var preOrder=(root)=>{
        if(root==null){
            return;
        }
        preOrder(root.left);
        if(root.val!=curNum){
            if(curNum!=Infinity){
                updateResult();
            }
            curSize=0;
            curNum=root.val;
        }
        curSize++;
        preOrder(root.right);
    }
    preOrder(root);
    if(curNum!=Infinity){
        updateResult();
    }
    return result;
};

const treeUtil=require("../treeUtil");
let nums=[2,2,3,2,null,3,3];
let root=treeUtil.deserialize(nums);
let result=findMode(root);
console.log(result);