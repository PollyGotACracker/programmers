function solution(lines) {
    // -100 ~ 100 구간 => 0 ~ 199
    const axis = new Array(200).fill(0);
    
    // 초기화문 생략. start ~ end - 1 동안 start + 100 위치의 값 증가 후 start++
    lines.forEach(([start, end]) => { 
        for(; start < end; start++) axis[start + 100]++; 
    });
    return axis.reduce((acc, cur) => cur > 1 ? acc + 1 : acc, 0);
}