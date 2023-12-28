function solution(l, r) {
    let answer = [];
    const regex = new RegExp(/^(5|0)+$/);
    
    for (let i = l; i <= r; i++) {
        if(regex.test(i)) answer.push(i);
    }    
    return answer.length ? answer : [-1];
}