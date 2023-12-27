function solution(code) {
    let answer = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = mode === 1 ? 0 : 1; 
            continue;
        }
        if ((!mode && !(i % 2)) || (mode && i % 2)) answer += code[i];
    }
    return answer || "EMPTY";
}