function solution(arr) {
    const answer = [];
    
    for (let i of arr){
        let val = i;
        if (i >= 50 && i % 2 === 0) val /= 2;
        if (i < 50 && i % 2 === 1) val *= 2;
        answer.push(val);
    }
    return answer;
}