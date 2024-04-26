function solution(survey, choices) {
    let answer = '';
    const types = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    };
    const choiceScores = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3,
    };
    
    for (let i = 0; i < survey.length; i++) {
        const [typeA, typeB] = survey[i].split("");
        if (choices[i] <= 3) {
            types[typeA] += choiceScores[choices[i]];
        }
        if (choices[i] >= 5) {
            types[typeB] += choiceScores[choices[i]];
        }
    }
    
    answer = Object.entries(types).reduce((acc, cur, idx, arr) => {
        if (idx % 2 === 1) return acc;
        const nextType = arr[idx + 1];
        return `${acc}${cur[1] >= nextType[1] ? cur[0] : nextType[0]}`
    }, "");
    
    return answer;
}