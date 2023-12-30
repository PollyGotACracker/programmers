function factorial(n) {
    if (n === 0) return 1;
    return factorial(n - 1) * n;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}