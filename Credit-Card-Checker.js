// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Checks if a specific card number is valid. Split into 2 methods so I can easily access the value of calling .reduce() on the Luhn Array.
const luhnCheck = arr => {
  let luhnArr = [];
  let init = arr.length - 1;
  for (let i = init; i >= 0; i--) {
    if ((init - i) % 2 !== 0) {
      if (arr[i] * 2 > 9) {
        luhnArr.push((arr[i] * 2) - 9);
      } else {
        luhnArr.push(arr[i] * 2);
      }
    } else {
      luhnArr.push(arr[i]);
    }
  }
  let luhnArrRed = luhnArr.reduce((acc, curr) => acc + curr);
  return luhnArrRed;
}

const validateCred = (arr) => {
  return luhnCheck(arr) % 10 === 0;
} 

// Searches for invalid card numbers within a batch.
const findInvalidCards = arr => {
  let invalidCards = [];
  arr.forEach(card => {
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  })
  return invalidCards;
}

const badBatch = findInvalidCards(batch);

// Creates a list of unique card issuers that have issued invalid cards.
const idInvalidCardCompanies = arr => {
  let companies = [];
  arr.forEach(invalidCard => {
    if (invalidCard[0] === 3) {
      if (companies.indexOf(`Amex (American Express)`) === -1) {
        companies.push(`Amex (American Express)`);
      }
    } else if (invalidCard[0] === 4) {
      if (companies.indexOf(`Visa`) === -1) {
        companies.push(`Visa`);
      }
    } else if (invalidCard[0] === 5) {
      if (companies.indexOf(`Mastercard`) === -1) {
        companies.push(`Mastercard`);
      }
    } else if (invalidCard[0] === 6) {
      if (companies.indexOf(`Discover`) === -1) {
        companies.push(`Discover`);
      }
    } else {
      console.log(`Company not found.`)
    }
  });
  return companies;
}

// Convert string input to an array of numbers
const toNum = str => {
  let splitStr = str.split('');
  let cardNum = splitStr.map(num => parseInt(num));
  console.log(cardNum);
}

// Make an invalid card valid
const fixCards = batch => {
  let fixedArray = batch.map(card => {
    let keyStone = luhnCheck(card) % 10;
  
    if (card[card.length-1] >= keyStone) {
      card[card.length-1] -= keyStone;
    } else if (card[card.length-1] < keyStone) {
      card[card.length-1] += (10 - keyStone);
    }
    return card; 
  });
  return fixedArray;
}

let fixedBatch = fixCards(badBatch);

// Formatting for easier reading
const formatFix = array => {
  array.forEach(fix => {
    console.log(fix.join(''));
  })
}

formatFix(fixedBatch);