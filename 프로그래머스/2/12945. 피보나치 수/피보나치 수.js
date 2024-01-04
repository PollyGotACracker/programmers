function solution(n) {
    let count = 2;
    let f1 = 0n;
    let f2 = 1n;
    
    while (count !== n) {
        const sum = f1 + f2;
        f1 = f2;
        f2 = sum;
        count++;
    }
    return (f1 + f2) % BigInt(1234567);
}

/*
cf) BigInt: 
- Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현
- 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성
- BigInt 와 Number 는 함께 계산할 수 없음
따라서 f1 과 f2 를 BigInt 로 초기화 하고,
return 계산에 사용되는 값 또한 BigInt 로 변환하였음

cf) 재귀의 단점:
- 함수를 호출할 때마다 메모리에 함수의 정보를 저장
따라서 메모리를 많이 사용하며, 성능이 반복문에 비해 느림
- JS 엔진이 가능한 재귀호출의 깊이는 대부분 10000(함수 호출 스택)
이를 초과하면 stack overflow 발생
*/