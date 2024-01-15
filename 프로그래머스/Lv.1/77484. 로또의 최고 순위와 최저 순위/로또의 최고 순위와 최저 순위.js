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

/* cf) includes() 를 쓰는 것보다 Set 을 생성하고 has() 를 쓰는 것이 더 효율적이다(O(1)). */
/*
일부 테스트 케이스에서 시간 초과가 발생한 코드
function solution(lottos, win_nums) {
    const answer = [7, 7];
    let i = 0;
    let j = 0;
    
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);
    while (i < lottos.length) {
        if (lottos[i] === 0) {
            answer[0]--;
            i++;
        }
        else if (lottos[i] === win_nums[j]){
            answer[0]--;
            answer[1]--;
            i++;
            j++;
        }
        else if (lottos[i] < win_nums[j]) i++;
        else if (lottos[i] > win_nums[j]) j++;
    }
    return answer.map((v) => v === 7 ? 6 : v);
}
*/