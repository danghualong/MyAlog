var insert = function(intervals, newInterval) {
    if(intervals.length==0){
        return [newInterval];
    }
    if(newInterval[1]<intervals[0][0]){
        return [newInterval,...intervals];
    }else if(newInterval[0]>intervals[intervals.length-1][1]){
        return [...intervals,newInterval];
    }
    let started=false;
    let stopped=false;
    let startVal=newInterval[0];
    let endVal=newInterval[1];
    let result=[];
    for(let i=0;i<intervals.length;i++){
        if(!started){
            if(intervals[i][0]>newInterval[0]){
                startVal=newInterval[0];
                started=true;
            }else if(intervals[i][1]>=newInterval[0]){
                startVal=intervals[i][0];
                started=true;
            }else{
                result.push(intervals[i]);
            }
        }
        if(started){
            if(!stopped){
                if(intervals[i][0]>newInterval[1]){
                    endVal=newInterval[1];
                    result.push([startVal,endVal]);
                    stopped=true;
                }else if(intervals[i][1]>=newInterval[1]){
                    endVal=intervals[i][1];
                    result.push([startVal,endVal]);
                    stopped=true;
                    continue;
                }else{
                    if(i==intervals.length-1){
                        endVal=newInterval[1];
                        result.push([startVal,endVal]);
                        stopped=true;
                        break;
                    }
                }
            }
            if(stopped){
                result.push(intervals[i]);
            }
        }
    }
    
    return result;
};
let intervals=[[2,3],[4,5],[6,7],[8,10],[12,16]];
let newInterval=[17,18];
let result=insert(intervals,newInterval);
console.log(result);