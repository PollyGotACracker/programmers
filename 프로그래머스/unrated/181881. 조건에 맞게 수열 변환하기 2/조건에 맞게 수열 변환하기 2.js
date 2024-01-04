function solution(arr, x = 1) {
    const new_arr = arr.map((v) => {
        if (v >= 50 && v % 2 === 0) return v / 2;
        if (v < 50 && v % 2 === 1) return v * 2 + 1;
        return v;
    });
    
    if (arr.toString() === new_arr.toString()) return x - 1;
    return solution(new_arr, x + 1);
}