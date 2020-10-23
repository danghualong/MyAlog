var Node=function(val){
    this.val=val;
    this.left=this.right=null;
    this.next=null;
};

var connect = function(root) {
    let queue=[];
    queue.push(root);
    let count=1;
    let preNode=null;
    while(queue.length>0){
        preNode=null;
        while(count>0){
            let node=queue.shift();
            if(preNode!=null){
                preNode.next=node;
            }
            preNode=node;
            count--;
            if(preNode.left!=null){
                queue.push(preNode.left);
            }
            if(preNode.right!=null){
                queue.push(preNode.right);
            }
        }
        count=queue.length;
    }
    return root;
};