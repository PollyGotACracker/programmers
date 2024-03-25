function solution(ingredient) {
    let answer = 0;
    let i = 0;
    const hamburger = "1231";
    
    while (i <= ingredient.length - 4) {
        const stack = ingredient.slice(i, i + 4).join("");
        if (stack === hamburger) {
            ingredient.splice(i, 4);
            answer++;
            i -= 2;
        }
        else i++;
    }
    return answer;
}