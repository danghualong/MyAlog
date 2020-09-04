
var isValid = function(s) {
    if(!s || s.length==0){
        return true;
    }
    let stack=[];
    let set=new Set(['(','[','{']);
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])){
            stack.push(s[i]);
        }else{
            if(stack.length<=0){
                return false;
            }
            let sc=stack.pop();
            if(!((sc=='(' &&s[i]==')')||(sc=='[' && s[i]==']')||(sc=='{' && s[i]=='}'))){
                return false;
            }
        }
    }
    return stack.length==0;
};

let s="()[]{{}}";
console.log(isValid(s));





