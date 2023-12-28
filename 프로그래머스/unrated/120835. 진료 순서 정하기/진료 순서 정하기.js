function solution(emergency) {
    const length = emergency.length;
    const answer = Array.from({length: length}, () => 1);
    
    for (let i = 1; i < length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            emergency[j] < emergency[i] ? answer[j]++ : answer[i]++;
        }
    }
    return answer;
}