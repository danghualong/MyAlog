// 我方每次只能射杀一个敌人，当其中有敌人到达目的地（游戏结束)时，
// 能消灭的敌人最大数
// dists 敌人离目标的距离
// steps 每个敌人的移动步数
function getMaxScore(dists,steps){
    let findNearestDist=()=>{
        console.log(dists);
        let index=-1;
        let less1Count=0;
        let minDist=Number.MAX_VALUE;
        for(let i=0;i<dists.length;i++){
            // 当前已经到达目标的敌人数量
            if(dists[i]<=0){
                less1Count++;
            }
            // 下一刻，离目标最近的敌人距离    
            if(minDist>dists[i]-steps[i]){
                minDist=dists[i]-steps[i];
                index=i;
            }
        }
        return [index,less1Count];
    }
    let count=0;
    while(count<dists.length){
        // 返回离目标最近的敌人索引,和已经到达目标的敌人数量
        const arr=findNearestDist();
        // 当前有敌人到达游戏结束
        if(arr[1]>0){
            return count;
        }else{
            // 杀死最近的敌人(将距离置为无限远)
            dists[arr[0]]=Number.MAX_VALUE;
            count++;
        }
        // 更新每个敌人最新距离
        for(let i=0;i<dists.length;i++){
            if(dists[i]!=Number.MAX_VALUE){
                dists[i]-=steps[i];
            }
        }
    }
    return count;
}


let dists=[3,3,5,7,5];
let steps=[1,4,4,3,2];
const maxScore=getMaxScore(dists,steps);
console.log(maxScore);