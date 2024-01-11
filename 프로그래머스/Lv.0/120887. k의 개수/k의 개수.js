function solution(i, j, k) {
    const nums = Array.from({length: j - i + 1}, (_, idx) => i + idx).join("");
    const regex = new RegExp(k, "g");
    const count = nums.match(regex);
    
    return count ? count.length : 0;
}