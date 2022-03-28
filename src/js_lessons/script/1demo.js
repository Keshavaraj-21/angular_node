// The ability to access the outer level scoped data from the inner level scoped code even after the function is terminated

function doSomeTask() {
  const x = 100;
  const y = 20;
  console.log("x: " + x + " y: " + y);
}
doSomeTask();

function outer() {
  const outerVar = "Hey I am the outer var!";
  //  console.log(outerVar);
  function inner() {
    const innerVar = "Hey I am an inner var!";
    console.log(innerVar);
    console.log(outerVar);
  }
  //   console.log(innerVar);
  //   inner();
  return inner;
}
// outer();
// outer.inner();
const innerFunc = outer();
innerFunc();
innerFunc = null;
