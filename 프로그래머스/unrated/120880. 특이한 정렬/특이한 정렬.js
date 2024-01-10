function solution(numlist, n) {
    // ||: 만약 차이가 같을 경우 return b - a 실행
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}