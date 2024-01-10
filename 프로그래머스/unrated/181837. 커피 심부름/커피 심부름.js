const drinks = {
    "americano": 4500,
    "cafelatte": 5000,
    "anything": 4500
}

function solution(order) {
    return order.reduce((acc, cur) => {
        const value = cur.replace(/(ice|hot)/, "");
        return acc += drinks[value];
    }, 0);
}