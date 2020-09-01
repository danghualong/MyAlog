var canVisitAllRooms = function(rooms) {
    let n=rooms.length;
    let visited=new Array(n).fill(false);
    let not_visit_count=n;
    var dfs=(rooms,i)=>{
        if(visited[i]){
            return;
        }
        let keys=rooms[i];
        visited[i]=true;
        not_visit_count--;
        for(let k of keys){
            dfs(rooms,k);
        }
    };
    dfs(rooms,0);
    return not_visit_count==0;
};

let rooms=[[1,3],[3,0,1],[2],[0]];
rooms=[[1],[2],[3],[]];
console.log(canVisitAllRooms(rooms));
