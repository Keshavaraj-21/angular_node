function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}
let greetings = yell("sowmi");
console.log(greetings);
greetings = yell();
console.log(greetings);
