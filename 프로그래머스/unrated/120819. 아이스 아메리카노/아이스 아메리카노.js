function solution(money) {
    const coffees = Math.floor(money / 5500);
    return [coffees, money - (coffees * 5500)];
}