
var tfp=function(nums){
    const Symbols=['+','-','*','/'];
    let size=0;
    var backtrack=(arr)=>{
        console.log(arr);
        if(arr.length==1){
            if(arr[0]==24){
                size++;
            }
            return;
        }
        for(let i=0;i<arr.length;i++){
            let v=arr[i];
            for(let j=0;j<arr.length;j++){
                if(i==j){
                    continue;
                }
                let w=arr[j];
                let tmpArr=[];
                for(let k=0;k<arr.length;k++){
                    if(k==i || k==j){
                        continue;
                    }
                    tmpArr.push(arr[k]);
                }
                for(let k=0;k<Symbols.length;k++){
                    if(Symbols[k]=="/"){
                        if(w==0 || v%w!=0){
                            continue;
                        }
                        tmpArr.push(v/w);
                    }
                    else if(Symbols[k]=='+'){
                        tmpArr.push(v+w);
                    }else if(Symbols[k]=='-'){
                        tmpArr.push(v-w);
                    }else{
                        tmpArr.push(v*w);
                    }
                    backtrack(tmpArr);
                    tmpArr.pop();
                }
            }
        }
    };
    backtrack(nums);
    //console.log(result);
    return size;
};

let nums=[72,1,1,1];
let b=tfp(nums);
console.log(b);