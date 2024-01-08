function solution(arr, k) {
    const new_arr = Array.from(new Set(arr)).slice(0, k);
    const add_arr = Array.from({length: k - new_arr.length}, () => -1);
    return [...new_arr, ...add_arr];
}