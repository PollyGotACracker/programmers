function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    const regex1 = new RegExp(`^(${words.join("|")}){1,}$`);
    const regex2 = new RegExp(`(${words.map((w) => w.repeat(2)).join("|")}){1,}`);
    
    return babbling.filter((v) => regex1.test(v) && !regex2.test(v)).length;
}