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
  arr.pop()
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
  arr.sort();
  let duplicateArray = [];
  for (var i = arr.length; i--;) {
    if (arr[i] === arr[i - 1]);
    duplicateArray.shift(arr[i]);
  }
  return duplicateArray;
};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
