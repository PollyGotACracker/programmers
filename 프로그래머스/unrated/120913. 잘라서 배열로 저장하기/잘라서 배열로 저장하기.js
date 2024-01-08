function solution(my_str, n) {
    // cf) 문자열을 동일한 크기로 나누기
    // 모든 문자에 대해 최소 1 개, 최대 n 개 일치
    // 만약 n 개 미만의 부분문자열이 남더라도 일치함
    const regex = new RegExp(`.{1,${n}}`, "g");
    return my_str.match(regex);
}