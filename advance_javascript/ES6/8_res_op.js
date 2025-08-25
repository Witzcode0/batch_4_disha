const nums = [1,2,3,4,5,6];

const [one, two, ...others] = nums;

console.log(one)
console.log(two)
console.log(...others)