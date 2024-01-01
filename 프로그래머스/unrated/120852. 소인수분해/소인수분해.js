function solution(n) {
    const answer = [];
    let divisor = 2;
    
    while (n > 1) {
        if (n % divisor === 0) {
            n = Math.floor(n / divisor);
            if (answer.at(-1) !== divisor) answer.push(divisor);
        } else divisor++;
    } 
    return answer;
}