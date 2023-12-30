function solution(number) {
    let sum = 0;
    
    for (let v of number) {
        sum += Number(v);
    }
    return sum % 9;
}