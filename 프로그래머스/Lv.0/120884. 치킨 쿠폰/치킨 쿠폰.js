function solution(chicken) {
    let services = Math.floor(chicken / 10);
    let coupons = chicken % 10 + services;
    
    while (coupons >= 10) {
        const additional = Math.floor(coupons / 10);
        services += additional;
        coupons = coupons % 10 + additional;
    }
    return services;
}