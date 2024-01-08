function solution(sides) {
    const [n1, n2] = sides;
    let n3 = 1;
    let answer = 0;
    
    while (n3 <= n1 + n2) {
        const max = Math.max(n1, n2, n3);
        const sum = n1 + n2 + n3;
        if (max < sum - max) answer++;
        n3++;
    }
    return answer;
}