function solution(my_string) {
    const arr = my_string.match(/[0-9]{1,}/g);
    if (!arr) return 0;
    return arr.reduce((acc, cur) => acc += Number(cur), 0);
}