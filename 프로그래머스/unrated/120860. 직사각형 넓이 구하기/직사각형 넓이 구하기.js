function solution(dots) {
    dots.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    return Math.abs(x1 - x3) * Math.abs(y1 - y2);
}