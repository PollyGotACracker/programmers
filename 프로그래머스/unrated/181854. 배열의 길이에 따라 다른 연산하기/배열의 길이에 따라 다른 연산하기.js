function isOdd(n) {
    return n % 2 === 1;
}

function solution(arr, n) {
    const isLengthOdd = isOdd(arr.length);
    return arr.map((v, i) => isOdd(i) === !isLengthOdd ? v + n : v);
}