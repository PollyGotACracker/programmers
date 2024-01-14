function solution(name, yearning, photo) {
    const hash = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx];
        return acc;
    }, {});
    
    return photo.map((people) => {
        return people.reduce((acc, cur) => acc + (hash[cur] || 0), 0);
    });
}