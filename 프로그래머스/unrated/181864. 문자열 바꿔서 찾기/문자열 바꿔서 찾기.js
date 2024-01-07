function solution(myString, pat) {
    const replaced = [...myString].map((v) => v === "A" ? "B" : "A").join("");
    const regex = new RegExp(pat);
    return regex.test(replaced) ? 1 : 0;
}