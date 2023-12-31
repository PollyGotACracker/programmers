function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i = 0; i < words.length; i++) {
        let arr = answer.split(words[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}
// split(): words[i] 문자 기준 answer 분할 
// (arr = words[i] 가 삭제된 문자열 2개 배열)
// join(): arr 의 두 문자열 사이에 words[i] 에 해당하는 i 값 삽입 
// (answer = 변경된 문자열)