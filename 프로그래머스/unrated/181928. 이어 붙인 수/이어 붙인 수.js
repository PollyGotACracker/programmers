function solution(num_list) {
    let odd_str = "";
    let even_str = "";
    
    for (let num of num_list){
        num % 2 === 0 ? even_str += num : odd_str += num;
    }
    return Number(odd_str) + Number(even_str);
}