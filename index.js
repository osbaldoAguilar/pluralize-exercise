var words = ['dog', 'person', 'moose', 'ox', 'wife', 'guest', 'man', 'woman', 'mess', 'photo', 'avocado', 'superhero', 'bar', 'monkey', 'combo', 'toy', 'chair', 'toe'];
 var pluralize = require('pluralize');
function getPluralization(word) {
    // This needs to be replaced with the code that returns a pluralized version of the input word()
 // var pluralWord = pluralize(word);
  return  pluralize(word);//pluralWord;
    //return// word;
}

function printPluralizedWord(word) {
    console.log(`The plural of ${word} is ${getPluralization(word)}`);
}

words.forEach(printPluralizedWord);
