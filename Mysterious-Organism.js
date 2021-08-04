// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Creates a new pAequor instance
const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get specimenNum() {
      return this._specimenNum;
    },
    set specimenNum(newNum) {
      this._specimenNum = newNum;
    },
    
    get dna() {
      return this._dna;
    },
    set dna(newDNA) {
      this._dna = newDNA;
    },

    mutate() {
      let randIndex = Math.floor(Math.random() * dna.length);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[randIndex] || newBase === undefined);
      dna[randIndex] = newBase;
      return this.dna;
    },

    compareDNA(pAequorObj) {
      let matchCount = 0;
      let strandLength = this.dna.length;
      for (let i = 0; i < strandLength; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          matchCount++;
        }
      }
      let percentMatch = Math.round(matchCount/strandLength * 100);
      return percentMatch;
      console.log(`Specimen ${this.specimenNum} and Specimen ${pAequorObj.specimenNum} have ${percentMatch}% DNA in common.`);
    },

    willLikelySurvive() {
      let goodBases = ['C', 'G'];
      let goodBaseCount = 0
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < goodBases.length; j++) {
          if (this.dna[i] === goodBases[j]) {
            goodBaseCount++;
          }
        }
      }
      let percentGoodBase = Math.round(goodBaseCount/this.dna.length * 100);
      return percentGoodBase >= 60;
    },

    complementStrand() {
      let newStrand = [];
      let switchBase;
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            switchBase = 'T';
            break;
          case 'C':
            switchBase = 'G';
            break;
          case 'G':
            switchBase = 'C';
            break;
          case 'T':
            switchBase = 'A';
            break;
          default: `${this.dna[i]} is not a valid base. Seek a geneticist.`;
        }
        newStrand.push(switchBase);
      }
      return newStrand;
    }

  }
}

// Function for creating a batch of pAequor instances that will likely survive.
const createStrongBatch = size => {
  let strongBatch = [];
  let specNum = 1;
  do {
    let newSpec = pAequorFactory(specNum, mockUpStrand());
    if (newSpec.willLikelySurvive()) {
      strongBatch.push(newSpec);
    }
    specNum++;
  } while (strongBatch.length < size);
  return strongBatch;
}

// Batch of pAequor instances that will likely survive
let batchOne = createStrongBatch(30);
let batchTwo = createStrongBatch(30);

// Function which finds the 2 most related instances of pAequor from batchOne
const findClosestMatch = batch => {
  let currentBestScore = 0;
  let currentBestPair = [];

  for (let i = 0; i < batch.length; i++) {
    for (let j = 0; j < batch.length; j++) {
      if (i !== j) {
        if (batch[i].compareDNA(batch[j]) > currentBestScore) {
          currentBestScore = batch[i].compareDNA(batch[j]);
          currentBestPair[0] = batch[i]; 
          currentBestPair[1] = batch[j];
        }
      }
    }
  }
  console.log(`The most related instances of pAequor in this batch are Specimens ${currentBestPair[0].specimenNum} and ${currentBestPair[1].specimenNum}, with ${currentBestScore}% DNA in common.`);
  return currentBestPair;
}