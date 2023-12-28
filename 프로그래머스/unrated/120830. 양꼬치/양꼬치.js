function solution(n, k) {
    const food = n * 12000;
    const drink = (k - Math.floor(n / 10)) * 2000;
    return food + drink;
}