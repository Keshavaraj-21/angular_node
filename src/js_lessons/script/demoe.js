// Debuggng
// `console.log` - normal logging
// `console.info` - similar to `console.log
// `console.error` - used for throwing/handling errors(changes looks of log in console + gives a stacktrace),
// `console.warn` - similar to console.error but used for warning(only UI difference than previous)
// `console.table` - useful to use when we havedata in array of objects where the objects have same keys,it formats it in a nice table.
// `console.count` - counts how many times,say, a function is run
const people = [
  { name: "John", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "USA" },
  { name: "Jimmy", cool: false, country: "India" },
];
people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country);
});
function certify(name) {
  console.count(`certifying doctor degree for ${name}`);
  return `Dr. ${name}`;
}
