var eightQueen=function(n){
    let result=[];
    let backtrack=function(row,positions){
        if(row>=n){
            result.push([...positions]);
            return;
        }
        for(let col=0;col<n;col++){
            if (isValid(positions, n, row, col)) {
                // 递归前做选择
                positions.push(col);
                backtrack(row + 1, positions);
                // 递归后撤销选择
                positions.pop();
            }
        }
    };
    let isValid=function(positions,n,row,col){
        for(let i=0;i<row;i++){
            if(col==positions[i]){
                return false;
            }
            if(col-(row-i)>=0 && positions[i]==col-(row-i)){
                return false;
            }
            if(col+(row-i)<n && positions[i]==col+(row-i)){
                return false;
            }
        }
        return true;
    };
    let positions=[];
    backtrack(0,positions);
    return result;
};

const result = eightQueen(8);
console.log(result);
console.log("total count:",result.length);