function solution(array, n) {
    array.sort((a, b) => a - b);
    const subtracts = array.map((v) => Math.abs(v - n));
    const closed = Math.min(...subtracts);
    const index = subtracts.indexOf(closed);
    return array[index];
}