function solution(n, arr1, arr2) {
    const answer = Array.from({length: n}, (_, i) => {
        const bin = (arr1[i] | arr2[i]).toString(2);
        const padded = bin.padStart(n, "0");
        return padded.replaceAll(/1/g, "#").replaceAll(/0/g, " ");
    });
    return answer;
}