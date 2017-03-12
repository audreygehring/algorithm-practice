let removeWithoutCopy = (arr, item) => {
  for (var i = arr.length; i--;) {
    if(arr[i] === item) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

let append = (arr, item) => {
  arr.push(item);
  return arr;
};

let truncate = (arr) => {
  arr.pop();
  return arr;
};

let prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

let curtail = (arr) => {
  arr.shift();
  return arr;
};

let concat = (arr1, arr2) => {
  let joined = arr1.concat(arr2);
  return joined;
};

let insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
};

let count = (arr, item) => {
  let total = 0;
  for (var i = arr.length; i--;) {
    if(arr[i] === item) {
      total += 1;
    }
  }
  return total;
};

let duplicates = (arr) => {
  let singles = [];
  let duplicates = [];


// work through this one
  arr.forEach((item) => {
    if (duplicates.indexOf(item) > -1 && singles.indexOf(item) === -1){
      singles.push(item);
    }
    else {
      duplicates.push(item);
    }
  });
  return singles;
};

let square = (arr) => {
  let squared = [];
  arr.forEach((item) => {
    squared.push(item * item);
  });
  return squared;
};

let findAllOccurrences = (arr, item) => {
  let indexArray = [];

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      indexArray.push(i);
    }
  }
  return indexArray;
};
