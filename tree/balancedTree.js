//判断是否是平衡二叉树
// 每个节点的左右子树高度不超过1

let treeUtil = require("../treeUtil");

let height = (node) => {
    if (node == null) {
        return 0;
    }
    return Math.max(height(node.left), height(node.right)) + 1;
}
function isBalanced(node) {
    if (node == null) {
        return true;
    }
    if (Math.abs(height(node.left) - height(node.right)) > 1) {
        return false;
    }
    return isBalanced(node.left) && isBalanced(node.right);
}

const { TreeNode } = require("../model");

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
let r = root.right;
r.right = new TreeNode(6);
let r2 = r.right;
r2.right = new TreeNode(7);
console.log(isBalanced(root));



