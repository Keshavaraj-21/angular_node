const doc = doctorize("Keshav");
console.log(doc);
function doctorize(firstName) {
  // eslint-disable-next-line no-template-curly-in-string
  return `Dr. ${firstName}`;
}

//Anon Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }
// Function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
const doct = doctorize("Keshav");
console.log(doct);
