function solution(n) {
    // length: n * 3: 조건을 고려하여 충분한 크기의 배열 생성
    // [n - 1]: 3을 포함하지 않으면서 3의 배수가 아닌 숫자 배열에서 n 번째 숫자를 찾음(0 ~ 1)
    const arr = Array.from({length: n * 3}, (_, i) => i + 1);
    return arr.filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}