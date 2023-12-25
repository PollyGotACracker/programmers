function solution(array) {
    const median = Math.floor(array.length / 2);
    
    array.sort((a, b)=> a - b);
    return array[median];
}