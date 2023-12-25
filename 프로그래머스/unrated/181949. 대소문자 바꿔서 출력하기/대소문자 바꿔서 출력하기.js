const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = "";
    for (let char of str){
    let code = char.charCodeAt();
    if (code >= 65 && code < 97){
        code += 32;
    }
    else if (code >= 97 && code <= 122){
        code -= 32;
    }
    answer += String.fromCharCode(code);
    }
    console.log(answer);
});