//扫雷游戏
var solve = function(board) {
    let m=board.length;
    if(m==0){
        return;
    }
    let n=board[0].length;
    if(n==0){
        return;
    }
    let len=m*n;
    let queue=[];
    let visited=new Set();
    let unset=new Set();
    for(let i=0;i<len;i++){
        if(board[parseInt(i/n)][i%n]=='O' && !unset.has(i)){
            queue.push(i);
            visited.add(i); 
            //是否保持原来的值
            let isSet=false;
            while(queue.length>0){
                let k=queue.shift();
                if(parseInt(k/n)==0 ||parseInt(k/n)==m-1 ||k%n==0 ||(k+1)%n==0){
                    isSet=true;
                }
                if(!visited.has(k+1) && parseInt((k+1)/n)==parseInt(k/n) && board[parseInt((k+1)/n)][(k+1)%n]=='O'){
                    queue.push(k+1);
                    visited.add(k+1);
                }
                if(!visited.has(k-1) && parseInt((k-1)/n)==parseInt(k/n) && board[parseInt((k-1)/n)][(k-1)%n]=='O'){
                    queue.push(k-1);
                    visited.add(k-1);
                }
                if(!visited.has(k-n) && k>=n && board[parseInt(k/n)-1][k%n]=='O'){
                    queue.push(k-n);
                    visited.add(k-n);
                }
                if(!visited.has(k+n) && k<(m-1)*n && board[parseInt(k/n)+1][k%n]=='O'){
                    queue.push(k+n);
                    visited.add(k+n);
                }
            }
            if(isSet){
                for(let key of visited){
                    unset.add(key);
                }
            }else{
                for(let key of visited){
                    board[parseInt(key/n)][key%n]='X';
                }
            }
            visited.clear();
        }
    }
    console.log(board);
};

let board=[
    ['X','X','X','X'],
    ['X','O','O','X'],
    ['X','X','O','X'],
    ['X','O','X','X']
];

solve(board);

board=[
    ['O','O','O'],
    ['O','O','O'],
    ['O','O','O']
];
solve(board);

