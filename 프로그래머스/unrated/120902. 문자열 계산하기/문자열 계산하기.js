function solution(my_string) {
    const arr = my_string.split(" ");
    let operator = "";
    
    return arr.reduce((acc, cur) => {
        const num = Number(cur);
        if (isNaN(num)) operator = cur;
        else if (operator === "+") acc += num;
        else if (operator === "-") acc -= num;
        return acc;
    }, Number(arr[0]));
}