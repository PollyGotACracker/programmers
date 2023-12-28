function solution(arr, queries) {
    const answer =[];
    for (let [s, e, k] of queries) {
        const matches = [];
        for (i = s; i <= e; i++) {
            if (arr[i] > k) matches.push(arr[i]);
        }
        if (!matches.length) matches.push(-1);
        answer.push(Math.min(...matches));
    }
    return answer;
}