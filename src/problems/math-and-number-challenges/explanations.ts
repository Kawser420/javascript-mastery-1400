export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "mnc-add-two-numbers": `
### 💡 Problem Breakdown
This is the most fundamental arithmetic problem. The task is to take two numbers as input and return their sum. It serves as a basic introduction to creating a function that performs a calculation.

### ⚙️ Solution Walkthrough
The solution uses a simple function that accepts two parameters and uses the addition operator (\`+\`) to compute their sum.
\`\`\`javascript
function add(num1, num2) {
  return num1 + num2;
}
add(5, 10); // 15
\`\`\`
1.  **\`function add(num1, num2)\`**: Defines a function named \`add\` that accepts two arguments, which will be stored in the parameters \`num1\` and \`num2\`.
2.  **\`+\` Operator**: When used with numbers, the plus sign is the addition operator.
3.  **\`return\`**: The \`return\` keyword sends the result of the addition back as the function's output.

### 📚 Key Concepts
- **Functions**: Reusable blocks of code that perform a specific task.
- **Parameters & Arguments**: The mechanism for passing data into functions.
- **Arithmetic Operators**: Symbols like \`+\` used for mathematical calculations.
`,

  // problem explanation--> 02
  "mnc-check-even-or-odd": `
### 💡 Problem Breakdown
The task is to determine if an integer is even or odd. An even number is an integer that is exactly divisible by 2, while an odd number has a remainder of 1 when divided by 2.

### ⚙️ Solution Walkthrough
The most efficient way to solve this is by using the remainder (or modulo) operator, \`%\`.
\`\`\`javascript
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
checkEvenOrOdd(7); // 'Odd'
\`\`\`
1. **Modulo Operator (\`%\`)**: The expression \`num % 2\` calculates the remainder when \`num\` is divided by 2.
2. **Conditional Check**: If the remainder is 0, the number is even. Otherwise, it is odd.
3. **Ternary Operator**: This can be written more concisely with a ternary operator: \`return num % 2 === 0 ? 'Even' : 'Odd';\`

### 📚 Key Concepts
- **Modulo Operator**: A fundamental tool for problems involving divisibility.
- **Conditional Statements**: Using \`if...else\` or a ternary operator to make decisions.
`,

  // problem explanation--> 03
  "mnc-find-max-number": `
### 💡 Problem Breakdown
The goal is to find the larger of two numbers. The constraint is to do this without using the built-in \`Math.max()\` function, forcing a manual comparison.

### ⚙️ Solution Walkthrough
An \`if\` statement or a ternary operator can be used to compare the two numbers.
\`\`\`javascript
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// Concise version with ternary operator
// return num1 > num2 ? num1 : num2;

findMax(15, 8); // 15
\`\`\`
1. **Comparison**: The \`>\` operator is used to compare the two numbers.
2. **Return Value**: The function returns the number that was determined to be larger. If the numbers are equal, the \`else\` block will execute, returning the second number, which is correct.

### 📚 Key Concepts
- **Comparison Operators**: The \`>\` operator is a fundamental tool for comparing values.
- **Conditional Logic**: Implementing decision-making in code.
`,

  // problem explanation--> 04
  "mnc-factorial": `
### 💡 Problem Breakdown
The factorial of a non-negative integer \`n\`, denoted by \`n!\`, is the product of all positive integers less than or equal to \`n\`. For example, \`5! = 5 * 4 * 3 * 2 * 1 = 120\`. By definition, \`0! = 1\`.

### ⚙️ Solution Walkthrough
An iterative solution using a \`for\` loop is efficient.
\`\`\`javascript
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0) return 1;       // Base case: 0! = 1
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
factorial(5); // 120
\`\`\`
1. **Edge Cases**: Handle negative numbers and the base case of \`n = 0\`.
2. **Initialization**: Initialize \`result\` to 1. This is the multiplicative identity; starting with 0 would make the whole product 0.
3. **Loop**: Iterate from 2 up to \`n\`, multiplying the \`result\` by the current number \`i\` in each step.

### 📚 Key Concepts
- **Factorial**: A fundamental mathematical function in combinatorics.
- **Iteration**: Using a loop to perform a repeated calculation.
- **Accumulator Pattern**: The \`result\` variable is an accumulator that builds up the final product.
`,

  // problem explanation--> 05
  "mnc-is-prime": `
### 💡 Problem Breakdown
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. The task is to write a function that checks if a number is prime.

### ⚙️ Solution Walkthrough
An efficient solution involves trial division up to the square root of the number.
\`\`\`javascript
function isPrime(n) {
  // Prime numbers must be greater than 1.
  if (n <= 1) return false;
  
  // Trial division up to the square root of n.
  for (let i = 2; i * i <= n; i++) {
    // If n is divisible by any number in this range, it's not prime.
    if (n % i === 0) {
      return false;
    }
  }
  
  // If no divisors were found, it's prime.
  return true;
}
\`\`\`
1. **Base Case**: Handle numbers less than or equal to 1.
2. **Loop**: We only need to check for divisors up to the square root of \`n\`. If a number \`n\` has a divisor larger than its square root, it must also have a divisor smaller than it.
3. **Check Divisibility**: The modulo operator ('%') is used to check for divisibility.

### 📚 Key Concepts
- **Prime Numbers**: A fundamental concept in number theory.
- **Time Complexity Optimization**: Checking only up to the square root reduces the number of iterations significantly, from O(n) to O(sqrt(n)).
`,

  // problem explanation--> 06
  "mnc-fibonacci-sequence": `
### 💡 Problem Breakdown
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The sequence is: 0, 1, 1, 2, 3, 5, 8, 13, ... The task is to write an efficient iterative function to find the Nth number in this sequence.

### ⚙️ Solution Walkthrough
An iterative approach using two variables to track the previous two numbers is highly efficient.
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
\`\`\`
1.  **Base Cases**: Handle \`n=0\` and \`n=1\` directly.
2.  **Initialization**: Initialize two variables, \`a\` and \`b\`, to the first two numbers in the sequence (0 and 1).
3.  **Loop**: Iterate from 2 up to \`n\`. In each step, calculate the next number in the sequence and update \`a\` and \`b\` to slide the window forward.
4.  **Return**: After the loop, \`b\` will hold the nth Fibonacci number.

### 📚 Key Concepts
- **Iteration**: An iterative solution is much more efficient (O(n)) than a naive recursive one (O(2^n)) for this problem.
- **State Management**: The variables \`a\` and \`b\` are used to maintain the state of the last two numbers in the sequence.
`,

  // problem explanation--> 07
  "mnc-power-of-number": `
### 💡 Problem Breakdown
The goal is to calculate a base number raised to the power of an exponent (\`base^exponent\`) without using built-in power functions or operators. This requires implementing the logic of repeated multiplication.

### ⚙️ Solution Walkthrough
A simple \`for\` loop can perform the repeated multiplication.
\`\`\`javascript
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
\`\`\`
1. **Initialization**: Initialize \`result\` to 1, the multiplicative identity.
2. **Loop**: The loop runs \`exponent\` times.
3. **Multiplication**: In each iteration, the \`result\` is multiplied by the \`base\`.

### 📚 Key Concepts
- **Exponentiation**: Understanding that raising to a power is repeated multiplication.
- **Iteration**: Using a loop for repeated operations.
`,

  // problem explanation--> 08
  "mnc-sum-of-digits": `
### 💡 Problem Breakdown
The task is to take an integer and calculate the sum of all its individual digits. For example, for 12345, the sum is 1 + 2 + 3 + 4 + 5 = 15.

### ⚙️ Solution Walkthrough
A common approach is to convert the number to a string to easily access its digits.
\`\`\`javascript
function sumDigits(num) {
  const numString = String(Math.abs(num));
  let sum = 0;
  for (const digitChar of numString) {
    sum += Number(digitChar);
  }
  return sum;
}
\`\`\`
1. **Convert to String**: \`String(Math.abs(num))\` converts the number to a string. Using \`Math.abs\` handles negative numbers gracefully.
2. **Iterate**: Loop through each character of the string.
3. **Convert and Sum**: Convert each digit character back to a number and add it to the running \`sum\`.
4. A more concise version uses \`.split()\` and \`.reduce()\`.

### 📚 Key Concepts
- **Type Conversion**: Converting between numbers and strings is a common technique for digit manipulation.
- **Iteration**: Looping through the characters of a string.
`,

  // problem explanation--> 09
  "mnc-reverse-number": `
### 💡 Problem Breakdown
The goal is to reverse the digits of an integer. For example, 12345 becomes 54321, and -123 becomes -321. The sign must be preserved.

### ⚙️ Solution Walkthrough
This can be solved by converting the number to a string, reversing the string, and converting it back to a number.
\`\`\`javascript
function reverseNumber(num) {
  const reversedString = String(Math.abs(num)).split('').reverse().join('');
  const reversedNum = Number(reversedString);
  
  return num < 0 ? -reversedNum : reversedNum;
}
\`\`\`
1. **Handle Sign**: We first take the absolute value of the number to handle the reversal of digits separately from the sign.
2. **String Manipulation**: The absolute number is converted to a string, split into an array of characters, reversed, and joined back.
3. **Convert Back**: The reversed string is converted back to a number.
4. **Restore Sign**: The original sign of the number is restored using a ternary operator.

### 📚 Key Concepts
- **Type Conversion**: A practical example of converting between types to leverage string manipulation methods.
`,

  // problem explanation--> 10
  "mnc-palindrome-number": `
### 💡 Problem Breakdown
A palindrome is a number that reads the same forwards and backwards (e.g., 121). The task is to check if a number is a palindrome *without* converting it to a string, which requires a mathematical approach.

### ⚙️ Solution Walkthrough
The solution involves mathematically reversing the number and comparing it to the original.
\`\`\`javascript
function isPalindrome(num) {
  if (num < 0) return false;
  
  let reversed = 0;
  let original = num;
  
  while (original > 0) {
    const lastDigit = original % 10;
    reversed = reversed * 10 + lastDigit;
    original = Math.floor(original / 10);
  }
  
  return num === reversed;
}
\`\`\`
1. **Edge Case**: Negative numbers are not considered palindromes.
2. **Reversal Loop**: The \`while\` loop iteratively builds the \`reversed\` number.
   - \`original % 10\`: Extracts the last digit of the original number.
   - \`reversed * 10 + lastDigit\`: Appends the extracted digit to the \`reversed\` number.
   - \`Math.floor(original / 10)\`: Removes the last digit from the original number.
3. **Comparison**: Finally, the original number is compared with the fully reversed number.

### 📚 Key Concepts
- **Integer Manipulation**: Using modulo and division to deconstruct and construct numbers.
`,

  // problem explanation--> 11
  "mnc-area-of-circle": `
### 💡 Problem Breakdown
This problem is a direct application of a well-known geometric formula. The area of a circle is calculated as π (Pi) times the radius squared (A = πr²).

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Math.PI\` constant and the \`Math.pow()\` function.
\`\`\`javascript
function circleArea(radius) {
  // Area = π * r^2
  return Math.PI * Math.pow(radius, 2);
}

// Alternative using the exponentiation operator (**)
// return Math.PI * (radius ** 2);
\`\`\`
1. **\`Math.PI\`**: This is a built-in JavaScript constant that provides a high-precision value for Pi.
2. **\`Math.pow(base, exponent)\`**: This function calculates the \`base\` raised to the power of the \`exponent\`.

### 📚 Key Concepts
- **Mathematical Constants**: Using built-in constants like \`Math.PI\` for accuracy.
- **Geometric Formulas**: Applying mathematical formulas in code.
`,

  // problem explanation--> 12
  "mnc-celsius-to-fahrenheit": `
### 💡 Problem Breakdown
This task involves implementing the specific mathematical formula for converting a temperature from the Celsius scale to the Fahrenheit scale.

### ⚙️ Solution Walkthrough
The formula is \`F = (C * 9/5) + 32\`. The function takes a Celsius value, applies this formula, and returns the result.
\`\`\`javascript
function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
convertToFahrenheit(20); // 68
\`\`\`
The code is a direct translation of the formula. Operator precedence rules in JavaScript ensure that the multiplication and division happen before the addition, so no extra parentheses are needed.

### 📚 Key Concepts
- **Operator Precedence**: The standard order of operations is followed.
- **Formula Implementation**: Translating a mathematical formula into code.
`,

  // problem explanation--> 13
  "mnc-fahrenheit-to-celsius": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting a temperature from Fahrenheit to Celsius.

### ⚙️ Solution Walkthrough
The formula is \`C = (F - 32) * 5/9\`. The function takes a Fahrenheit value, applies this formula, and returns the result.
\`\`\`javascript
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
convertToCelsius(68); // 20
\`\`\`
In this case, parentheses are required around \`fahrenheit - 32\` to ensure the subtraction happens before the multiplication, correctly following the formula.

### 📚 Key Concepts
- **Grouping Operator ()**: Using parentheses to control the order of operations.
`,

  // problem explanation--> 14
  "mnc-is-integer": `
### 💡 Problem Breakdown
The task is to determine if a given value is a whole number (an integer), without using the modern \`Number.isInteger()\` method. This requires a check that works for both numbers and numeric strings.

### ⚙️ Solution Walkthrough
A robust check can be done using the remainder operator (\`%\`). An integer, when divided by 1, has a remainder of 0.
\`\`\`javascript
function isInteger(value) {
  // First, convert the value to a number. If it's not a valid number, it can't be an integer.
  const num = Number(value);
  if (isNaN(num)) {
    return false;
  }
  // Check if there's a remainder when divided by 1.
  return num % 1 === 0;
}
isInteger(10);    // true
isInteger(10.5);  // false
isInteger("10");  // true
isInteger("abc"); // false
\`\`\`
1. **Type Conversion**: We first attempt to convert the input to a number.
2. **Remainder Check**: The core of the logic is \`num % 1\`. For any integer, this will be 0. For any number with a fractional part, it will be non-zero.

### 📚 Key Concepts
- **Modulo Operator**: Used here to detect the presence of a fractional part.
`,

  // problem explanation--> 15
  "mnc-random-number-in-range": `
### 💡 Problem Breakdown
This is a common practical problem that builds on \`Math.random()\`. The goal is to generate a random *integer* between a specified minimum and maximum value, inclusive of both.

### ⚙️ Solution Walkthrough
The standard formula for this is:
\`\`\`javascript
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
\`\`\`
1.  **\`Math.random() * (max - min + 1)\`**: This generates a random decimal between 0 and the size of our range (e.g., if range is 1-10, size is 10).
2.  **\`Math.floor(...)\`**: This converts the random decimal into an integer.
3.  **\`... + min\`**: This shifts the range so that it starts at our desired minimum value.

### 📚 Key Concepts
- **Random Number Generation**: A common programming task with a standard formula.
- **\`Math.random()\`**: The core function that provides a random decimal between 0 and 1.
`,

  // problem explanation--> 16
  "mnc-mean-of-array": `
### 💡 Problem Breakdown
The mean is a measure of central tendency, commonly known as the average. To find the mean of a set of numbers, you first find their sum, and then divide that sum by the count of the numbers.

### ⚙️ Solution Walkthrough
The solution uses the \`Array.prototype.reduce()\` method to efficiently calculate the sum, and then divides by the array's length.
\`\`\`javascript
function findMean(arr) {
  if (arr.length === 0) return 0; // Handle edge case of empty array
  
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum / arr.length;
}
findMean([10, 20, 30, 40, 50]); // 30
\`\`\`
1. **Summation**: \`.reduce()\` is the most idiomatic way to sum an array. It iterates through the array, accumulating a single value.
2. **Division**: The calculated sum is divided by the number of elements.

### 📚 Key Concepts
- **Mean (Average)**: A fundamental statistical calculation.
- **\`Array.prototype.reduce()\`**: A powerful method for reducing an array to a single value.
`,

  // problem explanation--> 17
  "mnc-median-of-array": `
### 💡 Problem Breakdown
The median is the middle value in a sorted list of numbers. If the list has an odd number of elements, the median is the single middle element. If it has an even number, the median is the average of the two middle elements.

### ⚙️ Solution Walkthrough
1. **Sort**: The first and most important step is to sort the array numerically.
2. **Find Middle**: Calculate the middle index of the sorted array.
3. **Handle Odd/Even Length**:
   - If the array's length is odd, the median is the number at the middle index.
   - If the array's length is even, the median is the average of the number at \`mid - 1\` and the number at \`mid\`.
\`\`\`javascript
function findMedian(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}
\`\`\`
### 📚 Key Concepts
- **Median**: A measure of central tendency that is robust to outliers.
- **Sorting**: A prerequisite for finding the median.
`,

  // problem explanation--> 18
  "mnc-mode-of-array": `
### 💡 Problem Breakdown
The mode is the value that appears most frequently in a data set. A set can have one mode, more than one mode (multimodal), or no mode.

### ⚙️ Solution Walkthrough
A frequency map is the ideal data structure for this problem.
1.  **Build Frequency Map**: Create a \`Map\` to store each number and its frequency. Iterate through the input array and populate the map.
2.  **Find Max Frequency**: Iterate through the values of the map to find the highest frequency.
3.  **Find Modes**: Iterate through the map's entries. Any number whose frequency matches the max frequency is a mode. Collect all such numbers.

### 📚 Key Concepts
- **Mode**: A measure of central tendency.
- **Frequency Counting**: A common pattern for statistical problems, efficiently implemented with a \`Map\`.
`,

  // problem explanation--> 19
  "mnc-greatest-common-divisor": `
### 💡 Problem Breakdown
The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without leaving a remainder. The Euclidean algorithm is a very efficient method for computing the GCD.

### ⚙️ Solution Walkthrough
The iterative version of the Euclidean algorithm uses a \`while\` loop.
\`\`\`javascript
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b]; // Simultaneous assignment using destructuring
  }
  return a;
}
gcd(48, 18); // 6
\`\`\`
1. **Loop**: The loop continues as long as the second number, \`b\`, is not zero.
2. **Update**: In each iteration, \`a\` takes the value of \`b\`, and \`b\` takes the value of the remainder of the old \`a\` divided by the old \`b\`.
3. **Result**: When the loop terminates (\`b\` is 0), \`a\` will hold the GCD.

### 📚 Key Concepts
- **Euclidean Algorithm**: A classic and highly efficient algorithm for finding the GCD.
- **Destructuring Assignment**: Used here for a concise swap of variables.
`,

  // problem explanation--> 20
  "mnc-least-common-multiple": `
### 💡 Problem Breakdown
The Least Common Multiple (LCM) of two integers is the smallest positive integer that is divisible by both. The LCM can be calculated efficiently using the Greatest Common Divisor (GCD).

### ⚙️ Solution Walkthrough
The formula is: \`lcm(a, b) = |a * b| / gcd(a, b)\`.
1.  **Calculate GCD**: First, use the Euclidean algorithm to find the GCD of the two numbers.
2.  **Apply Formula**: Calculate the product of the absolute values of the two numbers.
3.  Divide the product by the GCD to get the LCM.
\`\`\`javascript
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  
  const gcd = (x, y) => { /* Euclidean algorithm */ };
  
  return Math.abs(a * b) / gcd(a, b);
}
\`\`\`
### 📚 Key Concepts
- **Relationship between GCD and LCM**: A fundamental property in number theory.
`,

  // problem explanation--> 21
  "mnc-is-perfect-square": `
### 💡 Problem Breakdown
A perfect square is an integer that is the square of an integer. For example, 9 is a perfect square because it is 3^2. The task is to check if a number has this property.

### ⚙️ Solution Walkthrough
A simple way to check is to take the square root of the number and see if the result is a whole number.
\`\`\`javascript
function isPerfectSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  // Check if the square root has no fractional part.
  return sqrt % 1 === 0;
}
isPerfectSquare(25); // true
isPerfectSquare(26); // false
\`\`\`
1. **Square Root**: \`Math.sqrt()\` is used to find the square root.
2. **Integer Check**: The remainder operator (\`% 1\`) is a concise way to check if a number is an integer. If the remainder when divided by 1 is 0, it's an integer.

### 📚 Key Concepts
- **Number Properties**: Leveraging the properties of square roots to solve the problem.
`,

  // problem explanation--> 22
  "mnc-square-root": `
### 💡 Problem Breakdown
The task is to implement a square root function without using the built-in \`Math.sqrt()\`. The Babylonian method is a classic and efficient iterative algorithm for this.

### ⚙️ Solution Walkthrough
The Babylonian method (a specific case of Newton's method) is an iterative approximation.
1. Start with an initial guess (e.g., \`x = n / 2\`).
2. Repeatedly refine the guess using the formula: \`new_guess = 0.5 * (old_guess + n / old_guess)\`.
3. After a certain number of iterations, the guess will be very close to the actual square root.
\`\`\`javascript
function sqrt(n) {
  if (n < 0) return NaN;
  let x = n;
  for (let i = 0; i < 20; i++) { // 20 iterations is plenty for good precision
    x = 0.5 * (x + n / x);
  }
  return x;
}
\`\`\`
### 📚 Key Concepts
- **Numerical Methods**: Algorithms that find approximate solutions to mathematical problems.
- **Iterative Approximation**: The process of starting with a guess and repeatedly refining it.
`,

  // problem explanation--> 23
  "mnc-decimal-to-binary": `
### 💡 Problem Breakdown
The goal is to convert a number from its standard base-10 (decimal) representation to a base-2 (binary) string.

### ⚙️ Solution Walkthrough
The built-in \`.toString()\` method of the \`Number\` type can take an optional "radix" (or base) argument.
\`\`\`javascript
function toBinary(n) {
  return n.toString(2);
}
toBinary(13); // "1101"
\`\`\`
A manual implementation would involve repeatedly taking the number modulo 2 to find the next binary digit, and then dividing the number by 2, until the number becomes 0.

### 📚 Key Concepts
- **Base Conversion**: The process of representing a number in a different numeral system.
- **\`Number.prototype.toString(radix)\`**: A built-in method for base conversion.
`,

  // problem explanation--> 24
  "mnc-binary-to-decimal": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting a binary string representation back into a base-10 (decimal) number.

### ⚙️ Solution Walkthrough
The global \`parseInt()\` function can take a second argument, the "radix" (or base), specifying the numeral system of the input string.
\`\`\`javascript
function toDecimal(binaryStr) {
  return parseInt(binaryStr, 2);
}
toDecimal("1101"); // 13
\`\`\`
This is the standard and most efficient way to perform this conversion.

### 📚 Key Concepts
- **Base Conversion**: A fundamental concept in computer science.
- **\`parseInt(string, radix)\`**: A built-in function for parsing strings of different bases.
`,

  // problem explanation--> 25
  "mnc-is-leap-year": `
### 💡 Problem Breakdown
The task is to determine if a given year is a leap year according to the Gregorian calendar rules.
1. The year must be divisible by 4.
2. However, if the year is divisible by 100, it is NOT a leap year...
3. ...UNLESS it is also divisible by 400.

### ⚙️ Solution Walkthrough
The rules can be translated directly into a logical expression.
\`\`\`javascript
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
isLeapYear(2000); // true (divisible by 400)
isLeapYear(1900); // false (divisible by 100 but not 400)
isLeapYear(2024); // true (divisible by 4 but not 100)
\`\`\`
### 📚 Key Concepts
- **Logical Operators**: The solution is a concise combination of logical AND (\`&&\`) and OR (\`||\`).
`,

  // problem explanation--> 26
  "mnc-sum-of-multiples": `
### 💡 Problem Breakdown
This is a classic problem. The goal is to find the sum of all the natural numbers below a given limit that are multiples of either 3 or 5.

### ⚙️ Solution Walkthrough
A straightforward solution is to loop through all the numbers up to the limit and check each one.
\`\`\`javascript
function sumMultiples(limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    // If the number is a multiple of 3 OR a multiple of 5...
    if (i % 3 === 0 || i % 5 === 0) {
      // ...add it to the sum.
      sum += i;
    }
  }
  return sum;
}
\`\`\`
### 📚 Key Concepts
- **Modulo Operator**: Used to check for divisibility.
- **Logical OR (\`||\`)**: Used to combine the two conditions.
`,

  // problem explanation--> 27
  "mnc-is-armstrong-number": `
### 💡 Problem Breakdown
An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because it has 3 digits and \`1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\`.

### ⚙️ Solution Walkthrough
1. **Convert to String**: Convert the input number to a string to easily access its digits and get its length.
2. **Get Number of Digits**: The length of the string is the power to which each digit must be raised.
3. **Loop and Sum**: Loop through the characters of the string.
   - In each iteration, convert the character back to a number.
   - Raise it to the power of the number of digits.
   - Add this result to a running sum.
4. **Compare**: After the loop, compare the final sum with the original input number.

### 📚 Key Concepts
- **Digit Manipulation**: The problem requires extracting and working with the individual digits of a number.
`,

  // problem explanation--> 28
  "mnc-is-perfect-number": `
### 💡 Problem Breakdown
A perfect number is a positive integer that is equal to the sum of its proper positive divisors (the sum of its positive divisors excluding the number itself). For example, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

### ⚙️ Solution Walkthrough
The solution involves finding all the proper divisors and summing them up.
1. **Initialization**: Start with a sum of 1 (since 1 is a proper divisor for all numbers > 1).
2. **Loop**: Iterate from 2 up to the square root of the number.
3. **Find Divisors**: If \`i\` divides \`n\`, then both \`i\` and \`n/i\` are divisors. Add both to the sum.
4. **Handle Square Root**: If \`i * i === n\`, \`i\` and \`n/i\` are the same, so only add it once.
5. **Compare**: After the loop, compare the calculated sum with the original number.

### 📚 Key Concepts
- **Number Theory**: The solution is based on the definition of divisors.
- **Optimization**: Looping only up to the square root is a key performance optimization for divisor-related problems.
`,

  // problem explanation--> 29
  "mnc-is-happy-number": `
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

  // problem explanation--> 30
  "mnc-collatz-conjecture": `
