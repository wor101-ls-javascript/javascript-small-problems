function nextLetter(ascii, letterEnd) {
  ascii += 13;

  if (ascii > letterEnd) {
    const TOTAL_NUMBER_OF_LETTERS = 26;
    ascii -= TOTAL_NUMBER_OF_LETTERS;
  }
  return String.fromCharCode(ascii);
}

function rot13(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    const UPPER_ASCII_START = 65;
    const UPPER_ASCII_END = 90;
    const LOWER_ASCII_START = 97;
    const LOWER_ASCII_END = 122;

    let ascii = string.charCodeAt(index); 
    let newChar = string[index];
    if (ascii >= UPPER_ASCII_START && ascii <= UPPER_ASCII_END) {
      newChar = nextLetter(ascii, UPPER_ASCII_END);
    } else if (ascii >= LOWER_ASCII_START && ascii <= LOWER_ASCII_END) {
      newChar = nextLetter(ascii, LOWER_ASCII_END);
    } 
    newString += newChar;  
  }
  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log('');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.'))=== 'Teachers open the door, but you must enter by yourself.');
