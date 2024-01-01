function solution(my_string, indices) {
    return Array.from(my_string).filter((str, idx) => !indices.includes(idx)).join("");
}