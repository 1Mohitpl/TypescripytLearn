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

const user : User = {
    name : 'pol',
    age : 24
}

console.log(user);
