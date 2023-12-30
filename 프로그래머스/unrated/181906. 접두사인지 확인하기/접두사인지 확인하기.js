function solution(my_string, is_prefix) {
    const regex = new RegExp(`^${is_prefix}`);
    
    return regex.test(my_string) ? 1 : 0;
}