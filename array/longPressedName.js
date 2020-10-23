//比较某个名字是否是因为长按键造成的
var isLongPressedName = function(name, typed) {
    let m=name.length;
    let n=typed.length;
    //name指针
    let i=0;
    //typed指针
    let j=0;
    while(i<m){
        //当typed已经结束
        if(j>=n){
            return false;
        }
        //两个字符相等
        if(typed[j]==name[i]){
            //两个指针同时下移一个
            j++;
        }else{
            //是否和name的上一个字符相等
            if(i!=0 && typed[j]==name[i-1]){
                //仅typed指针下移一个
                j++;
                continue;
            }else{
                //否则不匹配
                return false;
            }
        }
        i++;
    }
    //typed的剩余字符全等于name的最后一个字符
    while(j<n){
        if(typed[j]!=name[m-1]){
            return false;
        }
        j++;
    }
    return true;
};

let name='leelee';
let typed='lleeelee';
console.log(isLongPressedName(name,typed));