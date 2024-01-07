function solution(myString, pat) {
    let answer = 0;
    
    for (let i = pat.length; i <= myString.length; i++) {
        const str = myString.substring(i - pat.length, i);
        if (str === pat) answer++;
    }
    return answer;
}