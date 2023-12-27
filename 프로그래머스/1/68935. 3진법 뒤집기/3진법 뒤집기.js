function solution(n) {
    const trit = n.toString(3);
    const reversed = trit.split('').reverse().join('');
    return Number.parseInt(reversed, 3);
}