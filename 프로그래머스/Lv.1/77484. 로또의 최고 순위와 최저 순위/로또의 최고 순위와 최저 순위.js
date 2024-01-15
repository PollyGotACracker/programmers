function solution(lottos, win_nums) {
    const answer = [7, 7];
    const win_set = new Set(win_nums);

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) answer[0]--;
        else if (win_set.has(lottos[i])){
            answer[0]--;
            answer[1]--; 
        }
    }
    return answer.map((v) => v === 7 ? 6 : v);
}