function solution(my_string, alp) {
    const alpUpper = String.fromCharCode(alp.charCodeAt() - 32);
    return my_string.replaceAll(alp, alpUpper);
}