


export const explanations: Record<string, string> = {
    'simple-object-access': `
### 💡 Problem Breakdown
The task is to retrieve a specific piece of information from an object. Objects store data in key-value pairs, and this problem requires you to look up a value using its corresponding key.

### ⚙️ Solution Walkthrough
The solution first parses the JSON string into a JavaScript object and then uses bracket notation to access the desired property.

\`\`\`javascript
// const obj = parseJSON(json);
// if (key in obj) {
//     return obj[key];
// }
// FIX: Rephrased to avoid template literal parsing issues inside a template literal.
// throw new Error('Key "' + key + '" not found in object.');
\`\`\`

1.  **\`parseJSON(json)\`**: Converts the input string, which is in JSON format, into a native JavaScript object that we can work with.
2.  **\`if (key in obj)\`**: Before trying to access the property, this line checks if the key actually exists in the object. This is a good practice to avoid errors.
3.  **\`obj[key]\`**: This is bracket notation for property access. It's used when the property name is dynamic (i.e., stored in a variable like \`key\`). It retrieves the value associated with that key.
4.  **Error Handling**: If the key is not found, an error is thrown to inform the user.

### 📚 Key Concepts
-   **Object**: A collection of key-value pairs.
-   **JSON (JavaScript Object Notation)**: A standard text-based format for representing structured data based on JavaScript object syntax.
-   **Property Accessors**: There are two ways to access object properties:
    *   **Dot Notation**: \`obj.name\` (used when the key is a static, valid identifier).
    *   **Bracket Notation**: \`obj['name']\` or \`obj[myVariable]\` (used when the key is dynamic or not a valid identifier).
`,
    'get-object-keys': `
### 💡 Problem Breakdown
The goal is to extract all the keys (property names) from an object and return them as a list (an array). For an object like \`{ name: "Alice", age: 25 }\`, the keys are "name" and "age".

### ⚙️ Solution Walkthrough
JavaScript has a built-in static method on the \`Object\` constructor for this exact purpose.

\`\`\`javascript
// ({ json }) => Object.keys(parseJSON(json)).join(', ')
\`\`\`

1.  **\`parseJSON(json)\`**: The input JSON string is converted into a JavaScript object.
2.  **\`Object.keys(...)\`**: This is the core of the solution. \`Object.keys()\` takes an object as an argument and returns a new array containing the names of all the object's own enumerable properties.
3.  **\`.join(', ')\`**: The resulting array of keys is then joined into a single string for easy display.

### 📚 Key Concepts
-   **\`Object.keys()\`**: A static method that returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
-   **Enumerable Property**: A property that can be iterated over by a \`for...in\` loop. By default, properties you create on simple objects are enumerable.
`,
    'get-object-values': `
### 💡 Problem Breakdown
Similar to getting the keys, this task requires you to extract all the values from an object and return them as a list (an array). For an object like \`{ name: "Alice", age: 25 }\`, the values are "Alice" and 25.

### ⚙️ Solution Walkthrough
This solution uses the \`Object.values()\` method, which is the counterpart to \`Object.keys()\`.

\`\`\`javascript
// ({ json }) => Object.values(parseJSON(json)).join(', ')
\`\`\`

1.  **\`parseJSON(json)\`**: The input JSON string is converted into a JavaScript object.
2.  **\`Object.values(...)\`**: This method takes an object as an argument and returns a new array containing the values of all the object's own enumerable properties.
3.  **\`.join(', ')\`**: The resulting array of values is joined into a string for display.

### 📚 Key Concepts
-   **\`Object.values()\`**: A static method introduced in ES2017 that returns an array of a given object's own enumerable property values.
`,
    'merge-objects': `
### 💡 Problem Breakdown
The task is to combine two separate objects into a single new object. If both objects have a property with the same key, the value from the second object should overwrite the value from the first one.

### ⚙️ Solution Walkthrough
The most modern and concise way to achieve this is with the ES6 spread syntax (\`...\`).

\`\`\`javascript
// ({ json1, json2 }) => JSON.stringify({ ...parseJSON(json1), ...parseJSON(json2) })
\`\`\`

1.  **Parsing**: Both input JSON strings are parsed into JavaScript objects.
2.  **\`{ ... }\`**: A new object is created using curly braces.
3.  **Spread Syntax (\`...\`)**:
    *   **\`...parseJSON(json1)\`**: The spread syntax takes all the key-value pairs from the first object and "spreads" them into the new object.
    *   **\`...parseJSON(json2)\`**: Then, it takes all the key-value pairs from the second object and spreads them into the new object.
4.  **Overwrite Behavior**: Because the properties from the second object are spread *after* the first, any properties with the same key will overwrite the earlier ones.
5.  **\`JSON.stringify(...)\`**: The final merged object is converted back into a JSON string for display.

### 📚 Key Concepts
-   **Spread Syntax (\`...\`)**: A powerful ES6 feature that allows an iterable (like an array) or an object to be expanded. When used with objects, it's perfect for merging and cloning.
-   **Immutability**: This approach is immutable. It doesn't change the original objects (\`json1\`, \`json2\`); it creates a completely new merged object.
`,
};