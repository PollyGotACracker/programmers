function calcSlope([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
    const [arr1, arr2, arr3, arr4] = dots; 
    
    if (calcSlope(arr1, arr2) === calcSlope(arr3, arr4)) return 1;
    if (calcSlope(arr1, arr3) === calcSlope(arr2, arr4)) return 1;
    if (calcSlope(arr1, arr4) === calcSlope(arr2, arr3)) return 1;
    return 0;
}

