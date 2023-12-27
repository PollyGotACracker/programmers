function solution(price) {
    let discount = 0;
    
    if (price >= 500000) discount = 20 / 100;
    else if (price >= 300000) discount = 10 / 100;
    else if (price >= 100000) discount = 5 / 100;
    return Math.floor(price - (price * discount));
}