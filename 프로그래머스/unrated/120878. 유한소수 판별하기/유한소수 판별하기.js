function getGcd(n1, n2) {
    return n2 === 0 ? n1 : getGcd(n2, n1 % n2);
}

function solution(a, b) {
    const gcd = getGcd(a, b);
    b /= gcd;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}