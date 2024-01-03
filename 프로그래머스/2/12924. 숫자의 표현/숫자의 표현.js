function solution(n) {
    let answer = 0;
    let sum = 0;
    let lt = 1;
    let rt = 1;
    
    while (rt <= n) {
        sum += rt++;
        while (sum > n) {
            sum -= lt++;
        }
        if (sum === n) answer++;
    }
    return answer;
}