var uniqueOccurrences = function(arr) {
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],0);
        }
        map.set(arr[i],map.get(arr[i])+1);
    }
    let set=new Set();
    for(let item of map){
        if(set.has(item[1])){
            return false;
        }
        set.add(item[1]);
    }
    return true;
};

let nums=[1,2,2,3,3,3];
let result=uniqueOccurrences(nums);
console.log(result);