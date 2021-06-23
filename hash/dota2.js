var predictPartyVictory = function(senate) {
    const xx = new Map();
    xx.set("R","D");
    xx.set("D","R");
    let map=new Map();
    while (true) {
        map.set("R",0);
        map.set("D",0);
        for (let i = 0; i < senate.length; i++) {
            map.set(senate[i],map.get(senate[i])+1);
        }
        let newSenate = '';
        for (let i = 0; i < senate.length; i++) {
            console.log(map);
            if(map.get(senate[i])>0){
                let len = map.get(xx.get(senate[i]));
                if(len>0){
                    map.set(xx.get(senate[i]),len-1);
                    newSenate += senate[i];
                } else {
                    return senate[i];
                }
            }
        }
        console.log(newSenate);
        senate = newSenate;
    }
};

let senate="RDRRDDD";
let result = predictPartyVictory(senate);
console.log(result);