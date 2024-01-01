function solution(s) {
    const toLower = s.toLowerCase();
    return toLower.replaceAll(/(^|\s)[a-z]/g, (match) => match.toUpperCase());
}