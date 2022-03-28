//*Arrow Fnctions*
const inchToCM = (inches) => {
  return inches * 2.54;
};
const resultcm = inchToCM(10);
console.log(resultcm);
const funA = () => {
  console.log(`Hi`);
};
funA();
const add = (a, b = 3) => a + b;
const inTocm = (inches) => inches * 2.54;
console.log(add(100));
console.log(inTocm(25));
// * Arrow Function*
//returns an object
const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makeAPerson("keshavaraj", "manoharan");
console.log(person);
//*IIFE: Immediately Invoked Function Expression */
(function (age) {
  //   return `you are cool and your age is ${age}`;
  console.log(`you are cool and your age is ${age}`);
})(10);
//parantheses run the first in javascript, so we have wrapped the function in().
//The function immediately runs.
//argument passed here is 10 dor parameter age.
