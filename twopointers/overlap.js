// 利用投影法找到申请最少会议室总数
function getMinRoomsByShadow(times) {
    let starts = [];
    let ends = [];
    const n = times.length;
    for (let i = 0; i < n; i++){
        starts.push(times[i][0]);
        ends.push(times[i][1]);
    }
    starts.sort();
    ends.sort();
    let i=0,j = 0;
    let count = 0;
    while (i < n && j < n) {
        console.log("i,j,count:", i, j, count);
        if (starts[i] < ends[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }
    }
    return count;
}

const times = [[2, 3], [5, 7], [4, 6], [3, 8]];
console.log("meeting rooms:", getMinRoomsByShadow(times));

// 用区间融合的办法获取融合的区间数
function getMinRoomsByMerge(times) {
    // 区间按开始时间排序
    times.sort((a, b) => a[0] - b[0]);
    // 区间融合
    let merge = (first, second) => {
        if (first[1] > second[0]) {
            return [second[0], Math.max(second[1], first[1])];
        } else {
            count++;
            return second;
        }
    }
    // 特殊情况
    if (times.length == 0) {
        return 0;
    }
    //不可以融合的区间数
    let count = 1;
    let first = times[0];
    for (let i = 0; i < times.length-1; i++){
        first = merge(first, times[i + 1]);
    }
    // 总数减去不可以融合的区间数+1
    return times.length - count+1;
}

console.log(getMinRoomsByMerge(times));