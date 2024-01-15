function solution(n, m, section) {
    let answer = 0;
    let lastPainted = 0;
    
    section.forEach((v) => {
        if (lastPainted < v) {
            lastPainted = m + (v - 1);
            answer++;
        }
    })
    return answer;
}