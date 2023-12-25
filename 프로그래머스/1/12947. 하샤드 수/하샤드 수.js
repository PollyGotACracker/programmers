function solution(x) {
    let digitSum = 0;
    
    for (let v of x.toString()) {
        digitSum += Number(v);
    }
    return x % digitSum === 0;
}