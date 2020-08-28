
var createGraph=(tickets)=>{
    let map=new Map();
    let count=tickets.length;
    for(let ticket of tickets){
        if(!map.has(ticket[0])){
            map.set(ticket[0],[]);
        }
        map.get(ticket[0]).push(ticket[1]);
    }
    for(let k of map.keys()){
        map.get(k).sort((a,b)=>b.localeCompare(a));
    }
    return map;
};
//一笔画问题
var findItinerary = function(tickets) {
    var dfs=(graph,key,path)=>{
        var arr=graph.get(key);
        if(arr!=null){
            for(let i=arr.length-1;i>=0;i--){
                var subArr=arr.splice(i,1);
                if(subArr.length>0){
                    dfs(graph,subArr[0],path);
                }
            }
        }
        path.unshift(key);
    };
    var graph=createGraph(tickets);
    console.log(graph);
    let path=[];
    dfs(graph,'JFK',path);
    return path;
};

var findAllPaths=function(tickets){
    let result=[];
    let count=tickets.length;
    var graph=createGraph(tickets);
    var backtrack=(key,path,count)=>{
        if(count==0){
            result.push(path.slice());
            return;
        }
        let adjs=graph.get(key);
        // console.log(key,adjs);
        for(let i=adjs.length-1;i>=0;i--){
            let tmp=adjs.slice();
            let adjKey=adjs.splice(i,1);
            path.push(adjKey[0]);
            backtrack(adjKey[0],path,count-1);
            path.pop();
            graph.set(key,tmp);
            adjs=tmp;
        }
    };
    backtrack('JFK',['JFK'],count);
    return result;
};

let tickets=[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];//[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];
var path=findItinerary(tickets);
console.log("最优路径:")
console.log(path);
console.log("所有的可行路径:")
var paths=findAllPaths(tickets);
console.log(paths);