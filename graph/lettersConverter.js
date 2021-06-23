
var ladderLength=function(beginWord,endWord,wordList){
    const hasPath=(word1,word2)=>{
        let size=0;
        for(let i=0;i<word1.length;i++){
            size=word1[i]!=word2[i]?size+1:size;
        }
        return size==1;
    };
    let mapPaths=new Map();
    let visited=new Set();
    visited.add(beginWord);
    mapPaths.set(beginWord,1);
    while(beginWord!=endWord && visited.size<=wordList.length){
        for(let i=0;i<wordList.length;i++){
            if(!visited.has(wordList[i]) && hasPath(beginWord,wordList[i])){
                let size=mapPaths.get(beginWord)+1;
                if(mapPaths.has(wordList[i])){
                    size=Math.min(mapPaths.get(wordList[i]),size);
                }
                mapPaths.set(wordList[i],size);
            }
        }
        let mini=Infinity;
        let selected=null;
        for(let key of mapPaths.keys()){
            if(mapPaths.get(key)<mini && !visited.has(key)){
                selected=key;
                mini=mapPaths.get(key);
            }
        }
        console.log(beginWord,selected,visited,mapPaths)
        if(selected==endWord){
            return mini;
        }
        if(selected==null){
            return 0;
        }
        visited.add(selected);
        beginWord=selected;
    }
    return 0; 
};

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];

beginWord="hot";
endWord="dog";
wordList=["hot","dog","dot"];

let result=ladderLength(beginWord,endWord,wordList);
console.log(result);
