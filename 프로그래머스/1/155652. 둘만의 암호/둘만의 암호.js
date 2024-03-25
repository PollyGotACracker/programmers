function solution(s, skip, index) {
    const skips = new Set(skip);
    return s.split('').reduce((acc, cur) => {
        let i = 0;
        while (i < index) {
            let code = cur.charCodeAt(0);
            code = code >= 122 ? 97 : code + 1;
            cur = String.fromCharCode(code);
            if (!skips.has(cur)) i++;
        }
        return acc += cur;
    }, "");
}