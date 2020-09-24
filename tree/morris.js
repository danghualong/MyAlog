///morris遍历
//遍历规则：
//1.当前节点不存在左孩子，直接跳到右孩子
//2.如果存在左孩子,
//2.1 左孩子的最右孩子指向null,将最右孩子指向当前节点，当前节点跳到左孩子
//2.2 左孩子的最右孩子指向当前节点,将最右孩子指向null,当前节点跳到右孩子
var morris=function(root){
    if(root==null){
        return;
    }
    let cur=root;
    while(cur!=null){
        if(cur.left!=null){
          let mrp=cur.left;
          let loop=false;
          while(mrp.right!=null){
            if(mrp.right==cur){
                loop=true;
                break;
            }
            mrp=mrp.right;
          }
          if(loop){
            mrp.right=null;
            console.log(cur.val);
            cur=cur.right;
          }else{
              mrp.right=cur;
              //console.log(cur.val);
              cur=cur.left;
          }
        }else{
            console.log(cur.val);
            cur=cur.right;
        }
    }
};
const treeUtil=require("../treeUtil");
let nums=[1,2,3,4,5,6,7];
let root=treeUtil.deserialize(nums);
console.log(treeUtil.serialize(root));
morris(root);
