///优先级队列（链表实现)
var PriorityQueue=function(){
    if(arguments.length>0){
        this.func=arguments[0];
    }else{
        this.func=(a,b)=>a<b;
    }
    this.head=null;
    this.tail=null;
    this.size=0;
};

var TreeNode=function(val){
    this.val=val;
    this.left=null;
    this.right=null;
    this.parent=null;
};

PriorityQueue.prototype={
    enqueue:function(num){
        var node=new TreeNode(num);
        if(this.head==null){
            this.head=node;
            this.tail=node;
        }else{
            //找到第一个child为null的节点
            this._appendTail(node);
            //确定最新节点是否上浮
            this._float(this.tail);
        }
        //数量增加1
        this.size++;
    },
    length:function(){
        return this.size;
    },
    dequeue:function(){
        if(this.head==null){
            return null;
        };
        let num=this.head.val;
        this.head.val=this.tail.val;
        let tailPreNode=this._findPrevTail();
        this._unbindTail();
        //尾指针指向次尾节点
        this.tail=tailPreNode;
        if(this.tail==null){
            this.head=null;
        }
        //数据下沉到合适位置
        this._sink(this.head);
        this.size--;
        return num;
    },
    peek:function(){
        if(this.head==null){
            return null;
        }
        return this.head.val;
    },
    _appendTail:function(node){
        //从尾节点开始，一直向上找，
        //当父亲的右孩子不是自己的时候，
        //再从右孩子开始一直往左孩子方向查找
        let tmpNode=this.tail;
        this.tail=node;
        while(tmpNode!=null){
            //当前为满二叉树时
            if(tmpNode.parent==null){
                let newTailParent=this._findNextTailParent(tmpNode);
                newTailParent.left=node;
                node.parent=newTailParent;
                break;
            }
            //如果不是右侧节点，退到上一层
            if(tmpNode.parent.right==tmpNode){
                tmpNode=tmpNode.parent;
            }else{
                let ancestor=tmpNode.parent;
                let newTailParent=this._findNextTailParent(ancestor.right,ancestor);
                //如果祖先节点的右孩子为空
                if(ancestor.right==null){
                    newTailParent.right=node;
                }else{
                    newTailParent.left=node;
                }
                node.parent=newTailParent;
                break;
            }
        }
    },
    _float:function(node){
        while(node!=null && node.parent!=null && !this.func(node.parent.val,node.val)){
            let tmpVal=node.val;
            node.val=node.parent.val;
            node.parent.val=tmpVal;
            node=node.parent;
        }
    },
    _sink:function(node){
        while(node!=null){
            let tmpNode=node.right;
            if(node.left!=null){
                if(tmpNode==null){
                    tmpNode=node.left;
                }else{
                    if(this.func(node.left.val,node.right.val)){
                        tmpNode=node.left;
                    }
                }
                if(!this.func(node.val,tmpNode.val)){
                    let tmpVal=tmpNode.val;
                    tmpNode.val=node.val;
                    node.val=tmpVal;
                    node=tmpNode;
                }else{
                    break;
                }

            }else{
                break;
            }
        }
    },
    _findPrevTail:function(){
        //寻找倒数第二的尾节点
        if(this.tail==null || this.tail.parent==null){
            return null;
        }
        let node=this.tail;
        while(node!=null){
            if(node.parent==null){
                while(node.right!=null){
                    node=node.right;
                }
                return node;
            }
            if(node.parent.left!=node){
                node=node.parent.left;
                while(node.right!=null){
                    node=node.right;
                }
                return node;
            }else{
                node=node.parent;
            }
        }
        return null;      
    },
    _findNextTailParent:function(node,parentNode){
        if(node==null){
            return parentNode;
        }
        while(node.left!=null){
            node=node.left;
        }
        return node;
    },
    /**
     * 解除父子关系
     */
    _unbindTail:function(){
        if(this.tail.parent!=null){
            if(this.tail.parent.left==this.tail){
                this.tail.parent.left=null;
            }else{
                this.tail.parent.right=null;
            }
            this.tail.parent=null;
        }
    },
    display:function(){
        if(this.head==null){
            console.log("[]");
            return;
        }
        let queue=[this.head];
        let data=[];
        while(queue.length>0){
            let node=queue.shift();
            data.push(node.val);
            if(node.left!=null){
                queue.push(node.left);
            }
            if(node.right!=null){
                queue.push(node.right);
            }
        }
        console.log(data);
    }
};

var MedianFinder=function(){
    this.largeQueue=new PriorityQueue();
    this.smallQueue=new PriorityQueue((a,b)=>a>b);
    this.add=function(num){
        if(this.largeQueue.size>this.smallQueue.size){
            if(this.largeQueue.peek()<num){
                let tmp=this.largeQueue.dequeue();
                this.largeQueue.enqueue(num);
                num=tmp;
            }
            this.smallQueue.enqueue(num);
        }else{
            if(this.smallQueue.size>0){
                if(this.smallQueue.peek()>num){
                    let tmp=this.smallQueue.dequeue();
                    this.smallQueue.enqueue(num);
                    num=tmp;
                }
            }
            this.largeQueue.enqueue(num);
        }
    };
    this.findMedian=function(){
        if(this.smallQueue.size!=this.largeQueue.size){
            return this.largeQueue.peek();
        }else{
            if(this.smallQueue.size>0){
                return (this.smallQueue.peek()+this.largeQueue.peek())/2;
            }else{
                return 0;
            }
        }
    }
}

var finder=new MedianFinder();
console.log(finder.findMedian());
finder.add(3);
finder.add(7);
console.log(finder.findMedian());
finder.add(6);
console.log(finder.findMedian());
finder.add(5);
console.log(finder.findMedian());
