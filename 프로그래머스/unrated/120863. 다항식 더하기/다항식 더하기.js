function solution(polynomial) {
    let linear = 0, constant = 0;
    const arr = polynomial.split(" + ");
    const regex = new RegExp(/x/);
    
    arr.forEach((v) => {
        const isLinear = regex.test(v);
        if (!isLinear) constant += Number(v);
        else linear += Number(v.substring(0, v.length - 1)) || 1;
    });
    
    const linearStr = linear > 1 ? linear : "";
    if (linear && constant) return `${linearStr}x + ${constant}`;
    if (linear) return `${linearStr}x`;
    if (constant) return `${constant}`;
}