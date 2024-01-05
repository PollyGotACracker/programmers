function solution(n, words) {
    const answer = [1, 1];
    const passedWords = [];
    let i = 1;
    
    passedWords.push(words.shift());
    while (words.length) {
        const curWord = words.shift();
        const prevWord = passedWords.at(-1);
        
        answer[0] = i % n + 1;
        answer[1] = Math.floor(i / n) + 1;
        
        if (prevWord.at(-1) !== curWord.at(0)) return answer;
        if (passedWords.includes(curWord)) return answer;
        
        passedWords.push(curWord);
        i++;
    }
    return [0, 0];
}