function solution(arr) {
    let flag = false;
    let s = Number.MIN_SAFE_INTEGER;
    let e = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 2) continue;
        if (!flag) {
            s = i;
            e = i;
            flag = true;
        }
        else e = i;
    }
    return s >= 0 ? arr.slice(s, e + 1) : [-1];
}