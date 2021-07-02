// 获取两个递增数组的中位数
function getMedian(arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;
    // 当两个数组都为空时，返回null
    if (m == 0 && n==0) {
        return null;
    }
    // 保证第一个数组长度不超过第二个数组长度
    if (m > n) {
        return getMedian(arr2, arr1);
    } else if (m == n) {
        // 在每个数组尾部插上哨兵元素
        arr1.push(Number.MAX_VALUE);
        arr2.push(Number.MAX_VALUE);
    } else {
        // 在较短的数组尾部插上哨兵元素
        // 就不用判断当前数组是否为空了
        arr1.push(Number.MAX_VALUE);
    }
    // 获取两个数组中第k小的元素
    // left1 为第一个数组的起始索引值
    // left2 为第二个数组的起始索引值
    let getKNumber = (arr1, arr2, left1, left2, k) => {
        // 获取两个数组片段中最小的一个值
        if (k == 1) {
            return Math.min(arr1[left1], arr2[left2]);
        }
        let aLen = parseInt(k / 2);
        // 当数组1剩余长度不够k/2时,
        // 数组1指向最后一个哨兵元素
        if (arr1.length - left1< aLen) {
            aLen = arr1.length - left1;
        }
        let bLen = k - aLen;
        // 比较两个数组的当前元素大小
        // 当数组1元素小于数组2，则抛弃数组1之前的全部元素
        // 反之，抛弃数组2之前的全部元素
        if (arr1[left1 + aLen - 1] < arr2[left2 + bLen - 1]) {
            left1 = left1 + aLen;
            k -= aLen;
        } else {
            left2 = left2 + bLen;
            k -= bLen;
        }
        // 递归调用getKNumber方法，直至k=1
        return getKNumber(arr1, arr2, left1, left2, k);
    }
    // 数组长度和为偶数，中位数为中间两个元素的平均值
    // 为奇数，中位数为中间元素值
    if ((m + n) % 2 == 0) {
        let a = getKNumber(arr1, arr2, 0, 0, (m + n) / 2);
        let b = getKNumber(arr1, arr2, 0, 0, (m + n) / 2+1);
        return (a + b) / 2;
    } else {
        return getKNumber(arr1, arr2, 0, 0, (m + n + 1) / 2);
    }
}

let a = [3, 5, 7, 11, 13,16,17];
let b = [5,6,16,18,20];
let result = getMedian(a, b);
console.log(result);