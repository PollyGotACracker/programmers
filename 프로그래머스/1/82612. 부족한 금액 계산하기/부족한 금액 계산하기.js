function solution(price, money, count) {
    const arr = Array.from({length: count}, (_, i) => price * (i + 1));
    const result = arr.reduce((acc, cur) => acc - cur, money);
    return result < 0 ? result * -1 : 0;
}