function solution(board, k) {
    const arr = Array.from({length: k + 1}, (_, i) => {
        return Array.from({length: k - i + 1}, (_, j) => [i, j])
    }).flat();
    
    return arr.reduce((acc, [i, j]) => {
        if (i < board.length && j < board[i].length) {
            return acc + board[i][j];
        }
        else return acc;
    }, 0);
}