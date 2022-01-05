console.log(a);

var a = 1;

// undefined
// before the execution phase, JavaScript will hoist variables and functions to the top of their scope. Therefore 
// var variables are automatically assigned the undefined value when they are hoisted
// this is different then let and const variables which are let "unset" or "not defined" when they are hosted. Left in temoporal dead zone (TDZ)
