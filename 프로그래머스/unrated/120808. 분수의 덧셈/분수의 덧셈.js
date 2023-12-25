// 유클리드 알고리즘 (유클리드 호제법)
// a와 b의 최대공약수는 b와 r(a를 b로 나눈 나머지)의 최대공약수와 같음
function getGcd(a, b) {
    return b === 0 ? a : getGcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = (denom1 * denom2);
    const greatestCommonDivisor = getGcd(numer, denom);
    
    numer /= greatestCommonDivisor;
    denom /= greatestCommonDivisor;
    
    return [numer, denom];
    
    // let numer = (numer1 * denom2) + (numer2 * denom1);
    // let denom = (denom1 * denom2);
    // for (let i = 2; i <= Math.max(numer, denom); i++) {
    //     if (!(numer % i) && !(denom % i)) {
    //         numer /= i;
    //         denom /= i;
    //     }
    // }
    // if (!(numer % denom)) {
    //     numer /= denom;
    //     denom = 1;
    // }
    // if (!(denom % numer)) {
    //     denom /= numer;
    //     numer = 1;
    // }
    // return [numer, denom];
}