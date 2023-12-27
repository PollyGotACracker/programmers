

function solution(a, b, c) {
    function calcSquares(expo) {
        return Math.pow(a, expo) + Math.pow(b, expo) + Math.pow(c, expo);
    } 
    
    const count = new Set([a, b, c]).size;
    if (count === 3) return calcSquares(1);
    if (count === 2) return calcSquares(1) * calcSquares(2);
    if (count === 1) return calcSquares(1) * calcSquares(2) * calcSquares(3);
}