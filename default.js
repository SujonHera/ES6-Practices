// default function can be help for missing value
function add(num1, num2 = 0) {
    return num1 + num2;
}
let result = add(23);
console.log(result)