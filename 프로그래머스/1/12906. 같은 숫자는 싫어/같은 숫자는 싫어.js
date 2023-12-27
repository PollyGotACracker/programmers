function solution(arr) {
    let prevNum = Number.MIN_SAFE_INTEGER;
    return arr.reduce((acc, cur) => {
        if (cur !== prevNum) {
            acc.push(cur);
            prevNum = cur;
        }
        return acc;
    }, []);
}