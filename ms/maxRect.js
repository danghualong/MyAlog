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
let result1=maxArea(heights);
console.log("当前矩形围成的最大面积为:",result1);

//最大由1围成的矩形面积
var maxRect=function(matrix){
    let result=0;
    let heights=new Array(matrix[0].length).fill(0);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]!=0){
                heights[j]+=1;
            }else{
                heights[j]=0;
            }
        }
        let tmpMaxArea=maxArea(heights);
        if(tmpMaxArea>result){
            result=tmpMaxArea;
        }
    } 
    return result;
}

let matrix=[
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ];
let result2=maxRect(matrix);
console.log("由1围成的最大面积为:",result2);