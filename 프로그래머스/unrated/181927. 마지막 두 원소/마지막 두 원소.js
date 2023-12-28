function solution(num_list) {
    let answer = [...num_list];
    const last_ele = num_list.at(-1);
    const prev_last_ele = num_list.at(-2);
    
    if (last_ele > prev_last_ele) {
        answer.push(last_ele - prev_last_ele);
    }
    else {
        answer.push(last_ele * 2);
    }
    return answer;
}