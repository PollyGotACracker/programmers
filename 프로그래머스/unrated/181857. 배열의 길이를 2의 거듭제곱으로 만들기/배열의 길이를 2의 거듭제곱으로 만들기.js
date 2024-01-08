function solution(arr) {
    let length = 1;
    
    while (length < arr.length) length *= 2;
    const add_arr = new Array(length - arr.length).fill(0);
    return [...arr, ...add_arr];
}