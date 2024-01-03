function solution(cipher, code) {
    const arr = [...cipher].filter((_, i) => (i + 1) % code === 0);
    return arr.join("");
}