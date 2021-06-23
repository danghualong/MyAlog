//8皇后 所有解法
var eightQueen = function(n) {
    let result=[];
    var isValid=function(r,c,path){
        for(let i=0;i<path.length;i++){
            if(path[i]==c){
                return false;
            }
            if(Math.abs(path[i]-c)==Math.abs(i-r)){
                return false;
            }
        }
        return true;
    }
    var backtrack=function(r,path){
        if(r>=n){
            result.push(path.slice());
            return;
        }
        for(let i=0;i<n;i++){
            if(isValid(r,i,path)){
                path.push(i);
                backtrack(r+1,path);
                path.pop();
            }
        }
    }
    backtrack(0,[]);
    return result;
};

let result=eightQueen(4);
console.log(result);
