function solution(array) {
    const hash = new Map();
    const nums = [];
    
    for (let i of array) {
        hash.set(i, (hash.get(i) || 0) + 1);
    }
    
    const max = Math.max(...hash.values());
    for (let [key, val] of hash.entries()){
        if (val === max) nums.push(key);
    }
    return nums.length === 1 ? nums[0] : -1;
}