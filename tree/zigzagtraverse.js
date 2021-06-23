function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function zigzagtranverse(root) {
    const stack1 = [];
    const stack2 = [];
    let l2r = true;
    if (root != null) {
        stack1.push(root);
    }
    const result = [];
    
    let handle = function (outArr, inArr, l2r) {
        const tmpArr = [];
        while (outArr.length > 0) {
            let item = outArr.pop();
            if (item) {
                tmpArr.push(item.val);
                if (l2r) {
                    inArr.push(item.left);
                    inArr.push(item.right);
                } else {
                    inArr.push(item.right);
                    inArr.push(item.left);
                }
                
            }
        }
        if (tmpArr.length != 0) {
            result.push(tmpArr.slice());
        }
        return !l2r;
    };

    while (true) {
        const outArr = l2r ? stack1 : stack2;
        const inArr = l2r ? stack2 : stack1;
        if (outArr.length == 0) {
            break;
        }
        l2r = handle(outArr,inArr, l2r);
    }
    return result;
    
}

const deserialize = require("../treeUtil")["deserialize"];
let nums = [3, 9, 20, null, 12, 15, 7,null,6,3,4,5,6];
const root = deserialize(nums);
const result = zigzagtranverse(root);
console.log(result);