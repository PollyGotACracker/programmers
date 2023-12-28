function solution(age) {
    const arr = Array.from(age.toString());
    return arr.map((v) => String.fromCharCode(97 + Number(v))).join("");
}