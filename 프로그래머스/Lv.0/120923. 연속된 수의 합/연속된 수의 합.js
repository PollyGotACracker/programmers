function solution(num, total) {
    const median = Math.floor(total / num);
    const startToMedian = num % 2 === 0 ? Math.floor(num / 2 - 1) : Math.floor(num / 2);
    return Array.from({length: num}, (_, i) => median - startToMedian + i);
}