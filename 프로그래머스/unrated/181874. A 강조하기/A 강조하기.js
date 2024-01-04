function solution(myString) {
    const arr = Array.from(myString.toLowerCase());
    return arr.map((v) => v === "a" ? v.toUpperCase() : v).join("");
}