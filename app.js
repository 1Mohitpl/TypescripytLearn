function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate('12', 12));
function getTotal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal([3, 2, 1]));
var user = {
    name: 'pol',
    age: 24
};
console.log(user);
