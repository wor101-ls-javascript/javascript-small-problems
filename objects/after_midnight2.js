/*
**Problem**
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

The two functions below do the reverse of the previous exercise. 
They take a 24-hour time argument and return the number of minutes before or after midnight, respectively. 
Both functions should return a value between 0 and 1439 (inclusive). Refactor the functions using the Date object.


**Examples / Test Cases**
afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686

**Data Structures**


**Algorithm**
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let midnight = new Date('January 1, 2000 00:00');
  let splitString = timeStr.split(':');
  let hours = splitString[0];
  let minutes = splitString[1];
  let newDate = new Date('January 1, 2000 00:00');
  newDate.setHours(hours);
  newDate.setMinutes(minutes);

  let milliseconds = newDate.getTime() - midnight.getTime();
  return milliseconds / 60000;

}

function beforeMidnight(timeStr) {
  let midnight = new Date('January 1, 2000 00:00');
  let splitString = timeStr.split(':');
  let hours = splitString[0];
  let minutes = splitString[1];
  let newDate = new Date('December 31, 1999 00:00');
  newDate.setHours(hours);
  newDate.setMinutes(minutes);

  if(timeStr === '00:00') {
    return 0;
  }

  let milliseconds = midnight.getTime() - newDate.getTime();
  return milliseconds / 60000;


}







console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0

console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686