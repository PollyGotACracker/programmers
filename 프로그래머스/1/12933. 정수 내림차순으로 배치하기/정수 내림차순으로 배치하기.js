function solution(n) {
    const arr = Array.from(n.toString());
    arr.sort((a, b) => b - a);
    return Number(arr.join(""));
}