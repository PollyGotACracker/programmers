const calcScore = {
    "S": (n) => n,
    "D": (n) => n ** 2,
    "T": (n) => n ** 3,
    "*": (n_2, n_1) => [n_2 * 2, n_1 * 2],
    "#": (n) => n * -1,
}

function solution(dartResult) {
    const scores = [];
    const regex = new RegExp(/(\d+|\D)/, "g");
    const arr = dartResult.match(regex);
    
    arr.forEach((v, i) => {
        if (!isNaN(Number(v))) {
            const score = calcScore[arr[i + 1]](Number(v));
            scores.push(score);
        }
        if (v === "*") {
            const s_1 = scores.pop();
            const s_2 = scores.pop();
            const [r_2, r_1] = calcScore["*"](s_2, s_1);
            if (r_2) scores.push(r_2);
            scores.push(r_1);
        }
        if (v === "#") {
            const s_1 = scores.pop();
            const result = calcScore["#"](s_1);
            scores.push(result);
        }
    });
    return scores.reduce((acc, cur) => acc + cur, 0);
}