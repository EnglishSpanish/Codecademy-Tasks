let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = true;

var age = 12;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You will be racing at 9:30am.`)
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You will be racing at 11:00am.`)
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber}. You will be racing at 12:30am.`)
} else {
  console.log(`Please visit the registration desk.`)
}