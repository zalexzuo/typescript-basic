/* --- Type Alias --- */
// similar to interfaces
type Employee = { // PascalCase
    readonly id:number, 
    name:string,
    retire: (date:Date) => void
};

let employee: Employee = {
  id:1,
  name:'Zale',
  retire: (date:Date) => {
    console.log(date)
    }
};

type gender = 'male' | 'female' | 'other';


/* --- Union Tpyes --- */
// give a variable or a function param more than one type
const kgToLbs = (weight: number | string ):number =>{
    // Narrowing
    if(typeof weight === 'number') return weight * 2.2;
    else return +weight * 2.2;
};


/* --- Intersection Types --- */

type Draggable = {
    drag: () => void;
};

type Resizeable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizeable;

// implement all member in Draggable and Resizeable.
let textBox: UIWidget = {
    drag: () => {} ,
    resize: () => {}
};


/* --- Literal Types --- */
// limit the values we can assign to a variable

// Literal (exact, specific)
// let quantity: 50 | 100 = 50;

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';


/* --- Nullable Types --- */
// to have ability using 'null'

// tsconfig.json - "strictNullChecks": true,  
// the setting above is enable by default, and TS will strict on checking null.å 
// avoid disable this setting.
const greet0 = (name:string):void =>{
    console.log(name.toUpperCase());
};

// greet(null); // vaild in JS but not in TS
// TS is strict in 'null' and 'undefined'

const greet = (name:string | null | undefined):void =>{
    if(name) // if name is truthy
        console.log(name.toUpperCase());
    else
        console.log('Sawadee');
};

greet(null); // Sawadee
greet(undefined); // Sawadee


/* --- Optional Chaining --- */
type Customer = {
    birthday?: Date;
}
const getCustomer = (id:number): Customer | null | undefined =>{
    return id === 0 ? null : { birthday: new Date() };
};

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined )
//     console.log(customer.birthday);

// Optional property access operator '?.'
// code gets executed only when customer is not 'null' or 'undefined'
console.log(customer?.birthday); // undefined

// executed only if you have a customer and it has a birthday, 
// or will get 'undefined'
console.log(customer?.birthday?.getFullYear()); // undefined


/* --- Optional element access operator --- */
// use(ful when dealing with arrays
// if(customers !== null && customers !== undefined )
//      console.log(customers[0]);
// ===> customers?.[0];


/* --- Optional call operator --- */
// let log: any = (msg:string):void => console.log(msg);
let log : any = null;
log?.('a'); 
// executed only if log is referencing an actual function
// otherwise will get undefined.
