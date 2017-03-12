let isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

let arraySum = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum;
};

let fizzBuzz = (num) => {
  if (num === null) {
    return null;
  }
if (num % 3 === 0 && num % 5 === 0) {
  return 'fizzbuzz';
} else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};
