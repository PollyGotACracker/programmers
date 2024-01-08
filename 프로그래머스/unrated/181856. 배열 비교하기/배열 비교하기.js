function solution(arr1, arr2) {
    if (arr2.length > arr1.length) return -1;
    else if (arr2.length < arr1.length) return 1;
    else {
        let arr1_sum = 0, arr2_sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            arr1_sum += arr1[i];
            arr2_sum += arr2[i];
        }
        if (arr2_sum > arr1_sum) return -1;
        else if (arr2_sum < arr1_sum) return 1;
    }
    return 0;
}