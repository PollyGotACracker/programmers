function solution(n, lost, reserve) {
    let answer = 0;
    const uniforms = Array.from({length: n}, () => 1);
    reserve.forEach((student) => uniforms[student - 1]++);
    lost.forEach((student) => uniforms[student - 1]--);
    
    uniforms.forEach((ele, idx, arr) => {
        if (ele === 0) {
            if (arr[idx - 1] === 2) {
                arr[idx - 1]--;
                answer++;
            } else if (arr[idx + 1] === 2) {
                arr[idx + 1]--;
                answer++;
            }
        }
        else answer++;
    });
    return answer;
}