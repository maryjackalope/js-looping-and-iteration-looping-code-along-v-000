// Code your solutions in this file


function maybeTails() {
  return Math.random() >= 0.5;
}
 function tailsNeverFails() {
  let counter = 0;
  while (maybeTails()) {
    counter ++;
  }
  return `You got ${counter} tails in a row!`;
}