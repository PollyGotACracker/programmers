function solution(n) {
    const answer = [];
    const arr = Array.from(n.toString());
    
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(Number(arr[i]));
    }
    return answer;
}