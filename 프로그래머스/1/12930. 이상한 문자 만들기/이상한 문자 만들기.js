function solution(s) {
    const arr = s.split(" ");
    return arr.map((val)=> [...val].map((val, idx) =>
        idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase()
    ).join("")).join(" ");
}