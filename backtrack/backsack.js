var maxPrice=function(nums,prices,maxWeight){
    let result=0;
    var backtrack=(i,totalWeight,totalPrice)=>{
        if(totalWeight>maxWeight){
           return; 
        }
        if(i>=nums.length ){
            if(totalPrice>result){
                result=totalPrice;
            }
            return;
        }
        backtrack(i+1,nums[i]+totalWeight,prices[i]+totalPrice);
        backtrack(i+1,totalWeight,totalPrice);
    };
    backtrack(0,0,0);
    return result;
};

let nums=[5,6,5,1,19,7];
let prices=[2,3,1,4,6,5];
let result=maxPrice(nums,prices,20);
console.log(result);
