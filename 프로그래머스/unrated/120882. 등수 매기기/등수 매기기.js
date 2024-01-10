function solution(score) {
    const avgs = score.map(([eng, math]) => (eng + math) / 2);
    const sortedAvgs = [...avgs].sort((a, b) => b - a);
    return avgs.map((v) => sortedAvgs.indexOf(v) + 1);
}