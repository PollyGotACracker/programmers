function solution(num) {
    let i = 0;
    const isOdd = (n) => n % 2 === 1;
    
    if (num === 1) return 0;
    while (i < 500) {
        if (num === 1) return i;
        if (!isOdd(num)) num /= 2;
        else if (isOdd(num)) num = num * 3 + 1; 
        i++;
    }
    return -1;
}