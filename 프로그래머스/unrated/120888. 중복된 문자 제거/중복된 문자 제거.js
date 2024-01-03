function solution(my_string) {
    const removed = new Set(my_string);
    return Array.from(removed).join("");
}