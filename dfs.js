
const treeUtil=require("./tree");
const model = require("./model");
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

// let nums=[1,2,3,1];
// let result=rob2(nums);
// console.log(result);


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


var sortedListToBST = function(head) {
    var bs=(head,tail)=>{
        //当头尾相同时,为空节点
        if(head==tail){
            return null;
        }
        //快慢指针
        let node1=head;
        let node2=node1.next;
        while(node2!=tail){
            node1=node1.next;
            node2=node2.next;
            //当快指针第一步到达tail
            if(node2==tail){
                break;
            }
            node2=node2.next;
        }
        let node=new model.TreeNode(node1.val);
        node.left=bs(head,node1);
        node.right=bs(node1.next,tail);
        return node;
    }
    return bs(head,null);
};

// let nums=[1,2,3,4,5,6,7,8];
// let head=new model.ListNode(nums[0]);
// let node=head;
// for(let i=1;i<nums.length;i++){
//     node.next=new model.ListNode(nums[i]);
//     node=node.next;
// }
// console.log(head);
// let root=sortedListToBST(head);
// let items=treeUtil.serialize(root);
// console.log(items);

// 扫雷更新状态
var updateBoard = function(board, click) {
    var getCount=(board,i,j)=>{
        let count=0;
        if(i>0){
            count+=board[i-1][j]=="M"?1:0;
            if(j>0){
                count+=board[i-1][j-1]=="M"?1:0;
            }
            if(j<board[0].length-1){
                count+=board[i-1][j+1]=="M"?1:0;
            }
        }
        if(i<board.length-1){
            count+=board[i+1][j]=="M"?1:0;
            if(j>0){
                count+=board[i+1][j-1]=="M"?1:0;
            }
            if(j<board[0].length-1){
                count+=board[i+1][j+1]=="M"?1:0;
            }
        }
        if(j>0){
            count+=board[i][j-1]=="M"?1:0;
        }
        if(j<board[0].length-1){
            count+=board[i][j+1]=="M"?1:0;
        }
        return count;
    };
    var updateE=function(board,w,m,n){
        let queue=[m*w+n];
        let visited=new Array(board.length*w).fill(false);
        visited[m*w+n]=true;
        while(queue.length>0){
            let k=queue.shift();
            let i=parseInt(k/w);
            let j=k%w; 
            let count=getCount(board,i,j);
            if(count==0){
                if(i>0){
                    if(!visited[k-w]){
                        queue.push(k-w);
                        visited[k-w]=true;
                    }
                    if(j>0 && !visited[k-w-1]){
                        queue.push(k-w-1);
                        visited[k-w-1]=true;
                    }
                    if(j<w-1 && !visited[k-w+1]){
                        queue.push(k-w+1);
                        visited[k-w+1]=true;
                    }
                }
                if(i<board.length-1){
                    if(!visited[k+w]){
                        queue.push(k+w);
                        visited[k+w]=true;
                    }
                    if(j>0 && !visited[k+w-1]){
                        queue.push(k+w-1);
                        visited[k+w-1]=true;
                    }
                    if(j<w-1 && !visited[k+w+1]){
                        queue.push(k+w+1);
                        visited[k+w+1]=true;
                    }
                }
                if(j>0 && !visited[k-1]){
                    queue.push(k-1);
                    visited[k-1]=true;
                }
                if(j<w-1 && !visited[k+1]){
                    queue.push(k+1);
                    visited[k+1]=true;
                }
                board[i][j]='B';
            }else{
                board[i][j]=count+'';
            }
        }
    };
    let i=click[0];
    let j=click[1];
    if(board[i][j]=='M'){
        board[i][j]='X';
    }else{
        updateE(board,board[0].length,i,j);
    }
    return board;
};

let board=[
    ['B', '1', 'E', '1', 'B'],
    ['B', '1', 'M', '1', 'B'],
    ['B', '1', '1', '1', 'B'],
    ['B', 'B', 'B', 'B', 'B']
];
let click=[1,2];

var result=updateBoard(board,click);
console.log(result);