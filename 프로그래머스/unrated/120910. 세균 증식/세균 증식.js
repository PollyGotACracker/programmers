function solution(n, t) {
    // 시프트 연산 사용: n << t
    return n * Math.pow(2, t);
}