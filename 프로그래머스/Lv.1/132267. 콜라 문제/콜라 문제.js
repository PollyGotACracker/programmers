function solution(a, b, n) {
    let changed = Math.floor(n / a) * b;
    let remain = n % a + changed;
    
    while (remain >= a) {
        const additional = Math.floor(remain / a) * b;
        changed += additional;
        remain = remain % a + additional;
    }
    return changed;
}