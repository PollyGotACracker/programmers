function solution(phone_number) {
    let answer = '';
    for (let [index, num] of [...phone_number].entries()) {
        answer += index >= phone_number.length - 4 ? num : "*";
    }
    return answer;
}