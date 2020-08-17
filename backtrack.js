
var eightQueen=function(n){
    let result=[];
    var backtrack=function(m,positions){
        if(m>=n){
            result.push(positions.slice(0));
            return;
        }
        for(let i=0;i<n;i++){
            if(isFit(positions,n,m,i)){
                positions.push(i);
                backtrack(m+1,positions);
                positions.pop();
            }
        }
    };
    var isFit=function(positions,n,m,j){
        for(let i=0;i<m;i++){
            if(j==positions[i]){
                return false;
            }
            if(j-(m-i)>=0 && positions[i]==j-(m-i)){
                return false;
            }
            if(j+(m-i)<n && positions[i]==j+(m-i)){
                return false;
            }
        }
        return true;
    };
    let positions=[];
    backtrack(0,positions);
    return result;
};

