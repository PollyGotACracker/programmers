function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const hash = new Map();
    arr.forEach(v => hash.set(v, (hash.get(v) || 0) + 1));
    
    const result = [...hash.entries()].sort((a, b) => b[1] - a[1]);
    const length = result.length;
    const [v1, v2, v3, v4] = result;
    if (length === 1) return 1111 * a;
    if (v1[1] === 3) return (10 * v1[0] + v2[0]) ** 2;  
    if (v1[1] === 2) {
        if (length === 2) return (v1[0] + v2[0]) * Math.abs(v1[0] - v2[0]);
        if (length === 3) return v2[0] * v3[0];
    } 
    if (length === 4) return Math.min(a, b, c, d);
}