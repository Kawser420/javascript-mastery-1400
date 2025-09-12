export const explanations: Record<string, string> = {
  "say-hello": `
### 💡 Problem Breakdown
The goal is to create a simple function that takes a person's name as input and produces a personalized greeting message. This is a fundamental exercise in understanding function parameters and string manipulation.

### ⚙️ Solution Walkthrough
The solution uses a template literal to construct the greeting string.
\`\`\`
const greet = (name) => \`Hello, \${name}!\`;
// Example: greet('World'); returns "Hello, World!"
\`\`\`
1.  **\`(name)\`**: This is the function's parameter, a placeholder for the name that will be provided when the function is called.
2.  **\`\` (Backticks)**: These define a template literal, which allows for easy embedding of variables and expressions into a string.
3.  **\`\${name}\`**: This is a placeholder inside the template literal. The value of the \`name\` variable will be inserted at this position.

### 📚 Key Concepts
-   **Functions**: A block of code designed to perform a particular task.
-   **Parameters**: Variables listed as a part of a function definition.
-   **Template Literals**: A modern way to create strings in JavaScript that allows for embedded expressions.
`,
  "sum-two-numbers": `
### 💡 Problem Breakdown
This is a basic arithmetic problem designed to test your ability to write a function that accepts numerical inputs, performs a calculation, and returns the result.

### ⚙️ Solution Walkthrough
The function takes two numbers, converts them to a numeric type to be safe, and adds them.
\`\`\`
const sum = (num1, num2) => Number(num1) + Number(num2);
// Example: sum(5, 10); returns 15
\`\`\`
1.  **\`(num1, num2)\`**: The function accepts two parameters.
2.  **\`Number(...)\`**: This ensures that the inputs, which might be strings from a form, are converted into actual numbers before the calculation.
3.  **\`+\` Operator**: The standard addition operator is used to sum the two numbers.

### 📚 Key Concepts
-   **Arithmetic Operators**: Symbols that perform mathematical operations, like addition (\`+\`).
-   **Type Conversion**: Explicitly converting values from one type to another (e.g., string to number) to prevent unexpected behavior.
`,
  "subtract-numbers": `
### 💡 Problem Breakdown
This problem requires creating a function to find the difference between two numbers. It reinforces the understanding of basic arithmetic operations and function parameters.

### ⚙️ Solution Walkthrough
The function subtracts the second number from the first.
\`\`\`
const subtract = (num1, num2) => Number(num1) - Number(num2);
// Example: subtract(20, 8); returns 12
\`\`\`
1.  **Parameters**: The function takes \`num1\` and \`num2\` as inputs.
2.  **Type Conversion**: \`Number()\` is used to ensure both inputs are treated as numbers.
3.  **Subtraction Operator (\`-\`)**: The function uses the subtraction operator to perform the calculation.

### 📚 Key Concepts
-   **Functions**: Reusable blocks of code that perform a specific task.
-   **Arithmetic Operators**: The subtraction operator (\`-\`) is a fundamental arithmetic operator.
`,
  "simple-multiplication": `
### 💡 Problem Breakdown
This exercise focuses on creating a function to multiply two numbers. It is a core skill in programming, dealing with numeric data and basic calculations.

### ⚙️ Solution Walkthrough
The function takes two numbers and returns their product.
\`\`\`
const multiply = (num1, num2) => Number(num1) * Number(num2);
// Example: multiply(7, 6); returns 42
\`\`\`
1.  **Inputs**: The function accepts two arguments, \`num1\` and \`num2\`.
2.  **Multiplication Operator (\`*\`)**: The asterisk symbol is used to multiply the two numbers.
3.  **Return Value**: The function returns the result of the multiplication.

### 📚 Key Concepts
-   **Return Statement**: A function can return a value back to the calling code.
-   **Arithmetic Operators**: The multiplication operator (\`*\`) is essential for mathematical calculations.
`,
  "simple-division": `
### 💡 Problem Breakdown
The task is to write a function that divides one number by another. An important part of this problem is handling the edge case of division by zero, which is mathematically undefined and results in \`Infinity\` in JavaScript.

### ⚙️ Solution Walkthrough
The solution checks if the divisor is zero before performing the division.
\`\`\`
const divide = (dividend, divisor) => {
    if (Number(divisor) === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return Number(dividend) / Number(divisor);
};
// Example: divide(100, 10); returns 10
\`\`\`
1.  **Edge Case Handling**: An \`if\` statement checks if the \`divisor\` is 0. If it is, the function throws an error to prevent an invalid calculation.
2.  **Division Operator (\`/\`)**: If the divisor is not zero, the function proceeds to divide the \`dividend\` by the \`divisor\`.

### 📚 Key Concepts
-   **Error Handling**: The practice of anticipating and managing errors to prevent program crashes.
-   **Conditional Statements (\`if\`)**: Used to execute code based on a specific condition.
-   **Edge Cases**: Scenarios that can cause problems if not specifically handled, like division by zero.
`,
  "find-remainder": `
### 💡 Problem Breakdown
This problem introduces the modulo operator (\`%\`). The goal is to find the remainder left over after dividing one integer by another. For example, 10 divided by 3 is 3 with a remainder of 1.

### ⚙️ Solution Walkthrough
The function uses the modulo operator to directly calculate the remainder.
\`\`\`
const findRemainder = (dividend, divisor) => Number(dividend) % Number(divisor);
// Example: findRemainder(10, 3); returns 1
\`\`\`
1.  **Modulo Operator (\`%\`)**: This operator performs an integer division and returns the remainder.
2.  **Application**: It's very useful for tasks like determining if a number is even or odd (\`num % 2 === 0\`).

### 📚 Key Concepts
-   **Modulo Operator**: A binary operator that yields the integer remainder of a division.
-   **Integer Arithmetic**: Operations that deal with whole numbers.
`,
  exponentiation: `
### 💡 Problem Breakdown
The task is to calculate a number raised to the power of another (e.g., 2 to the power of 3 is 2 * 2 * 2 = 8). This is a common mathematical operation.

### ⚙️ Solution Walkthrough
The solution can use either the \`Math.pow()\` method or the exponentiation operator (\`**\`).
\`\`\`
// Using Math.pow()
const power = (base, exponent) => Math.pow(Number(base), Number(exponent));

// Using the exponentiation operator (ES6)
const powerES6 = (base, exponent) => Number(base) ** Number(exponent);

// Example: power(2, 3); returns 8
// Example: powerES6(2, 3); returns 8
\`\`\`
1.  **\`Math.pow(base, exponent)\`**: A built-in JavaScript method for this calculation.
2.  **Exponentiation Operator (\`**\`)**: A more modern and concise syntax introduced in ES6.

### 📚 Key Concepts
-   **\`Math\` Object**: A built-in object that has properties and methods for mathematical constants and functions.
-   **Exponentiation**: The operation of raising a number to a power.
`,
  "increment-number": `
### 💡 Problem Breakdown
This is a very basic but common operation: increasing a number's value by one.

### ⚙️ Solution Walkthrough
The solution uses the addition operator or the increment operator (\`++\`).
\`\`\`
// Using addition
const increment = (num) => Number(num) + 1;

// Using prefix increment operator
const incrementPrefix = (num) => ++num;

// Example: increment(5); returns 6
\`\`\`
1.  **Addition**: The simplest way is to add 1 to the number.
2.  **Increment Operator (\`++\`)**: A shorthand operator for adding 1 to a variable.

### 📚 Key Concepts
-   **Unary Operators**: Operators that work on a single operand, like the increment operator.
`,
  "decrement-number": `
### 💡 Problem Breakdown
The opposite of incrementing, this task involves decreasing a number's value by one.

### ⚙️ Solution Walkthrough
The solution uses the subtraction operator or the decrement operator (\`--\`).
\`\`\`
// Using subtraction
const decrement = (num) => Number(num) - 1;

// Using prefix decrement operator
const decrementPrefix = (num) => --num;

// Example: decrement(5); returns 4
\`\`\`
1.  **Subtraction**: The most straightforward way is to subtract 1.
2.  **Decrement Operator (\`--\`)**: A shorthand operator for subtracting 1 from a variable.

### 📚 Key Concepts
-   **Unary Operators**: The decrement operator is another example of a unary operator.
`,
  "string-length": `
### 💡 Problem Breakdown
The goal is to determine the number of characters in a string. This is a fundamental property of strings.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.length\` property of a string.
\`\`\`
const getLength = (str) => str.length;
// Example: getLength("JavaScript"); returns 10
\`\`\`
1.  **\`.length\` Property**: All strings in JavaScript have a built-in \`length\` property that returns the number of characters in the string.

### 📚 Key Concepts
-   **Properties**: Values associated with a JavaScript object. Even primitive types like strings can have properties and methods.
`,
  "get-first-character": `
### 💡 Problem Breakdown
The task is to extract the first character from a string. This introduces the concept of accessing individual characters in a string by their index.

### ⚙️ Solution Walkthrough
The solution uses bracket notation to access the character at index 0.
\`\`\`
const getFirstChar = (str) => str[0];
// Example: getFirstChar("Hello"); returns "H"
\`\`\`
1.  **Zero-based Indexing**: Like arrays, strings are zero-indexed, meaning the first character is at index 0.
2.  **Bracket Notation**: You can access a character at a specific index using \`string[index]\`.

### 📚 Key Concepts
-   **Indexing**: Accessing elements in a sequence (like a string or array) using their numerical position.
`,
  "get-last-character": `
### 💡 Problem Breakdown
This is slightly more complex than getting the first character. The task is to extract the last character of a string, which requires knowing the string's length.

### ⚙️ Solution Walkthrough
The solution uses the string's length property to calculate the index of the last character.
\`\`\`
const getLastChar = (str) => str[str.length - 1];
// Example: getLastChar("World"); returns "d"
\`\`\`
1.  **Calculating Index**: Since strings are zero-indexed, the last character is always at index \`length - 1\`.
2.  **Access**: The character is then accessed using bracket notation.

### 📚 Key Concepts
-   **Dynamic Indexing**: Using a calculation (\`str.length - 1\`) to determine the index to access.
`,
  "concatenate-strings": `
### 💡 Problem Breakdown
The task is to join two or more strings together to form a single, longer string. This process is called concatenation.

### ⚙️ Solution Walkthrough
The solution uses the addition operator (\`+\`), which is overloaded to perform string concatenation.
\`\`\`
const combine = (str1, str2) => str1 + str2;
// Example: combine("Hello, ", "World!"); returns "Hello, World!"
\`\`\`
1.  **Concatenation Operator (\`+\`)**: When the \`+\` operator is used with strings, it joins them together.

### 📚 Key Concepts
-   **String Concatenation**: The operation of joining character strings end-to-end.
-   **Operator Overloading**: When an operator has different meanings depending on the data types of its operands.
`,
  "number-to-string": `
### 💡 Problem Breakdown
This problem focuses on explicit type conversion. The goal is to take a number and convert it into its string representation.

### ⚙️ Solution Walkthrough
The solution uses the global \`String()\` constructor.
\`\`\`
const convertToString = (num) => String(num);
// Example: convertToString(123); returns "123"
\`\`\`
1.  **\`String()\` Constructor**: When called as a function, \`String()\` converts the given value to its string equivalent. This is a safe way to convert any data type to a string.

### 📚 Key Concepts
-   **Type Conversion**: The process of converting data from one type to another. It can be explicit (done by the programmer) or implicit (done automatically by JavaScript).
`,
  "string-to-number": `
### 💡 Problem Breakdown
The opposite of the previous problem, this task is about converting a string that looks like a number into an actual numeric data type.

### ⚙️ Solution Walkthrough
The solution uses the global \`Number()\` constructor.
\`\`\`
const convertToNumber = (str) => Number(str);
// Example: convertToNumber("45.5"); returns 45.5
\`\`\`
1.  **\`Number()\` Constructor**: When called as a function, \`Number()\` attempts to convert its argument into a number. If it can't, it returns \`NaN\` (Not a Number).

### 📚 Key Concepts
-   **Parsing**: The process of analyzing a string of symbols to determine its grammatical structure. Here, we're parsing a string to see if it represents a valid number.
-   **\`NaN\`**: A special value in JavaScript that represents "Not a Number".
`,
  "get-data-type": `
### 💡 Problem Breakdown
The task is to determine the underlying data type of a given variable. This is a fundamental debugging and logic tool.

### ⚙️ Solution Walkthrough
The solution uses the \`typeof\` operator.
\`\`\`
const getDataType = (value) => typeof value;
// Example: getDataType("hello"); returns "string"
// Example: getDataType(123);     returns "number"
\`\`\`
1.  **\`typeof\` Operator**: A unary operator that returns a string indicating the data type of the unevaluated operand.
2.  **Note**: Be aware of quirks, like \`typeof null\` returning \`"object"\`, which is a long-standing bug in JavaScript.

### 📚 Key Concepts
-   **Data Types**: The fundamental classification of data, such as string, number, boolean, object, etc.
-   **\`typeof\` Operator**: A built-in operator for checking the data type of a variable.
`,
  "boolean-true-false": `
### 💡 Problem Breakdown
This is a very simple exercise to reinforce the concept of boolean values, which are fundamental to logic and control flow. The function should simply return the boolean literal \`true\`.

### ⚙️ Solution Walkthrough
The function directly returns the boolean value.
\`\`\`
const returnTrue = () => true;
// Example: returnTrue(); returns true
\`\`\`
1.  **Boolean Literals**: \`true\` and \`false\` are the two boolean literal values in JavaScript.

### 📚 Key Concepts
-   **Booleans**: A primitive data type that can have only two values: \`true\` or \`false\`.
`,
  "strict-equality": `
### 💡 Problem Breakdown
This problem highlights the difference between strict and loose equality. The task is to compare two values using the strict equality operator (\`===\`), which checks for both equal value AND equal data type.

### ⚙️ Solution Walkthrough
The solution uses the strict equality operator.
\`\`\`
const strictCheck = (val1, val2) => val1 === val2;
// Example: strictCheck(5, 5); returns true
// Example: strictCheck(5, "5"); returns false
\`\`\`
1.  **Strict Equality (\`===\`)**: This operator returns \`true\` only if the operands are equal and of the same type. It does not perform type coercion.

### 📚 Key Concepts
-   **Equality Operators**: Symbols used to compare values.
-   **Type Coercion**: The automatic conversion of values from one data type to another. Strict equality avoids this.
`,
  "loose-equality": `
### 💡 Problem Breakdown
This problem demonstrates the loose equality operator (\`==\`). This operator compares two values for equality *after* converting both values to a common type. This can lead to unexpected results and is generally discouraged in favor of strict equality.

### ⚙️ Solution Walkthrough
The solution uses the loose equality operator.
\`\`\`
const looseCheck = (val1, val2) => val1 == val2;
// Example: looseCheck(5, 5); returns true
// Example: looseCheck(5, "5"); returns true (the string "5" is coerced to the number 5 before comparison)
\`\`\`
1.  **Loose Equality (\`==\`)**: This operator will attempt to convert and compare operands of different types.

### 📚 Key Concepts
-   **Type Coercion**: The main concept demonstrated here. While sometimes useful, implicit coercion can hide bugs.
`,
  "is-greater-than": `
### 💡 Problem Breakdown
This problem involves using a comparison operator to determine if one number is larger than another. This is fundamental to sorting, validation, and conditional logic.

### ⚙️ Solution Walkthrough
The solution uses the greater than operator (\`>\`).
\`\`\`
const isLarger = (num1, num2) => Number(num1) > Number(num2);
// Example: isLarger(10, 5); returns true
// Example: isLarger(5, 10); returns false
\`\`\`
1.  **Greater Than Operator (\`>\`)**: A binary comparison operator that returns \`true\` if the left operand is greater than the right operand.

### 📚 Key Concepts
-   **Comparison Operators**: Operators that compare their operands and return a boolean value based on whether the comparison is true.
`,
  "logical-and": `
### 💡 Problem Breakdown
This problem introduces logical operators. The logical AND (\`&&\`) operator is used to check if two or more conditions are all true simultaneously.

### ⚙️ Solution Walkthrough
The solution uses the logical AND operator to check both conditions.
\`\`\`
const canDrive = (age, hasLicense) => age >= 18 && hasLicense === true;
// Example: canDrive(20, true); returns true
// Example: canDrive(17, true); returns false
// Example: canDrive(20, false); returns false
\`\`\`
1.  **Logical AND (\`&&\`)**: This operator returns \`true\` if and only if both the left and right operands are truthy.

### 📚 Key Concepts
-   **Logical Operators**: Used to combine or invert boolean values.
-   **Boolean Logic**: A system of logic that deals with true and false values.
`,
  "logical-or": `
### 💡 Problem Breakdown
This problem demonstrates the logical OR (\`||\`) operator. It's used to check if at least one of several conditions is true.

### ⚙️ Solution Walkthrough
The solution uses the logical OR operator to check if either condition is met.
\`\`\`
const canEdit = (isAdmin, isOwner) => isAdmin === true || isOwner === true;
// Example: canEdit(true, false); returns true
// Example: canEdit(false, true); returns true
// Example: canEdit(false, false); returns false
\`\`\`
1.  **Logical OR (\`||\`)**: This operator returns \`true\` if either the left or right operand (or both) are truthy.

### 📚 Key Concepts
-   **Logical Operators**: The OR operator is a key component of boolean logic.
-   **Short-circuiting**: Logical operators in JavaScript use short-circuit evaluation. For OR, if the first operand is true, the second is not even evaluated.
`,
  "logical-not": `
### 💡 Problem Breakdown
The task is to use the logical NOT (\`!\`) operator to flip a boolean value from true to false, or false to true.

### ⚙️ Solution Walkthrough
The solution uses the logical NOT operator.
\`\`\`
const invert = (value) => !value;
// Example: invert(true); returns false
// Example: invert(false); returns true
\`\`\`
1.  **Logical NOT (\`!\`)**: A unary operator that inverts the truthiness of its operand.

### 📚 Key Concepts
-   **Unary Operators**: Operators that work on a single operand.
-   **Truthiness**: In JavaScript, values that are not explicitly \`false\` can still be treated as false in a boolean context (e.g., \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`). The NOT operator can be used to check for truthiness: \`!someValue\`.
`,
  "check-is-even": `
### 💡 Problem Breakdown
This is a classic problem that uses the modulo operator to determine if a number is even. An even number is any integer that is exactly divisible by 2.

### ⚙️ Solution Walkthrough
The solution checks if the remainder of the number divided by 2 is equal to 0.
\`\`\`
const isEven = (num) => Number(num) % 2 === 0;
// Example: isEven(8); returns true
// Example: isEven(7); returns false
\`\`\`
1.  **Modulo 2**: Any number that has a remainder of 0 when divided by 2 is even.
2.  **Strict Equality**: We use \`===\` to check if the remainder is exactly 0.

### 📚 Key Concepts
-   **Modulo Operator**: A powerful tool for solving problems related to divisibility and cycles.
`,
  "simple-if-else": `
### 💡 Problem Breakdown
This problem introduces the most fundamental control flow statement: \`if...else\`. The goal is to execute one piece of code if a condition is true, and a different piece of code if it's false.

### ⚙️ Solution Walkthrough
The solution uses an \`if...else\` statement to check the age.
\`\`\`
const checkVotingAge = (age) => {
    if (Number(age) >= 18) {
        return "Can vote";
    } else {
        return "Cannot vote";
    }
};
// Example: checkVotingAge(21); returns "Can vote"
\`\`\`
1.  **\`if (condition)\`**: The code inside the \`if\` block runs if the condition (\`age >= 18\`) evaluates to true.
2.  **\`else\`**: If the condition is false, the code inside the \`else\` block is executed instead.

### 📚 Key Concepts
-   **Control Flow**: The order in which the computer executes statements in a script.
-   **Conditional Logic**: Using statements like \`if...else\` to make decisions in your code.
`,
  "check-is-positive": `
### 💡 Problem Breakdown
This problem extends the \`if...else\` concept to include multiple conditions using \`else if\`. The function needs to differentiate between three states: positive, negative, or zero.

### ⚙️ Solution Walkthrough
The solution uses an \`if...else if...else\` chain.
\`\`\`
const checkNumber = (num) => {
    const n = Number(num);
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
};
// Example: checkNumber(-5); returns "Negative"
\`\`\`
1.  **\`if\`**: Checks for the first condition (positive).
2.  **\`else if\`**: If the first condition is false, this checks for a second condition (negative). You can have multiple \`else if\` blocks.
3.  **\`else\`**: This is the fallback that runs if none of the preceding \`if\` or \`else if\` conditions were true.

### 📚 Key Concepts
-   **Conditional Chaining**: Using \`if...else if...else\` to handle multiple, mutually exclusive conditions.
`,
  "grade-calculator": `
### 💡 Problem Breakdown
This is a practical application of \`if...else if...else\` chaining. The function must map a numerical score to a letter grade based on a series of ranges.

### ⚙️ Solution Walkthrough
The order of the checks is important. We start from the highest grade and work down.
\`\`\`
const getGrade = (score) => {
    const s = Number(score);
    if (s > 100 || s < 0) return "Invalid score";
    if (s >= 90) return "A";
    else if (s >= 80) return "B";
    else if (s >= 70) return "C";
    else if (s >= 60) return "D";
    else return "F";
};
// Example: getGrade(85); returns "B"
\`\`\`
1.  **Order of Operations**: By checking for \`>= 90\` first, we ensure that scores like 95 get an "A". If we checked for \`>= 80\` first, a 95 would incorrectly get a "B". The first condition that evaluates to true will execute its block and the statement will terminate.

### 📚 Key Concepts
-   **Logical Flow**: Structuring conditional statements in a logical order to produce the correct outcome.
`,
  "ternary-operator-check": `
### 💡 Problem Breakdown
The ternary operator is a concise, one-line alternative to a simple \`if...else\` statement. The task is to use this operator to return one of two messages based on a boolean condition.

### ⚙️ Solution Walkthrough
The solution uses the ternary operator syntax.
\`\`\`
const checkStatus = (isLoggedIn) => 
    isLoggedIn === true ? "Welcome, User!" : "Please log in.";
// Example: checkStatus(true); returns "Welcome, User!"
\`\`\`
1.  **Syntax**: \`condition ? value_if_true : value_if_false\`.
2.  **Readability**: It's very useful for short, conditional assignments, but can become hard to read if nested.

### 📚 Key Concepts
-   **Ternary Operator**: The only JavaScript operator that takes three operands. It's a shortcut for an \`if\` statement.
`,
  "is-leap-year": `
### 💡 Problem Breakdown
This is a classic logic problem. A leap year follows specific rules: it must be divisible by 4, unless it's a century year (like 1900), in which case it must also be divisible by 400.

### ⚙️ Solution Walkthrough
The solution combines these rules using logical AND (\`&&\`) and OR (\`||\`) operators.
\`\`\`
const isLeap = (year) => {
    const y = Number(year);
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
};
// Example: isLeap(2024); returns true
// Example: isLeap(1900); returns false
// Example: isLeap(2000); returns true
\`\`\`
1.  **Logic**: The parentheses are crucial. The condition reads: "The year is a leap year if it is (divisible by 4 AND NOT divisible by 100) OR (it is divisible by 400)."

### 📚 Key Concepts
-   **Complex Boolean Logic**: Combining multiple logical operators to express a complex rule.
-   **Operator Precedence**: Understanding the order in which operators are evaluated (parentheses are used to enforce a specific order).
`,
  "max-of-three": `
### 💡 Problem Breakdown
The task is to find the largest number among three given inputs. This can be solved with conditional statements or by using a built-in math function.

### ⚙️ Solution Walkthrough
The most efficient solution uses the \`Math.max()\` method.
\`\`\`
const findMax = (num1, num2, num3) => Math.max(Number(num1), Number(num2), Number(num3));
// Example: findMax(10, 25, 15); returns 25
\`\`\`
1.  **\`Math.max()\`**: This built-in function takes any number of arguments and returns the largest one.

### 📚 Key Concepts
-   **Built-in Functions**: Leveraging JavaScript's standard library to solve common problems efficiently.
`,
  "switch-statement-day": `
### 💡 Problem Breakdown
A \`switch\` statement is an alternative to a long \`if...else if...else\` chain, particularly when you are checking a single variable against a series of specific values. The task is to map a number to a day of the week.

### ⚙️ Solution Walkthrough
The solution uses a \`switch\` statement with several \`case\` clauses.
\`\`\`
const getDay = (dayNum) => {
    switch (Number(dayNum)) {
        case 1: return "Sunday";
        case 2: return "Monday";
        // ... other cases ...
        default: return "Invalid day number";
    }
};
// Example: getDay(3); returns "Tuesday"
\`\`\`
1.  **\`switch (expression)\`**: The expression (here, \`dayNum\`) is evaluated once.
2.  **\`case value:\`**: The value of the expression is compared with the values of each \`case\`.
3.  **Match**: If there is a match, the associated block of code is executed.
4.  **\`default\`**: If no case matches, the \`default\` block is executed.

### 📚 Key Concepts
-   **\`switch\` Statement**: A control flow statement for selecting one of many code blocks to be executed.
`,
  "simple-for-loop": `
### 💡 Problem Breakdown
This introduces loops, which are used to execute a block of code repeatedly. The \`for\` loop is ideal when you know how many times you want to loop. The task is to generate a sequence of numbers.

### ⚙️ Solution Walkthrough
The solution uses a standard \`for\` loop.
\`\`\`
const generateSequence = (num) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(i);
    }
    return result.join('-');
};
// Example: generateSequence(5); returns "0-1-2-3-4"
\`\`\`
1.  **Initialization**: \`let i = 0;\` creates a counter variable. This runs once at the start.
2.  **Condition**: \`i < num;\` is checked before each iteration. If it's true, the loop body runs.
3.  **Final Expression**: \`i++\` is executed after each iteration.

### 📚 Key Concepts
-   **Loops**: Control flow statements that allow code to be executed repeatedly.
-   **\`for\` Loop**: A loop that consists of three optional expressions, followed by a statement or a block of statements executed in the loop.
`,
  "for-loop-sum": `
### 💡 Problem Breakdown
This is a practical application of a \`for\` loop. The task is to iterate through a range of numbers and accumulate their sum in a variable.

### ⚙️ Solution Walkthrough
A loop counter iterates from 1 to the given number, adding its value to a running total.
\`\`\`
const sumUpTo = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i; // shorthand for sum = sum + i
    }
    return sum;
};
// Example: sumUpTo(10); returns 55
\`\`\`
1.  **Accumulator**: A variable (\`sum\`) is initialized to 0 outside the loop to hold the running total.
2.  **Iteration**: Inside the loop, the value of the counter (\`i\`) is added to the accumulator in each step.

### 📚 Key Concepts
-   **Accumulator Pattern**: A common programming pattern where you initialize a variable and then repeatedly update it inside a loop to accumulate a result.
`,
  "for-loop-countdown": `
### 💡 Problem Breakdown
This exercise shows that a \`for\` loop can also be used to count downwards by changing its initialization, condition, and final expression.

### ⚙️ Solution Walkthrough
The loop is initialized with the starting number and decrements the counter until it reaches 1.
\`\`\`
const countdown = (start) => {
    let result = [];
    for (let i = start; i >= 1; i--) {
        result.push(i);
    }
    return result.join(', ') + ', Blast off!';
};
// Example: countdown(5); returns "5, 4, 3, 2, 1, Blast off!"
\`\`\`
1.  **Initialization**: \`let i = start;\` starts the counter at the given number.
2.  **Condition**: \`i >= 1;\` continues the loop as long as the counter is 1 or greater.
3.  **Final Expression**: \`i--\` decrements the counter after each iteration.

### 📚 Key Concepts
-   **Loop Flexibility**: The three parts of a \`for\` loop can be configured to count up, down, or in any custom increment.
`,
  "simple-while-loop": `
### 💡 Problem Breakdown
The \`while\` loop is another type of loop. It's best used when you don't know in advance how many times you need to loop, but you know the condition that should stop it. This problem demonstrates a simple \`while\` loop.

### ⚙️ Solution Walkthrough
The loop continues as long as a condition is true.
\`\`\`
const runWhile = (start) => {
    let i = start;
    let result = [];
    while (i <= 10) {
        result.push(i);
        i += 2; // Crucial: must change the condition variable
    }
    return result.join(', ');
};
// Example: runWhile(0); returns "0, 2, 4, 6, 8, 10"
\`\`\`
1.  **Condition**: \`while (i <= 10)\` checks the condition before each iteration.
2.  **Loop Body**: If the condition is true, the body executes.
3.  **Updating the Variable**: It's essential to have code inside the loop that will eventually make the condition false (\`i += 2\`). Otherwise, you'll create an infinite loop.

### 📚 Key Concepts
-   **\`while\` Loop**: Creates a loop that executes a block of code as long as a specified condition evaluates to true.
-   **Infinite Loop**: A common bug where a loop's condition never becomes false, causing the program to hang.
`,
  "access-array-element": `
### 💡 Problem Breakdown
Arrays are ordered collections of data. This task is about accessing a specific piece of data within an array using its numerical index.

### ⚙️ Solution Walkthrough
The solution uses bracket notation with the specified index.
\`\`\`
const getElement = (arr, index) => {
    if (index < 0 || index >= arr.length) {
        throw new Error("Index is out of bounds.");
    }
    return arr[index];
};
// Example: getElement(["apple", "banana", "cherry"], 1); returns "banana"
\`\`\`
1.  **Arrays**: An array is created from the comma-separated string.
2.  **Index**: The desired index is used inside square brackets to retrieve the element at that position.
3.  **Boundary Check**: It's good practice to check if the index is valid before trying to access it.

### 📚 Key Concepts
-   **Array**: A data structure that stores a collection of elements.
-   **Zero-based Indexing**: The first element in an array is at index 0.
`,
  "get-array-length": `
### 💡 Problem Breakdown
The goal is to find out how many elements are in an array. This is a fundamental property needed for looping and indexing.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.length\` property of an array.
\`\`\`
const getArrayLength = (arr) => arr.length;
// Example: getArrayLength(["a", "b", "c", "d"]); returns 4
\`\`\`
1.  **\`.length\` Property**: All arrays in JavaScript have a \`length\` property that returns the number of elements they contain.

### 📚 Key Concepts
-   **Array Properties**: Arrays are objects in JavaScript and have properties, with \`.length\` being the most common.
`,
  "string-to-uppercase": `
### 💡 Problem Breakdown
This is a common string manipulation task. The goal is to convert all characters in a string to their uppercase equivalents.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.toUpperCase()\` string method.
\`\`\`
const toUpper = (str) => str.toUpperCase();
// Example: toUpper("hello world"); returns "HELLO WORLD"
\`\`\`
1.  **\`.toUpperCase()\`**: A method available on all strings that returns a new string with all characters converted to uppercase. The original string is not modified.

### 📚 Key Concepts
-   **String Methods**: JavaScript provides a rich set of built-in methods for working with strings.
-   **Immutability**: String methods like \`.toUpperCase()\` do not change the original string; they return a new one.
`,
  "string-to-lowercase": `
### 💡 Problem Breakdown
The opposite of the previous problem, this task involves converting all characters in a string to their lowercase equivalents.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.toLowerCase()\` string method.
\`\`\`
const toLower = (str) => str.toLowerCase();
// Example: toLower("HELLO WORLD"); returns "hello world"
\`\`\`
1.  **\`.toLowerCase()\`**: A string method that returns a new string with all characters converted to lowercase.

### 📚 Key Concepts
-   **String Methods**: Part of the standard library for string manipulation.
-   **Case-Insensitive Comparison**: Converting strings to the same case (usually lowercase) is a common technique for performing case-insensitive comparisons.
`,
  "string-includes": `
### 💡 Problem Breakdown
The task is to check if a smaller string (a substring) exists within a larger string. This is a common requirement for searching and filtering text.

### ⚙️ Solution Walkthrough
The solution uses the modern \`.includes()\` string method.
\`\`\`
const checkSubstring = (mainStr, subStr) => mainStr.includes(subStr);
// Example: checkSubstring("The quick brown fox", "quick"); returns true
// Example: checkSubstring("The quick brown fox", "dog"); returns false
\`\`\`
1.  **\`.includes()\`**: An ES6 method that determines whether one string may be found within another string, returning \`true\` or \`false\` as appropriate. It is case-sensitive.

### 📚 Key Concepts
-   **Substring**: A contiguous sequence of characters within a string.
-   **String Searching**: The process of finding occurrences of a pattern or substring within a larger string.
`,
  "area-of-rectangle": `
### 💡 Problem Breakdown
This is a practical problem that applies basic arithmetic. The goal is to calculate the area of a rectangle using the formula: Area = width × height.

### ⚙️ Solution Walkthrough
The function multiplies the width and height parameters.
\`\`\`
const calculateArea = (width, height) => Number(width) * Number(height);
// Example: calculateArea(10, 5); returns 50
\`\`\`
1.  **Formula**: The code directly implements the mathematical formula for the area of a rectangle.

### 📚 Key Concepts
-   **Problem Solving**: Translating a real-world problem or formula into code.
`,
  "celsius-to-fahrenheit": `
### 💡 Problem Breakdown
This is a formula-based conversion problem. The task is to convert a temperature from the Celsius scale to the Fahrenheit scale.

### ⚙️ Solution Walkthrough
The solution implements the conversion formula: (C × 9/5) + 32.
\`\`\`
const convertToF = (celsius) => (Number(celsius) * 9 / 5) + 32;
// Example: convertToF(20); returns 68
\`\`\`
1.  **Implementation**: The code is a direct translation of the given mathematical formula. Operator precedence handles the order of operations correctly (multiplication/division before addition).

### 📚 Key Concepts
-   **Operator Precedence**: The order in which operators are evaluated in a mathematical expression.
`,
  "fahrenheit-to-celsius": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting a temperature from Fahrenheit to Celsius.

