function solution(s) {
    if (s.at(0) === ")" || s.at(-1) === "(") return false;
    if (s.length === 1) return false;
    
    const stack = [];
    [...s].forEach((v) => {
        const prev = stack.at(-1);
        if (v === "(") stack.push(v);
        else {
            if (!stack.length) return false;
            stack.pop();
        } 
    })
    return !stack.length ? true : false;
}