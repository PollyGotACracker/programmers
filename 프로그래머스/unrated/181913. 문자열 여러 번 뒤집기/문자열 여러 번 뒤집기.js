function solution(my_string, queries) {
    const arr = Array.from(my_string);
    
    for (let [s, e] of queries) {
        const reversed = arr.splice(s, e - s + 1).reverse();
        arr.splice(s, 0, ...reversed);
    }
    return arr.join("");
}