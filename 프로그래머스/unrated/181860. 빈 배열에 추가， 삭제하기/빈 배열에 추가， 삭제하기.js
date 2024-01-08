function solution(arr, flag) {
    const answer = [];
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            const values = Array.from({length: arr[i] * 2}, () => arr[i]);
            answer.push(...values);
        }
        else answer.splice(arr[i] * -1);
    }
    return answer;
}