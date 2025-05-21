// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const number = [1, 3, 6, 8, 21, 12, 62, 72, 51, 5];
let evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers)