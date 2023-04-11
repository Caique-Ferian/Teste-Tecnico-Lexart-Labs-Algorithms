const separateNumberInAMixedArray = (array) => {
  return array.filter((e) => typeof e === 'number');
}

const separateStringsInAMixedArray = (array) => {
  return array.filter((e) => typeof e === 'string');
}

const main = (array) => {
  const numbers = separateNumberInAMixedArray(array);
  const strings = separateStringsInAMixedArray(array);
  let biggerNumber = 0;
  numbers.forEach((number) => {
    if(number > biggerNumber) biggerNumber = number;
  });
  console.log("The numbers of inputed array is:",
    numbers,"\nThe strings of inputed array is:", strings,
    "\nThe bigger number of inputed array is:", biggerNumber);
}

main(["a",10,"b","hola",122,15]);