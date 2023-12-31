function solution(food) {
    const arr = food.reduce((acc, cur, idx) => {
        const repeat = Math.floor(cur / 2);
        if (idx !== 0) acc.push(`${idx}`.repeat(repeat));
        return acc;
    }, []);
    arr.push("0", ...[...arr].reverse());
    return arr.join("");
}