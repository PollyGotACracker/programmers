function solution(numbers, k) {
    while (k - 1) { 
        const v = numbers.splice(0, 2);
        numbers.push(...v);
        k--;
        
    }
    return numbers[0];
}