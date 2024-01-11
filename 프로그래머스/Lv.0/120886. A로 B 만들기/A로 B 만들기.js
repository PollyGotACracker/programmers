function solution(before, after) {
    const hashBefore = {};
    const hashAfter = {}; 
    
    [...before].forEach((v) => hashBefore[v] = (hashBefore[v] || 0) + 1);
    [...after].forEach((v) => hashAfter[v] = (hashAfter[v] || 0) + 1);
    for (let [key, value] of Object.entries(hashAfter)) {
        if (hashBefore[key] !== value) return 0;
    }
    return 1;
}