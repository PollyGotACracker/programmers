function solution(i, j, k) {
    let answer = 0;
    
    for (; i <= j; i++) {
        const regex = new RegExp(k, "g");
        const count = i.toString().match(regex);
        if (count) answer += count.length;
    }
    return answer;
}