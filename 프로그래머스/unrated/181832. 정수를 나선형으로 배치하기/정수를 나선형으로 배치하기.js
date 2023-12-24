function solution(n) {
    const answer = Array.from({length: n}, () => Array.from({length: n}, () => 0));
    let row = 0;
    let col = 0;
    let value = 1;
    
    while (value <= n * n) {
        answer[row][col] = value;
        value++;
        
        if (row <= col && answer[row][col + 1] === 0) col++;
        else if (row < col && answer[row + 1][col] === 0) row++;
        else if (row >= col && answer[row][col - 1] === 0) col--;
        else if (row > col && answer[row - 1][col] === 0) row--;
        else if (row > col) col++;
    }    
    return answer;
}