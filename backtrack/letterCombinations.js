//电话号码
var letterCombinations = function(digits) {
    let result=[];
    var buildMap=()=>{
        let map=new Map();
        let startIndex=0;
        for(let i=0;i<10;i++){
            let len=3;
            if(i==7 || i==9){
                len=4;
            }
            if(i==1 || i==0){
                len=0;
            }
            let arr=[];
            for(let j=0;j<len;j++){
                arr.push(String.fromCharCode(97+startIndex+j));
            }
            map.set(i,arr);
            startIndex+=len;
        }
        return map;
    };
    var map=buildMap();
    console.log(map);
    var backtrack=(k,path)=>{
        if(k==digits.length){
            result.push(path.join(''));
            return;
        }
        let arr=map.get(parseInt(digits[k]));
        if(arr.length==0){
            backtrack(k+1,path);
        }else{
            for(let i=0;i<arr.length;i++){
                path.push(arr[i]);
                backtrack(k+1,path);
                path.pop();
            }
        }
        
    };
    backtrack(0,[]);
    return result;
};
console.log(letterCombinations("32"));
