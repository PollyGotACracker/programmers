function solution(intStrs, k, s, l) {
    const answer = [];
    
    for (let v of intStrs) {
        const num = Number(v.substring(s, s + l));
        if (num > k) answer.push(num);
    }
    return answer;
}