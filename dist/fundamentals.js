"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let someNum = 666;
let anyVar;
const render = (document) => {
    console.log(document);
};
let number = [1, 2, '3'];
let number0 = [];
let number1 = [1, 2, 3];
let user = [1, 'Zale'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
const calculateTax = (income, taxYear) => {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
};
calculateTax(10000, 2022);
calculateTax(10000);
let employee0 = {
    id: 1,
    name: 'Zale',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=fundamentals.js.map