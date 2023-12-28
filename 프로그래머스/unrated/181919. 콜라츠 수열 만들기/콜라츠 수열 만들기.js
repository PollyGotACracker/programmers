function solution(n, arr = []) {
    arr.push(n);
    if (n === 1) return arr;
    return n % 2 ? solution(3 * n + 1, arr) : solution(n / 2, arr);
}