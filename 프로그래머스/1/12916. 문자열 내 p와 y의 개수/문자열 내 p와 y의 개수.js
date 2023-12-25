function solution(s){
    let answer = true;
    let p_num = 0;
    let y_num = 0;
    
    for (let char of s) {
        const code = char.charCodeAt();
        if (code === 80 || code === 112) p_num++;
        if (code === 89 || code === 121) y_num++;
    }
    if (p_num !== y_num) answer = false;
    return answer;
}