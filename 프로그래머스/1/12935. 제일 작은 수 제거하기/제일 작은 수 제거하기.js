function solution(arr) {
    let target = Number.MAX_SAFE_INTEGER;
    
    if (arr.length === 1) return [-1];
    for (let i of arr) {
        if (target > i) target = i; 
    }
    arr.splice(arr.indexOf(target),1)
    return arr;
}