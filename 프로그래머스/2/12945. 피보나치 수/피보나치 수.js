function solution(n) {
    let count = 2;
    let f1 = 0n;
    let f2 = 1n;
    
    while (count !== n) {
        const sum = f1 + f2;
        f1 = f2;
        f2 = sum;
        count++;
    }
    return (f1 + f2) % BigInt(1234567);
}