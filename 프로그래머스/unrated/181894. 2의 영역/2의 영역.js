function solution(arr) {
    const s = arr.indexOf(2);
    const e = arr.lastIndexOf(2);
    
    return s !== -1 ? arr.slice(s, e + 1) : [-1];
}