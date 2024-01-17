function solution(s) {
    let splitted = 0;
    let firstChar = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if(count === 0) {
            splitted++;
            firstChar = s[i];
            count = 1;
        } else {
            s[i] !== firstChar ? count-- : count++;
        }
    }
    return splitted;
}