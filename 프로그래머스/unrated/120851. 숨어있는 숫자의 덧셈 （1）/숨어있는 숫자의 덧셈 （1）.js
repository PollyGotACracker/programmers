function solution(my_string) {
    return [...my_string].reduce((acc, cur) => !isNaN(Number(cur)) ? acc += Number(cur) : acc, 0);
}