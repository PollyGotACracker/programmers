const calc = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
}

function solution(quiz) {
    return quiz.map((v) => {
        const [num1, operator, num2, _, result] = v.split(" ");
        const calced = calc[operator](Number(num1), Number(num2));
        return calced === Number(result) ? "O" : "X";
    });
}