function solution(board) {
    const _board = JSON.parse(JSON.stringify(board));
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === 1) {
                for (let k = 0; k < 8; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if (board[nx]?.[ny] === 0) _board[nx][ny] = 1;
                }
            }
        }
    }
    return _board.flat().filter(v => !v).length;
}