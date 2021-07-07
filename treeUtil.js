const model=require("./model");

var serialize=function(root){
    if(root==null){
        return [];
    }
    let result=[];
    let queue=[];
    queue.push(root);
    while(queue.length>0){
        let node=queue.shift();
        if(node!=null){
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }else{
            result.push(null);
        }
    }
    let stopIndex=result.length-1;
    while(stopIndex>=0){
        if(result[stopIndex]!=null){
            break;
        }
        stopIndex--;
    }
    return result.slice(0,stopIndex+1);
};

var deserialize=function(nums){
    if(nums==null || nums.length<=0){
        return null;
    }
    let root=new model.TreeNode(nums[0]);
    let queue=[];
    queue.push(root);
    let i=1;
    while(queue.length>0){
        let node=queue.shift();
        if(node!=null){
            if(i>=nums.length){
                break;
            }
            if(nums[i]!=null){
                node.left=new model.TreeNode(nums[i]);
            }
            queue.push(node.left);
            i++;
            if(i>=nums.length){
                break;
            }
            if(nums[i]!=null){
                node.right=new model.TreeNode(nums[i]);
            }
            queue.push(node.right);
            i++;
        }
    }
    return root;
};

let bs=function(nums,k){
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let mid=parseInt((l+r)/2);
        if(nums[mid]==k){
            return mid;
        }else if(nums[mid]>k){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return -1;
};

module.exports={
    serialize,
    deserialize,
    bs
}

// let nums=[3,5,2,null,4,7];
// let root=deserialize(nums);
// console.log(root);
// let result=serialize(root);
// console.log(result);
