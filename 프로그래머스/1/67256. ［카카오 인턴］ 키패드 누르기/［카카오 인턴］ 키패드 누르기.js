function solution(numbers, hand) {
    let answer = '';
    const keypadPos = {
        "1": { value: "L", pos: [0,0] },
        "4": { value: "L", pos: [1,0] },
        "7": { value: "L", pos: [2,0] },
        "3": { value: "R", pos: [0,2] },
        "6": { value: "R", pos: [1,2] },
        "9": { value: "R", pos: [2,2] },
        "2": { value: null, pos: [0,1] },
        "5": { value: null, pos: [1,1] },
        "8": { value: null, pos: [2,1] },
        "0": { value: null, pos: [3,1] }
    };
    const handPos = { 
        L: [3,0], 
        R: [3,2] 
    };
    const handedValue = hand === "left" ? "L" : "R";
    
    for (let num of numbers) {
        let { value, pos } = keypadPos[num.toString()];
        if (!!!value) {
            const dl = calcDistance(pos, handPos["L"]);
            const dr = calcDistance(pos, handPos["R"]);
            value = dl < dr ? "L" : dl > dr ? "R" : handedValue;
        }
        answer += value;
        handPos[value] = pos;
    }
    
    return answer;
}

function calcDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

