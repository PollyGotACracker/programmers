function solution(myStr) {
    const regex = new RegExp(/[abc]{1,}/, "g");
    const arr = myStr.split(regex).filter((v) => v);
    return arr.length ? arr : ["EMPTY"];
}