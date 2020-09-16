var combine = function(n, k) {
    let result=[];
    var backtrack=(i,arr)=>{
        if(arr.length==k){
            result.push(arr.slice());
            return;
        }
        for(let j=i;j<=n;j++){
            arr.push(j);
            backtrack(j+1,arr);
            arr.pop();
        }
    }
    backtrack(1,[]);
    return result;
};

let n=4;
let k=2;
let result=combine(n,k);
console.log(result);