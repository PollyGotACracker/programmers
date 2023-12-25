function solution(my_string, overwrite_string, s) {
    let answer = '';
    const e = s + overwrite_string.length - 1;
    let overwrite_i = 0;
    
    for (let i = 0; i < my_string.length; i++){
        if (i >= s && i <= e){
            answer += overwrite_string[overwrite_i];
            overwrite_i++;
        }
        else answer += my_string[i];
    }
    
    return answer;
}