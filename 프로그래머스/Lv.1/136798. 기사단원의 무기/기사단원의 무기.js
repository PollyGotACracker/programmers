function getDivisorCount(n) {
    let result = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) result++;
            else result += 2;
        }
    } 
    return result;
}

function solution(number, limit, power) {
    const arr = Array.from({length: number}, (_,i) => i + 1);
    
    return arr.reduce((acc, cur) => {
        let atk = getDivisorCount(cur);
        if (atk > limit) atk = power;
        return acc + atk;
    }, 0);
}