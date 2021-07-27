// 获取最长递增子序列
// 2.贪心+二分查找
function LIS_Greedy(arr) {
    // 二分查找
    let bs = (arr, t) => {
        let l = 0;
        let r = arr.length - 1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);
            if (arr[mid] < t) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    };
    let n = arr.length;
    if (n == 0) {
        return 0;
    }
    // 保证序列增长速度最慢
    // 如[1,8,9,2,3,5]
    let res = [];
    res.push(arr[0]);
    for (let i = 1; i < n; i++){
        t = bs(res, arr[i]);
        if (t >=res.length) {
            res.push(arr[i]);
        } else {
            res[t] = arr[i];
        }
    }
    return res.length;
}

let arr = [5, 9, 3, 5, 3, 7, 11];
console.log(LIS_Greedy(arr));