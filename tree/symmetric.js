var model = require("../model");
var util = require("../treeUtil");
function isSymmetric(arr) {
    let root = util.deserialize(arr);
    if (root == null) {
        return true;
    }
    let isBalance = (left, right) => {
        if (left == null && right == null) {
            return true;
        }
        else if (left != null && right != null) {
            if (left.val != right.val) {
                return false;
            }
            return isBalance(left.left, right.right) && isBalance(left.right, right.left);
        } else {
            return false;
        }
    };
    return isBalance(root.left, root.right);
}

const arr = [1, 2, 2, 3, 4, 4, 3];
console.log(arr, isSymmetric(arr));

const arr2 = [1, 2, 2, null, 3, null, 3];
console.log(arr2, isSymmetric(arr2));