var islandPerimeter = function(grid) {
    var getSize=function(grid,m,n,i,j){
        let size=0;
        if(grid[i][j]==1){
            if(i==0 ||(grid[i-1][j]==0)){
                size++;
            }
            if(i==m-1 || (grid[i+1][j]==0)){
                size++;
            }
            if(j==0 || (grid[i][j-1]==0)){
                size++;
            }
            if(j==n-1 ||(grid[i][j+1]==0)){
                size++;
            }
        }
        return size;
    };
    let m=grid.length;
    let n=grid[0].length;
    let result=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            result+=getSize(grid,m,n,i,j);
        }
    }
    return result;
};

let grid=[[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]];

let result=islandPerimeter(grid);
console.log(result);