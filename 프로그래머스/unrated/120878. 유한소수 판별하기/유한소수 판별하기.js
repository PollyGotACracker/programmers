function getGcd(n1, n2) {
    return n2 === 0 ? n1 : getGcd(n2, n1 % n2);
}

function isPrime(n) {
    const sqrt = Math.floor(Math.sqrt(n));
    let i = 2;
    while (i <= sqrt) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}

function solution(a, b) {
    const gcd = getGcd(a, b);
    const dividedB = b / gcd;
    let i = 2;
    while (i <= dividedB) {
        if (isPrime(i) && i !== 2 && i !== 5 && dividedB % i === 0) return 2;
        i++;
    }
    return 1;
}