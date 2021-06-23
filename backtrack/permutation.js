function permutation(nums) {
    let result = [];
    let t = Number.MAX_VALUE;
    let backtrack = (arr, nums) => {
        if (nums.length == 0) {
            result.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            //上次出栈的不能再入栈
            if (nums[i] == t) {
                continue;
            }
            arr.push(nums[i]);
            nums.splice(i, 1);
            t = Number.MAX_VALUE;
            backtrack(arr, nums);
            t = arr.pop();
            nums.splice(i, 0, t);
        }
    };
    backtrack([], nums);
    console.log(result);
}

let nums = [2,3,5];
permutation(nums);