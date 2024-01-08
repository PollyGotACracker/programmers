function solution(myStr) {
    // 문자열 myStr 을 "a", "b", "c" 기준으로 나누기
    // 1. match(): 기준과 일치하지 않는(^) 부분 문자열을 찾는다
    // 2. split(): 일치하는 부분을 기준으로 문자열을 나눈다(배열에 "" 도 포함될 수 있음)
    return myStr.match(/[^a-c]+/g)||['EMPTY'];
}