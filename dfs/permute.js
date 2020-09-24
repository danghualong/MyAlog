var permuteUnique = function(nums) {
    if(nums.length==1){
        return [[nums[0]]];
    }
    let existedNums=new Set();
    let result=[];
    for(let i=0;i<nums.length;i++){
        let d=nums[i];
        if(existedNums.has(d)){
            continue;
        }
        existedNums.add(d);
        let subNums=nums.slice(0,i).concat(nums.slice(i+1,nums.length));
        let subResult=permuteUnique(subNums);
        for(let item of subResult){
            let newItem=item.slice();
            newItem.unshift(d);
            result.push(newItem);
        }
    }
    return result;
};

let nums=[1,1,2,2];
let result=permuteUnique(nums);
console.log(result);