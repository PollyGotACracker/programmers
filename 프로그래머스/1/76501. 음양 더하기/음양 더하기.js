function solution(absolutes, signs) {
    let answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        const num = signs[i] ? absolutes[i] : absolutes[i] * -1;
        answer += num;
    }
    return answer;
}