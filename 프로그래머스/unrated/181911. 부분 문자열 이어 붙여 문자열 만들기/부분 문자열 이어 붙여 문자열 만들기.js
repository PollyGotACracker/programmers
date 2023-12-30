function solution(my_strings, parts) {
    let answer = '';
    
    for (let [i, [s, e]] of parts.entries()) {
        answer += my_strings[i].substring(s, e + 1);
    }
    return answer;
}