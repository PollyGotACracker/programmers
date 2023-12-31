function solution(s) {
    const answer = Array.from({length: s.length}, () => -1);
    const hash = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const prevNumIdx = hash.get(s[i]);
        if (prevNumIdx !== undefined) {
            answer[i] = i - prevNumIdx;
        }
        hash.set(s[i], i);
    }
    return answer;
}