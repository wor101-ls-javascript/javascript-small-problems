let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function includeThree(inputArray) {
  if (inputArray.includes(3)) {
    console.log(inputArray + " includes 3");
  } else {
    console.log(inputArray + ' does not include 3');
  };
};

includeThree(numbers1);
includeThree(numbers2);
includeThree(numbers3);