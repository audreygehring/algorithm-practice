let globals = () => {
  let myObject = {
    name : 'Jory'
  };
  return myObject;
};

let identity = (val1, val2) => {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};
