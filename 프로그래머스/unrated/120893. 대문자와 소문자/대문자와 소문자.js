function solution(my_string) {
    const arr = [...my_string].map((v) => {
        let code = v.charCodeAt();
        if (code >= 65 && code <= 90) code += 32;
        else if (code >= 97 && code <= 122) code -= 32;
        return String.fromCharCode(code);
    });
    return arr.join("");
}