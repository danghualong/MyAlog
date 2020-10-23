var backspaceCompare = function(S, T) {
    var getResult=function(s){
        let arrS=[];
        for(let i=0;i<s.length;i++){
           if(s[i]=="#"){
               if(arrS.length>0){
                   arrS.pop();
               }
           }else{
               arrS.push(s[i]);
           }
        }
        return arrS.toString();
    };
    result_s=getResult(S);
    result_t=getResult(T);
    return result_s==result_t;
};

let S = "ab#c";
let T = "ad#c";
console.log(backspaceCompare(S,T));

