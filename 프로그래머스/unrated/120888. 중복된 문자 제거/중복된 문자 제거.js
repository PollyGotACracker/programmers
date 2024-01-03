function solution(my_string) {
    const str = [];
    const arr = Array.from(my_string).map((v) => {
        if (str.includes(v)) return "";
        else {
            str.push(v);
            return v;
        }
    });
    return arr.join("");
}