// This file provides high-quality, pre-written explanations for every problem.
// It serves as a guaranteed fallback when the live Gemini API call fails,
// ensuring the "Explain with AI" feature works robustly in any environment,
// especially on a local machine without a server or API key.

export const staticExplanations: Record<string, string> = {
  // =================================================================================================
  // BEGINNER EXPLANATIONS
  // =================================================================================================
  "sum-two-numbers": `
### 💡 Problem Breakdown
The goal of this problem is to take two numbers and calculate their sum. It's a fundamental arithmetic operation and a great starting point for working with functions and numbers in JavaScript.

### ⚙️ Solution Walkthrough
The solution uses a simple function that accepts two parameters.

\`\`\`javascript
({ num1, num2 }) => parseNumber(num1) + parseNumber(num2)
\`\`\`

1.  **Function Definition:** The code defines an arrow function that accepts an object with two properties, \`num1\` and \`num2\`. This is a common way to handle named parameters.
2.  **Input Parsing:** The \`parseNumber()\` helper function is used on both inputs. This is important because input from web forms is often treated as a string. \`parseNumber\` (which uses JavaScript's built-in \`parseFloat\`) converts the string "5" into the number 5.
3.  **Addition:** The \`+\` operator is used to add the two converted numbers together.
4.  **Return Value:** The function implicitly returns the result of the addition.

### 📚 Key Concepts
-   **Functions:** Reusable blocks of code that perform a specific task.
-   **Parameters:** Variables in a function definition that act as placeholders for the values (arguments) that the function will receive.
-   **Arithmetic Operators:** Symbols like \`+\` that perform mathematical operations.
-   **Type Coercion:** JavaScript automatically converting a value from one type to another. Explicitly parsing with functions like \`parseFloat\` is safer.
`,
  "reverse-string": `
### 💡 Problem Breakdown
The task is to take a string of text and reverse the order of its characters. For example, "hello" should become "olleh". This is a classic string manipulation problem that introduces you to working with strings as if they were arrays.

### ⚙️ Solution Walkthrough
The solution uses a chain of three common string and array methods.

\`\`\`javascript
({ str }) => str.split('').reverse().join('')
\`\`\`

1.  **\`str.split('')\`:** The \`.split('')\` method is called on the input string. When given an empty string (\`''\`) as an argument, it splits the string into an array of its individual characters.
    -   \`"hello world"\` becomes \`['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']\`
2.  **\`.reverse()\`:** This method is called on the newly created array. It reverses the order of the elements in the array in place.
    -   The array becomes \`['d', 'l', 'r', 'o', 'w', ' ', 'o', 'l', 'l', 'e', 'h']\`
3.  **\`.join('')\`:** This method is called on the reversed array. It joins all the elements of the array back into a single string. The empty string argument (\`''\`) means that no separator is placed between the characters.
    -   The final result is \`"dlrow olleh"\`

### 📚 Key Concepts
-   **String Manipulation:** The process of changing, editing, or analyzing strings.
-   **\`String.prototype.split()\`:** A method that divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
-   **\`Array.prototype.reverse()\`:** A method that reverses an array in place.
-   **\`Array.prototype.join()\`:** A method that creates and returns a new string by concatenating all of the elements in an array.
`,
  "simple-string-concatenation": `
### 💡 Problem Breakdown
This problem requires you to take two separate strings and combine them into a single, longer string. This operation is known as "concatenation". It's one of the most basic operations you can perform with text data.

### ⚙️ Solution Walkthrough
The solution is very straightforward and uses the addition (\`+\`) operator, which has a special behavior when used with strings.

\`\`\`javascript
({ str1, str2 }) => str1 + str2
\`\`\`

1.  **Function Parameters:** The function is set up to receive two string variables, \`str1\` and \`str2\`.
2.  **Concatenation Operator:** In JavaScript, when the \`+\` operator is used with strings, it doesn't perform mathematical addition. Instead, it concatenates (joins) them. It appends the second string to the end of the first string.
3.  **Return Value:** The function returns the new, combined string. For the default inputs "Java" and "Script", the result is "JavaScript".

### 📚 Key Concepts
-   **String:** A data type used to represent text.
-   **Concatenation:** The operation of joining character strings end-to-end.
-   **Operators:** Special symbols used to perform operations on values and variables. The \`+\` operator is "overloaded," meaning it behaves differently depending on the data types it's working with (numbers vs. strings).
`,
  "get-string-length": `
### 💡 Problem Breakdown
The objective is simple: find out how many characters are in a given string. This includes letters, numbers, symbols, and spaces.

### ⚙️ Solution Walkthrough
JavaScript strings have a built-in property specifically for this purpose, making the solution very concise.

\`\`\`javascript
({ str }) => str.length
\`\`\`

1.  **Function Parameter:** The function takes a single argument, \`str\`, which is the string we want to measure.
2.  **\`.length\` Property:** Every string in JavaScript has a \`.length\` property. This property holds the number of characters in the string. You simply access it using dot notation (\`str.length\`).
3.  **Return Value:** The function returns the numerical value of the \`.length\` property.

### 📚 Key Concepts
-   **Property:** A characteristic or value associated with an object. In JavaScript, even primitive types like strings can behave like objects and have properties.
-   **Dot Notation:** The syntax used to access the properties of an object (e.g., \`object.property\`).
`,
  "check-is-even": `
### 💡 Problem Breakdown
This task requires us to determine if a given number is even or odd. An even number is an integer that is exactly divisible by 2, with no remainder.

### ⚙️ Solution Walkthrough
The solution uses a mathematical operator called the "modulo" operator to check for a remainder.

\`\`\`javascript
({ num }) => parseNumber(num) % 2 === 0
\`\`\`

1.  **Input Parsing:** The input \`num\` is first converted from a string to a number using \`parseNumber()\`.
2.  **Modulo Operator (\`%\`):** The modulo operator calculates the remainder of a division. For example, \`8 % 2\` is 0 because 8 divides evenly by 2. In contrast, \`9 % 2\` is 1 because 9 divided by 2 leaves a remainder of 1.
3.  **Comparison:** The result of the modulo operation is compared to 0 using the strict equality operator (\`===\`).
    -   If \`parseNumber(num) % 2\` is 0, it means the number is even, and the expression \`0 === 0\` evaluates to \`true\`.
    -   If the remainder is anything other than 0, the number is odd, and the expression evaluates to \`false\`.
4.  **Return Value:** The boolean result (\`true\` or \`false\`) of the comparison is returned.

### 📚 Key Concepts
-   **Modulo Operator (\`%\`):** An arithmetic operator that returns the remainder of a division. It's extremely useful for tasks like checking for even/odd numbers or cycling through arrays.
-   **Boolean:** A data type that can only have one of two values: \`true\` or \`false\`.
-   **Equality Operators (\`===\`):** Used to compare two values. The strict equality operator (\`===\`) checks for both value and type equality without performing type coercion.
`,
  "simple-multiplication": `
### 💡 Problem Breakdown
This is a fundamental problem where you need to take two numbers and compute their product.

### ⚙️ Solution Walkthrough
The solution uses the multiplication operator.

\`\`\`javascript
({ num1, num2 }) => parseNumber(num1) * parseNumber(num2)
\`\`\`

1.  **Input Parsing:** Both \`num1\` and \`num2\` are converted to numbers to ensure correct mathematical calculation.
2.  **Multiplication:** The \`*\` operator is used to multiply the two numbers.
3.  **Return Value:** The resulting product is returned.

### 📚 Key Concepts
-   **Arithmetic Operators:** The \`*\` symbol for multiplication.
-   **Functions:** A block of code to perform a specific task.
`,
  "convert-to-uppercase": `
### 💡 Problem Breakdown
The goal is to convert an entire string into uppercase letters. For example, "hello" becomes "HELLO".

### ⚙️ Solution Walkthrough
JavaScript provides a built-in method on strings to do this easily.

\`\`\`javascript
({ str }) => str.toUpperCase()
\`\`\`

1.  **\`.toUpperCase()\` Method:** This is a built-in method for all string values in JavaScript.
2.  **Execution:** When you call this method on a string, it returns a new string where all alphabetic characters have been converted to their uppercase equivalents. Non-alphabetic characters remain unchanged.

### 📚 Key Concepts
-   **String Methods:** Built-in functions available on all strings that allow you to manipulate or inspect them.
-   **Immutability:** String methods in JavaScript do not modify the original string; they return a new, modified string.
`,
  "convert-to-lowercase": `
### 💡 Problem Breakdown
The goal is to convert an entire string into lowercase letters. For example, "HELLO" becomes "hello".

### ⚙️ Solution Walkthrough
Similar to converting to uppercase, JavaScript provides a built-in method for this.

\`\`\`javascript
({ str }) => str.toLowerCase()
\`\`\`

1.  **\`.toLowerCase()\` Method:** This is a built-in method for all string values.
2.  **Execution:** Calling this method returns a new string where all alphabetic characters are converted to their lowercase equivalents.

### 📚 Key Concepts
-   **String Methods:** Built-in functions available on strings.
`,
  "get-first-element-of-array": `
### 💡 Problem Breakdown
The task is to retrieve the very first item from a list (an array).

### ⚙️ Solution Walkthrough
Arrays in JavaScript are "zero-indexed," meaning the first element is at position 0. We can access elements using bracket notation.

\`\`\`javascript
({ arr }) => parseStringArray(arr)[0] || 'Array is empty'
\`\`\`

1.  **Input Parsing:** \`parseStringArray(arr)\` converts the comma-separated input string into a true JavaScript array.
2.  **Index Access:** \`[0]\` is used to access the element at index 0, which is the first element.
3.  **Edge Case Handling:** The logical OR operator (\`||\`) provides a fallback. If the array is empty, accessing \`[0]\` results in \`undefined\`, which is a "falsy" value. In that case, the expression returns the string 'Array is empty' instead.

### 📚 Key Concepts
-   **Array:** An ordered collection of values.
-   **Zero-Indexing:** The first element of an array is at index 0, the second at index 1, and so on.
-   **Bracket Notation:** The syntax used to access array elements by their index (e.g., \`myArray[0]\`).
-   **Short-Circuiting:** The \`||\` operator returns the first "truthy" value it encounters.
`,
  "get-last-element-of-array": `
### 💡 Problem Breakdown
This problem requires you to get the very last item from a list (an array), regardless of how long the list is.

### ⚙️ Solution Walkthrough
To get the last element, we need the array's length. Since arrays are zero-indexed, the last element is always at the index \`length - 1\`.

\`\`\`javascript
const array = parseStringArray(arr);
return array.length > 0 ? array[array.length - 1] : 'Array is empty';
\`\`\`

1.  **Input Parsing:** The input string is converted into an array.
2.  **Length Check:** We first check if \`array.length > 0\` to handle empty arrays.
3.  **Index Calculation:** \`array.length - 1\` gives us the index of the last element.
4.  **Access and Return:** We use bracket notation to get the element at that calculated index. If the array was empty, we return a helpful message.

### 📚 Key Concepts
-   **Array \`.length\` Property:** Returns the number of elements in the array.
-   **Zero-Indexing:** The relationship between the length and the last index is crucial (\`lastIndex = length - 1\`).
-   **Ternary Operator:** A concise way to write a simple if-else statement (\`condition ? value_if_true : value_if_false\`).
`,
  "check-boolean": `
### 💡 Problem Breakdown
The goal is to check if an input value is a boolean \`true\` or \`false\`. The input comes as a string, so we need to handle the conversion carefully.

### ⚙️ Solution Walkthrough
The solution checks the string representation of the boolean.

\`\`\`javascript
({ val }) => {
  const lowerVal = val.trim().toLowerCase();
  if (lowerVal === 'true') return true;
  if (lowerVal === 'false') return false;
  return \`Input "\${val}" is not a boolean.\`;
}
\`\`\`

1.  **Input Cleanup:** \`.trim()\` removes any leading/trailing whitespace, and \`.toLowerCase()\` converts the string to lowercase. This makes the comparison case-insensitive (e.g., "True", "TRUE", "true" all work).
2.  **Comparison:** The cleaned string is strictly compared to "true" and "false".
3.  **Return Value:** If it matches, the corresponding boolean value is returned. Otherwise, an informational string is returned.

### 📚 Key Concepts
-   **Boolean:** The data type for true/false values.
-   **String Comparison:** Comparing strings for equality.
-   **String Methods:** \`.trim()\` and \`.toLowerCase()\` for cleaning up user input.
`,
  "simple-division": `
### 💡 Problem Breakdown
This problem requires dividing one number (the dividend) by another (the divisor). A critical part of this task is handling the edge case of division by zero, which is mathematically undefined.

### ⚙️ Solution Walkthrough
The solution performs the division and includes a specific check for a zero divisor.

\`\`\`javascript
({ num1, num2 }) => {
  const n2 = parseNumber(num2);
  if (n2 === 0) throw new Error("Division by zero is not allowed.");
  return parseNumber(num1) / n2;
}
\`\`\`

1.  **Input Parsing:** The divisor \`num2\` is parsed into a number first.
2.  **Edge Case Check:** An \`if\` statement checks if the divisor \`n2\` is equal to 0. If it is, the function throws an \`Error\`. This stops the execution and signals that something went wrong, which is then caught and displayed to the user.
3.  **Division:** If the check passes, the dividend \`num1\` is parsed and divided by \`n2\` using the \`/\` operator.
4.  **Return Value:** The result of the division is returned.

### 📚 Key Concepts
-   **Arithmetic Operators:** The \`/\` symbol for division.
-   **Error Handling:** The process of anticipating and managing errors. Using \`throw new Error()\` is a standard way to signal a critical failure in a function.
-   **Edge Cases:** Specific inputs that might cause a program to fail if not handled properly, like division by zero.
`,
  "area-of-rectangle": `
### 💡 Problem Breakdown
The task is to calculate the area of a rectangle. The formula for the area is simple: length multiplied by width.

### ⚙️ Solution Walkthrough
The solution directly implements the mathematical formula.

\`\`\`javascript
({ length, width }) => parseNumber(length) * parseNumber(width)
\`\`\`

1.  **Input Parsing:** The \`length\` and \`width\` values are converted from strings to numbers.
2.  **Multiplication:** The multiplication operator (\`*\`) is used to compute the product of the two numbers.
3.  **Return Value:** The calculated area is returned.

### 📚 Key Concepts
-   **Mathematical Formulas:** Translating a real-world formula into code.
-   **Functions:** Encapsulating the calculation into a reusable function.
`,
  "celsius-to-fahrenheit": `
### 💡 Problem Breakdown
The goal is to convert a temperature from the Celsius scale to the Fahrenheit scale using the standard conversion formula: **(C × 9/5) + 32**.

### ⚙️ Solution Walkthrough
The code is a direct implementation of this formula.

\`\`\`javascript
({ celsius }) => (parseNumber(celsius) * 9/5) + 32
\`\`\`

1.  **Input Parsing:** The input Celsius value is converted to a number.
2.  **Calculation:** The formula is applied directly: the Celsius value is multiplied by 9/5, and then 32 is added to the result.
3.  **Return Value:** The final Fahrenheit temperature is returned.

### 📚 Key Concepts
-   **Operator Precedence:** The order in which operations are performed. In JavaScript, multiplication (\`*\`) and division (\`/\`) happen before addition (\`+\`).
-   **Data Conversion:** Applying a formula to convert data from one unit to another.
`,
  "fahrenheit-to-celsius": `
### 💡 Problem Breakdown
This problem is the reverse of the previous one: convert a temperature from Fahrenheit to Celsius using the formula: **(F - 32) × 5/9**.

### ⚙️ Solution Walkthrough
The code implements the conversion formula.

\`\`\`javascript
({ fahrenheit }) => (parseNumber(fahrenheit) - 32) * 5/9
\`\`\`

1.  **Input Parsing:** The Fahrenheit value is converted to a number.
2.  **Calculation:** The formula is applied. Note the use of parentheses \`()\` to ensure that the subtraction (\`fahrenheit - 32\`) happens before the multiplication, following the rules of mathematics.
3.  **Return Value:** The calculated Celsius temperature is returned.

### 📚 Key Concepts
-   **Operator Precedence:** Parentheses \`()\` are used to override the default order of operations, forcing the subtraction to be calculated first.
`,
  "count-vowels": `
### 💡 Problem Breakdown
The task is to count how many vowels (a, e, i, o, u) are present in a given string. The count should be case-insensitive, meaning 'A' counts the same as 'a'.

### ⚙️ Solution Walkthrough
This solution uses a regular expression to find all vowel characters.

\`\`\`javascript
({ str }) => {
  const vowels = str.toLowerCase().match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}
\`\`\`

1.  **\`str.toLowerCase()\`:** The input string is first converted to lowercase to make the matching process case-insensitive.
2.  **\`.match(/[aeiou]/g)\`:** The \`.match()\` method is called on the string with a regular expression.
    -   \`/[aeiou]/\`: This is the regular expression pattern. The square brackets \`[]\` define a character set, meaning it will match any single character that is 'a', 'e', 'i', 'o', or 'u'.
    -   \`g\`: This is a "global" flag, which tells the \`.match()\` method to find *all* matches in the string, not just the first one.
3.  **Result Handling:** The \`.match()\` method returns an array of all the matches it found (e.g., \`['a', 'a', 'i', 'i', 'a', 'e', 'o', 'e']\`). If no matches are found, it returns \`null\`.
4.  **Ternary Operator:** The code uses a ternary operator (\`vowels ? vowels.length : 0\`) to handle both cases.
    -   If \`vowels\` is not null (i.e., it's an array of matches), it returns \`vowels.length\` (the number of matches).
    -   If \`vowels\` is null, it returns 0.

### 📚 Key Concepts
-   **Regular Expressions (Regex):** Patterns used to match character combinations in strings. They are incredibly powerful for text processing.
-   **\`String.prototype.match()\`:** A method that retrieves the result of matching a string against a regular expression.
-   **Ternary Operator:** A compact way to write an if-else condition.
`,
  "remove-whitespaces": `
### 💡 Problem Breakdown
The goal is to remove any space characters (whitespace) from the beginning and the end of a string, but not from the middle. This is often called "trimming" a string.

### ⚙️ Solution Walkthrough
JavaScript has a built-in string method for this exact purpose.

\`\`\`javascript
({ str }) => str.trim()
\`\`\`

1.  **\`.trim()\` Method:** This method is called on the input string.
2.  **Execution:** It automatically removes whitespace (spaces, tabs, newlines) from both the start and end of the string and returns the new, trimmed string. The original string is not modified.

### 📚 Key Concepts
-   **String Methods:** Built-in functions available on string objects. \`.trim()\` is essential for cleaning user input.
-   **Whitespace:** Any character or series of characters that represent horizontal or vertical space.
`,
  "repeat-string": `
### 💡 Problem Breakdown
The task is to take a string and a number, and create a new string that consists of the original string repeated that many times.

### ⚙️ Solution Walkthrough
An ES6 string method makes this task very simple.

\`\`\`javascript
({ str, times }) => str.repeat(parseNumber(times))
\`\`\`

1.  **Input Parsing:** The \`times\` input is converted to a number.
2.  **\`.repeat()\` Method:** The \`.repeat()\` method is called on the string \`str\`. It takes one argument: the number of times to repeat the string.
3.  **Return Value:** The method returns a new string containing the repeated content.

### 📚 Key Concepts
-   **ES6 String Methods:** \`.repeat()\` was added in the ECMAScript 2015 (ES6) version of JavaScript, providing a clean way to repeat strings.
`,
  "is-positive": `
### 💡 Problem Breakdown
This problem requires checking if a number is greater than zero. Zero itself is considered neither positive nor negative.

### ⚙️ Solution Walkthrough
The solution uses a simple mathematical comparison.

\`\`\`javascript
({ num }) => parseNumber(num) > 0
\`\`\`

1.  **Input Parsing:** The input string is converted to a number.
2.  **Comparison:** The greater-than operator (\`>\`) is used to compare the number to 0.
3.  **Return Value:** This comparison directly evaluates to a boolean value. It returns \`true\` if the number is greater than 0, and \`false\` otherwise.

### 📚 Key Concepts
-   **Comparison Operators:** Symbols like \`>\` (greater than), \`<\` (less than), \`>=\` (greater than or equal to) that compare two values and return a boolean.
`,
  "is-negative": `
### 💡 Problem Breakdown
This problem is the opposite of the previous one: check if a number is less than zero.

### ⚙️ Solution Walkthrough
The solution uses the less-than comparison operator.

\`\`\`javascript
({ num }) => parseNumber(num) < 0
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **Comparison:** The less-than operator (\`<\`) checks if the number is less than 0.
3.  **Return Value:** The boolean result (\`true\` or \`false\`) of the comparison is returned.

### 📚 Key Concepts
-   **Comparison Operators:** The \`<\` (less than) operator.
`,
  "get-absolute-value": `
### 💡 Problem Breakdown
The task is to find the absolute value of a number. The absolute value is the number's distance from zero on the number line, which means it's always non-negative. For example, the absolute value of -15 is 15, and the absolute value of 15 is also 15.

### ⚙️ Solution Walkthrough
JavaScript's built-in \`Math\` object has a function for this.

\`\`\`javascript
({ num }) => Math.abs(parseNumber(num))
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **\`Math.abs()\`:** This is a static method on the global \`Math\` object. It takes a number as an argument and returns its absolute value.
3.  **Return Value:** The non-negative result from \`Math.abs()\` is returned.

### 📚 Key Concepts
-   **\`Math\` Object:** A built-in object in JavaScript that has properties and methods for mathematical constants and functions. It is not a constructor; all its methods are static.
-   **Absolute Value:** A fundamental mathematical concept representing magnitude without regard to sign.
`,
  "simple-for-loop": `
### 💡 Problem Breakdown
This problem introduces the concept of a loop. The goal is to use a "for" loop to generate a sequence of numbers starting from 0 up to (but not including) a given number, and format them into a single string separated by dashes.

### ⚙️ Solution Walkthrough
The solution initializes an empty string and builds it up inside the loop.

\`\`\`javascript
({ num }) => {
  let result = '';
  const limit = parseNumber(num);
  for (let i = 0; i < limit; i++) {
    result += i + (i < limit - 1 ? '-' : '');
  }
  return result;
}
\`\`\`

1.  **Initialization:** An empty string \`result\` is created to store the output. The input \`num\` is parsed into a numeric \`limit\`.
2.  **The \`for\` Loop:** This is the core of the solution.
    -   \`let i = 0\`: The loop starts by declaring a counter variable \`i\` and initializing it to 0.
    -   \`i < limit\`: This is the condition. The loop will continue to run as long as \`i\` is less than the \`limit\`.
    -   \`i++\`: After each iteration of the loop, the counter \`i\` is incremented by 1.
3.  **Inside the Loop:** In each iteration, a string is appended to \`result\`.
    -   \`result += i\`: The current value of the counter \`i\` is added to the string.
    -   \`+ (i < limit - 1 ? '-' : '')\`: This is a clever use of the ternary operator. It checks if the current iteration is *not* the last one. If it's not the last, it adds a dash "-". If it *is* the last one, it adds an empty string, avoiding a trailing dash.
4.  **Return Value:** After the loop has finished, the complete \`result\` string is returned.

### 📚 Key Concepts
-   **Loops (\`for\`):** A control flow statement for executing code repeatedly. The \`for\` loop is ideal when you know how many times you want to iterate.
-   **String Concatenation:** Building a string by repeatedly adding to it using the \`+=\` operator.
-   **Ternary Operator:** A concise conditional for choosing between two values.
`,
  "simple-while-loop": `
### 💡 Problem Breakdown
This problem introduces another type of loop: the "while" loop. The task is to count down from a given number to 1 and create a string of these numbers separated by spaces.

### ⚙️ Solution Walkthrough
The solution uses a loop that continues as long as a condition is true.

\`\`\`javascript
({ num }) => {
  let result = '';
  let i = parseNumber(num);
  while (i > 0) {
    result += i + (i > 1 ? ' ' : '');
    i--;
  }
  return result;
}
\`\`\`

1.  **Initialization:** An empty string \`result\` is created. A counter variable \`i\` is initialized to the starting number.
2.  **The \`while\` Loop:**
    -   \`while (i > 0)\`: This is the condition. The code inside the loop will execute repeatedly as long as the value of \`i\` is greater than 0.
3.  **Inside the Loop:**
    -   \`result += i + (i > 1 ? ' ' : '')\`: The current value of \`i\` is added to the result string. A ternary operator adds a space after the number, but only if it's not the last number (i.e., when \`i\` is greater than 1).
    -   \`i--\`: The counter \`i\` is decremented by 1. This is crucial! Without this line, the condition \`i > 0\` would always be true, creating an infinite loop.
4.  **Return Value:** Once \`i\` reaches 0, the loop condition becomes false, the loop terminates, and the final \`result\` string is returned.

### 📚 Key Concepts
-   **Loops (\`while\`):** A loop that executes as long as a specified condition is true. It's useful when the number of iterations isn't known beforehand (though in this case, a \`for\` loop could also work).
-   **Decrement Operator (\`--\`):** Reduces the value of a variable by one.
-   **Infinite Loops:** A common bug where a loop's condition never becomes false, causing the program to hang. Always ensure your loop has a way to terminate.
`,
  "array-length": `
### 💡 Problem Breakdown
The goal is to find out how many elements are in a given array.

### ⚙️ Solution Walkthrough
This solution uses the built-in \`.length\` property of arrays.

\`\`\`javascript
({ arr }) => parseStringArray(arr).length
\`\`\`

1.  **Input Parsing:** \`parseStringArray(arr)\` converts the comma-separated string into a JavaScript array.
2.  **\`.length\` Property:** Just like strings, arrays have a \`.length\` property that holds the number of elements they contain.
3.  **Return Value:** The numerical length of the array is returned.

### 📚 Key Concepts
-   **Array \`.length\` Property:** A fundamental property of arrays that gives you their size.
`,
  "simple-if-else": `
### 💡 Problem Breakdown
This problem introduces conditional logic. Based on a person's age, we need to determine if they are a "minor" or an "adult". The rule is that age 18 and over is considered an adult.

### ⚙️ Solution Walkthrough
The solution uses a ternary operator, which is a compact form of an \`if-else\` statement.

\`\`\`javascript
({ age }) => parseNumber(age) >= 18 ? 'adult' : 'minor'
\`\`\`

1.  **Input Parsing:** The input \`age\` is converted to a number.
2.  **Condition:** \`parseNumber(age) >= 18\` checks if the age is greater than or equal to 18. This expression evaluates to either \`true\` or \`false\`.
3.  **Ternary Operator (\`? :\`):**
    -   The \`?\` separates the condition from the possible outcomes.
    -   If the condition is \`true\`, the value before the colon (\`:\`) is returned: the string \`'adult'\`.
    -   If the condition is \`false\`, the value after the colon is returned: the string \`'minor'\`.

### 🔄 Alternative Approaches
You could write the same logic with a more traditional \`if-else\` block, which is sometimes easier to read for beginners:
\`\`\`javascript
const ageNum = parseNumber(age);
if (ageNum >= 18) {
  return 'adult';
} else {
  return 'minor';
}
\`\`\`

### 📚 Key Concepts
-   **Conditional Statements:** Code structures (\`if\`, \`else\`, ternary operator) that execute different blocks of code based on whether a condition is true or false.
-   **Comparison Operators:** \`>=\` (greater than or equal to).
-   **Ternary Operator:** A concise, one-line alternative to a simple \`if-else\` statement.
`,
  "check-string-includes": `
### 💡 Problem Breakdown
The task is to determine if a smaller string (a "substring") exists anywhere inside a larger string.

### ⚙️ Solution Walkthrough
JavaScript provides a convenient ES6 string method for this.

\`\`\`javascript
({ mainStr, subStr }) => mainStr.includes(subStr)
\`\`\`

1.  **\`.includes()\` Method:** The \`.includes()\` method is called on the \`mainStr\`.
2.  **Argument:** It takes the \`subStr\` as an argument to search for.
3.  **Return Value:** The method returns a boolean:
    -   \`true\` if \`subStr\` is found within \`mainStr\`.
    -   \`false\` if it is not found.
    The search is case-sensitive.

### 📚 Key Concepts
-   **ES6 String Methods:** \`.includes()\` was added in ES6 and is now the standard way to check for the presence of a substring.
-   **Substring:** A sequence of characters within a string.
`,
  "get-random-number": `
### 💡 Problem Breakdown
The goal is to generate a random whole number (integer) within a specific range, from 0 up to a given maximum value, inclusive.

### ⚙️ Solution Walkthrough
This solution combines two methods from the built-in \`Math\` object.

\`\`\`javascript
({ max }) => Math.floor(Math.random() * (parseNumber(max) + 1))
\`\`\`

1.  **Input Parsing:** The \`max\` value is converted to a number.
2.  **\`Math.random()\`:** This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). For example, it might return \`0.123\`, \`0.987\`, or \`0.5\`.
3.  **Scaling the Range:**
    -   We add 1 to the \`max\` value. This is because we want the maximum number to be *inclusive*. If \`max\` is 10, we want the range to be 0-10.
    -   The result of \`Math.random()\` is then multiplied by \`(max + 1)\`. This scales the random number. If \`max\` is 10, our multiplier is 11, and the result will be a random number between 0 (inclusive) and 11 (exclusive). For example, \`0.5 * 11 = 5.5\`.
4.  **\`Math.floor()\`:** This function rounds a number *down* to the nearest whole number. It effectively truncates the decimal part. For example, \`Math.floor(5.5)\` becomes 5, and \`Math.floor(10.999)\` becomes 10. This ensures we get an integer and that the maximum possible result is the original \`max\` value.

### 📚 Key Concepts
-   **\`Math.random()\`:** The core function for generating randomness in JavaScript.
-   **\`Math.floor()\`:** A function for rounding down, essential for converting random floats into integers.
-   **Inclusive vs. Exclusive:** Understanding the boundaries of a range. \`Math.random()\` is exclusive of 1, so we often need to adjust our formulas to make the upper bound inclusive.
`,
  "round-number-up": `
### 💡 Problem Breakdown
The task is to take a number with a decimal part and always round it up to the next whole number, even if the decimal is small (e.g., 4.01 should become 5).

### ⚙️ Solution Walkthrough
The built-in \`Math\` object has the perfect function for this.

\`\`\`javascript
({ num }) => Math.ceil(parseNumber(num))
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **\`Math.ceil()\`:** This function's name comes from "ceiling". It takes a number and returns the smallest integer greater than or equal to that number. In simpler terms, it always rounds up.
    -   \`Math.ceil(4.2)\` returns 5.
    -   \`Math.ceil(4.9)\` returns 5.
    -   \`Math.ceil(4.0)\` returns 4 (since it's already a whole number).

### 📚 Key Concepts
-   **\`Math\` Object:** A collection of tools for mathematical operations.
-   **\`Math.ceil()\`:** The specific method for rounding a number up to the nearest integer.
`,
  "round-number-down": `
### 💡 Problem Breakdown
This is the opposite of the previous problem. We need to take a number and always round it down to the nearest whole number, effectively ignoring its decimal part (e.g., 9.99 should become 9).

### ⚙️ Solution Walkthrough
The \`Math\` object also has a function for rounding down.

\`\`\`javascript
({ num }) => Math.floor(parseNumber(num))
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **\`Math.floor()\`:** This function returns the largest integer less than or equal to a given number. In simpler terms, it always rounds down.
    -   \`Math.floor(9.9)\` returns 9.
    -   \`Math.floor(9.1)\` returns 9.
    -   \`Math.floor(9.0)\` returns 9.

### 📚 Key Concepts
-   **\`Math.floor()\`:** The specific method for rounding a number down (truncating the decimal).
`,
  "round-to-nearest": `
### 💡 Problem Breakdown
This task requires us to round a number to the *nearest* whole number, following standard mathematical rules: if the decimal part is .5 or greater, round up; otherwise, round down.

### ⚙️ Solution Walkthrough
JavaScript's \`Math\` object provides a standard rounding function.

\`\`\`javascript
({ num }) => Math.round(parseNumber(num))
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **\`Math.round()\`:** This function rounds a number to the nearest integer.
    -   \`Math.round(3.5)\` returns 4.
    -   \`Math.round(3.49)\` returns 3.
    -   \`Math.round(3.7)\` returns 4.

### 📚 Key Concepts
-   **\`Math.round()\`:** The standard method for rounding to the nearest integer.
`,
  "power-of-number": `
### 💡 Problem Breakdown
The goal is to perform exponentiation: calculating a "base" number raised to the power of an "exponent". For example, 2 to the power of 8 (2⁸) means multiplying 2 by itself 8 times.

### ⚙️ Solution Walkthrough
The \`Math\` object provides a function for this operation.

\`\`\`javascript
({ base, exponent }) => Math.pow(parseNumber(base), parseNumber(exponent))
\`\`\`

1.  **Input Parsing:** Both \`base\` and \`exponent\` are converted to numbers.
2.  **\`Math.pow()\`:** This function takes two arguments: the base and the exponent, in that order. It returns the result of the calculation.

### 🔄 Alternative Approaches
ES7 introduced an infix operator for exponentiation, which can look cleaner:
\`\`\`javascript
parseNumber(base) ** parseNumber(exponent)
\`\`\`
This does the exact same thing as \`Math.pow()\`.

### 📚 Key Concepts
-   **Exponentiation:** The mathematical operation of raising a number to a power.
-   **\`Math.pow()\`:** The standard function for this calculation.
-   **Exponentiation Operator (\`**\`): A more modern, operator-based syntax for the same calculation.
`,
  "square-root": `
### 💡 Problem Breakdown
The task is to find the square root of a number. The square root of a number 'x' is a number 'y' such that y² = x. For example, the square root of 81 is 9 because 9 * 9 = 81.

### ⚙️ Solution Walkthrough
JavaScript's \`Math\` object has a dedicated function for this.

\`\`\`javascript
({ num }) => Math.sqrt(parseNumber(num))
\`\`\`

1.  **Input Parsing:** The input is converted to a number.
2.  **\`Math.sqrt()\`:** This function takes a single number and returns its square root. If the input is negative, it will return \`NaN\` (Not a Number).
3.  **Return Value:** The calculated square root is returned.

### 📚 Key Concepts
-   **Square Root:** A fundamental mathematical operation.
-   **\`Math.sqrt()\`:** The specific method in JavaScript for calculating the square root.
`,
  "simple-array-join": `
### 💡 Problem Breakdown
The goal is to take a collection of items in an array and merge them into a single string. You should also be able to specify a "separator" to place between each item in the final string.

### ⚙️ Solution Walkthrough
This solution uses the array's built-in \`.join()\` method.

\`\`\`javascript
({ arr, separator }) => parseStringArray(arr).join(separator)
\`\`\`

1.  **Input Parsing:** The comma-separated string \`arr\` is converted into a true JavaScript array.
2.  **\`.join()\` Method:** The \`.join()\` method is called on the array.
3.  **Argument:** It takes one optional argument: the separator string. In this case, we pass the user-provided \`separator\`.
    -   If you call \`['a', 'b'].join('-')\`, you get \`"a-b"\`.
    -   If you call it with no argument, \`['a', 'b'].join()\`, it defaults to a comma, giving \`"a,b"\`.
4.  **Return Value:** The method returns the new, combined string.

### 📚 Key Concepts
-   **\`Array.prototype.join()\`:** A powerful method for converting an array into a string with a specified delimiter. It's the inverse operation of \`String.prototype.split()\`.
`,
  "string-to-number": `
### 💡 Problem Breakdown
The task is to convert a string that looks like a number (e.g., "123.45") into an actual number data type that can be used in mathematical calculations.

### ⚙️ Solution Walkthrough
The solution uses a helper function, \`parseNumber\`, which relies on JavaScript's built-in \`parseFloat\`.

\`\`\`javascript
({ str }) => parseNumber(str)
\`\`\`

1.  **\`parseNumber()\` / \`parseFloat()\`:** This built-in function takes a string as input, examines it from the beginning, and returns a floating-point number.
    -   It stops parsing when it hits a character that isn't part of a number.
    -   For example, \`parseFloat("123.45abc")\` would return \`123.45\`.
    -   If the string does not start with a number, it returns \`NaN\` (Not a Number).
2.  **Return Value:** The function returns the converted number.

### 🔄 Alternative Approaches
-   **\`parseInt(string, radix)\`:** Use this when you specifically want a whole number (integer). The second argument (radix, usually 10 for decimal) is important for consistency.
-   **Unary Plus (\`+\`):** A shorthand way to convert. \`let num = +"123.45";\` works and is often faster, but can sometimes be less clear to read.

### 📚 Key Concepts
-   **Data Types:** Understanding the difference between a string and a number is crucial in programming.
-   **Type Casting/Conversion:** The process of converting a value from one data type to another. Functions like \`parseFloat\` perform explicit type conversion.
`,
  "number-to-string": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: convert a number data type into its string representation.

### ⚙️ Solution Walkthrough
The solution uses the global \`String()\` constructor function.

\`\`\`javascript
({ num }) => String(parseNumber(num))
\`\`\`

1.  **Input Parsing:** \`parseNumber(num)\` ensures we are starting with a valid number.
2.  **\`String()\` Constructor:** When called as a function (not with \`new\`), \`String()\` converts the value passed to it into a string. This is a safe and reliable way to convert any data type to a string.
3.  **Return Value:** The string representation of the number is returned.

### 🔄 Alternative Approaches
-   **\`.toString()\` Method:** You can call this method directly on a number: \`(42).toString()\`. The parentheses are needed so the JavaScript parser doesn't get confused by the dot.
-   **String Concatenation:** A common trick is to concatenate the number with an empty string: \`42 + ""\`. JavaScript's type coercion rules will convert the number to a string to perform the operation.

### 📚 Key Concepts
-   **Type Conversion:** Converting from a number to a string.
-   **\`String()\` Function:** A global function for reliable string conversion.
`,
  "get-char-at-index": `
### 💡 Problem Breakdown
The goal is to retrieve a single character from a string based on its position, or "index". Like arrays, strings are zero-indexed.

### ⚙️ Solution Walkthrough
JavaScript strings have a method for this, though bracket notation is now more common.

\`\`\`javascript
({ str, index }) => str.charAt(parseNumber(index))
\`\`\`

1.  **Input Parsing:** The \`index\` is converted to a number.
2.  **\`.charAt()\` Method:** The \`.charAt()\` method is called on the string. It takes a single argument: the index of the character to retrieve.
3.  **Return Value:** It returns a new string containing just the character at that index. If the index is out of bounds, it returns an empty string.

### 🔄 Alternative Approaches
Modern JavaScript treats strings like arrays of characters, so you can use bracket notation, which is often preferred for its conciseness:
\`\`\`javascript
str[parseNumber(index)]
\`\`\`
This will return \`undefined\` if the index is out of bounds, which can be a useful distinction from an empty string.

### 📚 Key Concepts
-   **Zero-Indexing:** Strings are zero-indexed, meaning the first character is at index 0.
-   **String as a Sequence:** Thinking of a string as an ordered sequence of characters, similar to an array.
-   **\`String.prototype.charAt()\`:** The traditional method for accessing a character by index.
`,
  "simple-object-access": `
### 💡 Problem Breakdown
This problem introduces JavaScript objects. The task is to access the value of a specific property within a given object, using the property's name (its "key").

### ⚙️ Solution Walkthrough
The solution first parses the JSON string into an object and then uses bracket notation to access the property.

\`\`\`javascript
({ json, key }) => {
  const obj = parseJSON(json);
  if (key in obj) {
    return obj[key];
  }
  throw new Error(\`Key "\${key}" not found in object.\`);
}
\`\`\`

1.  **Input Parsing:** \`parseJSON(json)\` converts the JSON text into a live JavaScript object.
2.  **Property Existence Check:** The \`in\` operator is used to check if the \`key\` exists as a property in the \`obj\`. This is a good practice to avoid trying to access properties that aren't there.
3.  **Bracket Notation Access (\`obj[key]\`):** Bracket notation is used here because the key we want to access is stored in a *variable* (\`key\`). We can't use dot notation (\`obj.key\`) because that would look for a property literally named "key". Bracket notation allows for dynamic property access.
4.  **Error Handling:** If the key is not found, an error is thrown to provide clear feedback.

### 📚 Key Concepts
-   **Object:** A collection of key-value pairs. Keys are usually strings, and values can be any data type.
-   **JSON (JavaScript Object Notation):** A standard text-based format for representing structured data based on JavaScript object syntax.
-   **Property Accessors:** The two ways to access object properties:
    -   **Dot Notation (\`obj.name\`):** Used when the property name is a fixed, valid identifier.
    -   **Bracket Notation (\`obj['name']\`):** Used when the property name is dynamic (stored in a variable) or is not a valid identifier (e.g., contains spaces).
`,
  "check-array-includes": `
### 💡 Problem Breakdown
The goal is to check if a specific value exists within an array.

### ⚙️ Solution Walkthrough
This solution uses the modern ES6 array method \`.includes()\`.

\`\`\`javascript
({ arr, value }) => parseStringArray(arr).includes(value)
\`\`\`

1.  **Input Parsing:** The comma-separated string \`arr\` is converted into a JavaScript array.
2.  **\`.includes()\` Method:** This method is called on the array. It takes the \`value\` to search for as an argument.
3.  **Return Value:** It returns \`true\` if the value is found in the array and \`false\` otherwise. The comparison is strict (like \`===\`).

### 🔄 Alternative Approaches
Before ES6, the common way to do this was with \`.indexOf()\`:
\`\`\`javascript
parseStringArray(arr).indexOf(value) !== -1
\`\`\`
\`.indexOf()\` returns the index of the element if found, or \`-1\` if not found. So, checking that the result is not -1 achieves the same goal. \`.includes()\` is generally considered more readable.

### 📚 Key Concepts
-   **\`Array.prototype.includes()\`:** The modern, semantic way to check for the presence of an element in an array.
-   **Array Searching:** The common task of looking for a value within an array.
`,
  "find-index-of": `
### 💡 Problem Breakdown
This task requires you to find the position (the "index") of the *first* occurrence of a specific value in an array.

### ⚙️ Solution Walkthrough
The solution uses the array's built-in \`.indexOf()\` method.

\`\`\`javascript
({ arr, value }) => parseStringArray(arr).indexOf(value)
\`\`\`

1.  **Input Parsing:** The input string is converted into an array.
2.  **\`.indexOf()\` Method:** This method is called on the array. It searches the array for the given \`value\`.
3.  **Return Value:**
    -   If the \`value\` is found, it returns the index of the first element that matches.
    -   If the \`value\` is not found in the array, it returns \`-1\`.

### 📚 Key Concepts
-   **\`Array.prototype.indexOf()\`:** A standard array method for finding the first index of a given element.
-   **Zero-Indexing:** Remember that the returned index starts from 0 for the first element.
`,
  "string-slice": `
### 💡 Problem Breakdown
The goal is to extract a portion of a string, creating a new, smaller string. This is known as "slicing". You need to specify the starting position (index) and the ending position.

### ⚙️ Solution Walkthrough
The solution uses the versatile \`.slice()\` string method.

\`\`\`javascript
({ str, start, end }) => str.slice(parseNumber(start), parseNumber(end))
\`\`\`

1.  **Input Parsing:** The \`start\` and \`end\` indices are converted to numbers.
2.  **\`.slice()\` Method:** This method is called on the string.
    -   The first argument is the **start index**. The slice will begin here.
    -   The second argument is the **end index**. The slice will go up to, but *not include*, the character at this index.
3.  **Return Value:** A new string containing the extracted characters is returned. The original string remains unchanged.

**Example:** For "The quick brown fox", \`.slice(4, 9)\` starts at index 4 ('q') and ends before index 9 (' '), resulting in "quick".

### 📚 Key Concepts
-   **\`String.prototype.slice()\`:** A fundamental method for extracting sections of a string. It can also take negative indices to count from the end of the string.
-   **Immutability:** String methods like \`.slice()\` do not modify the original string; they create and return a new one.
`,
  "array-slice": `
### 💡 Problem Breakdown
Similar to slicing a string, this task is to extract a portion of an array into a new array. You need a start and end index to define the portion to extract.

### ⚙️ Solution Walkthrough
The solution uses the array method \`.slice()\`, which works very similarly to the string method of the same name.

\`\`\`javascript
({ arr, start, end }) => parseStringArray(arr).slice(parseNumber(start), parseNumber(end)).join(', ')
\`\`\`

1.  **Input Parsing:** The input string is converted into an array, and the start/end indices are converted to numbers.
2.  **\`.slice()\` Method:** This method is called on the array.
    -   The first argument is the start index (inclusive).
    -   The second argument is the end index (exclusive).
3.  **Return Value:** \`.slice()\` returns a *new array* containing the extracted elements. The original array is not modified. The result is then \`.join(', ')\` to format it as a string for display.

**Example:** For ['a', 'b', 'c', 'd', 'e'], \`.slice(1, 3)\` starts at index 1 ('b') and goes up to (but not including) index 3 ('d'), resulting in the new array ['b', 'c'].

### 📚 Key Concepts
-   **\`Array.prototype.slice()\`:** A crucial method for creating a shallow copy of a portion of an array.
-   **Shallow Copy:** \`.slice()\` creates a new array, but if the elements are objects, it copies the references to those objects, not the objects themselves. For primitive types like numbers and strings, it effectively creates a full copy of the values.
`,
  "simple-ternary-operator": `
### 💡 Problem Breakdown
The goal is to use a specific JavaScript feature, the "ternary operator," to perform a simple conditional check: is a number greater than 10?

### ⚙️ Solution Walkthrough
The solution is a single line demonstrating the ternary syntax.

\`\`\`javascript
({ num }) => parseNumber(num) > 10 ? 'true' : 'false'
\`\`\`

The ternary operator is composed of three parts:
1.  **The Condition:** \`parseNumber(num) > 10\`
    -   This is the expression that is evaluated first. It will result in either \`true\` or \`false\`.
2.  **The "Truthy" Value:** \`? 'true'\`
    -   The question mark \`?\` separates the condition from the possible outcomes. The value immediately after the \`?\` is what the expression will evaluate to if the condition is true.
3.  **The "Falsy" Value:** \`: 'false'\`
    -   The colon \`:\` separates the two possible results. The value after the \`:\` is what the expression will evaluate to if the condition is false.

The entire expression returns either the string \`'true'\` or the string \`'false'\` based on the condition.

### 📚 Key Concepts
-   **Ternary Operator:** A conditional operator that takes three operands. It's often used as a compact shortcut for the \`if-else\` statement. Its syntax is \`condition ? exprIfTrue : exprIfFalse\`.
`,
  "modulo-operator": `
### 💡 Problem Breakdown
The task is to find the remainder of a division operation. For example, the remainder of 10 divided by 3 is 1 (because 3 goes into 10 three times, with 1 left over).

### ⚙️ Solution Walkthrough
The solution uses the modulo operator (\`%\`).

\`\`\`javascript
({ dividend, divisor }) => parseNumber(dividend) % parseNumber(divisor)
\`\`\`

1.  **Input Parsing:** Both numbers are converted to the number data type.
2.  **Modulo Operator (\`%\`):** This operator is placed between the two numbers. It performs the division and, instead of returning the result of the division, it returns only the remainder.
3.  **Return Value:** The numerical remainder is returned.

### 📚 Key Concepts
-   **Modulo Operator (\`%\`):** A fundamental arithmetic operator with many uses, including:
    -   Checking if a number is even or odd (\`num % 2\`).
    -   Cycling through a limited set of numbers (e.g., for array indices).
    -   Checking for divisibility.
`,
  "count-words-in-string": `
### 💡 Problem Breakdown
The goal is to count the number of words in a sentence. We need to be careful about how we define a "word" and handle multiple spaces between words.

### ⚙️ Solution Walkthrough
This solution splits the string by spaces and then counts the resulting parts.

\`\`\`javascript
({ str }) => str.trim().split(/\\s+/).filter(Boolean).length
\`\`\`

1.  **\`str.trim()\`:** First, we trim the string to remove any leading or trailing spaces. This prevents counting empty strings at the beginning or end.
2.  **\`.split(/\\s+/)\`:** The string is split using a regular expression.
    -   \`\\s\` matches any whitespace character (space, tab, newline).
    -   The \`+\` means "one or more".
    -   So, \`/\\s+/\` splits the string by one or more whitespace characters. This correctly handles cases like "hello   world" (with multiple spaces). The result is an array of words.
3.  **\`.filter(Boolean)\`:** This is a clever trick. If the string was empty to begin with, \`.split()\` might produce an array with an empty string: \`['']\`. The \`filter(Boolean)\` step removes any "falsy" values (like an empty string) from the array, ensuring an accurate count.
4.  **\`.length\`:** Finally, the \`.length\` property of the resulting clean array gives us the exact word count.

### 📚 Key Concepts
-   **Regular Expressions:** Using \`/\\s+/\` is more robust than splitting by a simple space \`' '\`.
-   **Method Chaining:** Calling multiple methods one after another on the result of the previous one.
-   **\`filter(Boolean)\`:** A concise way to remove all falsy values from an array.
`,
  "check-if-starts-with": `
### 💡 Problem Breakdown
The task is to determine if a string begins with a specific sequence of characters (a prefix).

### ⚙️ Solution Walkthrough
ES6 introduced a very readable string method for this purpose.

\`\`\`javascript
({ str, substr }) => str.startsWith(substr)
\`\`\`

1.  **\`.startsWith()\` Method:** This method is called on the main string \`str\`.
2.  **Argument:** It takes the prefix string \`substr\` as its argument.
3.  **Return Value:** It returns a boolean: \`true\` if \`str\` begins with \`substr\`, and \`false\` otherwise. The comparison is case-sensitive.

### 📚 Key Concepts
-   **ES6 String Methods:** \`.startsWith()\` provides a clear and declarative way to check for a prefix.
-   **Prefix:** A sequence of characters at the beginning of a string.
`,
  "check-if-ends-with": `
### 💡 Problem Breakdown
This is the opposite of the previous problem: determine if a string ends with a specific sequence of characters (a suffix).

### ⚙️ Solution Walkthrough
Similar to \`.startsWith()\`, ES6 provides a method for this.

\`\`\`javascript
({ str, substr }) => str.endsWith(substr)
\`\`\`

1.  **\`.endsWith()\` Method:** This method is called on the main string \`str\`.
2.  **Argument:** It takes the suffix string \`substr\` as its argument.
3.  **Return Value:** It returns \`true\` if \`str\` ends with \`substr\`, and \`false\` otherwise. The comparison is case-sensitive.

### 📚 Key Concepts
-   **ES6 String Methods:** \`.endsWith()\` provides a clear way to check for a suffix.
-   **Suffix:** A sequence of characters at the end of a string.
`,
  "simple-array-sum": `
### 💡 Problem Breakdown
The task is to calculate the sum of all the numbers in an array.

### ⚙️ Solution Walkthrough
The solution uses the powerful \`.reduce()\` array method to accumulate the total.

\`\`\`javascript
({ arr }) => parseNumberArray(arr).reduce((sum, current) => sum + current, 0)
\`\`\`

1.  **Input Parsing:** The comma-separated string is converted into an array of numbers.
2.  **\`.reduce()\` Method:** This method is called on the array. It's designed to "reduce" an array to a single value (in this case, the sum). It executes a callback function for each element.
3.  **Callback Function:** \`(sum, current) => sum + current\`
    -   **\`sum\`:** This is the "accumulator". It's the value returned from the previous iteration of the callback.
    -   **\`current\`:** This is the current element being processed in the array.
    -   \`sum + current\`: The callback simply adds the current number to the accumulated sum and returns the new sum.
4.  **Initial Value:** \`, 0\`
    -   The second argument to \`.reduce()\` is the initial value of the accumulator (\`sum\`). We start at 0 for a summation.
5.  **Execution:** \`.reduce()\` iterates through the array:
    -   Starts with \`sum = 0\`.
    -   For the first element (e.g., 1), it calculates \`0 + 1\`, returns 1. \`sum\` is now 1.
    -   For the second element (e.g., 2), it calculates \`1 + 2\`, returns 3. \`sum\` is now 3.
    -   ...and so on, until it has processed all elements.
6.  **Return Value:** The final value of the accumulator is returned.

### 📚 Key Concepts
-   **\`Array.prototype.reduce()\`:** A fundamental method in functional programming for processing an array to produce a single cumulative result.
-   **Accumulator:** A variable that holds the intermediate result during an iterative calculation like a reduction.
`,
  "get-date-today": `
### 💡 Problem Breakdown
The task is to get the current date from the system and format it into a standard, readable string format (YYYY-MM-DD).

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Date\` object and one of its formatting methods.

\`\`\`javascript
() => new Date().toISOString().split('T')[0]
\`\`\`

1.  **\`new Date()\`:** This creates a new \`Date\` object instance, which contains information about the current date, time, and timezone according to the system where the code is running.
2.  **\`.toISOString()\`:** This method is called on the \`Date\` object. It returns a string in the ISO 8601 format, which looks like this: \`2024-07-30T10:30:00.000Z\`. The 'T' separates the date from the time, and 'Z' indicates UTC (Zulu time).
3.  **\`.split('T')[0]\`:** This is a simple trick to get just the date part.
    -   \`.split('T')\` splits the ISO string into an array of two parts using 'T' as the delimiter: \`['2024-07-30', '10:30:00.000Z']\`.
    -   \`[0]\` then selects the first element of that array, which is the date part we want: \`"2024-07-30"\`.

### 📚 Key Concepts
-   **\`Date\` Object:** JavaScript's built-in object for working with dates and times.
-   **ISO 8601:** An international standard for representing dates and times, which is very useful for unambiguous data exchange.
`,
  "get-current-time": `
### 💡 Problem Breakdown
The goal is to get the current time from the system and format it as a string (HH:MM:SS).

### ⚙️ Solution Walkthrough
This solution uses the \`Date\` object and a different formatting method.

\`\`\`javascript
() => new Date().toTimeString().split(' ')[0]
\`\`\`

1.  **\`new Date()\`:** Creates a \`Date\` object for the current moment.
2.  **\`.toTimeString()\`:** This method formats the time portion of the \`Date\` object into a human-readable string. The exact format can vary slightly based on the system, but it typically looks like: \`"10:30:00 GMT-0400 (Eastern Daylight Time)"\`.
3.  **\`.split(' ')[0]\`:** This trick extracts just the time part.
    -   \`.split(' ')\` splits the time string by spaces, creating an array like \`['10:30:00', 'GMT-0400', '(Eastern', 'Daylight', 'Time)']\`.
    -   \`[0]\` selects the first element, which is the time in HH:MM:SS format.

### 📚 Key Concepts
-   **\`Date\` Object:** The fundamental object for date/time operations.
-   **Date Formatting Methods:** The \`Date\` object has several methods (\`.toLocaleTimeString()\`, \`.toTimeString()\`, etc.) for converting date information into different string formats.
`,
  "simple-bmi-calculator": `
### 💡 Problem Breakdown
This problem requires calculating the Body Mass Index (BMI) using a standard formula: **weight (kg) / (height (m)²) **.

### ⚙️ Solution Walkthrough
The solution implements the formula and formats the output.

\`\`\`javascript
({ weight, height }) => {
  const h = parseNumber(height);
  if (h === 0) throw new Error("Height cannot be zero.");
  return (parseNumber(weight) / (h * h)).toFixed(2);
}
\`\`\`

1.  **Input Parsing:** The \`weight\` and \`height\` are converted to numbers.
2.  **Edge Case:** It checks if height is zero to prevent a division-by-zero error.
3.  **Calculation:** The formula is applied: weight is divided by height squared (\`h * h\`).
4.  **\`.toFixed(2)\`:** This is a method called on a number. It formats the number using fixed-point notation, effectively rounding it to a specified number of decimal places and returning it as a string. Here, it ensures the BMI is displayed with two decimal places (e.g., "22.86").

### 📚 Key Concepts
-   **\`Number.prototype.toFixed()\`:** A method for formatting numbers to a specific number of decimal places, which is very useful for displaying currency or calculated values like BMI.
-   **Error Handling:** Proactively checking for invalid inputs like a height of zero.
`,
  "is-leap-year": `
### 💡 Problem Breakdown
The goal is to determine if a given year is a leap year. The rules for a leap year are specific:
1. A year is a leap year if it is divisible by 4.
2. **However**, if the year is also divisible by 100, it is **not** a leap year...
3. **Unless** the year is also divisible by 400. Then it **is** a leap year.

### ⚙️ Solution Walkthrough
The solution implements this logic using boolean operators.

\`\`\`javascript
({ year }) => {
  const y = parseNumber(year);
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}
\`\`\`

1.  **Input Parsing:** The year is converted to a number, \`y\`.
2.  **Logical Expression:** The return statement is a single boolean expression that captures all the rules. Let's break it down:
    -   **\`(y % 4 === 0 && y % 100 !== 0)\`**: This part handles the first two rules. It's true only if the year is divisible by 4 (with \`y % 4 === 0\`) AND it is *not* divisible by 100 (with \`y % 100 !== 0\`). This covers years like 2024, but excludes 1900.
    -   **\`|| (y % 400 === 0)\`**: The logical OR operator (\`||\`) connects the first part with the exception rule. The entire expression will be true if the first part is true, **OR** if this second part is true. This second part, \`(y % 400 === 0)\`, handles years like 2000, which are divisible by 100 but are still leap years because they are also divisible by 400.
3.  **Return Value:** The expression evaluates directly to \`true\` or \`false\`.

### 📚 Key Concepts
-   **Logical Operators:**
    -   **\`&&\` (AND):** Returns \`true\` only if both conditions on its left and right are true.
    -   **\`||\` (OR):** Returns \`true\` if at least one of the conditions is true.
-   **Operator Precedence:** The \`&&\` operator has higher precedence than \`||\`, so the AND condition is evaluated first, which is exactly what the logic requires. Parentheses are used for clarity.
-   **Modulo Operator (\`%\`):** Used to check for divisibility.
`,

  // =================================================================================================
  // INTERMEDIATE EXPLANATIONS
  // =================================================================================================
  "find-max-number": `
### 💡 Problem Breakdown
The goal is to find the largest number within a given array of numbers. This is a common requirement in data analysis and programming challenges.

### ⚙️ Solution Walkthrough
This solution uses a combination of JavaScript's built-in \`Math.max()\` function and the spread operator ('...').

\`\`\`javascript
({ arr }) => Math.max(...parseNumberArray(arr))
\`\`\`

1.  **Input Parsing:** \`parseNumberArray(arr)\` converts the comma-separated string into an array of actual numbers, for example, \`[1, 5, 2, 8, 3]\`.
2.  **Spread Operator (...):** The spread operator takes the elements of the array and "spreads" them out as if they were individual arguments passed to the function. So, \`Math.max(...[1, 5, 2, 8, 3])\` becomes equivalent to calling \`Math.max(1, 5, 2, 8, 3)\`.
3.  **\`Math.max()\`:** This function takes any number of arguments and returns the largest one.
4.  **Return Value:** The largest number from the array is returned.

### 🔄 Alternative Approaches
You could also solve this with a loop:
\`\`\`javascript
const numbers = parseNumberArray(arr);
if (numbers.length === 0) return -Infinity; // Or throw an error
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
return max;
\`\`\`
While this works perfectly, the \`Math.max()\` with spread operator approach is significantly more concise and declarative.

### 📚 Key Concepts
-   **\`Math.max()\`:** A built-in function for finding the maximum of a set of numbers.
-   **Spread Operator ('...'):** An ES6 feature used to expand iterables (like arrays) into individual elements. It's extremely useful for working with functions that accept a variable number of arguments.
`,
  "is-palindrome": `
### 💡 Problem Breakdown
A palindrome is a word, phrase, or sequence that reads the same backward as forward. The challenge is to check if a given string is a palindrome, but with a twist: you must ignore punctuation, spaces, and case differences. For example, "A man, a plan, a canal: Panama" should be considered a palindrome.

### ⚙️ Solution Walkthrough
The key is to first "normalize" or "clean" the string by removing unwanted characters and standardizing the case, and then perform the check.

\`\`\`javascript
({ str }) => {
  const cleaned = str.toLowerCase().replace(/[\\W_]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
\`\`\`

1.  **Normalization (the 'cleaned' variable):**
    -   **\`str.toLowerCase()\`:** The entire string is converted to lowercase to handle case-insensitivity.
    -   **\`.replace(/[\\W_]/g, '')\`:** A regular expression is used to remove all non-alphanumeric characters.
        -   \\W: Matches any character that is not a word character (letters, numbers, underscore). This includes spaces and punctuation.
        -   _: The underscore is explicitly added because \`\\W\` does not include it.
        -   [...]: The brackets create a character set.
        -   g: The global flag ensures all occurrences are replaced, not just the first.
    -   The replacement is an empty string (''), effectively deleting these characters.
2.  **Palindrome Check:**
    -   The check itself is a classic one-liner:
    -   **\`cleaned.split('')\`:** Splits the cleaned string into an array of characters.
    -   **\`.reverse()\`:** Reverses that array.
    -   **\`.join('')\`:** Joins the characters back into a string.
    -   **\`cleaned === cleaned.split('').reverse().join('')\`:** The original cleaned string is compared to the reversed version. If they are identical, it's a palindrome, and the function returns true. Otherwise, it returns false.

### 📚 Key Concepts
-   **Regular Expressions (Regex):** Used here for powerful string cleaning. \`/[\\W_]/g\` is a common pattern for removing anything that isn't a letter or number.
-   **Method Chaining:** Linking multiple method calls together (e.g., \`.toLowerCase().replace()\`) for concise code.
-   **String/Array Manipulation:** The core pattern of 'split-reverse-join' is fundamental for many string-based challenges.
`,
  "factorial-of-number": `
### 💡 Problem Breakdown
The task is to find the largest number within a given array of numbers. This is a common requirement in data analysis and programming challenges.

### ⚙️ Solution Walkthrough
This solution uses a combination of JavaScript's built-in \`Math.max()\` function and the spread operator ('...').

\`\`\`javascript
({ arr }) => Math.max(...parseNumberArray(arr))
\`\`\`

1.  **Input Parsing:** \`parseNumberArray(arr)\` converts the comma-separated string into an array of actual numbers, for example, \`[1, 5, 2, 8, 3]\`.
2.  **Spread Operator (...):** The spread operator takes the elements of the array and "spreads" them out as if they were individual arguments passed to the function. So, \`Math.max(...[1, 5, 2, 8, 3])\` becomes equivalent to calling \`Math.max(1, 5, 2, 8, 3)\`.
3.  **\`Math.max()\`:** This function takes any number of arguments and returns the largest one.
4.  **Return Value:** The largest number from the array is returned.

### 🔄 Alternative Approaches
You could also solve this with a loop:
\`\`\`javascript
const numbers = parseNumberArray(arr);
if (numbers.length === 0) return -Infinity; // Or throw an error
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
return max;
\`\`\`
While this works perfectly, the \`Math.max()\` with spread operator approach is significantly more concise and declarative.

### 📚 Key Concepts
-   **\`Math.max()\`:** A built-in function for finding the maximum of a set of numbers.
-   **Spread Operator ('...'):** An ES6 feature used to expand iterables (like arrays) into individual elements. It's extremely useful for working with functions that accept a variable number of arguments.
`,
  "fibonacci-sequence": `
### 💡 Problem Breakdown
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The task is to generate the first 'n' numbers of this sequence.

### ⚙️ Solution Walkthrough
The solution builds the sequence iteratively using a loop.

\`\`\`javascript
({ count }) => {
  const n = parseNumber(count);
  if (n <= 0) return [];
  if (n === 1) return [0];
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.join(', ');
}
\`\`\`

1.  **Edge Cases:** The code first handles edge cases: if the requested count is 0 or less, it returns an empty array. If the count is 1, it returns just the first number, \`[0]\`.
2.  **Initialization:** An array called \`sequence\` is initialized with the first two Fibonacci numbers, \`[0, 1]\`.
3.  **Loop:** A \`for\` loop starts from \`i = 2\` (since we already have the first two numbers) and runs up to (but not including) the desired count \`n\`.
4.  **Calculation:** Inside the loop, the next Fibonacci number is calculated by adding the two previous numbers in the sequence: \`sequence[i - 1] + sequence[i - 2]\`.
5.  **\`sequence.push()\`:** The newly calculated number is added to the end of the \`sequence\` array.
6.  **Return Value:** After the loop completes, the final array is converted to a comma-separated string for display.

### 📚 Key Concepts
-   **Iteration:** Building up a result step-by-step inside a loop.
-   **Sequences:** A series of numbers or values that follow a specific pattern.
-   **Edge Case Handling:** Considering and coding for unusual inputs (like 0, 1, or negative numbers) to make the function robust.
`,
  // ... continue for all other problems
};
