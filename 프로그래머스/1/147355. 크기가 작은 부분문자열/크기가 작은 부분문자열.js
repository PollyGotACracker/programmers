function solution(t, p) {
    let answer = 0;
    const iteration = t.length - p.length + 1;
    
    for (let i = 0; i < iteration; i++) {
        const val = t.substring(i, i + p.length);
        if (Number(val) <= Number(p)) answer++;
    }
    return answer;
}