const model=require("./model");


var obj=new model.FenwickTree([1,1,1,1,1,1,1,1,1]);
console.log(obj.arr);
obj.add(2,1);
console.log(obj.arr);
let total=obj.sum(obj.arr.length-1);
console.log(total);






