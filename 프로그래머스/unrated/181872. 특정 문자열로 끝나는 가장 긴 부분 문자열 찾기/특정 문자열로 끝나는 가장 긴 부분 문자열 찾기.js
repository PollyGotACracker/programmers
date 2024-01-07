function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat) + pat.length;
    return myString.substring(0, lastIndex);
}