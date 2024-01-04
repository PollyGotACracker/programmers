function solution(num_list) {
    const arr = num_list.map((v) => {
        let count = 0;
        while(v !== 1) {
            v = v % 2 === 0 ? v / 2 : (v - 1) / 2;
            count++;
        }
        return count;
    })
    return arr.reduce((acc, cur) => acc += cur, 0);
}