### ⚙️ Solution Walkthrough
The solution implements the conversion formula: (F - 32) × 5/9.
\`\`\`
const convertToC = (fahrenheit) => (Number(fahrenheit) - 32) * 5 / 9;
// Example: convertToC(68); returns 20
\`\`\`
1.  **Parentheses**: Parentheses are used to ensure the subtraction (\`fahrenheit - 32\`) happens before the multiplication, following the order of operations required by the formula.

### 📚 Key Concepts
-   **Order of Operations**: Using parentheses to override the default operator precedence to match a specific formula.
`,
  "check-null": `
### 💡 Problem Breakdown
The goal is to check if a variable holds the special value \`null\`. \`null\` is a primitive value that represents the intentional absence of any object value.

### ⚙️ Solution Walkthrough
The solution uses the strict equality operator to check for \`null\`.
\`\`\`
const isNull = (value) => value === null;
// In the solver, we check the string 'null'
const checkNullInput = (str) => str.toLowerCase().trim() === 'null';
// Example: isNull(null); returns true
// Example: isNull(0); returns false
\`\`\`
1.  **Strict Comparison**: It's important to use \`===\` to check specifically for \`null\` and not other "falsy" values like \`0\` or \`undefined\`.

### 📚 Key Concepts
-   **\`null\`**: A primitive value representing the intentional absence of an object value.
`,
  "check-undefined": `
### 💡 Problem Breakdown
The goal is to check if a variable has the value \`undefined\`. A variable is \`undefined\` if it has been declared but not yet assigned a value.

### ⚙️ Solution Walkthrough
The solution uses the strict equality operator or the \`typeof\` operator.
\`\`\`
// Using strict equality
const isUndefined = (value) => value === undefined;

// Using typeof (often safer)
const isUndefinedTypeof = (value) => typeof value === 'undefined';

// Example: isUndefined(undefined); returns true
// Example: isUndefined(null); returns false
\`\`\`
1.  **Comparison**: Both methods work. Using \`typeof\` can be slightly safer as it won't throw a ReferenceError if the variable hasn't been declared at all (though that's not the case in a function parameter).

### 📚 Key Concepts
-   **\`undefined\`**: A primitive value automatically assigned to variables that have just been declared.
`,
  "string-repeat": `
### 💡 Problem Breakdown
The task is to create a new string by repeating an existing string a certain number of times.

### ⚙️ Solution Walkthrough
The solution uses the modern \`.repeat()\` string method.
\`\`\`
const repeatString = (str, count) => str.repeat(Number(count));
// Example: repeatString("abc", 3); returns "abcabcabc"
\`\`\`
1.  **\`.repeat()\`**: An ES6 string method that constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### 📚 Key Concepts
-   **String Methods**: Another example of JavaScript's powerful built-in string manipulation library.
`,
  "string-slicing": `
### 💡 Problem Breakdown
The task is to extract a "slice" or portion of a string. You need to specify the starting index and the ending index (which is not included in the result).

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.slice()\` string method.
\`\`\`
const sliceStr = (str, start, end) => str.slice(Number(start), Number(end));
// Example: sliceStr("JavaScript", 0, 4); returns "Java"
\`\`\`
1.  **\`.slice(startIndex, endIndex)\`**: Extracts a section of a string and returns it as a new string, without modifying the original string. The character at \`endIndex\` is not included.

### 📚 Key Concepts
-   **String Extraction**: Methods for creating substrings from a larger string.
`,
  "array-join": `
### 💡 Problem Breakdown
The task is to take an array of elements and combine them into a single string. You should also be able to specify a "separator" or "delimiter" string to put between each element.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.join()\` array method.
\`\`\`
const joinArray = (arr, separator) => arr.join(separator);
// Example: joinArray(["fire", "air", "water"], " - "); returns "fire - air - water"
// Example: joinArray(["a", "b", "c"], ""); returns "abc"
\`\`\`
1.  **\`.join(separator)\`**: A method on arrays that creates and returns a new string by concatenating all of the elements in the array, separated by commas or a specified separator string.

### 📚 Key Concepts
-   **Array to String Conversion**: A common operation for displaying array data in a human-readable format.
`,
  "find-array-average": `
### 💡 Problem Breakdown
This is a multi-step problem. First, you need to find the sum of all numbers in an array. Second, you need to divide that sum by the number of elements in the array to find the average.

### ⚙️ Solution Walkthrough
The solution first uses a loop (or \`.reduce()\`) to sum the elements, then divides by the array's length.
\`\`\`
const getAverage = (arr) => {
    if (arr.length === 0) return 0; // Handle empty array case
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
};
// Example: getAverage([10, 20, 30, 40, 50]); returns 30
\`\`\`
1.  **Summation**: The \`.reduce()\` method is an elegant way to calculate the sum. It iterates through the array, accumulating a total.
2.  **Division**: The calculated sum is then divided by the number of elements (\`arr.length\`).
3.  **Edge Case**: It's important to handle the case of an empty array to avoid division by zero.

### 📚 Key Concepts
-   **Array Aggregation**: Reducing an array of values to a single summary value (like a sum or average).
-   **\`Array.prototype.reduce()\`**: A powerful functional method for processing array elements to produce a single output.
`,
  "absolute-value": `
### 💡 Problem Breakdown
The absolute value of a number is its distance from zero on the number line, which is always non-negative. For example, the absolute value of -10 is 10. The task is to write a function that calculates this.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Math.abs()\` function.
\`\`\`
const getAbsoluteValue = (num) => Math.abs(num);
// Example: getAbsoluteValue(-10); returns 10
// Example: getAbsoluteValue(10); returns 10
\`\`\`
1.  **\`Math.abs()\`**: This function takes a number as an argument and returns its absolute value. It's the most direct way to solve this problem.

### 📚 Key Concepts
-   **\`Math\` Object**: A built-in JavaScript object that contains properties and methods for mathematical constants and functions.
-   **Absolute Value**: A fundamental mathematical concept representing a number's magnitude without regard to its sign.
`,
  "round-number-up": `
### 💡 Problem Breakdown
The task is to round a number with a decimal part *up* to the next largest whole number or integer. This is also known as finding the "ceiling" of a number.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Math.ceil()\` function.
\`\`\`
const roundUp = (num) => Math.ceil(num);
// Example: roundUp(4.2); returns 5
// Example: roundUp(4.0); returns 4
\`\`\`
1.  **\`Math.ceil()\`**: This function takes a number and returns the smallest integer greater than or equal to that number.

### 📚 Key Concepts
-   **Rounding**: The process of approximating a number to a nearby value.
-   **Ceiling Function**: A mathematical function that maps a real number to the least integer greater than or equal to the number.
`,
  "round-number-down": `
### 💡 Problem Breakdown
The task is to round a number with a decimal part *down* to the nearest whole number or integer. This is also known as finding the "floor" of a number.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Math.floor()\` function.
\`\`\`
const roundDown = (num) => Math.floor(num);
// Example: roundDown(4.8); returns 4
// Example: roundDown(4.0); returns 4
\`\`\`
1.  **\`Math.floor()\`**: This function takes a number and returns the largest integer less than or equal to that number.

### 📚 Key Concepts
-   **Rounding**: The process of approximating a number to a nearby value.
-   **Floor Function**: A mathematical function that maps a real number to the greatest integer less than or equal to the number.
`,
  "round-to-nearest": `
### 💡 Problem Breakdown
This is the most common type of rounding. The task is to round a number to the nearest integer. The standard rule is to round up if the decimal part is 0.5 or greater, and round down otherwise.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`Math.round()\` function.
\`\`\`
const roundNearest = (num) => Math.round(num);
// Example: roundNearest(4.5); returns 5
// Example: roundNearest(4.4); returns 4
\`\`\`
1.  **\`Math.round()\`**: This function returns the value of a number rounded to the nearest integer.

### 📚 Key Concepts
-   **Rounding**: Approximating a number. \`Math.round()\` is the standard method for general-purpose rounding.
`,
  "random-integer-in-range": `
### 💡 Problem Breakdown
The task is to generate a random whole number within a specified range, including both the minimum and maximum values. This requires using \`Math.random()\` and some arithmetic to scale and shift the result.

### ⚙️ Solution Walkthrough
The solution combines \`Math.random()\`, \`Math.floor()\`, and the min/max values.
\`\`\`
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
\`\`\`
1.  **\`Math.random()\`**: This generates a random decimal number between 0 (inclusive) and 1 (exclusive).
2.  **\`(max - min + 1)\`**: This calculates the size of the range. We add 1 to make the maximum value inclusive.
3.  **\`* (max - min + 1)\`**: This scales the random number to the size of our range.
4.  **\`Math.floor(...)\`**: This converts the random decimal to an integer.
5.  **\`+ min\`**: This shifts the range from \`0\` to \`max-min\` up to our desired \`min\` to \`max\` range.

### 📚 Key Concepts
-   **Random Number Generation**: A common task in programming for games, simulations, and tests.
-   **Range Scaling**: Using multiplication and addition to transform a value from one numerical range to another.
`,
  "string-starts-with": `
### 💡 Problem Breakdown
This task involves checking if a string begins with a specific sequence of characters (a substring).

### ⚙️ Solution Walkthrough
The modern ES6 method \`.startsWith()\` is the most direct way to solve this.
\`\`\`
const checkStart = (str, subStr) => str.startsWith(subStr);
// Example: checkStart("Hello world", "Hello"); returns true
// Example: checkStart("Hello world", "world"); returns false
\`\`\`
1.  **\`String.prototype.startsWith()\`**: This method takes a substring as an argument and returns a boolean value indicating whether the string it's called on begins with that substring. It is case-sensitive.

### 📚 Key Concepts
-   **String Methods**: JavaScript's standard library provides convenient methods for common string operations.
`,
  "string-trim": `
### 💡 Problem Breakdown
The task is to remove any "whitespace" (spaces, tabs, newlines) from the beginning and end of a string. This is a very common requirement when handling user input.

### ⚙️ Solution Walkthrough
The solution uses the built-in \`.trim()\` method.
\`\`\`
const trimString = (str) => str.trim();
// Example: trimString("   Hello World   "); returns "Hello World"
\`\`\`
1.  **\`String.prototype.trim()\`**: This method returns a new string with whitespace removed from both ends. The original string is not modified.

### 📚 Key Concepts
-   **String Sanitization**: The process of cleaning up string data, often from user input, to make it consistent and safe to process.
`,
  "string-replace-first": `
### 💡 Problem Breakdown
The goal is to find the first occurrence of a specific substring within a larger string and replace it with a new substring.

### ⚙️ Solution Walkthrough
The built-in \`.replace()\` method is used for this.
\`\`\`
const replaceFirst = (str, target, replacement) => str.replace(target, replacement);
// Example: replaceFirst("good dog good day", "good", "happy"); 
// returns "happy dog good day"
\`\`\`
1.  **\`String.prototype.replace()\`**: When called with string arguments, this method finds and replaces only the *first* match. To replace all matches, you would need to use a regular expression with a global flag.

### 📚 Key Concepts
-   **String Replacement**: A fundamental string manipulation task.
`,
  "string-split": `
### 💡 Problem Breakdown
The task is to take a single string (like a sentence) and break it apart into an array of smaller strings (like words) based on a "delimiter" or "separator".

### ⚙️ Solution Walkthrough
The solution uses the \`.split()\` method with a space character as the delimiter.
\`\`\`
const splitSentence = (str) => str.split(' ');
// Example: splitSentence("JavaScript is fun"); returns ["JavaScript", "is", "fun"]
\`\`\`
1.  **\`String.prototype.split()\`**: This method divides a String into an ordered list of substrings by searching for the separator, puts these substrings into an array, and returns the array.

### 📚 Key Concepts
-   **String to Array Conversion**: A common task when you need to process the individual parts of a string.
-   **Delimiter**: The character or string used to identify the points where the split should occur.
`,
  "array-push": `
### 💡 Problem Breakdown
This is a fundamental array manipulation task. The goal is to add one or more elements to the very end of an existing array.

### ⚙️ Solution Walkthrough
The solution uses the \`.push()\` method, which modifies the array in place.
\`\`\`
const addToArrayEnd = (arr, element) => {
    arr.push(element);
    return arr;
};
// Example: addToArrayEnd([1, 2, 3], 4); returns [1, 2, 3, 4]
\`\`\`
1.  **\`Array.prototype.push()\`**: This method adds the specified elements to the end of an array and returns the new length of the array. It *mutates* (changes) the original array.

### 📚 Key Concepts
-   **Array Mutation**: Operations that change the array they are called on directly.
`,
  "array-pop": `
### 💡 Problem Breakdown
The task is to remove the last element from an array. This is the opposite of \`.push()\`.

### ⚙️ Solution Walkthrough
The solution uses the \`.pop()\` method, which modifies the array and also returns the removed element.
\`\`\`
const removeFromArrayEnd = (arr) => {
    const poppedElement = arr.pop();
    // The original arr is now modified
    return \`Popped: \${poppedElement}\`;
};
// Example: removeFromArrayEnd([1, 2, 3, 4]);
\`\`\`
1.  **\`Array.prototype.pop()\`**: This method removes the last element from an array and returns that element. This action changes the length of the array.

### 📚 Key Concepts
-   **LIFO (Last-In, First-Out)**: The combination of \`.push()\` and \`.pop()\` allows an array to be used as a "stack" data structure.
`,
  "array-shift": `
### 💡 Problem Breakdown
The task is to remove the *first* element from an array.

### ⚙️ Solution Walkthrough
The solution uses the \`.shift()\` method, which modifies the array and returns the removed element.
\`\`\`
const removeFromArrayStart = (arr) => {
    const shiftedElement = arr.shift();
    // The original arr is now modified
    return \`Shifted: \${shiftedElement}\`;
};
\`\`\`
1.  **\`Array.prototype.shift()\`**: This method removes the first element from an array and returns that removed element. This method changes the length of the array.

### 📚 Key Concepts
-   **FIFO (First-In, First-Out)**: The combination of \`.push()\` (to add to the end) and \`.shift()\` (to remove from the front) allows an array to be used as a "queue" data structure.
`,
  "array-unshift": `
### 💡 Problem Breakdown
The task is to add one or more elements to the *beginning* of an array. This is the opposite of \`.shift()\`.

### ⚙️ Solution Walkthrough
The solution uses the \`.unshift()\` method.
\`\`\`
const addToArrayStart = (arr, element) => {
    arr.unshift(element);
    return arr;
};
// Example: addToArrayStart([2, 3, 4], 1); returns [1, 2, 3, 4]
\`\`\`
1.  **\`Array.prototype.unshift()\`**: This method adds the specified elements to the beginning of an array and returns the new length of the array. It mutates the original array.

### 📚 Key Concepts
-   **Array Mutation**: Like \`.push()\`, \`.pop()\`, and \`.shift()\`, \`.unshift()\` is a mutating method.
`,
  "array-includes": `
### 💡 Problem Breakdown
The task is to check if a specific value exists within an array.

### ⚙️ Solution Walkthrough
The modern ES6 method \`.includes()\` provides the clearest way to perform this check.
\`\`\`
const checkArrayForValue = (arr, value) => arr.includes(value);
// Example: checkArrayForValue(["apple", "banana", "cherry"], "banana"); returns true
\`\`\`
1.  **\`Array.prototype.includes()\`**: This method determines whether an array includes a certain value among its entries, returning \`true\` or \`false\` as appropriate. It uses a strict equality (\`===\`) comparison for most types but can correctly find \`NaN\`, unlike \`.indexOf()\`.

### 📚 Key Concepts
-   **Array Searching**: Finding if an element exists in a collection.
`,
  "array-index-of": `
### 💡 Problem Breakdown
The goal is not just to see if a value exists, but to find *where* it is located in the array. This task requires finding the index of the first occurrence of a value.

### ⚙️ Solution Walkthrough
The solution uses the \`.indexOf()\` method.
\`\`\`
const findElementIndex = (arr, value) => arr.indexOf(value);
// Example: findElementIndex(["a", "b", "c", "b"], "b"); returns 1
\`\`\`
1.  **\`Array.prototype.indexOf()\`**: This method returns the first index at which a given element can be found in the array, or -1 if it is not present.

### 📚 Key Concepts
-   **Array Indexing**: The position of an element in an array.
`,
  "array-slice": `
### 💡 Problem Breakdown
The task is to create a new, smaller array by extracting a portion (a "slice") of an existing array. An important feature is that this operation should not modify the original array.

### ⚙️ Solution Walkthrough
The solution uses the \`.slice()\` method.
\`\`\`
const createSubarray = (arr, start, end) => arr.slice(start, end);
// Example: createSubarray(['a','b','c','d','e'], 1, 3); returns ['b', 'c']
\`\`\`
1.  **\`Array.prototype.slice(start, end)\`**: This method returns a *shallow copy* of a portion of an array into a new array object. The original array is not modified. The \`end\` index is not included in the result.

### 📚 Key Concepts
-   **Immutability**: \`.slice()\` is a non-mutating method, which is often preferred for predictable code.
`,
  "do-while-loop": `
### 💡 Problem Breakdown
The \`do...while\` loop is a variant of the \`while\` loop. The key difference is that the condition is checked *after* the loop body executes. This guarantees that the loop will run at least once, regardless of whether the condition is initially true or false.

### ⚙️ Solution Walkthrough
A \`do...while\` loop is used to create a countdown.
\`\`\`
const runDoWhile = (num) => {
    let n = num;
    let result = [];
    do {
        result.push(n);
        n--;
    } while (n > 0);
    return result.join(', ');
}
// Example: runDoWhile(3); returns "3, 2, 1"
// Example: runDoWhile(0); returns "0"
\`\`\`
1.  **\`do { ... }\`**: The code inside the \`do\` block is executed first.
2.  **\`while (condition)\`**: The condition is checked *after* the first run. If it's true, the loop repeats.

### 📚 Key Concepts
-   **\`do...while\` Loop**: A control flow statement that guarantees at least one execution of its loop body.
`,
  "for-of-loop-array": `
### 💡 Problem Breakdown
The \`for...of\` loop is a modern ES6 loop for iterating over "iterable" objects, such as arrays, strings, maps, and sets. It provides a cleaner syntax than a traditional \`for\` loop for simply accessing each value in a sequence.

### ⚙️ Solution Walkthrough
A \`for...of\` loop is used to iterate directly over the values of an array.
\`\`\`
const iterateWithForOf = (arr) => {
    let result = '';
    for (const item of arr) {
        result += item + ' ';
    }
    return result.trim();
};
// Example: iterateWithForOf(["JS", "is", "great"]); returns "JS is great"
\`\`\`
1.  **\`for (const item of arr)\`**:
    *   **\`arr\`**: The iterable object (the array).
    *   **\`item\`**: A variable that is assigned the value of the next item in the iterable on each loop iteration.
2.  **Simplicity**: This loop avoids the need for a counter variable (\`i\`) and index-based access (\`arr[i]\`), making the code more readable.

### 📚 Key Concepts
-   **\`for...of\` Loop**: A modern loop for iterating over the values of an iterable.
-   **Iterable Protocol**: A set of rules that, when implemented, make an object iterable. Arrays and strings are built-in iterables.
`,
  "is-nan-check": `
### 💡 Problem Breakdown
\`NaN\` stands for "Not-a-Number". It's a special numeric value that results from an operation that cannot produce a valid number (e.g., \`0/0\` or \`Math.sqrt(-1)\`). A strange quirk of \`NaN\` is that it doesn't equal anything, not even itself (\`NaN === NaN\` is \`false\`). Therefore, you need a special function to check for it.

### ⚙️ Solution Walkthrough
The global \`isNaN()\` function or the more precise \`Number.isNaN()\` method is used.
\`\`\`
// Global isNaN() - can have weird results due to coercion
// isNaN("hello"); // true, because "hello" is coerced to NaN

// Number.isNaN() - the preferred, modern method
// Number.isNaN("hello"); // false, because it's a string, not the value NaN
const checkIsNaN = (value) => Number.isNaN(Number(value));

// Example: checkIsNaN("hello"); returns true
\`\`\`
1.  **\`Number.isNaN()\`**: This ES6 method is the most reliable way to check if a value is actually \`NaN\`. It does not perform type coercion. It returns \`true\` only if the value is the \`NaN\` primitive, and \`false\` otherwise.

### 📚 Key Concepts
-   **\`NaN\`**: A special primitive value representing "Not-a-Number".
-   **\`Number.isNaN()\`**: The robust, non-coercing method for checking if a value is \`NaN\`.
`,
  "check-truthy": `
### 💡 Problem Breakdown
In JavaScript, a "truthy" value is any value that is considered \`true\` when encountered in a boolean context (like an \`if\` statement). All values are truthy except for the "falsy" values: \`false\`, \`0\`, \`-0\`, \`0n\`, \`""\` (empty string), \`null\`, \`undefined\`, and \`NaN\`. The task is to check if a value is truthy.

### ⚙️ Solution Walkthrough
The simplest way to check for truthiness is to use the value directly in a conditional or to convert it to a boolean.
\`\`\`
const isTruthy = (value) => {
    if (value) {
        return true;
    } else {
        return false;
    }
};
// A more concise way:
const isTruthyConcise = (value) => !!value;
\`\`\`
1.  **\`if (value)\`**: The \`if\` statement automatically coerces the \`value\` to its boolean equivalent. If it's a truthy value, the condition passes.
2.  **\`!!value\`**: The double NOT operator is a common idiom to explicitly convert any value to its boolean representation. The first \`!\` coerces the value to its opposite boolean, and the second \`!\` flips it back to its actual boolean value.

### 📚 Key Concepts
-   **Truthy and Falsy**: A core concept in JavaScript that determines how values behave in logical operations and conditions.
`,
  "get-square-root": `
### 💡 Problem Breakdown
The task is to find the square root of a non-negative number. The square root of a number 'x' is a number 'y' such that y² = x.

### ⚙️ Solution Walkthrough
The built-in \`Math.sqrt()\` function is the perfect tool for this job.
\`\`\`
const squareRoot = (num) => {
    if (num < 0) {
        return "Cannot calculate square root of a negative number.";
    }
    return Math.sqrt(num);
};
// Example: squareRoot(16); returns 4
\`\`\`
1.  **Input Validation**: The code first checks if the number is negative, as the square root of a negative number is not a real number.
2.  **\`Math.sqrt()\`**: This function takes a number and returns its square root.

### 📚 Key Concepts
-   **\`Math\` Object**: JavaScript's built-in object for mathematical functions.
-   **Input Validation**: Checking inputs to a function to ensure they are valid and prevent errors.
`,
  "get-current-year": `
### 💡 Problem Breakdown
The goal is to get the current four-digit year from the system's clock. This requires using JavaScript's built-in \`Date\` object.

### ⚙️ Solution Walkthrough
A new \`Date\` object is created, and its \`getFullYear()\` method is called.
\`\`\`
const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
};
// Example: if run in 2024, returns 2024
\`\`\`
1.  **\`new Date()\`**: When called without arguments, this creates a \`Date\` object representing the current date and time.
2.  **\`.getFullYear()\`**: This is a method on the \`Date\` object that returns the four-digit year.

### 📚 Key Concepts
-   **\`Date\` Object**: The built-in object for working with dates and times in JavaScript.
-   **Object Methods**: Objects like \`Date\` have methods that allow you to get specific pieces of information from them.
`,
  "template-literal-expression": `
### 💡 Problem Breakdown
Template literals are powerful not just for inserting variables, but for embedding any valid JavaScript expression. The task is to create a string that includes the result of a calculation directly within the string.

### ⚙️ Solution Walkthrough
An arithmetic expression is placed inside the \`\${...}\` placeholder of a template literal.
\`\`\`
const createExpressionString = (a, b) => {
    return \`The sum of \${a} and \${b} is \${a + b}.\`;
};
// Example: createExpressionString(5, 10); returns "The sum of 5 and 10 is 15."
\`\`\`
1.  **\`\${a + b}\`**: The expression \`a + b\` is evaluated first. Its result (15) is then converted to a string and inserted into the final string.

### 📚 Key Concepts
-   **Template Literals**: A modern string syntax that allows for embedded expressions.
-   **Expressions**: Any valid unit of code that resolves to a value.
`,
  "char-at-index": `
### 💡 Problem Breakdown
This is an alternative to using bracket notation (\`string[index]\`) to get a character at a specific index. The \`.charAt()\` method is a more traditional way to achieve the same result.

### ⚙️ Solution Walkthrough
The \`.charAt()\` method is called on the string with the desired index.
\`\`\`
const getChar = (str, index) => str.charAt(index);
// Example: getChar("JavaScript", 4); returns "S"
\`\`\`
1.  **\`String.prototype.charAt()\`**: This method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. If the index is out of range, it returns an empty string.

### 📚 Key Concepts
-   **String Methods**: JavaScript has a rich library of methods for string manipulation.
`,
  "create-object": `
### 💡 Problem Breakdown
This is a fundamental task: creating an object to represent a real-world entity. An object literal is used to group related data (properties) together.

### ⚙️ Solution Walkthrough
Curly braces are used to define an object with two properties: \`title\` and \`author\`.
\`\`\`
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien"
};
\`\`\`
1.  **Object Literal**: The \`{...}\` syntax is the most common way to create objects in JavaScript.
2.  **Key-Value Pairs**: The object stores information in \`key: value\` pairs.

### 📚 Key Concepts
-   **Object**: A data structure for storing collections of data.
-   **Data Modeling**: Representing real-world entities as objects in code.
`,
  "access-object-property": `
### 💡 Problem Breakdown
The task is to retrieve a specific piece of data from an object. This is a core operation for working with structured data.

### ⚙️ Solution Walkthrough
Dot notation is used to access the \`age\` property of the \`person\` object.
\`\`\`
const person = { name: "John", age: 30 };
const age = person.age; // 30
\`\`\`
1.  **Dot Notation**: The syntax \`objectName.propertyName\` is a clean and readable way to access properties when the property name is a valid identifier.

### 📚 Key Concepts
-   **Property Accessors**: Mechanisms (like dot notation) for retrieving data from an object.
`,
  "modify-object-property": `
### 💡 Problem Breakdown
Objects are typically mutable, meaning their state can be changed. This problem involves targeting an existing property on an object and assigning a new value to it.

### ⚙️ Solution Walkthrough
The assignment operator (\`=\`) is used with dot notation to update the \`price\` property.
\`\`\`
const product = { name: "Laptop", price: 999.99 };
product.price = 1099.99; // The price is now updated
\`\`\`
1.  **Assignment**: The expression \`product.price\` on the left side of the assignment operator targets the property to be changed. The new value is on the right.

### 📚 Key Concepts
-   **Mutability**: The ability for an object's state to be modified after its creation.
`,
  "add-object-property": `
### 💡 Problem Breakdown
You can add new properties to an object at any time after it has been created. This problem demonstrates how to add a new key-value pair to an existing object.

### ⚙️ Solution Walkthrough
A new property, \`inStock\`, is added to the \`product\` object using dot notation and the assignment operator.
\`\`\`
const product = { name: "Mouse" };
product.inStock = true;
// product is now { name: "Mouse", inStock: true }
\`\`\`
1.  **Dynamic Properties**: If you assign a value to a property that doesn't exist on an object, JavaScript will automatically create that property for you.

### 📚 Key Concepts
-   **Dynamic Objects**: JavaScript objects are dynamic "bags" of properties that can be added to or removed from at any time.
`,
  "nested-if-statement": `
### 💡 Problem Breakdown
The task is to use nested conditional logic. This involves placing an \`if\` statement inside another \`if\` statement to check for a second condition only if the first condition is met.

### ⚙️ Solution Walkthrough
The outer \`if\` checks if the number is positive. If it is, the inner \`if\` checks if the number is even.
\`\`\`
const checkPositiveEven = (num) => {
    if (num > 0) {
        // This code only runs if the number is positive
        if (num % 2 === 0) {
            return "Positive and even.";
        } else {
            return "Positive and odd.";
        }
    }
    return "Not positive.";
};
\`\`\`
1.  **Outer Condition**: The first check filters the numbers, so the inner logic only has to deal with positive numbers.
2.  **Inner Condition**: The second check further categorizes the number as even or odd.

### 📚 Key Concepts
-   **Nested Logic**: Structuring conditional statements within each other to handle complex, multi-part conditions.
`,
  "switch-with-fallthrough": `
### 💡 Problem Breakdown
A \`switch\` statement compares a value against multiple \`case\` clauses. Normally, a \`break\` statement is used to exit the \`switch\` after a match. If you omit \`break\`, execution will "fall through" to the next \`case\`. This can be used to have multiple cases share the same code block.

### ⚙️ Solution Walkthrough
The \`switch\` statement checks for "saturday" and "sunday". Since the "saturday" case has no \`break\`, execution falls through to the "sunday" case, and both trigger the "It's the weekend!" response.
\`\`\`
const checkWeekend = (day) => {
    switch (day.toLowerCase().trim()) {
        case "saturday":
        case "sunday": // Execution falls through to here
            return "It's the weekend!";
        default:
            return "It's a weekday.";
    }
};
\`\`\`
### 📚 Key Concepts
-   **\`switch\` Statement**: A control flow statement for selecting one of many code blocks.
-   **Fall-through**: The intentional or accidental behavior of a \`switch\` statement executing subsequent \`case\` blocks because a \`break\` statement was omitted.
`,
  "string-to-integer": `
### 💡 Problem Breakdown
The task is to convert a string representation of a number into a whole number (an integer), discarding any decimal part. This is different from \`Number()\`, which preserves decimals.

### ⚙️ Solution Walkthrough
The global \`parseInt()\` function is used for this purpose.
\`\`\`
const toInteger = (str) => parseInt(str, 10);
// Example: toInteger("123.45"); returns 123
\`\`\`
1.  **\`parseInt(string, radix)\`**: This function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
2.  **Radix \`10\`**: It is a crucial best practice to always provide the radix argument (usually 10 for decimal) to \`parseInt()\` to avoid unexpected behavior with strings that start with "0" or "0x".

### 📚 Key Concepts
-   **Parsing**: Converting a string into another data type.
-   **\`parseInt()\`**: The standard function for converting a string to an integer.
`,
  "for-loop-break": `
### 💡 Problem Breakdown
The \`break\` statement provides a way to exit a loop (like \`for\`, \`while\`, or \`switch\`) prematurely, before its normal completion condition is met. This is useful when you've found what you were looking for and don't need to continue iterating.

### ⚙️ Solution Walkthrough
The \`for\` loop iterates through an array. An \`if\` statement checks for a condition, and if it's met, \`break\` is called to terminate the loop immediately.
\`\`\`
const findFirstNumberGreaterThan3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            return \`Found \${arr[i]} at index \${i}.\`;
            // Using break would also work
            // break;
        }
    }
    return "No number greater than 3 found.";
};
\`\`\`
### 📚 Key Concepts
-   **\`break\` Statement**: A control flow statement that terminates the current loop or switch statement.
-   **Loop Control**: Statements like \`break\` and \`continue\` give you fine-grained control over the execution of loops.
`,
  "for-loop-continue": `
### 💡 Problem Breakdown
The \`continue\` statement is another loop control statement. Instead of exiting the loop entirely, it terminates the *current iteration* and proceeds to the next one. This is useful for skipping over elements that you don't want to process.

### ⚙️ Solution Walkthrough
The loop iterates through numbers. If a number is even, the \`continue\` statement is executed, skipping the \`sum += ...\` line and moving on to the next iteration.
\`\`\`
const sumOddNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // If the number is even...
            continue; // ...skip to the next iteration.
        }
        sum += arr[i];
    }
    return sum;
};
\`\`\`
### 📚 Key Concepts
-   **\`continue\` Statement**: A control flow statement that skips the rest of the current loop iteration and continues to the next one.
`,
  "array-concat": `
### 💡 Problem Breakdown
The task is to merge two or more arrays into a single new array. The \`.concat()\` method is a classic way to do this.

### ⚙️ Solution Walkthrough
The \`.concat()\` method is called on the first array, with the second array passed as an argument.
\`\`\`
const combineArrays = (arr1, arr2) => arr1.concat(arr2);
// Example: combineArrays(['a','b'], ['c','d']); returns ['a', 'b', 'c', 'd']
\`\`\`
1.  **\`Array.prototype.concat()\`**: This method is used to merge two or more arrays. It does *not* change the existing arrays, but instead returns a new array.
2.  **Modern Alternative**: The ES6 spread syntax (\`[...arr1, ...arr2]\`) is now a more common and often more readable way to achieve the same result.

### 📚 Key Concepts
-   **Array Merging**: Combining multiple arrays into one.
-   **Immutability**: \`.concat()\` is a non-mutating method that creates a new array.
`,
  "string-last-index-of": `
### 💡 Problem Breakdown
Similar to \`.indexOf()\`, which finds the first occurrence of a substring, the \`.lastIndexOf()\` method finds the *last* occurrence. This is useful when you need to search a string from end to start.

### ⚙️ Solution Walkthrough
The \`.lastIndexOf()\` method is called on the string.
\`\`\`
const findLastA = (str, subStr) => str.lastIndexOf(subStr);
// Example: findLastA("canal", "a"); returns 3
\`\`\`
1.  **\`String.prototype.lastIndexOf()\`**: This method returns the index of the last occurrence of the specified value, searching backwards from the end of the string. It returns -1 if the value is not found.

### 📚 Key Concepts
-   **String Searching**: Finding substrings within a string.
`,
  "number-to-fixed": `
### 💡 Problem Breakdown
The task is to format a number with a specific number of digits after the decimal point. This is very common when displaying currency or other precise numerical values.

### ⚙️ Solution Walkthrough
The \`.toFixed()\` method is called on the number.
\`\`\`
const formatDecimal = (num, decimals) => num.toFixed(decimals);
// Example: formatDecimal(3.14159, 2); returns "3.14"
\`\`\`
1.  **\`Number.prototype.toFixed()\`**: This method formats a number using fixed-point notation.
2.  **String Return Value**: It's important to remember that \`.toFixed()\` returns a **string**, not a number. The value may be padded with zeros if necessary to achieve the desired length.

### 📚 Key Concepts
-   **Number Formatting**: Converting numbers into specific string representations for display.
`,
  "for-in-loop-object": `
### 💡 Problem Breakdown
This is a demonstration of the primary way to loop over the properties of an object: the \`for...in\` loop. This loop iterates over the enumerable property *keys* of an object.

### ⚙️ Solution Walkthrough
A \`for...in\` loop is used to get each property key from the \`person\` object.
\`\`\`
const person = { name: "Alice", age: 28 };
let result = "";
for (const key in person) {
    // 'key' will be "name", then "age"
    result += \`\${key}: \${person[key]} | \`;
}
\`\`\`
1.  **\`for (const key in object)\`**: This syntax iterates through the property keys.
2.  **Bracket Notation**: Inside the loop, you must use bracket notation (\`person[key]\`) to access the value, because the key's name is stored in the \`key\` variable.

### 📚 Key Concepts
-   **\`for...in\` loop**: A control statement for iterating over the properties of an object.
`,
  "create-array": `
### 💡 Problem Breakdown
This is a fundamental task: creating an ordered collection of data. An array literal is the most common way to create an array.

### ⚙️ Solution Walkthrough
Square brackets \`[]\` are used to define an array containing three string elements.
\`\`\`
const colors = ["red", "green", "blue"];
\`\`\`
1.  **Array Literal**: The \`[...] \` syntax is used to create an array.
2.  **Elements**: The values inside the array, separated by commas, are called elements. They can be of any data type.

### 📚 Key Concepts
-   **Array**: An ordered, list-like object for storing a collection of items.
`,
  "array-reverse": `
### 💡 Problem Breakdown
The task is to reverse the order of elements within an array. For example, \`[1, 2, 3]\` should become \`[3, 2, 1]\`.

### ⚙️ Solution Walkthrough
The built-in \`.reverse()\` method is used.
\`\`\`
const array = [1, 2, 3, 4];
array.reverse(); // array is now [4, 3, 2, 1]
\`\`\`
1.  **\`Array.prototype.reverse()\`**: This method reverses an array *in place*. The first array element becomes the last, and the last array element becomes the first.
2.  **Mutation**: It's important to note that this method mutates (modifies) the original array.

### 📚 Key Concepts
-   **Array Mutation**: An operation that changes the original array.
`,
  "simple-type-coercion": `
### 💡 Problem Breakdown
Type coercion is the automatic or implicit conversion of values from one data type to another by the JavaScript engine. This problem demonstrates one of the most common examples: when you use the \`+\` operator with a number and a string.

### ⚙️ Solution Walkthrough
A number and a string are added together.
\`\`\`
const result = 5 + "5";
// result is the string "55"
\`\`\`
1.  **Coercion Rule**: When the \`+\` operator sees that one of its operands is a string, it converts the other operand (the number 5) into a string ("5").
2.  **Concatenation**: It then performs string concatenation, joining "5" and "5" to produce "55".

### 📚 Key Concepts
-   **Type Coercion**: A core behavior of JavaScript. While it can be convenient, it can also lead to unexpected bugs if not understood properly. This is a key reason why the strict equality operator (\`===\`) is often preferred over the loose one (\`==\`).
`,
};
