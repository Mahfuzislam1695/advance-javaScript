const students = [
    {id: 31 , name: 'manna'},
    {id: 65 , name: 'dipjol'},
    {id: 44 , name: 'omor'},

]
const output = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = students.name;
    output.push(result);
        
}
// console.log(output);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id<43)
console.log(bigger);