// Code your solutions in this file
 function tailsNeverFails(){
   return Math.random() >= 0.5;
 }
 
 let counter = 0;
 while (tailsNeverFails()) {
    counter++;
    return 'You got ${counter} tails in a row!';
}