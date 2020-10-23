var commonChars = function(A) {
    let map=new Map();
    if(A.length>0){
        for(let j=0;j<A[0].length;j++){
            if(!map.has(A[0][j])){
                map.set(A[0][j],0);
            }
            map.set(A[0][j],map.get(A[0][j])+1);
        }
    }
    console.log(map);
    for(let i=1;i<A.length;i++){
        let newMap=new Map();
        for(let j=0;j<A[i].length;j++){
            if(map.has(A[i][j])){
                if(!newMap.has(A[i][j])){
                    newMap.set(A[i][j],0);
                }
                newMap.set(A[i][j],newMap.get(A[i][j])+1);
                if(map.get(A[i][j])==1){
                    map.delete(A[i][j]);
                }else{
                    map.set(A[i][j],map.get(A[i][j])-1);
                }
            }
        }
        console.log(newMap);
        map=newMap;
    }
    let result=[];
    for(let item of map){
        console.log(item);
        for(let j=0;j<item[1];j++){
            result.push(item[0])
        }
    }
    return result;
};

let A=["bcaddcdd","cbcdccdd","ddccbdda","dacbbdad","dababdcb","bccbdaad","dbccbabd","accdddda"];
let result=commonChars(A);
console.log(result);