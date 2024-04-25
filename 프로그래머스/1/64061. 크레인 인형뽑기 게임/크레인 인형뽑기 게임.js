function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for (let pos of moves) {
        for (let x = 0; x < board.length; x++) {
            const item = board[x][pos - 1];
            if (!!item) {
                if (item === stack.at(-1)) {
                    stack.pop();
                    answer += 2;
                }
                else {
                    stack.push(item);
                }
                board[x][pos - 1] = 0;
                break;
            }
        }
    }
    
    return answer;
}