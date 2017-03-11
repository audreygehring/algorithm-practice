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

insert = (arr, item, index) => {

}

count = (arr, item) => {

};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
