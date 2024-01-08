function getSortedWord(arr) {
    return arr.sort().join("");
}

function solution(spell, dic) {
    const existed = dic.some((word) => getSortedWord(spell) === getSortedWord([...word]));
    return existed ? 1 : 2;
}