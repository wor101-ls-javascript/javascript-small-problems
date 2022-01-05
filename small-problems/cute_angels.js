/*
**Problem**
Write a function that takes a floating point number representing an angle between 0 and 360 degrees 
and returns a string representing that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
and a double quote (") to represent seconds. 
There are 60 minutes in a degree, and 60 seconds in a minute.

**Examples / Test Cases**
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

**Data Structures**
seconds in an hour = 3600
seconds in a minute = 60

**Algorithm**
1. create const SECONDS_IN_HOUR, SECONDS_IN_MINUTE
2. create const variables: degrees, minutes, seconds
  - create let variable remainder and set to 0
3. set degrees equal to Math.floor(input)
  - update remainder to equal input - degrees
4. set minutes = Math.(floor(SECONDS_IN_HOUR * remainder) / SECONDS_IN_MINUTE)
  - update remainder to equal minutes - ((SECONDS_IN_HOUR * remainder) / SECONDS_IN_MINUTE)
5. set seconds = Math.floor(SECONDS_IN_MINUTE * remainder)
6. return string of all three (take care of 0's)
*/

// function dms(int) {
//   const SECONDS_IN_HOUR = 3600;
//   const SECONDS_IN_MINUTE = 60;

//   let remainder = 0;

//   let degrees = Math.floor(int);
//   remainder = int - degrees;

//   let minutes = Math.floor((SECONDS_IN_HOUR * remainder) / SECONDS_IN_MINUTE);
//   remainder = ((SECONDS_IN_HOUR * remainder) / SECONDS_IN_MINUTE) - minutes;

//   let seconds = Math.floor(SECONDS_IN_MINUTE * remainder);

//   degrees = String(degrees);
//   minutes = pad(String(minutes));
//   seconds = pad(String(seconds));

  
  
//   return `${degrees}˚${minutes}'${seconds}"`;
// }

function dms(int) {
  const SECONDS_IN_DEGREE = 3600;
  const SECONDS_IN_MINUTE = 60; 
  let totalSeconds = int * SECONDS_IN_DEGREE;
  
  let degrees = Math.floor(totalSeconds / 3600)
  totalSeconds -= (degrees * SECONDS_IN_DEGREE);

  let minutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
  totalSeconds -= (minutes * SECONDS_IN_MINUTE);

  let seconds = Math.floor(totalSeconds);

  degrees = String(degrees);
  minutes = pad(String(minutes));
  seconds = pad(String(seconds));
  
  return `${degrees}˚${minutes}'${seconds}"`;
}

function pad(string) {
  if (string.length < 2) {
    return '0' + string;
  } else {
    return string;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"