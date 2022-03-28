function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your gameName ${gameName} score is ${score}`;
  };
}
// const gname = createGame("Shadow Fight");
// console.log(gname("100"));

const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();
