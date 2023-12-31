function solution(s, n) {
    return [...s].map((v) => {
        if (v === " ") return v;
        let code = v.charCodeAt() + n;
        if ((code - n < 97 && code > 90) || code > 122) code -= 26;
        return String.fromCharCode(code);
    }).join("");
}