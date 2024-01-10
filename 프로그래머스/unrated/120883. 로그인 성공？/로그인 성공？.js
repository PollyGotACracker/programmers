function solution(id_pw, db) {
    const [user_id, user_pw] = id_pw;
    
    for ([id, pw] of db) {
        if (user_id === id) {
            if (user_pw === pw) return "login";
            else return "wrong pw";
        } 
    }
    return "fail";
}