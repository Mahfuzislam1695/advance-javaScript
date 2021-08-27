function add(num1, num2) {
    console.log([...arguments]);
    return num1 + num2 + arguments[3];
}
const result = add(4, 4, 5, 4, 6)
console.log(result);