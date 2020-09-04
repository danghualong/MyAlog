//monotonous increasing stack
var maxArea=function(heights){
    let stack=[];
    let max=0;
    //sentinel element
    heights.push(0);
    var calcArea=(rightIndex)=>{
        if(stack.length==0){
            return;
        }
        let curIndex=stack.pop();
        let area=0;
        if(stack.length>0){
            let leftIndex=stack[stack.length-1];
            area=(rightIndex-leftIndex-1)*heights[curIndex];
        }else{
            area=rightIndex*heights[curIndex];
        }
        if(max<area){
            max=area;
        }
    };

    for(let i=0;i<heights.length;i++){
        while(stack.length>0){
            //当栈顶元素大于即将入栈元素
            if(heights[stack[stack.length-1]]>heights[i]){
                calcArea(i);
            }else{
                break;
            }
        }
        stack.push(i);
    }
    // while(stack.length>0){
    //     calcArea(heights.length); 
    // }
    return max;
};  

let heights=[3,4,1,4,3,5];
let result=maxArea(heights);
console.log(result);