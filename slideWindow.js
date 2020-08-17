var minString=function(s,t){
    if(!t ||!s){
        return null;
    }
    let map=new Map();
    for(let i=0;i<t.length;i++){
        if(!map.has(t[i])){
            map.set(t[i],0);
        }
        map.set(t[i],map.get(t[i])+1);
    }
    let l=-1;
    let r=-1;
    let startIndex=-1;
    let minLen=s.length;
    let unmatched=t.length;
    while(true){
        //console.log(l,r,map,unmatched,startIndex,minLen);
        if(unmatched>0){
            r++;
            if(r>=s.length){
                break;
            }
            if(map.has(s[r])){
                if(map.get(s[r])>0){
                   unmatched--; 
                }
                map.set(s[r],map.get(s[r])-1);
            }
        }else{
            if(minLen>r-l){
                startIndex=l+1;
                minLen=r-l;
            }
            //console.log(s.slice(startIndex,startIndex+r-l));
            l++;
            if(map.has(s[l])){
                if(map.get(s[l])>=0){
                    unmatched++;
                }
                map.set(s[l],map.get(s[l])+1);
            }
        }
    }
    return s.slice(startIndex,startIndex+minLen);
};

let s="AFACCDKDFACN";
let t="KFC";

let result=minString(s,t);
console.log(result);


