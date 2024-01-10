function solution(babbling) {
    let answer = 0;
    const regex = new RegExp(/^(aya|ye|woo|ma)+$/);  
    
    babbling.forEach((v) => {if (regex.test(v)) answer++});
    return answer;
}