### 💡 Problem Breakdown
The Collatz conjecture is an unsolved problem in mathematics. It states that for any positive integer, repeatedly applying the following rules will eventually lead to 1:
- If the number is even, divide it by 2.
- If the number is odd, multiply it by 3 and add 1.
The task is to count how many steps this process takes.

### ⚙️ Solution Walkthrough
A \`while\` loop can be used to simulate the process.
1. Initialize a \`steps\` counter to 0.
2. Use a \`while\` loop that continues as long as \`n\` is not 1.
3. Inside the loop, apply the Collatz rules using an \`if/else\` statement or a ternary operator.
4. Increment the \`steps\` counter in each iteration.
5. Return the final \`steps\` count.

### 📚 Key Concepts
- **Algorithmic Simulation**: The code directly simulates the steps of the conjecture.
`,

  // problem explanation--> 31
  "mnc-roman-to-integer": `
### 💡 Problem Breakdown
The task is to convert a Roman numeral string (e.g., "MCMXCIV") into its integer equivalent (1994). The key challenge is handling the subtractive notation where a smaller value before a larger one means subtraction (e.g., "IV" is 4, not 6).

### ⚙️ Solution Walkthrough
A single pass through the string from left to right can solve this.
1. Create a map of Roman numeral characters to their integer values.
2. Initialize \`total\` to 0.
3. Loop through the string. For each character \`current\`, also look at the next character \`next\`.
   - If \`next\` exists and its value is greater than \`current\`'s value, it's a subtractive case. Subtract the \`current\` value from the total.
   - Otherwise, just add the \`current\` value to the total.
\`\`\`javascript
let total = 0;
for (let i = 0; i < roman.length; i++) {
    const currentVal = map[roman[i]];
    const nextVal = map[roman[i+1]];
    if (nextVal > currentVal) {
        total -= currentVal;
    } else {
        total += currentVal;
    }
}
\`\`\`
### 📚 Key Concepts
- **Mapping**: Using a hash map to store the value of each symbol.
- **Lookahead**: The logic depends on looking ahead one character to decide how to process the current one.
`,

  // problem explanation--> 32
  "mnc-integer-to-roman": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting an integer into its Roman numeral string representation.

### ⚙️ Solution Walkthrough
A greedy approach is effective. We want to subtract the largest possible Roman numeral value from our number at each step.
1. Create two parallel arrays: one with the integer values in descending order, and one with the corresponding Roman numeral symbols. Crucially, include the subtractive cases (e.g., 900 for "CM", 40 for "XL").
2. Initialize an empty \`result\` string.
3. Loop through the \`values\` array.
4. For each value, use a \`while\` loop: as long as the input \`num\` is greater than or equal to the current value, append the corresponding symbol to the \`result\` and subtract the value from \`num\`.
5. Continue until \`num\` becomes 0.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we greedily subtract the largest possible symbol value, which leads to the correct representation.
`,

  // problem explanation--> 33
  "mnc-sieve-of-eratosthenes": `
### 💡 Problem Breakdown
The Sieve of Eratosthenes is a highly efficient ancient algorithm for finding all prime numbers up to a specified integer. It works by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2.

### ⚙️ Solution Walkthrough
1.  **Initialization**: Create a boolean array \`isPrime\` of size \`limit + 1\` and initialize all entries to \`true\`. Mark 0 and 1 as not prime.
2.  **Outer Loop**: Iterate from 2 up to the square root of the limit.
3.  **Inner Loop (Marking Multiples)**: If the current number \`i\` is still marked as prime:
    -   Start from \`i*i\` and mark all subsequent multiples of \`i\` as not prime (\`isPrime[j] = false\`).
4.  **Collect Results**: After the loops complete, iterate through the \`isPrime\` array and collect all indices that are still marked as \`true\`.

### 📚 Key Concepts
-   **Sieve Algorithm**: A class of algorithms that work by iteratively filtering out elements based on a set of rules.
-   **Optimization**: Starting the inner loop from \`i*i\` is a key optimization, as smaller multiples of \`i\` would have already been marked by smaller primes.
`,

  // problem explanation--> 34
  "mnc-pascals-triangle": `
### 💡 Problem Breakdown
Pascal's Triangle is a triangular array of binomial coefficients. The task is to generate the first \`n\` rows of this triangle. Each number is the sum of the two numbers directly above it.

### ⚙️ Solution Walkthrough
An iterative solution can build the triangle row by row.
1.  **Initialization**: Start with the first row, \`[[1]]\`.
2.  **Outer Loop**: Loop from the second row up to the desired number of rows.
3.  **Build New Row**: For each new row:
    -   Start with a 1.
    -   Iterate through the previous row, summing adjacent elements to calculate the new row's inner values.
    -   End with a 1.
4.  Push the newly created row into the main triangle array.

### 📚 Key Concepts
-   **Dynamic Programming**: Each row is constructed based on the values from the previously computed row.
-   **Binomial Coefficients**: The numbers in the triangle represent the coefficients in the expansion of \`(a+b)^n\`.
`,

  // problem explanation--> 35
  "mnc-matrix-addition": `
### 💡 Problem Breakdown
Matrix addition is a straightforward operation. To add two matrices, they must have the same dimensions. The resulting matrix is found by adding the corresponding elements of the two input matrices.

### ⚙️ Solution Walkthrough
1.  **Dimension Check**: First, verify that the two input matrices have the same number of rows and columns.
2.  **Initialization**: Create a new result matrix of the same dimensions.
3.  **Nested Loops**: Use nested loops to iterate through each row \`r\` and column \`c\`.
4.  **Sum Elements**: For each position \`(r, c)\`, calculate the sum: \`result[r][c] = matrix1[r][c] + matrix2[r][c]\`.
5.  Return the result matrix.

### 📚 Key Concepts
-   **Matrix Operations**: A fundamental operation in linear algebra.
-   **Nested Iteration**: The standard way to process every element of a 2D array.
`,

  // problem explanation--> 36
  "mnc-matrix-multiplication": `
### 💡 Problem Breakdown
Matrix multiplication is more complex than addition. To multiply two matrices, the number of columns in the first matrix must be equal to the number of rows in the second. The resulting matrix will have the number of rows of the first matrix and the number of columns of the second.

### ⚙️ Solution Walkthrough
The value at position \`(i, j)\` in the result matrix is the dot product of the \`i\`-th row of the first matrix and the \`j\`-th column of the second matrix.
1.  **Dimension Check**: Verify compatibility.
2.  **Initialization**: Create a new result matrix of the correct dimensions, filled with zeros.
3.  **Triple Nested Loops**: Use three nested loops:
    -   Outer loops iterate through each row \`i\` and column \`j\` of the result matrix.
    -   The inner loop iterates through the columns of the first matrix (or rows of the second), calculating the dot product.
4.  **Calculation**: \`result[i][j] += matrix1[i][k] * matrix2[k][j]\`.

### 📚 Key Concepts
-   **Matrix Operations**: A fundamental operation in linear algebra.
-   **Dot Product**: The core calculation used within the multiplication process.
`,

  // problem explanation--> 37
  "mnc-permutations": `
### 💡 Problem Breakdown
The task is to generate all possible orderings (permutations) of the elements in a given array of distinct numbers.

### ⚙️ Solution Walkthrough
This is a classic backtracking problem that is typically solved with a recursive helper function.
1.  **\`backtrack(currentPermutation, remainingNums)\`**:
    -   **Base Case**: If there are no \`remainingNums\`, it means \`currentPermutation\` is a complete permutation. Add a copy of it to the main results list.
    -   **Recursive Step**: Loop through the \`remainingNums\`.
        -   For each number, "choose" it by adding it to the \`currentPermutation\`.
        -   Create a new list of remaining numbers that excludes the chosen one.
        -   Make a recursive call: \`backtrack(currentPermutation, newRemaining)\`.
        -   **"Un-choose"**: After the recursive call returns, remove the number from \`currentPermutation\`. This is the backtracking step that allows you to explore other paths.

### 📚 Key Concepts
-   **Backtracking**: An algorithmic technique for solving problems recursively by trying to build a solution incrementally and "undoing" choices that don't lead to a solution.
`,

  // problem explanation--> 38
  "mnc-combinations": `
### 💡 Problem Breakdown
The task is to find all possible combinations of a specific size \`k\` from the numbers in an array. Unlike permutations, the order of elements in a combination does not matter, so \`[1, 2]\` is the same as \`[2, 1]\`.

### ⚙️ Solution Walkthrough
This is another backtracking problem.
1.  **\`backtrack(currentCombination, start)\`**:
    -   **Base Case**: If \`currentCombination.length === k\`, we have found a valid combination. Add a copy to the results list and return.
    -   **Recursive Step**: Loop from the \`start\` number up to the end of the array.
        -   "Choose" the current number by adding it to \`currentCombination\`.
        -   Make a recursive call, but crucially, the next level of the search should start from \`i + 1\` to ensure we don't reuse the same number and we only generate combinations in increasing order (which prevents duplicates like \`[1, 2]\` and \`[2, 1]\`).
        -   **"Un-choose"**: Backtrack by popping the number from \`currentCombination\`.

### 📚 Key Concepts
-   **Backtracking**: The core algorithm for exploring the solution space.
-   **Combinations vs. Permutations**: The key difference in the implementation is how the "remaining" elements are chosen for the next recursive step.
`,

  // problem explanation--> 39
  "mnc-fast-exponentiation": `
### 💡 Problem Breakdown
This is an efficient way to calculate powers, especially for large exponents. The standard method takes O(n) steps, but this method takes O(log n). The logic relies on these properties:
- \`x^n = (x^2)^(n/2)\` if n is even.
- \`x^n = x * x^(n-1)\` if n is odd.

### ⚙️ Solution Walkthrough
An iterative solution using a \`while\` loop is very efficient.
1.  Initialize \`result = 1\`.
2.  Loop while the exponent \`e\` is greater than 0.
3.  If \`e\` is odd, multiply the \`result\` by the current \`base\`.
4.  Square the \`base\` (\`base = base * base\`).
5.  Halve the exponent (\`e = Math.floor(e / 2)\`).
6.  Return the result.

### 📚 Key Concepts
-   **Time Complexity Optimization**: A clear example of how a different algorithm can lead to a significant performance improvement.
-   **Binary Exponentiation**: The algorithm is also known by this name because it effectively processes the bits of the exponent.
`,

  // problem explanation--> 40
  "mnc-digital-root": `
### 💡 Problem Breakdown
The digital root of a number is the single-digit value obtained by an iterative process of summing digits. The process continues until a single-digit number is reached. There is a mathematical shortcut to calculate this directly.

### ⚙️ Solution Walkthrough
For any positive integer \`n\`, the digital root is:
- \`0\` if \`n = 0\`
- \`9\` if \`n % 9 === 0\`
- \`n % 9\` otherwise.
This can be expressed concisely as \`1 + (n - 1) % 9\`.
\`\`\`javascript
function digitalRoot(n) {
  if (n === 0) return 0;
  return 1 + (n - 1) % 9;
}
digitalRoot(942); // 9+4+2=15 -> 1+5=6.  (942-1)%9 = 941%9 = 5. 1+5=6.
\`\`\`
### 📚 Key Concepts
-   **Digital Root**: A concept from number theory.
-   **Modular Arithmetic**: The shortcut formula relies on the properties of modulus 9.
`,

  // problem explanation--> 41
  "mnc-base-conversion": `
### 💡 Problem Breakdown
This problem involves converting a number represented as a string from one base (like base-16, hexadecimal) to another base (like base-10, decimal).

### ⚙️ Solution Walkthrough
JavaScript has built-in functions that make this a two-step process.
1.  **Parse to Decimal**: First, use \`parseInt(numberString, fromBase)\` to convert the input string into a standard base-10 number.
2.  **Format to New Base**: Then, use the \`.toString(toBase)\` method on the resulting number to get its string representation in the new base.
\`\`\`javascript
function convertBase(numStr, fromBase, toBase) {
  const decimalValue = parseInt(numStr, fromBase);
  return decimalValue.toString(toBase).toUpperCase();
}
convertBase("1A", 16, 10); // 26
convertBase("26", 10, 16); // "1A"
\`\`\`
### 📚 Key Concepts
- **\`parseInt(string, radix)\`**: A built-in function for parsing strings of different bases.
- **\`Number.prototype.toString(radix)\`**: A built-in method for formatting a number into a string of a different base.
`,

  // problem explanation--> 42
  "mnc-is-power-of-two": `
### 💡 Problem Breakdown
The goal is to determine if a given positive integer is a power of two (e.g., 1, 2, 4, 8, 16, ...).

### ⚙️ Solution Walkthrough
A clever and highly efficient bitwise trick can solve this. A number is a power of two if and only if it is positive and has exactly one bit set to '1' in its binary representation.
-   If \`n = 8\` (binary \`1000\`)
-   Then \`n - 1 = 7\` (binary \`0111\`)
-   \`n & (n - 1)\` becomes \`1000 & 0111\`, which is \`0000\`.

This pattern holds for all powers of two.
\`\`\`javascript
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
\`\`\`
### 📚 Key Concepts
- **Bitwise AND (&)**: The core of the efficient solution.
- **Binary Representation**: Understanding the binary properties of powers of two.
`,

  // problem explanation--> 43
  "mnc-missing-number-in-sequence": `
### 💡 Problem Breakdown
You are given an array containing \`n\` distinct numbers taken from the sequence \`0, 1, 2, ..., n\`. This means there is exactly one number missing. The task is to find it.

### ⚙️ Solution Walkthrough
A mathematical approach using Gauss's summation formula is very efficient.
1.  **Expected Sum**: The sum of all numbers from 0 to \`n\` is calculated using the formula \`n * (n + 1) / 2\`. Here, \`n\` is the expected length of the full sequence, which is \`nums.length\`.
2.  **Actual Sum**: Calculate the sum of all the numbers in the input array.
3.  **Difference**: The difference between the expected sum and the actual sum is the missing number.
\`\`\`javascript
function findMissing(nums) {
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
\`\`\`
### 📚 Key Concepts
- **Summation Formula**: Using a mathematical formula to avoid iterating up to \`n\`.
- **Gap Analysis**: Finding the missing element by comparing the expected state to the actual state.
`,

  // problem explanation--> 44
  "mnc-plus-one": `
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

  // problem explanation--> 45
  "mnc-excel-column-number": `
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

  // problem explanation--> 46
  "mnc-excel-column-title": `
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

  // problem explanation--> 47
  "mnc-single-number": `
### 💡 Problem Breakdown
Given an array where every number appears twice except for one, the task is to find that single unique number.

