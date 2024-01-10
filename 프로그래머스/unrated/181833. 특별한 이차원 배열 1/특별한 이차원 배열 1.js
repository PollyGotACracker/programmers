function solution(n) {
    let j = 0;
    return Array.from({length: n}, () => {
        const row = Array.from({length: n}, (_, i) =>  i === j ? 1 : 0);
        j++;
        return row;
    });
}