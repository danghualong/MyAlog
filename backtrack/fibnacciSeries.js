var splitIntoFibonacci = function(S) {
    const n=S.length;
    const MAXINT=0x7FFFFFFF;
    var backtrack=function(list,index,target,prev){
        if(index>=n){
            return list.length>2;
        }
        for(let i=index;i<n;i++){
            const num=parseInt(S.slice(index,i+1));
            console.log(num,list,MAXINT);
            if(num>0 && S[index]=='0'){
                continue;
            }
            if(num>MAXINT){
                break;
            }
            if(list.length>=2){
                if(num>target){
                    break;
                } else if(num<target) {
                    continue;
                }
            }
            list.push(num);
            if(backtrack(list,i+1,prev+num,num)){
                return true;
            }
            list.pop();
        }
    };
    let list=[];
    backtrack(list,0,0,0);
    return list;
};

let S="539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511";
S="123456579";
// S="417420815174208193484163452262453871040871393665402264706273658371675923077949581449611550452755";
let result=splitIntoFibonacci(S);
console.log(result);
