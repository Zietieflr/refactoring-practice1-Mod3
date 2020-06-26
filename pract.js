// Isogram is a word with no repeating letters, 
// disregard case. Return true if the function is passed an Isogram, 
// false if the word has repeating letters


function isIsogram(word) {
  return doLettersRepeat(standardizeWord(word))
}

function standardizeWord(word) {
  return word.toLowerCase().split('')
}

function doLettersRepeat(letters) {
  const uniqueLetters = new Set(letters)
  return uniqueLetters.size === letters.length 
}

console.log('Answer is: ',isIsogram('aaa'))
console.log('Answer is: ',isIsogram('something'))