/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const baseOffset = 1000000000

const newID = baseOffset + oldID;

const ageIsValid = Number.isInteger(currentAge);

const randomNumber = Math.random(0, 20);

const randomInteger = Math.floor(randomNumber);

const randomUserID = randomInteger + baseOffset;

