function solution(s) {
    return new RegExp(/^(\d{4}|\d{6})$/).test(s);
}