//数字华容道 8个棋子
var slidingBlock = function (nums) {
    let result = [];
    var isValid = (pos, i) => {
        if (i == pos - 1 && pos % 3 != 0) {
            return true;
        }
        if (i == pos - 3 || i == pos + 3) {
            return true;
        }
        if (i == pos + 1 && i % 3 != 0) {
            return true;
        }
        return false;
    };
    const DEST = "123456780";
    // 当前状态-->父状态
    const map = new Map();
    const queue = [];
    map.set(nums, null);
    queue.push(nums);
    let target = null;
    while (queue.length > 0) {
        var t = queue.shift();
        if (t === DEST) {
            target = DEST;
            break;
        }
        let pos = t.indexOf("0");
        for (let i = 0; i < 9; i++) {
            if (isValid(pos, i)) {
                const arr = t.split("");
                arr[pos] = arr[i];
                arr[i] = "0";
                const subT = arr.join("");
                if (!map.has(subT)) {
                    queue.push(subT);
                    map.set(subT, t);
                }
            }
        }
    }
    const steps = [];
    if (target != null) {
        let t = target;
        while (t != null) {
            result.push(t);
            t = map.get(t);
        }
        result.reverse();
        for (let i = 0; i < result.length - 1; i++) {
            let p = result[i + 1].indexOf("0");
            steps.push("->" + result[i][p]);
        }
    }
    return steps;
}


var nums = "012345678";
const result = slidingBlock(nums);
if (result.length > 0) {
    result.forEach(p => {
        console.log(p);
    });
    console.log("共" + result.length + "步");
} else {
    console.log(nums, "--此题无解");
}

