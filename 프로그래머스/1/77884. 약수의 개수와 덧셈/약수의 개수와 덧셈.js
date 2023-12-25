function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        const isOddDivisorCount = Number.isInteger(Math.sqrt(i));
        isOddDivisorCount ? answer -= i : answer += i;
    }
    return answer;
}