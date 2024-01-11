function solution(common) {
    const [v0, v1, v2] = common;
    const vLast = common.at(-1);
    
    const isArith = v1 - v0 === v2 - v1;
    const diff = isArith ? v1 - v0 : v1 / v0;
    
    return isArith ? vLast + diff : vLast * diff;
}