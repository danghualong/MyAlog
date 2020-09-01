var canVisitAllRooms = function(rooms) {
    let n=rooms.length;
    let visited=new Array(n).fill(false);
    visited[0]=true;
    let not_visit_count=n-1;
    let queue=[];
    queue.push(...rooms[0]);
    while(queue.length>0){
        let i=queue.shift();
        if(visited[i]){
            continue;
        }
        queue.push(...rooms[i]);
        visited[i]=true;
        not_visit_count--;
    }
    return not_visit_count==0;
};

let rooms=[[1,3],[3,0,1],[2],[0]];
rooms=[[1],[2],[3],[]];
console.log(canVisitAllRooms(rooms));
