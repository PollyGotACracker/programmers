function solution(my_string) {
    return [...my_string].reduce((acc, cur) => {
        if (!isNaN(Number(cur))) acc.push(Number(cur));
        return acc;
        }, []).sort();
}