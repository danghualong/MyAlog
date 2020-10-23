

var swapPairs = function(head) {
    let pre=new ListNode();
    pre.next=head;
    let node=head;
    let result=null;
    if(head==null ||head.next==null){
        return head;
    }else{
        result=head.next;
    }
    while(node!=null){
        if(node.next!=null){
            pre.next=node.next;
            let tmp=node.next.next;
            node.next.next=node;
            node.next=tmp;
            pre=node;
            node=tmp;
        }else{
            break;
        }
    } 
    return result;
};