function solution(s) {
    const arr = s.split(" ").map((v) => Number(v));
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return `${min} ${max}`;
}