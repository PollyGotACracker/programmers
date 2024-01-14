function solution(name, yearning, photo) {
    return photo.map((people) => {
        return people.reduce((acc, cur) => {
            return acc + (yearning[name.indexOf(cur)] || 0);
        }, 0);
    });
}