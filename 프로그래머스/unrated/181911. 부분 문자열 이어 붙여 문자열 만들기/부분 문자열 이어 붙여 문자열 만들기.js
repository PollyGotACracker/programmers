function solution(my_strings, parts) {
    return parts.reduce((acc, cur, idx) => acc += my_strings[idx].substring(cur[0], cur[1] + 1), "");
}