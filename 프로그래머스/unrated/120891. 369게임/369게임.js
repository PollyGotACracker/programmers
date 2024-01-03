function solution(order) {
    const arr = Array.from(`${order}`).filter((v) => Number(v) !== 0 && Number(v) % 3 === 0);
    return arr.length;
}