const calc = {
    "+":(n1, n2) => n1 + n2,
    "-":(n1, n2) => n1 - n2,
    "*":(n1, n2) => n1 * n2
}

function solution(binomial) {
    const [num1, operator, num2] = binomial.split(" ");
    return calc[operator](Number(num1), Number(num2));
}