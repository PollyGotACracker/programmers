function solution(participant, completion) {
    const hash = new Map();
    
    for (let v of completion) hash.set(v, (hash.get(v) || 0) + 1);
    for (let v of participant) {
        if (!hash.has(v)) return v;
        if (hash.get(v) === 1) {
            hash.delete(v);
        } else {
            hash.set(v, hash.get(v) - 1);
        }
    }
}