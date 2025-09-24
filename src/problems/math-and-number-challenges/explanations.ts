export const explanations: Record<string, string> = {
  // problem explanation--> 01
  'mnc-add-two-numbers': `
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
  'mnc-check-even-or-odd': `
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
  'mnc-find-max-number': `
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
  'mnc-factorial': `
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
  'mnc-is-prime': `
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
  'mnc-fibonacci-sequence': `
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
  'mnc-power-of-number': `
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
  'mnc-sum-of-digits': `
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
1. **Convert to String**: \`String(Math.abs(num))\` converts the number to a string. Using `Math.abs` handles negative numbers gracefully.
2. **Iterate**: Loop through each character of the string.
3. **Convert and Sum**: Convert each digit character back to a number and add it to the running \`sum\`.
4. A more concise version uses \`.split()\` and \`.reduce()\`.

### 📚 Key Concepts
- **Type Conversion**: Converting between numbers and strings is a common technique for digit manipulation.
- **Iteration**: Looping through the characters of a string.
`,
  // problem explanation--> 09
  'mnc-reverse-number': `
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
  'mnc-palindrome-number': `
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
2. **Reversal Loop**: The `while` loop iteratively builds the \`reversed\` number.
   - `original % 10`: Extracts the last digit of the original number.
   - `reversed * 10 + lastDigit`: Appends the extracted digit to the \`reversed\` number.
   - `Math.floor(original / 10)`: Removes the last digit from the original number.
3. **Comparison**: Finally, the original number is compared with the fully reversed number.

### 📚 Key Concepts
- **Integer Manipulation**: Using modulo and division to deconstruct and construct numbers.
`,
  // problem explanation--> 11
  'mnc-area-of-circle': `
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
1. **`Math.PI`**: This is a built-in JavaScript constant that provides a high-precision value for Pi.
2. **`Math.pow(base, exponent)`**: This function calculates the \`base\` raised to the power of the \`exponent\`.

### 📚 Key Concepts
- **Mathematical Constants**: Using built-in constants like \`Math.PI\` for accuracy.
- **Geometric Formulas**: Applying mathematical formulas in code.
`,
  // problem explanation--> 12
  'mnc-celsius-to-fahrenheit': `
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
  'mnc-fahrenheit-to-celsius': `
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
  'mnc-is-integer': `
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
  'mnc-random-number-in-range': `
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
- **`Math.random()`**: The core function that provides a random decimal between 0 and 1.
`,
  // problem explanation--> 16
  'mnc-mean-of-array': `
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
- **`Array.prototype.reduce()`**: A powerful method for reducing an array to a single value.
`,
  // problem explanation--> 17
  'mnc-median-of-array': `
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
  'mnc-mode-of-array': `
### 💡 Problem Breakdown
The mode is the value that appears most frequently in a data set. A set can have one mode, more than one mode (multimodal), or no mode.

### ⚙️ Solution Walkthrough
A frequency map is the ideal data structure for this problem.
1.  **Build Frequency Map**: Create a \`Map\` to store each number and its frequency. Iterate through the input array and populate the map.
2.  **Find Max Frequency**: Iterate through the values of the map to find the highest frequency.
3.  **Find Modes**: Iterate through the map's entries. Any number whose frequency matches the max frequency is a mode. Collect all such numbers.

### 📚 Key Concepts
- **Mode**: A measure of central tendency.
- **Frequency Counting**: A common pattern for statistical problems, efficiently implemented with a `Map`.
`,
  // problem explanation--> 19
  'mnc-greatest-common-divisor': `
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
1. **Loop**: The loop continues as long as the second number, `b`, is not zero.
2. **Update**: In each iteration, `a` takes the value of `b`, and `b` takes the value of the remainder of the old `a` divided by the old `b`.
3. **Result**: When the loop terminates (`b` is 0), `a` will hold the GCD.

### 📚 Key Concepts
- **Euclidean Algorithm**: A classic and highly efficient algorithm for finding the GCD.
- **Destructuring Assignment**: Used here for a concise swap of variables.
`,
  // problem explanation--> 20
  'mnc-least-common-multiple': `
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
  'mnc-is-perfect-square': `
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
  'mnc-square-root': `
### 💡 Problem Breakdown
The task is to implement a square root function without using the built-in \`Math.sqrt()\`. The Babylonian method is a classic and efficient iterative algorithm for this.

### ⚙️ Solution Walkthrough
The Babylonian method (a specific case of Newton's method) is an iterative approximation.
1. Start with an initial guess (e.g., `x = n / 2`).
2. Repeatedly refine the guess using the formula: `new_guess = 0.5 * (old_guess + n / old_guess)`.
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
  'mnc-decimal-to-binary': `
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
- **`Number.prototype.toString(radix)`**: A built-in method for base conversion.
`,
  // problem explanation--> 24
  'mnc-binary-to-decimal': `
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
- **`parseInt(string, radix)`**: A built-in function for parsing strings of different bases.
`,
  // problem explanation--> 25
  'mnc-is-leap-year': `
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
  'mnc-sum-of-multiples': `
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
- **Logical OR (`||`)**: Used to combine the two conditions.
`,
  // problem explanation--> 27
  'mnc-is-armstrong-number': `
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
  'mnc-is-perfect-number': `
### 💡 Problem Breakdown
A perfect number is a positive integer that is equal to the sum of its proper positive divisors (the sum of its positive divisors excluding the number itself). For example, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

### ⚙️ Solution Walkthrough
The solution involves finding all the proper divisors and summing them up.
1. **Initialization**: Start with a sum of 1 (since 1 is a proper divisor for all numbers > 1).
2. **Loop**: Iterate from 2 up to the square root of the number.
3. **Find Divisors**: If `i` divides `n`, then both `i` and `n/i` are divisors. Add both to the sum.
4. **Handle Square Root**: If `i * i === n`, `i` and `n/i` are the same, so only add it once.
5. **Compare**: After the loop, compare the calculated sum with the original number.

### 📚 Key Concepts
- **Number Theory**: The solution is based on the definition of divisors.
- **Optimization**: Looping only up to the square root is a key performance optimization for divisor-related problems.
`,
  // problem explanation--> 29
  'mnc-is-happy-number': `
### 💡 Problem Breakdown
A "happy number" is determined by a process: repeatedly sum the squares of a number's digits. If this process reaches 1, the number is happy. If it enters a cycle without reaching 1, it's not happy. The task is to determine if a number is happy.

### ⚙️ Solution Walkthrough
The key to solving this is detecting if we've entered a cycle. A `Set` can be used to keep track of the numbers we've already seen in the sequence.
1. Initialize a `Set` called `seen`.
2. Use a `while` loop that continues as long as the number `n` is not 1 and has not been seen before.
3. Inside the loop:
   - Add the current `n` to the `seen` set.
   - Calculate the sum of the squares of its digits and assign this new sum back to `n`.
4. After the loop, check why it terminated. If `n === 1`, the number is happy. Otherwise, it must have terminated because a cycle was detected.

### 📚 Key Concepts
- **Cycle Detection**: A common algorithmic problem. Using a `Set` or hash map to store previously visited states is a standard technique.
`,
  // problem explanation--> 30
  'mnc-collatz-conjecture': `
### 💡 Problem Breakdown
The Collatz conjecture is an unsolved problem in mathematics. It states that for any positive integer, repeatedly applying the following rules will eventually lead to 1:
- If the number is even, divide it by 2.
- If the number is odd, multiply it by 3 and add 1.
The task is to count how many steps this process takes.

### ⚙️ Solution Walkthrough
A `while` loop can be used to simulate the process.
1. Initialize a `steps` counter to 0.
2. Use a `while` loop that continues as long as `n` is not 1.
3. Inside the loop, apply the Collatz rules using an `if/else` statement or a ternary operator.
4. Increment the `steps` counter in each iteration.
5. Return the final `steps` count.

### 📚 Key Concepts
- **Algorithmic Simulation**: The code directly simulates the steps of the conjecture.
`,
  // problem explanation--> 31
  'mnc-roman-to-integer': `
### 💡 Problem Breakdown
The task is to convert a Roman numeral string (e.g., "MCMXCIV") into its integer equivalent (1994). The key challenge is handling the subtractive notation where a smaller value before a larger one means subtraction (e.g., "IV" is 4, not 6).

### ⚙️ Solution Walkthrough
A single pass through the string from left to right can solve this.
1. Create a map of Roman numeral characters to their integer values.
2. Initialize `total` to 0.
3. Loop through the string. For each character `current`, also look at the next character `next`.
   - If `next` exists and its value is greater than `current`'s value, it's a subtractive case. Subtract the `current` value from the total.
   - Otherwise, just add the `current` value to the total.
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
  'mnc-integer-to-roman': `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting an integer into its Roman numeral string representation.

### ⚙️ Solution Walkthrough
A greedy approach is effective. We want to subtract the largest possible Roman numeral value from our number at each step.
1. Create two parallel arrays: one with the integer values in descending order, and one with the corresponding Roman numeral symbols. Crucially, include the subtractive cases (e.g., 900 for "CM", 40 for "XL").
2. Initialize an empty `result` string.
3. Loop through the `values` array.
4. For each value, use a `while` loop: as long as the input `num` is greater than or equal to the current value, append the corresponding symbol to the `result` and subtract the value from `num`.
5. Continue until `num` becomes 0.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we greedily subtract the largest possible symbol value, which leads to the correct representation.
`,
  // problem explanation--> 33
  'mnc-sieve-of-eratosthenes': `
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
  'mnc-pascals-triangle': `
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
  'mnc-matrix-addition': `
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
  'mnc-matrix-multiplication': `
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
  'mnc-permutations': `
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
  'mnc-combinations': `
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
  'mnc-fast-exponentiation': `
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
  'mnc-digital-root': `
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
  'mnc-base-conversion': `
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
- **`parseInt(string, radix)`**: A built-in function for parsing strings of different bases.
- **`Number.prototype.toString(radix)`**: A built-in method for formatting a number into a string of a different base.
`,
  // problem explanation--> 42
  'mnc-is-power-of-two': `
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
  'mnc-missing-number-in-sequence': `
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
  'mnc-plus-one': `
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
  'mnc-excel-column-number': `
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
  'mnc-excel-column-title': `
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
  'mnc-single-number': `
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
  'mnc-add-binary': `
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
- **`BigInt`**: A built-in type for handling arbitrarily large integers.
- **Base Conversion**: Converting to and from different number bases.
`,
  // problem explanation--> 49
  'mnc-trailing-zeroes-in-factorial': `
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
  'mnc-ugly-number': `
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
  'mnc-count-primes': `
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
  'mnc-add-digits': `
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
  'mnc-valid-perfect-square': `
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
  'mnc-arranging-coins': `
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
}