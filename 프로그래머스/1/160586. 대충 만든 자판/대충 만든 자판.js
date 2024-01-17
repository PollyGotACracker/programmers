function solution(keymap, targets) {
    const answer = [];
    const hash = new Map();
    
    keymap.forEach((key) => {
        [...key].forEach((char) => {
            const value = key.indexOf(char) + 1;
            if (!hash.get(char) || value < hash.get(char)) hash.set(char, value);  
        });
    })
    targets.forEach((str) => {
        let sum = [...str].reduce((acc, char) => acc + hash.get(char), 0);
        if (isNaN(sum)) sum = -1;
        answer.push(sum);
    });
    return answer;
}