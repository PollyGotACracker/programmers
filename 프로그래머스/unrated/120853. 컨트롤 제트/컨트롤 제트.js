function solution(s) {
    const stack = [];
    
    s.split(" ").forEach((v, i) => {
        if (v === "Z") stack.pop();
        else stack.push(Number(v))
    })
    return stack.reduce((acc, cur) => acc += cur, 0);
}