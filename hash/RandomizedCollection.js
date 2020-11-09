var RandomizedCollection = function() {
    this.map=new Map();
    this.arr=[];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    this.arr.push(val);
    if(!this.map.has(val)){
        let set=new Set();
        set.add(this.arr.length-1);
        this.map.set(val,set);
        return true;
    }
    this.map.get(val).add(this.arr.length-1);
    return false;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if(!this.map.has(val)){
        return false;
    }
    //首先删除Set中第一个值
    let tmpSet=this.map.get(val);
    let index=tmpSet.values().next().value;
    tmpSet.delete(index);
    //最后一个元素值对应set更新索引
    let val2=this.arr[this.arr.length-1];  
    //（先添加索引，再删除索引，以防删除索引时，找不到目标值)
    this.map.get(val2).add(index);
    this.map.get(val2).delete(this.arr.length-1);

    //最后一个元素值替换val
    this.arr[index]=this.arr[this.arr.length-1];
    this.arr.pop();

    if(tmpSet.size==0){
        this.map.delete(val);
    }
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.arr.length==0?0:this.arr[parseInt(this.arr.length*Math.random())];
};

let obj=new RandomizedCollection();
// console.log(obj.insert(4));
// console.log(obj.insert(3));
// console.log(obj.insert(4));
// console.log(obj.insert(2));
// console.log(obj.insert(4));
// console.log(obj.remove(4));
// console.log(obj.remove(3));
// console.log(obj.remove(4));
// console.log(obj.remove(4));
// console.log(obj.arr,obj.map);
// console.log(obj.remove(4));


// console.log(obj.insert(0));
// console.log(obj.remove(0));
// console.log(obj.arr,obj.map);
// console.log(obj.insert(-1));
// console.log(obj.remove(0));
// console.log(obj.getRandom());
// console.log(obj.getRandom());





