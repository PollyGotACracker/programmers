function solution (arr1, arr2) {
    const concat = [...arr1, ...arr2];
    const dedupe = Array.from(new Set(concat));
    
    return concat.length - dedupe.length;
}
