let model=require("../model");
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length==0){
        return null;
    }
    while(lists.length>1){
        let heads=[]
        let size=lists.length;
        for(let i=0;i<size;i+=2){
            let tmpHead=lists[i];
            if(i+1<size){
                tmpHead=mergeTwoLists(lists[i],lists[i+1]);
            }
            heads.push(tmpHead);
        }
        lists=heads.slice(0);
    }
    return lists[0];
};

var mergeTwoLists=function(head1,head2){
    if(head1==null){
        return head2;
    }else if(head2==null){
        return head1;
    }
    let node1=head1;
    let node2=head2;
    let head=null;
    let cur=null;
    while(node1!=null && node2!=null){
        if(head==null){
            if(node1.val>node2.val){
                head=node2;
                node2=node2.next;
            }else{
                head=node1;
                node1=node1.next;
            }
            cur=head;
        }
        else{
            if(node1.val>node2.val){
                cur.next=node2;
                cur=node2;
                node2=node2.next;
            }else{
                cur.next=node1;
                cur=node1;
                node1=node1.next;
            }
            
        }
    }
    if(node1==null){
        cur.next=node2;
    }else{
        cur.next=node1;
    }
    return head;
};

var printList=(head)=>{
    let result=[];
    while(head!=null){
        result.push(head.val);
        head=head.next;
    }
    console.log(result);
};

var createHead=()=>{
    let head=null;
    let cur=null;
    let nums=[];
    for(let i=0;i<10;i++){
        let val=parseInt(Math.random()*30);
        nums.push(val);
    }
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        let val=nums[i];
        if(head==null){
            head=new model.ListNode(val);
            cur=head;
        }else{
            let tmp=new model.ListNode(val);
            cur.next=tmp;
            cur=tmp;
        }
    }
    return head;
};

let heads=[];
for(let k=0;k<10;k++){
    heads.push(createHead());
    printList(heads[k]);
}
let curHead=mergeKLists(heads);
printList(curHead);
