// const weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const one = weekDay[0];
// console.log(one);
// const two = weekDay[1];
// console.log(two);
// const three = weekDay[2];
// console.log(three);

// const [one, two, three, forth, fifth, sixth] = weekDay;

// console.log(one, two, three, forth, fifth, sixth)

// const colors = {
//     one: "red",
//     two: "black",
//     three: "cyne",
//     four: "wine"
// }

// const {one , two, three, four} =  colors;
// console.log(one , two, three, four)


function calc(a, b){
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;

    return [add, sub , mul, div]
}

const [addition, substraction, multiplication, division] = calc(2, 4)
console.log(addition, substraction, multiplication, division);