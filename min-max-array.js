// Step 1: Create an array called expenses
const expenses = [2500, 3200, 1800, 4000, 2900];

// Step 2: Calculate the total expenses
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);

// Step 3: Find the highest and lowest individual expenses
const highestExpense = Math.max(...expenses);
const lowestExpense = Math.min(...expenses);

// Output the results
console.log("Expenses:", expenses);
console.log("Total Expenses:", totalExpenses);
console.log("Highest Expense:", highestExpense);
console.log("Lowest Expense:", lowestExpense);

// Step 4: Calculate the average expense
const averageExpense = totalExpenses / expenses.length;
console.log("Average Expense:", averageExpense);

// Step 5: Create a new array with expenses above the average
const aboveAverageExpenses = expenses.filter(expense => expense > averageExpense);
console.log("Expenses Above Average:", aboveAverageExpenses);

// Step 6: Create a new array with expenses below the average
const belowAverageExpenses = expenses.filter(expense => expense < averageExpense);
console.log("Expenses Below Average:", belowAverageExpenses);

// Step 7: Create a new array with expenses equal to the average
const equalAverageExpenses = expenses.filter(expense => expense === averageExpense);
console.log("Expenses Equal to Average:", equalAverageExpenses);


// Step 8: Create a new array with expenses that are even numbers
const evenExpenses = expenses.filter(expense => expense % 2 === 0);
console.log("Even Expenses:", evenExpenses);

// Step 9: Create a new array with expenses that are odd numbers
const oddExpenses = expenses.filter(expense => expense % 2 !== 0);
console.log("Odd Expenses:", oddExpenses);

