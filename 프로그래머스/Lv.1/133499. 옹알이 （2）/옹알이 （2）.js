function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    const passed = babbling.filter((v) => {
        const regex = new RegExp(`^(${words.join("|")}){1,}$`);
        if (!regex.test(v)) return false;
        const isDupe = words.some((w) => v.indexOf(w + w) > -1);
        if (isDupe) return false;
        return true;
    });
    return passed.length;
}