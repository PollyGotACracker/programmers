function solution(score) {
    // 현재 학생의 평균보다 높은 평균을 가진 학생들의 수 + 1
    return score.map(([eng1, math1]) => {
        return score.filter(([eng2, math2]) => (eng2 + math2) / 2 > (eng1 + math1) / 2).length + 1;
    });
}