### ⚙️ Solution Walkthrough
A very elegant and efficient solution uses the bitwise XOR (\`^\`) operator. XOR has two key properties:
1. \`x ^ x = 0\` (XORing a number with itself results in zero).
2. \`x ^ 0 = x\` (XORing a number with zero results in the number itself).

If you XOR all the numbers in the array together, all the paired numbers will cancel each other out (\`n ^ n = 0\`), leaving only the unique number.
\`\`\`javascript
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
\`\`\`
### 📚 Key Concepts
- **Bitwise XOR (\`^\`)**: Leveraging its mathematical properties provides a clever O(n) time and O(1) space solution.
`,

  // problem explanation--> 48
  "mnc-add-binary": `
### 💡 Problem Breakdown
This problem is similar to "Add Strings," but the arithmetic is in base-2 (binary). The task is to add two binary strings and return their sum as a binary string.

### ⚙️ Solution Walkthrough
A simple approach is to use JavaScript's built-in support for large integers (\`BigInt\`) which can handle binary representations.
1. **Convert to BigInt**: Prepend \`0b\` to the binary strings to tell the \`BigInt\` constructor to parse them as binary.
2. **Add**: Add the two \`BigInt\` numbers together.
3. **Convert back to Binary String**: Use the \`.toString(2)\` method on the resulting sum to get its binary string representation.
\`\`\`javascript
function addBinary(a, b) {
  const sum = BigInt(\`0b\${a}\`) + BigInt(\`0b\${b}\`);
  return sum.toString(2);
}
\`\`\`
A manual, right-to-left addition with a carry variable is also a common way to solve this without relying on \`BigInt\`.

### 📚 Key Concepts
- **\`BigInt\`**: A built-in type for handling arbitrarily large integers.
- **Base Conversion**: Converting to and from different number bases.
`,

  // problem explanation--> 49
  "mnc-trailing-zeroes-in-factorial": `
### 💡 Problem Breakdown
The task is to find the number of trailing zeros in the factorial of a number \`n\`. A trailing zero is created by a factor of 10. Since 10 = 2 * 5, the number of trailing zeros is limited by the number of factors of 5 in the prime factorization of n!.

### ⚙️ Solution Walkthrough
We only need to count the factors of 5.
1. The number of factors of 5 is the sum of \`floor(n/5)\`, \`floor(n/25)\`, \`floor(n/125)\`, and so on.
2. A simple loop can calculate this.
\`\`\`javascript
function trailingZeroes(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
\`\`\`
### 📚 Key Concepts
- **Number Theory**: Understanding the prime factorization of factorials.
`,

  // problem explanation--> 50
  "mnc-ugly-number": `
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

  // problem explanation--> 51
  "mnc-count-primes": `
### 💡 Problem Breakdown
The goal is to count the number of prime numbers that are strictly less than a given number \`n\`.

### ⚙️ Solution Walkthrough
A naive approach would be to iterate up to \`n\` and check each number for primality, but this is inefficient. The Sieve of Eratosthenes is a highly efficient algorithm for this.
1. **Initialize**: Create a boolean array \`isPrime\` of size \`n\`, and initialize all entries to \`true\`. Mark 0 and 1 as not prime.
2. **Sieve**: Loop from \`p = 2\` up to \`sqrt(n)\`.
   - If \`isPrime[p]\` is still \`true\`, then \`p\` is a prime number.
   - Mark all multiples of \`p\` (starting from \`p*p\`) as not prime by setting their entries in the array to \`false\`.
3. **Count**: After the loop, count the number of \`true\` values remaining in the \`isPrime\` array.

### 📚 Key Concepts
- **Sieve of Eratosthenes**: A classic and efficient algorithm for finding all prime numbers up to a specified integer.
`,

  // problem explanation--> 52
  "mnc-add-digits": `
### 💡 Problem Breakdown
The task is to repeatedly sum the digits of a number until a single-digit result is obtained. This is also known as finding the "digital root".

### ⚙️ Solution Walkthrough
While an iterative solution with loops works, there's a direct mathematical formula. For any positive integer, the digital root is:
- 0 if the number is 0.
- 9 if the number is a multiple of 9.
- \`n % 9\` otherwise.
This can be condensed into a single expression: \`1 + (n - 1) % 9\`.

### 📚 Key Concepts
- **Digital Root**: The single-digit value obtained by an iterative process of summing digits.
- **Modular Arithmetic**: The mathematical trick relies on properties of modulus 9.
`,

  // problem explanation--> 53
  "mnc-valid-perfect-square": `
### 💡 Problem Breakdown
The goal is to determine if a number is a perfect square without using \`Math.sqrt\`. A perfect square is an integer that is the square of an integer.

### ⚙️ Solution Walkthrough
Binary search is an efficient way to find the integer whose square might be equal to the given number.
1. **Search Space**: Search for the square root in the range from 0 to \`num\`.
2. **Binary Search**:
   - In each step, pick a \`mid\` value.
   - Calculate \`mid * mid\`.
   - If it equals \`num\`, you've found the root, so it's a perfect square.
   - If it's less than \`num\`, search in the upper half.
   - If it's greater than \`num\`, search in the lower half.
3. If the loop finishes without finding an exact match, it's not a perfect square.

### 📚 Key Concepts
- **Binary Search**: An efficient algorithm for searching in a sorted range of possibilities.
`,

  // problem explanation--> 54
  "mnc-arranging-coins": `
### 💡 Problem Breakdown
You want to build a staircase where the \`i\`-th row has \`i\` coins. Given \`n\` coins, the task is to find how many complete rows you can form. The total coins needed for \`k\` rows is the sum 1 + 2 + ... + k, which is \`k * (k + 1) / 2\`.

### ⚙️ Solution Walkthrough
The problem is to find the largest \`k\` such that \`k * (k + 1) / 2 <= n\`. This can be solved by rearranging the quadratic equation and solving for \`k\`, which leads to a direct mathematical formula.
\`\`\`javascript
function arrangeCoins(n) {
  // We need to find k such that k*(k+1) <= 2*n
  // This is a quadratic equation k^2 + k - 2n <= 0
  // The positive root is (-1 + sqrt(1 + 8n)) / 2
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
}
\`\`\`
An iterative or binary search solution is also possible but less direct.

### 📚 Key Concepts
- **Arithmetic Series**: The sum of coins forms an arithmetic series.
- **Quadratic Formula**: The mathematical basis for the direct O(1) solution.
`,

  // problem explanation--> 55
  "mnc-diophantine-equation": `
### 💡 Problem Breakdown
A linear Diophantine equation is an equation of the form \`ax + by = c\`, where a, b, and c are given integers, and we are looking for integer solutions for x and y.

### ⚙️ Solution Walkthrough
Bézout's identity states that an integer solution (x, y) exists if and only if the greatest common divisor (GCD) of a and b divides c. The Extended Euclidean Algorithm is used to find the GCD and a pair of coefficients.
1.  **Find GCD**: Calculate \`g = gcd(a, b)\`.
2.  **Check Divisibility**: If \`c % g !== 0\`, no integer solution exists.
3.  **Find Solution for gcd**: Use the Extended Euclidean Algorithm to find coefficients x' and y' such that \`ax' + by' = gcd(a, b)\`.
4.  **Scale Solution**: The final solution for the original equation is \`x = x' * (c / g)\` and \`y = y' * (c / g)\`.
This problem is conceptually advanced and the solver often shows a conceptual placeholder.

### 📚 Key Concepts
- **Bézout's Identity**: The core mathematical theorem for solvability.
- **Extended Euclidean Algorithm**: The algorithm used to find the coefficients.
`,

  // problem explanation--> 56
  "mnc-pythagorean-triplet": `
### 💡 Problem Breakdown
A Pythagorean triplet is a set of three positive integers a, b, and c such that \`a^2 + b^2 = c^2\`. The task is to find if such a triplet exists within a given array.

### ⚙️ Solution Walkthrough
An efficient solution involves sorting and a two-pointer approach.
1.  **Square and Sort**: Create a new array by squaring every number in the input array. Then, sort this new array in ascending order.
2.  **Iterate and Search**: Loop through the sorted array of squares from right to left. Let the current element be \`c_squared\`.
3.  **Two-Pointer Search**: For each \`c_squared\`, use two pointers, \`left\` at the beginning of the array and \`right\` just before the current element.
4.  Check if \`left_squared + right_squared === c_squared\`.
    - If they are equal, a triplet is found, return \`true\`.
    - If the sum is too small, move \`left\` pointer up.
    - If the sum is too large, move \`right\` pointer down.
5.  If the loop completes without finding a triplet, return \`false\`.

### 📚 Key Concepts
- **Problem Transformation**: The problem is made easier by squaring all numbers first.
- **Two-Pointer Technique**: An efficient way to search for a pair that sums to a target in a sorted array.
`,

  // problem explanation--> 57
  "mnc-complex-number-multiplication": `
### 💡 Problem Breakdown
The task is to multiply two complex numbers given in string format (e.g., "a+bi"). The formula for multiplying two complex numbers \`(a + bi) * (c + di)\` is \`(ac - bd) + (ad + bc)i\`.

### ⚙️ Solution Walkthrough
1.  **Parse**: Parse the real and imaginary parts from both input strings. This can be done by splitting the string at the '+' and removing the 'i'.
2.  **Apply Formula**: Let the first number be \`a + bi\` and the second be \`c + di\`.
    - Calculate the new real part: \`newReal = (a * c) - (b * d)\`.
    - Calculate the new imaginary part: \`newImag = (a * d) + (b * c)\`.
3.  **Format Output**: Combine the new real and imaginary parts back into the "a+bi" string format.

### 📚 Key Concepts
- **Complex Number Arithmetic**: Applying the standard rules for complex number multiplication.
- **String Parsing**: Extracting numerical data from a formatted string.
`,

  // problem explanation--> 58
  "mnc-fraction-to-recurring-decimal": `
### 💡 Problem Breakdown
This is a challenging problem that requires simulating long division and detecting when a remainder repeats, which indicates the start of a recurring decimal cycle.

### ⚙️ Solution Walkthrough
1.  **Handle Sign**: Determine the sign of the result and work with absolute values of the numerator and denominator.
2.  **Integer Part**: Calculate the integer part of the division.
3.  **Fractional Part**:
    - Get the initial remainder.
    - Use a hash map to store each remainder encountered and the position in the result string where it occurred.
    - In a loop:
        - If the remainder is 0, the division is complete.
        - If the remainder has been seen before in the map, a recurring cycle is found. Insert an opening parenthesis at the position stored in the map and a closing parenthesis at the end of the fractional part.
        - If the remainder is new, store it in the map.
        - Multiply the remainder by 10, calculate the next digit of the quotient, and the new remainder.

### 📚 Key Concepts
- **Long Division Simulation**: The algorithm directly models the process of long division.
- **Cycle Detection**: Using a hash map to detect repeating remainders is the key to identifying the recurring part.
`,

  // problem explanation--> 59
  "mnc-pow-x-n": `
### 💡 Problem Breakdown
The task is to implement the power function \`pow(x, n)\`, which calculates \`x\` raised to the power of \`n\`. This needs to be done efficiently, especially for large exponents, and must handle negative exponents.

### ⚙️ Solution Walkthrough
A naive solution would use a loop to multiply \`x\` by itself \`n\` times, which is too slow (O(n)). The efficient solution is **Exponentiation by Squaring** (O(log n)).
1.  **Handle Negative Exponent**: If \`n\` is negative, the problem becomes \`1 / pow(x, -n)\`.
2.  **Iterative Squaring**:
    - Initialize \`result = 1\`.
    - Loop while \`n > 0\`.
    - If \`n\` is odd, multiply the result by the current \`x\`.
    - Square \`x\` (\`x = x * x\`).
    - Halve \`n\` (integer division: \`n = Math.floor(n / 2)\`).
3.  Return the result.

### 📚 Key Concepts
- **Exponentiation by Squaring**: A classic, highly efficient algorithm for computing powers.
`,

  // problem explanation--> 60
  "mnc-multiply-strings": `
### 💡 Problem Breakdown
The task is to multiply two large numbers represented as strings, avoiding the use of built-in BigInt libraries.

### ⚙️ Solution Walkthrough
The solution simulates grade-school multiplication.
1.  **Initialize**: Create a \`result\` array of size \`len1 + len2\`, filled with zeros.
2.  **Nested Loops**: Loop through the first number (\`num1\`) from right to left. Inside, loop through the second number (\`num2\`) from right to left.
3.  **Multiply and Sum**: For each pair of digits, multiply them. Add this product to the appropriate position in the \`result\` array. This involves handling a "carry" just like manual multiplication. The product of \`num1[i]\` and \`num2[j]\` will affect the positions \`result[i + j]\` and \`result[i + j + 1]\`.
4.  **Final Result**: After the loops, the \`result\` array contains the digits of the product. Format it as the final string, handling any leading zeros.

### 📚 Key Concepts
- **Array as Number**: Using an array to handle arithmetic on numbers larger than the standard limits.
- **Manual Arithmetic Simulation**: The algorithm directly models the process of long multiplication taught in school.
`,

  // problem explanation--> 61
  "mnc-angle-between-hands-of-a-clock": `
### 💡 Problem Breakdown
The task is to find the smaller angle between the hour and minute hands of a clock at a given time.

### ⚙️ Solution Walkthrough
1.  **Minute Hand Angle**: The minute hand moves 360 degrees in 60 minutes, which is 6 degrees per minute. Its angle from the 12 o'clock position is \`minutes * 6\`.
2.  **Hour Hand Angle**: The hour hand moves 360 degrees in 12 hours, which is 0.5 degrees per minute. Its position is affected by both the hour and the minutes. Its angle is \`(hour % 12 + minutes / 60) * 30\`.
3.  **Difference**: Calculate the absolute difference between the two angles.
4.  **Smaller Angle**: The angle could be the direct difference or the reflex angle (\`360 - difference\`). The problem asks for the smaller one, so return \`Math.min(angle, 360 - angle)\`.

### 📚 Key Concepts
- **Rate of Change**: The solution depends on calculating the precise position of each hand based on its rate of movement.
`,

  // problem explanation--> 62
  "mnc-bulb-switcher": `
### 💡 Problem Breakdown
This is a classic number theory puzzle. A bulb's final state (on or off) depends on how many times it was toggled. It's toggled on round \`i\` if \`i\` is a divisor of the bulb's number. A bulb remains on if it is toggled an odd number of times.

### ⚙️ Solution Walkthrough
A number has an odd number of divisors if and only if it is a **perfect square**. For example, the divisors of 9 are 1, 3, and 9 (3 divisors). The divisors of 10 are 1, 2, 5, 10 (4 divisors). Therefore, the problem reduces to finding how many perfect squares there are up to \`n\`. The number of perfect squares less than or equal to \`n\` is simply the integer part of the square root of \`n\`.

### 📚 Key Concepts
- **Number Theory**: The solution relies on understanding the properties of divisors.
- **Perfect Squares**: A number that is the square of an integer.
`,

  // problem explanation--> 63
  "mnc-nth-digit": `
### 💡 Problem Breakdown
This is a challenging mathematical problem. The goal is to find the nth digit in the infinite sequence of integers: 1, 2, 3, ..., 9, 10, 11, ...

### ⚙️ Solution Walkthrough
1.  **Find the Length**: First, determine how many digits the number containing the nth digit has. There are 9 one-digit numbers, 90 two-digit numbers, 900 three-digit numbers, and so on.
2.  **Find the Number**: Once you know the length, find the specific number that contains the nth digit.
3.  **Find the Digit**: Finally, find the specific digit within that number.

### 📚 Key Concepts
- **Mathematical Pattern Recognition**: The solution requires analyzing the pattern of how many digits are used by numbers of different lengths.
`,

  // problem explanation--> 64
  "mnc-string-to-integer-atoi": `
### 💡 Problem Breakdown
The goal is to implement a function that converts a string to an integer, similar to the C \`atoi\` function, while handling specific rules for whitespace, signs, and overflow.

### ⚙️ Solution Walkthrough
The built-in \`parseInt()\` function handles most of the parsing logic. The main task is to clamp the result to the 32-bit signed integer range.
1.  **\`parseInt(s.trim(), 10)\`**: This trims whitespace and parses the integer.
2.  **Range Clamping**: The result is compared against the \`INT_MAX\` and \`INT_MIN\` constants and adjusted if it falls outside the range.

### 📚 Key Concepts
- **String Parsing**: A common task in programming.
- **Integer Overflow**: Handling cases where a number exceeds the limits of its data type.
`,

  // problem explanation--> 65
  "mnc-integer-break": `
### 💡 Problem Breakdown
Given an integer \`n\`, the task is to break it into a sum of at least two positive integers, and then maximize the product of those integers.

### ⚙️ Solution Walkthrough
This can be solved with dynamic programming, but a mathematical insight provides a simpler greedy solution. The best numbers to break \`n\` into are 2s and 3s. It's always better to use 3s where possible.
- **Greedy Strategy**:
  1.  Handle small base cases for n=2 and n=3.
  2.  While \`n > 4\`, repeatedly subtract 3 and multiply the result by 3.
  3.  The remaining \`n\` will be 2, 3, or 4. Multiply the result by this remaining \`n\`.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy choice of using as many 3s as possible leads to the optimal product.
`,

  // problem explanation--> 66
  "mnc-water-and-jug-problem": `
### 💡 Problem Breakdown
This problem is about determining if a target volume \`z\` can be measured using two jugs with capacities \`x\` and \`y\`. This is a classic problem that can be solved using Bézout's identity.

### ⚙️ Solution Walkthrough
Any amount of water that can be measured will be a linear combination of \`x\` and \`y\`, meaning it will be a multiple of their greatest common divisor (GCD).
1.  **Edge Case**: If \`x + y < z\`, it's impossible.
2.  **Bézout's Identity**: A solution exists if and only if \`z\` is divisible by \`gcd(x, y)\`.
3.  Calculate the GCD of \`x\` and \`y\` and check if \`z\` is divisible by it.

### 📚 Key Concepts
- **Bézout's Identity**: A fundamental theorem in number theory.
`,

  // problem explanation--> 67
  "mnc-nim-game": `
### 💡 Problem Breakdown
This is a classic impartial game. The state of the game is determined by the number of stones. The key is to find a winning and losing strategy.

### ⚙️ Solution Walkthrough
The losing positions are multiples of 4. If the number of stones is a multiple of 4, no matter how many stones you take (1, 2, or 3), you will leave a number of stones that is not a multiple of 4. Your opponent can then always make a move to leave you with a multiple of 4. This continues until you are left with 4 stones, and you lose.
Therefore, you can win if and only if the starting number of stones is **not** a multiple of 4.

### 📚 Key Concepts
- **Game Theory**: Identifying winning and losing positions in a game.
`,

  // problem explanation--> 68
  "mnc-super-pow": `
### 💡 Problem Breakdown
This is a difficult number theory problem that involves calculating \`(a^b) mod m\`, where \`b\` is a very large number given as an array of digits.

### ⚙️ Solution Walkthrough
This requires understanding properties of modular arithmetic, specifically Euler's totient theorem. A key property is that \`a^b mod m = a^(b mod φ(m)) mod m\`.
1.  Calculate the exponent \`b\` modulo \`φ(1337)\`.
2.  Use a modular exponentiation algorithm to calculate \`a\` raised to this new, smaller exponent, all under modulo 1337.

### 📚 Key Concepts
- **Modular Exponentiation**: An efficient algorithm for calculating powers under a modulus.
- **Euler's Totient Theorem**: A key theorem for reducing large exponents in modular arithmetic.
`,

  // problem explanation--> 69
  "mnc-largest-triangle-area": `
### 💡 Problem Breakdown
The task is to find the area of the largest triangle that can be formed from any three points in a given list.

### ⚙️ Solution Walkthrough
A brute-force approach is feasible given the constraints.
1.  **Triple Loop**: Use three nested loops to iterate through all possible combinations of three distinct points from the list.
2.  **Shoelace Formula**: For each triplet of points \`(x1, y1)\`, \`(x2, y2)\`, \`(x3, y3)\`, calculate the area using the Shoelace formula:
    \`Area = 0.5 * |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|\`
3.  **Track Maximum**: Keep track of the maximum area found so far.

### 📚 Key Concepts
- **Shoelace Formula**: A mathematical formula for finding the area of a polygon given the coordinates of its vertices.
- **Combinatorics**: The nested loops generate all combinations of size 3.
`,

  // problem explanation--> 70
  "mnc-minimum-moves-to-equal-array-elements": `
### 💡 Problem Breakdown
The problem states that a "move" consists of incrementing \`n-1\` elements by 1. This is a tricky way of saying that a move is equivalent to decrementing a single element by 1. The goal is to make all elements equal. To do this, all elements must eventually be equal to the original minimum element.

### ⚙️ Solution Walkthrough
The total number of moves is the sum of the differences between each element and the minimum element.
1.  Find the minimum value in the array.
2.  Use \`reduce\` to calculate the sum of \`(num - min)\` for every \`num\` in the array.

### 📚 Key Concepts
- **Problem Reframing**: The key insight is realizing that incrementing \`n-1\` elements is equivalent to decrementing one element relative to the others.
`,

  // problem explanation--> 71
  "mnc-matrix-transpose": `
### 💡 Problem Breakdown
Transposing a matrix is the operation of swapping its rows and columns. The element at \`(r, c)\` in the original matrix moves to \`(c, r)\` in the transposed matrix.

### ⚙️ Solution Walkthrough
1. Determine the dimensions of the original matrix (\`R\` rows and \`C\` columns).
2. Create a new, empty matrix with the dimensions swapped (it will have \`C\` rows and \`R\` columns).
3. Use nested loops to iterate through the original matrix.
4. In each iteration, copy the element \`matrix[r][c]\` to \`transposed[c][r]\`.

### 📚 Key Concepts
- **Matrix Operations**: A common topic in linear algebra and computer graphics.
`,

  // problem explanation--> 72
  "mnc-determinant-2x2": `
### 💡 Problem Breakdown
The determinant is a scalar value that can be computed from the elements of a square matrix. For a 2x2 matrix \`[[a, b], [c, d]]\`, the formula is simple.

### ⚙️ Solution Walkthrough
Directly apply the formula \`ad - bc\`.
\`\`\`javascript
const [[a, b], [c, d]] = matrix;
return a * d - b * c;
\`\`\`

### 📚 Key Concepts
- **Linear Algebra**: The determinant is a fundamental concept.
`,

  // problem explanation--> 73
  "mnc-dot-product": `
### 💡 Problem Breakdown
The dot product of two vectors is the sum of the products of their corresponding elements.

### ⚙️ Solution Walkthrough
1.  Check if the vectors have the same length.
2.  Use a loop or the \`reduce\` method to iterate through one vector.
3.  In each step, multiply the element \`v1[i]\` by \`v2[i]\` and add it to a running sum.
4.  Return the final sum.

### 📚 Key Concepts
- **Linear Algebra**: The dot product is a fundamental vector operation.
`,

  // problem explanation--> 74
  "mnc-amicable-numbers": `
### 💡 Problem Breakdown
Amicable numbers are a pair of different numbers where the sum of the proper divisors of each is equal to the other number.

### ⚙️ Solution Walkthrough
1.  Write a helper function \`sumOfProperDivisors(n)\`. This function iterates from 1 up to \`n/2\` and sums up all numbers that divide \`n\`.
2.  Calculate \`sum1 = sumOfProperDivisors(num1)\` and \`sum2 = sumOfProperDivisors(num2)\`.
3.  Check the two conditions: \`num1 !== num2\` and \`sum1 === num2\` and \`sum2 === num1\`.

### 📚 Key Concepts
- **Number Theory**: Based on the concept of divisors.
`,

  // problem explanation--> 75
  "mnc-catalan-numbers": `
### 💡 Problem Breakdown
Catalan numbers are a sequence of natural numbers that occur in various counting problems. The task is to compute the nth Catalan number.

### ⚙️ Solution Walkthrough
A recursive solution with memoization or a bottom-up dynamic programming approach is needed, as the naive recursion is too slow. A direct formula also exists: \`C_n = (1/(n+1)) * C(2n, n)\`, where \`C(2n, n)\` is the binomial coefficient.

### 📚 Key Concepts
- **Combinatorics**: Catalan numbers are a key sequence in this field.
- **Dynamic Programming**: The standard way to compute the sequence efficiently.
`,

  // problem explanation--> 76
  "mnc-count-and-say": `
### 💡 Problem Breakdown
This is a sequence generation problem. Each term is generated by reading out the previous term.
- \`1\` is read as "one 1" -> \`11\`
- \`11\` is read as "two 1s" -> \`21\`
- \`21\` is read as "one 2, one 1" -> \`1211\`

### ⚙️ Solution Walkthrough
An iterative approach is straightforward.
1.  Start with the first term, "1".
2.  Loop from 2 up to \`n\`. In each iteration, build the next term:
    - Iterate through the current term, counting consecutive identical digits.
    - When a digit changes or you reach the end, append the count and the digit to the new term string.
    - Replace the current term with the new term.

### 📚 Key Concepts
- **Sequence Generation**: Building up a sequence term by term.
`,

  // problem explanation--> 77
  "mnc-spiral-matrix": `
### 💡 Problem Breakdown
The task is to traverse a 2D array (matrix) in a spiral pattern, starting from the top-left corner and moving inward.

### ⚙️ Solution Walkthrough
The solution uses four pointers to keep track of the boundaries of the current layer of the spiral (\`top\`, \`bottom\`, \`left\`, \`right\`). The algorithm iteratively traverses the outer layer and then shrinks the boundaries inward until they cross.

### 📚 Key Concepts
- **Boundary Pointers**: The four pointers effectively shrink the matrix layer by layer.
- **Matrix Traversal**: A common pattern for processing 2D data structures.
`,

  // problem explanation--> 78
  "mnc-rotate-image": `
### 💡 Problem Breakdown
The task is to rotate an N x N matrix by 90 degrees clockwise, *in-place*.

### ⚙️ Solution Walkthrough
A clever two-step process can achieve this in-place.
1.  **Transpose the Matrix**: Swap the element at \`(r, c)\` with the element at \`(c, r)\`.
2.  **Reverse Each Row**: After transposing, reverse each individual row of the matrix.

### 📚 Key Concepts
- **Matrix Operations**: The solution is based on a linear algebra insight that rotation can be decomposed into transposition and reflection.
`,

  // problem explanation--> 79
  "mnc-set-matrix-zeroes": `
### 💡 Problem Breakdown
The task is to modify a matrix in-place. If any cell is 0, its entire row and column should be set to 0.

### ⚙️ Solution Walkthrough
A naive approach can lead to a cascade of zeros. An O(m+n) space solution is simple:
1.  **First Pass (Identify)**: Use two \`Set\`s to store the indices of rows and columns that need to be zeroed.
2.  **Second Pass (Modify)**: Iterate through the matrix again. If a cell's row or column is in the respective set, set the cell to 0.
An O(1) space solution uses the first row and column of the matrix itself as markers.

### 📚 Key Concepts
- **Two-Pass Algorithm**: A pattern where the first pass gathers information and the second performs modifications.
`,

  // problem explanation--> 80
  "mnc-valid-sudoku": `
### 💡 Problem Breakdown
The task is to validate a potentially partially filled Sudoku board. You only need to check that the filled cells adhere to the rules (no repeats in any row, column, or 3x3 box).

### ⚙️ Solution Walkthrough
The most straightforward solution is to iterate through the board and use \`Set\`s to check for duplicates.
1.  Create \`Set\`s to track numbers seen in each row, each column, and each 3x3 sub-box.
2.  Use nested loops to iterate through every cell.
3.  For each filled cell, check if the number is already in the set for its row, its column, and its 3x3 box. If a duplicate is found, return \`false\`.
4.  If no duplicates are found after checking all cells, return \`true\`.

### 📚 Key Concepts
- **Constraint Checking**: The core of the problem is validating against a set of rules.
- **\`Set\`**: The ideal data structure for efficiently detecting duplicates.
`,

  // problem explanation--> 81
  "mnc-game-of-life": `
### 💡 Problem Breakdown
Conway's Game of Life is a cellular automaton. The state of each cell in a grid evolves based on a simple set of rules related to its eight neighbors. The task is to compute the next state of the grid given its current state.

### ⚙️ Solution Walkthrough
1. Create a new board of the same dimensions to store the next state. It's crucial not to modify the board in-place as it would affect neighbor counts for subsequent cells.
2. Use nested loops to iterate through every cell \`(r, c)\` of the original board.
3. For each cell, use another pair of nested loops to count its "live" neighbors (cells with value 1).
4. Apply the Game of Life rules to determine the cell's state in the *new* board:
   - A live cell with < 2 live neighbors dies (underpopulation).
   - A live cell with 2 or 3 live neighbors lives on.
   - A live cell with > 3 live neighbors dies (overpopulation).
   - A dead cell with exactly 3 live neighbors becomes a live cell (reproduction).
5. After iterating through all cells, return the new board.

### 📚 Key Concepts
- **Matrix Traversal**: Using nested loops to visit every cell and its neighbors.
- **State Transition**: The core logic involves calculating a new state based on the current state and its local environment.
`,

  // problem explanation--> 82
  "mnc-max-points-on-a-line": `
### 💡 Problem Breakdown
This is a challenging geometry problem. Given a set of 2D points, the goal is to find the maximum number of points that lie on the same straight line.

### ⚙️ Solution Walkthrough
A common approach is to iterate through each point and use it as an "anchor." Then, for each anchor, calculate the slope to every other point. A hash map can store the counts of each slope.
1. Loop through each point \`p1\` as the anchor.
2. Inside, create a map to store \`slope -> count\`.
3. Loop through every other point \`p2\`.
   - Calculate the slope between \`p1\` and \`p2\`. Handle vertical lines (infinite slope) and duplicate points as special cases.
   - Increment the count for that slope in the map.
4. The maximum count in the map for the anchor \`p1\` gives the maximum number of points on a line passing through \`p1\`.
5. Keep track of the overall maximum found across all anchor points.

### 📚 Key Concepts
- **Slope Calculation**: The core mathematical operation.
- **Hash Map**: Used to efficiently count points that share the same slope relative to an anchor point.
`,

  // problem explanation--> 83
  "mnc-basic-calculator-ii": `
### 💡 Problem Breakdown
This problem requires evaluating a string expression containing numbers and the operators \`+\`, \`-\`, \`*\`, \`/\`. The key challenge is to handle operator precedence correctly (* and / must be evaluated before + and -).

### ⚙️ Solution Walkthrough
A stack-based approach is very effective. We can process the expression in a single pass.
1. Initialize a stack, and set the current number (\`num\`) to 0 and the last operator (\`lastOp\`) to '+'.
2. Loop through the string.
   - If the character is a digit, update \`num\`.
   - If the character is an operator (or we are at the end of the string), we process the previous \`num\` based on the \`lastOp\`.
     - If \`lastOp\` was '+': push \`num\` onto the stack.
     - If \`lastOp\` was '-': push \`-num\` onto the stack.
     - If \`lastOp\` was '*': pop from the stack, multiply it by \`num\`, and push the result back.
     - If \`lastOp\` was '/': pop, divide, truncate, and push back.
   - Update \`lastOp\` to the current operator and reset \`num\`.
3. After the loop, the stack contains only numbers that need to be added. Sum them up for the final result.

### 📚 Key Concepts
- **Stack**: The ideal data structure for evaluating expressions, especially for handling precedence.
`,

  // problem explanation--> 84
  "mnc-reverse-bits": `
### 💡 Problem Breakdown
The task is to reverse the bits of a 32-bit unsigned integer. For example, if the input is \`...0101\`, the output should be \`1010...\`.

### ⚙️ Solution Walkthrough
We can build the reversed number bit by bit.
1. Initialize a \`result\` to 0.
2. Loop 32 times.
3. In each iteration:
   - Left-shift the \`result\` by 1 to make space for the next bit.
   - Get the last bit of the input number \`n\` using bitwise AND (\`n & 1\`).
   - Add this bit to the \`result\` using bitwise OR.
   - Right-shift the input number \`n\` by 1 to process the next bit.
4. Return the \`result\`.

### 📚 Key Concepts
- **Bit Manipulation**: The solution relies on bitwise operators (\`<<\`, \`>>\`, \`&\`, \`|\`) to work directly with the binary representation of the number.
`,

  // problem explanation--> 85
  "mnc-number-of-1-bits": `
### 💡 Problem Breakdown
This problem asks you to count the number of set bits (bits with a value of 1) in the binary representation of an integer. This is also known as the Hamming weight.

### ⚙️ Solution Walkthrough
A clever bit manipulation trick is very efficient.
The operation \`n & (n - 1)\` always flips the least significant 1-bit of \`n\` to 0. We can repeat this process until the number becomes 0, counting how many times we did it.
\`\`\`javascript
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
\`\`\`
### 📚 Key Concepts
- **Bit Manipulation**: Using the properties of bitwise AND to efficiently solve the problem.
`,

  // problem explanation--> 86
  "mnc-gray-code": `
### 💡 Problem Breakdown
A Gray code is a binary numeral system where two successive values differ in only one bit. The task is to generate the Gray code sequence for \`n\` bits.

### ⚙️ Solution Walkthrough
There is a direct mathematical formula to generate the nth Gray code from the integer n: \`n ^ (n >> 1)\`.
1. Loop from \`i = 0\` to \`2^n - 1\`.
2. For each \`i\`, calculate \`i ^ (i >> 1)\`.
3. Add the result to a list.
4. Return the list.

### 📚 Key Concepts
- **Gray Code**: A specific type of binary encoding with applications in error correction and hardware design.
- **Bitwise XOR and Right Shift**: Used in the direct conversion formula.
`,

  // problem explanation--> 87
  "mnc-majority-element": `
### 💡 Problem Breakdown
The majority element in an array is the element that appears more than \`n/2\` times. The task is to find this element efficiently.

### ⚙️ Solution Walkthrough
The Boyer-Moore Voting Algorithm provides an elegant and efficient O(n) time and O(1) space solution.
1. Initialize a \`candidate\` variable and a \`count\` to 0.
2. Iterate through the array.
3. If \`count\` is 0, set the \`candidate\` to the current number.
4. If the current number is the same as the \`candidate\`, increment \`count\`.
5. If it's different, decrement \`count\`.
6. The \`candidate\` remaining at the end of the loop will be the majority element.

### 📚 Key Concepts
- **Boyer-Moore Voting Algorithm**: A clever algorithm for finding the majority element.
`,

  // problem explanation--> 88
  "mnc-kth-largest-element": `
### 💡 Problem Breakdown
The task is to find the \`k\`-th largest element in an unsorted array. This means if the array were sorted, it would be the element at the \`k\`-th position from the end.

### ⚙️ Solution Walkthrough
The simplest solution is to sort the array.
1. Sort the array in descending order.
2. The \`k\`-th largest element will be at index \`k - 1\`.
A more optimal solution for interviews is to use the Quickselect algorithm, which has an average time complexity of O(n).

### 📚 Key Concepts
- **Sorting**: A direct way to solve problems related to order and rank.
- **Quickselect**: An advanced algorithm related to Quicksort, optimized for finding the kth element.
`,

  // problem explanation--> 89
  "mnc-product-of-array-except-self": `
### 💡 Problem Breakdown
The task is to create a new array where each element \`output[i]\` is the product of all elements in the original array *except* for the one at index \`i\`. A key constraint is to do this without using the division operator.

### ⚙️ Solution Walkthrough
A two-pass approach is very efficient.
1. **Left-to-Right Pass (Prefix Products)**: Create a \`result\` array. In the first pass, \`result[i]\` will store the product of all elements to the left of \`i\`.
2. **Right-to-Left Pass (Postfix Products)**: In the second pass, iterate from right to left. Keep a running \`postfix\` product. For each index \`i\`, multiply the existing \`result[i]\` by the \`postfix\` product.

### 📚 Key Concepts
- **Prefix/Postfix Products**: The core idea is that the desired product at index \`i\` is \`(product of all elements to the left) * (product of all elements to the right)\`.
`,

  // problem explanation--> 90
  "mnc-container-with-most-water": `
### 💡 Problem Breakdown
Given an array of heights representing vertical lines, find two lines that form a container that can hold the most water. The area is \`width * height\`, where the height is limited by the shorter of the two lines.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1. Set a \`left\` pointer at the start and a \`right\` pointer at the end.
2. Loop while \`left < right\`.
3. Calculate the area for the current pointers and update the max area found so far.
4. **Move Pointer**: This is the key insight. To have a chance of finding a larger area, you must move the pointer that points to the *shorter* of the two walls. Moving the taller wall's pointer will always result in a smaller or equal area.

### 📚 Key Concepts
- **Two-Pointer Technique**: The core of the efficient solution.
`,

  // problem explanation--> 91
  "mnc-coin-change": `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a set of coin denominations and an amount, the task is to find the *fewest* number of coins required to make that amount.

### ⚙️ Solution Walkthrough
A bottom-up dynamic programming approach is standard.
1. **Initialize**: Create a \`dp\` array of size \`amount + 1\`. Initialize \`dp[0] = 0\` and fill the rest with \`Infinity\`.
2. **Outer Loop**: Loop \`i\` from 1 to \`amount\`. \`dp[i]\` will store the minimum coins for amount \`i\`.
3. **Inner Loop**: For each \`i\`, loop through each \`coin\`.
4. **Update DP**: If a \`coin\` is less than or equal to \`i\`, update \`dp[i]\` to be the minimum of its current value and \`1 + dp[i - coin]\`.
5. The final answer is \`dp[amount]\`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for an amount \`i\` is built by finding the minimum coins needed for smaller amounts.
`,

  // problem explanation--> 92
  "mnc-longest-consecutive-sequence": `
### 💡 Problem Breakdown
Given an unsorted array, find the length of the longest sequence of consecutive numbers. For \`[100, 4, 200, 1, 3, 2]\`, the longest is \`[1, 2, 3, 4]\` with length 4.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses a \`Set\` for fast lookups.
1. Create a \`Set\` of all the numbers in the array.
2. Loop through each number in the original array.
3. For each \`num\`, check if it's the start of a sequence (i.e., if \`num - 1\` is *not* in the set).
4. If it is a start, use a \`while\` loop to count how long the consecutive sequence is by checking for \`num + 1\`, \`num + 2\`, etc., in the set.
5. Keep track of the longest sequence found.

### 📚 Key Concepts
- **Set**: Provides O(1) average time lookups, making the overall solution efficient.
`,

  // problem explanation--> 93
  "mnc-gas-station": `
### 💡 Problem Breakdown
This is a classic greedy algorithm problem. You have a circular route of gas stations. The task is to find a starting station from which you can complete a full circle.

### ⚙️ Solution Walkthrough
An efficient O(n) solution can be found with a single pass.
1. **First Check**: If the total gas is less than the total cost, it's impossible. Return -1.
2. **Greedy Traversal**: Keep track of the gas in the \`current_tank\`. If it ever drops below zero, it means you can't reach the next station from the current \`start_station\`. Reset \`current_tank\` to 0 and set the potential new \`start_station\` to the next station.
3. Because we already verified that a solution exists, the final \`start_station\` must be the correct answer.

### 📚 Key Concepts
- **Greedy Algorithm**: The key insight is that if you start at station A and run out of gas before station B, you cannot reach B from any station between A and B either.
`,

  // problem explanation--> 94
  "mnc-candy": `
### 💡 Problem Breakdown
You need to distribute candies to children based on their ratings, ensuring a child with a higher rating gets more candies than their immediate neighbors.

### ⚙️ Solution Walkthrough
A two-pass approach is required to satisfy the conditions for both left and right neighbors.
1. **Left-to-Right Pass**: Give every child 1 candy. Then, iterate from left to right. If a child has a higher rating than their left neighbor, give them one more candy than that neighbor.
2. **Right-to-Left Pass**: Now, iterate from right to left. If a child has a higher rating than their right neighbor, ensure they have more candies by taking the maximum of their current count and \`candies[right_neighbor] + 1\`.

### 📚 Key Concepts
- **Greedy Algorithm**: The two-pass approach ensures that the local greedy choices lead to the global minimum.
`,

  // problem explanation--> 95
  "mnc-jump-game-ii": `
### 💡 Problem Breakdown
A variation of the "Jump Game," here you are guaranteed to reach the end. The goal is to find the *minimum* number of jumps required.

### ⚙️ Solution Walkthrough
A greedy approach is efficient. We keep track of the farthest we can reach from our current "jump window."
1. Initialize \`jumps = 0\`, \`currentEnd = 0\`, and \`farthest = 0\`.
2. Loop through the array. In each iteration \`i\`, update \`farthest = Math.max(farthest, i + nums[i])\`.
3. If \`i\` reaches \`currentEnd\`, it means we must take another jump. Increment \`jumps\` and update \`currentEnd\` to the new \`farthest\` point.

### 📚 Key Concepts
- **Greedy Algorithm**: At the end of each jump's range, we greedily choose the next jump that will take us the farthest.
`,

  // problem explanation--> 96
  "mnc-first-missing-positive": `
### 💡 Problem Breakdown
Given an unsorted array, find the smallest positive integer (from 1) not present.

### ⚙️ Solution Walkthrough
A clever O(n) time, O(1) space solution uses the array itself as a hash map.
1. **Placement Pass**: Iterate through the array. Use cyclic sort to place each number \`x\` at the index \`x-1\` if possible.
2. **Finding Pass**: Iterate again. The first index \`i\` where \`nums[i] !== i + 1\` indicates that \`i + 1\` is the missing number.
3. **Edge Case**: If all are in place, the missing number is \`n + 1\`.

### 📚 Key Concepts
- **In-place Hashing / Cyclic Sort**: A pattern using array indices to store information without extra space.
`,

  // problem explanation--> 97
  "mnc-next-permutation": `
### 💡 Problem Breakdown
Find the next lexicographically greater permutation of a sequence of numbers.

### ⚙️ Solution Walkthrough
An in-place algorithm scanning from the right:
1. **Find Pivot**: Find the first element \`nums[i]\` smaller than the element to its right.
2. **Find Swap**: Find the smallest element to the right of the pivot that is still larger than the pivot.
3. **Swap**: Swap the pivot with that element.
4. **Reverse**: Reverse the subarray to the right of the pivot's original position.
5. **Edge Case**: If no pivot is found (array is descending), reverse the whole array.

### 📚 Key Concepts
- **Lexicographical Order**: The dictionary order used for comparing sequences.
`,

  // problem explanation--> 98
  "mnc-trapping-rain-water": `
### 💡 Problem Breakdown
Given an elevation map, compute the total volume of rainwater that can be trapped between the bars.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1. Set \`left\` and \`right\` pointers at the ends, and initialize \`leftMax\` and \`rightMax\` heights.
2. Loop while \`left < right\`.
3. **Process Shorter Wall**: If \`heights[left]\` is shorter, the water level is determined by \`leftMax\`. The trapped water is \`leftMax - heights[left]\`. Move the \`left\` pointer. Otherwise, do the symmetric operation for the right side.

### 📚 Key Concepts
- **Two-Pointer Technique**: The key is that the water level is limited by the shorter of the maximum walls to its left and right.
`,

  // problem explanation--> 99
  "mnc-largest-rectangle-in-histogram": `
### 💡 Problem Breakdown
Given a histogram, find the area of the largest rectangle that can be inscribed under the bars.

### ⚙️ Solution Walkthrough
The most efficient solution uses a **monotonic stack** (storing indices of bars in increasing height).
1. Loop through the heights.
2. For each bar, while the stack is not empty and the current bar is shorter than the bar at the top of the stack:
   - Pop from the stack. This popped bar is the height of a potential rectangle.
   - Calculate the width (from the new stack top to the current index) and the area.
   - Update the max area.
3. Push the current bar's index onto the stack.

### 📚 Key Concepts
- **Monotonic Stack**: A powerful tool for problems involving finding the "next greater/smaller element."
`,

  // problem explanation--> 100
  "mnc-maximal-rectangle": `
### 💡 Problem Breakdown
This extends the histogram problem to a 2D binary matrix. Find the largest rectangle containing only '1's.

### ⚙️ Solution Walkthrough
The solution reduces this 2D problem to a series of 1D "Largest Rectangle in Histogram" problems.
1. For each row of the matrix, create a \`heights\` array representing a histogram of consecutive '1's above that row.
2. Run the "Largest Rectangle in Histogram" algorithm on this \`heights\` array.
3. Keep track of the maximum area found across all rows.

### 📚 Key Concepts
- **Problem Reduction**: Transforming a 2D problem into a series of 1D problems.
`,

  // problem explanation--> 101
  "mnc-chinese-remainder-theorem": `
### 💡 Problem Breakdown
The Chinese Remainder Theorem provides a way to solve a system of simultaneous congruences with pairwise coprime moduli. For example, finding a number \`x\` such that \`x % 3 = 2\`, \`x % 5 = 3\`, and \`x % 7 = 2\`.

### ⚙️ Solution Walkthrough
The solution involves calculating the product of all moduli, and for each congruence, finding a partial solution.
1.  **Product (N)**: Calculate the product of all divisors (e.g., 3 * 5 * 7 = 105).
2.  **Iterate**: For each congruence \`x ≡ r_i (mod d_i)\`:
    - Calculate \`N_i = N / d_i\`.
    - Find the modular multiplicative inverse of \`N_i\` modulo \`d_i\`. This is a number \`inv_i\` such that \`(N_i * inv_i) % d_i = 1\`. This requires the Extended Euclidean Algorithm.
    - The partial solution is \`r_i * N_i * inv_i\`.
3.  **Sum**: The final solution is the sum of all partial solutions, modulo N.

### 📚 Key Concepts
- **Modular Arithmetic**: The core mathematical field.
- **Extended Euclidean Algorithm**: Required to find the modular multiplicative inverse.
`,

  // problem explanation--> 102
  "mnc-josephus-problem": `
### 💡 Problem Breakdown
This is a classic theoretical computer science problem. \`n\` people are in a circle. Starting from a person, you count \`k\` people and eliminate one, then count \`k\` from the next person, and so on. The goal is to find the position of the last survivor.

### ⚙️ Solution Walkthrough
A direct simulation is too slow. A recursive formula provides an efficient O(n) solution. If \`J(n, k)\` is the position of the survivor (0-indexed), then:
\`J(n, k) = (J(n - 1, k) + k) % n\`
The base case is \`J(1, k) = 0\`.

1.  **Base Case**: For 1 person, the survivor is at position 0.
2.  **Recursive Step**: The solution for \`n\` people can be found from the solution for \`n-1\` people. After one person is eliminated, the circle has \`n-1\` people, but the starting point of the count is shifted. The formula accounts for this shift.

### 📚 Key Concepts
- **Recurrence Relation**: The problem has an optimal substructure that can be defined by a recursive formula.
`,

  // problem explanation--> 103
  "mnc-integer-partition": `
### 💡 Problem Breakdown
The task is to find the number of ways a positive integer \`n\` can be written as a sum of positive integers. For example, for n=4, the partitions are 4, 3+1, 2+2, 2+1+1, 1+1+1+1 (5 ways).

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem.
1.  **DP State**: Let \`dp[i][j]\` be the number of partitions of the integer \`i\` using parts up to size \`j\`.
2.  **Transition**: The recurrence relation is:
    - The number of partitions of \`i\` using parts up to size \`j\` is the sum of:
      - Partitions not using \`j\` at all (\`dp[i][j-1]\`).
      - Partitions using at least one \`j\` (\`dp[i-j][j]\`).
    - So, \`dp[i][j] = dp[i][j-1] + dp[i-j][j]\`.
3.  **Initialization**: The base cases are set up to handle the initial conditions.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds up a table of solutions for smaller numbers and smaller part sizes.
`,

  // problem explanation--> 104
  "mnc-fft-conceptual": `
### 💡 Problem Breakdown
The Fast Fourier Transform (FFT) is an algorithm that computes the Discrete Fourier Transform (DFT) of a sequence, or its inverse. The DFT converts a signal from its original domain (often time or space) to a representation in the frequency domain.

### ⚙️ Solution Walkthrough
FFT is a "divide and conquer" algorithm. It recursively breaks down a DFT of any composite size \`N = N1 * N2\` into many smaller DFTs of sizes \`N1\` and \`N2\`, along with multiplications by complex roots of unity. This reduces the time complexity from O(n^2) for a naive DFT calculation to O(n log n). A key application is fast polynomial multiplication:
1.  Represent two polynomials by their coefficient vectors.
2.  Use FFT to evaluate both polynomials at a set of points (converting to point-value representation).
3.  Multiply the corresponding values at each point. This is an O(n) operation.
4.  Use an inverse FFT to convert the resulting point-value representation back into a coefficient vector, which represents the product polynomial.

### 📚 Key Concepts
- **Discrete Fourier Transform (DFT)**: A mathematical transform used in signal processing.
- **Divide and Conquer**: The core strategy of the FFT algorithm.
`,

  // problem explanation--> 105
  "mnc-miller-rabin-primality-test": `
### 💡 Problem Breakdown
The Miller-Rabin test is a probabilistic primality test: an algorithm which determines whether a given number is likely to be prime. It's a fundamental algorithm in cryptography.

### ⚙️ Solution Walkthrough
The test is based on properties of strong pseudoprimes derived from Fermat's Little Theorem.
1.  **Setup**: Write \`n-1\` as \`2^s * d\`, where \`d\` is odd.
2.  **Witness Loop**: Repeat \`k\` times for accuracy:
    - Pick a random integer \`a\` (a "witness") in the range [2, n-2].
    - Compute \`x = a^d mod n\`.
    - If \`x === 1\` or \`x === n-1\`, the number might be prime. Continue to the next witness.
    - **Squaring Loop**: Repeat \`s-1\` times:
      - Compute \`x = x^2 mod n\`.
      - If \`x === n-1\`, the number might be prime. Break the inner loop and try the next witness.
    - If the squaring loop finishes without breaking, \`n\` is definitely composite. Return \`false\`.
3.  If the number passes all \`k\` witness tests, it is probably prime.

### 📚 Key Concepts
- **Probabilistic Algorithm**: The test doesn't give a 100% certain answer, but the probability of error can be made arbitrarily small by increasing the number of tests.
- **Modular Arithmetic**: The core of the algorithm involves modular exponentiation.
`,

  // problem explanation--> 106
  "mnc-karatsuba-multiplication": `
### 💡 Problem Breakdown
The Karatsuba algorithm is a fast multiplication algorithm. It was the first multiplication algorithm to be asymptotically faster than the grade-school algorithm.

### ⚙️ Solution Walkthrough
It's a "divide and conquer" algorithm. To multiply two n-digit numbers \`x\` and \`y\`:
1.  Split \`x\` and \`y\` into high and low parts: \`x = x1*B^m + x0\`, \`y = y1*B^m + y0\`.
2.  The product \`x*y\` is \`(x1*B^m + x0)*(y1*B^m + y0) = z2*B^(2m) + z1*B^m + z0\`.
3.  The grade-school method requires 4 multiplications. Karatsuba cleverly computes it with only 3:
    - \`z2 = x1 * y1\`
    - \`z0 = x0 * y0\`
    - \`z1 = (x1 + x0) * (y1 + y0) - z2 - z0\`
4.  Recursively call the Karatsuba algorithm for these three smaller multiplications.

### 📚 Key Concepts
- **Divide and Conquer**: The core strategy of the algorithm.
- **Algorithmic Efficiency**: A classic example of an algorithm that reduces the number of recursive subproblems to achieve better time complexity.
`,

  // problem explanation--> 107
  "mnc-gaussian-elimination-conceptual": `
### 💡 Problem Breakdown
Gaussian elimination is a standard method in linear algebra for solving a system of linear equations (e.g., \`2x + y - z = 8\`, etc.).

### ⚙️ Solution Walkthrough
The system is represented as an augmented matrix. The algorithm uses elementary row operations to transform the matrix into row echelon form.
1.  **Forward Elimination**:
    - For each column, use row operations to make all elements below the diagonal zero. This is done by adding a multiple of the pivot row to the rows below it.
    - This process transforms the matrix into an upper triangular form.
2.  **Back Substitution**:
    - Once in row echelon form, the system can be easily solved. The last equation has only one variable.
    - Solve for that variable, then substitute its value back into the equation above it to solve for the next variable, and so on, moving up the matrix.

### 📚 Key Concepts
- **Linear Algebra**: A fundamental algorithm in this field.
- **Matrix Operations**: The algorithm is defined by a sequence of operations on the rows of a matrix.
`,

  // problem explanation--> 108
  "mnc-simplex-algorithm-conceptual": `
### 💡 Problem Breakdown
The Simplex algorithm is the classic method for solving linear programming problems, which involve optimizing (maximizing or minimizing) a linear objective function subject to a set of linear inequality constraints.

### ⚙️ Solution Walkthrough
The feasible region (the set of points satisfying the constraints) is a convex polytope. The optimal solution is always at a vertex. The Simplex algorithm explores these vertices.
1.  **Initialization**: Start at a feasible vertex of the polytope.
2.  **Iteration**:
    - Check the edges of the polytope connected to the current vertex.
    - If moving along an edge improves the objective function, move to the adjacent vertex at the other end of that edge.
    - Choose the edge that provides the greatest improvement.
3.  **Termination**: When no adjacent vertex has a better objective function value, the current vertex is the optimal solution.

### 📚 Key Concepts
- **Linear Programming**: A field of mathematical optimization.
- **Optimization**: The algorithm systematically searches for the best solution.
`,

  // problem explanation--> 109
  "mnc-monty-hall-problem": `
### 💡 Problem Breakdown
This is a famous probability puzzle. The counter-intuitive result is that switching doors increases your probability of winning from 1/3 to 2/3.

### ⚙️ Solution Walkthrough
The simulation demonstrates this probability.
- **Stay Strategy**: You initially pick one of three doors. Your chance of picking the car is 1/3. The host's action doesn't change this initial probability. If you stay, you will win about 1/3 of the time.
- **Switch Strategy**:
  - Case 1 (1/3 probability): You initially pick the car. The host reveals a goat. You switch to the other goat and lose.
  - Case 2 (2/3 probability): You initially pick a goat. The host is forced to reveal the *other* goat. You switch to the remaining door, which must be the car. You win.
Since Case 2 happens 2/3 of the time, switching doors leads to winning 2/3 of the time. The simulation confirms this by running many trials.

### 📚 Key Concepts
- **Conditional Probability**: The core of the puzzle. The host's action provides new information that changes the probabilities of the remaining doors.
`,

  // problem explanation--> 110
  "mnc-birthday-paradox": `
### 💡 Problem Breakdown
The Birthday Paradox refers to the surprisingly high probability that two people in a group will share a birthday. The task is to calculate this probability for a group of size \`n\`.

### ⚙️ Solution Walkthrough
It's easier to calculate the probability that **no two** people share a birthday, and then subtract that from 1.
1. The first person can have any birthday.
2. The probability that the second person has a *different* birthday is 364/365.
3. The probability that the third person has a different birthday from the first two is 363/365.
4. The probability of *no* shared birthdays for \`n\` people is: \`P(no match) = (365/365) * (364/365) * ... * ((365-n+1)/365)\`.
5. The probability of at least one shared birthday is \`1 - P(no match)\`.
For n=23, this probability becomes slightly over 50%.

### 📚 Key Concepts
- **Probability**: The solution involves calculating the probability of a sequence of independent events.
- **Complementary Events**: It's often easier to calculate the probability of the opposite event and subtract from 1.
`,

  // problem explanation--> 111
  "mnc-reservoir-sampling": `
### 💡 Problem Breakdown
Reservoir sampling is a family of algorithms for selecting a simple random sample of \`k\` items from a population of unknown size \`n\` in a single pass.

### ⚙️ Solution Walkthrough
Algorithm R is a common implementation.
1.  **Initialization**: Create a "reservoir" array of size \`k\` and fill it with the first \`k\` items from the stream.
2.  **Iteration**: For each subsequent item \`i\` (from \`k+1\` to \`n\`) in the stream:
    - Generate a random integer \`j\` between 0 and \`i\`.
    - If \`j\` is less than \`k\`, replace the element at index \`j\` in the reservoir with the item at index \`i\` from the stream.
3.  The final reservoir array is the random sample.

### 📚 Key Concepts
- **Random Sampling**: A technique for selecting a representative subset from a larger population.
- **Probability**: The algorithm is designed to ensure that at any point, every item seen so far has an equal probability of being in the reservoir.
`,

  // problem explanation--> 112
  "mnc-fisher-yates-shuffle": `
### 💡 Problem Breakdown
The Fisher-Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in other words, for shuffling an array.

### ⚙️ Solution Walkthrough
The modern, inside-out version of the algorithm is efficient and simple to implement.
1.  Loop through the array from the last element down to the second element.
2.  In each iteration \`i\`:
    - Pick a random index \`j\` from 0 to \`i\` (inclusive).
    - Swap the element at index \`i\` with the element at the random index \`j\`.
3.  The array is now randomly shuffled in-place.

### 📚 Key Concepts
- **Random Permutation**: The goal of the algorithm is to make every possible ordering of the array equally likely.
- **In-place Algorithm**: The shuffle is performed directly on the input array.
`,

  // problem explanation--> 113
  "mnc-combination-sum": `
### 💡 Problem Breakdown
Given a set of candidate numbers (which can be reused) and a target, find all unique combinations that sum up to the target.

### ⚙️ Solution Walkthrough
This is a backtracking problem.
1. **\`backtrack(currentCombination, remainingSum, start)\`**:
   - **Base Case (Success)**: If \`remainingSum === 0\`, we have found a valid combination.
   - **Base Case (Failure)**: If \`remainingSum < 0\`, this path is invalid.
   - **Recursive Step**: Loop through \`candidates\` from \`start\`.
     - "Choose" \`candidates[i]\`.
     - Recurse with \`start\` index \`i\` (allowing reuse).
     - "Un-choose" by backtracking.

### 📚 Key Concepts
- **Backtracking**: The core algorithm.
- **Reusing Elements**: The recursive call starting from \`i\` instead of \`i+1\` is key.
`,

  // problem explanation--> 114
  "mnc-unique-paths": `
### 💡 Problem Breakdown
A robot on an \`m x n\` grid can only move right or down. Find the total number of unique paths from top-left to bottom-right.

### ⚙️ Solution Walkthrough
This is a dynamic programming problem.
1. **DP State**: \`dp[r][c]\` = number of paths to cell \`(r, c)\`.
2. **Initialization**: The first row and column have only 1 path each.
3. **Transition**: \`dp[r][c] = dp[r-1][c] + dp[r][c-1]\`.
4. The answer is \`dp[m-1][n-1]\`.
This can also be solved mathematically as a combinations problem: \`C(m+n-2, m-1)\`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for a cell is built from its neighbors.
- **Combinatorics**: The problem is equivalent to choosing \`m-1\` down moves out of \`m+n-2\` total moves.
`,

  // problem explanation--> 115
  "mnc-climbing-stairs": `
### 💡 Problem Breakdown
You can climb a staircase 1 or 2 steps at a time. The task is to find the number of distinct ways to reach the top.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem whose solution is the Fibonacci sequence.
- Ways to reach step \`n\` = (ways to reach \`n-1\` and take 1 step) + (ways to reach \`n-2\` and take 2 steps).
An efficient iterative solution:
1. Initialize \`a=1\` (ways to reach step 1) and \`b=2\` (ways to reach step 2).
2. Loop from 3 to \`n\`. In each step, calculate the next value \`c = a + b\`, then update \`a=b\`, \`b=c\`.
3. Return the final value.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for \`n\` is built from \`n-1\` and \`n-2\`.
- **Fibonacci Sequence**: The recurrence relation is the same.
`,

  // problem explanation--> 116
  "mnc-gray-code-to-integer": `
### 💡 Problem Breakdown
This is the inverse operation of generating Gray code. Given an integer that represents a Gray code, the task is to convert it back to its standard binary integer representation.

### ⚙️ Solution Walkthrough
The conversion from Gray code to binary can be done efficiently using bitwise operations. The rule is: the most significant bit (MSB) of the binary number is the same as the MSB of the Gray code. For every other bit, the binary bit is the XOR of the previous binary bit and the current Gray code bit. An even simpler iterative approach is:
1. Initialize the binary number \`n\` to 0.
2. Use a \`while\` loop that continues as long as the gray code \`g\` is greater than 0.
3. In each iteration, XOR the current \`g\` with \`n\`: \`n ^= g\`.
4. Right-shift \`g\` by one bit: \`g >>= 1\`.
5. The final value of \`n\` is the converted binary integer.

\`\`\`javascript
function grayToBinary(g) {
  let n = 0;
  for (; g > 0; g >>= 1) {
    n ^= g;
  }
  return n;
}
\`\`\`

### 📚 Key Concepts
- **Gray Code**: A binary numeral system where two successive values differ in only one bit.
- **Bitwise XOR (\`^\`)**: The key operator for the conversion.
- **Bitwise Right Shift (\`>>\`)**: Used to iterate through the bits of the Gray code.
`,

  // problem explanation--> 117
  "mnc-integer-to-gray-code": `
### 💡 Problem Breakdown
The task is to convert a standard binary integer to its Gray code equivalent. Gray codes have the property that consecutive values differ by only one bit, which is useful in some hardware and error-correction applications.

### ⚙️ Solution Walkthrough
The conversion from a binary integer \`n\` to its Gray code is remarkably simple using bitwise operations. The formula is \`n XOR (n shifted right by 1)\`.
\`\`\`javascript
function integerToGray(n) {
  return n ^ (n >> 1);
}

// Example: n = 2 (binary 10)
// n >> 1 is 1 (binary 01)
// 10 ^ 01 = 11 (binary for 3)
// So, the Gray code for 2 is 3.
\`\`\`
This single operation correctly generates the Gray code for any integer.

### 📚 Key Concepts
- **Gray Code**: A binary numeral system with a single-bit difference between consecutive values.
- **Bitwise XOR (\`^\`)**: The key operator for the conversion.
- **Bitwise Right Shift (\`>>\`)**: Used to get the bits for the XOR operation.
`,

  // problem explanation--> 118
  "mnc-matrix-determinant": `
### 💡 Problem Breakdown
The determinant is a scalar value that can be computed from the elements of a square matrix. It has important applications in linear algebra. The task is to implement a function to calculate it.

### ⚙️ Solution Walkthrough
The solution uses **Laplace expansion** (or cofactor expansion), which is a recursive method.
1.  **Base Case**: If the matrix is 1x1, the determinant is the single element. If it's 2x2, the determinant is \`ad - bc\`.
2.  **Recursive Step**: For an n x n matrix:
    - Choose a row or column to expand along (usually the first row).
    - Iterate through each element \`a_ij\` in that row.
    - The determinant is the sum of \`(-1)^(i+j) * a_ij * determinant(M_ij)\`, where \`M_ij\` is the (n-1) x (n-1) sub-matrix created by removing the i-th row and j-th column.
\`\`\`javascript
// Conceptual
function determinant(matrix) {
  if (matrix.length === 1) return matrix[0][0];
  if (matrix.length === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  
  let det = 0;
  for (let j = 0; j < matrix.length; j++) {
    const subMatrix = createSubMatrix(matrix, 0, j);
    det += Math.pow(-1, j) * matrix[0][j] * determinant(subMatrix);
  }
  return det;
}
\`\`\`

### 📚 Key Concepts
- **Determinant**: A fundamental property of a square matrix.
- **Recursion**: Laplace expansion is an inherently recursive definition.
- **Matrix Minors and Cofactors**: The sub-matrices and signed terms used in the expansion.
`,

  // problem explanation--> 119
  "mnc-newtons-method-sqrt": `
### 💡 Problem Breakdown
Newton's method is a powerful numerical analysis technique for finding successively better approximations to the roots of a real-valued function. It can be applied to find the square root of a number \`S\` by finding the root of the function \`f(x) = x^2 - S\`.

### ⚙️ Solution Walkthrough
The iterative formula for Newton's method applied to square roots is:
\`x_{n+1} = x_n - f(x_n) / f'(x_n)\`
Which simplifies to:
\`x_{n+1} = (x_n + S / x_n) / 2\`
1.  **Initialize**: Start with an initial guess for the root (e.g., \`x = n\`).
2.  **Iterate**: Repeatedly apply the formula for a fixed number of iterations or until the change in \`x\` is very small.
\`\`\`javascript
function newtonSqrt(n) {
  let x = n;
  for (let i = 0; i < 20; i++) { // 20 iterations is plenty for high precision
    x = x - (x*x - n) / (2*x);
  }
  return x;
}
\`\`\`
This method converges to the correct root very quickly.

### 📚 Key Concepts
- **Newton's Method**: A root-finding algorithm.
- **Numerical Approximation**: A technique for finding approximate solutions to mathematical problems.
`,

  // problem explanation--> 120
  "mnc-shunting-yard-algorithm": `
### 💡 Problem Breakdown
The Shunting-Yard algorithm, developed by Edsger Dijkstra, is a classic method for parsing mathematical expressions specified in infix notation (e.g., \`3 + 4\`) and converting them to postfix notation (Reverse Polish Notation or RPN, e.g., \`3 4 +\`). RPN is easier for computers to evaluate.

### ⚙️ Solution Walkthrough
The algorithm uses an output queue and an operator stack.
1.  **Iterate through Tokens**: Read the infix expression one token (number or operator) at a time.
2.  **Rules**:
    - If the token is a **number**, push it to the output queue.
    - If the token is an **operator** (\`op1\`), while there is an operator (\`op2\`) at the top of the stack with greater or equal precedence, pop \`op2\` from the stack to the output. Then, push \`op1\` onto the stack.
    - If the token is a **left parenthesis**, push it onto the operator stack.
    - If it's a **right parenthesis**, pop operators from the stack to the output until a left parenthesis is found.
3.  **Finalize**: After all tokens are read, pop any remaining operators from the stack to the output.

### 📚 Key Concepts
- **Infix vs. Postfix Notation**: Different ways of writing mathematical expressions.
- **Stack**: The core data structure for managing operators and their precedence.
`,

  // problem explanation--> 121
  "mnc-evaluate-rpn": `
### 💡 Problem Breakdown
Reverse Polish Notation (RPN) is a mathematical notation in which every operator follows all of its operands. It is unambiguous and does not require parentheses. The task is to evaluate an expression given in this format.

### ⚙️ Solution Walkthrough
A stack is the perfect data structure for evaluating RPN.
1.  **Initialize**: Create an empty stack.
2.  **Iterate through Tokens**: Read the RPN expression one token at a time.
3.  **Rules**:
    - If the token is a **number**, push it onto the stack.
    - If the token is an **operator**:
        - Pop the required number of operands from the stack (e.g., two for \`+\`).
        - Perform the operation.
        - Push the result back onto the stack.
4.  **Final Result**: After all tokens have been processed, the single value remaining on the stack is the final result.

\`\`\`javascript
// For ["2", "1", "+", "3", "*"]
// Stack: [2] -> [2, 1] -> [3] -> [3, 3] -> [9]
\`\`\`
### 📚 Key Concepts
- **Reverse Polish Notation (RPN)**: A parenthesis-free notation that is easy to evaluate with a stack.
- **Stack**: The core data structure for the evaluation process.
`,

  // problem explanation--> 122
  "mnc-line-through-most-points": `
### 💡 Problem Breakdown
This is a challenging geometric problem. Given a set of 2D points, the goal is to find the line that passes through the maximum number of these points.

### ⚙️ Solution Walkthrough
A common approach is to iterate through each point and use it as a "pivot." For each pivot, we calculate the slope to every other point. A hash map can store the counts of each slope.
1.  **Outer Loop**: Iterate through each point \`p1\` in the set. This will be our pivot.
2.  **Inner Loop and Map**: For each \`p1\`, create a new map to store slope counts. Iterate through all other points \`p2\`.
3.  **Calculate Slope**: Calculate the slope between \`p1\` and \`p2\`. Handle vertical lines (infinite slope) and duplicate points as special cases.
4.  **Update Map**: Increment the count for this slope in the map.
5.  **Find Max for Pivot**: Find the maximum count in the map for the current pivot \`p1\`. This gives the max number of points on a line passing through \`p1\`.
6.  **Update Global Max**: Keep track of the overall maximum found across all pivots.

### 📚 Key Concepts
- **Slope Calculation**: A fundamental concept from geometry.
- **Hash Map**: Used to efficiently count points that share the same slope relative to a pivot.
`,

  // problem explanation--> 123
  "mnc-perfect-number-generation": `
### 💡 Problem Breakdown
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. The Euclid-Euler theorem provides a direct way to generate even perfect numbers. It states that \`2^(p-1) * (2^p - 1)\` is an even perfect number if and only if \`2^p - 1\` is a prime number (known as a Mersenne prime).

### ⚙️ Solution Walkthrough
The algorithm involves checking for Mersenne primes.
1.  **Loop through \`p\`**: Iterate through prime numbers \`p\`.
2.  **Calculate Mersenne Number**: For each prime \`p\`, calculate the potential Mersenne prime \`M = 2^p - 1\`.
3.  **Check Primality**: Check if \`M\` is prime. A strong primality test like Miller-Rabin is needed for larger numbers.
4.  **Generate Perfect Number**: If \`M\` is prime, then calculate the corresponding perfect number using the formula \`2^(p-1) * M\`.
5.  Continue until the generated perfect numbers exceed the limit.

### 📚 Key Concepts
- **Euclid-Euler Theorem**: A fundamental theorem in number theory linking perfect numbers and Mersenne primes.
- **Mersenne Primes**: Primes of the form \`2^p - 1\`.
`,

  // problem explanation--> 124
  "mnc-median-of-two-sorted-arrays": `
### 💡 Problem Breakdown
This is a very difficult but classic interview question. The goal is to find the median of two sorted arrays in O(log(m+n)) time. A naive solution of merging the arrays and finding the middle element would be O(m+n).

### ⚙️ Solution Walkthrough
The efficient solution involves a modified binary search. The idea is to partition the smaller array (say, \`A\`) at some index \`i\`. This implies a corresponding partition in the other array \`B\` at an index \`j\`. We have found the correct partitions if all elements on the "left side" of both arrays are less than or equal to all elements on the "right side."
1.  **Binary Search on Smaller Array**: Perform a binary search on the smaller of the two arrays to find the optimal partition point.
2.  **Check Partition**: For a given partition \`i\` in array \`A\`, calculate the corresponding partition \`j\` in array \`B\`. Check if \`A[i-1] <= B[j]\` and \`B[j-1] <= A[i]\`.
3.  **Adjust Search**:
    - If the condition is met, we've found the median.
    - If \`A[i-1] > B[j]\`, our partition in \`A\` is too large; we need to search in the left half.
    - Otherwise, our partition in \`A\` is too small; we need to search in the right half.
4.  **Calculate Median**: Once the correct partition is found, the median is either the max of the left partitions (for an odd total number of elements) or the average of the max of the left and the min of the right (for an even total).

### 📚 Key Concepts
- **Binary Search**: The core of the efficient logarithmic time solution.
- **Partitioning**: The problem is solved by finding the correct way to partition the combined set of numbers into two equal halves.
`,

  // problem explanation--> 125
  "mnc-pi-leibniz-formula": `
### 💡 Problem Breakdown
The Leibniz formula is an infinite series that converges to π/4:  1 - 1/3 + 1/5 - 1/7 + 1/9 - ...
The task is to use this formula for a given number of terms to approximate the value of π.

### ⚙️ Solution Walkthrough
1.  **Initialize**: \`sum = 0\`.
2.  **Loop**: Iterate from \`i = 0\` up to the specified number of iterations.
3.  **Calculate Term**: The ith term of the series is \`(-1)^i / (2*i + 1)\`.
4.  **Add to Sum**: Add this term to the running \`sum\`.
5.  **Final Result**: After the loop, the \`sum\` is an approximation of π/4. Multiply it by 4 to get the approximation of π.
\`\`\`javascript
let sum = 0;
for (let i = 0; i < iterations; i++) {
  sum += (Math.pow(-1, i)) / (2 * i + 1);
}
return sum * 4;
\`\`\`
This series converges very slowly, so it's not a practical way to calculate π, but it's a good demonstration of infinite series.

### 📚 Key Concepts
- **Infinite Series**: A sum of an infinite sequence of numbers.
- **Numerical Approximation**: Using a finite number of terms to approximate the value of an infinite series.
`,

  // problem explanation--> 126
  "mnc-pi-monte-carlo": `
### 💡 Problem Breakdown
A Monte Carlo method is a computational algorithm that relies on repeated random sampling to obtain numerical results. We can approximate π by simulating throwing darts at a square that contains a circle.

### ⚙️ Solution Walkthrough
1.  **Setup**: Imagine a 1x1 square with its bottom-left corner at (0,0). A quarter circle of radius 1 is inscribed in this square. The area of the square is 1, and the area of the quarter circle is π*(1^2)/4 = π/4.
2.  **Random Sampling**: Generate a large number of random points (x, y) where both x and y are between 0 and 1.
3.  **Count Hits**: For each point, check if it falls inside the quarter circle. This is true if its distance from the origin is less than or equal to 1, which can be checked with the formula \`x^2 + y^2 <= 1\`.
4.  **Calculate Ratio**: The ratio of \`(points in circle) / (total points)\` will approximate the ratio of the areas, which is \`(π/4) / 1\`.
5.  **Approximate Pi**: Therefore, \`π ≈ 4 * (points in circle) / (total points)\`.

### 📚 Key Concepts
- **Monte Carlo Method**: A probabilistic method for solving problems that might be deterministic in principle.
- **Law of Large Numbers**: As the number of samples increases, the result of the simulation will converge to the expected value.
`,

  // problem explanation--> 127
  "mnc-fast-inverse-sqrt": `
### 💡 Problem Breakdown
This is a famous and highly advanced conceptual problem. The "Fast Inverse Square Root" is an algorithm that computes \`1/sqrt(x)\`. It's known for its implementation in the Quake III Arena game engine, which was significantly faster than standard floating-point division.

### ⚙️ Solution Walkthrough
The algorithm is a work of genius and trickery:
1.  **Bit-level Hack**: It takes the 32-bit floating-point number, reinterprets its bits as an integer, and performs a specific bit shift and subtraction from a "magic number" (\`0x5f3759df\`). This clever hack provides an incredibly good first approximation of the result by exploiting the way floating-point numbers are represented.
2.  **Newton's Method**: It then performs one or two iterations of Newton's method to refine this initial guess to a more accurate result.

The combination of the bit-level hack for a great initial guess and a single refinement step made it exceptionally fast on the hardware of the time.

### 📚 Key Concepts
- **Floating-Point Representation**: The algorithm depends on the specific IEEE 754 standard for floating-point numbers.
- **Numerical Analysis**: Combining a clever initial guess with an iterative refinement method (Newton's method).
`,

  // problem explanation--> 128
  "mnc-modular-exponentiation": `
### 💡 Problem Breakdown
The task is to calculate \`(base^exponent) % modulus\` efficiently. Calculating \`base^exponent\` first can result in extremely large numbers that overflow standard integer types. Modular exponentiation (also known as exponentiation by squaring) solves this by keeping the intermediate results small.

### ⚙️ Solution Walkthrough
The algorithm uses the properties of modular arithmetic and the binary representation of the exponent.
1.  **Initialize**: \`result = 1\`. Reduce the \`base\` modulo \`m\`.
2.  **Loop**: While the \`exponent > 0\`:
    - If the current least significant bit of the exponent is 1 (i.e., \`exponent % 2 === 1\`), multiply the \`result\` by the current \`base\` (and take the modulus).
    - Square the \`base\` (and take the modulus).
    - Right-shift the exponent by one bit (equivalent to \`Math.floor(exponent / 2)\`).
3.  Return the final \`result\`.

### 📚 Key Concepts
- **Modular Arithmetic**: A system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus.
- **Exponentiation by Squaring**: The core technique that makes the algorithm efficient (O(log exponent)).
`,

  // problem explanation--> 129
  "mnc-modular-multiplicative-inverse": `
### 💡 Problem Breakdown
The modular multiplicative inverse of an integer \`a\` (modulo \`m\`) is an integer \`x\` such that \`(a * x) % m = 1\`. It exists if and only if \`a\` and \`m\` are coprime (their greatest common divisor is 1).

### ⚙️ Solution Walkthrough
There are two common methods:
1.  **Fermat's Little Theorem (if \`m\` is prime)**: The inverse of \`a\` is simply \`a^(m-2) % m\`. This can be calculated efficiently using modular exponentiation.
2.  **Extended Euclidean Algorithm (general case)**: This algorithm finds integers \`x\` and \`y\` such that \`ax + my = gcd(a, m)\`. If \`gcd(a, m) = 1\`, then \`ax + my = 1\`. Taking this equation modulo \`m\`, we get \`ax % m = 1\`. So, the coefficient \`x\` is the modular inverse.

### 📚 Key Concepts
- **Modular Arithmetic**: The context for the problem.
- **Extended Euclidean Algorithm**: The standard method for finding the modular inverse.
`,

  // problem explanation--> 130
  "mnc-euler-totient-function": `
### 💡 Problem Breakdown
Euler's totient function, φ(n) (phi of n), counts the number of positive integers up to a given integer \`n\` that are relatively prime to \`n\` (i.e., the greatest common divisor is 1).

### ⚙️ Solution Walkthrough
An efficient way to calculate φ(n) is to use Euler's product formula, which relies on the prime factorization of \`n\`.
1.  **Initialize**: \`result = n\`.
2.  **Find Prime Factors**: Iterate from \`p = 2\` up to the square root of \`n\`.
3.  If \`p\` is a prime factor of \`n\`:
    - Update the result: \`result = result - result / p\`.
    - Divide \`n\` by \`p\` repeatedly until it's no longer divisible.
4.  **Final Factor**: If \`n\` is still greater than 1 after the loop (meaning it has a prime factor larger than its square root), apply the formula one last time for this remaining factor.
5.  Return the integer \`result\`.

### 📚 Key Concepts
- **Number Theory**: A fundamental function in number theory.
- **Prime Factorization**: The core component of the efficient calculation.
`,

  // problem explanation--> 131
  "mnc-find-primes-in-range": `
### 💡 Problem Breakdown
The task is to find all prime numbers within a given range [start, end]. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

### ⚙️ Solution Walkthrough
The most efficient way to solve this for a reasonably sized range is to use a Sieve method up to the 'end' limit, and then filter the results.
1.  **Sieve of Eratosthenes**: Create a boolean array \`isPrime\` up to the \`end\` value, initially marking all numbers as potentially prime.
2.  Iterate from 2 up to the square root of \`end\`. If a number \`p\` is still marked as prime, iterate through its multiples (\`2p\`, \`3p\`, ...) and mark them as not prime.
3.  **Filter**: After the sieve is complete, iterate from the \`start\` number to the \`end\` number. Collect all numbers that are still marked as prime in your result array.

### 📚 Key Concepts
- **Sieve of Eratosthenes**: A highly efficient algorithm for finding all prime numbers up to a specified integer.
- **Primality Test**: The core mathematical concept being tested.
`,

  // problem explanation--> 132
  "mnc-sum-of-primes": `
### 💡 Problem Breakdown
The goal is to calculate the sum of all prime numbers up to a given limit.

### ⚙️ Solution Walkthrough
This problem combines prime number generation with summation. The Sieve of Eratosthenes is the ideal first step.
1.  **Sieve of Eratosthenes**: Generate all prime numbers up to the given limit using the sieve method. This will give you an array of booleans or a list of the prime numbers themselves.
2.  **Summation**: Iterate through the results of the sieve. If you have an array of booleans, iterate from 2 to the limit and add the index \`i\` to a sum if \`isPrime[i]\` is true. If you have a list of primes, simply use the \`.reduce()\` method to sum them up.

### 📚 Key Concepts
- **Sieve of Eratosthenes**: The most efficient way to find all primes in a given range.
- **Aggregation**: Summing up the results after filtering for the desired property (primality).
`,

  // problem explanation--> 133
  "mnc-mersenne-prime": `
### 💡 Problem Breakdown
A Mersenne number is a number of the form \`2^p - 1\`. If this number is itself prime, it is called a Mersenne prime. The task is to check if \`2^p - 1\` is a prime for a given exponent \`p\`. For this to be possible, \`p\` itself must be a prime number.

### ⚙️ Solution Walkthrough
1.  **Check if \`p\` is Prime**: First, use a primality test on the exponent \`p\`. If \`p\` is not prime, then \`2^p - 1\` cannot be a Mersenne prime (with some exceptions not relevant here).
2.  **Calculate Mersenne Number**: Calculate \`M = 2^p - 1\`.
3.  **Check if \`M\` is Prime**: Use a primality test on the resulting number \`M\`. For larger values of \`p\`, a simple trial division test will be too slow, and a more advanced probabilistic test like Miller-Rabin would be needed in a real-world scenario. For this problem, a standard primality test is sufficient.

### 📚 Key Concepts
- **Mersenne Primes**: A special class of prime numbers with a specific form, important in number theory and for finding very large primes.
- **Primality Test**: The core sub-problem that needs to be solved twice.
`,

  // problem explanation--> 134
  "mnc-friendly-numbers": `
### 💡 Problem Breakdown
Two numbers are "friendly" if they share the same abundancy index. The abundancy index of a number is the ratio of the sum of its divisors to the number itself. For example, the divisors of 6 are 1, 2, 3, 6. Their sum is 12. The abundancy of 6 is 12/6 = 2.

### ⚙️ Solution Walkthrough
1.  **Sum of Divisors Helper**: Create a helper function that takes a number \`n\` and returns the sum of all its divisors (including \`n\` itself).
2.  **Calculate Abundancy**: For each of the two input numbers, calculate its abundancy index by calling the helper function and dividing by the number.
3.  **Compare**: Check if the two abundancy indices are equal.

### 📚 Key Concepts
- **Number Theory**: The problem is based on concepts of divisors and their sums.
- **Modularization**: Creating a helper function for a repeated calculation (sum of divisors) makes the main logic cleaner.
`,

  // problem explanation--> 135
  "mnc-perfect-power": `
### 💡 Problem Breakdown
A perfect power is an integer that can be expressed in the form \`a^b\`, where \`a > 0\` and \`b > 1\` are integers. For example, 27 is a perfect power because it is \`3^3\`. The task is to determine if a given number is a perfect power.

### ⚙️ Solution Walkthrough
A straightforward approach is to iterate through possible bases and exponents.
1.  **Loop through Exponents \`b\`**: The exponent \`b\` can range from 2 up to a reasonable limit. The maximum possible exponent would be \`log2(num)\`, as any higher exponent with a base of at least 2 would exceed the number.
2.  **Calculate Base \`a\`**: For each exponent \`b\`, calculate the potential integer base \`a\` by taking the b-th root of the number: \`a = round(num^(1/b))\`.
3.  **Check**: Check if \`a^b\` equals the original number. If it does, you've found a valid representation, and the number is a perfect power.
4.  If the loops complete without finding a match, it's not a perfect power.

### 📚 Key Concepts
- **Exponents and Roots**: The core mathematical operations involved.
- **Logarithms**: Used to determine an efficient upper bound for the search space.
`,

  // problem explanation--> 136
  "mnc-narcissistic-number": `
### 💡 Problem Breakdown
A narcissistic number (also known as an Armstrong number) is an n-digit number that is equal to the sum of the nth powers of its digits. The task is to check if a number has this property.

### ⚙️ Solution Walkthrough
1.  **Convert to String**: Convert the input number to a string to easily get its length (the number of digits) and to iterate through its digits.
2.  **Get Number of Digits**: The length of the string is the power \`n\` to which each digit must be raised.
3.  **Loop and Sum**: Loop through the characters of the string.
    - In each iteration, convert the character back to a number.
    - Raise it to the power \`n\`.
    - Add this result to a running sum.
4.  **Compare**: After the loop, compare the final sum with the original input number. If they are equal, it's a narcissistic number.

### 📚 Key Concepts
- **Digit Manipulation**: The problem requires extracting and working with the individual digits of a number.
`,

  // problem explanation--> 137
  "mnc-kaprekar-number": `
### 💡 Problem Breakdown
A Kaprekar number is a non-negative integer whose square can be split into two parts (where the right-hand part is not zero) that add up to the original number. For example, 9 is a Kaprekar number because 9^2 = 81, and 8 + 1 = 9.

### ⚙️ Solution Walkthrough
1.  **Square the Number**: Calculate the square of the input number.
2.  **Convert to String**: Convert the square to a string to make it easy to split.
3.  **Loop and Split**: Iterate through all possible split points of the squared string.
4.  For each split:
    - Parse the left and right parts back into numbers.
    - Check if the right part is non-zero.
    - Check if the sum of the two parts equals the original number.
5.  If a valid split is found, return \`true\`.
6.  If the loop completes without finding a valid split, return \`false\`.

### 📚 Key Concepts
- **String Manipulation**: Converting the square to a string is the key to easily splitting it into parts.
`,

  // problem explanation--> 138
  "mnc-automorphic-number": `
### 💡 Problem Breakdown
An automorphic number is a number whose square "ends" with the same digits as the number itself. For example, 76 is automorphic because 76^2 = 5776.

### ⚙️ Solution Walkthrough
1.  **Square the Number**: Calculate the square of the input number.
2.  **Convert to Strings**: Convert both the original number and its square to strings.
3.  **Check Ending**: Use the string method \`.endsWith()\` to check if the string representation of the square ends with the string representation of the original number.

### 📚 Key Concepts
- **String Methods**: Using \`.endsWith()\` provides a very concise solution.
`,

  // problem explanation--> 139
  "mnc-luhn-algorithm": `
### 💡 Problem Breakdown
The Luhn algorithm (or Modulus 10 algorithm) is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers.

### ⚙️ Solution Walkthrough
The algorithm processes the number's digits from right to left.
1.  **Iterate from Right**: Loop through the digits of the number string from right to left.
2.  **Double Every Second Digit**: Keep track of whether the current digit is in an "even" or "odd" position from the right. If it's in the second position, fourth, and so on (the "even" positions), double its value.
3.  **Sum Digits**: If doubling a digit results in a two-digit number, add the two digits together (e.g., if 7 is doubled to 14, it contributes 1 + 4 = 5 to the sum).
4.  **Total Sum**: Sum up all the resulting values.
5.  **Validation**: The number is valid if the total sum is a multiple of 10.

### 📚 Key Concepts
- **Checksum**: A small-sized datum derived from a block of digital data for the purpose of detecting errors.
`,

  // problem explanation--> 140
  "mnc-taxicab-number": `
### 💡 Problem Breakdown
A taxicab number is the smallest number that can be expressed as the sum of two positive integer cubes in \`n\` distinct ways. The task is to find the nth taxicab number. The most famous is Ta(2) = 1729 = 1^3 + 12^3 = 9^3 + 10^3.

### ⚙️ Solution Walkthrough
This is a computationally intensive search problem.
1.  **Initialize**: Create a map to store sums of cubes and the pairs that produce them.
2.  **Iterate and Search**: Use nested loops to iterate through pairs of integers (a, b).
3.  For each pair, calculate the sum \`s = a^3 + b^3\`.
4.  Store this sum in the map. The value in the map could be a list of the pairs that create that sum.
5.  When you find a sum that has been created in \`n\` distinct ways, you have a candidate. The problem is to find the *smallest* such number, so this requires a systematic search, often using a priority queue to explore the smallest sums first.

### 📚 Key Concepts
- **Computational Number Theory**: A problem that requires searching for numbers with specific properties.
- **Optimization**: A brute-force search can be slow. Data structures like a priority queue can help explore the search space more efficiently.
`,

  // problem explanation--> 141
  "mnc-sqrt-decomposition": `
### 💡 Problem Breakdown
SQRT Decomposition is a technique for answering range queries on an array. It's a trade-off between the O(n) time of naive queries and the O(1) query time of more complex data structures that require O(n) update time. It achieves O(sqrt(n)) for both updates and queries.

### ⚙️ Solution Walkthrough
The core idea is to divide the array into blocks of size \`sqrt(n)\`.
1.  **Preprocessing (O(n))**:
    - Divide the array of size \`n\` into \`sqrt(n)\` blocks.
    - Create a new array (\`blocks\`) and store the sum of each block in it.
2.  **Range Sum Query (O(sqrt(n)))**:
    - For a given range \`[L, R]\`:
    - The elements in the partial blocks at the beginning and end of the range are summed up individually.
    - The elements in the full blocks that are completely contained within the range are summed up by simply adding the pre-computed sums from the \`blocks\` array.

### 📚 Key Concepts
- **Data Structures**: A technique for preprocessing data to speed up queries.
- **Time-Space Trade-off**: We use extra space (the \`blocks\` array) to make queries faster.
`,

  // problem explanation--> 142
  "mnc-fenwick-tree": `
### 💡 Problem Breakdown
A Fenwick Tree, or Binary Indexed Tree (BIT), is a data structure that can efficiently calculate prefix sums of an array and handle point updates. Both operations can be performed in O(log n) time.

### ⚙️ Solution Walkthrough
A Fenwick Tree is typically implemented as an array. The key is how indices are mapped. The value at an index \`i\` in the BIT stores the sum of a specific range of elements from the original array. The size of this range is determined by the last set bit of \`i\`.
- **Update**: To update a value at index \`i\` in the original array, you traverse "up" the Fenwick tree by repeatedly adding the last set bit to the index (\`i += i & -i\`) and updating the values in the BIT array.
- **Query (Prefix Sum)**: To get the sum up to index \`i\`, you traverse "down" the tree by repeatedly subtracting the last set bit from the index (\`i -= i & -i\`) and summing the values from the BIT array.
- **Range Sum**: A range sum from \`[L, R]\` can be calculated as \`query(R) - query(L-1)\`.

### 📚 Key Concepts
- **Binary Indexed Tree (BIT)**: A sophisticated data structure for efficient prefix sum queries and updates.
- **Bit Manipulation**: The logic relies heavily on bitwise operations to navigate the implicit tree structure.
`,

  // problem explanation--> 143
  "mnc-segment-tree": `
### 💡 Problem Breakdown
A Segment Tree is a versatile tree-based data structure used for storing information about intervals or segments. It is particularly efficient for handling range queries (like range minimum, maximum, or sum) and point updates in O(log n) time.

### ⚙️ Solution Walkthrough
1.  **Build**: The tree is built recursively. The root represents the entire array range. Each node is split into two children, representing the left and right halves of its range. This continues until the leaf nodes represent individual array elements. Each node stores an aggregate value (e.g., the minimum) for its range.
2.  **Query**: A range query is also performed recursively. Starting from the root, if a node's range is completely contained within the query range, its value is used. If it partially overlaps, the query is recursively made on its children, and the results are combined.
3.  **Update**: A point update involves traversing down the tree to the corresponding leaf node, updating its value, and then bubbling back up the tree, updating the aggregate values of the parent nodes.

### 📚 Key Concepts
- **Segment Tree**: A powerful tree data structure for range queries.
- **Divide and Conquer**: The build and query operations are based on a divide-and-conquer strategy.
`,

  // problem explanation--> 144
  "mnc-prime-factorization": `
### 💡 Problem Breakdown
Prime factorization is the process of finding the prime numbers which multiply together to make the original number.

### ⚙️ Solution Walkthrough
An efficient trial division method can be used.
1.  **Handle 2s**: First, repeatedly divide the number by 2 and add '2' to the factors list until it's no longer even.
2.  **Handle Odd Factors**: Now the number must be odd. Loop from \`i = 3\` up to the square root of the number, incrementing by 2 (since we don't need to check even numbers).
3.  For each \`i\`, repeatedly divide the number by \`i\` while it's divisible, adding \`i\` to the factors list each time.
4.  **Final Prime**: If the number that remains after the loop is greater than 2, then that remaining number is itself a prime factor.

### 📚 Key Concepts
- **Prime Numbers**: The building blocks of integers.
- **Trial Division**: An algorithm for factorization.
`,

  // problem explanation--> 145
  "mnc-number-of-divisors": `
### 💡 Problem Breakdown
The task is to count the total number of positive divisors of a given integer.

### ⚙️ Solution Walkthrough
A simple and efficient method is to iterate up to the square root of the number.
1.  **Initialize**: \`count = 0\`.
2.  **Loop**: Iterate from \`i = 1\` up to \`Math.sqrt(n)\`.
3.  **Check for Divisor**: If \`i\` divides \`n\` evenly (\`n % i === 0\`), we have found a divisor.
4.  **Count Pairs**: A divisor \`i\` has a corresponding pair \`n / i\`.
    - If \`i * i === n\`, then \`i\` and \`n / i\` are the same (the square root). We've found only one divisor, so add 1 to the count.
    - Otherwise, we've found two distinct divisors (\`i\` and \`n / i\`), so add 2 to the count.
5.  Return the final \`count\`.

### 📚 Key Concepts
- **Divisors**: Understanding that divisors come in pairs is key to the square root optimization.
`,

  // problem explanation--> 146
  "mnc-sum-of-divisors": `
### 💡 Problem Breakdown
The task is to find the sum of all positive divisors of a given integer.

### ⚙️ Solution Walkthrough
This is very similar to counting divisors. We iterate up to the square root and sum the pairs of divisors.
1.  **Initialize**: \`sum = 0\`.
2.  **Loop**: Iterate from \`i = 1\` up to \`Math.sqrt(n)\`.
3.  **Check for Divisor**: If \`i\` divides \`n\` evenly, add the pair of divisors to the sum.
    - If \`i * i === n\`, add \`i\` to the sum once.
    - Otherwise, add both \`i\` and \`n / i\` to the sum.
4.  Return the final \`sum\`.

### 📚 Key Concepts
- **Divisors**: The logic is based on finding pairs of divisors.
`,

  // problem explanation--> 147
  "mnc-random-point-in-circle": `
### 💡 Problem Breakdown
The task is to generate a random point that is *uniformly distributed* within a circle. A naive approach of picking a random angle and a random radius results in points bunching up near the center.

### ⚙️ Solution Walkthrough
To achieve a uniform distribution, the radius needs to be scaled correctly.
1.  **Generate Random Angle**: Pick a random angle from 0 to 2π. \`angle = 2 * Math.PI * Math.random()\`.
2.  **Generate Scaled Radius**: Pick a random radius, but then take its square root. This accounts for the fact that the area of the circle grows with the square of the radius. \`r = radius * Math.sqrt(Math.random())\`.
3.  **Convert to Cartesian Coordinates**: Convert the polar coordinates (angle, r) to Cartesian coordinates (x, y).
    - \`x = r * Math.cos(angle)\`
    - \`y = r * Math.sin(angle)\`

### 📚 Key Concepts
- **Uniform Distribution**: A key statistical concept.
- **Polar Coordinates**: A coordinate system that is often useful for circular problems.
`,

  // problem explanation--> 148
  "mnc-vector-cross-product": `
### 💡 Problem Breakdown
The cross product is a binary operation on two vectors in three-dimensional space. It results in a vector that is perpendicular to both of the vectors being multiplied.

### ⚙️ Solution Walkthrough
The solution is a direct implementation of the cross product formula for two vectors \`a = [ax, ay, az]\` and \`b = [bx, by, bz]\`.
- \`cx = ay*bz - az*by\`
- \`cy = az*bx - ax*bz\`
- \`cz = ax*by - ay*bx\`
The function takes the two vector arrays, calculates these three components, and returns the new result vector.

### 📚 Key Concepts
- **Vector Algebra**: The cross product is a fundamental operation in 3D vector math.
`,

  // problem explanation--> 149
  "mnc-matrix-rotation": `
### 💡 Problem Breakdown
The task is to rotate an N x N matrix by 90 degrees clockwise, *in-place*.

### ⚙️ Solution Walkthrough
A clever two-step process can achieve this in-place.
1. **Transpose the Matrix**: First, transpose the matrix. A transposition swaps the element at \`(r, c)\` with the element at \`(c, r)\`.
2. **Reverse Each Row**: After transposing, reverse each individual row of the matrix.

This two-step transformation is equivalent to a 90-degree clockwise rotation.
\`\`\`javascript
// Step 1: Transpose
for (let r = 0; r < n; r++) {
  for (let c = r; c < n; c++) {
    [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
  }
}
// Step 2: Reverse each row
for (let r = 0; r < n; r++) {
  matrix[r].reverse();
}
\`\`\`
### 📚 Key Concepts
- **Matrix Operations**: The solution is based on a linear algebra insight that rotation can be decomposed into transposition and reflection.
`,

  // problem explanation--> 150
  "mnc-spiral-matrix-ii": `
### 💡 Problem Breakdown
The task is to generate an n x n matrix and fill it with numbers from 1 to n^2 in a spiral order.

### ⚙️ Solution Walkthrough
This is the reverse of the spiral traversal problem. We use four boundary pointers to fill the matrix layer by layer.
1. **Initialize**: Create an empty \`n x n\` matrix. Initialize boundary pointers (\`top\`, \`bottom\`, \`left\`, \`right\`) and a counter starting at 1.
2. **Loop**: While the boundaries have not crossed (\`top <= bottom\` and \`left <= right\`):
   - **Fill Top Row**: Loop from \`left\` to \`right\`, filling \`matrix[top][i]\` with the counter value and incrementing the counter. Then move the \`top\` boundary down.
   - **Fill Right Column**: Loop from \`top\` to \`bottom\`, filling \`matrix[i][right]\`. Then move the \`right\` boundary in.
   - **Fill Bottom Row**: Loop from \`right\` to \`left\` (backwards), filling \`matrix[bottom][i]\`. Then move the \`bottom\` boundary up.
   - **Fill Left Column**: Loop from \`bottom\` to \`top\` (backwards), filling \`matrix[i][left]\`. Then move the \`left\` boundary in.
3. Return the completed matrix.

### 📚 Key Concepts
- **Matrix Generation**: Building a 2D data structure with a specific pattern.
- **Boundary Pointers**: The four pointers effectively shrink the area to be filled, layer by layer.
`,

  // problem explanation--> 151
  "mnc-polygon-area": `
### 💡 Problem Breakdown
The task is to calculate the area of a simple polygon given the Cartesian coordinates of its vertices. The Shoelace formula (also known as the surveyor's formula) is a standard and efficient algorithm for this.

### ⚙️ Solution Walkthrough
The formula works by taking the cross-product of consecutive pairs of vertices.
Area = 0.5 * | (x1*y2 - y1*x2) + (x2*y3 - y2*x3) + ... + (xn*y1 - yn*x1) |
\`\`\`javascript
function polygonArea(vertices) {
  let area = 0;
  const n = vertices.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = vertices[i];
    const [x2, y2] = vertices[(i + 1) % n]; // Wrap around for the last vertex
    area += (x1 * y2 - x2 * y1);
  }
  return Math.abs(area) / 2.0;
}
\`\`\`
1.  **Loop**: Iterate through the vertices. For each vertex \`i\`, we pair it with the next vertex \`i+1\`.
2.  **Wrap Around**: The \`(i + 1) % n\` part is crucial. It ensures that the last vertex is correctly paired with the first vertex to close the polygon.
3.  **Cross-Product**: The term \`x1 * y2 - x2 * y1\` is the cross-product, which gives twice the signed area of the triangle formed by the origin and the two points. Summing these up gives twice the signed area of the whole polygon.
4.  **Final Area**: We take the absolute value and divide by 2 to get the final, positive area.

### 📚 Key Concepts
- **Shoelace Formula**: A powerful algorithm from computational geometry for calculating the area of a polygon.
`,

  // problem explanation--> 152
  "mnc-karatsuba-multiplication-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about an efficient algorithm for multiplying large numbers. The standard "grade-school" multiplication algorithm is O(n^2). The Karatsuba algorithm is a "divide and conquer" algorithm that is faster, with a complexity of approximately O(n^1.585).

### ⚙️ Solution Walkthrough
The core idea is to reduce the number of recursive multiplications. To multiply two n-digit numbers, x and y:
1.  **Split**: Split x and y into two halves: \`x = a * 10^(n/2) + b\` and \`y = c * 10^(n/2) + d\`.
2.  **The Trick**: The product is \`x*y = (ac) * 10^n + (ad + bc) * 10^(n/2) + bd\`. This seems to require four multiplications (ac, ad, bc, bd). Karatsuba noticed that \`ad + bc = (a+b)*(c+d) - ac - bd\`. The terms \`ac\` and \`bd\` are already needed. The new term \`(a+b)*(c+d)\` is just one more multiplication.
3.  **Recurse**: The algorithm makes only **three** recursive calls on numbers of half the size:
    - \`z2 = ac\`
    - \`z0 = bd\`
    - \`z1 = (a+b)*(c+d) - z2 - z0\`
4.  **Combine**: The final result is assembled: \`z2 * 10^n + z1 * 10^(n/2) + z0\`.

### 📚 Key Concepts
- **Divide and Conquer**: The algorithm breaks a large multiplication into smaller ones.
- **Algorithmic Optimization**: A clever mathematical trick is used to reduce the number of subproblems, leading to a better time complexity.
`,

  // problem explanation--> 153
  "mnc-extended-euclidean-algorithm": `
### 💡 Problem Breakdown
The Extended Euclidean Algorithm is an extension of the standard Euclidean algorithm for finding the greatest common divisor (GCD) of two integers, \`a\` and \`b\`. In addition to finding the GCD, it also finds integer coefficients \`x\` and \`y\` that satisfy Bézout's identity: \`ax + by = gcd(a, b)\`.

### ⚙️ Solution Walkthrough
The algorithm is recursive.
\`\`\`javascript
// Returns [gcd, x, y]
function extendedGcd(a, b) {
  // Base Case
  if (a === 0) {
    return [b, 0, 1];
  }
  
  // Recursive call
  const [gcd, x1, y1] = extendedGcd(b % a, a);
  
  // Update coefficients based on the recursive result
  const x = y1 - Math.floor(b / a) * x1;
  const y = x1;
  
  return [gcd, x, y];
}
\`\`\`
1.  **Base Case**: When \`a\` is 0, we know \`gcd(0, b) = b\`. The equation is \`0*x + b*y = b\`, for which a simple solution is \`x=0, y=1\`.
2.  **Recursive Step**: The algorithm makes a recursive call with \`b % a\` and \`a\`. It gets back the GCD and coefficients \`x1\`, \`y1\` for that smaller problem.
3.  **Update Coefficients**: The coefficients for the original problem are then calculated based on the results from the subproblem.

### 📚 Key Concepts
- **Bézout's Identity**: A fundamental theorem in number theory.
- **Modular Arithmetic**: This algorithm is a key component for finding modular multiplicative inverses, which is crucial for cryptography like RSA.
`,

  // problem explanation--> 154
  "mnc-rsa-encryption-conceptual": `
### 💡 Problem Breakdown
RSA is a public-key cryptosystem that is widely used for secure data transmission. The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers (the "factoring problem").

### ⚙️ Solution Walkthrough
The high-level steps are:
1.  **Key Generation**:
    - Choose two very large, distinct prime numbers, \`p\` and \`q\`.
    - Calculate \`n = p * q\`. This \`n\` is part of both the public and private key.
    - Calculate Euler's totient function: \`φ(n) = (p-1)*(q-1)\`.
    - Choose an integer \`e\` such that \`1 < e < φ(n)\` and \`e\` is coprime to \`φ(n)\`. The pair \`(e, n)\` is the **public key**.
    - Calculate the modular multiplicative inverse of \`e\` modulo \`φ(n)\` to find \`d\`. The pair \`(d, n)\` is the **private key**.
2.  **Encryption**: To encrypt a message \`m\`, the sender uses the public key: \`ciphertext (c) = m^e mod n\`.
3.  **Decryption**: To decrypt, the receiver uses their private key: \`message (m) = c^d mod n\`.

### 📚 Key Concepts
- **Asymmetric Cryptography**: Uses a pair of keys (public and private) for encryption and decryption.
- **Number Theory**: The algorithm's security is based on principles of number theory, including prime numbers and modular arithmetic.
`,

  // problem explanation--> 155
  "mnc-hailstone-sequence": `
### 💡 Problem Breakdown
The Hailstone sequence (related to the Collatz conjecture) is generated by a simple set of rules for a given starting number:
- If the current number \`n\` is even, the next number is \`n / 2\`.
- If \`n\` is odd, the next number is \`3 * n + 1\`.
The process is repeated until the sequence reaches 1. The task is to generate this sequence.

### ⚙️ Solution Walkthrough
A simple \`while\` loop can be used to generate the sequence.
\`\`\`javascript
function hailstone(n) {
  const sequence = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }
  return sequence;
}
\`\`\`
1.  **Initialize**: Start a results array with the initial number.
2.  **Loop**: Continue the loop as long as the current number is not 1.
3.  **Apply Rules**: Inside the loop, apply the appropriate rule based on whether the number is even or odd.
4.  **Append**: Add the newly calculated number to the sequence array.

### 📚 Key Concepts
- **Algorithmic Simulation**: The code directly simulates the defined mathematical process.
`,

  // problem explanation--> 156
  "mnc-goldbach-conjecture": `
### 💡 Problem Breakdown
Goldbach's Conjecture is an unproven statement in number theory that asserts every even integer greater than 2 is the sum of two prime numbers. The task is to write a function that, given an even number, finds such a pair of primes.

### ⚙️ Solution Walkthrough
A practical approach involves generating primes up to the given number first.
1.  **Generate Primes**: Use a Sieve of Eratosthenes to efficiently find all prime numbers up to the given even number \`n\`. Store them in a list or a \`Set\` for fast lookups.
2.  **Iterate and Check**: Loop through the list of primes. For each \`prime\`, calculate the "complement" needed to sum to \`n\`: \`complement = n - prime\`.
3.  Check if this \`complement\` is also in your set of primes.
4.  If it is, you have found a valid pair. Return the \`prime\` and the \`complement\`.

### 📚 Key Concepts
- **Sieve of Eratosthenes**: An efficient algorithm for pre-computing a list of prime numbers.
- **Prime Numbers**: A core concept in number theory.
`,

  // problem explanation--> 157
  "mnc-magic-square-check": `
### 💡 Problem Breakdown
A magic square is an n x n grid filled with numbers where the sum of the numbers in each row, each column, and both main diagonals is the same. The task is to write a function to validate if a given matrix is a magic square.

### ⚙️ Solution Walkthrough
The solution involves calculating all the required sums and comparing them.
1.  **Calculate Target Sum**: First, calculate the sum of the first row. This will be our target sum that all other lines must match.
2.  **Check Rows**: Loop through the remaining rows and check if their sum equals the target sum. If any differ, return \`false\`.
3.  **Check Columns**: Loop through the columns and check if their sum equals the target sum.
4.  **Check Diagonals**: Calculate the sum of the main diagonal and the anti-diagonal and check if they equal the target sum.
5.  If all checks pass, return \`true\`.
(A more advanced version for a "normal" magic square would also check if all numbers from 1 to n^2 are present and distinct).

### 📚 Key Concepts
- **Matrix Traversal**: The solution requires iterating through the matrix in different ways (by row, by column, by diagonal).
`,

  // problem explanation--> 158
  "mnc-happy-number-cycle-detection": `
### 💡 Problem Breakdown
This is a variation of the "Happy Number" problem. Instead of using a \`Set\` to store seen numbers (which uses O(n) space), we can detect the cycle using Floyd's Tortoise and Hare algorithm, which uses O(1) space.

### ⚙️ Solution Walkthrough
The algorithm uses two pointers moving at different speeds.
1.  **Initialize**: Create two pointers, a "slow" pointer and a "fast" pointer, both starting at the initial number \`n\`.
2.  **Loop**: In each iteration of a loop:
    - The \`slow\` pointer advances one step (by one application of the sum-of-squares function).
    - The \`fast\` pointer advances two steps.
3.  **Check for Cycle**: The loop continues until the \`slow\` and \`fast\` pointers meet. If they meet at a value other than 1, a cycle has been detected.
4.  **Check for Happiness**: After the loop, if the value they met at is 1, the number is happy.

### 📚 Key Concepts
- **Floyd's Cycle-Finding Algorithm (Tortoise and Hare)**: A pointer algorithm that uses two pointers moving at different speeds to detect a cycle in a sequence.
`,

  // problem explanation--> 159
  "mnc-number-to-words": `
### 💡 Problem Breakdown
This is a complex parsing and string-building problem. The task is to convert a non-negative integer into its English word representation.

### ⚙️ Solution Walkthrough
The solution involves breaking the number down into chunks of three digits (hundreds, tens, ones) and handling each chunk, then appending the correct "scale" word (Thousand, Million, Billion).
1.  **Setup**: Create helper arrays or maps for the English words for numbers 0-19, tens (20, 30, ...), and the scale words.
2.  **Main Loop**: Process the number in chunks of three digits from right to left (by repeatedly taking \`num % 1000\`).
3.  **Helper Function**: Create a helper function that takes a number less than 1000 and converts it to words.
    - This helper handles hundreds (\`n / 100\`), then tens and ones (using the maps).
4.  **Combine**: In the main loop, if a chunk is not zero, call the helper on it, append the corresponding scale word ("Thousand", "Million", etc.), and prepend this to the final result string.

### 📚 Key Concepts
- **Modular Design**: Breaking the complex problem down into a smaller, manageable helper function for processing numbers under 1000.
`,

  // problem explanation--> 160
  "mnc-basic-calculator": `
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

  // problem explanation--> 161
  "mnc-nth-ugly-number": `
### 💡 Problem Breakdown
The task is to find the n-th "ugly number." Ugly numbers are positive integers whose prime factors are only 2, 3, and 5. The sequence starts with 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...

### ⚙️ Solution Walkthrough
This can be solved efficiently using dynamic programming. The key insight is that every ugly number is a previous ugly number multiplied by 2, 3, or 5.
1.  **Initialize**: Create a DP array \`ugly\` and add the first ugly number, 1. Also, create three pointers, \`p2\`, \`p3\`, \`p5\`, all initialized to 0.
2.  **Loop**: Loop until you have found \`n\` ugly numbers.
3.  **Find Next**: In each iteration, find the next ugly number. It will be the minimum of \`ugly[p2] * 2\`, \`ugly[p3] * 3\`, and \`ugly[p5] * 5\`.
4.  **Add and Advance**: Add this minimum value to the \`ugly\` array. Now, advance the pointer(s) that generated this minimum value. (Note: you might need to advance multiple pointers if there's a tie, e.g., 6 can be generated by 3*2 and 2*3).
5.  The final answer is the last element in the \`ugly\` array.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds the sequence of ugly numbers from the bottom up, using previously found ugly numbers to generate the next one.
`,

  // problem explanation--> 162
  "mnc-super-ugly-number": `
### 💡 Problem Breakdown
This is a generalization of the "Nth Ugly Number" problem. A "super ugly number" is a positive integer whose prime factors are all in a given list of primes.

### ⚙️ Solution Walkthrough
The dynamic programming approach is adapted. Instead of three fixed pointers for 2, 3, and 5, we use an array of pointers, one for each prime in the input list.
1.  **Initialize**: Create a DP array \`ugly\` with the first ugly number (1). Create a \`pointers\` array of the same size as the \`primes\` list, all initialized to 0.
2.  **Loop**: Loop until you have found \`n\` ugly numbers.
3.  **Find Next**: In each iteration, find the next ugly number by calculating \`ugly[pointers[i]] * primes[i]\` for all \`i\` and taking the minimum of these values.
4.  **Add and Advance**: Add this minimum value to the \`ugly\` array. Now, advance all pointers \`i\` for which \`ugly[pointers[i]] * primes[i]\` was equal to the minimum value.
5.  The final answer is the last element in the \`ugly\` array.

### 📚 Key Concepts
- **Dynamic Programming**: The solution is a generalization of the standard ugly number problem.
`,

  // problem explanation--> 163
  "mnc-largest-number": `
### 💡 Problem Breakdown
The task is to arrange an array of non-negative integers to form the largest possible number. For example, for \`[3, 30, 34, 5, 9]\`, the largest number is \`"9534330"\`.

### ⚙️ Solution Walkthrough
The key to this problem is a custom sorting comparison. Standard numeric or string sort will not work. To decide if a number \`a\` should come before a number \`b\`, we should compare the concatenated strings \`b + a\` and \`a + b\`. Whichever combination forms a larger number determines the order.
1.  **Convert to Strings**: Convert all numbers in the input array to strings.
2.  **Custom Sort**: Sort the array of strings using the custom comparator: \`nums.sort((a, b) => (b + a).localeCompare(a + b))\`.
3.  **Join**: Join the sorted strings to form the final result.
4.  **Edge Case**: If the largest number formed is "0" (e.g., from an input of \`[0, 0]\`), just return "0".

### 📚 Key Concepts
- **Custom Sorting**: The problem is solved by defining a non-obvious but correct comparison logic for the sort function.
`,

  // problem explanation--> 164
  "mnc-fraction-addition-and-subtraction": `
### 💡 Problem Breakdown
This is a complex string parsing and fraction arithmetic problem. The task is to evaluate an expression of adding and subtracting fractions and return the simplified result.

### ⚙️ Solution Walkthrough
1.  **Parse**: Use a regular expression to parse the input string into a list of numerators and denominators. Be sure to handle the signs correctly.
2.  **Summation**:
    - Start with a result fraction of \`0/1\`.
    - Iterate through the parsed fractions. For each new fraction \`n/d\`, add it to the current result \`a/b\`. The formula for addition is \`(a*d + n*b) / (b*d)\`.
3.  **Simplify**: After summing all the fractions, the result may not be in its simplest form. Calculate the greatest common divisor (GCD) of the final numerator and denominator.
4.  Divide both the numerator and denominator by their GCD to get the simplified fraction.
5.  Format the result as a string.

### 📚 Key Concepts
- **Fraction Arithmetic**: Implementing the rules for adding fractions.
- **Greatest Common Divisor (GCD)**: Used to simplify the final fraction.
- **String Parsing with Regex**: A powerful tool for extracting structured data from a string.
`,

  // problem explanation--> 165
  "mnc-factorial-trailing-zeroes": `
### 💡 Problem Breakdown
The task is to find the number of trailing zeros in the factorial of a number \`n\`. A brute-force calculation of \`n!\` is not feasible for large \`n\`.

### ⚙️ Solution Walkthrough
The key insight is that trailing zeros are created by factors of 10. Each factor of 10 is a product of 2 and 5. In any factorial, the number of factors of 2 is always greater than the number of factors of 5. Therefore, the number of trailing zeros is determined solely by the number of factors of 5 in the prime factorization of \`n!\`.
1.  The number of factors of 5 is the sum of \`floor(n/5)\`, \`floor(n/25)\`, \`floor(n/125)\`, and so on.
2.  Implement this with a \`while\` loop. Initialize \`count = 0\`. While \`n >= 5\`, update \`n = Math.floor(n / 5)\` and add this new \`n\` to \`count\`.
3.  Return \`count\`.

### 📚 Key Concepts
- **Number Theory**: The solution relies on insights from prime factorization rather than direct computation.
`,

  // problem explanation--> 166
  "mnc-minimum-path-sum": `
### 💡 Problem Breakdown
This is another grid-based dynamic programming problem. The grid is filled with costs, and the goal is to find the path from top-left to bottom-right with the minimum total cost. You can only move right or down.

### ⚙️ Solution Walkthrough
The logic is very similar to "Unique Paths," but instead of summing the number of paths, we are summing the costs and finding the minimum.
1. **DP State**: We can modify the grid in-place. \`grid[r][c]\` will store the minimum cost to reach that cell.
2. **Initialization**: The first row is updated by adding the costs from the left. The first column is updated by adding the costs from above.
3. **Fill DP Table**: Use nested loops.
4. **Transition**: The minimum cost to reach cell \`(r, c)\` is its own cost plus the minimum of the costs from the cell above and the cell to the left: \`grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1])\`.
5. The final answer is the value in the bottom-right corner.

### 📚 Key Concepts
- **Dynamic Programming**: The optimal path to a cell must pass through one of its optimal-path neighbors.
`,

  // problem explanation--> 167
  "mnc-largest-perimeter-triangle": `
### 💡 Problem Breakdown
Given an array of side lengths, the task is to find the largest possible perimeter of a valid triangle that can be formed using three of those lengths. For three sides to form a valid triangle, the sum of the lengths of any two sides must be greater than the length of the third side (the triangle inequality theorem).

### ⚙️ Solution Walkthrough
A greedy approach on a sorted array is efficient.
1. **Sort**: Sort the array of side lengths in ascending order.
2. **Loop**: Iterate from the end of the array backwards. We do this because to maximize the perimeter, we should try to use the longest possible sides.
3. **Check Triangle Inequality**: For each index \`i\`, we consider the triplet \`(nums[i-2], nums[i-1], nums[i])\`. Because the array is sorted, we only need to check the most restrictive condition: \`nums[i-2] + nums[i-1] > nums[i]\`.
4. **Return**: The first triplet that satisfies this condition will form the triangle with the largest possible perimeter. Return the sum of these three lengths.
5. If the loop finishes without finding a valid triplet, return 0.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy choice of checking the largest potential sides first is guaranteed to find the optimal solution.
- **Triangle Inequality**: The core mathematical property required for the validation.
`,

  // problem explanation--> 168
  "mnc-add-to-array-form-of-integer": `
### 💡 Problem Breakdown
The task is to add an integer \`k\` to a number represented as an array of digits. This is another large number arithmetic problem.

### ⚙️ Solution Walkthrough
The most straightforward way is to convert the array to a number, perform the addition, and convert it back. Since the numbers can be very large, \`BigInt\` is the perfect tool.
1. **Convert Array to String**: Join the elements of the digit array to form a string.
2. **Convert to BigInt**: Convert this string and the integer \`k\` to \`BigInt\`s.
3. **Add**: Perform the addition using BigInt arithmetic.
4. **Convert back to Array**: Convert the resulting BigInt back to a string, then split it into an array of characters, and finally map each character back to a number.

An alternative is to simulate grade-school addition from right to left, which avoids using \`BigInt\`.

### 📚 Key Concepts
- **\`BigInt\`**: A built-in JavaScript type for handling arbitrarily large integers.
- **Type Conversion**: The solution involves converting between arrays, strings, and numbers (or BigInts).
`,

  // problem explanation--> 169
  "mnc-divide-two-integers": `
### 💡 Problem Breakdown
The challenge is to divide two integers without using the \`*\`, \`/\`, or \`%\` operators. This requires a lower-level implementation.

### ⚙️ Solution Walkthrough
The solution can be implemented using bit shifting and subtraction. The idea is to repeatedly subtract the largest possible multiple of the divisor (that is a power of 2) from the dividend.
1. **Handle Signs and Edge Cases**: Handle signs separately. Work with absolute values. Check for the overflow edge case.
2. **Main Loop**: While the \`dividend >= divisor\`:
   - Find the largest \`multiple\` of the divisor (by left-shifting) that is still less than or equal to the dividend. Keep track of the corresponding \`powerOfTwo\`.
   - Add this \`powerOfTwo\` to the \`quotient\`.
   - Subtract the \`multiple\` from the \`dividend\`.
3. Apply the original sign to the \`quotient\`.

### 📚 Key Concepts
- **Bit Manipulation**: Using bit shifting (\`<<\`) as an efficient way to multiply by powers of 2.
- **Manual Arithmetic Simulation**: Simulating division through repeated subtraction.
`,

  // problem explanation--> 170
  "mnc-valid-number": `
### 💡 Problem Breakdown
This is a very difficult string parsing problem. The goal is to validate if a string represents a valid number according to a complex set of rules (integers, decimals, scientific notation).

### ⚙️ Solution Walkthrough
A robust solution involves building a **Finite State Machine (FSM)** or a state-based parser.
1.  Define a set of states (e.g., START, INTEGER_SIGN, INTEGER, DECIMAL, DECIMAL_ONLY, EXPONENT, EXPONENT_SIGN, EXPONENT_NUMBER).
2.  Define a set of valid transitions between these states based on the input character (digit, sign, '.', 'e').
3.  Iterate through the string character by character, transitioning the state machine.
4.  If an invalid character is encountered for the current state, the number is invalid.
5.  After the loop, check if the final state is a valid "accepting" state.

A simpler but less rigorous approach is to use a very complex regular expression.

### 📚 Key Concepts
- **Finite State Machine**: A computational model that is ideal for parsing and validating strings against a set of rules.
`,

  // problem explanation--> 171
  "mnc-permutation-sequence": `
### 💡 Problem Breakdown
The task is to find the \`k\`-th lexicographical permutation of the numbers \`[1, 2, ..., n]\`. A brute-force generation of all permutations would be too slow.

### ⚙️ Solution Walkthrough
A mathematical, factorial-based approach is required.
1.  **Key Insight**: For \`n\` numbers, there are \`(n-1)!\` permutations starting with each number. This allows us to determine the first number of the \`k\`-th permutation.
2.  **Pre-compute Factorials**: Calculate factorials up to \`n-1\`.
3.  **Build Permutation**:
    - Start with a list of available numbers \`[1, ..., n]\`.
    - To find the first digit: the index of this digit in the available numbers list is \`floor((k-1) / (n-1)!)\`.
    - Add this digit to the result. Remove it from the available list.
    - Update \`k\` to be the remainder: \`k = (k-1) % (n-1)! + 1\`.
    - Decrement \`n\` and repeat the process to find the next digit using \`(n-2)!\`, and so on.

### 📚 Key Concepts
- **Factorial Number System**: The algorithm is an application of this mathematical concept for representing permutations.
`,

  // problem explanation--> 172
  "mnc-basic-calculator-iii": `
### 💡 Problem Breakdown
This is the most advanced version of the basic calculator problem. It requires handling numbers, \`+\`, \`-\`, \`*\`, \`/\`, and nested parentheses.

### ⚙️ Solution Walkthrough
The standard algorithm for this is a variation of Dijkstra's "Shunting-yard algorithm" or simply using two stacks: one for numbers (\`values\`) and one for operators (\`ops\`). A recursive descent parser is another powerful approach.
- A recursive function \`calculate(queue_of_tokens)\` can be used.
- It maintains a stack for numbers within the current level of parentheses.
- It loops through the tokens.
- If it sees \`(\`, it makes a recursive call to handle the sub-expression.
- It handles \`*\` and \`/\` with high precedence by immediately operating on the last number on the stack.
- It handles \`+\` and \`-\` with low precedence by pushing the signed number to the stack.
- The final result for the level is the sum of the numbers on the stack.

### 📚 Key Concepts
- **Recursive Descent Parsing**: A common technique for parsing expressions with nested structures.
- **Stack**: Used within each level of recursion to handle operator precedence.
`,

  // problem explanation--> 173
  "mnc-number-of-digit-one": `
### 💡 Problem Breakdown
This is a very difficult digit-based dynamic programming or mathematical problem. The goal is to count the total occurrences of the digit '1' in all non-negative integers up to \`n\`.

### ⚙️ Solution Walkthrough
A digit-by-digit mathematical approach is efficient.
1.  Iterate through the number \`n\` by place value (1s, 10s, 100s, etc.).
2.  For each place value \`p\` (e.g., 1, 10, 100):
    - The number of times '1' appears in this place is determined by the digits to the left and right.
    - Let \`divider = p * 10\`.
    - \`count += floor(n / divider) * p\` (This counts the full blocks of '1's).
    - \`count += min(max(n % divider - p + 1, 0), p)\` (This counts the '1's in the final, partial block).
3.  Summing these counts across all place values gives the total.

### 📚 Key Concepts
- **Digit DP / Combinatorics**: A complex counting problem that requires breaking down the number by its place values.
`,

  // problem explanation--> 174
  "mnc-max-sum-of-rectangle-no-larger-than-k": `
### 💡 Problem Breakdown
This is a very hard problem. The task is to find the maximum sum of any rectangular subgrid in a 2D matrix, with the constraint that this sum cannot be larger than a given value \`k\`.

### ⚙️ Solution Walkthrough
The solution involves reducing the 2D problem to a 1D problem.
1.  **Reduce to 1D**: Iterate through all possible pairs of left and right columns to define the boundaries of a potential rectangle.
2.  For each pair of columns, create a 1D array where each element is the sum of the values in that row between the chosen columns.
3.  **Solve 1D Subproblem**: Now, for this 1D array, we need to solve the problem: "Find the maximum sum of a subarray that is no larger than k."
4.  **1D Subproblem Solution**: This can be solved in O(n log n) time. Calculate prefix sums. For each prefix sum \`p\`, we want to find a previous prefix sum \`q\` such that \`p - q <= k\`, and we want to maximize \`p - q\`. This is equivalent to finding the smallest \`q >= p - k\`. This search can be done efficiently using a sorted list or a balanced binary search tree.

### 📚 Key Concepts
- **Problem Reduction**: Reducing a 2D problem to a 1D one is a common strategy.
- **Kadane's Algorithm Adaptation**: The 1D subproblem is a variation of the maximum subarray sum problem.
`,

  // problem explanation--> 175
  "mnc-russian-peasant-multiplication": `
### 💡 Problem Breakdown
This is an ancient multiplication algorithm that works by repeatedly halving one number and doubling the other, which can be implemented efficiently with bit shifts.

### ⚙️ Solution Walkthrough
The algorithm works as follows:
1.  Initialize \`result = 0\`.
2.  While the first number (\`a\`) is greater than 0:
    - If \`a\` is odd, add the second number (\`b\`) to the \`result\`.
    - Halve \`a\` (using integer division).
    - Double \`b\`.
3.  Return \`result\`.

### 📚 Key Concepts
- **Bit Manipulation**: The halving and doubling can be done with \`>>\` and \`<<\` bit shifts, and checking for odd can be done with \`& 1\`.
`,

  // problem explanation--> 176
  "mnc-babylonian-sqrt": `
### 💡 Problem Breakdown
The Babylonian method is an ancient and efficient iterative algorithm for approximating the square root of a number.

### ⚙️ Solution Walkthrough
1.  Start with an initial guess (e.g., \`x = n\`).
2.  Iterate a fixed number of times or until the result converges:
    - Update the guess using the formula: \`x = (x + n / x) / 2\`.
3.  The final value of \`x\` is a good approximation of the square root.

### 📚 Key Concepts
- **Numerical Methods**: An iterative algorithm for approximating a mathematical value.
`,

  // problem explanation--> 177
  "mnc-sum-of-two-integers": `
### 💡 Problem Breakdown
The challenge is to add two integers using only bitwise operators, without using \`+\` or \`-\`.

### ⚙️ Solution Walkthrough
The solution simulates a binary full adder.
1.  **Sum without carry**: The sum of bits without considering a carry can be calculated with the XOR operator (\`a ^ b\`).
2.  **Carry**: The carry bit can be calculated with the AND operator, shifted left by one (\`(a & b) << 1\`).
3.  **Loop**: We repeat this process. The new \`a\` is the sum, the new \`b\` is the carry. We continue until the carry becomes zero.
\`\`\`javascript
function getSum(a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
\`\`\`
### 📚 Key Concepts
- **Bit Manipulation**: The core of the solution is to implement addition at the bit level.
`,

  // problem explanation--> 178
  "mnc-integer-to-english-words": `
### 💡 Problem Breakdown
This is a complex parsing and string-building problem. The task is to convert a non-negative integer into its English word representation.

### ⚙️ Solution Walkthrough
The solution involves breaking the number down into chunks of three digits (hundreds, tens, ones) and handling each chunk, then appending the correct "scale" word (Thousand, Million, Billion).
1.  **Setup**: Create helper arrays or maps for the English words for numbers 0-19, tens (20, 30, ...), and the scale words.
2.  **Main Loop**: Process the number in chunks of three digits from right to left (by repeatedly taking \`num % 1000\`).
3.  **Helper Function**: Create a helper function that takes a number less than 1000 and converts it to words.
    - This helper handles hundreds (\`n / 100\`), then tens and ones (using the maps).
4.  **Combine**: In the main loop, if a chunk is not zero, call the helper on it, append the corresponding scale word ("Thousand", "Million", etc.), and prepend this to the final result string.

### 📚 Key Concepts
- **Modular Design**: Breaking the complex problem down into a smaller, manageable helper function for processing numbers under 1000.
`,

  // problem explanation--> 179
  "mnc-perfect-rectangle": `
### 💡 Problem Breakdown
This is a hard geometry problem. For a set of smaller rectangles to form a single, non-overlapping larger rectangle, two conditions must be met:
1.  The sum of the areas of all the small rectangles must equal the area of the overall bounding box.
2.  All interior corner points must be "cancelled out." This means every point inside the bounding box must be a corner of an even number of small rectangles (2 or 4). The four corners of the bounding box itself must each appear exactly once.

### ⚙️ Solution Walkthrough
1.  Calculate the total area of all small rectangles and find the overall bounding box. Check if the areas match.
2.  Use a \`Set\` to track corner points. For each rectangle, add its four corner points to the set. If a point is already in the set, remove it.
3.  After processing all rectangles, the set should contain exactly four points, and these must be the four corners of the bounding box.

### 📚 Key Concepts
- **Computational Geometry**: A problem involving geometric shapes and their properties.
- **Area and Point Cancellation**: The two key invariants that must be checked.
`,

  // problem explanation--> 180
  "mnc-robot-bounded-in-circle": `
### 💡 Problem Breakdown
The task is to determine if a robot's path, given a sequence of instructions, is bounded within a circle. This can happen in two ways:
1.  The robot returns to the origin (0, 0) after one cycle of instructions.
2.  The robot ends at a different location but is facing in a direction other than its initial direction (North). If its orientation changes, its path, when repeated, will eventually form a closed loop or cycle.

### ⚙️ Solution Walkthrough
1.  **Simulate**: Simulate one cycle of the instructions. Keep track of the robot's \`x\`, \`y\` coordinates and its \`direction\`.
2.  **Check**: After the cycle:
    - If the position is \`(0, 0)\`, return \`true\`.
    - If the final direction is *not* North, return \`true\`.
    - Otherwise, return \`false\`.

### 📚 Key Concepts
- **State Simulation**: The solution involves simulating the robot's movement and tracking its state (position and direction).
`,

  // problem explanation--> 181
  "mnc-random-pick-with-weight": `
### 💡 Problem Breakdown
This is a weighted random selection problem. Instead of each index having an equal chance, the probability of picking an index should be proportional to its weight.

### ⚙️ Solution Walkthrough
This can be solved efficiently with a pre-computation step.
1.  **Preprocessing (in constructor)**: Create an array of **prefix sums** of the weights. For weights \`[1, 3]\`, the prefix sums would be \`[1, 4]\`. The total sum is 4.
2.  **\`pickIndex()\`**:
    - Generate a random number \`target\` between 1 and the total sum (inclusive).
    - Use **binary search** on the prefix sum array to find the first index whose prefix sum is greater than or equal to the \`target\`. This index is the randomly selected index.

### 📚 Key Concepts
- **Prefix Sum**: Used to create a mapping from a continuous range of numbers to the discrete indices.
- **Binary Search**: An efficient way to find the target index in the prefix sum array.
`,

  // problem explanation--> 182
  "mnc-random-point-in-non-overlapping-rectangles": `
### 💡 Problem Breakdown
This is an extension of the weighted random pick problem. The "weight" of each rectangle is its area (the number of integer points it contains).

### ⚙️ Solution Walkthrough
1.  **Preprocessing**: Calculate the area of each rectangle and create a prefix sum array of these areas.
2.  **\`pick()\`**:
    - **Select a Rectangle**: Generate a random number up to the total area. Use binary search on the prefix sum array to select a rectangle, weighted by its area.
    - **Select a Point**: Once a rectangle \`[x1, y1, x2, y2]\` is chosen, generate a random \`x\` between \`x1\` and \`x2\` and a random \`y\` between \`y1\` and \`y2\`. Return this \`[x, y]\` point.

### 📚 Key Concepts
- **Weighted Random Selection**: The core of the problem.
- **Problem Decomposition**: The problem is broken down into two simpler steps: picking a rectangle, then picking a point within it.
`,

  // problem explanation--> 183
  "mnc-check-if-it-is-a-straight-line": `
### 💡 Problem Breakdown
The task is to check if a set of 2D points all lie on the same straight line.

### ⚙️ Solution Walkthrough
The key idea is that the slope between any two points on a line must be the same. To avoid division and issues with vertical lines (infinite slope), we can use cross-multiplication.
1.  If there are 2 or fewer points, they always form a line.
2.  Take the first two points, \`p0\` and \`p1\`, to define the line.
3.  Calculate the initial difference in y (\`dy = y1 - y0\`) and difference in x (\`dx = x1 - x0\`).
4.  Loop through the rest of the points \`pi\`.
5.  For each point, check if it satisfies the slope equation using cross-multiplication: \`(yi - y0) * dx === (xi - x0) * dy\`.
6.  If this condition fails for any point, return \`false\`.
7.  If the loop completes, all points are on the line.

### 📚 Key Concepts
- **Coordinate Geometry**: The solution is based on the property of collinear points having the same slope.
- **Cross-Multiplication**: Used to avoid floating-point inaccuracies and division by zero.
`,

  // problem explanation--> 184
  "mnc-reach-a-number": `
### 💡 Problem Breakdown
This is a math problem. We start at 0 and want to reach a \`target\`. On step \`k\`, we can move \`k\` steps left or right. The task is to find the minimum number of steps.

### ⚙️ Solution Walkthrough
1.  Work with the absolute value of the \`target\`, as the problem is symmetric.
2.  Keep taking steps \`k = 1, 2, 3, ...\` and summing them up until the \`sum\` is greater than or equal to the \`target\`.
3.  Let the number of steps be \`k\`. At this point, the \`sum = 1 + ... + k\`.
4.  The difference between \`sum\` and \`target\` is \`diff = sum - target\`. If we could flip the sign of some of our steps from \`+\` to \`-\`, the total sum would decrease by an even number.
5.  Therefore, if \`diff\` is even, we can always find a combination of signs to land exactly on the target. The answer is \`k\`.
6.  If \`diff\` is odd, we need to take more steps until the new \`diff\` becomes even. Taking one more step \`k+1\` will change the parity of the sum and thus the parity of the \`diff\`. If \`k+1\` is odd, the new \`diff\` will be even. If \`k+1\` is even, we may need to take one more step \`k+2\`.

### 📚 Key Concepts
- **Number Theory and Parity**: The solution relies on understanding the properties of sums and how changing a step from \`+i\` to \`-i\` changes the total sum by \`2i\`.
`,

  // problem explanation--> 185
  "mnc-reordered-power-of-2": `
### 💡 Problem Breakdown
The task is to determine if a number can be reordered to form a power of 2. The key insight is that any two numbers that are reorderings of each other must have the exact same count of digits (they are anagrams).

### ⚙️ Solution Walkthrough
1.  **Canonical Representation**: The canonical representation of a number for this problem is a sorted string of its digits.
2.  Calculate the canonical representation for the input number \`N\`.
3.  **Check Powers of 2**: Loop through powers of 2 (1, 2, 4, 8, ...) up to a reasonable limit (e.g., 10^9, which is less than 2^30).
4.  For each power of 2, calculate its canonical representation (sorted digit string).
5.  If the canonical form of the power of 2 matches the canonical form of the input \`N\`, then a valid reordering exists. Return \`true\`.
6.  If the loop finishes without a match, return \`false\`.

### 📚 Key Concepts
- **Anagrams**: The core idea is that this is an anagram problem.
- **Canonical Representation**: Using a sorted digit string as a unique key for all its reorderings.
`,

  // problem explanation--> 186
  "mnc-rectangle-overlap": `
### 💡 Problem Breakdown
The task is to determine if two axis-aligned rectangles overlap.

### ⚙️ Solution Walkthrough
It's often easier to think about the conditions under which two rectangles do **not** overlap. Two rectangles do not overlap if one is entirely to the left, right, above, or below the other. The overlap condition is simply the logical NOT of this.
- Rectangle 1: \`(x1, y1)\` to \`(x2, y2)\`
- Rectangle 2: \`(x3, y3)\` to \`(x4, y4)\`
- **No Overlap Conditions**:
  - \`rec1\` is to the left of \`rec2\`: \`x2 <= x3\`
  - \`rec1\` is to the right of \`rec2\`: \`x1 >= x4\`
  - \`rec1\` is below \`rec2\`: \`y2 <= y3\`
  - \`rec1\` is above \`rec2\`: \`y1 >= y4\`
- **Overlap**: If none of these are true, they must overlap. The condition is \`!(x2 <= x3 || x1 >= x4 || y2 <= y3 || y1 >= y4)\`.

### 📚 Key Concepts
- **Geometric Reasoning**: Solving the problem by considering the inverse conditions.
`,

  // problem explanation--> 187
  "mnc-rectangle-area-ii": `
### 💡 Problem Breakdown
This is an advanced computational geometry problem. Given a list of rectangles, the task is to find the total area covered by their union. The challenge is handling the overlapping regions correctly so they are not counted multiple times.

### ⚙️ Solution Walkthrough
A standard and efficient approach is the **Line Sweep Algorithm**.
1.  **Create Events**: For each rectangle \`[x1, y1, x2, y2]\`, create two "events": a "start" event at \`x1\` and an "end" event at \`x2\`. Each event stores its x-coordinate, the y-interval \`[y1, y2]\`, and its type (start or end).
2.  **Sort Events**: Sort all events by their x-coordinate.
3.  **Sweep Line**: "Sweep" a vertical line from left to right, processing events in order. Maintain a list of "active" y-intervals (those whose rectangles the sweep line is currently passing through).
4.  **Calculate Area**: Between any two consecutive x-events, the width is \`x_current - x_previous\`. During this strip, the total height is the length of the *union* of the active y-intervals. Calculate the area of this strip and add it to the total.
5.  The union of active y-intervals can be calculated at each step by merging overlapping intervals.

### 📚 Key Concepts
- **Line Sweep Algorithm**: A powerful algorithmic paradigm for solving geometric problems.
- **Interval Management**: A key subproblem is to efficiently calculate the length of the union of active vertical intervals.
`,

  // problem explanation--> 188
  "mnc-powerful-integers": `
### 💡 Problem Breakdown
A "powerful integer" is a number that can be expressed as \`x^i + y^j\` for some non-negative integers \`i\` and \`j\`. The task is to find all such unique integers up to a given \`bound\`.

### ⚙️ Solution Walkthrough
A direct brute-force approach is feasible given the constraints. The powers grow quickly, so the number of iterations will be small.
1.  **Initialize**: Create a \`Set\` to store the unique powerful integers found.
2.  **Outer Loop**: Loop through powers of \`x\`. Start with \`i = 1\`. In each iteration, update \`i *= x\`. Stop when \`i\` exceeds the \`bound\`.
3.  **Inner Loop**: Inside, loop through powers of \`y\`. Start with \`j = 1\`. In each iteration, update \`j *= y\`.
4.  **Check and Add**: Check if the sum \`i + j\` is less than or equal to the \`bound\`. If it is, add it to the \`Set\`. Stop the inner loop when the sum exceeds the bound.
5.  Handle the edge case where \`y\` is 1 to prevent an infinite inner loop.
6.  Handle the edge case where \`x\` is 1 to prevent an infinite outer loop.
7.  Return the elements of the \`Set\` as an array.

### 📚 Key Concepts
- **Brute Force**: A straightforward approach that checks all relevant possibilities.
- **\`Set\` for Uniqueness**: Used to automatically handle duplicate results.
`,

  // problem explanation--> 189
  "mnc-smallest-integer-divisible-by-k": `
### 💡 Problem Breakdown
The task is to find the length of the smallest positive integer composed only of the digit '1' that is divisible by a given integer \`k\`. For example, for \`k=3\`, the number is 111, and the length is 3.

### ⚙️ Solution Walkthrough
This is a number theory problem. We don't need to build the large number itself; we only need to keep track of its remainder when divided by \`k\`.
1.  **Edge Case**: If \`k\` is divisible by 2 or 5, no number consisting only of 1s can be divisible by it. Return -1.
2.  **Initialize**: Set \`remainder = 0\` and \`length = 0\`.
3.  **Loop**: Use a loop (that can go up to \`k\` times).
4.  **Simulate Long Division**: In each iteration, simulate appending a '1' to our number. The new remainder is \`(remainder * 10 + 1) % k\`.
5.  Increment the \`length\`.
6.  **Check**: If the \`remainder\` becomes 0, we have found a divisible number. Return the current \`length\`.
7.  If the loop finishes without the remainder becoming 0, no solution exists.

### 📚 Key Concepts
- **Modular Arithmetic**: The key to solving the problem without dealing with huge numbers is to work with their remainders.
- **Pigeonhole Principle**: The loop only needs to run \`k\` times, because there are only \`k\` possible remainders. If a solution exists, it will be found within \`k\` steps.
`,

  // problem explanation--> 190
  "mnc-numbers-with-same-consecutive-differences": `
### 💡 Problem Breakdown
The goal is to find all numbers of a specific length \`n\` where the absolute difference between any two consecutive digits is a constant \`k\`.

### ⚙️ Solution Walkthrough
This problem is a perfect fit for a Depth-First Search (DFS) or backtracking approach. We can build the numbers digit by digit.
1.  **Initialize**: Create a \`result\` list.
2.  **DFS Function**: Create a recursive helper function, \`dfs(currentNum)\`.
3.  **Base Case**: Inside \`dfs\`, if the length of \`currentNum\` (as a string) equals \`n\`, add it to the \`result\` and return.
4.  **Recursive Step**:
    - Get the last digit of \`currentNum\`.
    - Calculate two potential next digits: \`lastDigit + k\` and \`lastDigit - k\`.
    - For each potential digit that is valid (between 0 and 9), create a new number (\`currentNum * 10 + nextDigit\`) and make a recursive call \`dfs(newNum)\`.
5.  **Main Loop**: Start the process by calling \`dfs\` for each possible starting digit (1 through 9).

### 📚 Key Concepts
- **Backtracking / Depth-First Search**: The algorithm explores the "tree" of all possible valid numbers.
`,

  // problem explanation--> 191
  "mnc-find-and-replace-pattern": `
### 💡 Problem Breakdown
This problem is another variation of "Isomorphic Strings". You need to find which words from a list follow the same character pattern as a given pattern string. For pattern "abb", the word "mee" matches because \`a->m\` and \`b->e\`.

### ⚙️ Solution Walkthrough
The solution involves creating a "canonical representation" for both the pattern and each word and then comparing them.
1.  **Canonical Function**: Create a helper function that takes a string and converts it to its canonical pattern. For "abb", it could be "0.1.1". For "mee", it's also "0.1.1". For "abc", it's "0.1.2".
    - This function uses a map to store the first seen index of each character. It builds the canonical string by appending these indices.
2.  **Filter Words**:
    - Calculate the canonical pattern for the input \`pattern\`.
    - Use the \`.filter()\` array method on the \`words\` list.
    - The filter condition is \`getCanonical(word) === canonicalPattern\`.

### 📚 Key Concepts
- **Canonical Representation**: Transforming data into a standard form to make comparison easy. This is a powerful technique for many problems.
`,

  // problem explanation--> 192
  "mnc-consecutive-numbers-sum": `
### 💡 Problem Breakdown
The task is to find the number of ways a given integer \`n\` can be expressed as a sum of two or more consecutive positive integers.

### ⚙️ Solution Walkthrough
A mathematical approach is more efficient than brute force. A sum of \`k\` consecutive numbers starting at \`a\` is:
\`n = a + (a+1) + ... + (a+k-1)\`
\`n = k*a + (k*(k-1))/2\`
Rearranging for \`a\`: \`a = (n - (k*(k-1))/2) / k\`.
We need to find how many integers \`k >= 2\` result in a positive integer \`a\`.
1.  **Loop**: Iterate through possible lengths of the sequence, \`k\`, starting from 2.
2.  **Check**: In each iteration, check if \`(n - (k*(k-1))/2)\` is positive and divisible by \`k\`.
3.  **Bound**: The loop can stop when the term \`(k*(k-1))/2\` exceeds \`n\`, as \`a\` would no longer be positive.
4.  Count the number of \`k\` values that yield a valid integer \`a\`.

### 📚 Key Concepts
- **Number Theory**: The solution is derived from the formula for an arithmetic series.
`,

  // problem explanation--> 193
  "mnc-mirror-reflection": `
### 💡 Problem Breakdown
This is a challenging geometry problem that can be simplified by thinking about "unfolding" the mirrored room into an infinite grid.

### ⚙️ Solution Walkthrough
The path of the laser can be modeled as a straight line in an unfolded grid of rooms. The problem reduces to finding the first time the line hits a corner in this grid. This happens at the smallest integers \`m\` and \`n\` such that \`m * p = n * q\`. This is related to the least common multiple.
1.  Find the greatest common divisor (GCD) of \`p\` and \`q\`.
2.  Simplify \`m = p / gcd(p, q)\` and \`n = q / gcd(p, q)\`. Now \`m\` and \`n\` are coprime.
3.  The parity of \`m\` and \`n\` determines which corner is hit:
    - If \`m\` is odd and \`n\` is odd: Receptor 1.
    - If \`m\` is even and \`n\` is odd: Receptor 2.
    - If \`m\` is odd and \`n\` is even: Receptor 0.

### 📚 Key Concepts
- **Geometric Transformation**: The key insight is to unfold the reflections into a simple grid traversal.
- **Number Theory**: The solution relies on finding the GCD to determine the first point of intersection.
`,

  // problem explanation--> 194
  "mnc-global-and-local-inversions": `
### 💡 Problem Breakdown
A "local inversion" is when \`A[i] > A[i+1]\`. A "global inversion" is when \`A[i] > A[j]\` for \`i < j\`. The task is to check if the number of global inversions is equal to the number of local inversions.

### ⚙️ Solution Walkthrough
Every local inversion is also a global inversion. The condition will only be true if there are **no** global inversions that are *not* local. This means there is no pair \`(i, j)\` where \`j > i + 1\` and \`A[i] > A[j]\`. This simplifies the problem greatly.
1.  The condition holds if and only if for every element \`A[i]\`, its value is not more than 1 greater than its index \`i\`. That is, \`A[i] <= i + 1\` is not quite right.
2.  The correct condition is that for all \`i\`, \`abs(A[i] - i) <= 1\`. An element can only be at most one position away from its sorted position. If an element \`A[i]\` is moved more than one spot to the left (i.e., \`A[i] > i+1\`), it must have "jumped over" a smaller number, creating a non-local global inversion.
3.  Loop through the array and check if \`Math.abs(A[i] - i) > 1\` for any \`i\`. If this is ever true, return \`false\`.
4.  If the loop completes, return \`true\`.

### 📚 Key Concepts
- **Inversions**: A concept from sorting and permutation analysis.
- **Logical Simplification**: The core of the problem is realizing the equivalence of the condition to a much simpler check.
`,

  // problem explanation--> 195
  "mnc-the-kth-factor-of-n": `
### 💡 Problem Breakdown
The task is to find the \`k\`-th smallest factor of a number \`n\`.

### ⚙️ Solution Walkthrough
A straightforward approach is to iterate and count the factors.
1.  Initialize \`count = 0\`.
2.  Loop from \`i = 1\` up to \`n\`.
3.  In each iteration, check if \`i\` is a factor of \`n\` (\`n % i === 0\`).
4.  If it is a factor, increment \`count\`.
5.  If \`count\` now equals \`k\`, then \`i\` is the \`k\`-th factor. Return \`i\`.
6.  If the loop finishes and we haven't found \`k\` factors, it means \`n\` has fewer than \`k\` factors. Return -1.

### 📚 Key Concepts
- **Factors/Divisors**: A fundamental concept in number theory.
- **Brute Force Iteration**: The solution systematically checks all possibilities.
`,

  // problem explanation--> 196
  "mnc-count-good-triplets": `
### 💡 Problem Breakdown
The task is to count the number of "good triplets" \`(i, j, k)\` in an array, where \`i < j < k\` and the absolute differences between the values at these indices satisfy given constraints.

### ⚙️ Solution Walkthrough
A brute-force solution with three nested loops is the most direct way to check every possible triplet, and is efficient enough given typical constraints for this problem.
1.  **Initialize**: \`count = 0\`.
2.  **Outer Loop**: Loop with \`i\` from \`0\` to \`n-3\`.
3.  **Middle Loop**: Loop with \`j\` from \`i+1\` to \`n-2\`.
4.  **Inner Loop**: Loop with \`k\` from \`j+1\` to \`n-1\`.
5.  **Check Conditions**: Inside the innermost loop, check if the triplet \`(arr[i], arr[j], arr[k])\` satisfies all three absolute difference conditions.
6.  **Increment**: If all conditions are met, increment \`count\`.
7.  Return \`count\`.

### 📚 Key Concepts
- **Brute Force Enumeration**: The solution checks every possible combination to find the ones that meet the criteria.
`,

  // problem explanation--> 197
  "mnc-thousand-separator": `
### 💡 Problem Breakdown
The task is to format an integer by adding a dot (.\`) as a thousands separator.

### ⚙️ Solution Walkthrough
The easiest way is to use built-in internationalization APIs.
1.  **\`toLocaleString()\`**: The \`Number.prototype.toLocaleString()\` method can format a number according to a specific locale's conventions. The 'en-US' locale uses a comma as a thousands separator.
2.  **Replace**: After formatting, simply replace the commas with dots.
\`\`\`javascript
function thousandSeparator(n) {
  return n.toLocaleString('en-US').replace(/,/g, '.');
}
\`\`\`
A manual approach would involve converting the number to a string and using a loop to insert dots from the right every three characters.

### 📚 Key Concepts
- **Internationalization API (\`Intl\`)**: A powerful set of built-in tools for formatting numbers, dates, and strings according to different language and regional conventions.
`,

  // problem explanation--> 198
  "mnc-matrix-diagonal-sum": `
### 💡 Problem Breakdown
The task is to find the sum of the elements on the main diagonal and the anti-diagonal of a square matrix. A key rule is to not double-count the center element if the matrix has an odd dimension.

### ⚙️ Solution Walkthrough
A single loop can efficiently calculate this sum.
1.  **Initialize**: \`sum = 0\`, \`n = matrix.length\`.
2.  **Loop**: Iterate from \`i = 0\` to \`n-1\`.
3.  **Sum Diagonals**:
    - In each iteration, add the primary diagonal element \`mat[i][i]\` to the sum.
    - Add the anti-diagonal element \`mat[i][n-1-i]\` to the sum.
4.  **Handle Center**: The loop as described above will double-count the center element for an odd-sized matrix. The problem states this should be avoided.
    - **Correct Logic**: After the loop, if \`n\` is odd, subtract the center element \`mat[floor(n/2)][floor(n/2)]\` from the sum once.
    - **Simpler Logic**: The solver code avoids the subtraction by checking if \`i\` is the center index within the loop: \`if (i !== n - 1 - i)\`.

### 📚 Key Concepts
- **Matrix Traversal**: Accessing elements based on their row and column indices.
- **Diagonal Properties**: The primary diagonal has indices \`(i, i)\`. The anti-diagonal has indices \`(i, n-1-i)\`.
`,

  // problem explanation--> 199
  "mnc-check-if-all-1s-are-at-least-length-k-places-away": `
### 💡 Problem Breakdown
The task is to check if the distance between any two \`1\`s in a binary array is at least \`k\`. The distance is the number of \`0\`s between them.

### ⚙️ Solution Walkthrough
A single pass through the array is sufficient. We just need to keep track of the index of the last \`1\` we've seen.
1.  **Initialize**: \`lastOneIndex = -1\`.
2.  **Loop**: Iterate through the array with index \`i\`.
3.  **Check**: If the current element \`nums[i]\` is a \`1\`:
    - If \`lastOneIndex\` is not -1 (meaning this is not the first \`1\` we've seen), calculate the distance: \`distance = i - lastOneIndex - 1\`.
    - If \`distance < k\`, the condition is violated. Return \`false\`.
    - Update \`lastOneIndex = i\`.
4.  If the loop completes without returning \`false\`, the condition holds for all pairs. Return \`true\`.

### 📚 Key Concepts
- **State Tracking**: The \`lastOneIndex\` variable is used to keep track of the necessary state as we iterate.
`,

  // problem explanation--> 200
  "mnc-count-odd-numbers-in-an-interval-range": `
### 💡 Problem Breakdown
The goal is to count the number of odd integers within an inclusive range \`[low, high]\`.

### ⚙️ Solution Walkthrough
A mathematical approach is much more efficient than looping.
1.  **Count Numbers**: The total number of integers in the range is \`high - low + 1\`.
2.  **Calculate Half**: Roughly half of these numbers will be odd. We can start with \`count = Math.floor((high - low) / 2)\`.
3.  **Check Endpoints**: This initial count is exact if one endpoint is even and one is odd. We need to adjust if both are even or both are odd.
    - A simpler way to handle this is: if *either* \`low\` is odd OR \`high\` is odd, it means the range includes an "extra" odd number that our integer division might have missed. So, we add 1.
4.  Return the final count.

### 📚 Key Concepts
- **Mathematical Reasoning**: Solving the problem with simple arithmetic instead of brute-force iteration.
- **Parity**: The property of an integer being even or odd.
`,
};
