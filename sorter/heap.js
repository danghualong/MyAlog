var Node=function(key,val){
    this.key=key;
    this.val=val;
};
var swap=(items,i,j)=>{
    let tmp=items[i];
    items[i]=items[j];
    items[j]=tmp;
};

var sort=(items, k)=>{
    
    var heapify=(items)=>{
        let n=items.length;
        let curIdx=parseInt(n/2)-1;
        while(curIdx>=0){
            sink(items,curIdx,n);
            curIdx--;
        }
    };
    var sink=(items,curIndex,endIndex)=>{
        if(curIndex>=endIndex){
            return;
        }
        let i=curIndex;
        let lidx=curIndex*2+1;
        let ridx=curIndex*2+2;
        if(lidx<endIndex && items[i].val<items[lidx].val){
            i=lidx;
        }
        if(ridx<endIndex && items[i].val<items[ridx].val){
            i=ridx;
        }
        if(i!=curIndex){
            swap(items,i,curIndex);
            sink(items,i,endIndex);
        }
    };
    
    heapify(items);
    let n=items.length;
    let result=[];
    let stopIndex=(n>=k)?n-k:0;
    for(let i=n-1;i>=stopIndex;i--){
        swap(items,0,i);
        result.push(items[i].key);
        sink(items,0,i);
    }
    return result;
};

let nums=[1,1,1,2,2,2,3,3,3,3,5,4];
let map=new Map();
for(let i=0;i<nums.length;i++){
    if(!map.has(nums[i])){
        map.set(nums[i],0);
    }
    map.set(nums[i],map.get(nums[i])+1);
}

let items=[];
for(let item of map){
    items.push(new Node(item[0],item[1]));
}

let result=sort(items,2);
console.log(result);
