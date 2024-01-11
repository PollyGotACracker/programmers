function solution(arr) {
    const diff = arr.length - arr[0].length;
    const diffAbs = Math.abs(diff);
    
    if (diff > 0) {
        arr.forEach((col) => {
            const newArr = new Array(diffAbs).fill(0);
            col.push(...newArr);
        });
    }
    if (diff < 0) {
        const newArr = Array.from({length: diffAbs}, () => Array.from({length: arr[0].length}, () => 0));
        arr.push(...newArr);
    }
    return arr;
}