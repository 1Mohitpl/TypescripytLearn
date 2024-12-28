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
// console.log(user);
function login(userdata) {
    return userdata;
}
var user = {
    name: 'pol',
    age: 24
};
console.log(login(user));
var userId = "43";
console.log(userId);
console.log(typeof (userId));
var transaction1 = {
    payerAccountNumber: 65564,
    payeeAccountNumber: 556,
};
var transaction2 = {
    payerAccountNumber: 65646,
    payeeAccountNumber: 231,
};
var bankAccount = {
    accountNumber: 564633159,
    accountHolder: 'john doa',
    balance: 6000,
    isactive: true,
    transactions: [transaction1, transaction2]
};
var book = {
    name: 'real money',
    price: 5615,
    size: 45,
};
// narrowing 
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
;
printId("ads");
