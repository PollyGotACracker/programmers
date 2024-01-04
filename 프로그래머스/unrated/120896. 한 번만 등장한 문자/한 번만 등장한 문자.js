function solution(s) {
    const arr = [...s].filter((v) => s.indexOf(v) === s.lastIndexOf(v));
    return arr.sort().join("");
}