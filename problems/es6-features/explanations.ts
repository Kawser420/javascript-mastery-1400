


export const explanations: Record<string, string> = {
    'arrow-function-map': `
### 💡 Problem Breakdown
The task is to take an array of numbers and create a new array where every number has been doubled. The key is to solve this using modern JavaScript (ES6+) features, specifically arrow functions and the built-in \`.map()\` array method.

### ⚙️ Solution Walkthrough
The solution is a concise one-liner that chains these two features together.

\`\`\`javascript
// ({ arr }) => JSON.stringify(parseNumberArray(arr).map(n => n * 2))
\`\`\`

1.  **\`parseNumberArray(arr)\`**: First, the comma-separated string from the input is converted into a proper array of numbers.
2.  **\`.map(...)\`**: The \`.map()\` method is called on this array. \`.map()\` creates a new array by calling a provided function on every element in the original array.
3.  **\`n => n * 2\`**: This is the arrow function passed to \`.map()\`. It's a shorthand way of writing a function.
    *   \`n\`: The parameter, representing a single number from the array during an iteration.
    *   \`=>\`: The arrow, separating the parameter from the function body.
    *   \`n * 2\`: The function body. Since it's a single expression, the result is implicitly returned.
4.  **How it Works**: \`.map()\` goes through each number in the array, passes it to the arrow function \`n => n * 2\`, and collects the returned doubled value into a new array.

### 📚 Key Concepts
-   **Arrow Functions**: A compact alternative to a traditional function expression, with some differences in how they handle the \`this\` keyword. They are ideal for short, inline functions.
-   **\`Array.prototype.map()\`**: A core higher-order function in JavaScript. It creates a new array populated with the results of calling a provided function on every element in the calling array.
`,
    'template-literals': `
### 💡 Problem Breakdown
The goal is to construct a string from variables and static text. The traditional way involves concatenating strings with the \`+\` operator, which can be clumsy, especially with multiple variables or line breaks. This problem requires using the modern ES6 feature, template literals.

### ⚙️ Solution Walkthrough
The solution uses backticks and embedded expressions to build the string.

\`\`\`javascript
// FIX: Escaped template literals
// ({ name, item }) => \`Hello, \\\${name}!
// You have brought some \\\${item}.\`
\`\`\`

1.  **Backticks (\` \`)**: Instead of single (\`'\`) or double (\`"\`) quotes, the entire string is enclosed in backticks. This signals that it's a template literal.
2.  **Embedded Expressions (\`\${...}\`)**: Inside the backticks, you can embed any valid JavaScript expression by wrapping it in \`\${...}\`. The expression is evaluated, and its result is converted to a string and inserted at that position. Here, \`\\\${name}\` and \`\\\${item}\` are replaced with the values of the \`name\` and \`item\` variables.
3.  **Multi-line Support**: Template literals respect whitespace and newlines. The line break in the code is preserved in the final string, which is difficult to do cleanly with regular strings.

### 📚 Key Concepts
-   **Template Literals (or Template Strings)**: A feature allowing for easier string interpolation and multi-line strings. They provide a much more readable and powerful way to build strings compared to traditional concatenation.
-   **String Interpolation**: The process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.
`,
    'array-destructuring': `
### 💡 Problem Breakdown
This problem is about extracting values from an array and assigning them to distinct variables in a clean, readable way. Instead of accessing elements by their index one by one (e.g., \`let first = arr[0]; let second = arr[1];\`), we need to use ES6 destructuring assignment.

### ⚙️ Solution Walkthrough
The solution uses a single destructuring assignment statement to create three new variables.

\`\`\`javascript
// const [first, second, third] = parseStringArray(arr);
// FIX: Escaped template literals
// return \`First: \\\${first}, Second: \\\${second}, Third: \\\${third}\`;
\`\`\`

1.  **\`const [first, second, third]\`**: This is the destructuring syntax. The square brackets on the left side of the assignment signal that we are destructuring an array.
2.  **Assignment**: The expression on the right (\`parseStringArray(arr)\`) evaluates to an array.
3.  **Pattern Matching**: JavaScript "matches" the pattern. The first element of the array is assigned to the first variable in the brackets (\`first\`), the second element to the second variable (\`second\`), and so on.

### 📚 Key Concepts
-   **Destructuring Assignment**: An ES6 feature that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It provides a shorter, more expressive syntax.
`,
    'object-destructuring': `
### 💡 Problem Breakdown
Similar to array destructuring, the goal here is to extract values from an object's properties and assign them to variables. We want to avoid repetitive assignments like \`const name = user.name; const age = user.age;\`.

### ⚙️ Solution Walkthrough
The solution uses destructuring with curly braces, whose pattern matches the object's property names.

\`\`\`javascript
// const { name, age } = parseJSON(json);
// FIX: Escaped template literals
// return \`Name: \\\${name}, Age: \\\${age}\`;
\`\`\`

1.  **\`const { name, age }\`**: This is the object destructuring syntax. The curly braces on the left side of the assignment indicate that we are destructuring an object.
2.  **Property Name Matching**: The variable names inside the curly braces **must match** the property keys of the object you are destructuring. JavaScript finds the property named "name" in the object and assigns its value to a new variable also called \`name\`. It does the same for "age".
3.  **Order Doesn't Matter**: Unlike array destructuring, the order of variables inside the curly braces does not matter.

### 📚 Key Concepts
-   **Destructuring Assignment**: For objects, this syntax allows for the extraction of property values into variables. It is extremely common in modern JavaScript, especially when working with frameworks like React or handling API responses.
-   **Aliasing**: You can also rename variables during destructuring, like \`const { name: userName, age: userAge } = user;\`.
`,
    'rest-parameters': `
### 💡 Problem Breakdown
The challenge is to create a function that can accept any number of arguments and perform an operation on them (in this case, summing them). Instead of using the older, clunky \`arguments\` object, we need to use the modern ES6 rest parameter syntax.

### ⚙️ Solution Walkthrough
The solution defines a function where the last parameter is prefixed with \`...\`, gathering all remaining arguments into a true array.

\`\`\`javascript
// const sum = (...numbers) => numbers.reduce((acc, val) => acc + val, 0);
// return sum(...parseNumberArray(args));
\`\`\`

1.  **\`sum = (...numbers)\`**: The \`...numbers\` in the function definition is the rest parameter. It tells JavaScript to take all the arguments passed to the \`sum\` function and collect them into a single array called \`numbers\`.
2.  **A True Array**: The key advantage is that \`numbers\` is a real array, so we can immediately use powerful array methods on it, like \`.reduce()\`.
3.  **\`.reduce()\`**: The reduce method is used to calculate the sum of all elements in the \`numbers\` array.
4.  **Calling the Function**: Note the use of spread syntax (\`...parseNumberArray(args)\`) when calling the function. This takes the array of numbers and "spreads" them out into individual arguments for the \`sum\` function.

### 📚 Key Concepts
-   **Rest Parameters**: Allows a function to accept an indefinite number of arguments as an array. It must be the last parameter in a function definition.
`,
    'spread-operator-arrays': `
### 💡 Problem Breakdown
The task is to combine two separate arrays into one new array. We will use the ES6 spread syntax (\`...\`) for a clean, immutable approach.

### ⚙️ Solution Walkthrough
The solution creates a new array literal and "spreads" the elements of the input arrays into it.

\`\`\`javascript
// const combined = [...parseStringArray(arr1), ...parseStringArray(arr2)];
// return \`[\\\${combined.join(', ')}]\`;
\`\`\`

1.  **\`[ ... ]\`**: We start by defining a new array with square brackets.
2.  **\`...parseStringArray(arr1)\`**: The spread syntax takes the first array and expands its elements. So, if \`arr1\` is \`['a', 'b', 'c']\`, this part becomes \`'a', 'b', 'c'\`.
3.  **\`...parseStringArray(arr2)\`**: The same happens for the second array.
4.  **Combination**: The new array literal effectively becomes \`['a', 'b', 'c', 'd', 'e', 'f']\`. This new array is assigned to the \`combined\` variable.

### 📚 Key Concepts
-   **Spread Syntax (\`...\`)**: Allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It's extremely useful for creating new arrays without modifying the original ones (immutability).
`,
};