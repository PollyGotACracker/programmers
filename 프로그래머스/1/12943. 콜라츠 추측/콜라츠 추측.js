function solution(num) {
    let i = 0;
    const isOdd = (n) => n % 2 === 1;
    
    if (num === 1) return 0;
    while (i < 500) {
        if (num === 1) return i;
        isOdd(num) ? num = num * 3 + 1 : num /= 2;
        i++;
    }
    return -1;
}