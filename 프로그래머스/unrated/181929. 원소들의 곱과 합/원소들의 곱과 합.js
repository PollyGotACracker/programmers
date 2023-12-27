function solution(num_list) {
    let multiply_all = num_list[0];
    let sum_all = num_list[0];
    
    for (let i = 1; i < num_list.length; i++){
        multiply_all *= num_list[i];
        sum_all += num_list[i];
    }
    return multiply_all < (sum_all ** 2) ? 1 : 0;
}