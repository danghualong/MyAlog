var Node=function(){
    this.isWord=false;
    this.children=new Map();
};
var Trie=function(){
    this.root=new Node();
};
Trie.prototype={
    add:function(word){
        let cur=this.root;
        for(let i=0;i<word.length;i++){
            if(!cur.children.has(word[i])){
                cur.children.set(word[i],new Node());
            }
            cur=cur.children.get(word[i]);
        }
        cur.isWord=true;
    },
    contains:function(word){
        let cur=this.root;
        for(let i=0;i<word.length;i++){
            if(!cur.children.has(word[i])){
                return false;
            }
            cur=cur.children.get(word[i]);
        }
        return cur.isWord;
    },
    delete:function(word){
        let cur=this.root;
        let startIndex=-1;
        let lastNode=null;
        for(let i=0;i<word.length;i++){
            //前一个isWord=true的节点
            if(cur.isWord){
                startIndex=i;
                lastNode=cur;
            }
            cur=cur.children.get(word[i]);
        }
        //后续没有字符
        if(lastNode!=null){
            lastNode.children.delete(word[startIndex]);
        }else{
            //后续还有字符
            cur.isWord=false;
        }
    }
};

let trie=new Trie();
trie.add("paint");
console.log(trie.contains("pain"));
trie.add("pain");
console.log(trie.contains("pain"));
trie.delete("paint");
console.log(trie.contains("paint"));
console.log(trie.contains("pain"));

