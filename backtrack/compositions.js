var compositions=function(nums,target){
    nums.sort((a,b)=>a-b);
    console.log(nums);
    let result=[];
    let data=Infinity;
    var backtrack=(nums,path,i,target)=>{
        if(target<0){
            return;
        }
        if(target==0){
            result.push(path.slice());
            return;
        }
        for(let j=i;j<nums.length;j++){
            if(data==nums[j]){
                continue;
            }
            path.push(nums[j]);
            backtrack(nums,path,j+1,target-nums[j]);
            data=path.pop();
        }
    };
    backtrack(nums,[],0,target);
    return result;
};

var compositions3=function(n,k){
    let result=[];
    var backtrack=(path,i,target,k)=>{
        if(path.length>k || target<0){
            return;
        }
        if(path.length==k && target==0){
            result.push(path.slice());
            return;
        }
        for(let j=i;j<10;j++){
            path.push(j);
            backtrack(path,j+1,target-j,k);
            data=path.pop();
        }
    };
    backtrack([],1,n,k);
    return result;
};

// let nums=[1,3,5,2,4,7,6,3];
// let result=compositions(nums,12);
// console.log(result,result.length);

let result3=compositions3(9,3);
console.log(result3);