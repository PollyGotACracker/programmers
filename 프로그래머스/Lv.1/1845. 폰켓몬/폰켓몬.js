function solution(nums) {
    const picks = nums.length / 2;
    const species = new Set(nums).size;
    
    if (picks < species) return picks;
    else if (picks > species) return species;
    return picks;
}