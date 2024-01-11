function solution(common) {
    const [v0, v1, v2] = common;
    
    if (v1 - v0 === v2 - v1) {
        return common.pop() + (v1 - v0);
    }
    else return common.pop() * (v1 / v0);
}