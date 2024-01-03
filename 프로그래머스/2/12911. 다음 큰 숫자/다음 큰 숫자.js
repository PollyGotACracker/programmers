function countBinaryOne(num) {
    return num.toString(2).match(/1/g).length;
}

function solution(n) {
    const nOneCount = countBinaryOne(n);
    
    while (n++) {
        const aOneCount = countBinaryOne(n);  
        if (nOneCount === aOneCount) return n;
    }
}