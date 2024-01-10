function isOdd(n) {
    return n % 2 === 1;
}

function solution(a, b) {
    if (isOdd(a) && isOdd(b)) return (a * a) + (b * b);
    if (isOdd(a) || isOdd(b)) return 2 * (a + b);
    if (!isOdd(a) && !isOdd(b)) return Math.abs(a - b);
}