let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;


console.log(typeof tweet);    //  'string'
console.log(typeof words);    // 'object'
console.log(typeof isValid);  // 'boolean'             