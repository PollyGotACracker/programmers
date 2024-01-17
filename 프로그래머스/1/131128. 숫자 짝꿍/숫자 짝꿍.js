function solution(X, Y) {
    const xHash = new Array(10).fill(0);
    const yHash = new Array(10).fill(0);
    const x = [...X];
    const y = [...Y];

    x.forEach((v) => xHash[9 - v]++);
    y.forEach((v) => yHash[9 - v]++);
    const answer = xHash.reduce((acc, cur, idx) => {
        if (cur === 0 || yHash[idx] === 0) return acc;
        if (9 - idx === 0 && acc === "") return "0";
        const min = Math.min(cur, yHash[idx]);
        return acc + `${9 - idx}`.repeat(min);
    }, "");
    
    return answer || "-1";
}