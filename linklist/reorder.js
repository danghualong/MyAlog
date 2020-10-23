const {ListNode}=require("../model");

var reorderList = function(head) {
    //快慢指针
    let dummy=new ListNode(null);
    dummy.next=head;
    let fast=dummy;
    let slow=dummy;
    while(fast!=null){
        if(fast.next!=null){
            fast=fast.next.next;
        }else{
            fast=fast.next;
            break;
        }
        slow=slow.next;
    }
    let head2=slow.next;
    slow.next=null;
    //只有一个节点
    if(head2==null){
        return head;
    }
    //翻转链表
    var flipLinkList=function(head){
        let pre=null;
        let node=head;
        while(node!=null){
            if(node.next==null){
                node.next=pre;
                return node;
            }else{
                let tmp=node.next.next;
                let k=node.next;
                node.next.next=node;
                node.next=pre;
                if(tmp==null){
                    return k;
                }
                pre=k;
                node=tmp;
            }
        }
        return null;
    };
    //合并链表
    var combine=function(head1,head2){
        let node1=head1;
        let node2=head2;
        while(node2!=null){
            let tmp1=node1.next;
            let tmp2=node2.next;
            node1.next=node2;
            node2.next=tmp1;
            node2=tmp2;
            node1=tmp1;
        }
        return head1;
    };
    head2=flipLinkList(head2);
    console.log(head2);
    return combine(head,head2);
};

var dummy=new ListNode();
var last=dummy;
for(let i=0;i<7;i++){
    var node=new ListNode(i+1);
    last.next=node;
    last=node;
}
let head=reorderList(dummy.next);
console.log(head);

