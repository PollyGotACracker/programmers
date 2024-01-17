function solution(participant, completion) {
    const hash = new Map();
    
    for (let v of completion) hash.set(v, (hash.get(v) || 0) + 1);
    for (let v of participant) {
        if (!hash.has(v)) return v;
        if (hash.get(v) === 1) {
            hash.delete(v);
        } else {
            hash.set(v, hash.get(v) - 1);
        }
    }
}

/*
cf)
1.  JS 의 배열은 객체이므로, key-value 쌍을 추가할 수 있다.
    아래 코드에서 map() 실행 시 기존 name 값들 뒤에 key-value 쌍들이 추가된다(name: 1 형태).
2.  find() 의 두 번째 인수 thisArg(optional):
    콜백 함수 내에서 this 로 사용할 값으로, 반환값이 있는 경우 콜백 함수보다 먼저 실행된다. 
    콜백 함수가 화살표 함수이거나, this 를 직접 사용하지 않을 경우 find() 밖으로 분리가 가능하다.
    아래 코드의 find() 는 콜백 함수가 화살표 함수이므로, map() 의 반환값을 this 로 참조하지 않는다.
3. !completion[name] 을 먼저 판단 후(값이 falsy 일 때 true), 후치연산 -- 이 실행된다.

function solution(participant, completion) {
    return participant.find(name => !completion[name]--, 
    completion.map(name => completion[name] = (completion[name] || 0) + 1)
    );
}
*/
