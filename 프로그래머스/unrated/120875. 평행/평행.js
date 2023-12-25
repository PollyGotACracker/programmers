function solution(dots) {
    let answer = 0;
    const length = dots.length;
    
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            if (i === length - 1 - j || j === length - 1 - i) continue;
            const [x1, y1] = dots[i];
            const [x2, y2] = dots[j];
            const [x3, y3] = dots[length - 1 - i];
            const [x4, y4] = dots[length - 1 - j];
            
            const m1 = (y2 - y1) / (x2 - x1);
            const m2 = (y4 - y3) / (x4 - x3);
            
            if (m1 === m2) {
                answer = 1;
                break;
            }
        }
    }
    return answer;
}