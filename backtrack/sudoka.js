var solveSudoku = function(board) {
    let n=board.length;
    let isOK=false;
    var backtrack=(board,k)=>{
        if(k>=n*n){
            isOK=true;
            return;
        }
        let r=parseInt(k/n);
        let c=k%n;
        if(board[r][c]!='.'){
            backtrack(board,k+1);
            return;
        }
        for(let d=1;d<10;d++){
            if(valid(board,k,d)){
                board[r][c]=d+"";
                backtrack(board,k+1);
                if(isOK){
                    return;
                }
                board[r][c]=".";
            }
        }
    };

    var valid=(board,k,d)=>{
        let n=board.length;
        let r=parseInt(k/n);
        let c=k%n;
        for(let j=0;j<n;j++){
            if(board[r][j]==d){
                return false;
            }
        }
        for(let i=0;i<n;i++){
            if(board[i][c]==d){
                return false;
            }
        }
        let br=parseInt(r/3);
        let bc=parseInt(c/3);
        for(let i=0;i<n;i++){
            let tmpR=br*3+parseInt(i/3);
            let tmpC=bc*3+(i%3);
            if(board[tmpR][tmpC]==d){
                return false;
            }
        }
        return true;
    };
    backtrack(board,0);
    
};

let board=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(board);
console.log("*********************************");
solveSudoku(board);
console.log(board);