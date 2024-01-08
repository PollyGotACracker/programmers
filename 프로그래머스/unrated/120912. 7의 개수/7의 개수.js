function solution(array) {
    return array.reduce((acc, cur) => {
        const count = cur.toString().match(/7/g);
        return acc += (count?.length || 0);
    }, 0);
}