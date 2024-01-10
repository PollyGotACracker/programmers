function solution(picture, k) {
    const answer = [];
    
    picture.forEach((v) => {
        const char = [...v].reduce((acc, cur) => acc + cur.repeat(k), "")
        const arr = new Array(k).fill(char);
        answer.push(...arr);
    });
    return answer;
}