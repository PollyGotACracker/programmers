function solution(A, B) {
    const arr = [...A];
    let i = 1;
    
    if (A === B) return 0;
    while (i < A.length) {
        const char = arr.pop();
        arr.unshift(char);
        if (arr.join("") === B) return i;
        i++;
    }
    return -1;
}