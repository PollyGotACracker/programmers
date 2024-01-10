function solution(str_list, ex) {
    const regex = new RegExp(ex);
    return str_list.reduce((acc, cur) => !regex.test(cur) ? acc += cur : acc, "")
}