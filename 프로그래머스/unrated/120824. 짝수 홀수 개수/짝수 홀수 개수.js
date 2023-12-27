function solution(num_list) {
    let answer = [0, 0];
    
    for (let i of num_list) {
        i % 2 ? answer[1]++ : answer[0]++; 
    }
    return answer;
}