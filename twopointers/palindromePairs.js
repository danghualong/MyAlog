// 判断能构成回文串的组合
var palindromePairs = function(words) {
    var isPalindrome=(word,start,end)=>{
        let len=(end-start+1);
        let l=0;
        let r=0;
        if(len%2==0){
            l=start+len/2-1;
            r=start+len/2;
        }else{
            l=start+(len-1)/2-1;
            r=start+(len+1)/2;
        }
        while(l>=start){
            if(word[l]!=word[r]){
                return false;
            }
            l--;
            r++;
        }
        return true;
    };
    var samePrefix=(longWord,shortWord,longfirst)=>{
        let len=shortWord.length;
        let equalPrefix=true;
        //cbadd  abc,长串在前,长串的前len个字符与短串是否镜像对称
        if(longfirst){
            for(let k=0;k<len;k++){
                if(longWord[len-k-1]!=shortWord[k])
                {
                    equalPrefix=false;
                    break;
                }
            }
            if(equalPrefix){
                if(isPalindrome(longWord,len,longWord.length-1)){
                    return true;
                }
            }
        }else{
            let len2=longWord.length;
            for(let k=0;k<len;k++){
                if(longWord[len2-1-k]!=shortWord[k])
                {
                    equalPrefix=false;
                    break;
                }
            }
            if(equalPrefix){
                if(isPalindrome(longWord,0,len2-len-1)){
                    return true;
                }
            }
        }
        return false;
    };
    let n=words.length;
    let longIndex=-1;
    let shortIndex=-1;
    let result=[];
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(words[j].length>words[i].length){
                longIndex=j;
                shortIndex=i;
            }else{
                longIndex=i;
                shortIndex=j;
            }
            if(samePrefix(words[longIndex],words[shortIndex],true)){
                result.push([longIndex,shortIndex]);
            }
            if(samePrefix(words[longIndex],words[shortIndex],false)){
                result.push([shortIndex,longIndex]);
            }
        }
    }
    return result;
};

let words=["bat","tab","cat"];//["abcd","dcba","lls","s","sssll"];
let result=palindromePairs(words);
console.log(result);
