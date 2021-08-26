// 归并排序逆序对
function reversePairs(nums) {
    const n = nums.length;
    let total = 0;
    const tmp = [];
    for (let i = 0; i < n; i++) {
        tmp[i] = nums[i];
    }

    function mergeSort(nums, left, right) {
        if (left >= right) {
            return;
        }
        let mid = parseInt((right + left) / 2);
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }

    function merge(nums, left, mid, right) {
        let p1 = left;
        let p2 = mid + 1;
        let i = left;
        while (p1 <= mid && p2 <= right) {
            if (nums[p2] < nums[p1]) {
                total += (mid - p1 + 1);
                tmp[i] = nums[p2];
                p2++;
            } else {
                tmp[i] = nums[p1];
                p1++;
            }
            i++;
        }
        while (p1 <= mid) {
            tmp[i++] = nums[p1++];
        }
        while (p2 <= right) {
            tmp[i++] = nums[p2++];
        }
        for (let i = left; i <= right; i++) {
            nums[i] = tmp[i];
        }
    }
    // console.log(nums);
    mergeSort(nums, 0, nums.length - 1);
    // console.log(nums);
    return total;
}



let nums = [6, 3, 2, 1, 5, 4];
console.log(reversePairs(nums));

