function solution(babbling) {
    let answer = 0;
    const regex = new RegExp(/\b(aya|ye|woo|ma)+\b/);  
    
    for (let v of babbling) {
        if (regex.test(v)) answer++;
    }
    return answer;
}