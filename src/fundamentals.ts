/* --- Annotating --- */
let sales: number = 123_456_789; // can use underscore to separate large a number
let course: string = "TypeScript";
let is_published: boolean = true;

// typescript will automatically detect the type 
// though it's not annotating
let someNum = 666;

// when not initialize a variable
// it will be 'any' type;
let anyVar;

const render = (document:any) =>{ // better not to use any
    console.log(document);
};


/* --- Array --- */

// JS dtynamic code
let number = [ 1 , 2 , '3' ]

// give an annotation when declare an empty array or it will be 'any' type
let number0 = [];

let number1: number[] = [ 1 , 2 , 3 ];


/* --- Tuples --- */ 
// use for pair of values (key value pairs)
// internally represented using plain JS arrays
let user: [number, string] = [1, 'Zale'];


/* --- Enums --- */
// represents a list of related constants

// PascalCase - first letter of every word should be uppercase
// by default: Small = 0 , Medium = 1 , ...
enum Size { Small = 1, Medium , Large };
// you can set it by your own use other number or even string
// enum Size { Small = 's' , Medium = 'm' , Large = 'l' };

let mySize: Size = Size.Medium;
console.log(mySize); // 2
// if define enum as a const, 
// compiler will generate more optimized code
// const Size { Small = 1, Medium , Large } // ===> let mySize = 2;


/* --- Functions --- */
// best practice : always properly annotate your functions
// function funName( arg : annotationType ): returnType { ... }
// ex: const test = (num:number):string=>{return "aaaa";}

// tsconfig.json -  "noUnusedParameters": true,
// const hehehe = (unusePram:number):void => {}

// tsconfig.json - "noImplicitReturns": true,       
// can use 'taxYear?:number' for an optional scenario
// it will be better to give a default value 'taxYear= 2022'
const calculateTax = (income:number, taxYear?:number):number =>{
    if((taxYear || 2022) < 2022)
        return income * 1.2;
    // income > 50_000 will return 'undefined' unless you add:
    return income * 1.3;
};

// must use exactly 2 args, 
// not like JS can doesn't care how many args pass
calculateTax( 10_000 , 2022 ); 
calculateTax( 10_000 ); // when second arg is optional or has a default value


/* --- Object --- */
// let employee = { id : 1};
// employee.name = 'Zale'; // it's valid in JS but not valid in TS
// "Property 'name' does not exist on type '{id:number;}';"
let employee0:{
    readonly id:number, // readonly = prevent accidentally modifying
    name:string, // name?:string = optional
    retire: (date:Date) => void
} = { 
    id:1 , 
    name:'Zale',
    retire: (date:Date) => {
        console.log(date)
    }
};