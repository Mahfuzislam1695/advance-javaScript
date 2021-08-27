const numbers = [5, 4, 3, 7, 2, 9,]
const output = []

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
// console.log(output);

// const square = element => element * element;
// const square = x => x * x;
const result = numbers.map(element => element * element);
// console.log(result);

const bigger = numbers.filter(x => x<5);
console.log(bigger);
