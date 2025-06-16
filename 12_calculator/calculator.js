const add = function(var1, var2) {
	let sum = var1 + var2;
  return sum;
};

const subtract = function(var1, var2) {
	let sum = var1 - var2;
  return sum;
};

const sum = function(array1) {
	let total = 0;
  for (let number of array1) {
    total += number;
  }
  return total
};

const multiply = function(array) {
  let total = 1;
  for (let number of array) {
    total *= number;
  }
  return total;
};

const power = function(var1, var2) {
	let total = var1 ** var2;
  return total;
};

const factorial = function(number) {
	let i = 1;
  let total = 1;
  while (i <= number) {
    total *= i;
    i++;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
