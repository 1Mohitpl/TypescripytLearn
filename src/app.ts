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

// types can use into in unions and AND, but interface does not provide that features
type CarOwner = {
      name : string;
      phoneNo: number;
      address: string;
}

interface Seller {
    age: number;
    address: string;
    
}

type buyer = CarOwner & Seller;

const info : buyer ={
      name: 'jhone',
      age: 23,
      address : 'india',
      phoneNo :656565656,
}



//extend 

// interface Book{
//     name : string,
//     price: number
// }

// interface EBOOK extends Book{
//      format: string,
//     fileSize: number,
// }

// const ebook : EBOOK = {
//      name: 'skye new',
//      price :666,
//      format: 'pdf',
//      fileSize : 666,
// }
// const book : Book ={
//     name: 'money',
//     price: 562,
// };


/** merge two interface */


interface  Book {
    name : string;
    price : number;
}

interface Book {
    size : number;
}

const book : Book  ={
    name : 'real money',
    price : 5615,
    size :45,
}


/** unions */

type ID = number | string;   // it can make a number or a string 

// narrowing 

function printId (id: ID) {
    if( typeof id  === 'string'){
        console.log(id.toUpperCase());
        
    } else {
        console.log(id);
    }
       
};

printId("ads");


// Generics   



function isleagl (age : number ){
    if(age < 18){
        return false;
    } else{
        return true;
    }
}

let x= isleagl(23);
console.log(x);




function sum (a: number, b: number){
     return a+b;
}

const ans = sum(3, 4);
console.log(ans);


function printing(fn: () => void){  // herer we can basically explicityly give type of funtion that is void function
    setTimeout(fn, 4000);

}


printing(function () {
    console.log("i want to print it ");
    
})


/**Concept of Enums */

enum kepress {
    up = "up",
    down = "down",
    right = "right",
    left = "left"
}

function PressSomething (keypressed : kepress){
      if(keypressed == kepress.up){
       
        
      } 

      if(keypressed == kepress.left){
       
        
      }
}



function FirstName<T>(arr: T[]){
      return arr[0];
}

const res = FirstName(["mohit","paul"]);
console.log(res.toUpperCase());
