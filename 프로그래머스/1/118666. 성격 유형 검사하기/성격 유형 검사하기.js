function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"];
    const scores = {};
    
    // 문자열 split 대신 구조분해할당
    types.forEach(([a, b]) => {
        scores[a] = 0;
        scores[b] = 0;
    });
    
    choices.forEach((choice, index) => {
        const [typeA, typeB] = survey[index];
        scores[choice < 4 ? typeA : typeB] += Math.abs(choice - 4);  
    }); 

    return types.map(([a, b]) => scores[a] >= scores[b] ? a : b).join("");
}