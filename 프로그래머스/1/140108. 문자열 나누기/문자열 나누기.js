function solution(s) {
    let splitted = 0;
    let firstChar = s[0];
    let firstCount = 0, othersCount = 0;
    let i = 0;
    
    while (s.length) {
        s[i] === firstChar ? firstCount++ : othersCount++;
        if (firstCount === othersCount) {
            firstChar = s[i + 1];
            firstCount = 0;
            othersCount = 0;
            s = s.substring(i + 1);
            splitted++;
            i = -1;
        }
        i++;
    }
    return splitted;
}