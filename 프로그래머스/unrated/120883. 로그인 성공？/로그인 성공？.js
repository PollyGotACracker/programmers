function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const table = new Map(db);
    
    if (!table.has(id)) return 'fail';
    return table.get(id) === pw ? 'login' : 'wrong pw';
}