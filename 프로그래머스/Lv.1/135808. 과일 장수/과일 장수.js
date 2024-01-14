function solution(k, m, score) {
    score.sort((a, b) => b - a);
    return score.reduce((acc, cur, idx) => {
        if ((idx + 1) % m === 0) return acc + (cur * m);
        return acc;
    }, 0);
}