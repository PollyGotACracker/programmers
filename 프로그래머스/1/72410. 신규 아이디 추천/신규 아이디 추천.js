function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^a-z0-9\-_.]/g, "")
        .replace(/[.]{2,}/g, ".")
        .replace(/^\.|\.$/g, "");
    
    if (new_id.trim() === "") new_id = "a";
    
    new_id = new_id.substring(0, 15)
        .replace(/\.$/g, "");

    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id.at(-1));
    }
    
    return new_id;
}

