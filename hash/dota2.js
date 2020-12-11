var predictPartyVictory = function(senate) {
    let map = new Map();
    map.set("R", 0);
    map.set("D", 0);
    let rivals = new Map();
    rivals.set("R", "D");
    rivals.set("D", "R");

    while (true) {
        let newSenate = '';
        for ( let i = 0; i < senate.length; i++){
            const a = senate[i];
            if (map.get(a) > 0) {
                map.set(a, map.get(a) - 1);
            }
            else {
                const rival = rivals.get(a);
                map.set(rival, map.get(rival) + 1);
                newSenate += a;
            }
        }
        senate = newSenate;
        const DLen = newSenate.replace(/R/g, '').length;
        const RLen = senate.length - DLen;
        console.log(senate, map, DLen, RLen);
        if (map.get("D") >= DLen) {
            return "R";
        }
        else if (map.get("R") >= RLen) {
            return "D";
        }
    }

};

let senate="RDDDR";
console.log(predictPartyVictory(senate));