function solution(N, stages) {
    const arr = Array.from({length: N}, (_,i) => {
        const notClears = stages.filter((v) => v === i + 1).length;
        const challengers = stages.filter((v) => v >= i + 1).length;
        return [i + 1, notClears / challengers];
    });
    
    arr.sort((a, b) => b[1] - a[1]);
    return arr.map((v) => v[0]);
}