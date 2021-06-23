function knapsacks(t,ws,vs){
    let arr=[];
    for(let i=0;i<=ws.length;i++){
        let sub=[];
        for(let j=0;j<=t;j++){
            sub.push(0);
        }
        arr.push(sub);
    }
    for(let i=1;i<=ws.length;i++){
        for(let j=1;j<=t;j++){
            if(j>=ws[i-1]){
                arr[i][j]=Math.max(arr[i-1][j],arr[i-1][j-ws[i-1]]+vs[i-1]);
            }else{
                arr[i][j]=arr[i-1][j];
            }
        }
    }
    return arr[ws.length][t];
}

const ws=[2,3,3,1,2];
const vs=[1,2,4,2,3];
result=knapsacks(6,ws,vs);
console.log(result);