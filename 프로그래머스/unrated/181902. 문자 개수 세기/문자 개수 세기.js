function solution(my_string) {
    const answer = Array.from({length: 26 * 2}, () => 0);
    [...my_string].forEach((v) => {
        let code = v.charCodeAt();
        if (code >= 65 && code <= 90) code -= 65;
        else if (code >= 97 && code <= 122) code -= 65 + 6;
        answer[code]++;
    });
    return answer;
}