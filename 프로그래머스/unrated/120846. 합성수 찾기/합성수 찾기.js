function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++;
            if (n / i !== i) count++;  
        }
        if (count >= 3) return true;
    }
    return false;
}

function solution(n) {
    let answer = 0;
    for (let i = 4; i <= n; i++) {
        if (countDivisors(i)) answer++;
    }
    return answer;
}