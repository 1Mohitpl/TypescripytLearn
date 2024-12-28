function calculate (num1: string, num2: number){
    return num1 + num2;
}

console.log(calculate('12', 12));


function getTotal(numbers: any[]) {
    return numbers.reduce((acc: any, item: any) =>{
        return acc + item;
    }, 0);
}

console.log(getTotal([3, 2, 1]));




// const user = {
//     firstname : 'john',
//     lastename : 'doe',
//     role:  'software enginner',

// };


// console.log(user.firstname);  // using type script we can get the object directly from anywhere


// type alias  // to make custom types in typescript

type User = {
    name : string, 
    age : number,
    addres?: string;   // take it as optional
}



// console.log(user);

function login(userdata : User): User{
    return userdata;
}


const user = {
    name : 'pol',
    age : 24
}
console.log(login(user));

/*these are all custome types*/
type Id = number | string;   // id can be an number or string;

const userId : Id = "43"
console.log(userId);

console.log(typeof(userId));


/** Interfaces */

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber :number;
    accountHolder: string;
    balance : number;

    isactive : boolean;
     transactions: Transaction[]; 
}

const transaction1 : Transaction = {
    payerAccountNumber : 65564,
    payeeAccountNumber : 556,
} 

const transaction2: Transaction = {
    payerAccountNumber: 65646,
    payeeAccountNumber:231,
}


const bankAccount : BankAccount = {
    accountNumber: 564633159,
    accountHolder: 'john doa',
    balance : 6000,
    isactive :true,
    transactions : [transaction1, transaction2]
}

//extend 

interface Book{
    name : string,
    price: number
}

interface EBOOK extends Book{
     format: string,
    fileSize: number,
}

const ebook : EBOOK = {
     name: 'skye new',
     price :666,
     format: 'pdf',
     fileSize : 666,
}
const book : Book ={
    name: 'money',
    price: 562,
};


/** merge two interface */


interface  Book {
    name : string;
    price : number;
}