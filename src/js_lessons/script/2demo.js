function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}
const greeting = createGreeting("Hi");
console.log(greeting("Keshav"));
