// 用小顶堆实现的优先级队列
function PriorityQueue() {
    this.items = [];
    this.endIndex = -1;
}

PriorityQueue.prototype = {
    _sink: function (index, end) {
        if (index >= end) {
            return;
        }
        let l = index * 2 + 1;
        let r = index * 2 + 2;
        let t = index;
        if (l <= end) {
            if (this.items[t] > this.items[l]) {
                t = l;
            }
        }
        if (r <= end) {
            if (this.items[t] > this.items[r]) {
                t = r;
            }
        }
        if (t != index) {
            this._swap(t, index);
            this._sink(t, end);
        }
    },
    _swap: function (a, b) {
        let p = this.items[a];
        this.items[a] = this.items[b];
        this.items[b] = p;
    },
    enqueue: function (k) {
        if (this.items.length > this.endIndex + 1) {
            this.items[this.endIndex + 1] = k;
        } else {
            this.items.push(k);
        }
        this.endIndex++;
        let index = this.endIndex;
        while (true) {
            let pIndex = parseInt((index - 1) / 2);
            if (this.items[index] < this.items[pIndex]) {
                this._swap(index, pIndex);
                this._sink(pIndex, this.items.length - 1);
            }
            if (pIndex <= 0) {
                break;
            }
            index = pIndex;
        }
    },
    dequeue: function () {
        if (this.endIndex < 0) {
            return null;
        }
        let t = this.items[0];
        this.items[0] = this.items[this.endIndex];
        this.endIndex--;
        this._sink(0, this.endIndex);
        return t;
    },
    peek: function () {
        if (this.endIndex < 0) {
            return null;
        }
        return this.items[0];
    },
    sort: function () {
        let t = 0;
        while (t <= this.endIndex) {
            this._swap(0, this.endIndex - t);
            this._sink(0, this.endIndex - 1 - t);
            t++;
        }
        return this.items.reverse();
    }
};

// 获取第n个丑数
var nthSuperUglyNumber = function (n, primes) {
    let heap = new PriorityQueue();
    heap.enqueue(1);
    var map = {};
    map[1] = 1;
    while (true) {
        let t = heap.dequeue();
        n--;
        if (n == 0) {
            return t;
        }
        for (let i = 0; i < primes.length; i++) {
            let k = primes[i] * t;
            if (map[k] != undefined) {
                continue;
            }
            heap.enqueue(k);
            map[k] = 1;
        }
    }
};

