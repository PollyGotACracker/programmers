function solution(num_list) {
    let sum_odd = 0;
    let sum_even = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 1) sum_odd += num_list[i];
        else sum_even += num_list[i];
    }
    return Math.max(sum_odd, sum_even);
}