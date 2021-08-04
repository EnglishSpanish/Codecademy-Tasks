// Write function below
const factorial = num => {
  let total = num
  for (let i = num-1; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(6));

// Write function below
const subLength = (str, char) => {
  let charCount = 0;
  let locArr = [];

  for (let j = 0; j < str.length; j++) {
    if (str[j] == char) {
      charCount++;
      locArr.push(j);
    }
    if (charCount > 2) {
      return 0;
    }
  }
  if (charCount < 2) {
    return 0;
  }
  return locArr.reduce((a,b) => b-a+1); 
}

console.log(subLength('Saturday', 'a'));
console.log(subLength('summer', 'm'));
console.log(subLength('digitize', 'i'));
console.log(subLength('cheesecake', 'k'));

// Write function below
const groceries = arr => {
  let itemStr = '';

  for (let k = 0; k < arr.length; k++) {
    if (k < arr.length-2) {
      itemStr += arr[k].item + ', ';
    } else if (k == arr.length-2) {
      itemStr += arr[k].item + ' and ';
    } else {
      itemStr += arr[k].item;
    }
  }
  return itemStr;
}

console.log(groceries([{item: 'Cheese Balls'}]));
