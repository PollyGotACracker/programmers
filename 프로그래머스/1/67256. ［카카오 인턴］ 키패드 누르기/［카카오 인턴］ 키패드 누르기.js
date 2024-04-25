function solution(numbers, hand) {
    let answer = '';
    const keypadPos = [
        [3,1],
        [0,0], [0,1], [0,2], 
        [1,0], [1,1], [1,2], 
        [2,0], [2,1], [2,2]
    ];
    const handPos = { 
        L: [3,0], 
        R: [3,2] 
    };
    const handedValue = hand === "left" ? "L" : "R";
    
    for (let num of numbers) {
        const pos = keypadPos[num];
        let value = pos[1] === 0 ? "L" : pos[1] === 2 ? "R" : null; 
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

