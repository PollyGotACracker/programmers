function solution(numbers) {
    const engs = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    engs.forEach((v, i) => {
        const regex = new RegExp(v, "g");
        numbers = numbers.replaceAll(regex, i);
    })
    return Number(numbers);
}