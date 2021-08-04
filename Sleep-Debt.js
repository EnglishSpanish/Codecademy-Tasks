const getSleepHours = day => {
  day = day.toLowerCase();
  switch(day) {
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 4;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 9;
      break;
    default: return 'Choose a valid day.';
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  var idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return 'You got a perfect amount of sleep!';
  } else if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed!`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed!`;
  }
}

console.log(calculateSleepDebt());


