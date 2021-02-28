// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
 
const newPointStructure = {
  'A': [1, 3, 1],
  'B': [1, 1, 3],
  'C': [1, 1, 3],
  'D': [1, 1, 2],
  'E': [1, 3, 1],
  'F': [1, 1, 4],
  'G': [1, 1, 2],
  'H': [1, 1, 4],
  'I': [1, 3, 1],
  'J': [1, 1, 8],
  'K': [1, 1, 5],
  'L': [1, 1, 1],
  'M': [1, 1, 3],
  'N': [1, 1, 1],
  'O': [1, 3, 1],
  'P': [1, 1, 3],
  'Q': [1, 1, 10],
  'R': [1, 1, 1],
  'S': [1, 1, 1],
  'T': [1, 1, 1],
  'U': [1, 3, 1],
  'V': [1, 1, 4],
  'W': [1, 1, 4],
  'X': [1, 1, 8],
  'Y': [1, 1, 4],
  'Z': [1, 1, 10],
  ' ': [0, 0, 0]
}

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("\nLet's play some scrabble!");
   
   let word = input.question("\nEnter a word to score: ");
   return word;
};

let simpleScore;
let vowelBonusScore;
let scrabbleScore;
const scoringAlgorithms = [];

function scorerPrompt() {
  let options = ['0', '1', '2'];
  console.log("Which scoring algorithm would you like to use?");
  console.log("\n0 - Simple: One point per character",
  "\n1 - Vowel Bonus: Vowels are worth 3 points",
  "\n2 - Scrabble: Uses scrabble point system");
  let method = input.question("Enter 0, 1, or 2: ");
  while (options.includes(method) == false){
    console.log(`\nSorry. ${method} is not an option. Try again.\n`);
    method = input.question("Enter 0, 1, or 2: ");
  }
  return method;
}

function transform(aword, amethod) {
  let score = 0;
  let word = aword.toUpperCase();
  for (i = 0; i < word.length; i++){
    try{
      score += newPointStructure[word.charAt(i)][amethod];
    }catch(e){
      console.log("\nNice try! That's not a word! Try again...");
      let score = 0;
      runProgram();
      return score;
      }
    }
  return score;
  };
  
function runProgram() {
   let userWord = initialPrompt();
   let scoreMethod = scorerPrompt();
   let finalScore = transform(userWord, scoreMethod);
   if(finalScore > 0){
     console.log(`Score for '${userWord}': ${finalScore}`); 
   }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

