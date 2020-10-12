//快慢指针检查链表是否存在环
var hasCycle = function(head) {
    let fast=head;
    let slow=head;
    while(true){
        if(fast==null ||fast.next==null){
            return false;
        }
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow){
            return true;
        }
    }
    return false;
};
//检测入环的起始节点
var detectCycle = function(head) {
    let fast=head;
    let slow=head;
    let pre=head;
    while(true){
        if(fast==null ||fast.next==null){
            return null;
        }
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow){
            break;
        }
    }
    while(pre!=slow){
        pre=pre.next;
        slow=slow.next;
    }
    return pre;
};