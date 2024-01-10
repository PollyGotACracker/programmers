function getOverlapped([s1, e1], [s2, e2]) {
    const start = Math.max(s1, s2);
    const end = Math.min(e1, e2);
    if (end > start) return [start, end];
}

function solution(lines) {
    const overlaps = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const section = getOverlapped(lines[i], lines[j]);
            if (section) overlaps.push(section);
        }
    }
    overlaps.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let totalLength = overlaps.reduce((acc, [start, end]) => acc + Math.abs(end - start), 0);
    for (let i = 0; i < overlaps.length - 1; i++) {
        const curEnd = overlaps[i][1];
        const nextStart = overlaps[i + 1][0];
        if (nextStart < curEnd) totalLength -= curEnd - nextStart;
    }
    return totalLength;
}