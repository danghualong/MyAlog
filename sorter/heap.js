// 交换元素
var swap = (items, i, j) => {
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
};
// 比较元素大小
function compare(items, first, second, reverse) {
    if (reverse) {
        return items[first] > items[second];
    } else {
        return items[first] < items[second];
    }
}
// 下沉当前节点
// i为当前节点索引
// k为最大的索引位置
// reverse 是否倒序
function sink(items, i, k, reverse) {
    while (i < k) {
        let target = i;
        if (i * 2 + 1 < k && compare(items, target, i * 2 + 1, reverse)) {
            target = i * 2 + 1;
        }
        if (i * 2 + 2 < k && compare(items, target, i * 2 + 2, reverse)) {
            target = i * 2 + 2;
        }
        if (target == i) {
            break;
        }
        swap(items, i, target);
        sink(items, target, k, reverse);
    }
}

// 构建k个元素的堆
function heapify(items, k, reverse) {
    if (k <= 0) {
        return;
    }
    if (k > items.length) {
        k = items.length;
    }
    // 从最后一个拥有孩子的节点开始，直到根节点
    for (let i = parseInt((k - 2) / 2); i >= 0; i--) {
        sink(items, i, k, reverse);
    }
}
// 排列元素
// reverse是否倒序排列
function sort(items, reverse) {
    let k = items.length;
    // 构建堆
    heapify(items, k, reverse);
    while (k > 0) {
        // 交换最大值和第k个值，
        // 保证最大值在最后面
        swap(items, 0, k - 1);
        // 下沉第1个节点
        sink(items, 0, k - 1, reverse);
        k--;
    }
}

module.exports = {
    sort,
}
