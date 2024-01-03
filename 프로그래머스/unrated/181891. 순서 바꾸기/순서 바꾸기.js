function solution(num_list, n) {
    const prev_list = num_list.slice(0, n);
    const next_list = num_list.slice(n);
    return next_list.concat(prev_list);
}