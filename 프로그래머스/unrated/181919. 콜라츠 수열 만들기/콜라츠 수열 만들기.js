function getNums(x, arr) {
    arr.push(x);
    if (x === 1) return;
    x % 2 ? getNums(3 * x + 1, arr) : getNums(x / 2, arr);
}

function solution(n) {
    const answer = [];
    
    getNums(n, answer);
    return answer;
}