function factorial(n) {
    if (n === 0) return 1;
    return factorial(n - 1) * n;
}

function solution(balls, share) {
    // 부동소수점 문제 해결을 위해 Math.round() 사용
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}