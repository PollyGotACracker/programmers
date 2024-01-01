function solution(num_list) {
    // findIndex(): 콜백 함수의 조건을 만족하는 첫번째 값의 인덱스 반환
    return num_list.findIndex((v) => v < 0);
}