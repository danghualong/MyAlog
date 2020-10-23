
var partitionLabels = function(S) {
    let result=[];
    var partition=function(S,start,end){
        if(start>end){
            return;
        }
        let fast=start;
        for(let slow=start;slow<=fast;slow++){
            for(let j=end;j>fast;j--){
                if(S[slow]==S[j]){
                    fast=j;
                    break;
                }
            }
            if(fast==start){
                break;
            }
            if(slow>=fast){
                break;
            }
        }
        result.push(fast+1-start);
        partition(S,fast+1,end); 
    };
    partition(S,0,S.length-1);
    return result;
};

let S = "ababcbacadefegdehijhklij";
let result=partitionLabels(S);
console.log(result);