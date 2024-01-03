function solution(array, n) {
    // n - v 의 절대값 비교, v 직접 비교 ASC
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0];
}