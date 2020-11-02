var intersection = function(nums1, nums2) {
    let set=new Set();
    let result=[];
    for(let i=0;i<nums1.length;i++){
        set.add(nums1[i]);
    }
    for(let i=0;i<nums2.length;i++){
        if(set.has(nums2[i])){
            set.delete(nums2[i]);
            result.push(nums2[i]);
        }
    }
    return result;
};

let nums1=[1,2,2,1];
let nums2=[2,2,1];
let result=intersection(nums1,nums2);
console.log(result);