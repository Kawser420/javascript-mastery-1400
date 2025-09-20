export const explanations: Record<string, string> = {
  // ========== BASIC CONDITIONALS ==========

  // problem explanation--> 01
  "if-statement-basic": `
### 💡 Problem Breakdown
This is the most fundamental control flow statement. The goal is to execute a block of code only if a specific condition is met. Here, we check if a provided password matches a secret string.

### ⚙️ Solution Walkthrough
The \`if\` statement evaluates the condition inside its parentheses. If the condition evaluates to \`true\`, the code inside the curly braces \`{}\` is executed.
\`\`\`javascript
function checkPassword(password) {
  if (password === 'secret123') {
    return 'Access Granted';
  }
  // If the condition is false, the block is skipped
}
\`\`\`
### 📚 Key Concepts
- **Conditional Logic**: Executing code based on whether a condition is true or false
- **\`if\` Statement**: The primary construct for conditional logic
- **Strict Equality (\`===\`)**: Recommended operator for checking equality
`,

  // problem explanation--> 02
  "if-else-statement": `
### 💡 Problem Breakdown
The \`if...else\` statement provides a secondary path of execution. If the initial condition is true, the \`if\` block runs; otherwise, the \`else\` block runs. This ensures that one of the two blocks will always be executed.

### ⚙️ Solution Walkthrough
The function checks if an age is 18 or greater. Based on the result, it returns one of two possible strings.
\`\`\`javascript
function checkAge(age) {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
\`\`\`
### 📚 Key Concepts
- **\`if...else\` Statement**: A fundamental control flow structure for making a decision between two exclusive paths
`,

  // problem explanation--> 03
  "else-if-statement": `
### 💡 Problem Breakdown
The \`if...else if...else\` statement allows you to test a sequence of conditions. It provides multiple branches for your control flow, making it suitable for situations with more than two possible outcomes.

### ⚙️ Solution Walkthrough
The function checks conditions in order until one is met.
\`\`\`javascript
function checkNumber(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
}
\`\`\`
### 📚 Key Concepts
- **\`if...else if...else\`**: A control structure for choosing one path out of several possibilities
- **Conditional Chaining**: Linking multiple conditions together in a specific order
`,

  // problem explanation--> 04
  "ternary-operator-basic": `
### 💡 Problem Breakdown
The conditional (or ternary) operator is a concise, one-line alternative to an \`if...else\` statement. It's an expression, which means it evaluates to a value.

### ⚙️ Solution Walkthrough
The syntax is \`condition ? value_if_true : value_if_false\`.
\`\`\`javascript
function getMessage(isLoggedIn) {
  return isLoggedIn ? 'Welcome' : 'Please log in';
}
\`\`\`
This is very useful for simple conditional assignments.

### 📚 Key Concepts
- **Ternary Operator**: A shorthand for simple conditional expressions
- **Expression vs. Statement**: A ternary is an expression (produces a value), while \`if/else\` is a statement (performs an action)
`,

  // problem explanation--> 05
  "switch-statement-basic": `
### 💡 Problem Breakdown
A \`switch\` statement is another way to control program flow. It's useful when you have a single value that you need to compare against multiple possible options (\`case\`s).

### ⚙️ Solution Walkthrough
The \`switch\` statement evaluates the \`dayNumber\` variable and looks for a \`case\` that matches its value.
\`\`\`javascript
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    // ... other cases
    default: return 'Invalid day number';
  }
}
\`\`\`
- **\`case\`**: Defines a specific value to match. The comparison is strict (\`===\`).
- **\`return\`**: Using \`return\` within a \`case\` exits both the \`switch\` statement and the function. If not returning, a \`break\` statement is needed to prevent "fall-through".
- **\`default\`**: This case runs if no other case matches. It's similar to the final \`else\` in an if-chain.

### 📚 Key Concepts
- **\`switch\` Statement**: A control flow statement for multi-way branching based on the value of a single expression
`,

  // problem explanation--> 06
  "switch-fallthrough": `
### 💡 Problem Breakdown
In a \`switch\` statement, if you omit the \`break\` (or \`return\`) statement for a \`case\`, execution will "fall through" to the next \`case\`'s code block. This can be used intentionally to have multiple cases share the same code.

### ⚙️ Solution Walkthrough
The \`case 'saturday':\` has no \`break\` or \`return\`. This means if the day is "saturday", execution falls through and runs the code for \`case 'sunday':\` as well, correctly identifying it as a 'Weekend'.
\`\`\`javascript
function checkDayType(day) {
  switch (day.toLowerCase()) {
    case 'saturday':
    case 'sunday':
      return 'Weekend';
    case 'monday':
    // ... other weekdays
    case 'friday':
      return 'Weekday';
    default:
      return 'Invalid day';
  }
}
\`\`\`

### 📚 Key Concepts
- **Fall-through**: The default behavior of a \`switch\` statement without \`break\` or \`return\` keywords
`,

  // problem explanation--> 07
  "nested-if-statement": `
### 💡 Problem Breakdown
You can place control flow statements inside one another to create more complex logic. A nested \`if\` statement allows you to check a secondary condition only if a primary condition is met.

### ⚙️ Solution Walkthrough
The outer \`if\` checks if the number is positive. Only if that is true does the inner \`if\` statement run to check if the number is also even.
\`\`\`javascript
function checkNumber(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      return 'Positive and Even';
    }
  }
  return 'Not positive or not even';
}
\`\`\`
This could also be written with a logical AND: \`if (num > 0 && num % 2 === 0)\`.

### 📚 Key Concepts
- **Nested Control Flow**: Embedding control structures within one another to create more complex logic
`,

  // problem explanation--> 08
  "logical-and-guard": `
### 💡 Problem Breakdown
This problem demonstrates a common pattern that leverages the "short-circuiting" behavior of the logical AND (\`&&\`) operator. It can be used as a "guard" to conditionally execute code.

### ⚙️ Solution Walkthrough
The expression \`shouldRun && guardedFunc()\` is evaluated.
\`\`\`javascript
function runGuarded(shouldRun) {
  const guardedFunc = () => { /* ... */ };
  // If 'shouldRun' is true, the expression continues and calls guardedFunc().
  // If 'shouldRun' is false, the expression short-circuits and stops.
  shouldRun && guardedFunc();
}
\`\`\`
This is a concise alternative to \`if (shouldRun) { guardedFunc(); }\`.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: The second operand of \`&&\` is only evaluated if the first is truthy
`,

  // problem explanation--> 09
  "logical-or-default": `
### 💡 Problem Breakdown
This is a classic pattern for providing a default value. The logical OR (\`||\`) operator short-circuits and returns the first *truthy* value it encounters.

### ⚙️ Solution Walkthrough
The expression \`username || 'Guest'\` is evaluated.
\`\`\`javascript
function getUsername(username) {
  return username || 'Guest';
}
getUsername(''); // returns 'Guest'
getUsername('Alice'); // returns 'Alice'
\`\`\`
If \`username\` is an empty string (\`''\`), which is a falsy value, the expression evaluates to the second operand, \`'Guest'\`.

### 📚 Key Concepts
- **Short-Circuit Evaluation**: The second operand of \`||\` is only evaluated if the first is falsy
- **Falsy Values**: This pattern provides a default for *any* falsy value, including \`0\`, \`false\`, and \`null\`
`,

  // problem explanation--> 10
  "nullish-coalescing-default": `
### 💡 Problem Breakdown
The nullish coalescing operator (\`??\`) is a modern alternative to \`||\` for providing defaults. The key difference is that \`??\` only triggers for \`null\` or \`undefined\`, not for other falsy values like \`0\` or \`''\`.

### ⚙️ Solution Walkthrough
The behavior of \`??\` is compared to \`||\` with the input \`0\`.
\`\`\`javascript
const value = 0;
const resultWithOr = value || 'Default';   // result is 'Default'
const resultWithNullish = value ?? 'Default'; // result is 0
\`\`\`
Use \`??\` when you want to treat falsy values like \`0\` or empty strings as valid inputs.

### 📚 Key Concepts
- **Nullish Coalescing Operator (\`??\`)**: A logical operator that provides defaults specifically for \`null\` and \`undefined\`
- **Nullish vs. Falsy**: A crucial distinction for choosing the correct operator
`,

  // problem explanation--> 11
  "check-voting-eligibility": `
### 💡 Problem Breakdown
This is a practical problem that combines multiple conditions using the logical AND (\`&&\`) operator. A person is eligible to vote only if they meet both the age and citizenship requirements.

### ⚙️ Solution Walkthrough
An \`if\` statement is used with an \`&&\` operator to check both conditions in a single expression.
\`\`\`javascript
function isEligible(age, isCitizen) {
  if (age >= 18 && isCitizen === true) {
    return 'Eligible to vote.';
  }
  return 'Not eligible to vote.';
}
\`\`\`
Both \`age >= 18\` and \`isCitizen === true\` must evaluate to \`true\` for the entire condition to be true.

### 📚 Key Concepts
- **Logical AND (\`&&\`)**: For combining multiple mandatory conditions
`,

  // problem explanation--> 12
  "movie-ticket-price": `
### 💡 Problem Breakdown
This problem requires a multi-way conditional check, making it a perfect fit for an \`if...else if...else\` chain. The function needs to check an age against several different ranges to determine a price.

### ⚙️ Solution Walkthrough
The conditions are checked in order.
\`\`\`javascript
function getTicketPrice(age) {
  if (age < 12) {
    return '$5';
  } else if (age >= 65) {
    return '$7';
  } else {
    // This covers the range 12-64
    return '$10';
  }
}
\`\`\`
The order of checks can be important. Here, checking for senior citizens *before* the default adult price is a clean way to handle the ranges.

### 📚 Key Concepts
- **\`if...else if...else\`**: Ideal for checking a variable against a series of mutually exclusive ranges
`,

  // problem explanation--> 13
  "season-finder": `
### 💡 Problem Breakdown
The goal is to map a month number to a season. Since multiple non-consecutive months can map to the same season (e.g., December, January, and February are all Winter), this requires careful conditional logic.

### ⚙️ Solution Walkthrough
An \`if...else if\` chain with logical OR (\`||\`) operators is a clear way to implement this.
\`\`\`javascript
function findSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return 'Winter';
  } else if (month >= 3 && month <= 5) {
    return 'Spring';
  } else if (month >= 6 && month <= 8) {
    return 'Summer';
  } else if (month >= 9 && month <= 11) {
    return 'Autumn';
  } else {
    return 'Invalid month';
  }
}
\`\`\`
### 📚 Key Concepts
- **Logical OR (\`||\`)**: Used to group conditions for the same outcome
- **Range Checking**: Using \`>=\` and \`<=\` to check if a value falls within a range
`,

  // problem explanation--> 14
  "check-leap-year": `
### 💡 Problem Breakdown
A leap year has a specific set of rules that must be translated into a boolean expression. A year is a leap year if it is divisible by 4, unless it is also divisible by 100 but not by 400.

### ⚙️ Solution Walkthrough
The logic is translated directly into a boolean expression using logical AND (\`&&\`), OR (\`||\`), and NOT (\`!==\`).
\`\`\`javascript
function isLeapYear(year) {
  // A year is a leap year if...
  return (year % 4 === 0 && year % 100 !== 0) // ...it's divisible by 4 but not by 100
         || (year % 400 === 0);           // ...OR it's divisible by 400.
}
\`\`\`
The parentheses are crucial to ensure the correct order of operations.

### 📚 Key Concepts
- **Modulo Operator (\`%\`)**: Used to check for divisibility
- **Complex Boolean Logic**: Combining multiple logical operators to implement a precise set of rules
`,

  // problem explanation--> 15
  "simple-calculator-switch": `
### 💡 Problem Breakdown
The goal is to create a function that acts like a basic calculator. A \`switch\` statement is a very clean and readable way to handle the different operator cases, as we are checking a single value (\`operator\`) against multiple possible string values.

### ⚙️ Solution Walkthrough
A \`switch\` statement checks the \`operator\` variable.
\`\`\`javascript
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Division by zero";
    default: throw new Error("Invalid operator");
  }
}
\`\`\`
Each \`case\` handles one of the valid operators. The \`default\` case handles any input that isn't a valid operator.

### 📚 Key Concepts
- **\`switch\` Statement**: A clear alternative to a long \`if...else if\` chain when checking a single variable against multiple exact values
`,

  // ========== LOOPS ==========

  // problem explanation--> 16
  "for-loop-basic": `
### 💡 Problem Breakdown
Loops are used to execute a block of code repeatedly. The \`for\` loop is a common type of loop that is ideal when you know how many times you want the loop to run.

### ⚙️ Solution Walkthrough
A standard \`for\` loop has three parts in its parentheses, separated by semicolons:
1.  **Initialization**: \`let i = 0;\` - Runs once before the loop starts.
2.  **Condition**: \`i < 5;\` - Checked before each iteration. The loop continues as long as this is true.
3.  **Final Expression**: \`i++\` - Runs after each iteration.
\`\`\`javascript
let result = '';
for (let i = 0; i < 5; i++) {
  result += i + ' ';
}
// result becomes "0 1 2 3 4 "
\`\`\`
### 📚 Key Concepts
- **\`for\` Loop**: A fundamental control structure for iteration
- **Iteration**: The process of repeating a set of instructions
`,

  // problem explanation--> 17
  "for-loop-countdown": `
### 💡 Problem Breakdown
This problem shows how a \`for\` loop can be configured to count downwards instead of upwards by changing its three parts.

### ⚙️ Solution Walkthrough
The \`for\` loop is set up differently:
1.  **Initialization**: \`let i = start;\` - We start at the given number.
2.  **Condition**: \`i >= 1;\` - We continue as long as the number is greater than or equal to 1.
3.  **Final Expression**: \`i--\` - We decrement the counter in each step.
\`\`\`javascript
function countdown(start) {
  let result = '';
  for (let i = start; i >= 1; i--) {
    result += i + ' ';
  }
  return result;
}
\`\`\`
### 📚 Key Concepts
- **Loop Configuration**: The three parts of a \`for\` loop are flexible and can be configured for many different iteration patterns
`,

  // problem explanation--> 18
  "while-loop-basic": `
### 💡 Problem Breakdown
A \`while\` loop repeatedly executes a block of code as long as a specified condition is true. Unlike a \`for\` loop, it doesn't have built-in initialization or update expressions.

### ⚙️ Solution Walkthrough
The loop continues to execute while the condition \`count < 5\` is true.
\`\`\`javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
\`\`\`
It's important to update the variable in the condition inside the loop to avoid infinite loops.

### 📚 Key Concepts
- **\`while\` Loop**: A loop that continues as long as its condition is true
- **Condition Update**: The loop variable must be updated inside the loop body
`,

  // problem explanation--> 19
  "do-while-loop-basic": `
### 💡 Problem Breakdown
A \`do...while\` loop is similar to a \`while\` loop, but it guarantees that the loop body executes at least once, even if the condition is initially false.

### ⚙️ Solution Walkthrough
The loop body executes first, then the condition is checked.
\`\`\`javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);
\`\`\`
This is useful when you need to execute code at least once before checking a condition.

### 📚 Key Concepts
- **\`do...while\` Loop**: A loop that executes its body at least once before checking the condition
- **Post-Condition Check**: The condition is evaluated after each iteration
`,

  // problem explanation--> 20
  "loop-array-sum": `
### 💡 Problem Breakdown
This problem demonstrates how to iterate through an array and accumulate a sum of all its elements.

### ⚙️ Solution Walkthrough
A \`for\` loop is used to access each element by its index.
\`\`\`javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
\`\`\`
The loop runs from index 0 to the last index of the array (\`arr.length - 1\`).

### 📚 Key Concepts
- **Array Iteration**: Accessing each element of an array sequentially
- **Accumulator Pattern**: Using a variable to accumulate values during iteration
`,

  // problem explanation--> 21
  "nested-loops-pyramid": `
### 💡 Problem Breakdown
Nested loops are useful for working with multi-dimensional data or creating patterns. This problem creates a pyramid pattern using two nested loops.

### ⚙️ Solution Walkthrough
The outer loop controls the rows, and the inner loops control the spaces and stars for each row.
\`\`\`javascript
function createPyramid(rows) {
  let pattern = '';
  for (let i = 1; i <= rows; i++) {
    // Add spaces
    for (let j = 1; j <= rows - i; j++) {
      pattern += ' ';
    }
    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += '*';
    }
    pattern += '\\n';
  }
  return pattern;
}
\`\`\`
### 📚 Key Concepts
- **Nested Loops**: Using one loop inside another to handle multi-dimensional patterns
- **Pattern Generation**: Creating visual patterns through careful loop control
`,

  // problem explanation--> 22
  "break-statement": `
### 💡 Problem Breakdown
The \`break\` statement is used to exit a loop prematurely, before its normal termination condition is met.

### ⚙️ Solution Walkthrough
The loop searches for a target value and exits immediately when found using \`break\`.
\`\`\`javascript
function findValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return 'Found at index ' + i;
      break; // This is redundant because return already exits
    }
  }
  return 'Not found';
}
\`\`\`
While \`break\` is shown here, using \`return\` directly would be more efficient.

### 📚 Key Concepts
- **\`break\` Statement**: Exits a loop immediately, regardless of the loop condition
- **Early Termination**: Stopping iteration once a condition is met
`,

  // problem explanation--> 23
  "continue-statement": `
### 💡 Problem Breakdown
The \`continue\` statement skips the current iteration of a loop and proceeds to the next iteration.

### ⚙️ Solution Walkthrough
The loop processes only even numbers, skipping odd numbers with \`continue\`.
\`\`\`javascript
function processEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      continue; // Skip odd numbers
    }
    console.log('Processing even number:', arr[i]);
  }
}
\`\`\`
This is useful for filtering out unwanted values during iteration.

### 📚 Key Concepts
- **\`continue\` Statement**: Skips the rest of the current iteration and moves to the next one
- **Selective Processing**: Processing only certain elements that meet specific criteria
`,

  // problem explanation--> 24
  "loop-factorial": `
### 💡 Problem Breakdown
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. This can be efficiently calculated using a loop.

### ⚙️ Solution Walkthrough
A loop multiplies numbers from 1 to n to compute the factorial.
\`\`\`javascript
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
\`\`\`
The loop starts at 1 and multiplies each successive integer until it reaches n.

### 📚 Key Concepts
- **Factorial Calculation**: The product of all positive integers up to n
- **Iterative Solution**: Using loops to solve mathematical problems
`,

  // problem explanation--> 25
  "fibonacci-sequence-loop": `
### 💡 Problem Breakdown
The Fibonacci sequence is a series where each number is the sum of the two preceding ones. This problem generates the sequence up to a certain count using a loop.

### ⚙️ Solution Walkthrough
The loop builds the sequence by keeping track of the previous two numbers.
\`\`\`javascript
function fibonacciSequence(count) {
  if (count <= 0) return [];
  if (count === 1) return [0];
  
  const sequence = [0, 1];
  for (let i = 2; i < count; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence;
}
\`\`\`
### 📚 Key Concepts
- **Fibonacci Sequence**: A mathematical sequence where each number is the sum of the two preceding ones
- **Sequence Generation**: Building a sequence iteratively
`,

  // problem explanation--> 26
  "prime-number-check": `
### 💡 Problem Breakdown
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. This problem checks if a number is prime using a loop.

### ⚙️ Solution Walkthrough
The loop checks divisibility from 2 up to the square root of the number.
\`\`\`javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
\`\`\`
Checking up to the square root is an optimization that reduces unnecessary checks.

### 📚 Key Concepts
- **Prime Numbers**: Numbers divisible only by 1 and themselves
- **Efficient Checking**: Optimizing by checking only up to the square root
`,

  // problem explanation--> 27
  "multiplication-table": `
### 💡 Problem Breakdown
This problem generates a multiplication table for a given number using nested loops.

### ⚙️ Solution Walkthrough
The outer loop controls the rows, and the inner loop controls the columns.
\`\`\`javascript
function multiplicationTable(size) {
  let table = '';
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      table += (i * j) + '\\t';
    }
    table += '\\n';
  }
  return table;
}
\`\`\`
Each cell contains the product of its row and column indices.

### 📚 Key Concepts
- **Nested Loops**: Using loops within loops to create tabular data
- **Multiplication Table**: A grid showing the products of pairs of numbers
`,

  // problem explanation--> 28
  "reverse-number-loop": `
### 💡 Problem Breakdown
This problem reverses the digits of a number using a loop and mathematical operations.

### ⚙️ Solution Walkthrough
The loop extracts digits from the number one by one and builds the reversed number.
\`\`\`javascript
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
\`\`\`
The modulo operation (\`%\`) gets the last digit, and integer division removes it.

### 📚 Key Concepts
- **Digit Extraction**: Using modulo and division to extract digits from a number
- **Number Reversal**: Building a new number from extracted digits
`,

  // problem explanation--> 29
  "count-digits-loop": `
### 💡 Problem Breakdown
This problem counts the number of digits in a number using a loop and mathematical operations.

### ⚙️ Solution Walkthrough
The loop repeatedly divides the number by 10 until it becomes 0, counting each division.
\`\`\`javascript
function countDigits(num) {
  if (num === 0) return 1;
  
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
\`\`\`
Each division by 10 effectively removes one digit from the number.

### 📚 Key Concepts
- **Digit Counting**: Determining how many digits a number has
- **Mathematical Approach**: Using division to process numbers digit by digit
`,

  // problem explanation--> 30
  "armstrong-number-loop": `
### 💡 Problem Breakdown
An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

### ⚙️ Solution Walkthrough
The solution calculates the sum of digits raised to the power of digit count.
\`\`\`javascript
function isArmstrongNumber(num) {
  const digits = num.toString();
  const power = digits.length;
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), power);
  }
  
  return sum === num;
}
\`\`\`
### 📚 Key Concepts
- **Armstrong Numbers**: Special numbers where the sum of digits raised to power equals the number itself
- **Digit Processing**: Working with individual digits of a number
`,

  // ========== ARRAYS ==========

  // problem explanation--> 31
  "array-sum": `
### 💡 Problem Breakdown
This problem calculates the sum of all elements in an array using a loop.

### ⚙️ Solution Walkthrough
A loop iterates through each element and adds it to an accumulator variable.
\`\`\`javascript
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
\`\`\`
### 📚 Key Concepts
- **Array Iteration**: Processing each element of an array
- **Accumulator Pattern**: Using a variable to accumulate values during iteration
`,

  // problem explanation--> 32
  "array-average": `
### 💡 Problem Breakdown
This problem calculates the average of all elements in an array by first summing them and then dividing by the count.

### ⚙️ Solution Walkthrough
The solution first calculates the sum, then divides by the array length.
\`\`\`javascript
function arrayAverage(arr) {
  if (arr.length === 0) return 0;
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
\`\`\`
### 📚 Key Concepts
- **Average Calculation**: Sum divided by count
- **Edge Case Handling**: Handling empty arrays to avoid division by zero
`,

  // problem explanation--> 33
  "find-max-array": `
### 💡 Problem Breakdown
This problem finds the maximum value in an array by comparing each element to the current maximum.

### ⚙️ Solution Walkthrough
The loop updates the maximum value whenever a larger element is found.
\`\`\`javascript
function findMax(arr) {
  if (arr.length === 0) return undefined;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
\`\`\`
### 📚 Key Concepts
- **Maximum Finding**: Iteratively comparing elements to find the largest value
- **Initialization**: Starting with the first element as the initial maximum
`,

  // problem explanation--> 34
  "find-min-array": `
### 💡 Problem Breakdown
This problem finds the minimum value in an array by comparing each element to the current minimum.

### ⚙️ Solution Walkthrough
The loop updates the minimum value whenever a smaller element is found.
\`\`\`javascript
function findMin(arr) {
  if (arr.length === 0) return undefined;
  
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
\`\`\`
### 📚 Key Concepts
- **Minimum Finding**: Iteratively comparing elements to find the smallest value
- **Initialization**: Starting with the first element as the initial minimum
`,

  // problem explanation--> 35
  "linear-search": `
### 💡 Problem Breakdown
Linear search is a simple algorithm that checks each element in an array sequentially until it finds the target value.

### ⚙️ Solution Walkthrough
The loop compares each element to the target value and returns the index if found.
\`\`\`javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
\`\`\`
### 📚 Key Concepts
- **Linear Search**: A simple search algorithm that checks each element in sequence
- **Sequential Access**: Processing elements one after another
`,

  // problem explanation--> 36
  "count-occurrences": `
### 💡 Problem Breakdown
This problem counts how many times a specific value appears in an array.

### ⚙️ Solution Walkthrough
The loop increments a counter each time the target value is found.
\`\`\`javascript
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
\`\`\`
### 📚 Key Concepts
- **Frequency Counting**: Determining how often a value appears in a collection
- **Conditional Counting**: Incrementing a counter only when a condition is met
`,

  // problem explanation--> 37
  "reverse-array": `
### 💡 Problem Breakdown
This problem reverses the order of elements in an array.

### ⚙️ Solution Walkthrough
The loop swaps elements from the start and end of the array moving towards the center.
\`\`\`javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
\`\`\`
Alternatively, we can reverse in place by swapping elements.

### 📚 Key Concepts
- **Array Reversal**: Changing the order of elements to be opposite of the original
- **Index Manipulation**: Working with array indices from both ends
`,

  // problem explanation--> 38
  "array-palindrome": `
### 💡 Problem Breakdown
This problem checks if an array is a palindrome, meaning it reads the same forwards and backwards.

### ⚙️ Solution Walkthrough
The solution compares elements from the start and end moving towards the center.
\`\`\`javascript
function isPalindromeArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
\`\`\`
### 📚 Key Concepts
- **Palindrome Check**: Verifying symmetry in sequences
- **Two-Pointer Technique**: Using indices from both ends to compare elements
`,

  // problem explanation--> 39
  "remove-duplicates": `
### 💡 Problem Breakdown
This problem removes duplicate values from an array, keeping only the first occurrence of each value.

### ⚙️ Solution Walkthrough
The solution uses a Set to track seen values and builds a new array with only unique elements.
\`\`\`javascript
function removeDuplicates(arr) {
  const seen = new Set();
  const result = [];
  
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  
  return result;
}
\`\`\`
### 📚 Key Concepts
- **Duplicate Removal**: Eliminating repeated values from a collection
- **Set Data Structure**: Using Set for efficient membership testing
`,

  // problem explanation--> 40
  "merge-sorted-arrays": `
### 💡 Problem Breakdown
This problem merges two already sorted arrays into a single sorted array.

### ⚙️ Solution Walkthrough
The solution uses a two-pointer approach to efficiently merge the arrays.
\`\`\`javascript
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Add remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
}
\`\`\`
### 📚 Key Concepts
- **Merge Algorithm**: Combining two sorted arrays into one sorted array
- **Two-Pointer Technique**: Using indices to track progress in both arrays
`,

  // problem explanation--> 41
  "two-sum": `
### 💡 Problem Breakdown
This problem finds two numbers in an array that add up to a specific target value.

### ⚙️ Solution Walkthrough
The solution uses a hash map to store seen values and their indices for efficient lookup.
\`\`\`javascript
function twoSum(nums, target) {
  const numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  
  return [];
}
\`\`\`
### 📚 Key Concepts
- **Complement Finding**: Using target - current to find the needed value
- **Hash Map Optimization**: Using a map for O(1) lookups
`,

  // problem explanation--> 42
  "move-zeros": `
### 💡 Problem Breakdown
This problem moves all zeros in an array to the end while maintaining the relative order of non-zero elements.

### ⚙️ Solution Walkthrough
The solution uses a two-pointer approach where one pointer tracks the position for the next non-zero element.
\`\`\`javascript
function moveZeros(nums) {
  let nonZeroIndex = 0;
  
  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  
  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  
  return nums;
}
\`\`\`
### 📚 Key Concepts
- **In-Place Modification**: Changing the array without creating a new one
- **Two-Pointer Technique**: Using pointers to track positions for different types of elements
`,

  // problem explanation--> 43
  "array-rotation": `
### 💡 Problem Breakdown
This problem rotates the elements of an array to the right by a given number of positions.

### ⚙️ Solution Walkthrough
The solution uses a three-step reversal approach for efficient rotation.
\`\`\`javascript
function rotateArray(nums, k) {
  k = k % nums.length; // Handle cases where k > array length
  
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);
  
  return nums;
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
\`\`\`
### 📚 Key Concepts
- **Array Rotation**: Shifting elements circularly within an array
- **Reversal Algorithm**: An efficient technique for rotation using array reversal
`,

  // problem explanation--> 44
  "leader-in-array": `
### 💡 Problem Breakdown
A leader in an array is an element that is greater than all elements to its right. This problem finds all leaders in an array.

### ⚙️ Solution Walkthrough
The solution traverses the array from right to left, keeping track of the maximum element seen so far.
\`\`\`javascript
function findLeaders(arr) {
  const leaders = [];
  let maxFromRight = -Infinity;
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      leaders.unshift(arr[i]);
      maxFromRight = arr[i];
    }
  }
  
  return leaders;
}
\`\`\`
### 📚 Key Concepts
- **Right-to-Left Traversal**: Processing the array from the end to the beginning
- **Maximum Tracking**: Keeping track of the maximum value encountered so far
`,

  // problem explanation--> 45
  "maximum-subarray": `
### 💡 Problem Breakdown
This problem finds the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

### ⚙️ Solution Walkthrough
Kadane's algorithm efficiently solves this problem by tracking the maximum subarray sum ending at each position.
\`\`\`javascript
function maxSubarraySum(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}
\`\`\`
### 📚 Key Concepts
- **Kadane's Algorithm**: An efficient algorithm for maximum subarray problem
- **Dynamic Programming**: Building the solution using previous computations
`,

  // ========== STRINGS ==========

  // problem explanation--> 46
  "string-length": `
### 💡 Problem Breakdown
This problem demonstrates how to find the length of a string using the built-in \`length\` property.

### ⚙️ Solution Walkthrough
The \`length\` property returns the number of characters in a string.
\`\`\`javascript
function getStringLength(str) {
  return str.length;
}
\`\`\`
### 📚 Key Concepts
- **String Length**: The number of characters in a string
- **Built-in Properties**: Using language-provided properties for common operations
`,

  // problem explanation--> 47
  "string-concatenation": `
### 💡 Problem Breakdown
String concatenation is the operation of joining two or more strings together.

### ⚙️ Solution Walkthrough
The \`+\` operator or template literals can be used to concatenate strings.
\`\`\`javascript
function concatenateStrings(str1, str2) {
  return str1 + str2;
}

// Using template literals
function concatenateWithTemplate(str1, str2) {
  return \`\${str1}\${str2}\`;
}
\`\`\`
### 📚 Key Concepts
- **String Concatenation**: Combining multiple strings into one
- **Template Literals**: A modern JavaScript feature for string interpolation
`,

  // problem explanation--> 48
  "string-palindrome": `
### 💡 Problem Breakdown
This problem checks if a string reads the same forwards and backwards, ignoring case, punctuation, and spaces.

### ⚙️ Solution Walkthrough
The solution cleans the string and then uses a two-pointer approach to check for palindrome.
\`\`\`javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
\`\`\`
### 📚 Key Concepts
- **Palindrome Check**: Verifying symmetry in strings
- **String Cleaning**: Removing non-alphanumeric characters and normalizing case
`,

  // problem explanation--> 49
  "count-vowels": `
### 💡 Problem Breakdown
This problem counts the number of vowels (a, e, i, o, u) in a string, typically case-insensitively.

### ⚙️ Solution Walkthrough
The solution iterates through the string and checks each character against a set of vowels.
\`\`\`javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}
\`\`\`
### 📚 Key Concepts
- **Vowel Counting**: Identifying and counting specific characters in a string
- **Case Insensitivity**: Handling both uppercase and lowercase letters
`,

  // problem explanation--> 50
  "count-words": `
### 💡 Problem Breakdown
This problem counts the number of words in a string, where words are typically separated by spaces.

### ⚙️ Solution Walkthrough
The solution splits the string by spaces and filters out empty strings.
\`\`\`javascript
function countWords(str) {
  const words = str.trim().split(/\s+/);
  return words.length;
}
\`\`\`
### 📚 Key Concepts
- **Word Counting**: Determining the number of words in text
- **String Splitting**: Dividing a string into parts based on a separator
`,

  // problem explanation--> 51
  "reverse-string": `
### 💡 Problem Breakdown
This problem reverses the characters in a string.

### ⚙️ Solution Walkthrough
The solution converts the string to an array, reverses it, and joins it back into a string.
\`\`\`javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
\`\`\`
Alternatively, a loop can be used to build the reversed string.

### 📚 Key Concepts
- **String Reversal**: Changing the order of characters to be opposite of the original
- **Array Conversion**: Converting between strings and arrays for manipulation
`,

  // problem explanation--> 52
  "title-case": `
### 💡 Problem Breakdown
This problem converts a string to title case, where the first letter of each word is capitalized and the rest are lowercase.

### ⚙️ Solution Walkthrough
The solution splits the string into words, capitalizes the first letter of each, and joins them back.
\`\`\`javascript
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
\`\`\`
### 📚 Key Concepts
- **Title Case Conversion**: Capitalizing the first letter of each word
- **String Transformation**: Modifying the case of characters in a string
`,

  // problem explanation--> 53
  "find-substring": `
### 💡 Problem Breakdown
This problem checks if a string contains a specific substring.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`includes\` method or implements a manual search.
\`\`\`javascript
function containsSubstring(str, substring) {
  return str.includes(substring);
}
\`\`\`
### 📚 Key Concepts
- **Substring Search**: Finding a sequence of characters within a string
- **Built-in Methods**: Using language-provided functions for common operations
`,

  // problem explanation--> 54
  "replace-substring": `
### 💡 Problem Breakdown
This problem replaces all occurrences of a substring with another string.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`replace\` method with a global regular expression.
\`\`\`javascript
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
\`\`\`
### 📚 Key Concepts
- **String Replacement**: Changing parts of a string with other content
- **Regular Expressions**: Using patterns to match text for replacement
`,

  // problem explanation--> 55
  "string-anagram": `
### 💡 Problem Breakdown
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

### ⚙️ Solution Walkthrough
The solution normalizes the strings and checks if they have the same character frequency.
\`\`\`javascript
function isAnagram(str1, str2) {
  const normalize = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
\`\`\`
### 📚 Key Concepts
- **Anagram Check**: Verifying if two strings contain the same characters in different orders
- **Character Frequency**: Ensuring both strings have the same characters with the same counts
`,

  // problem explanation--> 56
  "string-encoding": `
### 💡 Problem Breakdown
This problem encodes a string by replacing consecutive duplicate characters with the character followed by its count.

### ⚙️ Solution Walkthrough
The solution iterates through the string, counting consecutive duplicate characters.
\`\`\`javascript
function encodeString(str) {
  if (!str) return '';
  
  let encoded = '';
  let count = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i-1]) {
      count++;
    } else {
      encoded += str[i-1] + count;
      count = 1;
    }
  }
  
  return encoded;
}
\`\`\`
### 📚 Key Concepts
- **Run-Length Encoding**: A simple form of data compression
- **Character Counting**: Tracking consecutive duplicate characters
`,

  // problem explanation--> 57
  "caesar-cipher": `
### 💡 Problem Breakdown
A Caesar cipher is a substitution cipher where each letter is shifted a fixed number of positions down the alphabet.

### ⚙️ Solution Walkthrough
The solution shifts each character while preserving case and ignoring non-alphabetic characters.
\`\`\`javascript
function caesarCipher(str, shift) {
  return str
    .split('')
    .map(char => {
      if (!char.match(/[a-z]/i)) return char;
      
      const isUpperCase = char === char.toUpperCase();
      const code = char.charCodeAt(0);
      const base = isUpperCase ? 65 : 97;
      const shifted = (code - base + shift) % 26;
      
      return String.fromCharCode(base + (shifted < 0 ? shifted + 26 : shifted));
    })
    .join('');
}
\`\`\`
### 📚 Key Concepts
- **Character Code Manipulation**: Using ASCII codes to shift characters
- **Modulo Arithmetic**: Handling wrap-around from z to a
`,

  // problem explanation--> 58
  "longest-word": `
### 💡 Problem Breakdown
This problem finds the longest word in a string, where words are separated by spaces.

### ⚙️ Solution Walkthrough
The solution splits the string into words and finds the one with the maximum length.
\`\`\`javascript
function findLongestWord(str) {
  const words = str.split(' ');
  let longest = '';
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}
\`\`\`
### 📚 Key Concepts
- **Word Processing**: Analyzing individual words in text
- **Maximum Finding**: Identifying the element with the largest value in a collection
`,

  // problem explanation--> 59
  "string-compression": `
### 💡 Problem Breakdown
This problem compresses a string by replacing consecutive duplicate characters with the character followed by its count.

### ⚙️ Solution Walkthrough
Similar to encoding, but returns the original string if compression doesn't make it shorter.
\`\`\`javascript
function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}
\`\`\`
### 📚 Key Concepts
- **String Compression**: Reducing the size of a string by encoding repetitions
- **Efficiency Consideration**: Only returning compressed version if it's actually shorter
`,

  // problem explanation--> 60
  "string-rotation": `
### 💡 Problem Breakdown
This problem checks if one string is a rotation of another by concatenating and checking for substring.

### ⚙️ Solution Walkthrough
The solution concatenates the first string with itself and checks if the second string is a substring.
\`\`\`javascript
function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}
\`\`\`
### 📚 Key Concepts
- **String Rotation**: Checking if one string can be obtained by rotating another
- **Concatenation Trick**: Doubling the string to check for rotation
`,

  // ========== FUNCTIONS ==========

  // problem explanation--> 61
  "function-basic": `
### 💡 Problem Breakdown
This problem demonstrates the basic syntax of defining and calling a function in JavaScript.

### ⚙️ Solution Walkthrough
A function is defined using the \`function\` keyword, followed by a name, parameters, and a body.
\`\`\`javascript
function greet(name) {
  return 'Hello, ' + name + '!';
}

const message = greet('Alice');
\`\`\`
### 📚 Key Concepts
- **Function Definition**: Creating a reusable block of code
- **Function Call**: Executing the function with specific arguments
`,

  // problem explanation--> 62
  "function-parameters": `
### 💡 Problem Breakdown
This problem demonstrates how functions can accept parameters to make them more flexible and reusable.

### ⚙️ Solution Walkthrough
Parameters are variables listed in the function definition that receive values when the function is called.
\`\`\`javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 3); // 15
\`\`\`
### 📚 Key Concepts
- **Parameters**: Variables in the function definition
- **Arguments**: Values passed to the function when called
`,

  // problem explanation--> 63
  "function-return": `
### 💡 Problem Breakdown
This problem demonstrates how functions can return values using the \`return\` statement.

### ⚙️ Solution Walkthrough
The \`return\` statement specifies the value that the function should produce.
\`\`\`javascript
function add(a, b) {
  return a + b;
}

const sum = add(2, 3); // 5
\`\`\`
### 📚 Key Concepts
- **Return Statement**: Ending function execution and specifying a return value
- **Function Output**: The value produced by a function call
`,

  // problem explanation--> 64
  "function-expression": `
### 💡 Problem Breakdown
This problem demonstrates function expressions, where a function is assigned to a variable.

### ⚙️ Solution Walkthrough
Function expressions can be named or anonymous and are often used as callback functions.
\`\`\`javascript
const square = function(x) {
  return x * x;
};

const result = square(4); // 16
\`\`\`
### 📚 Key Concepts
- **Function Expression**: Defining a function as part of an expression
- **Anonymous Functions**: Functions without a name
`,

  // problem explanation--> 65
  "arrow-function": `
### 💡 Problem Breakdown
Arrow functions provide a more concise syntax for writing functions and have different behavior with the \`this\` keyword.

### ⚙️ Solution Walkthrough
Arrow functions use a fat arrow (\`=>\`) syntax and are often used for short functions.
\`\`\`javascript
const multiply = (a, b) => a * b;

// Equivalent to:
// const multiply = function(a, b) {
//   return a * b;
// };
\`\`\`
### 📚 Key Concepts
- **Arrow Function Syntax**: A concise way to write functions
- **Lexical \`this\`**: Arrow functions don't have their own \`this\` binding
`,

  // problem explanation--> 66
  "higher-order-function": `
### 💡 Problem Breakdown
Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

### ⚙️ Solution Walkthrough
The \`map\` function is a common higher-order function that applies a function to each element of an array.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]
\`\`\`
### 📚 Key Concepts
- **Higher-Order Functions**: Functions that work with other functions
- **Function as Argument**: Passing functions as parameters to other functions
`,

  // problem explanation--> 67
  "callback-function": `
### 💡 Problem Breakdown
A callback function is a function passed into another function as an argument to be executed later.

### ⚙️ Solution Walkthrough
Callbacks are commonly used in asynchronous operations and event handling.
\`\`\`javascript
function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(name => {
  console.log('Hello ' + name);
});
\`\`\`
### 📚 Key Concepts
- **Callback Functions**: Functions passed as arguments to be called later
- **Asynchronous Programming**: Using callbacks for non-blocking operations
`,

  // problem explanation--> 68
  "recursive-factorial": `
### 💡 Problem Breakdown
Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.

### ⚙️ Solution Walkthrough
The factorial function calls itself with a smaller value until it reaches the base case.
\`\`\`javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
\`\`\`
### 📚 Key Concepts
- **Recursion**: A function that calls itself
- **Base Case**: The condition that stops the recursion
`,

  // problem explanation--> 69
  "recursive-fibonacci": `
### 💡 Problem Breakdown
The Fibonacci sequence can be defined recursively, where each number is the sum of the two preceding ones.

### ⚙️ Solution Walkthrough
The recursive solution directly implements the mathematical definition but is inefficient for large values.
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`
### 📚 Key Concepts
- **Recursive Definition**: Implementing a mathematical definition directly
- **Exponential Time Complexity**: The inefficiency of naive recursive Fibonacci
`,

  // problem explanation--> 70
  "closure-counter": `
### 💡 Problem Breakdown
A closure is a function that has access to variables from its outer scope even after the outer function has returned.

### ⚙️ Solution Walkthrough
The counter function returns a function that closes over the \`count\` variable.
\`\`\`javascript
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
\`\`\`
### 📚 Key Concepts
- **Closures**: Functions that remember their lexical scope
- **Private Variables**: Using closures to create private state
`,

  // problem explanation--> 71
  "closure-private-variable": `
### 💡 Problem Breakdown
Closures can be used to create private variables that are inaccessible from outside the function.

### ⚙️ Solution Walkthrough
The inner function has access to variables in the outer function's scope, but they're not accessible from outside.
\`\`\`javascript
function createPerson(name) {
  let privateAge = 0;
  
  return {
    getName: () => name,
    getAge: () => privateAge,
    setAge: (age) => { privateAge = age; },
    celebrateBirthday: () => { privateAge++; }
  };
}

const person = createPerson('Alice');
person.getAge(); // 0
person.setAge(25);
person.celebrateBirthday(); // age becomes 26
\`\`\`
### 📚 Key Concepts
- **Data Encapsulation**: Using closures to hide implementation details
- **Private State**: Creating variables that can only be accessed through specific functions
`,

  // problem explanation--> 72
  "iife-basic": `
### 💡 Problem Breakdown
An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it's defined.

### ⚙️ Solution Walkthrough
IIFEs are created by wrapping a function expression in parentheses and immediately calling it.
\`\`\`javascript
(function() {
  console.log('This runs immediately');
})();

// With parameters
(function(name) {
  console.log('Hello ' + name);
})('Alice');
\`\`\`
### 📚 Key Concepts
- **IIFE**: A function that runs immediately after definition
- **Isolated Scope**: Creating a private scope for variables
`,

  // problem explanation--> 73
  "function-currying": `
### 💡 Problem Breakdown
Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

### ⚙️ Solution Walkthrough
A curried function returns a new function for each argument until all arguments are provided.
\`\`\`javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
multiplyByTwo(5); // 10

// Using arrow functions
const multiply = a => b => a * b;
\`\`\`
### 📚 Key Concepts
- **Currying**: Transforming multi-argument functions into nested single-argument functions
- **Partial Application**: Creating new functions by fixing some arguments
`,

  // problem explanation--> 74
  memoization: `
### 💡 Problem Breakdown
Memoization is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

### ⚙️ Solution Walkthrough
A memoization function wraps another function and caches its results.
\`\`\`javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoizedFibonacci = memoize(fibonacci);
\`\`\`
### 📚 Key Concepts
- **Memoization**: Caching function results to improve performance
- **Cache**: Storing previously computed results for reuse
`,

  // problem explanation--> 75
  "function-composition": `
### 💡 Problem Breakdown
Function composition is the process of combining two or more functions to produce a new function.

### ⚙️ Solution Walkthrough
The composition of functions f and g is a new function that applies f to the result of applying g to an argument.
\`\`\`javascript
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';

const shout = compose(exclaim, toUpperCase);
shout('hello'); // 'HELLO!'
\`\`\`
### 📚 Key Concepts
- **Function Composition**: Combining functions to create new functionality
- **Pipeline**: The sequence of function applications
`,

  // ========== ADVANCED ALGORITHMS ==========

  // problem explanation--> 76
  "binary-search": `
### 💡 Problem Breakdown
Binary search is an efficient algorithm for finding an item from a sorted list of items.

### ⚙️ Solution Walkthrough
The algorithm repeatedly divides the search interval in half until the target value is found.
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
\`\`\`
### 📚 Key Concepts
- **Divide and Conquer**: Breaking down a problem into smaller subproblems
- **Logarithmic Time Complexity**: O(log n) efficiency for sorted arrays
`,

  // problem explanation--> 77
  "bubble-sort": `
### 💡 Problem Breakdown
Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

### ⚙️ Solution Walkthrough
The algorithm makes multiple passes through the array, with each pass pushing the largest unsorted element to its correct position.
\`\`\`javascript
function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}
\`\`\`
### 📚 Key Concepts
- **Sorting Algorithms**: Methods for arranging elements in order
- **Time Complexity**: O(n²) for bubble sort, making it inefficient for large lists
`,

  // problem explanation--> 78
  "selection-sort": `
### 💡 Problem Breakdown
Selection sort is an algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist.

### ⚙️ Solution Walkthrough
The algorithm repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the sorted part.
\`\`\`javascript
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
\`\`\`
### 📚 Key Concepts
- **Selection Sort**: An in-place comparison sorting algorithm
- **Time Complexity**: O(n²), making it inefficient for large lists
`,

  // problem explanation--> 79
  "insertion-sort": `
### 💡 Problem Breakdown
Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.

### ⚙️ Solution Walkthrough
The algorithm iterates through the array and for each element, it finds the correct position in the sorted part and inserts it there.
\`\`\`javascript
function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}
\`\`\`
### 📚 Key Concepts
- **Insertion Sort**: Building a sorted array one element at a time
- **Time Complexity**: O(n²) in worst case, but efficient for small or nearly sorted arrays
`,

  // problem explanation--> 80
  "quick-sort": `
### 💡 Problem Breakdown
Quicksort is a divide-and-conquer algorithm that works by selecting a 'pivot' element and partitioning the array around the pivot.

### ⚙️ Solution Walkthrough
The algorithm recursively sorts elements before and after the pivot.
\`\`\`javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
\`\`\`
### 📚 Key Concepts
- **Quicksort**: A efficient sorting algorithm with average O(n log n) time complexity
- **Pivot Selection**: Choosing an element to partition the array around
`,

  // problem explanation--> 81
  "merge-sort": `
### 💡 Problem Breakdown
Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts them, and then merges the sorted halves.

### ⚙️ Solution Walkthrough
The algorithm recursively divides the array until each subarray has one element, then merges them in sorted order.
\`\`\`javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}
\`\`\`
### 📚 Key Concepts
- **Merge Sort**: A stable sorting algorithm with O(n log n) time complexity
- **Divide and Conquer**: Breaking down the problem into smaller subproblems
`,

  // problem explanation--> 82
  "linked-list-traversal": `
### 💡 Problem Breakdown
A linked list is a linear data structure where each element is a separate object that points to the next one.

### ⚙️ Solution Walkthrough
Linked list traversal involves visiting each node starting from the head until the end of the list.
\`\`\`javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function traverseLinkedList(head) {
  let current = head;
  const values = [];
  
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  
  return values;
}
\`\`\`
### 📚 Key Concepts
- **Linked List**: A data structure consisting of nodes that point to the next node
- **Traversal**: Visiting each node in sequence
`,

  // problem explanation--> 83
  "binary-tree-traversal": `
### 💡 Problem Breakdown
A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.

### ⚙️ Solution Walkthrough
Tree traversal algorithms visit each node in a specific order. In-order traversal visits left subtree, root, then right subtree.
\`\`\`javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(root) {
  const result = [];
  
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }
  
  traverse(root);
  return result;
}
\`\`\`
### 📚 Key Concepts
- **Binary Tree**: A tree data structure with at most two children per node
- **Tree Traversal**: Visiting all nodes in a specific order
`,

  // problem explanation--> 84
  "graph-bfs": `
### 💡 Problem Breakdown
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.

### ⚙️ Solution Walkthrough
BFS explores all nodes at the present depth prior to moving on to nodes at the next depth level.
\`\`\`javascript
function breadthFirstSearch(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  
  return result;
}
\`\`\`
### 📚 Key Concepts
- **Breadth-First Search**: Exploring all nodes at the current depth before moving deeper
- **Queue Data Structure**: Using a queue to manage the order of exploration
`,

  // problem explanation--> 85
  "spiral-matrix-traversal": `
### 💡 Problem Breakdown
The task is to traverse a 2D array (a matrix) in a spiral pattern, starting from the top-left corner and moving inward, collecting all elements into a single array.

### ⚙️ Solution Walkthrough
The solution uses four pointers to keep track of the boundaries of the current layer of the spiral: \`top\`, \`bottom\`, \`left\`, and \`right\`.
1.  **Loop**: The main loop continues as long as \`top <= bottom\` and \`left <= right\`.
2.  **Traverse Top Row**: Loop from \`left\` to \`right\`, adding \`matrix[top][i]\` to the result. Then, increment \`top\`.
3.  **Traverse Right Column**: Loop from \`top\` to \`bottom\`, adding \`matrix[i][right]\`. Then, decrement \`right\`.
4.  **Traverse Bottom Row**: Loop from \`right\` to \`left\` (backwards), adding \`matrix[bottom][i]\`. Then, decrement \`bottom\`.
5.  **Traverse Left Column**: Loop from \`bottom\` to \`top\` (backwards), adding \`matrix[i][left]\`. Then, increment \`left\`.
6.  Repeat this process, and the boundaries will converge towards the center. Add checks to handle non-square matrices where a full loop isn't possible at the end.

### 📚 Key Concepts
- **Matrix Traversal**: A common category of problems involving 2D arrays
- **Boundary Pointers**: Using variables to manage the current state of a traversal
`,
  // problem explanation--> 86
  "run-length-encoding": `
### 💡 Problem Breakdown
Run-length encoding (RLE) is a simple form of data compression. The goal is to replace consecutive sequences of identical characters with the character followed by the count of its occurrences.

### ⚙️ Solution Walkthrough
The solution iterates through the string, keeping track of the current character and its consecutive count.
1. Initialize an empty \`encoded\` string and a \`count\` of 1.
2. Loop through the string from the first character to the end.
3. Compare the character at \`i\` with the character at \`i+1\`.
4. If they are the same, increment the \`count\`.
5. If they are different (or if we're at the end of the string), append the current character and its \`count\` to the \`encoded\` string, and then reset the \`count\` to 1.

### 📚 Key Concepts
- **String Building**: Iteratively constructing a new string.
- **Lookahead**: The logic relies on looking ahead one character (\`str[i+1]\`) to see if the run of consecutive characters has ended.
`,

  // problem explanation--> 87
  "run-length-decoding": `
### 💡 Problem Breakdown
This is the reverse of run-length encoding. The input string is in a compressed format like 'A3B2C1', and the task is to expand it back to its original form, 'AAABBC'.

### ⚙️ Solution Walkthrough
A simple approach is to iterate through the encoded string, assuming the pattern is always a character followed by a digit.
1. Loop through the encoded string, stepping by 2 each time.
2. In each iteration, the character is at index \`i\` and the count (as a string) is at \`i+1\`.
3. Convert the count to a number.
4. Use the \`.repeat()\` string method to append the character the correct number of times to the result.

A more robust solution would use a regular expression (\`/([A-Za-z])(\\d+)/g\`) to find all character-digit pairs, which handles multi-digit counts.

### 📚 Key Concepts
- **String Parsing**: Reading a string and extracting structured information from it.
- **\`String.prototype.repeat()\`**: A convenient method for repeating a string.
`,

  // problem explanation--> 88
  "sieve-of-eratosthenes": `
### 💡 Problem Breakdown
The Sieve of Eratosthenes is a highly efficient ancient algorithm for finding all prime numbers up to a specified integer.

### ⚙️ Solution Walkthrough
1. **Initialization**: Create a boolean array, \`isPrime\`, of size \`n+1\`, and initialize all entries to \`true\`. Mark \`0\` and \`1\` as not prime.
2. **Sieving**: Start with the first prime number, \`p = 2\`.
3. **Marking Multiples**: If \`p\` is still marked as prime, iterate through all of its multiples (starting from \`p*p\`) and mark them as *not* prime.
4. **Next Number**: Move to the next number, \`p++\`, and repeat step 3. Continue this process until \`p*p\` is greater than \`n\`.
5. **Result**: All indices \`i\` where \`isPrime[i]\` is still \`true\` are prime numbers.

### 📚 Key Concepts
- **Sieve Algorithm**: An algorithm that works by progressively eliminating candidates.
- **Optimization**: We only need to check up to the square root of \`n\`, and we can start marking multiples from \`p*p\`.
`,

  // problem explanation--> 89
  "two-sum-problem": `
### 💡 Problem Breakdown
This is a classic and very common interview question. Given an array of integers, find two numbers that add up to a specific target.

### ⚙️ Solution Walkthrough
A brute-force solution would use nested loops, which is O(n^2). A much more efficient O(n) solution uses a hash map (\`Map\` or plain object).
1. Initialize an empty map.
2. Loop through the input array.
3. For each number \`num\`, calculate its \`complement\` (\`target - num\`).
4. Check if the \`complement\` already exists as a key in the map.
   - If it does, you have found the pair. Return the index stored in the map and the current index.
   - If it doesn't, store the current number and its index in the map: \`map.set(num, i)\`.
5. If the loop finishes, no solution was found.

### 📚 Key Concepts
- **Hash Map**: The key to the efficient solution. It provides O(1) average time complexity for lookups, allowing you to instantly check if you've already seen the complement of the current number.
`,

  // problem explanation--> 90
  "three-sum-problem-loop": `
### 💡 Problem Breakdown
This is a more complex version of the Two Sum problem. Given an array of integers, find all unique combinations of three elements (\`triplets\`) that sum up to zero.

### ⚙️ Solution Walkthrough
The most common efficient solution involves sorting the array and then using the "two-pointer" technique.
1.  **Sort the array**: This is crucial for the two-pointer approach and for handling duplicates.
2.  **Iterate through the array**: Use a \`for\` loop. The current element \`nums[i]\` will be the first number in a potential triplet.
3.  **Two-Pointer Search**: For each \`nums[i]\`, set up two pointers, \`left\` (at \`i + 1\`) and \`right\` (at the end of the array).
4.  **Check Sum**: Calculate \`sum = nums[i] + nums[left] + nums[right]\`.
    - If \`sum\` is 0, you've found a triplet. Add it to your results. Move both pointers inward and add logic to skip any duplicate numbers to avoid duplicate triplets.
    - If \`sum\` is less than 0, move the \`left\` pointer to the right to increase the sum.
    - If \`sum\` is greater than 0, move the \`right\` pointer to the left to decrease the sum.
5.  **Skip Duplicates**: Add logic to skip duplicate values for the initial \`i\` as well.

### 📚 Key Concepts
- **Two-Pointer Technique**: A common algorithmic pattern for searching for pairs in a sorted array.
- **Sorting**: Sorting the input array first is a key step that enables the efficient two-pointer search.
`,

  // problem explanation--> 91
  "valid-sudoku-board": `
### 💡 Problem Breakdown
The task is to validate a (potentially partially filled) Sudoku board. This means checking three conditions:
1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.

### ⚙️ Solution Walkthrough
The solution involves iterating through the board and using \`Set\`s to efficiently track seen numbers for each row, column, and sub-box.
1. **Initialization**: Create arrays of \`Set\`s for rows, columns, and boxes.
2. **Single Pass**: Use a single pair of nested loops to iterate through every cell of the board.
3. **For each cell \`(r, c)\`**:
   - If the cell is not empty:
     - Get the number.
     - Calculate the index of the 3x3 box it belongs to (e.g., \`boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)\`).
     - Check if the number is already in the \`Set\` for the current row, column, or box. If it is, the board is invalid, so return \`false\`.
     - If not, add the number to all three corresponding \`Set\`s.
4. If the loops complete without finding any duplicates, the board is valid.

### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for efficiently checking for duplicates.
- **Matrix Traversal**: Using nested loops to visit every cell.
`,

  // problem explanation--> 92
  "insertion-sort-loop": `
### 💡 Problem Breakdown
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's much less efficient on large lists than more advanced algorithms like quicksort or merge sort, but it can be efficient for small lists or lists that are already mostly sorted.

### ⚙️ Solution Walkthrough
The algorithm iterates through the input array and "grows" a sorted sub-array.
1. **Outer Loop**: Iterate from the second element (\`i = 1\`) to the end of the array. The element \`arr[i]\` is the one we want to "insert" into the sorted part of the array.
2. **Inner \`while\` Loop**: Take the current element \`current = arr[i]\`. Compare it with the elements to its left. As long as you find an element to the left that is greater than \`current\`, shift that element one position to the right.
3. **Insertion**: Once the inner loop finishes, you've found the correct spot for \`current\`. Insert it there.

### 📚 Key Concepts
- **In-place Sorting**: The algorithm sorts the array directly without needing a separate result array.
`,

  // problem explanation--> 93
  "merge-two-sorted-arrays-loop": `
### 💡 Problem Breakdown
This is a classic problem. Given two already sorted arrays, the task is to merge them into a single sorted array. The key is to do this efficiently in a single pass without just concatenating and re-sorting.

### ⚙️ Solution Walkthrough
The "two-pointer" technique is used.
1. Initialize an empty \`merged\` array.
2. Initialize two pointers, \`i\` for \`arr1\` and \`j\` for \`arr2\`, both at index 0.
3. **\`while\` loop**: Continue as long as there are still elements in *both* arrays.
   - Compare \`arr1[i]\` and \`arr2[j]\`.
   - Push the smaller of the two elements into the \`merged\` array.
   - Increment the pointer for the array from which the element was taken.
4. **Append Remainder**: After the loop, one of the arrays may still have elements left. Append the rest of that array to the \`merged\` array.

### 📚 Key Concepts
- **Two-Pointer Technique**: The core of the efficient merge logic.
- **Time Complexity**: This algorithm runs in O(n + m) time, where n and m are the lengths of the arrays, which is very efficient.
`,

  // problem explanation--> 94
  "roman-to-integer-loop": `
### 💡 Problem Breakdown
The task is to convert a Roman numeral string (e.g., "IX") into its integer equivalent (9). The key challenge is handling the subtractive notation, where a smaller numeral placed before a larger one means subtraction (e.g., IV = 4, IX = 9).

### ⚙️ Solution Walkthrough
An efficient approach is to iterate through the string. If the current numeral's value is less than the next one's, we subtract it from the total. Otherwise, we add it.
1.  Create a map of Roman numerals to their integer values.
2.  Loop through the string.
3.  For each character, get its value (\`current\`) and the value of the next character (\`next\`).
4.  If \`next\` exists and is greater than \`current\`, subtract \`current\` from the running total.
5.  Otherwise, add \`current\` to the total.

### 📚 Key Concepts
- **Lookahead**: The logic depends on looking ahead one character to decide whether to add or subtract.
`,

  // problem explanation--> 95
  "integer-to-roman-loop": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting an integer to a Roman numeral.

### ⚙️ Solution Walkthrough
A greedy approach works best.
1.  Create a lookup table (an array of \`[value, numeral]\` pairs) sorted from largest value to smallest. It's important to include the subtractive cases (like \`[900, "CM"]\`, \`[400, "CD"]\`, etc.).
2.  Iterate through this lookup table.
3.  For each \`[value, numeral]\` pair, use a \`while\` loop to see how many times that numeral can be "subtracted" from the input number.
4.  For each subtraction, append the corresponding numeral to the result string.
5.  Continue until the input number becomes 0.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we make the locally optimal choice by subtracting the largest possible Roman numeral value.
`,

  // problem explanation--> 96
  "find-peak-element-loop": `
### 💡 Problem Breakdown
A "peak" element is one that is greater than its immediate neighbors. The task is to find any one peak element in an array and return its index. The problem guarantees that \`nums[i] != nums[i+1]\`.

### ⚙️ Solution Walkthrough
Because we only need to find *any* peak, we can use a modified binary search for a very efficient O(log n) solution.
1.  Use \`left\` and \`right\` pointers for a binary search.
2.  In each step, look at the middle element \`mid\`.
3.  Compare \`nums[mid]\` with its right neighbor \`nums[mid+1]\`.
    - If \`nums[mid] > nums[mid+1]\`, it means a peak must exist on the left side (including \`mid\` itself), so we can discard the right half by setting \`right = mid\`.
    - If \`nums[mid] < nums[mid+1]\`, it means the element to the right is on an "uphill" slope, so a peak must exist on the right side. We can discard the left half by setting \`left = mid + 1\`.
4.  The loop terminates when \`left === right\`, and that index will be a peak.

### 📚 Key Concepts
- **Binary Search**: The core algorithm, adapted for finding a peak instead of a specific value.
`,

  // problem explanation--> 97
  "rotate-matrix-loop": `
### 💡 Problem Breakdown
The goal is to rotate an N x N matrix by 90 degrees clockwise, *in-place* (without creating a new matrix).

### ⚙️ Solution Walkthrough
This can be achieved in a clever two-step process using nested loops:
1.  **Transpose the Matrix**: A transpose operation swaps the rows and columns. You can do this by swapping \`matrix[i][j]\` with \`matrix[j][i]\` for the upper triangle of the matrix (where \`j > i\`).
2.  **Reverse Each Row**: After transposing, simply use a loop for each row to reverse its elements.

This sequence of operations results in a 90-degree clockwise rotation.

### 📚 Key Concepts
- **Matrix Manipulation**: In-place algorithms that modify the data structure directly to save space.
- **Transpose**: A matrix operation where rows become columns and columns become rows.
`,

  // problem explanation--> 98
  "product-of-array-except-self-loop": `
### 💡 Problem Breakdown
Given an array, the task is to create a new array where each element at index \`i\` is the product of all other numbers in the original array except \`nums[i]\`. A key constraint is often to solve this in O(n) time and without using the division operator.

### ⚙️ Solution Walkthrough
A two-pass approach using loops is very efficient.
1.  **First Pass (Prefix Products)**: Create a \`result\` array. Iterate through the input array from left to right. For each index \`i\`, \`result[i]\` will store the product of all elements to the *left* of \`i\`.
2.  **Second Pass (Postfix Products)**: Iterate through the input array from right to left. Maintain a \`postfix\` product variable. For each index \`i\`, multiply the current \`result[i]\` (which holds the prefix product) by the \`postfix\` product. Then, update the \`postfix\` variable.

After these two passes, \`result[i]\` will contain the product of everything to its left and everything to its right.

### 📚 Key Concepts
- **Prefix/Postfix Sums (or Products)**: A common algorithmic pattern where you pre-calculate running totals from the start and end of an array to answer queries efficiently.
`,

  // problem explanation--> 99
  "valid-parentheses-stack-loop": `
### 💡 Problem Breakdown
The task is to determine if a string of brackets is "valid." A string is valid if:
1.  Open brackets are closed by the same type of bracket.
2.  Open brackets are closed in the correct order.

### ⚙️ Solution Walkthrough
This is a perfect use case for a **Stack** data structure, implemented with an array and a \`for\` loop.
1.  Create a map of opening to closing brackets: \`{'(': ')', ...}\`.
2.  Iterate through the input string.
3.  If you see an **opening** bracket, push it onto the stack.
4.  If you see a **closing** bracket:
    - Pop the last opening bracket from the stack.
    - Check if the current closing bracket is the correct match for the one you just popped.
    - If it's not a match, or if the stack was empty, the string is invalid.
5.  After the loop, if the stack is **empty**, the string is valid. If it's not empty, it means there are unclosed opening brackets.

### 📚 Key Concepts
- **Stack**: A Last-In, First-Out (LIFO) data structure, ideal for problems that involve matching pairs or nested structures.
`,

  // problem explanation--> 100
  "container-with-most-water-loop": `
### 💡 Problem Breakdown
This is a popular interview question. You're given an array of heights representing vertical lines. You need to find two lines that, along with the x-axis, form a container that can hold the most water. The area is determined by \`width * min(height1, height2)\`.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique with a \`while\` loop.
1.  **Initialize**: Set a \`left\` pointer at the beginning of the array and a \`right\` pointer at the end. Initialize \`maxArea\` to 0.
2.  **Loop**: While \`left\` is less than \`right\`:
    - Calculate the current area: \`width = right - left\`, \`height = Math.min(heights[left], heights[right])\`, \`area = width * height\`.
    - Update \`maxArea\` if the current area is larger.
    - **Move Pointer**: This is the key insight. To have a chance at a larger area, you must move the pointer corresponding to the *shorter* of the two lines. Moving the taller line's pointer can't possibly increase the height and will definitely decrease the width.

### 📚 Key Concepts
- **Two-Pointer Technique**: An efficient pattern for searching or calculating values in an array by moving pointers from the outside in.
`,

  // problem explanation--> 101
  "trapping-rain-water-loop": `
### 💡 Problem Breakdown
This is a challenging but classic interview problem. Given an array of heights representing an elevation map, you need to calculate the total volume of rainwater that can be trapped between the bars after a rainfall. The amount of water above any bar is limited by the height of the shortest of the two tallest walls to its left and right.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1.  **Initialize**: Set a \`left\` pointer at the beginning and a \`right\` pointer at the end. Initialize \`leftMax\` and \`rightMax\` heights to 0. These will track the tallest bar seen so far from each side.
2.  **Loop**: Use a \`while\` loop that continues as long as \`left < right\`.
3.  **Compare Walls**: In each iteration, compare the wall at \`heights[left]\` with the wall at \`heights[right]\`.
4.  **Process Shorter Wall**:
    - If \`heights[left]\` is shorter, the water level at this position is determined by \`leftMax\`. Update \`leftMax\` if the current wall is taller. The water trapped is \`leftMax - heights[left]\`. Add this to the total. Move the \`left\` pointer inward.
    - Otherwise, do the symmetric operations for the right side: update \`rightMax\`, calculate trapped water (\`rightMax - heights[right]\`), and move the \`right\` pointer inward.
5.  Return the total water after the loop finishes.

### 📚 Key Concepts
- **Two-Pointer Technique**: The key insight is that the water level at any point is limited by the shorter of the maximum walls to its left and right. The two-pointer approach efficiently tracks these maximums as it moves inward.
- **Time Complexity**: This approach avoids nested loops, achieving a linear O(n) time complexity.
`,

  // problem explanation--> 102
  "longest-common-prefix-loop": `
### 💡 Problem Breakdown
The task is to find the longest string that is a prefix (starting part) of every string in an array of strings.

### ⚙️ Solution Walkthrough
A simple and effective approach is "vertical scanning."
1.  If the array is empty, return "".
2.  Iterate through the characters of the *first* string in the array (using an index \`i\`).
3.  For each character \`char\` at index \`i\`, loop through *all the other strings* in the array.
4.  Check if the character at index \`i\` in the other strings is the same as \`char\`.
5.  If a mismatch is found, or if one of the other strings is shorter than index \`i\`, it means the common prefix ends at the previous character. Return the substring of the first string up to that point.
6.  If the outer loop completes, the entire first string is the common prefix.

### 📚 Key Concepts
- **Prefix**: A sequence of characters at the beginning of a string.
- **Nested Loops**: Used to compare characters at the same position across all strings in the array.
`,

  // problem explanation--> 103
  "valid-palindrome-two-pointers": `
### 💡 Problem Breakdown
A palindrome is a word or phrase that reads the same backward as forward. The task is to check if a string is a palindrome, but only considering alphanumeric characters and ignoring case.

### ⚙️ Solution Walkthrough
The "two-pointer" technique is very efficient for this.
1.  **Clean the String**: First, convert the string to a standard format (e.g., lowercase) and remove all non-alphanumeric characters.
2.  **Initialize Pointers**: Set a \`left\` pointer at the beginning of the cleaned string (index 0) and a \`right\` pointer at the end.
3.  **Loop and Compare**: Use a \`while\` loop that continues as long as \`left < right\`.
    - In each iteration, compare the characters at the \`left\` and \`right\` pointers.
    - If they are not the same, the string is not a palindrome, so return \`false\`.
    - If they are the same, move the pointers closer to the center: increment \`left\` and decrement \`right\`.
4.  If the loop completes without finding any mismatches, the string is a palindrome. Return \`true\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: An efficient pattern for processing a sequence from both ends simultaneously.
- **String Normalization**: Cleaning the string is a crucial first step.
`,

  // problem explanation--> 104
  "move-zeroes-loop": `
### 💡 Problem Breakdown
The task is to modify an array in-place by moving all the zero elements to the end, while preserving the relative order of the non-zero elements.

### ⚙️ Solution Walkthrough
An efficient solution uses a single loop and a "write pointer" to place non-zero elements.
1.  Initialize a \`writeIndex = 0\`. This pointer keeps track of the position where the next non-zero element should be placed.
2.  Iterate through the array with a \`readIndex\` (the normal loop counter).
3.  If the element at \`readIndex\` is **not** zero:
    - Place it at the \`writeIndex\` position.
    - Increment \`writeIndex\`.
4.  After this loop finishes, all non-zero elements have been moved to the front of the array in their original relative order.
5.  Now, use a second loop to fill the rest of the array (from \`writeIndex\` to the end) with zeroes.

### 📚 Key Concepts
- **In-place Algorithm**: An algorithm that transforms the input data without using significant extra space.
- **Two-Pointer Technique**: The \`readIndex\` and \`writeIndex\` act as two pointers to manage the rearrangement.
`,

  // problem explanation--> 105
  "find-all-duplicates-loop": `
### 💡 Problem Breakdown
You are given an array where the numbers are in the range \`[1, n]\` (where \`n\` is the size of the array). The task is to find all numbers that appear twice. This can be solved cleverly in O(n) time and without using extra space.

### ⚙️ Solution Walkthrough
The solution uses the array itself as a hash map by manipulating the signs of the numbers.
1.  Iterate through the array.
2.  For each number \`num\`, consider the index it corresponds to: \`index = Math.abs(num) - 1\`.
3.  Go to the element at that index, \`nums[index]\`.
4.  If the element at \`nums[index]\` is already negative, it means we have seen the number \`Math.abs(num)\` before. Add it to our duplicates list.
5.  If it's positive, "mark" it as seen by negating it: \`nums[index] = -nums[index]\`.

This works because we use the sign of the number at an index to store the "seen" state for the number corresponding to that index.

### 📚 Key Concepts
- **In-place Hashing**: Using the input array's indices and the sign of its values to store information, saving space.
`,

  // problem explanation--> 106
  "majority-element-loop": `
### 💡 Problem Breakdown
The majority element in an array is the element that appears more than \`n/2\` times. The task is to find this element efficiently.

### ⚙️ Solution Walkthrough
The Boyer-Moore Voting Algorithm provides an elegant and efficient O(n) time and O(1) space solution using a single loop.
1.  Initialize a \`candidate\` variable (e.g., to the first element) and a \`count\` to 0.
2.  Iterate through the array.
3.  If \`count\` is 0, set the \`candidate\` to the current number.
4.  If the current number is the same as the \`candidate\`, increment \`count\`.
5.  If it's different, decrement \`count\`.
6.  The \`candidate\` remaining at the end of the loop will be the majority element. This works because the count of the majority element will always outweigh the combined counts of all other elements, ensuring it remains the candidate at the end.

### 📚 Key Concepts
- **Boyer-Moore Voting Algorithm**: A clever algorithm for finding majority elements.
- **Time Complexity**: Achieves O(n) time complexity with a single pass through the array.
`,

  // problem explanation--> 107
  "pascals-triangle-ii": `
### 💡 Problem Breakdown
The task is to generate a specific row (rowIndex) of Pascal's Triangle without necessarily generating all the rows before it.

### ⚙️ Solution Walkthrough
We can build the row iteratively. Each element in a row of Pascal's Triangle can be calculated from the previous element in the same row using a mathematical formula based on combinations: \`C(n, k) = C(n, k-1) * (n - k + 1) / k\`.
1. Initialize a \`row\` array with the first element, \`[1]\`.
2. Loop from \`k = 1\` up to the \`rowIndex\`.
3. In each iteration, calculate the next element in the row using the formula and the previously calculated element \`row[k-1]\`.
4. Push the new element into the \`row\` array.
5. Return the completed \`row\`.

### 📚 Key Concepts
- **Binomial Coefficients**: The numbers in Pascal's Triangle are binomial coefficients. The formula used is an efficient way to calculate them iteratively.
`,

  // problem explanation--> 108
  "missing-ranges": `
### 💡 Problem Breakdown
Given a sorted array of unique integers and a range \`[lower, upper]\`, the task is to find all the ranges of numbers that are missing from the array within that overall range.

### ⚙️ Solution Walkthrough
The solution involves iterating through the numbers and keeping track of the previous number seen to identify gaps.
1. Initialize a \`prev\` variable to \`lower - 1\`.
2. Loop through the given \`nums\` array, including a conceptual element at the end equal to \`upper + 1\` to handle the final range.
3. For each number \`curr\` in the loop:
   - If \`curr\` is greater than \`prev + 1\`, it means there is a missing range between \`prev + 1\` and \`curr - 1\`. Add this formatted range to the result list.
   - Update \`prev = curr\`.
4. Return the list of ranges.

### 📚 Key Concepts
- **Gap Analysis**: An iterative approach to find missing elements or ranges in a sorted sequence.
`,

  // problem explanation--> 109
  "summary-ranges": `
### 💡 Problem Breakdown
Given a sorted unique integer array, the task is to summarize the consecutive ranges. For example, \`[0, 1, 2, 4, 5, 7]\` should be summarized as \`["0->2", "4->5", "7"]\`.

### ⚙️ Solution Walkthrough
An iterative approach with a \`for\` loop is effective.
1. Iterate through the array. For each number, treat it as the potential \`start\` of a new range.
2. Use an inner \`while\` loop to check the next element to find the end of the consecutive sequence. Keep advancing as long as \`nums[i+1] === nums[i] + 1\`.
3. Once the consecutive sequence breaks, you have found the \`end\` of the range.
4. Format the range: if \`start === end\`, add \`start\` to the results; otherwise, add \`start->end\`.
5. The outer loop continues from the position after the end of the range you just found.

### 📚 Key Concepts
- **Sequence Detection**: A common pattern for finding consecutive runs of data in a sorted array.
`,

  // problem explanation--> 110
  "isomorphic-strings": `
### 💡 Problem Breakdown
Two strings are "isomorphic" if there's a one-to-one mapping between their characters. For example, "egg" and "add" are isomorphic because \`e -> a\` and \`g -> d\`. However, "foo" and "bar" are not, because \`o\` would have to map to both \`a\` and \`r\`. "badc" and "baba" are not, because \`d\` and \`b\` would both map to \`a\`.

### ⚙️ Solution Walkthrough
The key is to ensure a consistent, bijective (two-way) mapping. This can be checked using two maps.
1. Initialize two maps: \`s_to_t\` and \`t_to_s\`.
2. Loop through the strings by index \`i\`.
3. For each pair of characters \`s[i]\` and \`t[i]\`:
   - Check the forward mapping: If \`s[i]\` is already in \`s_to_t\` but maps to something different than \`t[i]\`, return \`false\`.
   - Check the backward mapping: If \`t[i]\` is already in \`t_to_s\` but maps to something different than \`s[i]\`, return \`false\`.
   - If the mappings are consistent (or new), update both maps.
4. If the loop completes, the strings are isomorphic.

### 📚 Key Concepts
- **Bijective Mapping**: A one-to-one and onto mapping, where each element in one set is paired with exactly one element in another set, and vice versa.
- **Hash Maps (\`Map\`)**: The ideal data structure for storing and checking the character mappings.
`,

  // problem explanation--> 111
  "word-pattern": `
### 💡 Problem Breakdown
This problem is very similar to "Isomorphic Strings," but the mapping is between the characters of a \`pattern\` string and the words of a sentence.

### ⚙️ Solution Walkthrough
The logic is nearly identical to the isomorphic strings problem, using two maps.
1. Split the sentence \`s\` into an array of \`words\`. Check if the length of the \`pattern\` and the \`words\` array are equal. If not, return \`false\`.
2. Initialize two maps: \`pattern_to_word\` and \`word_to_pattern\`.
3. Loop by index \`i\`.
4. For each pair of character \`pattern[i]\` and \`words[i]\`:
   - Check for mapping inconsistencies in both directions using the two maps. If an inconsistency is found, return \`false\`.
   - Update both maps.
5. If the loop completes, the pattern is followed.

### 📚 Key Concepts
- **Bijective Mapping**: The core requirement for the pattern to be valid.
`,

  // problem explanation--> 112
  "happy-number": `
### 💡 Problem Breakdown
A "happy number" is determined by a process: repeatedly sum the squares of a number's digits. If this process reaches 1, the number is happy. If it enters a cycle without reaching 1, it's not happy. The task is to determine if a number is happy.

### ⚙️ Solution Walkthrough
The key to solving this is detecting if we've entered a cycle. A \`Set\` can be used to keep track of the numbers we've already seen in the sequence.
1. Initialize a \`Set\` called \`seen\`.
2. Use a \`while\` loop that continues as long as the number \`n\` is not 1 and has not been seen before.
3. Inside the loop:
   - Add the current \`n\` to the \`seen\` set.
   - Calculate the sum of the squares of its digits and assign this new sum back to \`n\`.
4. After the loop, check why it terminated. If \`n === 1\`, the number is happy. Otherwise, it must have terminated because a cycle was detected.

### 📚 Key Concepts
- **Cycle Detection**: A common algorithmic problem. Using a \`Set\` or hash map to store previously visited states is a standard technique.
`,

  // problem explanation--> 113
  "contains-duplicate": `
### 💡 Problem Breakdown
The task is to check if an array contains any duplicate values.

### ⚙️ Solution Walkthrough
The most concise and efficient way to solve this is by using a \`Set\`. A \`Set\` only stores unique values.
1. Create a new \`Set\` from the input array. The \`Set\` constructor will automatically handle the removal of duplicates.
2. Compare the \`.size\` of the resulting \`Set\` with the original array's \`.length\`.
3. If the size is less than the length, it means some elements were discarded, so duplicates must have existed. Return \`true\`.
4. Otherwise, return \`false\`.
\`\`\`javascript
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
\`\`\`
### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for problems involving uniqueness.
`,

  // problem explanation--> 114
  "contains-duplicate-ii": `
### 💡 Problem Breakdown
This is a variation of the duplicate problem. Here, we need to find if there are duplicate numbers where their indices are at most \`k\` positions apart.

### ⚙️ Solution Walkthrough
A \`Map\` can be used to store the most recently seen index of each number.
1. Initialize an empty \`Map\`.
2. Loop through the array with index \`i\`.
3. For each number \`nums[i]\`:
   - Check if the number is already in the map.
   - If it is, calculate the distance between the current index \`i\` and the stored index \`map.get(nums[i])\`.
   - If this distance is less than or equal to \`k\`, a valid pair has been found, so return \`true\`.
   - If not a valid pair, or if the number is new, update the map with the current number and its index: \`map.set(nums[i], i)\`.
4. If the loop completes, no such pair was found.

### 📚 Key Concepts
- **Hash Map (\`Map\`)**: Used to efficiently store and retrieve the last seen index of each number.
`,

  // problem explanation--> 115
  "valid-anagram": `
### 💡 Problem Breakdown
An anagram is a word formed by rearranging the letters of another. The task is to check if two strings are anagrams. If they are, they must contain the exact same characters with the exact same frequencies.

### ⚙️ Solution Walkthrough
The simplest approach is to sort the strings. If they are anagrams, their sorted versions will be identical.
\`\`\`javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
  return sSorted === tSorted;
}
\`\`\`
Another common solution is to use a frequency map (an object or \`Map\`) to count the characters in the first string, and then loop through the second string, decrementing the counts.

### 📚 Key Concepts
- **Sorting**: A simple way to create a canonical representation of the strings for comparison.
- **Frequency Counting**: An alternative approach that can be more efficient for very large alphabets.
`,

  // problem explanation--> 116
  "add-digits": `
### 💡 Problem Breakdown
The task is to repeatedly sum the digits of a number until a single-digit result is obtained. This is also known as finding the "digital root".

### ⚙️ Solution Walkthrough
An outer \`while\` loop can be used to check if the number is still greater than 9. An inner \`while\` loop can be used to calculate the sum of the digits.
\`\`\`javascript
function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum; // Prepare for the next iteration
  }
  return num;
}
\`\`\`
There's also a mathematical trick for this: for a positive integer, the digital root is \`1 + (num - 1) % 9\`.

### 📚 Key Concepts
- **Digital Root**: The single-digit value obtained by an iterative process of summing digits.
- **Nested Loops**: The iterative solution uses nested loops to handle the repeated summing process.
`,

  // problem explanation--> 117
  "ugly-number": `
### 💡 Problem Breakdown
An "ugly number" is a positive integer whose prime factors are limited to 2, 3, and 5. The task is to check if a given number is ugly.

### ⚙️ Solution Walkthrough
The solution is to repeatedly divide the number by 2, 3, and 5 as long as it's evenly divisible. If the number that remains at the end is 1, then its only prime factors could have been 2, 3, and 5.
1. Handle the edge case: numbers less than or equal to 0 are not ugly.
2. Use a loop (or separate loops) for each prime factor (2, 3, 5).
3. Inside each loop, as long as \`n\` is divisible by the factor, divide \`n\` by it.
4. After all divisions, check if the final \`n\` is equal to 1.

### 📚 Key Concepts
- **Prime Factorization**: The core mathematical concept behind the problem.
`,

  // problem explanation--> 118
  "first-unique-character": `
### 💡 Problem Breakdown
The goal is to find the very first character in a string that does not repeat anywhere else in the string and return its index.

### ⚙️ Solution Walkthrough
A two-pass approach using a hash map is efficient and easy to understand.
1.  **First Pass (Build Frequency Map)**: Use a \`for\` loop to iterate through the string once and build a map (a plain object or \`Map\`) that stores the frequency count of each character.
2.  **Second Pass (Find First Unique)**: Use a second \`for\` loop to iterate through the string again. For each character, look up its count in the map. The first character you find with a count of 1 is your answer. Return its index.
3.  If the second loop completes without finding a character with a count of 1, it means there are no unique characters, so return -1.

### 📚 Key Concepts
- **Hash Map**: The core data structure used to efficiently store and retrieve character counts.
`,

  // problem explanation--> 119
  "find-the-difference": `
### 💡 Problem Breakdown
You are given two strings, \`s\` and \`t\`, where \`t\` is a shuffled version of \`s\` with one extra character added. The task is to find that extra character.

### ⚙️ Solution Walkthrough
A simple and effective solution is to use character codes.
1. Initialize a \`code\` variable to the character code of the last character of \`t\` (which could be the extra one).
2. Loop through the shorter string \`s\`. In each iteration, subtract the character code of \`s[i]\` and add the character code of \`t[i]\`.
3. After the loop, all the matching characters will have cancelled each other out, leaving only the code of the single extra letter. Convert it back to a character and return.

A bitwise XOR approach is also very elegant and efficient.

### 📚 Key Concepts
- **Character Codes**: Using the numeric representation of characters to solve a problem with simple arithmetic.
`,

  // problem explanation--> 120
  "ransom-note": `
### 💡 Problem Breakdown
The task is to determine if a \`ransomNote\` string can be constructed using the letters from a \`magazine\` string. Each letter from the magazine can only be used once.

### ⚙️ Solution Walkthrough
A frequency map is the ideal data structure for this.
1. **Build Frequency Map**: Create a map of character counts for all the letters available in the \`magazine\`.
2. **Check Ransom Note**: Iterate through the \`ransomNote\` string.
3. For each character in the note:
   - Check if the character exists in the map and has a count greater than 0.
   - If not, it's impossible to construct the note, so return \`false\`.
   - If it is available, decrement its count in the map to "use it up".
4. If the loop completes, it means all characters were available. Return \`true\`.

### 📚 Key Concepts
- **Frequency Counting**: A common pattern for problems involving character availability or counts.
`,

  // problem explanation--> 121
  "keyboard-row": `
### 💡 Problem Breakdown
The goal is to filter an array of words, keeping only those that can be typed using letters from a single row of a standard American keyboard.

### ⚙️ Solution Walkthrough
1. **Setup**: Create three \`Set\`s, one for the characters of each keyboard row. \`Set\`s provide fast \`has()\` lookups.
2. **Iterate Words**: Loop through each word in the input array.
3. **Check Each Word**: For each word, determine which of the three row \`Set\`s contains its first letter.
4. **Validate**: Once the potential row is identified, iterate through the rest of the characters in the word. If any character is *not* in that same row \`Set\`, the word is invalid.
5. **Collect**: If all characters of a word belong to the same row, add it to the result array.

### 📚 Key Concepts
- **\`Set\`**: Used for efficient character lookups.
- **Nested Loops**: The solution involves iterating through words and then iterating through the characters of each word.
`,

  // problem explanation--> 122
  "longest-harmonious-subsequence": `
### 💡 Problem Breakdown
A "harmonious subsequence" is a subsequence where the difference between the maximum and minimum value is exactly 1. The task is to find the length of the longest such subsequence.

### ⚙️ Solution Walkthrough
This problem can be solved efficiently using a frequency map.
1. **Build Frequency Map**: Create a \`Map\` to store the frequency of each number in the input array.
2. **Iterate Map**: Loop through the entries of the map.
3. **Check for Harmony**: For each number \`num\` and its \`count\` in the map, check if \`num + 1\` also exists as a key in the map.
4. **Calculate Length**: If \`num + 1\` exists, the length of the harmonious subsequence formed by these two numbers is \`count + map.get(num + 1)\`.
5. **Find Maximum**: Keep track of the maximum length found during the iteration.

### 📚 Key Concepts
- **Frequency Counting**: The core of the solution is to efficiently count the occurrences of each number.
- **Subsequence**: Unlike a subarray, a subsequence does not have to be contiguous.
`,

  // problem explanation--> 123
  "set-mismatch": `
### 💡 Problem Breakdown
You are given an array that should contain all numbers from 1 to \`n\`, but one number is duplicated and one is missing. The task is to find both the duplicated and the missing number.

### ⚙️ Solution Walkthrough
There are several ways to solve this. A straightforward approach uses a \`Set\`.
1. Initialize a \`Set\` to track seen numbers, a \`duplicate\` variable, and a \`sum\` of the input array.
2. Loop through the input array.
   - If the current number is already in the \`seen\` set, it's the \`duplicate\`.
   - Add the number to the set and to the running \`sum\`.
3. **Find Missing**: Calculate the expected sum of numbers from 1 to \`n\` using Gauss's formula: \`expectedSum = n * (n + 1) / 2\`.
4. The sum of the numbers that *should* have been in the array is \`expectedSum - missing\`.
5. The sum of the numbers we actually *have* is \`sum - duplicate\`.
6. Therefore, \`missing = expectedSum - (sum - duplicate)\`.

### 📚 Key Concepts
- **Set for Duplicates**: A \`Set\` is used to easily find the duplicated number.
- **Summation Formula**: Gauss's formula is used to efficiently find the missing number.
`,

  // problem explanation--> 124
  "shortest-completing-word": `
### 💡 Problem Breakdown
A "completing word" is a word from a dictionary that contains all the letters from a given \`licensePlate\` (case-insensitively). The task is to find the shortest such word.

### ⚙️ Solution Walkthrough
1. **Create License Plate Map**: First, create a frequency map of the letters in the \`licensePlate\`. Convert letters to lowercase and ignore any numbers or spaces.
2. **Iterate Through Words**: Loop through each \`word\` in the dictionary.
3. **Check Each Word**: For each \`word\`:
   - Create a frequency map for its letters.
   - Check if this word is a "completing word." It is if, for every letter and its required \`count\` in the license plate map, the word's map has at least that \`count\`.
4. **Find Shortest**: If a word is a completing word, compare its length to the shortest one found so far. If it's shorter, it becomes the new candidate for the result.

### 📚 Key Concepts
- **Frequency Counting**: The core of the solution is to compare character frequencies.
`,

  // problem explanation--> 125
  "goat-latin": `
### 💡 Problem Breakdown
This is a string manipulation problem with a set of specific rules for transforming a sentence into "Goat Latin."

### ⚙️ Solution Walkthrough
1. **Split**: Split the sentence into an array of words.
2. **Map**: Use the \`.map()\` array method to transform each word based on its index.
3. **Transformation Logic**: Inside the map's callback:
   - Check if the word starts with a vowel.
   - If yes, append "ma".
   - If no (it starts with a consonant), move the first letter to the end and then append "ma".
   - Append a number of 'a's equal to the word's index + 1.
4. **Join**: Join the transformed words back into a single sentence string.

### 📚 Key Concepts
- **String and Array Manipulation**: The solution is a chain of standard methods like \`split\`, \`map\`, and \`join\`.
`,

  // problem explanation--> 126
  "floyds-triangle": `
### 💡 Problem Breakdown
Floyd's Triangle is a right-angled triangular array of natural numbers. It's constructed by filling the rows with consecutive numbers, starting from 1.

### ⚙️ Solution Walkthrough
Nested loops are used to generate the pattern. A single counter variable is used to keep track of the number to be printed.
1. Initialize a \`num\` counter to 1.
2. **Outer Loop (rows)**: Iterates from 1 to the desired number of rows.
3. **Inner Loop (columns)**: Iterates from 1 up to the current row number \`i\`.
   - In each iteration of the inner loop, add the current \`num\` to the row string.
   - Increment \`num\`.
4. After each row, add a newline character.

### 📚 Key Concepts
- **Nested Loops**: The standard pattern for generating 2D patterns.
- **Single Counter**: Using one counter that persists across both loops is the key to getting consecutive numbers.
`,

  // problem explanation--> 127
  "dutch-national-flag-problem": `
### 💡 Problem Breakdown
This is a classic sorting problem. Given an array containing only three distinct values (0s, 1s, and 2s), the task is to sort it in-place. The name comes from the Dutch flag, which has three colors.

### ⚙️ Solution Walkthrough
A highly efficient, single-pass O(n) solution uses a "three-pointer" approach.
1. **Initialize Pointers**:
   - \`low\` starts at the beginning (where 0s will go).
   - \`mid\` starts at the beginning (the current element being considered).
   - \`high\` starts at the end (where 2s will go).
2. **Loop**: Continue as long as \`mid <= high\`.
3. **Check \`nums[mid]\`**:
   - If it's a \`0\`: Swap \`nums[low]\` with \`nums[mid]\`. Increment both \`low\` and \`mid\`.
   - If it's a \`1\`: Do nothing. Just increment \`mid\`.
   - If it's a \`2\`: Swap \`nums[mid]\` with \`nums[high]\`. Decrement \`high\`. (Do *not* increment \`mid\` because the number you just swapped into the \`mid\` position needs to be processed).

### 📚 Key Concepts
- **Three-Pointer Technique**: A variation of the two-pointer technique for partitioning an array into three sections.
- **In-place Sorting**: The algorithm sorts the array without needing auxiliary space.
`,

  // problem explanation--> 128
  "find-all-anagrams-in-string": `
### 💡 Problem Breakdown
This is a classic "sliding window" problem. The task is to find all the substrings in a string \`s\` that are anagrams of another string \`p\`.

### ⚙️ Solution Walkthrough
The sliding window approach with frequency maps is very efficient.
1. **Frequency Map of \`p\`**: Create a frequency map of the characters in the pattern string \`p\`.
2. **Initialize Window**: Create a frequency map for the initial window in \`s\` (the first \`p.length\` characters).
3. **Slide and Compare**: Loop from \`p.length\` to the end of \`s\`. In each step:
   - **Compare**: Check if the current window's frequency map matches the pattern's frequency map. If so, add the start index of the window to the results.
   - **Slide**: "Slide" the window one position to the right by:
     - Adding the new character at the end of the window to the window's frequency map.
     - Removing the character that just left the window from the window's frequency map.
4. Remember to check the last window after the loop finishes.

### 📚 Key Concepts
- **Sliding Window**: An efficient technique for problems involving contiguous subarrays or substrings.
- **Frequency Counting**: Used to determine if a substring is an anagram of the pattern.
`,

  // problem explanation--> 129
  "generate-pascal-row": `
### 💡 Problem Breakdown
The task is to generate a specific row (rowIndex) of Pascal's Triangle. This is the same as problem 107.

### ⚙️ Solution Walkthrough
We can build the row iteratively. Each element in a row of Pascal's Triangle can be calculated from the previous element in the same row using a mathematical formula based on combinations: \`C(n, k) = C(n, k-1) * (n - k + 1) / k\`.
1. Initialize a \`row\` array with the first element, \`[1]\`.
2. Loop from \`k = 1\` up to the \`rowIndex\`.
3. In each iteration, calculate the next element in the row using the formula and the previously calculated element \`row[k-1]\`.
4. Push the new element into the \`row\` array.
5. Return the completed \`row\`.

### 📚 Key Concepts
- **Binomial Coefficients**: The numbers in Pascal's Triangle are binomial coefficients. The formula used is an efficient way to calculate them iteratively.
`,

  // problem explanation--> 130
  "best-time-to-buy-sell-stock-ii": `
### 💡 Problem Breakdown
This is a variation of the stock profit problem. Here, you can complete as many transactions as you like (buy one day, sell another; repeat). The goal is to maximize the total profit.

### ⚙️ Solution Walkthrough
A simple greedy approach works perfectly. The key insight is that you can capture the profit from every "uphill" price movement.
1. Initialize \`maxProfit\` to 0.
2. Loop through the \`prices\` array starting from the second day (\`i = 1\`).
3. In each iteration, compare the price of the current day (\`prices[i]\`) with the price of the previous day (\`prices[i-1]\`).
4. If today's price is higher, it means there was a profit to be made. Add that difference (\`prices[i] - prices[i-1]\`) to \`maxProfit\`.
5. This is equivalent to buying on every "valley" and selling on the next "peak".

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we make the locally optimal choice (taking any available daily profit), which leads to the global maximum profit.
`,

  // problem explanation--> 131
  "find-first-and-last-position-in-sorted-array": `
### 💡 Problem Breakdown
Given a sorted array that may contain duplicates, the task is to find the starting and ending index of a given target value.

### ⚙️ Solution Walkthrough
The solution requires two modified binary searches, one to find the leftmost occurrence and one to find the rightmost.
1. **Find Left Bound**: Perform a binary search. When you find the \`target\`, don't stop. Store the index and continue searching in the *left* half of the array (\`right = mid - 1\`) to see if an even earlier occurrence exists.
2. **Find Right Bound**: Perform another binary search. When you find the \`target\`, store the index and continue searching in the *right* half (\`left = mid + 1\`) to find a later occurrence.
3. Return the two bounds found.

### 📚 Key Concepts
- **Binary Search Modification**: The standard binary search algorithm is adapted to not stop at the first match, but to continue searching to find the boundaries of a target's occurrences.
`,

  // problem explanation--> 132
  "excel-sheet-column-number": `
### 💡 Problem Breakdown
The task is to convert an Excel column title (like "A", "B", ..., "Z", "AA", "AB") into its corresponding column number (1, 2, ..., 26, 27, 28). This is essentially a base-26 number system conversion.

### ⚙️ Solution Walkthrough
The solution iterates through the column title string from left to right.
1. Initialize \`result\` to 0.
2. For each character in the string:
   - Multiply the current \`result\` by 26 (to shift to the next place value).
   - Get the character's numeric value (A=1, B=2, ...) by using its character code. \`char.charCodeAt(0) - 64\` works for uppercase letters.
   - Add this value to the \`result\`.
\`\`\`javascript
// For "ZY"
// Iteration 1 (Z): result = 0 * 26 + 26 = 26
// Iteration 2 (Y): result = 26 * 26 + 25 = 676 + 25 = 701
\`\`\`
### 📚 Key Concepts
- **Base Conversion**: The logic is the same as converting a number in any base (like binary or hexadecimal) to base-10.
`,

  // problem explanation--> 133
  "excel-sheet-column-title": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting a column number into its Excel title string. This is like converting from base-10 to a modified base-26 system.

### ⚙️ Solution Walkthrough
The logic is similar to standard base conversion, but with a twist because Excel columns are 1-indexed (A=1) not 0-indexed.
1. Use a \`while\` loop that continues as long as the \`columnNumber\` is greater than 0.
2. Inside the loop:
   - Decrement the number by 1 to handle the 1-based indexing.
   - Calculate the remainder when divided by 26. This gives the 0-25 value for the next character. Convert this to a character (A-Z).
   - Prepend this character to the result string.
   - Update the \`columnNumber\` by dividing it by 26 and flooring it.

### 📚 Key Concepts
- **Base Conversion**: With a slight modification to handle 1-based indexing instead of 0-based.
`,

  // problem explanation--> 134
  "single-number": `
### 💡 Problem Breakdown
Given an array where every number appears twice except for one, the task is to find that single unique number.

### ⚙️ Solution Walkthrough
A very elegant and efficient solution uses the bitwise XOR (\`^\`) operator. XOR has two key properties:
1. \`x ^ x = 0\` (XORing a number with itself results in zero).
2. \`x ^ 0 = x\` (XORing a number with zero results in the number itself).

If you XOR all the numbers in the array together, all the paired numbers will cancel each other out, leaving only the unique number.
\`\`\`javascript
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
\`\`\`
### 📚 Key Concepts
- **Bitwise XOR (\`^\`)**: Leveraging its mathematical properties provides a clever O(n) time and O(1) space solution.
`,

  // problem explanation--> 135
  "plus-one": `
### 💡 Problem Breakdown
You are given an array of digits representing a large integer. The task is to increment this integer by one and return the new array of digits.

### ⚙️ Solution Walkthrough
The solution is to iterate through the array from right to left, simulating grade-school addition.
1. Loop from the last digit to the first.
2. In each iteration:
   - If the current digit is less than 9, simply increment it by one and return the array immediately. The process is done.
   - If the current digit is 9, set it to 0 and continue the loop to handle the "carry-over".
3. **Edge Case**: If the loop finishes (meaning all digits were 9, like in \`[9, 9]\`), it means you need to add a new leading 1. Use \`.unshift(1)\` to add a 1 to the beginning of the array.

### 📚 Key Concepts
- **Array Manipulation**: The problem is solved by iterating and modifying an array in-place.
- **Edge Case Handling**: The case where all digits are 9 needs to be handled specifically.
`,

  // problem explanation--> 136
  "length-of-last-word": `
### 💡 Problem Breakdown
The task is to find the length of the last word in a string that contains words and spaces.

### ⚙️ Solution Walkthrough
A simple solution uses built-in string methods.
1. **\`.trim()\`**: Use the \`.trim()\` method on the string to remove any leading or trailing spaces. This handles cases like \`"  hello world  "\`.
2. **\`.split(' ')\`**: Use the \`.split(' ')\` method to break the string into an array of words.
3. **Access Last Word**: Get the last element from the resulting array.
4. **\`.length\`**: Return the length of that last word.
\`\`\`javascript
function lengthOfLastWord(s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
}
\`\`\`
### 📚 Key Concepts
- **String Methods**: Leveraging built-in functions like \`trim\` and \`split\` makes the solution concise.
`,

  // problem explanation--> 137
  "palindrome-number": `
### 💡 Problem Breakdown
The task is to check if an integer is a palindrome. A number is a palindrome if it reads the same backward as forward (e.g., 121).

### ⚙️ Solution Walkthrough
The simplest approach is to convert the number to a string and then check if the string is a palindrome.
1. Handle edge cases: Negative numbers are not palindromes.
2. Convert the number to a string.
3. Use the standard \`.split('').reverse().join('')\` technique to reverse the string.
4. Compare the original string with the reversed string.

A solution without converting to a string would involve mathematically reversing the number by repeatedly taking the last digit and building up a new reversed number.

### 📚 Key Concepts
- **Type Conversion**: A straightforward way to solve the problem by converting it into a string manipulation task.
`,

  // problem explanation--> 138
  "remove-duplicates-from-sorted-array": `
### 💡 Problem Breakdown
Given a sorted array, the task is to remove duplicate elements *in-place* so that each unique element appears only once. The function should return the new length of the modified array.

### ⚙️ Solution Walkthrough
An efficient solution uses the "two-pointer" technique.
1. If the array is empty, return 0.
2. Initialize a "write pointer" \`i\` to 0. This will track the end of the unique elements subarray.
3. Iterate through the array with a "read pointer" \`j\`, starting from the second element.
4. In each iteration, compare \`nums[j]\` with \`nums[i]\`.
   - If they are different, it means we've found a new unique element.
   - Increment the write pointer \`i\`.
   - Copy the value from \`nums[j]\` to \`nums[i]\`.
5. After the loop, the first \`i + 1\` elements of the array will be the unique elements. Return \`i + 1\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: A pattern for modifying an array in-place.
- **In-place Algorithm**: The modification is done on the original array to save space.
`,

  // problem explanation--> 139
  "remove-element": `
### 💡 Problem Breakdown
Given an array and a target value, the task is to remove all instances of that value *in-place* and return the new length of the array. The order of the remaining elements can be changed.

### ⚙️ Solution Walkthrough
A simple and efficient solution uses a "write pointer".
1. Initialize a write pointer \`i\` to 0.
2. Loop through the array with a read pointer \`j\`.
3. If the element at \`nums[j]\` is **not** equal to the value to be removed:
   - Copy the element \`nums[j]\` to the position \`nums[i]\`.
   - Increment the write pointer \`i\`.
4. After the loop, the first \`i\` elements of the array will be the elements that were not removed. Return \`i\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: The read pointer (\`j\`) scans the array, and the write pointer (\`i\`) keeps track of where to place the next valid element.
- **In-place Algorithm**: The array is modified directly.
`,

  // problem explanation--> 140
  "search-insert-position": `
### 💡 Problem Breakdown
This is a classic binary search problem. Given a sorted array and a target value, you need to find the index of the target. If the target is not present, you need to find the index where it *would be* inserted to maintain the sorted order.

### ⚙️ Solution Walkthrough
The standard binary search algorithm can be used.
1. Initialize \`left\` and \`right\` pointers to the start and end of the array.
2. Loop while \`left <= right\`.
3. Find the \`mid\` index.
   - If \`nums[mid]\` is the target, return \`mid\`.
   - If \`nums[mid]\` is less than the target, the insertion point must be to the right, so set \`left = mid + 1\`.
   - If \`nums[mid]\` is greater than the target, the insertion point could be \`mid\` or to its left, so set \`right = mid - 1\`.
4. If the loop finishes, the target was not found. The \`left\` pointer will be at the correct insertion position. Return \`left\`.

### 📚 Key Concepts
- **Binary Search**: A highly efficient algorithm for searching in sorted arrays. The final state of the pointers can be used to determine the insertion point.
`,

  // problem explanation--> 141
  "game-of-life-iteration": `
### 💡 Problem Breakdown
Conway's Game of Life is a cellular automaton. The state of each cell in a grid evolves based on a simple set of rules related to its eight neighbors. The task is to compute the next state of the grid given its current state.

### ⚙️ Solution Walkthrough
1. Create a new board of the same dimensions to store the next state.
2. Use nested loops to iterate through every cell \`(r, c)\` of the original board.
3. For each cell, use another pair of nested loops to count its "live" neighbors (cells with value 1). Be careful not to count the cell itself.
4. Apply the Game of Life rules based on the cell's current state and its live neighbor count to determine the cell's state in the *new* board.
   - A live cell with < 2 live neighbors dies.
   - A live cell with 2 or 3 live neighbors lives.
   - A live cell with > 3 live neighbors dies.
   - A dead cell with exactly 3 live neighbors becomes a live cell.
5. After iterating through all cells, return the new board.

### 📚 Key Concepts
- **Matrix Traversal**: Using nested loops to visit every cell and its neighbors.
- **State Transition**: The core logic involves calculating a new state based on the current state and its local environment.
`,

  // problem explanation--> 142
  "generator-as-control-flow-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the history of asynchronous JavaScript. Before \`async/await\` was introduced in ES2017, developers sought ways to avoid "callback hell." Generators provided a solution.

### ⚙️ Solution Walkthrough
A "runner" function could be written to manage a generator.
1. The generator function would \`yield\` a Promise.
2. The runner would receive this promise. It would use \`.then()\` to wait for the promise to resolve.
3. When the promise resolved, the runner would call the generator's \`.next()\` method, passing the resolved value back into the generator, which would then resume execution until the next \`yield\`.
\`\`\`javascript
// Simplified concept with a library like co.js
co(function* () {
  const result1 = yield promise1;
  const result2 = yield promise2(result1);
  return result2;
});
\`\`\`
This allowed for asynchronous code that looked synchronous. \`async/await\` is essentially built-in syntactic sugar for this exact pattern.

### 📚 Key Concepts
- **Generators**: Functions that can be paused and resumed.
- **Async Control Flow**: The evolution of techniques for managing asynchronous operations.
`,

  // problem explanation--> 143
  "palindrome-pairs": `
### 💡 Problem Breakdown
The task is to find all pairs of words from a given list that, when concatenated, form a palindrome. For example, if the list is \`["bat", "tab"]\`, the pair of indices \`[0, 1]\` is a solution because \`"battab"\` is a palindrome.

### ⚙️ Solution Walkthrough
A brute-force approach with nested loops is the most straightforward way to start.
1. Initialize an empty \`result\` array.
2. **Outer Loop**: Iterate through the \`words\` array with index \`i\`.
3. **Inner Loop**: Iterate through the \`words\` array with index \`j\`.
4. **Check**:
   - Make sure \`i\` is not equal to \`j\`.
   - Concatenate the two words: \`combined = words[i] + words[j]\`.
   - Check if \`combined\` is a palindrome. A helper function can be used for this (e.g., by comparing the string to its reversed version).
   - If it is a palindrome, add the pair of indices \`[i, j]\` to the \`result\`.
5. Return the \`result\`.

More optimized solutions exist using a hash map and checking prefixes/suffixes of words.

### 📚 Key Concepts
- **Palindrome Check**: A common sub-problem.
- **Nested Loops**: Used for checking all possible pairs.
`,

  // problem explanation--> 144
  "gas-station": `
### 💡 Problem Breakdown
This is a classic greedy algorithm problem. You have a circular route of gas stations. The task is to find a starting station from which you can complete a full circle, given the amount of gas at each station and the cost to travel to the next.

### ⚙️ Solution Walkthrough
An efficient O(n) solution can be found with a single pass.
1. **First Check**: If the total amount of gas available is less than the total cost to travel, it's impossible to complete the circuit. Calculate the total gas and total cost. If \`totalGas < totalCost\`, return -1.
2. **Greedy Traversal**:
   - Initialize \`total_tank\` (the overall gas balance) and \`current_tank\` (the gas in the tank for the current attempt) to 0.
   - Initialize \`start_station\` to 0.
   - Loop through the stations.
   - In each iteration, update both \`total_tank\` and \`current_tank\` with \`gas[i] - cost[i]\`.
   - If \`current_tank\` ever drops below zero, it means you can't reach the next station from the current \`start_station\`. So, reset \`current_tank\` to 0 and set the potential new \`start_station\` to \`i + 1\`.
3. Because we already verified that a solution exists (step 1), the final \`start_station\` value must be the correct answer.

### 📚 Key Concepts
- **Greedy Algorithm**: The key insight is that if you start at station A and run out of gas before reaching station B, then you cannot reach B from any station between A and B either. This allows you to discard entire segments and reset your starting point.
`,

  // problem explanation--> 145
  "candy-distribution": `
### 💡 Problem Breakdown
This is a greedy algorithm problem. You need to distribute candies to children based on their ratings, ensuring a child with a higher rating gets more candies than their immediate neighbors.

### ⚙️ Solution Walkthrough
A two-pass approach is required to satisfy the conditions for both left and right neighbors.
1. **Initialize**: Create a \`candies\` array of the same length as \`ratings\`, and initialize every element to 1 (as every child gets at least one candy).
2. **Left-to-Right Pass**: Loop through the \`ratings\` from left to right (starting at index 1). If a child \`i\` has a higher rating than their left neighbor \`i-1\`, give them one more candy than their neighbor: \`candies[i] = candies[i-1] + 1\`.
3. **Right-to-Left Pass**: Now, loop from right to left (starting at \`n-2\`). If a child \`i\` has a higher rating than their right neighbor \`i+1\`, ensure they have more candies. Take the maximum of their current candy count and \`candies[i+1] + 1\`. This step is crucial to fix cases where a descending slope was not handled correctly in the first pass.
4. **Sum**: The total minimum number of candies is the sum of all elements in the final \`candies\` array.

### 📚 Key Concepts
- **Greedy Algorithm**: The two-pass approach ensures that the local greedy choices (satisfying the neighbor condition) lead to the global minimum.
`,

  // problem explanation--> 146
  "zigzag-conversion": `
### 💡 Problem Breakdown
The task is to simulate writing a string in a zigzag pattern across a specified number of rows and then reading it out line by line.

### ⚙️ Solution Walkthrough
The solution involves creating an array of strings, where each string represents a row. We then iterate through the input string, appending each character to the correct row.
1. **Initialize**: Create an array of empty strings, with the size equal to \`numRows\`.
2. **Control Flow**: We need a way to track which row we're on (\`currentRow\`) and whether our direction is "going down" or "going up". A boolean flag \`goingDown\` can be used for this.
3. **Loop**: Iterate through each character of the input string.
   - Append the character to the string at \`rows[currentRow]\`.
   - **Change Direction**: If we are at the top row (\`currentRow === 0\`) or the bottom row (\`currentRow === numRows - 1\`), flip the \`goingDown\` flag.
   - **Move**: Update \`currentRow\` by adding 1 if \`goingDown\` is true, or subtracting 1 if it's false.
4. **Join**: After the loop, join the strings in the \`rows\` array to get the final result.

### 📚 Key Concepts
- **State Management**: The \`currentRow\` and \`goingDown\` variables are used to manage the state of the zigzag traversal.
`,

  // problem explanation--> 147
  "string-to-integer-atoi": `
### 💡 Problem Breakdown
This is a classic parsing problem. The goal is to implement a function that converts a string to an integer, similar to the C \`atoi\` function. The function needs to handle several rules:
1.  Discard leading whitespace.
2.  Handle an optional leading sign (\`+\` or \`-\`).
3.  Read in digits until a non-digit character is encountered.
4.  Handle values that are outside the 32-bit signed integer range.

### ⚙️ Solution Walkthrough
The built-in \`parseInt()\` function handles the first three rules perfectly. The main task is to clamp the result to the 32-bit integer range.
\`\`\`javascript
function myAtoi(s) {
  const num = parseInt(s.trim(), 10);
  if (isNaN(num)) return 0;
  
  const INT_MAX = 2**31 - 1;
  const INT_MIN = -(2**31);
  
  if (num > INT_MAX) return INT_MAX;
  if (num < INT_MIN) return INT_MIN;
  
  return num;
}
\`\`\`
1.  **\`parseInt(s.trim(), 10)\`**: This trims whitespace and parses the integer. \`parseInt\` automatically handles signs and stops at the first non-digit character.
2.  **Range Clamping**: The result is compared against the \`INT_MAX\` and \`INT_MIN\` constants and adjusted if it falls outside the range.

### 📚 Key Concepts
- **\`parseInt()\`**: The built-in JavaScript function for parsing strings into integers.
- **Integer Overflow**: Handling cases where a number exceeds the limits of its data type.
`,

  // problem explanation--> 148
  "jump-game-ii": `
### 💡 Problem Breakdown
This is a variation of the "Jump Game" problem. Here, you are guaranteed to be able to reach the end, and the goal is to find the *minimum* number of jumps required.

### ⚙️ Solution Walkthrough
A greedy approach is efficient for this. We need to keep track of the farthest we can reach from our current "jump window."
1. **Initialize**:
   - \`jumps = 0\`: The number of jumps taken.
   - \`currentEnd = 0\`: The end of the range we can reach with the current number of jumps.
   - \`farthest = 0\`: The farthest we can possibly reach from any position within the current jump window.
2. **Loop**: Iterate through the array from the start, but stop one element before the end (since we don't need to jump from the last element).
3. **Update Farthest**: In each iteration \`i\`, update \`farthest = Math.max(farthest, i + nums[i])\`.
4. **Jump**: If the current position \`i\` reaches the end of our current jump window (\`i === currentEnd\`), it means we must take another jump.
   - Increment \`jumps\`.
   - Update \`currentEnd\` to the new \`farthest\` point we can reach.
5. Return \`jumps\`.

### 📚 Key Concepts
- **Greedy Algorithm**: At the end of each jump's range, we greedily choose the next jump that will take us the farthest. This is a common pattern for this type of problem.
`,

  // problem explanation--> 149
  "first-missing-positive": `
### 💡 Problem Breakdown
Given an unsorted array of integers (which can be positive, negative, or zero), the goal is to find the smallest positive integer (starting from 1) that is *not* present in the array. This should be done efficiently.

### ⚙️ Solution Walkthrough
A clever O(n) time and O(1) space solution uses the array itself as a hash map.
1.  **First Pass (Cleanup & Placement)**: Iterate through the array. The goal is to place each number \`x\` at the index \`x-1\` if possible. Use a \`while\` loop to keep swapping \`nums[i]\` into its correct position until the number at \`nums[i]\` is correct or out of range.
2.  **Second Pass (Finding)**: Iterate through the modified array one last time. The first index \`i\` where \`nums[i]\` is not equal to \`i + 1\` indicates that \`i + 1\` is the missing positive number.
3.  **Edge Case**: If the loop finishes and all numbers are in their correct places, the missing number is \`n + 1\`.

### 📚 Key Concepts
- **In-place Hashing / Cyclic Sort**: A pattern where you use the array's indices to sort or store information about its contents without using extra space.
`,

  // problem explanation--> 150
  "next-permutation": `
### 💡 Problem Breakdown
The task is to find the next lexicographically greater permutation of a given sequence of numbers. If no such permutation exists (i.e., the sequence is already in descending order), it should be rearranged to the lowest possible order (ascending order). The modification must be in-place.

### ⚙️ Solution Walkthrough
The algorithm involves a few steps, scanning from the right:
1.  **Find the Pivot**: Find the first element from the right (\`nums[i]\`) which is smaller than the element to its right (\`nums[i+1]\`). This is our "pivot."
2.  **Find the Swap Element**: Find the smallest element to the right of the pivot (\`nums[j]\`) that is still larger than the pivot.
3.  **Swap**: Swap the pivot (\`nums[i]\`) with the element you just found (\`nums[j]\`).
4.  **Reverse**: Reverse the subarray to the right of the pivot's original position (\`i+1\` to the end). This ensures the final result is the *next smallest* permutation.
5.  **Edge Case**: If no pivot is found (the array is in descending order), simply reverse the entire array.

### 📚 Key Concepts
- **Lexicographical Order**: The dictionary order used for comparing sequences.
- **In-place Algorithm**: Modifying the array directly without auxiliary data structures.
`,

  // problem explanation--> 151
  "h-index": `
### 💡 Problem Breakdown
The h-index is a metric for measuring the productivity and citation impact of a scholar. A scholar has an h-index of \`h\` if \`h\` of their \`N\` papers have at least \`h\` citations each, and the other \`N-h\` papers have no more than \`h\` citations each.

### ⚙️ Solution Walkthrough
A simple and effective solution is to sort the array first.
1. **Sort**: Sort the \`citations\` array in descending order.
2. **Iterate**: Loop through the sorted array with an index \`h\`.
3. **Check Condition**: The h-index is the largest \`h\` where the number of citations for the \`h\`-th paper (\`citations[h-1]\`) is greater than or equal to \`h\`.
4. In the loop, we find the first index \`h\` where \`citations[h]\` is *less than* \`h+1\`. This \`h\` is the h-index.
\`\`\`javascript
function hIndex(citations) {
  citations.sort((a, b) => b - a); // Sort descending
  let h = 0;
  while (h < citations.length && citations[h] > h) {
    h++;
  }
  return h;
}
\`\`\`
### 📚 Key Concepts
- **Sorting**: Sorting the data first often simplifies problems that involve order and comparison.
`,

  // problem explanation--> 152
  "reverse-vowels-of-a-string": `
### 💡 Problem Breakdown
The task is to reverse only the vowels within a string, leaving all other characters (consonants) in their original positions.

### ⚙️ Solution Walkthrough
The two-pointer technique is a great fit for this problem.
1. **Initialize**: Convert the string to an array of characters. Set a \`left\` pointer at the start and a \`right\` pointer at the end. Create a \`Set\` of vowels for fast lookups.
2. **Loop**: Use a \`while\` loop that continues as long as \`left < right\`.
3. **Move Pointers**:
   - Move the \`left\` pointer forward until it points to a vowel.
   - Move the \`right\` pointer backward until it points to a vowel.
4. **Swap**: Once both pointers are on vowels, swap the characters at the \`left\` and \`right\` positions.
5. **Advance**: Move both pointers inward (\`left++\`, \`right--\`) to continue the search.
6. **Join**: After the loop, join the array of characters back into a string.

### 📚 Key Concepts
- **Two-Pointer Technique**: Ideal for in-place modifications and comparisons from both ends of a sequence.
- **\`Set\`**: Used for efficient checking of whether a character is a vowel.
`,

  // problem explanation--> 153
  "intersection-of-two-arrays-ii": `
### 💡 Problem Breakdown
This is a variation of the array intersection problem. The goal is to find the common elements, and the result should include each common element as many times as it appears in *both* arrays.

### ⚙️ Solution Walkthrough
A frequency map is the best approach to handle the count requirement.
1. **Build Frequency Map**: Create a frequency map for the first (or smaller) array, \`arr1\`. This map will store each number and how many times it appears.
2. **Iterate and Find Intersection**: Loop through the second array, \`arr2\`.
3. For each number \`num\` in \`arr2\`:
   - Check if \`num\` exists as a key in the map and if its count is greater than 0.
   - If yes, it's part of the intersection. Add it to the \`result\` array.
   - Decrement its count in the map to "use it up".
4. Return the \`result\` array.

### 📚 Key Concepts
- **Frequency Counting**: The core of the solution, allowing you to respect the number of occurrences of each element.
`,

  // problem explanation--> 154
  "longest-word-in-dictionary-through-deleting": `
### 💡 Problem Breakdown
You are given a main string \`s\` and a dictionary of words. The task is to find the longest word in the dictionary that can be formed by deleting zero or more characters from \`s\`. If there's a tie in length, choose the lexicographically smallest word.

### ⚙️ Solution Walkthrough
1. **Sort Dictionary (Optional but good)**: You can sort the dictionary first by length (descending) and then lexicographically (ascending). The first word you find that is a subsequence will be the answer.
2. **Iterate Through Words**: Loop through each \`word\` in the dictionary.
3. **Check for Subsequence**: For each \`word\`, check if it is a subsequence of \`s\`. This can be done with a two-pointer approach:
   - Use one pointer \`i\` for \`s\` and another \`j\` for \`word\`.
   - Iterate through \`s\`. If \`s[i]\` matches \`word[j]\`, increment \`j\`.
   - If \`j\` reaches the end of the \`word\`, then the \`word\` is a subsequence.
4. **Track Best Word**: Keep track of the best valid word found so far based on the length and lexicographical order criteria.

### 📚 Key Concepts
- **Subsequence Check**: A common sub-problem that can be solved efficiently with two pointers.
`,

  // problem explanation--> 155
  "encode-and-decode-strings": `
### 💡 Problem Breakdown
This is a data serialization problem. You need to design a way to encode an array of strings into a single string, and then decode it back. The challenge is handling any possible characters, including delimiters you might want to use.

### ⚙️ Solution Walkthrough
A robust method is to encode the length of each string before the string itself.
- **Encode**:
  1. For each string in the input array, create a chunk: \`length + '#' + string\`.
  2. For example, \`["hello", "world"]\` becomes \`5#hello5#world\`.
  3. Concatenate all these chunks into a single string.
- **Decode**:
  1. Use a pointer \`i\` to scan the encoded string.
  2. At each step, find the next \`'#'\` to determine the length of the upcoming string.
  3. Parse that length.
  4. Extract the string of that length.
  5. Add it to the results and move the pointer \`i\` past the extracted string.
  6. Repeat until the end of the encoded string is reached.

### 📚 Key Concepts
- **Serialization**: The process of converting a data structure into a format that can be stored or transmitted.
- **Data Framing**: The \`length#\` part is a "frame" that tells the decoder how to parse the subsequent data, avoiding ambiguity.
`,

  // problem explanation--> 156
  "find-celebrity": `
### 💡 Problem Breakdown
This is a classic logic puzzle. In a group of \`n\` people, a celebrity is someone who is known by everyone else but knows no one themselves. You are given a function \`knows(a, b)\` which returns true if \`a\` knows \`b\`.

### ⚙️ Solution Walkthrough
A clever two-pass solution can solve this in O(n) time.
1. **First Pass (Find a Candidate)**:
   - Assume person \`0\` is the celebrity candidate.
   - Loop from \`i = 1\` to \`n-1\`.
   - Ask \`knows(candidate, i)\`. If it's true, it means our current \`candidate\` knows someone, so they can't be a celebrity. Therefore, \`i\` becomes the new potential candidate.
   - After this loop, you are left with a single candidate. This is the only person who could possibly be the celebrity.
2. **Second Pass (Verify the Candidate)**:
   - Now, loop through everyone again.
   - Check if the candidate is valid:
     - The candidate must not know anyone (\`!knows(candidate, i)\` for all \`i\`).
     - Everyone else must know the candidate (\`knows(i, candidate)\` for all other \`i\`).
   - If the candidate passes all these checks, return their ID. Otherwise, no celebrity exists.

### 📚 Key Concepts
- **Logical Elimination**: The first pass works by eliminating people who cannot be celebrities.
`,

  // problem explanation--> 157
  "basic-calculator": `
### 💡 Problem Breakdown
This is a challenging expression evaluation problem that requires handling numbers, \`+\`, \`-\`, and parentheses. It's a great application for a stack.

### ⚙️ Solution Walkthrough
The solution uses a stack to handle the parentheses.
1. Initialize \`result = 0\`, \`sign = 1\` (for \`+\` or \`-\`), and \`num = 0\`.
2. Initialize a stack to store intermediate results and signs when we enter a parenthesis.
3. Iterate through the string character by character.
   - If it's a digit, build up the \`num\`.
   - If it's \`+\`: Add the completed \`num\` (with its sign) to \`result\`, reset \`num\`, and set \`sign = 1\`.
   - If it's \`-\`: Add the completed \`num\` to \`result\`, reset \`num\`, and set \`sign = -1\`.
   - If it's \`(\`: Push the current \`result\` and \`sign\` onto the stack. Reset \`result\` to 0 and \`sign\` to 1 for the sub-expression.
   - If it's \`)\`: Add the last \`num\` to \`result\`. Then, multiply \`result\` by the sign that was active before the parenthesis (popped from the stack). Finally, add the result that was active before the parenthesis (also popped from the stack).

### 📚 Key Concepts
- **Stack**: The LIFO nature of a stack is perfect for handling the nested structure of parentheses.
`,

  // problem explanation--> 158
  "text-justification": `
### 💡 Problem Breakdown
This is a very challenging string manipulation and formatting problem. You are given an array of words and a max width. You must format the text into lines of that exact width by adding extra spaces between words. The last line should be left-justified.

### ⚙️ Solution Walkthrough
The approach is greedy. You process the text line by line.
1.  **Gather Words for a Line**: In a loop, gather as many words as can fit on a single line (considering one space between them).
2.  **Justify the Line**: Once you have the words for a line, calculate the total number of spaces needed.
    - Calculate the number of "gaps" between words.
    - Distribute the spaces as evenly as possible into these gaps. Any extra spaces should be added to the gaps on the left side first.
    - Build the justified line string.
3.  **Handle the Last Line**: The last line is a special case. It should be left-justified, meaning only one space between words and extra spaces added at the end to reach the max width.
4.  Repeat until all words are processed.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we make the locally optimal choice by fitting as many words as possible onto the current line.
- **String Formatting**: Complex logic for building strings with precise spacing.
`,

  // problem explanation--> 159
  "minimum-window-substring": `
### 💡 Problem Breakdown
This is a difficult but classic interview question that uses the "sliding window" technique. Given a search string \`S\` and a target string \`T\`, you need to find the smallest substring in \`S\` that contains all the characters of \`T\` (including duplicates).

### ⚙️ Solution Walkthrough
The sliding window approach uses two pointers, \`left\` and \`right\`, to define the current window.
1.  **Frequency Map**: First, create a frequency map of the characters in the target string \`T\`.
2.  **Expand Window**: Start with both pointers at the beginning. Move the \`right\` pointer to expand the window. As you do, update a count of the required characters that are now in your current window.
3.  **Check for Validity**: Once the window contains all the required characters from \`T\`, it is a "valid" window.
4.  **Shrink Window**: Now, try to find a smaller valid window. Move the \`left\` pointer inward. As long as the window remains valid, keep shrinking it and updating the minimum window size found so far.
5.  **Repeat**: Once the window becomes invalid (by shrinking it too much), go back to step 2 and start expanding the \`right\` pointer again. Continue until the \`right\` pointer reaches the end of the string.

### 📚 Key Concepts
- **Sliding Window**: An algorithmic pattern using two pointers to maintain a "window" over a data set. It's very efficient for problems involving contiguous subarrays or substrings.
- **Frequency Map (Hash Map)**: Essential for keeping track of the character counts needed and the counts within the current window.
`,

  // problem explanation--> 160
  "longest-substring-with-at-most-k-distinct-characters": `
### 💡 Problem Breakdown
This is a sliding window problem. The goal is to find the length of the longest substring that contains no more than \`k\` unique characters.

### ⚙️ Solution Walkthrough
A sliding window with a frequency map is used to track the distinct characters in the current window.
1. Initialize \`left = 0\`, \`maxLength = 0\`, and an empty \`Map\` to store character frequencies.
2. Loop through the string with a \`right\` pointer.
   - Add the character \`s[right]\` to the map, incrementing its count.
   - **Shrink Window**: Use a \`while\` loop to shrink the window from the left (\`left++\`) as long as the number of distinct characters in the map (\`map.size\`) is greater than \`k\`. When shrinking, decrement the count of the character at \`s[left]\` and delete it from the map if its count becomes zero.
   - **Update Max Length**: After each expansion, the window is valid. Update \`maxLength\` with the current window size (\`right - left + 1\`).
3. Return \`maxLength\`.

### 📚 Key Concepts
- **Sliding Window**: The core technique for solving this problem efficiently in O(n) time.
- **Hash Map (\`Map\`)**: Used to efficiently keep track of the characters and their frequencies within the current window.
`,

  // problem explanation--> 161
  "find-k-closest-elements": `
### 💡 Problem Breakdown
Given a sorted array, a number \`x\`, and a count \`k\`, the task is to find the \`k\` elements in the array that are closest in value to \`x\`.

### ⚙️ Solution Walkthrough
A clever two-pointer approach can solve this efficiently. The idea is to shrink a window that is initially the size of the whole array down to the size \`k\`.
1. Initialize \`left = 0\` and \`right = arr.length - 1\`.
2. Use a \`while\` loop to shrink the window until its size (\`right - left + 1\`) is equal to \`k\`.
3. In each iteration, compare the "distance" of the leftmost element to \`x\` with the distance of the rightmost element to \`x\`.
   - If the left element is farther away (\`x - arr[left] > arr[right] - x\`), then we can discard it by incrementing \`left\`.
   - Otherwise, the right element is farther (or equally far), so we discard it by decrementing \`right\`.
4. Once the loop finishes, the elements from \`left\` to \`right\` are the \`k\` closest. Return that slice of the array.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used here to shrink a window from the outside in based on a comparison.
`,

  // problem explanation--> 162
  "minimum-size-subarray-sum": `
### 💡 Problem Breakdown
This is another classic sliding window problem. The goal is to find the length of the *smallest* contiguous subarray whose sum is greater than or equal to a target value \`s\`.

### ⚙️ Solution Walkthrough
A sliding window approach is used to efficiently find the minimum length.
1. Initialize \`minLength = Infinity\`, \`windowSum = 0\`, and \`left = 0\`.
2. Loop through the array with a \`right\` pointer to expand the window.
   - Add \`nums[right]\` to \`windowSum\`.
   - **Shrink Window**: Use a \`while\` loop that runs as long as \`windowSum >= s\`.
     - Inside this loop, we have a valid window. Update \`minLength\` with the current window size (\`right - left + 1\`).
     - To find an even smaller window, subtract \`nums[left]\` from \`windowSum\` and increment \`left\`.
3. After the main loop, if \`minLength\` is still \`Infinity\`, it means no valid subarray was found, so return 0. Otherwise, return \`minLength\`.

### 📚 Key Concepts
- **Sliding Window**: An efficient pattern for finding subarrays that satisfy a certain condition.
`,

  // problem explanation--> 163
  "subarray-sum-equals-k": `
### 💡 Problem Breakdown
The task is to find the total number of continuous subarrays whose elements sum up to a target value \`k\`. The numbers can be negative.

### ⚙️ Solution Walkthrough
This problem can be solved efficiently in O(n) time using a hash map and the concept of prefix sums.
1. Initialize \`count = 0\`, \`sum = 0\`, and a \`Map\` to store the frequencies of prefix sums, with an initial entry \`map.set(0, 1)\` to handle subarrays that start from index 0.
2. Loop through the array.
3. For each number \`num\`:
   - Add it to the running \`sum\`.
   - We are looking for a previous prefix sum, \`prevSum\`, such that \`sum - prevSum = k\`. Rearranging this gives \`prevSum = sum - k\`.
   - Check if \`map.has(sum - k)\`. If it does, it means there are \`map.get(sum - k)\` subarrays ending at the current position whose sum is \`k\`. Add this count to the total \`count\`.
   - Update the frequency of the current \`sum\` in the map.

### 📚 Key Concepts
- **Prefix Sum**: A technique where the running sum of an array is used to solve problems involving subarray sums.
- **Hash Map (\`Map\`)**: Used to store and retrieve the frequencies of prefix sums in O(1) average time.
`,

  // problem explanation--> 164
  "boats-to-save-people": `
### 💡 Problem Breakdown
You have to transport people across a river in boats. Each boat has a weight limit and can carry at most two people. The goal is to use the minimum number of boats.

### ⚙️ Solution Walkthrough
A greedy approach with two pointers on a sorted array is optimal.
1. **Sort**: Sort the \`people\` array by weight in ascending order.
2. **Initialize**: Set a \`left\` pointer to the lightest person and a \`right\` pointer to the heaviest person. Initialize \`boats = 0\`.
3. **Loop**: Use a \`while\` loop that continues as long as \`left <= right\`.
4. **Greedy Choice**: In each iteration, we always put the heaviest person (\`people[right]\`) in a boat. We then check if the lightest person (\`people[left]\`) can also fit in the same boat without exceeding the \`limit\`.
   - If \`people[left] + people[right] <= limit\`, they can share. We move the \`left\` pointer forward to consider the next lightest person.
   - Regardless of whether they shared, the heaviest person is now on a boat, so we always move the \`right\` pointer inward.
   - Increment \`boats\` for each boat used.
5. Return \`boats\`.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy strategy of always pairing the heaviest person with the lightest possible person is guaranteed to yield the minimum number of boats.
`,

  // problem explanation--> 165
  "daily-temperatures": `
### 💡 Problem Breakdown
Given an array of daily temperatures, the task is to create a new array where each element is the number of days you would have to wait for a warmer temperature. If there is no future warmer day, the value should be 0.

### ⚙️ Solution Walkthrough
This is a classic problem that can be solved efficiently using a **monotonic stack**. The stack will store indices of the temperatures in decreasing order.
1. Initialize a \`result\` array of the same size, filled with 0s.
2. Initialize an empty \`stack\`.
3. Loop through the \`temperatures\` array with index \`i\`.
4. **\`while\` Loop**: As long as the stack is not empty and the current temperature \`t[i]\` is warmer than the temperature at the index on top of the stack (\`t[stack[top]]\`):
   - We have found a warmer day for the day at \`stack[top]\`.
   - Pop the index from the stack.
   - Calculate the wait \`i - index\` and put it in the \`result\` array at that \`index\`.
5. **Push**: After the \`while\` loop, push the current index \`i\` onto the stack. This maintains the decreasing temperature order in the stack.
6. Return the \`result\` array.

### 📚 Key Concepts
- **Monotonic Stack**: A stack where the elements are always in a specific order (either increasing or decreasing). It's a powerful tool for problems involving finding the "next greater element."
`,

  // problem explanation--> 166
  "find-pivot-index": `
### 💡 Problem Breakdown
The "pivot index" is the index in an array where the sum of the numbers to its left is equal to the sum of the numbers to its right.

### ⚙️ Solution Walkthrough
An efficient solution can be found in a single pass after calculating the total sum.
1. **Calculate Total Sum**: First, calculate the sum of all numbers in the array.
2. **Initialize**: Set \`leftSum = 0\`.
3. **Loop**: Iterate through the array with index \`i\`.
4. For each element \`nums[i]\`:
   - Calculate the \`rightSum\` on the fly: \`rightSum = totalSum - leftSum - nums[i]\`.
   - Check if \`leftSum === rightSum\`. If they are equal, you've found the pivot index, so return \`i\`.
   - Update \`leftSum\` by adding the current element: \`leftSum += nums[i]\`.
5. If the loop finishes without finding a pivot, return -1.

### 📚 Key Concepts
- **Prefix Sum**: The \`leftSum\` acts as a running prefix sum, allowing for the efficient calculation of the \`rightSum\` without needing a second loop.
`,

  // problem explanation--> 167
  "sort-colors": `
### 💡 Problem Breakdown
This is a classic sorting problem, also known as the "Dutch National Flag Problem." Given an array containing only three distinct values (0s for red, 1s for white, and 2s for blue), the task is to sort it in-place.

### ⚙️ Solution Walkthrough
A highly efficient, single-pass O(n) solution uses a "three-pointer" approach.
1. **Initialize Pointers**:
   - \`low\` starts at the beginning (where 0s will go).
   - \`mid\` starts at the beginning (the current element being considered).
   - \`high\` starts at the end (where 2s will go).
2. **Loop**: Continue as long as \`mid <= high\`.
3. **Check \`nums[mid]\`**:
   - If it's a \`0\`: Swap \`nums[low]\` with \`nums[mid]\`. Increment both \`low\` and \`mid\`.
   - If it's a \`1\`: Do nothing. Just increment \`mid\`.
   - If it's a \`2\`: Swap \`nums[mid]\` with \`nums[high]\`. Decrement \`high\`. (Do *not* increment \`mid\` because the number you just swapped into the \`mid\` position needs to be processed).

### 📚 Key Concepts
- **Three-Pointer Technique**: A variation of the two-pointer technique for partitioning an array into three sections.
- **In-place Sorting**: The algorithm sorts the array without needing auxiliary space.
`,

  // problem explanation--> 168
  "kth-largest-element-in-an-array": `
### 💡 Problem Breakdown
The task is to find the \`k\`-th largest element in an unsorted array. This means if the array were sorted, it would be the element at the \`k\`-th position from the end.

### ⚙️ Solution Walkthrough
The simplest and most straightforward solution is to sort the array.
1. **Sort**: Sort the input array in descending order.
2. **Return**: The \`k\`-th largest element will be at index \`k - 1\` in the sorted array.
\`\`\`javascript
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a); // Sort descending
  return nums[k - 1];
}
\`\`\`
While simple, this has a time complexity of O(n log n) due to the sort. More advanced solutions like Quickselect can solve this in O(n) average time.

### 📚 Key Concepts
- **Sorting**: A direct way to solve problems related to order and rank.
`,

  // problem explanation--> 169
  "top-k-frequent-elements": `
### 💡 Problem Breakdown
Given an array of numbers, the task is to find the \`k\` numbers that appear most frequently.

### ⚙️ Solution Walkthrough
This problem is typically solved in two main steps.
1. **Build Frequency Map**: Create a hash map (\`Map\`) to store the frequency of each number in the input array. Loop through the array and populate the map.
2. **Sort by Frequency**:
   - Convert the map's entries into an array of \`[number, frequency]\` pairs.
   - Sort this array in descending order based on the frequency (the second element of each pair).
   - Take the first \`k\` elements from the sorted array.
   - Extract just the numbers (the first element of each pair) from the result.

More advanced solutions can use a Min-Heap or Quickselect for a better time complexity than a full sort.

### 📚 Key Concepts
- **Frequency Counting**: The first step in many problems involving element occurrences.
- **Sorting**: Used to rank the elements by their frequency.
`,

  // problem explanation--> 170
  "sort-characters-by-frequency": `
### 💡 Problem Breakdown
The task is to rearrange a string so that characters are sorted in descending order based on how frequently they appear.

### ⚙️ Solution Walkthrough
The approach is very similar to the "Top K Frequent Elements" problem.
1. **Build Frequency Map**: Create a map to count the frequency of each character in the input string.
2. **Sort by Frequency**:
   - Convert the map's entries into an array of \`[character, frequency]\` pairs.
   - Sort this array in descending order based on the frequency.
3. **Build Result String**: Iterate through the sorted array. For each \`[char, count]\` pair, append the \`char\` repeated \`count\` times to the result string.

### 📚 Key Concepts
- **Frequency Counting**: The core of the solution.
- **String Building**: Constructing the final output string from the sorted frequency data.
`,

  // problem explanation--> 171
  "largest-number-at-least-twice-of-others": `
### 💡 Problem Breakdown
The goal is to find the largest element in an array and check if it's at least twice as large as every other number in the array.

### ⚙️ Solution Walkthrough
An efficient solution can be found in a single pass through the array.
1. **Initialize**: We need to keep track of the largest number (\`max\`) and the second largest number (\`secondMax\`) found so far. Initialize them to a very small number (\`-Infinity\`). Also, keep track of the index of the max number.
2. **Loop**: Iterate through the array.
3. For each number \`num\`:
   - If \`num > max\`: The old \`max\` becomes the new \`secondMax\`. The current \`num\` becomes the new \`max\`. Update the \`maxIndex\`.
   - Else if \`num > secondMax\`: The current \`num\` is the new \`secondMax\`.
4. **Final Check**: After the loop, compare \`max\` with \`2 * secondMax\`. If it's greater than or equal, return \`maxIndex\`. Otherwise, return -1.

### 📚 Key Concepts
- **Single Pass Algorithm**: Finding the solution by iterating through the data only once.
`,

  // problem explanation--> 172
  "maximum-product-of-three-numbers": `
### 💡 Problem Breakdown
The task is to find the maximum product that can be formed by multiplying any three numbers from a given array. The challenge comes from the fact that the array can contain negative numbers.

### ⚙️ Solution Walkthrough
The maximum product can come from two possibilities:
1. The product of the three largest positive numbers.
2. The product of the two smallest negative numbers (whose product is positive) and the single largest positive number.

A simple way to find these is to sort the array first.
1. **Sort**: Sort the input array in ascending order.
2. **Calculate Possibilities**:
   - \`product1 = nums[n-1] * nums[n-2] * nums[n-3]\` (product of the three largest).
   - \`product2 = nums[0] * nums[1] * nums[n-1]\` (product of the two smallest and the largest).
3. **Return Max**: Return the maximum of \`product1\` and \`product2\`.

### 📚 Key Concepts
- **Sorting**: Simplifies the problem by making the largest and smallest elements easy to find.
- **Case Analysis**: The solution requires considering the different cases that can arise due to negative numbers.
`,

  // problem explanation--> 173
  "array-partition-i": `
### 💡 Problem Breakdown
You are given an array of \`2n\` integers. The task is to group them into \`n\` pairs in such a way that the sum of the minimums of each pair is maximized.

### ⚙️ Solution Walkthrough
The key insight is that to maximize the sum of minimums, you want to make the minimums as large as possible. This is achieved by pairing the smallest numbers with the next smallest numbers.
1. **Sort**: Sort the input array in ascending order.
2. **Sum**: Iterate through the sorted array, stepping by 2. Add every element at an even index (\`0, 2, 4, ...\`) to the sum.

After sorting, the array looks like \`[s1, l1, s2, l2, ...]\`, where \`s\` is small and \`l\` is large. By pairing \`(s1, l1)\`, \`(s2, l2)\`, etc., the minimums are \`s1, s2, ...\`. Summing these up gives the maximum possible total.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy choice of pairing adjacent elements in a sorted array leads to the optimal solution.
`,

  // problem explanation--> 174
  "reshape-the-matrix": `
### 💡 Problem Breakdown
The task is to take a 2D array (matrix) and reshape it into new dimensions (\`r\` rows and \`c\` columns), preserving the original order of the elements. If the reshape is not possible (i.e., the number of elements doesn't match), the original matrix should be returned.

### ⚙️ Solution Walkthrough
1. **Validation**: Check if the reshape is possible. The number of elements in the original matrix (\`original_rows * original_cols\`) must equal \`r * c\`. If not, return the original matrix.
2. **Flatten**: Create a one-dimensional array containing all the elements of the original matrix in order.
3. **Rebuild**: Create a new empty matrix. Use a loop to iterate \`r\` times (for each new row). In each iteration, \`.slice()\` the next \`c\` elements from the flattened array and push this new row into the result matrix.

### 📚 Key Concepts
- **Matrix Manipulation**: Transforming the structure of a 2D array.
- **Data Flattening**: A common intermediate step in reshaping data.
`,

  // problem explanation--> 175
  "toeplitz-matrix": `
### 💡 Problem Breakdown
A Toeplitz matrix is a special kind of matrix where every diagonal from top-left to bottom-right has the same elements. The task is to check if a given matrix has this property.

### ⚙️ Solution Walkthrough
The property can be checked with a single pass using nested loops. The condition is that for any element \`matrix[r][c]\`, it must be equal to the element to its bottom-right, \`matrix[r+1][c+1]\`.
1. **Loop**: Use nested loops to iterate through every element of the matrix. The loops should stop one row and one column early to avoid going out of bounds.
2. **Compare**: For each element \`matrix[r][c]\`, compare it with \`matrix[r+1][c+1]\`.
3. **Return \`false\`**: If at any point they are not equal, the matrix is not Toeplitz, so you can return \`false\` immediately.
4. **Return \`true\`**: If the loops complete without finding any mismatches, the matrix is Toeplitz.

### 📚 Key Concepts
- **Matrix Traversal**: The solution involves a systematic check of all relevant elements.
`,

  // problem explanation--> 176
  "transpose-matrix": `
### 💡 Problem Breakdown
Transposing a matrix is the operation of swapping its rows and columns. The element at \`(r, c)\` in the original matrix moves to \`(c, r)\` in the transposed matrix.

### ⚙️ Solution Walkthrough
1. Determine the dimensions of the original matrix (\`R\` rows and \`C\` columns).
2. Create a new, empty matrix with the dimensions swapped (it will have \`C\` rows and \`R\` columns).
3. Use nested loops to iterate through the original matrix.
4. In each iteration, copy the element \`matrix[r][c]\` to \`transposed[c][r]\`.
\`\`\`javascript
function transpose(matrix) {
  const R = matrix.length, C = matrix[0].length;
  const transposed = Array(C).fill(0).map(() => Array(R).fill(0));
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      transposed[c][r] = matrix[r][c];
    }
  }
  return transposed;
}
\`\`\`
### 📚 Key Concepts
- **Matrix Operations**: A common topic in linear algebra and computer graphics.
`,

  // problem explanation--> 177
  "flipping-an-image": `
### 💡 Problem Breakdown
The task involves a two-step transformation on a binary (0s and 1s) matrix:
1. **Flip Horizontally**: Reverse each row of the matrix.
2. **Invert**: Change all 0s to 1s and all 1s to 0s.

### ⚙️ Solution Walkthrough
The \`.map()\` array method can be used to perform this transformation concisely.
1. **Map Rows**: Use \`.map()\` on the outer array to process each \`row\`.
2. **Reverse**: Inside the map's callback, first call \`.reverse()\` on the \`row\`.
3. **Map and Invert**: Then, chain another \`.map()\` on the reversed row to process each \`pixel\`. In this inner map, invert the pixel. A simple way to invert a binary digit is with the XOR operator (\`pixel ^ 1\`).
4. The result of the outer map will be the new, transformed matrix.

### 📚 Key Concepts
- **Array Methods**: Using higher-order functions like \`map\` to perform data transformations.
- **Bitwise XOR (\`^\`)**: A concise way to flip a bit (0 becomes 1, 1 becomes 0).
`,

  // problem explanation--> 178
  "valid-mountain-array": `
### 💡 Problem Breakdown
A "mountain array" has specific properties:
1. It must have a length of at least 3.
2. There must be a "peak" index where the array is strictly increasing before the peak and strictly decreasing after the peak.

### ⚙️ Solution Walkthrough
A single pass with a pointer (\`i\`) can validate the array.
1. **Walk Up**: Use a \`while\` loop to walk up the "mountain" as long as the array is strictly increasing (\`arr[i] < arr[i+1]\`).
2. **Check Peak**: After the loop, check if the peak is valid. The peak cannot be the first or last element, so \`i\` must be greater than 0 and less than \`n-1\`. If not, return \`false\`.
3. **Walk Down**: Use another \`while\` loop to walk down the rest of the mountain as long as it's strictly decreasing (\`arr[i] > arr[i+1]\`).
4. **Final Check**: If the array is a valid mountain, the pointer \`i\` should have successfully reached the last index of the array. Return \`i === n - 1\`.

### 📚 Key Concepts
- **Single Pass Algorithm**: The solution traverses the array at most once to validate its structure.
`,

  // problem explanation--> 179
  "sort-array-by-parity": `
### 💡 Problem Breakdown
The task is to rearrange an array so that all the even numbers come before all the odd numbers. The relative order of the even numbers (or odd numbers) among themselves does not matter.

### ⚙️ Solution Walkthrough
A two-pointer approach is efficient for this in-place sort.
1. **Initialize**: Set a \`left\` pointer at the start and a \`right\` pointer at the end of the array.
2. **Loop**: Use a \`while\` loop that continues as long as \`left < right\`.
3. **Move Pointers**:
   - Move the \`left\` pointer forward as long as it's on an even number.
   - Move the \`right\` pointer backward as long as it's on an odd number.
4. **Swap**: Once the loops stop, \`left\` is pointing to an odd number and \`right\` is pointing to an even number. Swap them.
5. **Continue**: The loop continues until the pointers cross, at which point the array will be partitioned correctly.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used here to partition an array based on a condition.
`,

  // problem explanation--> 180
  "sort-array-by-parity-ii": `
### 💡 Problem Breakdown
This is a variation where an array (with an equal number of evens and odds) needs to be sorted so that even numbers are at even indices and odd numbers are at odd indices.

### ⚙️ Solution Walkthrough
A two-pointer approach can be used. One pointer looks for misplaced evens, and the other looks for misplaced odds.
1. **Initialize**: Set an \`even\` pointer to 0 and an \`odd\` pointer to 1.
2. **Loop**: Use a \`while\` loop that continues as long as both pointers are within the array bounds.
3. **Find Misplaced Even**: Use a nested \`while\` loop to advance the \`even\` pointer by 2 until it finds an odd number at an even index.
4. **Find Misplaced Odd**: Use another nested \`while\` loop to advance the \`odd\` pointer by 2 until it finds an even number at an odd index.
5. **Swap**: If both pointers are still within bounds, swap the misplaced numbers at the \`even\` and \`odd\` indices.
6. Return the sorted array.

### 📚 Key Concepts
- **Two-Pointer Technique**: The pointers are used to scan for specific out-of-place elements.
`,

  // problem explanation--> 181
  "squares-of-a-sorted-array": `
### 💡 Problem Breakdown
Given an array that is sorted (but may contain negative numbers), the task is to create a new array containing the square of each number, also in sorted order.

### ⚙️ Solution Walkthrough
The naive approach is to map each number to its square and then sort the result. This works but has a time complexity of O(n log n). An O(n) solution is possible with the two-pointer technique because the original array is sorted.
1. The largest squared numbers will be at the ends of the original array (e.g., -10 and 10).
2. **Initialize**: Set a \`left\` pointer at the start and a \`right\` pointer at the end. Create a \`result\` array of the same size.
3. **Loop**: Loop from the *end* of the \`result\` array backwards.
4. **Compare and Place**: In each iteration, compare the absolute value of the number at \`left\` with the number at \`right\`.
   - The larger of the two, when squared, will be the next largest number in the result.
   - Square this larger number and place it at the current position in the \`result\` array.
   - Move the corresponding pointer (\`left\` or \`right\`) inward.
5. Return the \`result\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used to efficiently build the sorted result array from the ends inward.
`,

  // problem explanation--> 182
  "height-checker": `
### 💡 Problem Breakdown
The problem asks for the number of students who are not in their correct positions if the line were sorted by height.

### ⚙️ Solution Walkthrough
This problem can be solved by comparing the original array with a sorted version of it.
1. **Create a Copy**: Create a sorted copy of the \`heights\` array. The original must be preserved for comparison.
2. **Compare**: Loop from \`i = 0\` to the end of the arrays.
3. In each iteration, compare \`heights[i]\` with \`sortedHeights[i]\`.
4. **Count Mismatches**: If they are not equal, increment a \`count\` variable.
5. Return the final \`count\`.

### 📚 Key Concepts
- **Comparison Sorting**: The core of the problem is comparing an unsorted state to a sorted state.
`,

  // problem explanation--> 183
  "degree-of-an-array": `
### 💡 Problem Breakdown
This is a multi-step problem.
1. The "degree" of an array is the frequency of its most frequent element.
2. The task is to find the length of the *shortest* contiguous subarray that has this same degree.

### ⚙️ Solution Walkthrough
The solution requires multiple passes or storing detailed information in a map.
1. **First Pass (Gather Info)**: Iterate through the array once. Use a hash map to store information for each number: its \`count\`, its \`firstSeen\` index, and its \`lastSeen\` index. While doing this, also track the maximum frequency found so far (the \`degree\`).
2. **Second Pass (Find Shortest Subarray)**: Iterate through the map.
3. For each number that has a \`count\` equal to the \`degree\`:
   - Calculate the length of the subarray containing all its occurrences: \`lastSeen - firstSeen + 1\`.
   - Keep track of the minimum length found among all these candidate numbers.
4. Return the overall minimum length.

### 📚 Key Concepts
- **Frequency Counting**: The first step to determine the degree.
- **Index Tracking**: Storing the first and last occurrence indices is key to calculating the subarray length.
`,

  // problem explanation--> 184
  "magic-squares-in-grid": `
### 💡 Problem Breakdown
A 3x3 magic square has two properties:
1. It contains all distinct numbers from 1 to 9.
2. The sum of each row, each column, and both main diagonals is the same (which must be 15).
The task is to find how many 3x3 subgrids within a larger grid are magic squares.

### ⚙️ Solution Walkthrough
1. **Loop**: Use nested loops to iterate through all possible top-left corners of a 3x3 subgrid in the larger grid.
2. **Validation Function**: For each subgrid, call a helper function \`isMagic(subgrid)\` to check if it's a magic square.
3. **Inside \`isMagic\`**:
   - Check if all numbers from 1-9 are present and distinct. A \`Set\` is good for this.
   - Check if the center element is 5 (this is a property of all 3x3 magic squares).
   - Check if the sums of all 8 lines (3 rows, 3 columns, 2 diagonals) are equal to 15.
4. **Count**: If \`isMagic\` returns true, increment a counter.
5. Return the final count.

### 📚 Key Concepts
- **Matrix Traversal**: Using nested loops to extract subgrids.
- **Brute Force with Validation**: The approach checks every possibility against a strict set of rules.
`,

  // problem explanation--> 185
  "teemo-attacking": `
### 💡 Problem Breakdown
The task is to calculate the total duration an enemy is poisoned. An attack at time \`t\` applies poison for \`duration\` seconds. If another attack happens before the poison wears off, the poison timer is reset to the new time plus the duration.

### ⚙️ Solution Walkthrough
The key is that the time added by any given attack is not always the full duration. It's the minimum of the duration and the time until the next attack.
1. If the \`timeSeries\` is empty, the total time is 0.
2. Initialize \`total = 0\`.
3. Loop from the first attack to the second-to-last attack.
4. In each iteration \`i\`, calculate the time between the current attack and the next one: \`gap = timeSeries[i+1] - timeSeries[i]\`.
5. The poison duration for this interval is \`Math.min(duration, gap)\`. Add this to the \`total\`.
6. **Last Attack**: After the loop, the very last attack always contributes its full \`duration\`, so add that to the \`total\`.
7. Return \`total\`.

### 📚 Key Concepts
- **Interval Management**: The problem is about calculating the total length of overlapping time intervals.
`,

  // problem explanation--> 186
  "can-place-flowers": `
### 💡 Problem Breakdown
The rule is that a flower can only be planted in an empty plot (\`0\`) if its immediate left and right plots are also empty. The task is to see if we can plant \`n\` new flowers.

### ⚙️ Solution Walkthrough
A greedy approach works. Iterate through the flowerbed and plant a flower in the first available spot you find.
1. Loop through the \`flowerbed\` array.
2. For each plot \`i\`, check if a flower can be planted there. The condition is:
   - \`flowerbed[i] === 0\` (the plot itself is empty).
   - \`i === 0 || flowerbed[i - 1] === 0\` (the left plot is empty, or it's the edge).
   - \`i === flowerbed.length - 1 || flowerbed[i + 1] === 0\` (the right plot is empty, or it's the other edge).
3. If the condition is met:
   - "Plant" a flower by setting \`flowerbed[i] = 1\`. This is important so that this new flower is considered when checking the next plot.
   - Decrement the count of flowers to plant, \`n\`.
4. After the loop, return \`true\` if \`n <= 0\`.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy choice of planting a flower as early as possible does not prevent us from achieving the optimal (maximum) number of new plantings.
`,

  // problem explanation--> 187
  "maximum-average-subarray-i": `
### 💡 Problem Breakdown
This is a sliding window problem. The goal is to find the contiguous subarray of a fixed size \`k\` that has the highest average. Since the size \`k\` is fixed, this is equivalent to finding the subarray of size \`k\` with the maximum sum.

### ⚙️ Solution Walkthrough
A sliding window approach is efficient.
1. **Initial Window**: Calculate the sum of the first \`k\` elements. This is the initial \`maxSum\`.
2. **Slide**: Loop from the \`k\`-th element to the end of the array.
3. In each iteration, "slide" the window one position to the right by:
   - Adding the new element at the end of the window to the running \`sum\`.
   - Subtracting the element that just left the window from the beginning.
4. **Update Max**: After each slide, compare the new window's \`sum\` with \`maxSum\` and update \`maxSum\` if it's larger.
5. **Final Average**: After the loop, the maximum average is \`maxSum / k\`.

### 📚 Key Concepts
- **Sliding Window**: The core technique for efficiently processing contiguous subarrays.
`,

  // problem explanation--> 188
  "k-diff-pairs-in-an-array": `
### 💡 Problem Breakdown
A "k-diff pair" is a pair of numbers in an array whose absolute difference is \`k\`. The task is to find the number of *unique* such pairs.

### ⚙️ Solution Walkthrough
A \`Set\` can be used to efficiently find the pairs.
1. Handle the edge case \`k < 0\` (return 0).
2. Create two \`Set\`s: \`seen\` to store the numbers we have iterated over, and \`pairs\` to store the starting number of each unique pair we find.
3. Loop through the array. For each \`num\`:
   - Check if \`seen.has(num - k)\`. If it does, we've found a pair. Add \`num - k\` to the \`pairs\` set.
   - Check if \`seen.has(num + k)\`. If it does, we've found a pair. Add \`num\` to the \`pairs\` set.
   - Add the current \`num\` to the \`seen\` set.
4. The final answer is the \`.size\` of the \`pairs\` set.

The case where \`k=0\` (finding duplicates) needs to be handled slightly differently, often by using a frequency map instead.

### 📚 Key Concepts
- **\`Set\`**: Used for efficient lookups of seen numbers and for storing the unique pairs.
`,

  // problem explanation--> 189
  "find-the-town-judge": `
### 💡 Problem Breakdown
The problem defines a "town judge" with two properties: they trust no one, and everyone else trusts them. The task is to find the judge if one exists.

### ⚙️ Solution Walkthrough
This can be modeled as a graph problem. The trust relationships are directed edges. The judge is a node with an in-degree of \`N-1\` and an out-degree of \`0\`. A simpler way is to use a single array to track the "trust score."
1. Create an array \`trustCounts\` of size \`N+1\`, initialized to zeros.
2. Loop through the \`trust\` pairs \`[a, b]\`.
   - Person \`a\` trusts someone, so they lose a "point": \`trustCounts[a]--\`.
   - Person \`b\` is trusted by someone, so they gain a "point": \`trustCounts[b]++\`.
3. After the loop, loop from 1 to \`N\`. If any person \`i\` has a \`trustCounts[i]\` equal to \`N-1\`, they are the judge. This single condition neatly captures both properties: if they are trusted by all \`N-1\` other people and haven't trusted anyone themselves, their score will be exactly \`N-1\`.
4. If no such person is found, return -1.

### 📚 Key Concepts
- **Graph Theory**: The problem can be thought of in terms of nodes and degrees.
`,

  // problem explanation--> 190
  "pancake-sorting": `
### 💡 Problem Breakdown
"Pancake sorting" involves sorting an array using only one operation: a "flip," which reverses a prefix of the array. The goal is to find the sequence of flips (represented by their sizes, \`k\`) that sorts the array.

### ⚙️ Solution Walkthrough
The strategy is a variation of selection sort. In each step, we find the largest unsorted number and move it to its correct final position.
1. Loop from \`n\` (the largest number, which is \`arr.length\`) down to 1.
2. **Find**: In each iteration, find the index \`i\` of the number \`n\`.
3. **Flip to Front**: If \`n\` is not already at the front, perform a flip of size \`i + 1\` to bring it to the front of the array. Record this flip size.
4. **Flip to Place**: Perform a flip of size \`n\` to move the number (which is now at the front) to its correct sorted position at the end of the unsorted section. Record this flip size.
5. Repeat for \`n-1\`, \`n-2\`, etc.

### 📚 Key Concepts
- **Sorting Algorithms**: The strategy is analogous to selection sort, but adapted for the specific "flip" operation.
`,

  // problem explanation--> 191
  "next-greater-element-i": `
### 💡 Problem Breakdown
You are given two arrays, \`nums1\` and \`nums2\`, where \`nums1\` is a subset of \`nums2\`. For each element in \`nums1\`, you need to find the first element in \`nums2\` that is to its right and is greater than it.

### ⚙️ Solution Walkthrough
A monotonic stack and a map can solve this efficiently.
1. **Pre-computation**: First, we can pre-compute the "next greater element" for every number in \`nums2\`.
2. Initialize an empty \`stack\` and an empty \`map\`.
3. Loop through \`nums2\`. For each \`num\`:
   - While the stack is not empty and the number at the top of the stack is less than \`num\`, it means we've found the next greater element for the number on top of the stack. Pop from the stack and add an entry to the map: \`map.set(popped_num, num)\`.
   - Push the current \`num\` onto the stack.
4. **Map Results**: Now, loop through \`nums1\`. For each element, look it up in the map. If it exists, that's its next greater element. If not, the answer is -1.

### 📚 Key Concepts
- **Monotonic Stack**: A stack where elements are always in a specific order. It's a key data structure for "next greater element" problems.
`,

  // problem explanation--> 192
  "next-greater-element-ii": `
### 💡 Problem Breakdown
This is a variation of the previous problem where the input array is "circular," meaning you can wrap around from the end to the beginning to find the next greater element.

### ⚙️ Solution Walkthrough
The monotonic stack approach still works, but we need to simulate the circular nature. This can be done by iterating through the array **twice**.
1. Initialize a \`result\` array and an empty \`stack\`.
2. Loop from \`i = 0\` to \`2 * n - 1\`, where \`n\` is the array length. Use the modulo operator (\`i % n\`) to get the actual index in the \`nums\` array.
3. The rest of the logic is the same as the non-circular version:
   - While the stack is not empty and the current number is greater than the number at the index on top of the stack, pop from the stack and set the result for that popped index.
   - If \`i < n\` (we are in the first pass), push the current index onto the stack.
4. Return the \`result\` array.

### 📚 Key Concepts
- **Monotonic Stack**: The core data structure for the efficient solution.
- **Circular Array Simulation**: A common trick for circular array problems is to conceptually double the array or loop through it twice.
`,

  // problem explanation--> 193
  "dot-product-of-two-sparse-vectors": `
### 💡 Problem Breakdown
A "sparse vector" is one that is mostly filled with zeros. The dot product of two vectors is the sum of the products of their corresponding elements. The challenge is to compute this efficiently for sparse vectors.

### ⚙️ Solution Walkthrough
A naive solution multiplies every corresponding element, including all the zeros. A better approach for truly sparse vectors would be to store only the non-zero elements and their indices.
- A simple loop implementation is shown for dense arrays:
  1. Initialize \`sum = 0\`.
  2. Loop from \`i = 0\` to the end of the vectors.
  3. In each iteration, add \`vec1[i] * vec2[i]\` to the \`sum\`.
  4. Return \`sum\`.

An optimized solution would involve creating a map or a list of pairs \`[index, value]\` for the non-zero elements of one vector, and then iterating through the other vector, only performing multiplications for the indices present in the map.

### 📚 Key Concepts
- **Dot Product**: A fundamental operation in linear algebra.
- **Sparse Data Structures**: Optimizing algorithms for data that is mostly empty.
`,

  // problem explanation--> 194
  "logger-rate-limiter": `
### 💡 Problem Breakdown
This is a system design problem. The goal is to create a logger that prevents the same message from being printed more than once within a 10-second window.

### ⚙️ Solution Walkthrough
A hash map (\`Map\`) is the perfect data structure to solve this. The map will store the message strings as keys and the timestamp of their last successful print as values.
1. When the logger function is called with a \`message\` and \`timestamp\`:
2. Check if the \`message\` exists as a key in the map.
   - If it does not exist, it's the first time we've seen this message. It should be printed. Add it to the map with its timestamp and return \`true\`.
   - If it does exist, get its last printed timestamp from the map.
   - Check if \`current_timestamp - last_timestamp >= 10\`.
   - If yes, the message can be printed again. Update its timestamp in the map and return \`true\`.
   - If no, the message should not be printed. Return \`false\`.

### 📚 Key Concepts
- **Rate Limiting**: A common system design pattern to control the frequency of operations.
- **Hash Map (\`Map\`)**: Used to efficiently store and retrieve the last-seen timestamp for each unique message.
`,

  // problem explanation--> 195
  "moving-average-from-data-stream": `
### 💡 Problem Breakdown
The task is to design a class or data structure that can calculate the moving average of the last \`k\` numbers in a stream of data.

### ⚙️ Solution Walkthrough
The solution requires storing the elements of the current window. A queue (which can be implemented with an array) is a good data structure for this. We also need to maintain the sum of the elements in the window.
1. **Initialization**: The constructor takes the \`size\` of the window. Initialize an empty queue (array) and a \`sum\` variable to 0.
2. **\`next(val)\` method**: When a new value \`val\` arrives:
   - Add the new \`val\` to the queue and to the \`sum\`.
   - **Maintain Window Size**: If the queue's size is now greater than the allowed window \`size\`, remove the oldest element from the front of the queue and subtract its value from the \`sum\`.
   - **Calculate Average**: The moving average is \`sum / queue.length\`. Return this value.

### 📚 Key Concepts
- **Data Streams**: Processing data as it arrives, without having the entire dataset available at once.
- **Queue**: A First-In, First-Out (FIFO) data structure, perfect for managing a sliding window.
`,

  // problem explanation--> 196
  "design-tic-tac-toe": `
### 💡 Problem Breakdown
This is a classic game design problem. The challenge is to design a Tic-Tac-Toe game on an \`n x n\` grid and, most importantly, to have an efficient \`move\` function that can determine a win in O(1) time.

### ⚙️ Solution Walkthrough
A naive \`move\` function would check the entire row, column, and diagonals after every move, which is O(n). An O(1) solution requires pre-allocating arrays to keep track of the score for each line.
1. **Initialization**: In the constructor, create arrays to store the scores for each row, each column, and the two main diagonals. \`rows = new Array(n).fill(0)\`, etc.
2. **\`move(row, col, player)\` method**:
   - Player 1 adds \`+1\` to the score, Player 2 adds \`-1\`.
   - Update the score for the corresponding \`row\`.
   - Update the score for the corresponding \`col\`.
   - If \`row === col\`, update the main diagonal score.
   - If \`row + col === n - 1\`, update the anti-diagonal score.
   - **Check for Win**: After updating, check if the absolute value of any of these scores has reached \`n\`. If it has, the current player has won.

### 📚 Key Concepts
- **Time Complexity Optimization**: Using extra space (the score arrays) to reduce the time complexity of the win-check from O(n) to O(1).
`,

  // problem explanation--> 197
  "battleships-in-a-board": `
### 💡 Problem Breakdown
The task is to count the number of battleships on a grid. A battleship is a contiguous line of 'X's (either horizontal or vertical). A key rule is that battleships are separated by at least one empty cell ('.'), so they never touch.

### ⚙️ Solution Walkthrough
The "no-touching" rule allows for a very simple solution. We only need to count the "heads" of the battleships. A cell \`(r, c)\` containing an 'X' is the head of a battleship if there is no 'X' to its immediate left and no 'X' immediately above it.
1. Initialize \`count = 0\`.
2. Use nested loops to iterate through every cell \`(r, c)\`.
3. If the cell contains an 'X':
   - Check if \`r === 0\` or the cell above (\`board[r-1][c]\`) is a '.'.
   - Check if \`c === 0\` or the cell to the left (\`board[r][c-1]\`) is a '.'.
   - If both conditions are true, we have found the top-left corner (the "head") of a new battleship. Increment \`count\`.
4. Return \`count\`.

### 📚 Key Concepts
- **Counting by Identification**: The problem is simplified by finding a unique feature (the "head") of each object to be counted.
`,

  // problem explanation--> 198
  "shortest-distance-to-a-character": `
### 💡 Problem Breakdown
Given a string and a target character, the task is to create an array where each position holds the shortest distance to an occurrence of that target character.

### ⚙️ Solution Walkthrough
A two-pass approach is efficient and easy to understand.
1. **Initialize**: Create a \`result\` array of the same size, filled with a large number (\`Infinity\`).
2. **Left-to-Right Pass**: Loop through the string from left to right.
   - Keep track of the index of the most recently seen target character, \`pos\`.
   - If the current character is the target, update \`pos\`.
   - Set \`result[i]\` to \`i - pos\`. This will correctly calculate the distance for all characters to the right of a target character.
3. **Right-to-Left Pass**: Now, loop through the string from right to left.
   - Again, keep track of the most recent \`pos\` of the target character.
   - Set \`result[i]\` to the *minimum* of its current value and the new distance \`Math.abs(i - pos)\`. This pass corrects the distances for all characters to the left of a target character.
4. Return the \`result\` array.

### 📚 Key Concepts
- **Two-Pass Algorithm**: A common pattern for problems where the solution for an element depends on information from both its left and right sides.
`,

  // problem explanation--> 199
  "binary-gap": `
### 💡 Problem Breakdown
The task is to find the longest sequence of consecutive zeros between two ones in the binary representation of a number.

### ⚙️ Solution Walkthrough
1. **Convert to Binary**: Convert the input number to its binary string representation.
2. **Iterate and Track**: Loop through the binary string.
   - Use a variable \`lastOne\` to store the index of the last '1' you encountered. Initialize it to -1.
   - Use a variable \`maxGap\` to store the longest gap found so far, initialized to 0.
3. In the loop, when you find a '1' at index \`i\`:
   - If \`lastOne\` is not -1 (meaning this is not the first '1' we've seen), calculate the current gap: \`i - lastOne\`.
   - Update \`maxGap\` with the maximum of \`maxGap\` and the current gap.
   - Update \`lastOne\` to the current index \`i\`.
4. Return \`maxGap\`.

### 📚 Key Concepts
- **Base Conversion**: The first step is to convert the number to a different base.
- **State Tracking**: The \`lastOne\` variable is used to keep track of the necessary state as we iterate.
`,

  // problem explanation--> 200
  "armstrong-number-check": `
### 💡 Problem Breakdown
An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because it has 3 digits and \`1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\`.

### ⚙️ Solution Walkthrough
1. **Convert to String**: Convert the input number to a string to easily access its digits and get its length.
2. **Get Number of Digits**: The length of the string is the power to which each digit must be raised.
3. **Loop and Sum**: Loop through the characters of the string.
   - In each iteration, convert the character back to a number.
   - Raise it to the power of the number of digits.
   - Add this result to a running sum.
4. **Compare**: After the loop, compare the final sum with the original input number. If they are equal, it's an Armstrong number.

### 📚 Key Concepts
- **Digit Manipulation**: The problem requires extracting and working with the individual digits of a number.
`,
};
