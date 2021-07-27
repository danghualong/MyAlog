var model = require("../model");

function createLink(nums){
    let head = null;
    if (nums.length ==0) {
        return head;
    }
    head = new model.ListNode(nums[0]);
    let node = head;
    for (let i = 1; i < nums.length; i++){
        node.next = new model.ListNode(nums[i]);
        node = node.next;
    }
    return head;
}

function printLink(head) {
    let node = head;
    while (node != null) {
        console.log(node.val);
        node = node.next;
    }
}

function copyLink(head) {
    if (head == null) {
        return null;
    }
    let newHead = new model.ListNode(head.val);
    let lastNode = newHead;
    let node = head.next;
    while (node != null) {
        lastNode.next = new model.ListNode(node.val);
        lastNode = lastNode.next;
        node = node.next;
    }
    return newHead;
}

let nums = [3, 5, 7, 2, 4, 6];
let head = createLink(nums);
printLink(head);
console.log("new Node:");
let newHead = copyLink(head);
printLink(newHead);