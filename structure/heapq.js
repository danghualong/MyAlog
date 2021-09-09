function swap(items, i, j) {
    let p = items[i];
    items[i] = items[j];
    items[j] = p;
}

function sink(items, k, end) {
    if (k < 0 || k >= items.length || k >= end) {
        return;
    }
    if (end >= items.length) {
        end = items.length - 1;
    }
    let childLeft = k * 2 + 1;
    let childRight = k * 2 + 2;
    let next = k;
    if (childLeft <= end && items[next] > items[childLeft]) {
        next = childLeft;
    }
    if (childRight <= end && items[next] > items[childRight]) {
        next = childRight;
    }
    if (k != next) {
        swap(items, k, next);
        sink(items, next, end);
    }
}

function float(items, k) {
    if (k <= 0 || k >= items.length) {
        return;
    }
    // 父索引
    let pIndex = parseInt((k - 1) / 2);
    // 当父节点小于当前子节点
    if (items[pIndex] > items[k]) {
        swap(items, pIndex, k);
        sink(items, pIndex, items.length - 1);
        float(items, pIndex);
    }
}

function heapify(list) {
    if (!list) {
        return;
    }
    for (let i = list.length - 1; i >= 0; i--) {
        float(list, i);
    }
}

function nsmallest(list, n) {
    if (!list || n <= 0) {
        return null;
    }
    n = Math.min(list.length, n);
    heapSort(list, n);
    return list.slice(list.length - n).reverse();
}

function heapSort(list, n = 0) {
    if (!list) {
        return;
    }
    if (n <= 0) {
        n = list.length;
    }
    n = Math.min(list.length, n);
    heapify(list);
    const result = [];
    for (let i = 0; i < n; i++) {
        swap(list, 0, list.length - 1 - i);
        sink(list, 0, list.length - 2 - i);
    }
}

function nlargest(list, n) {
    if (!list || n <= 0) {
        return;
    }
    // 前n个最大值
    n = Math.min(list.length, n);
    // 排序 T-n个最小即可
    heapSort(list, list.length - n);
    return list.slice(0, n);
}

module.exports = {
    heapify,
    nsmallest,
    nlargest,
    heapSort,
}




