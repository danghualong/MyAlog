//递增序列片段
var getSeries=function(nums){
    let result=[];
    var backtrack=function(start,path){
        if(start==nums.length){
            if(path.length>1){
                result.push(path.slice());
            }
            return;
        }
        path.push(nums[start]);
        for(let i=start+1;i<=nums.length;i++){
            if(i<nums.length && nums[i]==nums[start]){
                backtrack(i,path);
                break;
            }
            if(i==nums.length ||nums[i]>=nums[start]){
                backtrack(i,path);
            }
        }
        path.pop();
    };
    for(let i=0;i<nums.length;i++){
        backtrack(i,[]);
    }
    return result;
};
let nums=[2,5,2,7];
let result=getSeries(nums);
console.log(result);





