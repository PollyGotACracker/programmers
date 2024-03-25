function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", 
                      "h", "i", "j", "k", "l", "m", "n", 
                      "o", "p", "q", "r", "s", "t", "u", 
                      "v", "w", "x", "y", "z"].filter(char => !skip.includes(char));
    return s.split("").map(char => {
        return alphabet[(alphabet.indexOf(char) + index) % alphabet.length]
    }).join("");
}

/*
1. skip 을 제외한 alphabet 배열을 생성
2. alphabet 배열에서 s 의 각 문자의 인덱스를 찾은 후, index 만큼 뒤로 이동
3. 위 결과값이 alphabet.length 를 넘어갈 수 있음 (z 를 넘어갈 수 있음)
4. 그러므로 % alphabet.length 한 나머지를 인덱스로 함
*/