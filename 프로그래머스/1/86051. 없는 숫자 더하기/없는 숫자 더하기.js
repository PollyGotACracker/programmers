function solution(numbers) {
    let answer = 0;
    const arr = Array.from({length: 10},(_,i) => i);
    let i = 0;
    
    numbers.sort((a, b) => a - b);
    while (arr.length) {
        if (numbers[i] === arr[0]) {
            arr.shift();
            i++;
        }
        else answer += arr.shift();
    }
    return answer;
}