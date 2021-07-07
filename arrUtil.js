var matrix= (m, n, defVal = 0) => {
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[i].push(defVal);
        }
    }
    return arr;
};

var matrix3 = (m, n,k, defVal = 0) => {
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[i].push([]);
            for (let l = 0; l < k; l++){
                arr[i][j].push(defVal);
            }
        }
    }
    return arr;
};

module.exports= {
    matrix,
    matrix3
}