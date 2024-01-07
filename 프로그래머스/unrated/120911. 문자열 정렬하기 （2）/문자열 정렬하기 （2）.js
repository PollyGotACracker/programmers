function solution(my_string) {
    const arr = Array.from(my_string.toLowerCase());
    return arr.sort().join("");
}