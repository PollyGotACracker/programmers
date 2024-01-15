function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    
    const DFS = (depth, start, sum) => {
        if (depth === 3) {
            if (isPrime(sum)) answer++;
        } else {
            for (let i = start; i < nums.length; i++) {
                DFS(depth + 1, i + 1, sum + nums[i]);
            }
        }
    }
    
    DFS(0, 0, 0);
    return answer;
}