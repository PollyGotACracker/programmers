function solution(k, score) {
    const answer = [];
    const stack = [];
    
    while (score.length) {
        stack.push(score.shift());
        stack.sort((a, b) => b - a);
        if (stack.length > k) stack.pop();
        answer.push(stack.at(-1));
    }
    return answer;
}