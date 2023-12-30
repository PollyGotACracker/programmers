const rspRes = {
    "0": 5,
    "2": 0,
    "5": 2
}

function solution(rsp) {
    return [...rsp].map((v) => rspRes[v]).join("");
}