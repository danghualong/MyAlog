//using topology to check the circle of digraph.
var isValidCourses=function(numCourses,prerequisites){
    let inNums=new Array(numCourses).fill(0);
    //构建节点依赖项集合
    var buildGraph=function(numCourses,prerequisites){
        let graph=new Array(numCourses);
        // console.log(prerequisites);
        prerequisites.forEach(c => {
            if(graph[c[0]]==null){
                graph[c[0]]=[];
            }
            //每个节点的依赖节点
            graph[c[0]].push(c[1]);
            //每个节点的入度
            inNums[c[1]]++;
        });
        return graph;
    };
    let graph=buildGraph(numCourses,prerequisites);
    let queue=[];
    //入度不为0的节点数
    let  nonZeroInCount=0;
    //入度为0的节点放入队列
    for(let i=0;i<numCourses;i++){
        if(inNums[i]==0){
            queue.push(i);
        }else{
            //统计入度不为0的节点数
            nonZeroInCount++;
        }
    }
    while(queue.length>0){
        let k=queue.shift();
        if(graph[k]!=null){
            //如果删除0入度的当前节点，同时减去依赖节点的入度
            graph[k].forEach(p=>{
                inNums[p]--;
                //如果依赖节点的入度为0，放入队列
                if(inNums[p]==0){
                    nonZeroInCount--;
                    queue.push(p);
                }
            });
        }
    }
    return nonZeroInCount==0;
};

// let numCourses=3;
// let prerequisites=[[1,0],[0,2]];
// let result=isValidCourses(numCourses,prerequisites);
// console.log(result);

var check=function(numCourses,prerequisites){
    let graph=new Array(numCourses);
    // console.log(prerequisites);
    prerequisites.forEach(c => {
        if(graph[c[0]]==null){
            graph[c[0]]=[];
        }
        //每个节点的依赖节点
        graph[c[0]].push(c[1]);
    });
    visited=new Array(numCourses).fill(false);
    var dfs=function(index){
        if(visited[index]){
            return false;
        }
        let list=graph[index];
        if(list==null){
            return true;
        }
        visited[index]=true;
        let result=true;
        for(let i=0;i<list.length;i++){
            result=result&dfs(list[i]);
            if(!result){
                return false;
            }
        }
        visited[index]=false;
        return result;
    };
    for(let i=0;i<numCourses;i++){
        let result=dfs(i);
        if(!result){
            return false;
        }
    }
    return true;
};

let numCourses=4;
let prerequisites=[[1,0],[0,2],[2,3]];
let result=check(numCourses,prerequisites);
console.log(result);
