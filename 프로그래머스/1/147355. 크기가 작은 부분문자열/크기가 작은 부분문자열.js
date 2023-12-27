function solution(t, p) {
    let answer = 0;
    const iteration = t.length - p.length + 1;
    
    for (let i = 0; i < iteration; i++) {
        let val = "";
        for (let j = 0; j < p.length; j++) {
            val += t[i + j];
        }
        if (Number(val) <= Number(p)) answer++;
    }
    
    return answer;
}