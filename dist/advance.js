"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Zale',
    retire: (date) => {
        console.log(date);
    }
};
const kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return +weight * 2.2;
};
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
const greet0 = (name) => {
    console.log(name.toUpperCase());
};
const greet = (name) => {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Sawadee');
};
greet(null);
greet(undefined);
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=advance.js.map