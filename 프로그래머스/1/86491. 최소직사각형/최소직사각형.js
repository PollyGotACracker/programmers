function solution(sizes) {
    let mw = 0;
    let mh = 0;

    for (let [w, h] of sizes) {
        if (w < h) [w, h] = [h, w];
        if (w > mw) mw = w;
        if (h > mh) mh = h;
    }
    return mw * mh;
}