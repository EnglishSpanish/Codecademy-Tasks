const _ = {
  clamp(num, lower, upper) {
    var temp = Math.max(num, lower);
    return Math.min(temp, upper);
  },

  inRange(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    return num >= start && num < end;
  },

  words(str) {
    return str.split(' ');
  },
  
  pad(str, len) {
    if (len <= str.length) {
      return str;
    }

    let totalPad = len - str.length;
    let startPad = Math.floor(totalPad/2);
    let endPad = totalPad - startPad;

    return `${' '.repeat(startPad)}${str}${' '.repeat(endPad)}`;
  },

  has(obj, key) {
    return obj[key] !== undefined;
  },

  invert(obj) {
    let invertedObject = {};
    for (const key in obj) {
      invertedObject[obj[key]] = key;
    };
    return invertedObject;
  },

  findKey(obj, predicate) {
    for (const key in obj) {
      if (predicate(obj[key]) === true) {
        return key;
      };
      return undefined;
    }
  },

  drop(arr, num=1) {
    let newArr = arr.slice(num);
    return newArr;
  },

  dropWhile(arr, predicate) {
    let dropNum = arr.findIndex((element, index) => {
      return predicate(element, index, arr) === false;
    });
    let newArr = this.drop(arr, dropNum);
    return newArr;
  },

  chunk(arr, size=1) {
    let numArrays = arr.length/size;
    let newArr = [];

    for (let i = 0; i < arr.length; i += size) {
      let arrChunk = arr.slice(i, i + size);
      newArr.push(arrChunk);
    };

    return newArr;
  },
};


// Do not write or modify code below this line.
module.exports = _;