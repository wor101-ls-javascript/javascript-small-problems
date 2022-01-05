
/*
**Problem**
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
Letter transformations preserve case. A becomes N while a becomes n.
Don't modify characters that are not letters.
Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

**Examples / Test Cases**
  console.log(rot13('Teachers open the door, but you must enter by yourself.'));

  // logs:
  Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

It's worth noting that rot13 applied twice results in the original string:

  console.log(rot13('Teachers open the door, but you must enter by yourself.'));

  // logs:
  Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

**Data Structures**
ASCII Capital Letters = 65 - 90
      Lowercase Letters = 97 - 122

**Algorithm**
1. create variable newString to return
2. iterate through the input string using a for statement
  - get ASCII number for current character
  - if ASCII number not between 65-90 OR 97-122 add current character to newString
  - if ASCII number between 65 - 90
    - add 13 to ASCII number
    - if new number is greater than 90 (letterEnd)
      - subtract 91 (letterEnd + 1) from current ASCII number 
      - add to 65 (letterStart)
    - get letter for ASCII number and add to newString
  - if ASCII number between 97-122
    - add 13 to ASCII number
    - if new number is gerater than 122 (letterEnd)
      -subtract 123 (letterEnd + 1) from current ASCII number
      - add to 97 (letterStart)
    - get letter for ASCII number and add to newString
3. Return newString
*/