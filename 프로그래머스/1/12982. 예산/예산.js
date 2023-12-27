function solution(d, budget) {
    let spent = 0;
    let answer = 0;
    
    d.sort((a, b) => a - b);
    for (let i of d) {
        if (spent + i > budget) break;
        spent += i;
        answer++;
    }
    return answer;
}