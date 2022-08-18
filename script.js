// 01.pop() method
// This method removes the lest elements from an array and returns that elements.
let cities = ["Dhaka", "Chittagong", "Rajshahi", "Khulna"];

// remove the last element
let removeCity = cities.pop();

console.log("01.pop() method=", "cities:", cities, "removeCity:", removeCity);

//02.push() method
// This method adds zero or more elements to the end of the array.
cities.push("Sylhet");
console.log("02.push() method=", cities);

// 03.reduce() method
// This methos executes a reducer function on each element of the array  and returns a single output value.

const numbers = [20, 10, 18, 12];

const sum = numbers.reduce((x, y) => x + y, 0);
console.log("03.reduce() method=", sum);

//04. filter() method
// This method returns a new array with all elements that pass the test defined by the given function
const words = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];

const longWords = words.filter((word) => word.length > 4);
console.log("04. filter() method=", longWords);

// 05.foreach() method
// This method executes a provided function  for each array element.
words.forEach((word) => console.log("05.foreach() method=", word));

// 06.map() method
// This method creates a new array with the results of calling a function for every array element....
const doubled = numbers.map((x) => x * 2);
console.log("06.map() method=", doubled);

// 07.find() method
// This method returns the value of the first array element that satisfies the provided test function.

const newNumbers = [7, 14, 8, 128, 56];
const found = newNumbers.find((element) => element > 10);

console.log("07.find() method=", found);

// 08.findIndex() method
// This method returns the index of the first array element that satisfies the provided test function or else returns. -1.

const indexFound = newNumbers.findIndex((element) => element > 15);

console.log("08.findIndex() method=", indexFound);

// 09.sort() method
// This method sorts the items of an array in a specific order (ascending or descending)

let sortedArray = cities.sort();
console.log("sort() method=", sortedArray);

// 10.concat() method
// This method returns a new array by merging two or more values/arrays.

let joinedArray = numbers.concat(newNumbers);
console.log("10.concat() method=", joinedArray);
