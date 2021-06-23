var monotoneIncreasingDigits = function(N) {
    const strN = N.toString();
    const size = strN.length;
    if (size == 0) {
        return 0;
    }
    let curNum = Math.pow(10, size - 1) * strN[0];
    for (let i = 1; i < size; i++){
        if (parseInt(strN[i]) < parseInt(strN[i - 1])) {
            // 验证curNum 由第i-1(0为基数)个从后往前验证每位数是否相等，一直往前找到不相等的数字
            // 如 34440 从第3个4开始，往前验证是否有小于4的数，正好到3，则为3399
            // 如果找不到 如44440,则将取第一位数为4，其余为0，然后减去1
            let curNumArr = curNum.toString().split('');
            for (let j = i - 1; j >= 1; j--){
                if (curNumArr[j - 1] < curNumArr[j]) {
                    curNumArr[j] = (parseInt(curNumArr[j]) - 1).toString();
                    for (let k = j + 1; k < size; k++){
                        curNumArr[k] = '9';
                    }
                    return parseInt(curNumArr.join(''));
                }
            }
            return curNum = Math.pow(10, size - 1) * strN[0] - 1;
        } else {
            curNum += Math.pow(10, size - 1 - i) * parseInt(strN[i]);
        }
    }
    return curNum;
};

let N = 34443;
console.log(N, monotoneIncreasingDigits(N));
N = 34444;
console.log(N, monotoneIncreasingDigits(N));
N = 44442;
console.log(N, monotoneIncreasingDigits(N));
N = 10;
console.log(N, monotoneIncreasingDigits(N));
N = 11;
console.log(N, monotoneIncreasingDigits(N));

