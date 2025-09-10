
export const explanations: Record<string, string> = {
    'reverse-string': `
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
    'find-longest-word': `
### 💡 Problem Breakdown
The challenge is to analyze a sentence and identify the single longest word within it. If there are multiple words with the same maximum length, the first one encountered is usually sufficient.

### ⚙️ Solution Walkthrough
This solution uses \`split()\` to break the sentence into words and then \`reduce()\` to find the longest one.

\`\`\`javascript
({ sentence }) => {
    return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
\`\`\`

1.  **\`sentence.split(' ')\`**: First, we split the sentence into an array of words, using the space character as the delimiter.
2.  **\`.reduce(callback, initialValue)\`**: We use the powerful \`reduce\` method to iterate through the array of words and reduce it to a single value (the longest word).
3.  **\`initialValue\`**: The second argument to \`reduce\`, an empty string \`""\`, serves as the initial value for our \`longest\` word accumulator.
4.  **Callback Function**: \`(longest, current) => ...\` is the reducer function. On each iteration:
    *   \`longest\`: Holds the longest word found *so far*.
    *   \`current\`: The current word being processed.
    *   \`current.length > longest.length ? current : longest\`: This is a ternary operator. It checks if the \`current\` word is longer than the \`longest\` word found so far. If it is, \`current\` becomes the new \`longest\`. Otherwise, \`longest\` remains unchanged.
5.  **Final Result**: After checking all words, \`reduce\` returns the final value of the \`longest\` accumulator.

### 📚 Key Concepts
-   **\`Array.prototype.reduce()\`**: A core functional programming method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
-   **Ternary Operator**: A concise way to write an if-else statement.
`,
    'remove-duplicates-from-array': `
### 💡 Problem Breakdown
The goal is to take an array that may contain duplicate elements and produce a new array containing only the unique elements from the original. The order of the remaining elements should be preserved.

### ⚙️ Solution Walkthrough
The most elegant and modern way to solve this in JavaScript is by using the \`Set\` data structure, which inherently stores only unique values.

\`\`\`javascript
({ arr }) => [...new Set(parseStringArray(arr))].join(', ')
\`\`\`

1.  **\`parseStringArray(arr)\`**: The input string is first converted into a JavaScript array.
2.  **\`new Set(...)\`**: A new \`Set\` object is created from the array. The \`Set\` constructor automatically iterates through the array and stores only the unique values. All duplicates are discarded during this process.
3.  **\`[...]\` (Spread Syntax)**: The spread syntax is used to convert the \`Set\` object back into an array. This is a concise way to get an array of the unique values.
4.  **\`.join(', ')\`**: Finally, the array of unique values is joined back into a string for display.

### 📚 Key Concepts
-   **\`Set\`**: An ES6 data structure that lets you store unique values of any type. It's highly optimized for checking if an item is present and for ensuring uniqueness.
-   **Spread Syntax (\`...\`)**: A powerful ES6 feature that allows an iterable (like a \`Set\` or an array) to be expanded in places where zero or more arguments or elements are expected.
`,
    'array-chunking': `
### 💡 Problem Breakdown
This problem asks you to take a single large array and a "chunk size" number. You need to split the original array into a series of smaller arrays (chunks), where each smaller array has a maximum length equal to the given chunk size.

### ⚙️ Solution Walkthrough
The solution iterates through the array and uses the \`slice()\` method to create the chunks.

\`\`\`javascript
const array = parseStringArray(arr);
const s = parseNumber(size);
const chunked = [];
for (let i = 0; i < array.length; i += s) {
    chunked.push(array.slice(i, i + s));
}
return JSON.stringify(chunked);
\`\`\`

1.  **Initialization**: An empty array, \`chunked\`, is created to store the resulting chunks.
2.  **\`for\` loop**: A \`for\` loop is set up to iterate through the array. The key part is the increment step: \`i += s\`. Instead of incrementing by 1, the loop index \`i\` jumps by the chunk size (\`s\`) in each iteration. This marks the start of each new chunk.
3.  **\`array.slice(start, end)\`**: Inside the loop, the \`.slice()\` method is used to extract a portion of the array.
    *   It starts at the current index \`i\`.
    *   It ends at index \`i + s\`. The \`.slice()\` method conveniently handles cases where \`i + s\` is greater than the array length; it will just take all elements to the end.
4.  **\`chunked.push(...)\`**: The new chunk created by \`.slice()\` is pushed into the \`chunked\` array.
5.  **Final Result**: After the loop finishes, \`chunked\` contains an array of arrays, which is then converted to a JSON string for display.

### 📚 Key Concepts
-   **\`Array.prototype.slice()\`**: A method that returns a shallow copy of a portion of an array into a new array object selected from \`start\` to \`end\` (\`end\` not included). The original array will not be modified.
-   **Looping**: Using a \`for\` loop with a custom increment step is a common pattern for processing data in fixed-size blocks.
`,
};
