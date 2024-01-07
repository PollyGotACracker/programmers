const solution = (number, start = 0, depth = 0, sum = 0) => {
    let count = 0;
    
    if (depth === 3) return sum === 0 ? 1 : 0;
    for (let i = start; i < number.length; i++) {
        count += solution(number, i + 1, depth + 1, sum + number[i]);
    }
    return count;
}