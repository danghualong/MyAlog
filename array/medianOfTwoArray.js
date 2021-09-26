

function findMedian(arr1, arr2) {
    let t = arr1.length + arr2.length;
    let k = parseInt((t - 1) / 2);

    var findMedian2 = (arr1, left1, right1, arr2, left2, right2, k) => {
        // console.log(left1, right1, left2, right2, k);
        // arr1子数组为空
        if (left1 > right1) {
            return arr2[left2 + k];
        }
        // arr2子数组为空
        if (left2 > right2) {
            return arr1[left1 + k];
        }
        //取第一个最小值
        if (k == 0) {
            return Math.min(arr1[left1], arr2[left2]);
        }
        // 分别取两个子数组的第(k-1)/2个值，
        // 若（k-1)/2+left>right,则取right对应值
        let mid = parseInt((k - 1) / 2);
        let mid1 = Math.min(left1 + mid, right1);
        let mid2 = Math.min(left2 + mid, right2);
        if (arr1[mid1] <= arr2[mid2]) {
            return findMedian2(arr1, mid1 + 1, right1, arr2, left2, right2, k - 1 - (mid1 - left1));
        } else {
            return findMedian2(arr1, left1, right1, arr2, mid2 + 1, right2, k - 1 - (mid2 - left2));
        }
    };
    if (t % 2 == 1) {
        return findMedian2(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1, k);
    } else {
        let d1 = findMedian2(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1, k);
        let d2 = findMedian2(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1, k + 1);
        return (d1 + d2) / 2;
    }
}

let arr1 = [7, 8, 9, 10, 11];
let arr2 = [3, 4, 5, 6];
let d = findMedian(arr1, arr2);
console.log(d);