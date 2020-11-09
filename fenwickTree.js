
//树状数组
var FenwickTree=function(arr){
    this.cArr=new Array(arr.length+1).fill(0);
    for(let i=1;i<arr.length+1;i++){
        let j=i-this.lowBit(i);
        // console.log(j,i);
        while(j<i){
            this.cArr[i]+=arr[j];
            j++;
        }
    }
}

FenwickTree.prototype={
    lowBit:function(x){
        return x&(-x);
    },
    prefixSum:function(n){
        let total=0;
        while(n>0){
            total+=this.cArr[n];
            n=n-this.lowBit(n);
        }
        return total;
    },

    update:function(k,val){
        while(k<=this.cArr.length){
            this.cArr[k]+=val;
            k+=this.lowBit(k);
        }
    },
    
}

// let arr=[1,2,3,4,5,6,17,8];
// let obj=new FenwickTree(arr);
// console.log(obj.cArr);
// console.log(obj.prefixSum(1));
// obj.update(8,10);
// console.log(obj.cArr);
// 基于桶排序的思想和树状数组的结合，求出逆序对数
var countSmaller = function(nums) {
    if(nums==null || nums.length<1){
        return [];
    }
    if(nums.length==1){
        return [0];
    }
    let dict={};
    let a = nums.slice(0);
    var set = new Set(a);
    a=[...set];
    a.sort((a,b)=>a-b);
    for(let i=0;i<a.length;i++){
        dict[a[i]]=i;
    }

    let result=new Array(nums.length).fill(0);
    let objTree=new FenwickTree(new Array(Object.keys(dict).length).fill(0));
    for(let i=nums.length-1;i>=0;i--){
        let index=dict[nums[i]];
        result[i]=objTree.prefixSum(index);
        objTree.update(index+1,1);
    }
    return result;
};

let arr=[7,5,6,5,2,6,5,1];
console.log(countSmaller(arr));

let arr2=[5,2,6,1];
console.log(countSmaller(arr2));