function solution(arr) {
    const stk = [];
    let i = 0;
    
    while (i < arr.length) {
        if (stk.at(-1) === arr[i]) stk.pop();
        else stk.push(arr[i]);
        i++;
    }
    return stk.length ? stk : [-1];
}