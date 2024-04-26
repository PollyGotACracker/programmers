function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^a-z0-9\-_.]/g, "")  // /[^\w-_.]/g
        .replace(/[.]{2,}/g, ".")  // /\.+/g
        .replace(/^\.|\.$/g, "")
        .replace(/^$/, "a")  // /^$/: 빈 문자열 체크
        .slice(0, 15).replace(/\.$/g, "");

    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id.at(-1));
    }
    
    return new_id;
}

/*
slice() vs substring()
- slice 는 문자열 뿐만 아니라 배열에도 사용 가능
- slice 는 음수 index 를 사용하여 끝에서부터 요소 또는 문자열 추출 가능
- substring 은 불필요한 index swap 을 사용하여 일관적으로 동작하지 않음:
    더 작은 index 를 시작 index 로 적용
*/