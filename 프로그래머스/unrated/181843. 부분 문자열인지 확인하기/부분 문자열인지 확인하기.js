function solution(my_string, target) {
    const regex = new RegExp(target, 'g');
    return regex.test(my_string) ? 1 : 0;
}