var TreeNode=function(val){
    this.val=val;
    this.left=this.right=null;
};
/**
 * Definition for singly-linked list.
 */
var ListNode=function(val) {
    this.val = val;
    this.next = null;
};

var GraphNode=function(val) {
    this.val = val;
    this.children = [];
};

var UFSNode=function(val){
    this.val=val;
    this.prev=this.next=null;
};
//并查集
var UnionFindSet=function(keys){
    this.map=new Map();
    for(let i=0;i<keys.length;i++){
        this.map.set(i,new UFSNode(i));
    }
};
UnionFindSet.prototype={
    union:function(a,b){
        if(!this.isconnected(a,b)){
            let tailNode=this.getTail(a);
            let node2=this.getRoot(b);
            tailNode.next=node2;
            node2.prev=tailNode;
        }
    },
    isconnected:function(a,b){
        let node1=this.getRoot(a);
        let node2=this.getRoot(b);
        return node1==node2;
    },
    getRoot:function(key){
        let node=this.map.get(key);
        while(node.prev!=null){
            node=node.prev;
        }
        return node;
    },
    getTail:function(key){
        let node=this.map.get(key);
        while(node.next!=null){
            node=node.next;
        }
        return node;
    }
};
///树状数组
var FenwickTree=function(nums){
    let n=nums.length;
    this.arr=new Array(n).fill(0);
    for(let i=0;i<n;i++){
        let j=i;
        while(j<n){
            this.arr[j]+=nums[i];
            j+=this.lowbit(j+1);
        }
    }
}
FenwickTree.prototype={
    lowbit:function(n){
        return n& -n;
    },
    add:function(i,k){
        while(i<this.arr.length){
            this.arr[i]+=k;
            i+=this.lowbit(i+1);
        }
    },
    sum:function(n){
        let total=0;
        while(n>0){
            total+=this.arr[n-1];
            n-=this.lowbit(n);
        }
        return total;
    }
};

module.exports={
    TreeNode,
    ListNode,
    GraphNode,
    UnionFindSet,
    FenwickTree
}

