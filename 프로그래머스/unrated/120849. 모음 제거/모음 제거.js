function solution(my_string) {
    const removes = ["a", "e", "i", "o", "u"];
    const arr = [...my_string].filter((v) => !removes.includes(v));
    return arr.join("");
}