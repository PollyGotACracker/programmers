function solution (arr1, arr2) {
    let count = 0;
    let i = 0;
    let j = 0;
    
    arr1.sort();
    arr2.sort();
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) i++;
        else if (arr1[i] > arr2[j]) j++;
        else {
            count++;
            i++;
            j++;
        }
    }
    return count;
}
