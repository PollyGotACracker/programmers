function solution(n) {
    let answer = 0;
    let i = 1
    let calc = 1;
    
    while (calc <= n) {
        answer++;
        i++;
        calc *= i;
    }
    return answer;
}

// 틀린 문제가 정답 처리되고 있음
// 팩토리얼 공식을 이용해 값을 만들어 비교할 것
// 만약 값을 나눌 경우 계산 결과가 실수가 아닌지 확인 필요
// solution(5) => 2