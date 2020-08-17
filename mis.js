//monotonous increasing stack
var lowers=function(heights){
    heights.unshift(0);
    let stack=[0];
    let max=0;
    for(let i=1;i<heights.length;i++){
        let p=stack[stack.length-1];
        if(heights[i]>=heights[p]){
            stack.push(i);
        }
        else{
            while(stack.length>0){
                p=stack[stack.length-1];
                if(heights[i]<heights[p]){
                    stack.pop();
                    let area=heights[p]*(i-1-stack[stack.length-1]);
                    //console.log(area);
                    if(max<area){
                        max=area;
                    }
                }else{
                    stack.push(i);
                    break;
                }
            }
        }
    }
    for(let i=stack.length-1;i>0;i--){
        let area=heights[stack[i]]*(heights.length-1-stack[i-1]);
        if(max<area){
            max=area;
        }
    }
    return max;
};  

let heights=[3,4,1,4,3,5];
let result=lowers(heights);
console.log(result);


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





