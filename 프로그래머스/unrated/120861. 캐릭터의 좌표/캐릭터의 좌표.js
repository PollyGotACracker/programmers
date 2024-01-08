const move = {
    "up": (x, y) => [x, ++y],
    "down": (x, y) => [x, --y],
    "left": (x, y) => [--x, y],
    "right": (x, y) => [++x, y]
}

function solution(keyinput, board) {
    let x = 0, y = 0;
    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;
    
    for (let v of keyinput) {
        const [newX, newY] = move[v](x, y);
        if (Math.abs(newX) > maxX || Math.abs(newY) > maxY) continue;
        x = newX;
        y = newY;
    }
    return [x, y];
}