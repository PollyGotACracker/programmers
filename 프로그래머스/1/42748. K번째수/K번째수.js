function solution(array, commands) {
    const answer = [];
    for (let [i, j, k] of commands) {
        const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(sliced[k - 1]);
    }
    return answer;
}