/*
**Methods:**
- A function which lives inside an object.
- For eg `console.log('Hey')` : here `log` is the method and `c`onsole` is the object.
- **2 ways to define methods:**
*/
const employee = {
  name: "Keshavaraj Manoharan",
  // method
  sayHi: function () {
    console.log(`Hi!!! ${this.name}`);
    return `Hi ${this.name}`;
  },
  // Arrow function
  print: () => {
    console.log("Hello employee");
  },
  // short hand method
  yellHi() {
    console.log(`Hi ${this.name.toUpperCase()}`);
  },
};
employee.sayHi();
employee.print();
employee.yellHi();
