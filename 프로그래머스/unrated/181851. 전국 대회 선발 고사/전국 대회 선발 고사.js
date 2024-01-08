function solution(rank, attendance) {
    const arr = Array.from(rank, (v, i) => [v, i]);
    const possibles = arr.filter((_, i) => attendance[i]);
    const top3 = possibles.sort((a, b) => a[0] - b[0]).slice(0, 3);
    return 10000 * top3[0][1] + 100 * top3[1][1] + top3[2][1];
}