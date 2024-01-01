function solution(s) {
  const toLower = s.toLowerCase();
  return toLower.replaceAll(/(^|\s)[a-z]/g, (match) => match.toUpperCase());
}

/*
cf) replace(), replaceAll() 두 번째 매개변수는 콜백함수를 받는다.
function replacer(match, p1, p2, …, pN, offset, string, groups) {
  return replacement;
}
match: 일치하는 문자열
p1, p2, …, pN: 정규표현식에서 캡처 그룹 () 으로 찾은 각 문자열
offset: 검사한 전체 문자열에서 match 문자열의 인덱스
string: 검사한 전체 문자열
groups: 이름이 있는 캡처 그룹 (?<name>...) 객체: groups.name
*/
