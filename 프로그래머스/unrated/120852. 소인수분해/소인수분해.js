function solution(n) {
    const answer = [];
    let divisor = 2;
    let share = n;
    
    while (share > 1) {
        if (share % divisor !== 0) {
            divisor++;
            continue;
        }
        share = Math.floor(share / divisor);
        if (answer.at(-1) !== divisor) answer.push(divisor);
    } 
    return answer;
}