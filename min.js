// So I created a sorting function when all I needed was the smallest number...

// function min(numbers) {
//   // Outer loop is decrementing, as the inner loop pushes the biggest number
//   // to the end of the array
//   for (let i = numbers.length; i > -1; i--){
//     // Inner loop will loop over the array pushing the bigger number further
//     for(let k = 0; k < numbers.length; k++) {
//       // temp variable is used to store the smaller number later
//       let temp = null;
//       // counter ensures that we don't accidentally alter the k number
//       let counter = k;
//       // this is the a in an a vs b scenario
//       let otherNumber = numbers[counter];
//       // this is the b in an a vs b scenario
//       let biggestNumber = numbers[counter + 1];

//       // compare if a is bigger than b
//       if (otherNumber > biggestNumber){
//         // this is the smaller number that was in b's spot
//         // need to move it to a's spot
//         temp = biggestNumber;
//         // this is where the b was and we assign a to it
//         numbers[counter + 1] = otherNumber;
//         // this is where the a was and we assign b to it
//         numbers[counter] = temp;
//       }
//     }
//   }
//   console.log(numbers);
//   return numbers;
// }

// answering the question the right way
function min(numbers) {
  // if an empty array is given exit out
  if(numbers.length < 1){
    console.log("Must give a non empty array");
  }
  let smallestNumber = numbers[0];
  for(var i = 1; i < numbers.length; i++) {
    if(numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }
  // console.log(smallestNumber);
  return smallestNumber;
}


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

var flightPrices = [1260, 490, 599, 1400, 820];

// // Testing the function
// min(flightPrices);

console.log("The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $" + min(flightPrices));

var golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log("The winning golf score amongst -1, 3, 0, -4, 1, 4 and 1 is " + min(golfScores));

var pageNumbers = [232];
console.log("The shortest book out of a list of single book with 232 pages has " + min(pageNumbers) + " pages");

var temperatures = [45, 10, -20, 0, 3, -20];
console.log("The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is " + min(temperatures) + "C");