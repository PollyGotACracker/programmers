function solution(my_string, s, e) {
    const arr = [...my_string];
    const reversed = arr.splice(s, e - s + 1).reverse();
    arr.splice(s, 0, ...reversed);
    return arr.join("");
}