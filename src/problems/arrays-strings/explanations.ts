export const explanations: Record<string, string> = {
  "reverse-string": `
### 💡 Problem Breakdown
The task is to take a string of text and reverse the order of its characters. For example, "hello" should become "olleh". This is a classic string manipulation problem that introduces you to working with strings as if they were arrays.

### ⚙️ Solution Walkthrough
The solution uses a chain of three common string and array methods.
\`\`\`javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
\`\`\`
1.  **\`str.split('')\`**: The \`.split('')\` method is called on the input string. With an empty string (\`''\`) as an argument, it splits the string into an array of its individual characters.
    -   \`"hello"\` becomes \`['h', 'e', 'l', 'l', 'o']\`
2.  **\`.reverse()\`**: This method is called on the newly created array. It reverses the order of the elements in the array in place.
    -   The array becomes \`['o', 'l', 'l', 'e', 'h']\`
3.  **\`.join('')\`**: This method is called on the reversed array. It joins all the elements back into a single string. The empty string argument (\`''\`) means that no separator is placed between the characters.
    -   The final result is \`"olleh"\`

### 📚 Key Concepts
- **String Manipulation**: The process of changing, editing, or analyzing strings.
- **Method Chaining**: Calling one method after another on the result of the previous one in a single statement.
`,
  "find-longest-word": `
### 💡 Problem Breakdown
The challenge is to analyze a sentence and identify the single longest word within it. If there are multiple words with the same maximum length, the first one encountered is usually sufficient.

### ⚙️ Solution Walkthrough
This solution uses \`split()\` to break the sentence into words and then \`reduce()\` to find the longest one.
\`\`\`javascript
function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, current) => 
        current.length > longest.length ? current : longest
    , "");
}
\`\`\`
1.  **\`sentence.split(' ')\`**: First, we split the sentence into an array of words, using the space character as the delimiter.
2.  **\`.reduce(callback, initialValue)\`**: We use the powerful \`reduce\` method to iterate through the array of words and reduce it to a single value (the longest word).
3.  **\`initialValue\`**: The second argument to \`reduce\`, an empty string \`""\`, serves as the initial value for our \`longest\` word accumulator.
4.  **Callback Function**: \`(longest, current) => ...\` is the reducer function. On each iteration:
    *   \`longest\`: Holds the longest word found *so far*.
    *   \`current\`: The current word being processed.
    *   \`current.length > longest.length ? current : longest\`: This is a ternary operator. It checks if the \`current\` word is longer than the \`longest\` word found so far. If it is, \`current\` becomes the new \`longest\`. Otherwise, \`longest\` remains unchanged.

### 📚 Key Concepts
- **\`Array.prototype.reduce()\`**: A core functional programming method that applies a function against an accumulator and each element in the array to reduce it to a single value.
- **Ternary Operator**: A concise way to write an if-else statement.
`,
  "remove-duplicates-from-array": `
### 💡 Problem Breakdown
The goal is to take an array that may contain duplicate elements and produce a new array containing only the unique elements from the original. The order of the remaining elements should be preserved.

### ⚙️ Solution Walkthrough
The most elegant and modern way to solve this in JavaScript is by using the \`Set\` data structure, which inherently stores only unique values.
\`\`\`javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
\`\`\`
1.  **\`new Set(arr)\`**: A new \`Set\` object is created from the input array. The \`Set\` constructor automatically iterates through the array and stores only the unique values. All duplicates are discarded during this process.
2.  **\`[...]\` (Spread Syntax)**: The spread syntax is used to convert the \`Set\` object back into an array. This is a concise way to get an array of the unique values.

### 📚 Key Concepts
- **\`Set\`**: An ES6 data structure that lets you store unique values of any type.
- **Spread Syntax (\`...\`)**: A powerful ES6 feature that allows an iterable (like a \`Set\` or an array) to be expanded into individual elements.
`,
  "array-chunking": `
### 💡 Problem Breakdown
This problem asks you to take a single large array and a "chunk size" number. You need to split the original array into a series of smaller arrays (chunks), where each smaller array has a maximum length equal to the given chunk size.

### ⚙️ Solution Walkthrough
The solution iterates through the array and uses the \`slice()\` method to create the chunks.
\`\`\`javascript
function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}
\`\`\`
1.  **Initialization**: An empty array, \`chunked\`, is created to store the resulting chunks.
2.  **\`for\` loop**: A \`for\` loop is set up to iterate through the array. The key part is the increment step: \`i += size\`. Instead of incrementing by 1, the loop index \`i\` jumps by the chunk size in each iteration. This marks the start of each new chunk.
3.  **\`array.slice(start, end)\`**: Inside the loop, the \`.slice()\` method is used to extract a portion of the array. It conveniently handles cases where \`i + size\` is greater than the array length; it will just take all elements to the end.

### 📚 Key Concepts
- **\`Array.prototype.slice()\`**: A method that returns a shallow copy of a portion of an array into a new array object. The original array will not be modified.
`,
  "is-palindrome": `
### 💡 Problem Breakdown
A palindrome is a word, phrase, or sequence that reads the same backward as forward. The task is to write a function that can verify if a given string is a palindrome, but with the added complexity of ignoring non-alphanumeric characters and case.

### ⚙️ Solution Walkthrough
The strategy is to first clean the string by removing unwanted characters and converting it to a standard case. Then, we can compare the cleaned string with its reversed version.
\`\`\`javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
\`\`\`
1.  **Cleaning**: \`.toLowerCase()\` converts the string to lowercase. \`.replace(/[\W_]/g, '')\` uses a regular expression to find all non-alphanumeric characters (\`\W\`) and underscores (\`_\`) and replace them with an empty string.
2.  **Reversing**: The same \`.split().reverse().join()\` technique from the "Reverse a String" problem is used.
3.  **Comparison**: A simple strict equality check (\`===\`) determines if the string is a palindrome.

### 📚 Key Concepts
- **Regular Expressions (RegEx)**: Patterns used to match character combinations in strings.
- **String Cleaning/Normalization**: The process of transforming a string into a canonical form for easier processing.
`,
  "title-case-sentence": `
### 💡 Problem Breakdown
The task is to convert a sentence into "title case," where the first letter of each word is capitalized and the rest of the letters are lowercase.

### ⚙️ Solution Walkthrough
The solution involves splitting the sentence into words, transforming each word, and then joining them back together.
\`\`\`javascript
function titleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
\`\`\`
1.  **\`toLowerCase()\`**: First, the entire sentence is converted to lowercase to ensure consistent casing for the rest of the letters in each word.
2.  **\`split(' ')\`**: The sentence is split into an array of words.
3.  **\`map(...)\`**: The \`.map()\` method is used to create a new array by transforming each word.
4.  **\`word.charAt(0).toUpperCase() + word.slice(1)\`**: For each word, we take the first character (\`.charAt(0)\`), convert it to uppercase, and concatenate it with the rest of the word (\`.slice(1)\`).
5.  **\`join(' ')\`**: The array of title-cased words is joined back into a single string, separated by spaces.

### 📚 Key Concepts
- **Method Chaining**: This solution is a great example of chaining multiple array and string methods together to perform a complex transformation in a concise way.
- **\`Array.prototype.map()\`**: A fundamental method for creating a new array by applying a function to each element of an existing array.
`,
  "array-intersection": `
### 💡 Problem Breakdown
The goal is to find the "intersection" of two arrays—that is, the set of elements that are present in both arrays. The result should be a new array containing only these common elements.

### ⚙️ Solution Walkthrough
An efficient way to solve this is to use a \`Set\` for fast lookups.
\`\`\`javascript
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}
\`\`\`
1.  **Create a \`Set\`**: A \`Set\` is created from the first array (\`arr1\`). A \`Set\` provides very fast (\`O(1)\` on average) lookups for its elements. This is much more efficient than repeatedly using \`arr1.includes()\` inside a loop.
2.  **Filter the Second Array**: The second array (\`arr2\`) is then filtered. For each item in \`arr2\`, we check if it \`has()\` a corresponding entry in \`set1\`. If it does, it's kept in the final intersection array.

### 📚 Key Concepts
- **\`Set\`**: An ES6 data structure that is highly optimized for storing unique values and checking for their existence.
- **Time Complexity**: This solution is generally O(m + n), where m and n are the lengths of the arrays, which is much better than a nested loop approach (O(m * n)).
`,
  "falsy-bouncer": `
### 💡 Problem Breakdown
The task is to remove all "falsy" values from an array. In JavaScript, a falsy value is a value that is considered \`false\` in a boolean context. The six falsy values are \`false\`, \`null\`, \`0\`, \`""\` (empty string), \`undefined\`, and \`NaN\`.

### ⚙️ Solution Walkthrough
The \`filter\` method can be used with the \`Boolean\` constructor as a concise callback function.
\`\`\`javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
\`\`\`
1.  **\`arr.filter(Boolean)\`**: The \`.filter()\` method creates a new array with all elements that pass the test implemented by the provided function.
2.  **The \`Boolean\` Function**: When the \`Boolean\` constructor is passed as a function (without \`new\`), it coerces its argument to a boolean. Falsy values are coerced to \`false\` and are thus "filtered out," while truthy values are coerced to \`true\` and are kept.

### 📚 Key Concepts
- **Truthy and Falsy**: A core concept in JavaScript that determines how values behave in logical operations.
- **Type Coercion**: The \`Boolean\` function demonstrates how JavaScript can implicitly convert values between types.
`,
  "array-rotation": `
### 💡 Problem Breakdown
The goal is to perform a "left rotation" on an array. This means that the first \`n\` elements of the array are moved to the end. For example, rotating \`[1,2,3,4,5]\` left by 2 positions results in \`[3,4,5,1,2]\`.

### ⚙️ Solution Walkthrough
The solution can be elegantly achieved using the \`.slice()\` and \`.concat()\` methods.
\`\`\`javascript
function rotateLeft(arr, positions) {
  const p = positions % arr.length; // Handle rotations larger than array length
  const removed = arr.slice(0, p);
  const remaining = arr.slice(p);
  return remaining.concat(removed);
}
\`\`\`
1.  **\`arr.slice(0, p)\`**: This creates a new array containing the first \`p\` elements that need to be moved.
2.  **\`arr.slice(p)\`**: This creates a new array containing the rest of the elements.
3.  **\`remaining.concat(removed)\`**: The two arrays are concatenated in the new order.

### 📚 Key Concepts
- **\`Array.prototype.slice()\`**: A non-mutating method for extracting a portion of an array.
- **Modulo Operator (\`%\`)**: Used to handle cases where the number of rotations is greater than the length of the array.
`,
  "anagram-check": `
### 💡 Problem Breakdown
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. The task is to check if two strings are anagrams of each other. The core idea is that if they are anagrams, they must contain the exact same characters with the exact same frequencies.

### ⚙️ Solution Walkthrough
The simplest way to check this is to "normalize" both strings and then compare them. Normalizing here means converting to a standard case, removing non-letters, and sorting the characters alphabetically. If the normalized strings are identical, they are anagrams.
\`\`\`javascript
function areAnagrams(str1, str2) {
  const clean = (s) => s.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
  return clean(str1) === clean(str2);
}
\`\`\`
1.  **\`clean(s)\` helper**: This function performs the normalization.
2.  **Comparison**: The cleaned versions of both strings are compared for strict equality.

### 📚 Key Concepts
- **Normalization**: Transforming data into a canonical form for comparison.
`,
  "find-missing-number": `
### 💡 Problem Breakdown
You are given an array of \`n\` distinct numbers that are known to be from the range \`0\` to \`n\`. Since the array contains only \`n\` numbers instead of the full \`n+1\`, exactly one number is missing. The task is to find it efficiently.

### ⚙️ Solution Walkthrough
The most efficient solution uses Gauss's formula for the sum of an arithmetic series. We can calculate what the sum *should* be if no number were missing and subtract the actual sum of the numbers in the array.
\`\`\`javascript
function findMissing(nums) {
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
\`\`\`
1.  **Expected Sum**: The sum of numbers from 0 to \`n\` is calculated using the formula.
2.  **Actual Sum**: The actual sum of the elements in the input array is calculated.
3.  **Difference**: The difference between the expected and actual sum is the missing number.

### 📚 Key Concepts
- **Mathematical Formulas**: Applying mathematical knowledge to solve programming problems efficiently.
- **Time Complexity**: This solution has a time complexity of O(n) due to the single pass of \`reduce\`, which is very efficient.
`,
  "sum-all-in-range": `
### 💡 Problem Breakdown
The task is to sum all integers between two given numbers, inclusive. The two numbers are provided in an array and may not be in order.

### ⚙️ Solution Walkthrough
First, identify the minimum and maximum numbers in the input array. Then, loop from the minimum to the maximum, accumulating the sum.
\`\`\`javascript
function sumAll(arr) {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
\`\`\`
1.  **\`Math.min\` and \`Math.max\`**: These are used to determine the start and end of the loop, regardless of the input order.
2.  **\`for\` loop**: A standard loop iterates through every number in the range.
3.  **Accumulator**: The \`sum\` variable accumulates the total.

### 📚 Key Concepts
- **Accumulator Pattern**: A common pattern where a variable is initialized and then updated inside a loop to compute a final value.
`,
  "diff-two-arrays": `
### 💡 Problem Breakdown
This is a "symmetric difference" problem. The goal is to find all the elements that are present in either of the two arrays, but not in both.

### ⚙️ Solution Walkthrough
A straightforward approach is to filter the first array for elements not present in the second, then do the same for the second array, and finally combine the results.
\`\`\`javascript
function diffArray(arr1, arr2) {
  const diff1 = arr1.filter(item => !arr2.includes(item));
  const diff2 = arr2.filter(item => !a1.includes(item));
  return [...diff1, ...diff2];
}
\`\`\`
1.  **\`filter\` and \`includes\`**: The code finds elements in \`arr1\` that are not in \`arr2\`, and vice versa.
2.  **Concatenation**: The two resulting arrays of differences are combined into one.

### 📚 Key Concepts
- **Set Theory**: This problem is an implementation of the symmetric difference operation from set theory.
`,
  "seek-and-destroy": `
### 💡 Problem Breakdown
This is a filtering problem. You are given an initial array and a variable number of subsequent arguments. The goal is to remove all elements from the initial array that are equal to any of the subsequent arguments.

### ⚙️ Solution Walkthrough
The rest parameter syntax is great for collecting the target values. Then, we can filter the initial array.
\`\`\`javascript
function destroyer(arr, ...targets) {
  const targetSet = new Set(targets);
  return arr.filter(item => !targetSet.has(item));
}
\`\`\`
1.  **Rest Parameters (\`...targets\`)**: This collects all arguments after the first one into an array called \`targets\`.
2.  **\`Set\` for Efficiency**: The \`targets\` are put into a \`Set\` for fast lookups.
3.  **\`filter\`**: The initial array is filtered, keeping only the elements that are not present in the \`targetSet\`.

### 📚 Key Concepts
- **Rest Parameters**: A clean way to handle a variable number of function arguments.
`,
  "wherefore-art-thou": `
### 💡 Problem Breakdown
The task is to filter an array of objects. The filter criterion is another object (the "source"). You need to return all objects from the collection that contain all the key-value pairs from the source object.

### ⚙️ Solution Walkthrough
The solution involves iterating through the collection and, for each object, checking if it matches all the keys from the source.
\`\`\`javascript
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => 
    sourceKeys.every(key => 
      Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === source[key]
    )
  );
}
\`\`\`
1.  **\`Object.keys(source)\`**: Get an array of all the keys we need to check for.
2.  **\`.filter()\`**: Iterate through the \`collection\`.
3.  **\`.every()\`**: For each object (\`obj\`) in the collection, use \`.every()\` to check if *every* key from \`sourceKeys\` satisfies our condition.
4.  **Condition**: The condition checks two things: that the object actually has the key as its own property, and that the value matches.

### 📚 Key Concepts
- **\`Array.prototype.every()\`**: A method that tests whether all elements in the array pass the test implemented by the provided function.
`,
  "spinal-tap-case": `
### 💡 Problem Breakdown
"Spinal case" means all words are lowercase and joined by dashes. The challenge is to convert a string that might have spaces, underscores, or camelCase into this format.

### ⚙️ Solution Walkthrough
This is a great use case for regular expressions to handle the different ways words can be separated.
\`\`\`javascript
function spinalCase(str) {
  // Handle camelCase by inserting a space before uppercase letters.
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace spaces and underscores with dashes.
  return str.replace(/[\s_]+/g, "-").toLowerCase();
}
\`\`\`
1.  **Handle camelCase**: The first \`replace\` looks for a lowercase letter followed by an uppercase letter and inserts a space between them.
2.  **Replace Separators**: The second \`replace\` finds one or more spaces or underscores and replaces them with a single dash.
3.  **Lowercase**: Finally, the whole string is converted to lowercase.

### 📚 Key Concepts
- **Regular Expressions**: Powerful for finding and replacing complex patterns in strings.
`,
  "pig-latin": `
### 💡 Problem Breakdown
Pig Latin is a simple language game. The rules are:
1. If a word starts with a vowel (a, e, i, o, u), add "way" to the end.
2. If a word starts with a consonant, move all the consonants before the first vowel to the end of the word and add "ay".

### ⚙️ Solution Walkthrough
The solution first checks for the vowel case. If not, it finds the initial consonant cluster and moves it.
\`\`\`javascript
function translatePigLatin(str) {
  const vowels = 'aeiou';
  if (vowels.includes(str[0])) {
    return str + 'way';
  }
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + 'ay';
}
\`\`\`
1.  **Vowel Check**: The first \`if\` statement handles Rule 1.
2.  **Consonant Cluster**: \`str.match(/^[^aeiou]+/) \` uses a regular expression to find the sequence of one or more non-vowels at the start of the string.
3.  **Rearrangement**: The string is rebuilt by taking the part after the consonants, adding the consonants, and then adding "ay".

### 📚 Key Concepts
- **Regular Expressions**: Used to easily find the initial group of consonants.
`,
  "search-and-replace": `
### 💡 Problem Breakdown
The task is to replace a word in a sentence, with an added twist: the case of the replacement word's first letter should match the case of the original word's first letter.

### ⚙️ Solution Walkthrough
The solution first checks the case of the original word. Then, it cases the replacement word accordingly before performing the replacement.
\`\`\`javascript
function myReplace(str, before, after) {
  let afterCased = after;
  if (before[0] === before[0].toUpperCase()) {
    afterCased = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    afterCased = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, afterCased);
}
\`\`\`
1.  **Case Check**: An \`if\` statement checks if the first character of the \`before\` word is uppercase.
2.  **Casing \`after\`**: The \`after\` word is adjusted to match the case.
3.  **Replace**: The built-in \`.replace()\` method is used with the correctly cased word.

### 📚 Key Concepts
- **String Casing**: Manipulating the case of characters within a string.
`,
  "dna-pairing": `
### 💡 Problem Breakdown
In DNA, base pairs are specific: Adenine (A) with Thymine (T), and Guanine (G) with Cytosine (C). The task is to take a string of DNA characters and return a 2D array where each inner array is a character and its corresponding pair.

### ⚙️ Solution Walkthrough
A map (or a simple object) can be used to store the pairs. The solution then maps over the input string to create the paired array.
\`\`\`javascript
function pairElement(str) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return str.split('').map(char => [char, pairs[char]]);
}
\`\`\`
1.  **Pair Map**: An object \`pairs\` provides an easy way to look up the correct pair for any given character.
2.  **\`.map()\`**: The input string is split into an array of characters. The \`.map()\` method then transforms each character into a new array containing the character and its pair from the map.

### 📚 Key Concepts
- **Data Mapping**: Using a lookup table (like an object or \`Map\`) to transform data.
`,
  "missing-letters": `
### 💡 Problem Breakdown
You are given a string of consecutive letters of the alphabet, with exactly one letter missing. The task is to find that missing letter.

### ⚙️ Solution Walkthrough
The solution iterates through the string, comparing the character code of the current letter with the next one. If the difference is greater than 1, a letter is missing.
\`\`\`javascript
function findMissingLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}
\`\`\`
1.  **Character Codes**: \`.charCodeAt()\` gets the numeric UTF-16 code unit value of a character.
2.  **Comparison**: The loop checks for a "gap" in the character codes.
3.  **\`.fromCharCode()\`**: When a gap is found, the character code of the missing letter is calculated and converted back to a string.

### 📚 Key Concepts
- **Character Codes**: The underlying numeric representation of characters.
`,
  "sorted-union": `
### 💡 Problem Breakdown
The task is to take multiple arrays and create a new array containing all the unique values from all input arrays, in the order they first appeared.

### ⚙️ Solution Walkthrough
The solution combines all input arrays into one, then uses a \`Set\` to easily get the unique values while preserving insertion order.
\`\`\`javascript
function uniteUnique(...arrays) {
  const combined = [].concat(...arrays);
  return [...new Set(combined)];
}
\`\`\`
1.  **Rest Parameters (\`...arrays\`)**: This collects all the array arguments into a single array of arrays.
2.  **\`[].concat(...arrays)\`**: This is a trick to flatten the array of arrays into a single array.
3.  **\`new Set()\`**: A \`Set\` is created from the combined array, which automatically removes all duplicates.
4.  **\`[...new Set(...)]\`**: The spread syntax converts the \`Set\` back into an array. Since \`Set\` preserves insertion order, the result is in the correct order.

### 📚 Key Concepts
- **\`Set\`**: A perfect tool for getting unique values from a collection.
`,
  "convert-html-entities": `
### 💡 Problem Breakdown
When displaying text in HTML that might contain characters used in HTML syntax (like \`<\` or \`>\`), it's important to convert them to their "HTML entity" equivalents to prevent the browser from interpreting them as tags.

### ⚙️ Solution Walkthrough
A map object is used to store the entities. A regular expression with \`.replace()\` is then used to perform the substitutions.
\`\`\`javascript
function convertHTML(str) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
  return str.replace(/[&<>"']/g, match => entities[match]);
}
\`\`\`
1.  **Entity Map**: An object stores the character-to-entity mappings.
2.  **RegEx**: The regex \`/[&<>"']/g\` finds all occurrences of any of the characters that need to be replaced.
3.  **Replacer Function**: The second argument to \`.replace()\` is a function. For each match found by the regex, this function is called, and it looks up the correct entity from the map to use as the replacement.

### 📚 Key Concepts
- **HTML Entities**: A way to represent reserved characters in HTML.
- **\`.replace()\` with a Function**: A powerful pattern for performing complex, multi-character replacements.
`,
  "sum-all-odd-fibonacci": `
### 💡 Problem Breakdown
The Fibonacci sequence is generated by adding the two previous numbers. The task is to find all the odd Fibonacci numbers that are less than or equal to a given number, and then sum them up.

### ⚙️ Solution Walkthrough
The solution generates Fibonacci numbers iteratively until they exceed the given number. In each step, it checks if the current number is odd and, if so, adds it to an accumulator.
\`\`\`javascript
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr]; // Generate the next Fibonacci number
  }
  return sum;
}
\`\`\`
1.  **Iterative Generation**: A \`while\` loop is used to generate the Fibonacci sequence.
2.  **Destructuring Assignment**: \`[prev, curr] = [curr, prev + curr]\` is a concise way to update the two variables for the next iteration.
3.  **Odd Check**: The modulo operator is used to check if the current number is odd.

### 📚 Key Concepts
- **Fibonacci Sequence**: A classic mathematical sequence.
- **Iterative Algorithm**: Solving a problem step-by-step in a loop, which is often more efficient than recursion for Fibonacci.
`,
  "sum-all-primes": `
### 💡 Problem Breakdown
A prime number is a number greater than 1 that is only divisible by 1 and itself. The task is to find all prime numbers up to a given number \`num\` and then sum them.

### ⚙️ Solution Walkthrough
A common and efficient way to find all primes up to a certain number is the "Sieve of Eratosthenes" algorithm.
\`\`\`javascript
function sumPrimes(num) {
  // Sieve of Eratosthenes to find all primes up to num
  const isPrime = Array(num + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  // Sum the primes
  return isPrime.reduce((sum, prime, index) => prime ? sum + index : sum, 0);
}
\`\`\`
1.  **Sieve**: We create a boolean array, initially assuming all numbers are prime.
2.  **Marking Multiples**: We iterate from 2. If a number \`i\` is still marked as prime, we then iterate through its multiples (\`j\`) and mark them as *not* prime.
3.  **Summation**: Finally, we reduce the boolean array. If \`isPrime[index]\` is true, we add the \`index\` to our sum.

### 📚 Key Concepts
- **Sieve of Eratosthenes**: An ancient and efficient algorithm for finding prime numbers.
`,
  "smallest-common-multiple": `
### 💡 Problem Breakdown
This is a challenging problem. The Smallest Common Multiple (SCM) of a range of numbers is the smallest number that is evenly divisible by all numbers in that range. For example, the SCM of the range [1, 5] is 60.

### ⚙️ Solution Walkthrough
The solution involves finding the SCM of two numbers at a time, iteratively. To find the SCM of two numbers, we can use the formula: \`SCM(a, b) = (|a * b|) / GCD(a, b)\`, where GCD is the Greatest Common Divisor.
\`\`\`javascript
// Helper for GCD
function gcd(a, b) { /* ... */ }
// Helper for SCM
function scm(a, b) { return (a * b) / gcd(a, b); }

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  let currentScm = min;
  for (let i = min + 1; i <= max; i++) {
    currentScm = scm(currentScm, i);
  }
  return currentScm;
}
\`\`\`
1.  **GCD Helper**: A function to find the Greatest Common Divisor is needed first.
2.  **SCM Helper**: A function to find the SCM of two numbers using the formula.
3.  **Iterative SCM**: The main function iterates through the range of numbers, continuously updating the \`currentScm\` by finding the SCM of the previous result and the current number in the range.

### 📚 Key Concepts
- **Number Theory**: Concepts like Greatest Common Divisor (GCD) and Least Common Multiple (LCM/SCM) are essential.
`,
  "drop-it": `
### 💡 Problem Breakdown
The task is to iterate through an array from the beginning and remove elements until a "predicate" function (a function that returns true or false) returns \`true\`. Once the condition is met, the iteration should stop, and the rest of the array should be returned.

### ⚙️ Solution Walkthrough
The solution can use \`.findIndex()\` to locate the first element that satisfies the predicate, and then \`.slice()\` to get the rest of the array.
\`\`\`javascript
function dropElements(arr, func) {
  const index = arr.findIndex(func);
  if (index === -1) {
    return []; // No element passed the test
  }
  return arr.slice(index);
}
\`\`\`
1.  **\`.findIndex(func)\`**: This array method finds the index of the first element for which the callback \`func\` returns a truthy value.
2.  **\`.slice(index)\`**: Once the index is found, \`.slice()\` is used to create a new array containing all elements from that index to the end.

### 📚 Key Concepts
- **Predicate Function**: A function that takes an input and returns a boolean value, typically used for testing conditions.
- **\`Array.prototype.findIndex()\`**: A modern array method for finding the position of an element based on a condition.
`,
  steamroller: `
### 💡 Problem Breakdown
The goal is to "flatten" a nested array, meaning to convert an array that contains other arrays (at any level of depth) into a single, one-dimensional array.

### ⚙️ Solution Walkthrough
A recursive approach is a natural fit. A function iterates through the array. If an item is not an array, it's pushed to a result. If an item *is* an array, the function calls itself on that item. The modern \`.flat(Infinity)\` method is a much simpler built-in solution.
\`\`\`javascript
// Modern built-in solution
function steamrollArray(arr) {
  return arr.flat(Infinity);
}

// Recursive solution
function steamrollRecursive(arr, flattened = []) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      steamrollRecursive(item, flattened);
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}
\`\`\`
### 📚 Key Concepts
- **Recursion**: A natural way to process nested or tree-like data structures.
- **\`Array.prototype.flat()\`**: A modern (ES2019) built-in method that provides a simple and efficient way to flatten arrays.
`,
  "caesars-cipher": `
### 💡 Problem Breakdown
This is a classic substitution cipher. ROT13 ("rotate by 13 places") is a specific type of Caesars cipher where each letter is replaced by the letter 13 places after it in the alphabet. To decode, you simply apply the same process again.

### ⚙️ Solution Walkthrough
The solution uses \`.replace()\` with a regular expression to find all uppercase letters. A replacer function then calculates the new character code.
\`\`\`javascript
function rot13(str) {
  return str.replace(/[A-Z]/g, (char) =>
    String.fromCharCode(
      (char.charCodeAt(0) - 65 + 13) % 26 + 65
    )
  );
}
\`\`\`
1.  **\`char.charCodeAt(0) - 65\`**: Converts the letter to a 0-25 index (A=0, B=1, ...).
2.  **\`+ 13\`**: "Shifts" the letter by 13 places.
3.  **\`% 26\`**: The modulo operator makes the alphabet "wrap around" (e.g., for Z, the index becomes greater than 25, and modulo brings it back into the 0-25 range).
4.  **\`+ 65\`**: Converts the 0-25 index back to the correct character code for an uppercase letter.
5.  **\`String.fromCharCode(...)\`**: Converts the final code back to a character.

### 📚 Key Concepts
- **Character Codes**: Using numeric character codes to perform mathematical transformations on letters.
- **Modulo Arithmetic**: Useful for problems involving cycles or "wrap-around" logic.
`,
  "telephone-number-validator": `
### 💡 Problem Breakdown
The task is to validate if a string conforms to one of several possible formats for a US phone number. This is a perfect use case for a single, powerful regular expression.

### ⚙️ Solution Walkthrough
A regular expression is constructed to match all valid formats.
\`\`\`javascript
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
  return regex.test(str);
}
\`\`\`
-   **\`^\`**: Start of the string anchor.
-   **\`(1\s?)?\`**: An optional country code "1" followed by an optional space.
-   **\`(\(\d{3}\)|\d{3})\`**: The area code, which is either 3 digits inside parentheses or just 3 digits.
-   **\`[\s\-]?\`**: An optional separator (space or dash).
-   **\`\d{3}\`**: The next 3 digits.
-   **\`\d{4}\`**: The final 4 digits.
-   **\`$\`**: End of the string anchor.

### 📚 Key Concepts
- **Regular Expressions**: The primary tool for complex pattern matching in strings.
`,
  "cash-register": `
### 💡 Problem Breakdown
This is a complex algorithmic problem. You need to simulate a cash register. Given the price, cash paid, and the cash-in-drawer (CID), you must return the correct change using the available bills and coins. You also have to handle three specific statuses:
-   \`INSUFFICIENT_FUNDS\`: If you can't make exact change or don't have enough money.
-   \`CLOSED\`: If the change due is exactly equal to the total cash-in-drawer.
-   \`OPEN\`: If you can make change and still have money left in the drawer.

### ⚙️ Solution Walkthrough
The solution involves several steps:
1.  Create a map or array of currency unit values (e.g., PENNY: 0.01).
2.  Calculate the total cash-in-drawer and the change due.
3.  Handle the \`INSUFFICIENT_FUNDS\` and \`CLOSED\` edge cases first by comparing change due to total CID.
4.  If the status is \`OPEN\`, iterate from the largest currency unit down to the smallest.
5.  For each unit, calculate how much of that unit can be used for the change without exceeding the change due or the amount of that unit available in the drawer.
6.  Subtract the amount used from the change due and add it to a \`change\` array.
7.  After the loop, if change due is still greater than zero, it means you couldn't make exact change, so the status is \`INSUFFICIENT_FUNDS\`. Otherwise, return \`OPEN\` with the \`change\` array.

### 📚 Key Concepts
- **Greedy Algorithm**: The approach of iterating from the largest currency unit to the smallest is a greedy algorithm.
- **Edge Case Handling**: This problem requires careful handling of multiple specific conditions.
`,
  "max-char": `
### 💡 Problem Breakdown
The goal is to find the character that appears most frequently in a given string. For example, in "abcccccccd", the character "c" appears most often.

### ⚙️ Solution Walkthrough
A common solution is to use an object (acting as a hash map) to store the counts of each character.
\`\`\`javascript
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
\`\`\`
1.  **Character Map**: The first loop iterates through the string, building an object where keys are the characters and values are their frequencies.
2.  **Find Max**: The second loop iterates through the \`charMap\` to find the character with the highest frequency.

### 📚 Key Concepts
- **Hash Map**: Using an object to store key-value mappings is a fundamental pattern for counting, grouping, and efficient lookups.
`,
  "vowels-counter": `
### 💡 Problem Breakdown
The task is to count the number of vowels (a, e, i, o, u) in a string. The check should be case-insensitive.

### ⚙️ Solution Walkthrough
A simple and readable solution uses a regular expression to find all vowel matches.
\`\`\`javascript
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
\`\`\`
1.  **\`str.match(...)\`**: This string method retrieves the result of matching a string against a regular expression.
2.  **\`/[aeiou]/gi\`**: This is the regular expression.
    -   \`[aeiou]\`: Matches any single character in the set.
    -   \`g\`: The "global" flag, to find all matches, not just the first one.
    -   \`i\`: The "case-insensitive" flag.
3.  **Result**: \`.match()\` returns an array of all matches found, or \`null\` if no matches are found. We return the length of the array or 0.

### 📚 Key Concepts
- **Regular Expressions**: A powerful tool for pattern matching in strings.
`,
  "array-from-string": `
### 💡 Problem Breakdown
The task is to convert a string into an array of its individual characters.

### ⚙️ Solution Walkthrough
While \`.split('')\` is very common, the ES6 \`Array.from()\` method is also a great tool for this. It creates a new array instance from an iterable object, and strings are iterable.
\`\`\`javascript
function arrayFromString(str) {
  return Array.from(str);
}
arrayFromString("hello"); // ['h', 'e', 'l', 'l', 'o']
\`\`\`
### 📚 Key Concepts
- **\`Array.from()\`**: A static method for creating arrays from iterables or array-like objects.
- **Iterable Protocol**: Strings implement the iterable protocol, which is why they work with \`Array.from()\` and \`for...of\` loops.
`,
  "find-unique-values": `
### 💡 Problem Breakdown
The goal is to get a list of the unique values from an array, removing any duplicates.

### ⚙️ Solution Walkthrough
The most concise and modern solution is to convert the array to a \`Set\` (which automatically handles uniqueness) and then convert it back to an array.
\`\`\`javascript
function uniqueValues(arr) {
  return [...new Set(arr)];
}
uniqueValues([1, 1, 2, 3, 3]); // [1, 2, 3]
\`\`\`
1.  **\`new Set(arr)\`**: Creates a \`Set\` from the array, discarding duplicates.
2.  **\`[... ]\`**: The spread syntax expands the elements of the \`Set\` into a new array.

### 📚 Key Concepts
- **\`Set\`**: A data structure for storing a collection of unique values.
`,
  "array-of-digits": `
### 💡 Problem Breakdown
The task is to take a single number and convert it into an array of its individual digits. For example, 123 should become \`[1, 2, 3]\`.

### ⚙️ Solution Walkthrough
The solution involves converting the number to a string, splitting the string into an array of character digits, and then converting those characters back to numbers.
\`\`\`javascript
function numberToArray(num) {
  return String(num).split('').map(Number);
}
\`\`\`
1.  **\`String(num)\`**: Convert the number to a string (e.g., \`123\` -> \`"123"\`).
2.  **\`.split('')\`**: Split the string into an array of characters (e.g., \`["1", "2", "3"]\`).
3.  **\`.map(Number)\`**: Use \`.map()\` with the \`Number\` constructor as a callback to convert each string digit back into a number.

### 📚 Key Concepts
- **Type Conversion**: The solution relies on converting between number and string data types.
`,
  "count-words-in-string": `
### 💡 Problem Breakdown
The goal is to count the number of words in a given sentence. A "word" is typically a sequence of non-space characters.

### ⚙️ Solution Walkthrough
The solution is to split the string by spaces and then get the length of the resulting array. It's important to handle extra whitespace.
\`\`\`javascript
function countWords(str) {
  // Trim whitespace and split by one or more space characters
  const words = str.trim().split(/\s+/);
  // Handle case of an empty string
  return words[0] === '' ? 0 : words.length;
}
\`\`\`
1.  **\`.trim()\`**: Removes leading/trailing whitespace.
2.  **\`.split(/\s+/)\`**: Splits the string by one or more whitespace characters (\`\s+\`) to correctly handle multiple spaces between words.
3.  **Length Check**: The length of the resulting array is the number of words.

### 📚 Key Concepts
- **Regular Expressions**: Using \`\s+\` is more robust than splitting by a single space \`' '\`.
`,
  "is-isogram": `
### 💡 Problem Breakdown
An isogram is a word with no repeating letters. The task is to check if a string is an isogram.

### ⚙️ Solution Walkthrough
An efficient way to solve this is to use a \`Set\`. We can compare the size of a \`Set\` created from the string's characters with the string's original length. If they are the same, no characters were discarded due to duplication, so the string is an isogram.
\`\`\`javascript
function isIsogram(str) {
  const s = str.toLowerCase();
  return new Set(s).size === s.length;
}
\`\`\`
1.  **\`new Set(s)\`**: Creates a \`Set\` of the unique characters in the string.
2.  **\`.size === s.length\`**: Compares the number of unique characters to the total number of characters.

### 📚 Key Concepts
- **\`Set\`**: An excellent tool for checking for uniqueness.
`,
  "hamming-distance": `
### 💡 Problem Breakdown
The Hamming distance is a metric for comparing two strings of equal length. It's the number of positions at which the corresponding characters are different.

### ⚙️ Solution Walkthrough
The solution is to iterate through the strings with a loop, comparing the characters at each index and incrementing a counter for each mismatch.
\`\`\`javascript
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must be of equal length.");
  }
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}
\`\`\`
### 📚 Key Concepts
- **String Iteration**: Looping through a string's characters by index.
`,
  "is-pangram": `
### 💡 Problem Breakdown
A pangram is a sentence that contains every letter of the alphabet at least once. The task is to write a function to check for this property.

### ⚙️ Solution Walkthrough
The solution is to collect all the unique letters from the input string and check if there are 26 of them.
\`\`\`javascript
function isPangram(str) {
  const letters = new Set(str.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}
\`\`\`
1.  **\`str.toLowerCase().match(/[a-z]/g)\`**: This converts the string to lowercase, then uses a regular expression to find all occurrences of letters from 'a' to 'z', returning them as an array.
2.  **\`new Set(...)\`**: A \`Set\` is created from this array of letters, which automatically handles uniqueness.
3.  **\`.size === 26\`**: If the number of unique letters is 26, it's a pangram.

### 📚 Key Concepts
- **Regular Expressions**: Used to extract only the letters from the sentence.
- **\`Set\`**: Used to efficiently find the count of unique letters.
`,
  "truncate-string": `
### 💡 Problem Breakdown
The task is to shorten a string to a specified maximum length. If the string is truncated, an ellipsis ("...") should be appended.

### ⚙️ Solution Walkthrough
The function first checks if the string's length is greater than the maximum length. If it is, it slices the string and adds the ellipsis.
\`\`\`javascript
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
\`\`\`
### 📚 Key Concepts
- **Conditional Logic**: An \`if\` statement is used to decide whether truncation is necessary.
- **\`String.prototype.slice()\`**: Used to extract the desired portion of the string.
`,
  "longest-substring-no-repeats": `
### 💡 Problem Breakdown
This is a classic interview question that is often solved efficiently using the "sliding window" technique. The goal is to find the length of the longest contiguous substring in a given string that does not contain any repeating characters.

### ⚙️ Solution Walkthrough
We use two pointers, \`start\` and \`i\` (the end), to define a "window." We also use a map to store the last seen index of each character.
\`\`\`javascript
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // If we've seen this char before AND it's inside our current window
    if (charMap[char] >= start) {
      // Move the start of the window to the position after the last occurrence
      start = charMap[char] + 1;
    }
    // Update the last seen index of the current character
    charMap[char] = i;
    // Update the max length
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}
\`\`\`
### 📚 Key Concepts
- **Sliding Window**: An algorithmic technique that uses two pointers to maintain a "window" over a portion of a data structure. The window size can grow or shrink.
- **Hash Map**: The \`charMap\` object is used for O(1) lookups of character positions.
`,
  "3sum": `
### 💡 Problem Breakdown
This is another classic interview problem. Given an array of integers, find all unique combinations of three elements (\`triplets\`) that sum up to zero.

### ⚙️ Solution Walkthrough
The most common efficient solution involves sorting the array and then using the "two-pointer" technique.
1.  **Sort the array**: This is crucial for the two-pointer approach and for handling duplicates.
2.  **Iterate through the array**: Use a \`for\` loop. The current element \`nums[i]\` will be the first number in a potential triplet.
3.  **Two-Pointer Search**: For each \`nums[i]\`, set up two pointers, \`left\` (at \`i + 1\`) and \`right\` (at the end of the array).
4.  **Check Sum**: Calculate \`sum = nums[i] + nums[left] + nums[right]\`.
    - If \`sum\` is 0, you've found a triplet. Add it to your results. Move both pointers inward and skip any duplicate numbers to avoid duplicate triplets.
    - If \`sum\` is less than 0, move the \`left\` pointer to the right to increase the sum.
    - If \`sum\` is greater than 0, move the \`right\` pointer to the left to decrease the sum.
5.  **Skip Duplicates**: Add logic to skip duplicate values for the initial \`i\` as well.

### 📚 Key Concepts
- **Two-Pointer Technique**: A common algorithmic pattern for searching for pairs in a sorted array.
- **Sorting**: Sorting the input array first is a key step that enables the efficient two-pointer search.
`,
  "group-anagrams": `
### 💡 Problem Breakdown
The task is to group words that are anagrams of each other from a given list of strings.

### ⚙️ Solution Walkthrough
The solution uses a hash map where the keys are the "canonical" representation of a word (the sorted string of its characters) and the values are arrays of the words that match that canonical form.
\`\`\`javascript
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
}
\`\`\`
1.  **Iterate**: Loop through each string in the input array.
2.  **Canonical Key**: For each string, create its canonical form by sorting its characters. This key will be the same for all anagrams.
3.  **Group**: Use the sorted string as a key in a map. Add the original string to the array associated with that key.
4.  **Result**: The values of the map will be the arrays of grouped anagrams.

### 📚 Key Concepts
- **Hash Map**: The core data structure that makes the grouping efficient.
- **Canonical Representation**: A standard or normalized form of a piece of data, used for comparison and grouping.
`,
  "container-with-most-water": `
### 💡 Problem Breakdown
This is a popular interview question. You're given an array of heights representing vertical lines. You need to find two lines that, along with the x-axis, form a container that can hold the most water. The area is determined by \`width * min(height1, height2)\`.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1.  **Initialize**: Set a \`left\` pointer at the beginning of the array and a \`right\` pointer at the end. Initialize \`maxArea\` to 0.
2.  **Loop**: While \`left\` is less than \`right\`:
    - Calculate the current area: \`width = right - left\`, \`height = Math.min(heights[left], heights[right])\`, \`area = width * height\`.
    - Update \`maxArea\` if the current area is larger.
    - **Move Pointer**: This is the key insight. To have a chance at a larger area, you must move the pointer corresponding to the *shorter* of the two lines. Moving the taller line's pointer can't possibly increase the height (it might stay the same or decrease) and will definitely decrease the width, so the area can only decrease or stay the same.

### 📚 Key Concepts
- **Two-Pointer Technique**: An efficient pattern for searching or calculating values in an array by moving pointers from the outside in.
`,
  "spiral-matrix": `
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
- **Matrix Traversal**: A common category of problems involving 2D arrays.
- **Boundary Pointers**: Using variables to manage the current state of a traversal.
`,
  "rotate-image": `
### 💡 Problem Breakdown
The goal is to rotate an N x N matrix by 90 degrees clockwise, *in-place* (without creating a new matrix).

### ⚙️ Solution Walkthrough
This can be achieved in a clever two-step process:
1.  **Transpose the Matrix**: A transpose operation swaps the rows and columns. You can do this by swapping \`matrix[i][j]\` with \`matrix[j][i]\` for the upper triangle of the matrix.
2.  **Reverse Each Row**: After transposing, simply reverse the elements in each row.

This sequence of operations results in a 90-degree clockwise rotation.

### 📚 Key Concepts
- **Matrix Manipulation**: In-place algorithms that modify the data structure directly to save space.
- **Transpose**: A matrix operation where rows become columns and columns become rows.
`,
  "product-of-array-except-self": `
### 💡 Problem Breakdown
Given an array, the task is to create a new array where each element at index \`i\` is the product of all other numbers in the original array except \`nums[i]\`. A key constraint is often to solve this in O(n) time and without using the division operator.

### ⚙️ Solution Walkthrough
A two-pass approach is very efficient.
1.  **First Pass (Prefix Products)**: Create a \`result\` array. Iterate through the input array from left to right. For each index \`i\`, \`result[i]\` will store the product of all elements to the *left* of \`i\`.
2.  **Second Pass (Postfix Products)**: Iterate through the input array from right to left. Maintain a \`postfix\` product variable. For each index \`i\`, multiply the current \`result[i]\` (which holds the prefix product) by the \`postfix\` product. Then, update the \`postfix\` variable.

After these two passes, \`result[i]\` will contain the product of everything to its left and everything to its right.

### 📚 Key Concepts
- **Prefix/Postfix Sums (or Products)**: A common algorithmic pattern where you pre-calculate running totals from the start and end of an array to answer queries efficiently.
`,
  "valid-parentheses": `
### 💡 Problem Breakdown
The task is to determine if a string of brackets is "valid." A string is valid if:
1.  Open brackets are closed by the same type of bracket.
2.  Open brackets are closed in the correct order.

### ⚙️ Solution Walkthrough
This is a perfect use case for a **Stack** data structure.
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
  "longest-palindromic-substring": `
### 💡 Problem Breakdown
This is a classic string problem. The goal is to find the longest contiguous substring within a given string that is a palindrome.

### ⚙️ Solution Walkthrough
A common and intuitive solution is the "Expand from Center" approach.
1.  Iterate through every character of the string.
2.  For each character, treat it as a potential center of a palindrome and expand outwards in both directions (left and right), checking if the characters match.
3.  You need to do this twice for each character:
    - Once for an **odd-length** palindrome (e.g., "racecar", centered at 'e').
    - Once for an **even-length** palindrome (e.g., "aabbaa", centered between the two 'b's).
4.  Keep track of the longest palindrome found so far during the process. This approach is more efficient than the brute-force method of checking every possible substring.

### 📚 Key Concepts
- **Expand from Center**: An algorithmic pattern for finding palindromes.
- **Time Complexity**: This approach is O(n^2), which is a significant improvement over the O(n^3) brute-force solution.
`,
  "string-compression": `
### 💡 Problem Breakdown
The task is to compress a string by replacing consecutive runs of characters with the character followed by the count. For example, \`aaa\` becomes \`a3\`. If the compressed string is not shorter than the original, the original should be returned.

### ⚙️ Solution Walkthrough
The solution is to iterate through the string, keeping track of the current character and its consecutive count.
1.  Initialize an empty \`compressed\` string and a \`count\` of 1.
2.  Loop through the string from the first character to the end.
3.  Compare the character at \`i\` with the character at \`i+1\`.
4.  If they are the same, increment the \`count\`.
5.  If they are different (or if we're at the end of the string), append the current character and its \`count\` to the \`compressed\` string, and then reset the \`count\` to 1.
6.  Finally, compare the lengths of the \`compressed\` and original strings and return the shorter one.

### 📚 Key Concepts
- **String Building**: Iteratively constructing a new string.
- **Lookahead**: The logic relies on looking ahead one character (\`str[i+1]\`) to see if the run of consecutive characters has ended.
`,
  "first-unique-char": `
### 💡 Problem Breakdown
The goal is to find the very first character in a string that does not repeat anywhere else in the string and return its index.

### ⚙️ Solution Walkthrough
A two-pass approach using a hash map is efficient and easy to understand.
1.  **First Pass (Build Frequency Map)**: Iterate through the string once and build a map (a plain object) that stores the frequency count of each character.
2.  **Second Pass (Find First Unique)**: Iterate through the string a second time. For each character, look up its count in the map. The first character you find with a count of 1 is your answer. Return its index.
3.  If the second loop completes without finding a character with a count of 1, it means there are no unique characters, so return -1.

### 📚 Key Concepts
- **Hash Map**: The core data structure used to efficiently store and retrieve character counts.
`,
  "kadanes-algorithm": `
### 💡 Problem Breakdown
This is a classic algorithm for finding the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

### ⚙️ Solution Walkthrough
The algorithm is remarkably simple and efficient, running in O(n) time.
1.  Initialize two variables: \`maxSoFar\` and \`maxEndingHere\`, both to the value of the first element in the array.
2.  Iterate through the array starting from the second element.
3.  For each element, update \`maxEndingHere\`. The new \`maxEndingHere\` is the larger of two values: the current element itself, or the current element plus the previous \`maxEndingHere\`. This step essentially asks, "Should we start a new subarray here, or continue the existing one?"
4.  After updating \`maxEndingHere\`, compare it with \`maxSoFar\` and update \`maxSoFar\` if \`maxEndingHere\` is larger.
5.  The final result is \`maxSoFar\`.

### 📚 Key Concepts
- **Kadane's Algorithm**: A dynamic programming approach where the maximum subarray sum ending at the current position is calculated based on the maximum sum ending at the previous position.
`,
  "merge-sorted-arrays": `
### 💡 Problem Breakdown
The task is to merge two already sorted arrays into a new, single array that is also sorted.

### ⚙️ Solution Walkthrough
A simple solution is to concatenate the two arrays and then sort the result. While not the most performant for very large arrays (which would use a two-pointer merge), it's very concise and readable for most cases.
\`\`\`javascript
function mergeSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
\`\`\`
1.  **\`[...arr1, ...arr2]\`**: The spread syntax is used to create a new, single array containing all elements from both input arrays.
2.  **\`.sort((a, b) => a - b)\`**: The \`.sort()\` method is called on the combined array. The provided compare function \`(a, b) => a - b\` ensures that the numbers are sorted in correct numerical ascending order.

### 📚 Key Concepts
- **Sort Compare Function**: It's crucial to provide a compare function to \`.sort()\` when sorting numbers to avoid incorrect lexicographical sorting.
`,
  "move-zeroes": `
### 💡 Problem Breakdown
The task is to modify an array in-place by moving all the zero elements to the end, while preserving the relative order of the non-zero elements.

### ⚙️ Solution Walkthrough
An efficient solution uses a "two-pointer" approach, although one pointer is implicit. We use a single pointer, \`writeIndex\`, to keep track of the position where the next non-zero element should be placed.
1.  Initialize \`writeIndex = 0\`.
2.  Iterate through the array with a \`readIndex\`.
3.  If the element at \`readIndex\` is **not** zero, we "move" it to the \`writeIndex\` position and increment \`writeIndex\`.
4.  After this loop, all non-zero elements have been moved to the front of the array in their original relative order.
5.  Now, loop from \`writeIndex\` to the end of the array and fill the remaining spots with zeroes.

### 📚 Key Concepts
- **In-place Algorithm**: An algorithm that transforms the input data without using extra space for a new data structure.
- **Two-Pointer Technique**: A pattern where pointers are used to track different positions in a data structure during a traversal.
`,
  "find-all-duplicates-in-array": `
### 💡 Problem Breakdown
You are given an array where the numbers are in the range \`[1, n]\` (where \`n\` is the size of the array). The task is to find all numbers that appear twice. This can be solved cleverly in O(n) time and without using extra space.

### ⚙️ Solution Walkthrough
The solution uses the array itself as a hash map. Since the numbers are in the range \`[1, n]\`, they can correspond to array indices \`[0, n-1]\`.
1.  Iterate through the array.
2.  For each number \`num\`, consider the index \`index = Math.abs(num) - 1\`.
3.  Go to the element at that index, \`nums[index]\`.
4.  If the element at \`nums[index]\` is already negative, it means we have seen the number \`Math.abs(num)\` before. Add it to our duplicates list.
5.  If it's positive, "mark" it as seen by negating it: \`nums[index] = -nums[index]\`.

This works because we use the sign of the number at an index to store the "seen" state for the number corresponding to that index.

### 📚 Key Concepts
- **In-place Hashing**: Using the input array itself as a data structure to store information, saving space.
`,
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
  "word-search-matrix": `
### 💡 Problem Breakdown
This is a challenging problem that requires a backtracking algorithm. You are given a 2D grid of characters and a word. You need to determine if the word can be formed by starting at any cell and moving to adjacent (up, down, left, right) cells. A cell cannot be used more than once in the same word.

### ⚙️ Solution Walkthrough
The approach is to use a Depth-First Search (DFS) with backtracking.
1.  Iterate through every cell of the board.
2.  If a cell's character matches the first letter of the word, start a DFS from that cell.
3.  The DFS function would look like \`dfs(row, col, word_index)\`:
    - **Base Case 1**: If \`word_index\` equals the word's length, we've found the entire word, so return \`true\`.
    - **Base Case 2**: If the current \`(row, col)\` is out of bounds, or if the character at that cell doesn't match \`word[word_index]\`, then this path is invalid, so return \`false\`.
    - **Backtracking**: To avoid reusing a cell, temporarily modify the board at \`(row, col)\` to a special character (e.g., '#').
    - **Recursive Step**: Recursively call the DFS function for all four neighbors. If any of these calls return \`true\`, then a path has been found, so return \`true\`.
    - **Backtrack**: **Crucially**, after the recursive calls, restore the original character on the board so it can be used in other potential paths.
4. If the main loop finishes without the DFS returning \`true\`, the word does not exist on the board.

### 📚 Key Concepts
- **Backtracking**: A recursive technique for exploring all possible paths and abandoning a path when it fails.
- **Depth-First Search (DFS)**: A graph traversal algorithm that explores as far as possible down each branch before backtracking.
`,
  "minimum-window-substring": `
### 💡 Problem Breakdown
This is a difficult but classic interview question that uses the "sliding window" technique. Given a search string \`S\` and a target string \`T\`, you need to find the smallest substring in \`S\` that contains all the characters of \`T\` (including duplicates).

### ⚙️ Solution Walkthrough
The sliding window approach uses two pointers, \`left\` and \`right\`, to define the current window.
1.  **Frequency Map**: First, create a frequency map of the characters in the target string \`T\`.
2.  **Expand Window**: Start with both pointers at the beginning. Move the \`right\` pointer to expand the window. As you do, update a count of the characters in your current window.
3.  **Check for Validity**: Once the window contains all the required characters from \`T\`, it is a "valid" window.
4.  **Shrink Window**: Now, try to find a smaller valid window. Move the \`left\` pointer inward. As long as the window remains valid, keep shrinking it and updating the minimum window size found so far.
5.  **Repeat**: Once the window becomes invalid (by shrinking it too much), go back to step 2 and start expanding the \`right\` pointer again. Continue until the \`right\` pointer reaches the end of the string.

### 📚 Key Concepts
- **Sliding Window**: An algorithmic pattern using two pointers to maintain a "window" over a data set. It's very efficient for problems involving contiguous subarrays or substrings.
- **Frequency Map (Hash Map)**: Essential for keeping track of the character counts needed and the counts within the current window.
`,
  "roman-to-integer": `
### 💡 Problem Breakdown
The task is to convert a Roman numeral string (e.g., "IX") into its integer equivalent (9). The key challenge is handling the subtractive notation, where a smaller numeral placed before a larger one means subtraction (e.g., IV = 4, IX = 9).

### ⚙️ Solution Walkthrough
A simple approach is to iterate through the string from left to right. If the current numeral's value is less than the next one's, we subtract it from the total. Otherwise, we add it.
1.  Create a map of Roman numerals to their integer values.
2.  Loop through the string.
3.  For each character, get its value and the value of the next character.
4.  If the next character's value is greater than the current one, subtract the current value from the running total.
5.  Otherwise, add the current value to the total.

### 📚 Key Concepts
- **Lookahead**: The logic depends on looking ahead one character to decide whether to add or subtract.
`,
  "integer-to-roman": `
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
  "longest-common-prefix": `
### 💡 Problem Breakdown
The task is to find the longest string that is a prefix (starting part) of every string in an array of strings.

### ⚙️ Solution Walkthrough
A simple approach is "vertical scanning."
1.  If the array is empty, return "".
2.  Iterate through the characters of the *first* string in the array (from \`i = 0\` to \`n\`).
3.  For each character \`char\` at index \`i\` of the first string, loop through *all the other strings* in the array.
4.  Check if the character at index \`i\` in the other strings is the same as \`char\`.
5.  If you find a mismatch, or if one of the other strings is shorter than index \`i\`, it means the common prefix ends at the previous character. Return the substring of the first string up to that point.
6.  If the outer loop completes, the entire first string is the common prefix.

### 📚 Key Concepts
- **Prefix**: A sequence of characters at the beginning of a string.
`,
  "implement-strstr": `
### 💡 Problem Breakdown
This is a classic string searching problem. The goal is to find the first occurrence of a "needle" string within a "haystack" string and return its starting index.

### ⚙️ Solution Walkthrough
The simplest solution is to use the built-in \`.indexOf()\` method, as its purpose is identical to this problem's requirements.
\`\`\`javascript
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}
\`\`\`
If you were to implement it manually, you would loop through the haystack and, at each position, check if the substring starting there matches the needle.

### 📚 Key Concepts
- **String Searching**: The process of finding a substring within a larger string.
`,
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
  "set-matrix-zeroes": `
### 💡 Problem Breakdown
The task is to modify a 2D matrix in-place. If any cell in the matrix is 0, its entire row and entire column must be set to 0.

### ⚙️ Solution Walkthrough
A naive approach would be to zero out rows/columns as soon as you find a 0, but this would cause a cascade effect (the new 0s would cause more rows/columns to be zeroed). A better approach is to use a first pass to mark which rows and columns need to be zeroed, and a second pass to perform the updates.
1.  **First Pass (Marking)**: Create two sets, \`rowsToZero\` and \`colsToZero\`. Iterate through the entire matrix. If \`matrix[r][c]\` is 0, add \`r\` to \`rowsToZero\` and \`c\` to \`colsToZero\`.
2.  **Second Pass (Updating)**: Iterate through the matrix again. If the current row \`r\` is in \`rowsToZero\` or the current column \`c\` is in \`colsToZero\`, set \`matrix[r][c]\` to 0.

### 📚 Key Concepts
- **In-place Algorithm**: Modifying the input data structure.
- **Auxiliary Space**: The sets \`rowsToZero\` and \`colsToZero\` use extra space to store the state needed for the modification.
`,
  "find-peak-element": `
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
  "majority-element": `
### 💡 Problem Breakdown
The majority element in an array is the element that appears more than \`n/2\` times. The task is to find this element.

### ⚙️ Solution Walkthrough
The Boyer-Moore Voting Algorithm provides an elegant and efficient O(n) time and O(1) space solution.
1.  Initialize a \`candidate\` variable and a \`count\` to 0.
2.  Iterate through the array.
3.  If \`count\` is 0, set the \`candidate\` to the current number.
4.  If the current number is the same as the \`candidate\`, increment \`count\`.
5.  If it's different, decrement \`count\`.
6.  The \`candidate\` remaining at the end of the loop will be the majority element. This works because the count of the majority element will always outweigh the combined counts of all other elements.

### 📚 Key Concepts
- **Boyer-Moore Voting Algorithm**: A clever algorithm for finding the majority element.
`,
  "string-is-unique": `
### 💡 Problem Breakdown
The goal is to determine if a string contains only unique characters (no repeats).

### ⚙️ Solution Walkthrough
The most straightforward and readable solution in modern JavaScript is to use a \`Set\`.
1.  Create a \`Set\` from the characters of the string. A \`Set\` automatically discards any duplicate characters.
2.  Compare the \`.size\` of the \`Set\` with the original \`.length\` of the string.
3.  If they are equal, it means no characters were discarded, and therefore all characters were unique.

If you cannot use additional data structures, you would have to use a nested loop (O(n^2)) or sort the string first and then check for adjacent duplicates (O(n log n)).

### 📚 Key Concepts
- **\`Set\`**: An ideal data structure for problems involving uniqueness.
`,
  "urlify-string": `
### 💡 Problem Breakdown
The task is to replace all spaces in a string with the sequence "%20".

### ⚙️ Solution Walkthrough
A simple approach is to use built-in string methods.
1.  **\`.trim()\`**: First, remove any leading or trailing whitespace from the string, as these usually shouldn't be part of the final URL component.
2.  **\`.replace()\` with a Regular Expression**: Use the \`.replace()\` method with a regular expression that has a global flag (\`/ /g\`) to replace all occurrences of a space with "%20".

\`\`\`javascript
function urlify(str) {
  return str.trim().replace(/\\s/g, '%20');
}
\`\`\`

### 📚 Key Concepts
- **Regular Expressions**: The global flag (\`g\`) is essential for replacing all matches, not just the first one.
`,
  "palindrome-permutation": `
### 💡 Problem Breakdown
The task is to check if a given string is a permutation of a palindrome. A string can be a permutation of a palindrome if and only if it has at most one character that appears an odd number of times.

### ⚙️ Solution Walkthrough
The solution involves counting the frequency of each character.
1.  Clean the input string (convert to lowercase, remove non-letters).
2.  Create a frequency map of the characters.
3.  Count how many characters have an odd frequency.
4.  If the count of characters with an odd frequency is 0 or 1, the string can be a permutation of a palindrome. Otherwise, it cannot.

A \`Set\` can also be used cleverly: iterate through the characters. If a character is not in the set, add it. If it is, remove it. At the end, the size of the set will be the number of characters with an odd count.

### 📚 Key Concepts
- **Frequency Counting**: Using a hash map or set to count character occurrences.
- **Palindrome Properties**: Understanding the character frequency properties of palindromes.
`,
  "one-away-strings": `
### 💡 Problem Breakdown
This is a string comparison problem. The goal is to determine if two strings are "one edit away." An edit can be an insertion, a removal, or a replacement of a single character.

### ⚙️ Solution Walkthrough
The logic involves checking the lengths of the two strings first.
1.  **Length Check**: If the difference in length between the two strings is greater than 1, they cannot be one edit away, so return \`false\`.
2.  **Replacement Case (Same Length)**: If the strings have the same length, iterate through them and count the number of differing characters. If the difference count is more than 1, return \`false\`.
3.  **Insertion/Removal Case (Length Difference of 1)**: If the lengths differ by 1, use two pointers to iterate through both strings simultaneously. If a mismatch is found, check if this is the first difference encountered. If it's the second difference, return \`false\`. When a mismatch occurs, advance only the pointer for the longer string.

### 📚 Key Concepts
- **Two-Pointer Technique**: Useful for comparing two strings simultaneously.
- **Case Analysis**: The problem is broken down into distinct cases based on the length difference.
`,
  "zero-matrix": `
### 💡 Problem Breakdown
This is the same as the "Set Matrix Zeroes" problem. If any cell in a matrix is 0, its entire row and column must be set to 0. The key is to do this without letting the newly set zeroes cause a chain reaction.

### ⚙️ Solution Walkthrough
A two-pass approach is robust.
1.  **First Pass (Marking)**: Create two boolean arrays or sets, \`rowsToZero\` and \`colsToZero\`. Iterate through the matrix. If you find a 0 at \`matrix[r][c]\`, mark row \`r\` and column \`c\` for zeroing.
2.  **Second Pass (Updating)**: Iterate through the matrix again. For each cell \`matrix[r][c]\`, if either row \`r\` or column \`c\` was marked in the first pass, set the cell to 0.

An O(1) space solution exists where you use the first row and first column of the matrix itself as the markers, but this is more complex to implement correctly.

### 📚 Key Concepts
- **In-place Algorithm**: Modifying the input data structure.
- **Auxiliary Space**: Using extra data structures (\`rowsToZero\`, \`colsToZero\`) to store intermediate information.
`,
  "string-rotation": `
### 💡 Problem Breakdown
You are given two strings, \`s1\` and \`s2\`, and need to check if \`s2\` is a rotation of \`s1\` (e.g., "erbottlewat" is a rotation of "waterbottle"). The constraint is that you can only make one call to a hypothetical \`isSubstring\` method.

### ⚙️ Solution Walkthrough
There is a very clever trick to solve this. If \`s2\` is a rotation of \`s1\`, then \`s2\` will always be a substring of \`s1\` concatenated with itself (\`s1s1\`).
1.  **Length Check**: First, check if \`s1\` and \`s2\` have the same length and are not empty. If not, \`s2\` cannot be a rotation of \`s1\`.
2.  **Concatenation and Substring Check**: Create a new string \`s1s1 = s1 + s1\`. Then, check if \`s2\` is a substring of \`s1s1\`. If it is, then \`s2\` is a rotation of \`s1\`.

Example: \`s1 = "waterbottle"\`, \`s2 = "erbottlewat"\`.
\`s1s1\` becomes "waterbottlewaterbottle". "erbottlewat" is a substring of this, so the check passes.

### 📚 Key Concepts
- **String Properties**: Leveraging the properties of rotated strings to find a simple solution.
`,
  "basic-calculator-ii": `
### 💡 Problem Breakdown
The task is to evaluate a simple arithmetic expression string that contains non-negative integers and the operators \`+\`, \`-\`, \`*\`, \`/\`. The key is to respect operator precedence (\`*\` and \`/\` are evaluated before \`+\` and \`-\`).

### ⚙️ Solution Walkthrough
A common approach uses a stack.
1.  Iterate through the string. Maintain a \`currentNumber\` and the \`lastOperator\`.
2.  When you encounter a digit, build the \`currentNumber\`.
3.  When you encounter an operator (or reach the end of the string), you process the \`currentNumber\` based on the \`lastOperator\`.
    - If the \`lastOperator\` was \`+\` or \`-\`, push the \`currentNumber\` (or its negation) onto the stack.
    - If the \`lastOperator\` was \`*\` or \`/\`, pop the last number from the stack, perform the multiplication/division with \`currentNumber\`, and push the result back onto the stack.
4.  Update the \`lastOperator\` to the current operator.
5.  After the loop, the stack will contain only numbers that need to be added. The final result is the sum of all numbers in the stack.

### 📚 Key Concepts
- **Stack**: A perfect data structure for evaluating expressions, especially those involving precedence.
- **Operator Precedence**: The rules that dictate the order in which operators are evaluated.
`,
  "reverse-words-in-string": `
### 💡 Problem Breakdown
The goal is to reverse the order of words in a sentence, while handling extra spaces. For example, "  the sky is blue  " should become "blue is sky the".

### ⚙️ Solution Walkthrough
A combination of built-in methods makes this straightforward.
\`\`\`javascript
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}
\`\`\`
1.  **\`.trim()\`**: Removes any leading or trailing whitespace.
2.  **\`.split(/\s+/)\`**: Splits the string into an array of words, using a regular expression to handle one or more spaces as delimiters.
3.  **\`.reverse()\`**: Reverses the order of the words in the array.
4.  **\`.join(' ')\`**: Joins the words back into a single string with single spaces in between.

### 📚 Key Concepts
- **Method Chaining**: Combining multiple methods for a concise solution.
`,
  "decode-string": `
### 💡 Problem Breakdown
This is a string parsing problem that is well-suited for a stack-based approach. The encoding rule \`k[encoded_string]\` means the string inside is repeated \`k\` times. These can be nested.

### ⚙️ Solution Walkthrough
The solution uses two stacks: one for numbers (\`countStack\`) and one for the string being built so far (\`stringStack\`).
1.  Iterate through the string.
2.  If it's a digit, build up the current number.
3.  If it's \`[\`:
    - Push the current repeat count onto \`countStack\`.
    - Push the current result string onto \`stringStack\`.
    - Reset the repeat count and the current result string.
4.  If it's \`]\`:
    - Pop the repeat count from \`countStack\`.
    - Pop the previous string from \`stringStack\`.
    - Repeat the current result string by the popped count.
    - Prepend the popped string to the repeated result.
5.  If it's a letter, append it to the current result string.

### 📚 Key Concepts
- **Stack**: The LIFO nature of a stack is perfect for handling the nested structure of the encoded string.
`,
  "trapping-rain-water": `
### 💡 Problem Breakdown
This is a challenging but popular interview problem. Given an elevation map (an array of heights), you need to calculate how much rainwater could be trapped between the bars.

### ⚙️ Solution Walkthrough
An efficient solution uses the two-pointer technique.
1.  Initialize \`left\` and \`right\` pointers at the ends of the array.
2.  Initialize \`leftMax\` and \`rightMax\` heights to 0. These will track the tallest bar seen so far from each side.
3.  Initialize \`water\` to 0.
4.  Loop while \`left < right\`. In each iteration:
    - Compare \`heights[left]\` and \`heights[right]\`.
    - If \`heights[left]\` is smaller, it means the water level at the \`left\` pointer is determined by \`leftMax\`.
        - Update \`leftMax = Math.max(leftMax, heights[left])\`.
        - Add \`leftMax - heights[left]\` to the total \`water\`.
        - Move \`left\` pointer inward.
    - Otherwise, the water level at the \`right\` pointer is determined by \`rightMax\`. Do the symmetric operations for the right side and move the \`right\` pointer inward.
5.  Return the total \`water\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: The key insight is that the water trapped at any position is limited by the shorter of the maximum walls to its left and right. The two-pointer approach efficiently tracks these maximums as it moves inward.
`,
  "sliding-window-maximum": `
### 💡 Problem Breakdown
The task is to find the maximum value within each "sliding window" of a fixed size \`k\` as it moves across an array.

### ⚙️ Solution Walkthrough
A brute-force solution would be to find the max of each sub-array, but this is inefficient (O(n*k)). A much more efficient solution (O(n)) uses a **deque** (a double-ended queue).
1.  The deque will store *indices* of the array elements.
2.  We maintain a crucial property: the indices in the deque correspond to elements in decreasing order of value. This means the maximum element in the current window is always at the front of the deque.
3.  As the window slides:
    - **Remove from front**: Before adding a new element, remove indices from the front of the deque that are no longer within the current window.
    - **Remove from back**: While the deque is not empty and the current element is greater than the element at the back of the deque, remove elements from the back. This maintains the decreasing order property.
    - **Add to back**: Add the current element's index to the back of the deque.
    - **Record Max**: Once the window is full, the element at the front of the deque is the maximum for that window.

### 📚 Key Concepts
- **Sliding Window**: The problem structure.
- **Deque**: A specialized data structure that is essential for the optimal O(n) solution.
`,
  "first-missing-positive": `
### 💡 Problem Breakdown
Given an array of integers (which can be positive, negative, or zero), the goal is to find the smallest positive integer (starting from 1) that is *not* present in the array. This should be done efficiently.

### ⚙️ Solution Walkthrough
A clever O(n) time and O(1) space solution uses the array itself as a hash map.
1.  **First Pass (Cleanup)**: Iterate through the array. Any number that is less than or equal to 0, or greater than \`n\` (the array length), is not a candidate for the first missing positive, so we can ignore it (e.g., by changing its value to \`n + 1\`).
2.  **Second Pass (Marking)**: Iterate through the array again. For each number \`num\`, take its absolute value. If \`abs(num)\` is within the valid range (1 to \`n\`), use it as an index (\`index = abs(num) - 1\`). "Mark" the element at that index as visited by making it negative.
3.  **Third Pass (Finding)**: Iterate through the array one last time. The index of the first element that is still positive corresponds to the missing number. The missing number is \`index + 1\`.
4.  If all numbers from 1 to \`n\` are present (i.e., all elements are negative), the missing number is \`n + 1\`.

### 📚 Key Concepts
- **In-place Hashing**: Using the input array's indices and the sign of its values to store information without using extra space.
`,
  "largest-rectangle-histogram": `
### 💡 Problem Breakdown
This is a difficult problem. Given an array of heights representing a histogram, you need to find the area of the largest rectangle that can be formed within the histogram.

### ⚙️ Solution Walkthrough
The optimal solution uses a **stack**.
1.  The stack will store indices of the histogram bars in increasing order of height.
2.  Iterate through the bars of the histogram.
3.  For each bar \`h\`, while the stack is not empty and the bar at the top of the stack is taller than \`h\`:
    - Pop the index from the stack. This popped bar is the height of a potential rectangle.
    - The width of this rectangle extends from the previous element in the stack (its left boundary) to the current bar \`h\` (its right boundary).
    - Calculate the area and update the \`maxArea\`.
4.  After the check, push the current bar's index onto the stack.
5.  After iterating through all bars, there might be remaining bars in the stack. Pop them one by one and calculate their areas, assuming their right boundary is the end of the histogram.

### 📚 Key Concepts
- **Stack**: The key data structure for keeping track of potential left boundaries for rectangles.
`,
  "generate-parentheses": `
### 💡 Problem Breakdown
The task is to generate all possible combinations of well-formed (valid) parentheses given \`n\` pairs. This is a classic backtracking problem.

### ⚙️ Solution Walkthrough
A recursive helper function is used to build the parenthesis strings. The function keeps track of the current string, the number of open parentheses used, and the number of closed parentheses used.
\`backtrack(current_string, open_count, close_count)\`:
1.  **Base Case**: If the \`current_string\` length is \`2 * n\`, a valid combination has been formed. Add it to the results and return.
2.  **Recursive Step 1 (Add Open Parenthesis)**: If the number of \`open_count\` is less than \`n\`, you can add an opening parenthesis. Make a recursive call with \`backtrack(current_string + '(', open_count + 1, close_count)\`.
3.  **Recursive Step 2 (Add Close Parenthesis)**: If the number of \`close_count\` is less than \`open_count\`, you can add a closing parenthesis (this condition ensures the parentheses remain well-formed). Make a recursive call with \`backtrack(current_string + ')', open_count, close_count + 1)\`.

### 📚 Key Concepts
- **Backtracking**: A recursive algorithm that incrementally builds a solution and backtracks when a path is determined to be invalid.
`,
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
  "jump-game": `
### 💡 Problem Breakdown
You are given an array where each element represents the maximum jump length from that position. Starting at the first index, the goal is to determine if you can reach the last index.

### ⚙️ Solution Walkthrough
A greedy approach is very efficient for this problem.
1.  Initialize a variable \`maxReach\` to 0. This will track the furthest index you can possibly reach from the positions you've visited so far.
2.  Iterate through the array with an index \`i\`.
3.  In each iteration, first check if the current index \`i\` is greater than \`maxReach\`. If it is, it means you could never have reached the current position, so you're stuck. Return \`false\`.
4.  Update \`maxReach\`: \`maxReach = Math.max(maxReach, i + nums[i])\`. This updates the furthest reachable point based on the jump you can make from the current position.
5.  If the loop completes, it means you were able to reach every position up to the end, so return \`true\`.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we make the locally optimal choice (updating our maximum possible reach) which leads to the correct global solution.
`,
  "word-break": `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a string and a dictionary of words, determine if the string can be segmented into a sequence of one or more dictionary words.

### ⚙️ Solution Walkthrough
Dynamic programming is used to solve this efficiently.
1.  Create a boolean DP array, \`dp\`, of size \`s.length + 1\`. \`dp[i]\` will be \`true\` if the substring \`s.substring(0, i)\` can be broken down.
2.  Initialize \`dp[0] = true\` (an empty string can always be formed).
3.  Use nested loops. The outer loop iterates from \`i = 1\` to \`s.length\`. The inner loop iterates from \`j = 0\` to \`i\`.
4.  Inside the inner loop, check two conditions:
    - Is \`dp[j]\` true? (Meaning the substring up to \`j\` is valid).
    - Is the substring from \`j\` to \`i\` (\`s.substring(j, i)\`) present in the word dictionary?
5.  If both are true, it means we can form the substring up to \`i\`. Set \`dp[i] = true\` and \`break\` the inner loop.
6.  The final answer is the value of \`dp[s.length]\`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds upon the results of smaller subproblems (can we form the substring up to \`j\`?) to solve the larger problem (can we form the substring up to \`i\`?).
`,
  "lru-cache-conceptual": `
### 💡 Problem Breakdown
LRU stands for "Least Recently Used." An LRU cache is a fixed-size cache that automatically evicts the least recently used item when it needs to make space for a new item. The challenge is to design this data structure with \`get\` and \`put\` operations that run in O(1) average time complexity.

### ⚙️ Solution Walkthrough
The optimal solution requires combining two data structures:
1.  **A Hash Map (like a JavaScript \`Map\`)**: This provides O(1) lookup of items by their key. The map will store the key and a reference (or pointer) to a node in a linked list.
2.  **A Doubly Linked List**: This is used to maintain the order of use. The list will have a "most recently used" end and a "least recently used" end.
-   **\`get(key)\`**: Look up the key in the map. If it exists, get the corresponding node from the linked list, move that node to the "most recently used" end of the list, and return its value.
-   **\`put(key, value)\`**: If the key exists, update its value and move its node to the "most recently used" end. If it's a new key:
    - If the cache is full, remove the item at the "least recently used" end of the list (and also from the map).
    - Create a new node, add it to the "most recently used" end of the list, and add the key and node reference to the map.

### 📚 Key Concepts
- **Doubly Linked List**: Allows for O(1) insertion and deletion of nodes when you have a reference to the node.
- **Hash Map**: Allows for O(1) lookup.
- **Data Structure Combination**: Combining the strengths of two different data structures to meet complex requirements.
`,
  "median-of-two-sorted-arrays": `
### 💡 Problem Breakdown
This is a very difficult classic problem. The goal is to find the median of two sorted arrays as if they were a single, merged array. The key constraint is to do this efficiently, typically in O(log(m+n)) time, which suggests a binary search approach.

### ⚙️ Solution Walkthrough
The solution involves a binary search on the smaller of the two arrays to find the correct "partition."
1.  A partition of an array divides it into a left part and a right part.
2.  The goal is to find a partition in both arrays (\`partitionX\` and \`partitionY\`) such that:
    - Every element in the left parts is less than or equal to every element in the right parts. This is checked by \`maxLeftX <= minRightY\` and \`maxLeftY <= minRightX\`.
    - The total number of elements in the combined left parts is equal to (or one more than, for an odd total) the total number of elements in the combined right parts.
3.  Perform a binary search on the smaller array to find the correct \`partitionX\`. \`partitionY\` can be calculated from \`partitionX\` and the total length.
4.  Adjust the binary search range based on whether \`maxLeftX\` is greater than \`minRightY\` or vice versa.
5.  Once the correct partition is found, the median can be calculated from the maximum of the left parts and the minimum of the right parts.

### 📚 Key Concepts
- **Binary Search**: The core algorithm, but applied to the problem of finding a correct partition rather than a specific value.
- **Median**: The middle value of a sorted data set.
`,
  "regular-expression-matching": `
### 💡 Problem Breakdown
This is a difficult problem that involves implementing a regex engine for the special characters \`.\` (matches any single character) and \`*\` (matches zero or more of the preceding element).

### ⚙️ Solution Walkthrough
This is typically solved with recursion and memoization (or dynamic programming). A function \`isMatch(text_index, pattern_index)\` is defined.
1.  **Base Case**: If the pattern index has reached the end, the text index must also be at the end for a match.
2.  **Recursive Steps**:
    - Check if the current characters match (or if the pattern is a \`.\`).
    - The complex part is handling \`*\`. If the next character in the pattern is \`*\`:
        - **Option 1 (Zero occurrences)**: Try matching the rest of the pattern with the current text (\`isMatch(text_index, pattern_index + 2)\`).
        - **Option 2 (One or more occurrences)**: If the current characters match, try matching the same pattern with the next character in the text (\`isMatch(text_index + 1, pattern_index)\`).
    - If the next character is not \`*\` and the current characters match, then we must match the rest of the text with the rest of the pattern (\`isMatch(text_index + 1, pattern_index + 1)\`).

Memoization is crucial to store the results for \`(text_index, pattern_index)\` pairs to avoid re-computation.

### 📚 Key Concepts
- **Dynamic Programming / Recursion with Memoization**: The standard approach for solving this type of string matching problem.
`,
  "best-time-to-buy-sell-stock": `
### 💡 Problem Breakdown
You are given an array of stock prices over time. The task is to find the maximum profit you can make by buying the stock on one day and selling it on a future day.

### ⚙️ Solution Walkthrough
A simple and efficient O(n) solution involves a single pass through the array.
1.  Initialize two variables: \`minPrice\` to a very large number (\`Infinity\`) and \`maxProfit\` to 0.
2.  Iterate through the \`prices\` array.
3.  For each \`price\`:
    - If the current \`price\` is less than \`minPrice\`, update \`minPrice\` to the current \`price\`. This is a new best day to buy.
    - Otherwise, if the current \`price\` is not a new minimum, calculate the potential profit if we were to sell today: \`profit = price - minPrice\`.
    - If this \`profit\` is greater than \`maxProfit\`, update \`maxProfit\`.
4.  Return \`maxProfit\` after the loop.

### 📚 Key Concepts
- **Single Pass Algorithm**: Solving the problem by iterating through the data only once.
- **Greedy Approach**: At each step, we keep track of the lowest price seen so far and calculate the potential profit based on that, which leads to the global maximum.
`,
  "find-the-duplicate-number": `
### 💡 Problem Breakdown
You are given an array of \`n+1\` integers where each number is in the range \`[1, n]\`. This setup guarantees that at least one number is duplicated. The task is to find that single duplicate number.

### ⚙️ Solution Walkthrough
This problem can be cleverly mapped to finding a cycle in a linked list. The Floyd's Tortoise and Hare (cycle detection) algorithm provides an O(n) time and O(1) space solution.
1.  Treat the array values as pointers. The value at \`nums[i]\` points to the next index to visit.
2.  **Cycle Detection**: Use two pointers, \`slow\` and \`fast\`. \`slow\` moves one step at a time (\`slow = nums[slow]\`), and \`fast\` moves two steps (\`fast = nums[nums[fast]]\`). They are guaranteed to meet inside the cycle if one exists.
3.  **Find Cycle Entrance**: Once they meet, reset one pointer (e.g., \`slow\`) to the start of the array (index 0). Now, move both \`slow\` and \`fast\` one step at a time. The point where they meet again is the entrance to the cycle, which corresponds to the duplicate number.

### 📚 Key Concepts
- **Floyd's Cycle-Finding Algorithm**: A pointer algorithm for finding a cycle in a sequence.
- **Problem Transformation**: The ability to re-frame a problem (finding a duplicate in an array) as another, well-known problem (finding a cycle in a linked list).
`,
  "serialize-deserialize-binary-tree-conceptual": `
### 💡 Problem Breakdown
This is a common interview problem that tests your understanding of tree traversals.
- **Serialization**: The process of converting a tree structure into a format (like a string) that can be stored or transmitted.
- **Deserialization**: The process of reconstructing the original tree from the serialized format.

### ⚙️ Solution Walkthrough
A **Pre-order Traversal** is a very common and effective way to serialize a tree.
1.  **Serialization (\`serialize(node)\`)**:
    - If the current \`node\` is \`null\`, append a special marker (e.g., "null") to your string.
    - Otherwise, append the \`node.value\`, and then recursively call \`serialize(node.left)\` and \`serialize(node.right)\`.
    - The result would be a string like "1,2,null,null,3,4,null,null,5,null,null".
2.  **Deserialization (\`deserialize(string)\`)**:
    - Split the string into an array of values.
    - Use a helper function that consumes values from this array (e.g., using a queue or by shifting from the array).
    - \`deserialize_helper()\`:
        - Get the next value from the array.
        - If the value is "null", return \`null\`.
        - Otherwise, create a new \`Node\` with the value.
        - Recursively call the helper to build the left subtree: \`node.left = deserialize_helper()\`.
        - Recursively call the helper to build the right subtree: \`node.right = deserialize_helper()\`.
        - Return the created \`node\`.

### 📚 Key Concepts
- **Tree Traversal**: Pre-order traversal is key because it processes the root before its children, which makes reconstruction straightforward.
- **Serialization**: Converting data structures to a storable/transmittable format.
`,
};
