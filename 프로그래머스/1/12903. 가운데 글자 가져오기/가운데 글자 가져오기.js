function solution(s) {
    const median = Math.floor(s.length / 2);
    return s.length % 2 === 1 ? s[median] : s[median - 1] + s[median];
}