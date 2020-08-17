
var numTrees = function(n) {
    let dict=new Map();
    var count=function(n){
        if(dict.has(n)){
            return dict.get(n);
        }
        if(n<=0){
            return 1;
        }
        let size=0;
        for(let i=1;i<=n;i++){
            size+=count(i-1)*count(n-i);
        }
        dict.set(n,size);
        return size;
    }
    return count(n);
};

let k=numTrees(4);
console.log(k);