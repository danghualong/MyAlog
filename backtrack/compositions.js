/**
 * 从数组nums中取出满足总和等于target的所有子集
 * @param {*} nums 供选数组
 * @param {*} target 总和目标值
 */
var compositions=function(nums,target){
    nums.sort((a,b)=>a-b);
    // console.log(nums);
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
let nums=[1,3,5,2,4,7,6,3];
let result=compositions(nums,12);
console.log(result);
console.log("************************");
/**
 * 从1-9之间取k个数，使和等于n
 * @param {*} n 总和
 * @param {*} k 集合中元素数量
 */
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

let result3=compositions3(9,3);
console.log(result3);
console.log("************************");

/**
 * 从1-n所有数的组合
 * @param {*} n 
 */
var compositions4=function(n){
    let result=[];
    var backtrack=(n,path)=>{
        if(n<=0){
            result.push(path.slice());
            return;
        }
        path.push(n);
        backtrack(n-1,path);
        path.pop();
        backtrack(n-1,path);
    };
    backtrack(n,[]);
    return result;
};

let result4=compositions4(5);
console.log(result4);
console.log("************************");