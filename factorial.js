const factorial = function(number) {
  if (number < 1) {
    return `Number must be greater than 0`;
  } else if (number === 1) {
      return number;
    } else {
        return number * factorial(number -1);
      }
};

console.log(factorial(5));