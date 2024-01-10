function solution(n) {
    let i = 1;
    let diff = 0;

    while (i <= n) {
        const value = i + diff;
        const isIncluded = value.toString().includes(3);
        if (isIncluded || value % 3 === 0) {
            diff++;
            continue;
        }
        i++;
    }
    return n + diff;
}