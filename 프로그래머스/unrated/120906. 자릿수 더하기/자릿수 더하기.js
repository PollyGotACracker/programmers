function solution(n) {
    const arr = Array.from(n.toString());
    return arr.reduce((acc, cur) => acc += Number(cur), 0);
}