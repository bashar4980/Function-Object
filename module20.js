//Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function setHour(hour) {
  const minutes = hour * 60;
  return minutes;
}

console.log(setHour(2));

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function isLeapYear(year) {
  var LeapYear = [];
  for (var i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
      LeapYear.push(year[i]);
      console.log(`${year[i]} is leap year}`);
    }
  }

  return LeapYear;
}

var year = [2023, 2024, 2025, 2028, 2030];

console.log(isLeapYear(year));

//Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function Sum(numbers){
    var sum = 0 ;
    for(var i = 0; i <numbers.length ; i++){
        sum += numbers[i];

    }
    console.log("Sum is: " + sum);
}

function findOddSum(values) {
  var oddNumber = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 1) {
      oddNumber.push(values[i]);
    }
  }
  return oddNumber;
}

const Values = [100, 30, 50, 21, 45, 67, 33, 99, 95];
const oddValues = findOddSum(Values);

Sum(oddValues);

