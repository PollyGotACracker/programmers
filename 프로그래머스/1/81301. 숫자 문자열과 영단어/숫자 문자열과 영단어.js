const chart = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

function solution(s) {
    let answer = "";
    let eng = "";
    
    for (let v of s) {
        isNaN(Number(v)) ? eng += v : answer += v;
        const num = chart[eng];
        if (typeof num === "number") {
            answer += num;
            eng = "";
        }
    }
    return Number(answer);
}