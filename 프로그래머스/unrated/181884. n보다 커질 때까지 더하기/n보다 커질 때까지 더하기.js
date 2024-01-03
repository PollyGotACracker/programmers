function solution(numbers, n) {
    let answer = 0;
    
    for (let i of numbers){
        if (answer > n) return answer;
        answer += i;
    }
    return answer;
}