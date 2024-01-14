function solution(answers) {
    const scores = [0, 0, 0];
    const picks = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    answers.forEach((answer, i) => {
        picks.forEach((pick, j) => {
            const pickIdx = i % pick.length;
            if (answer === pick[pickIdx]) scores[j]++;  
        });
    });
    const max = Math.max(...scores);
    return scores.reduce((acc, cur, idx) => {
        if (cur === max) acc.push(idx + 1);
        return acc;
    }, []);
}