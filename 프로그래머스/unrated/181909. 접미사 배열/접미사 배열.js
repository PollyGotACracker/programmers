function solution(my_string) {
    return Array.from({length: my_string.length}, () => "")
        .map((_, i) => my_string.substring(i))
        .sort();
}