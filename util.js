// 二分查找
exports.bs=function(nums,k){
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let mid=parseInt((l+r)/2);
        if(nums[mid]==k){
            return mid;
        }else if(nums[mid]>k){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return -1;
};