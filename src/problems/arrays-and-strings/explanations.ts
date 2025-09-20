
// problem explanation--> 01
export const explanations: Record<string, string> = {
  // problem explanation--> 01
  'as-reverse-string': `
### 💡 Problem Breakdown
The task is to take a string of text and reverse the order of its characters. For example, "hello" should become "olleh". This is a classic string manipulation problem that introduces you to working with strings as if they were arrays.

### ⚙️ Solution Walkthrough
The solution uses a chain of three common string and array methods.
\`\`\`javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
\`\`\`
1.  **\`str.split('')\`**: The \`.split('')\` method, with an empty string as an argument, splits the string into an array of its individual characters.
    -   \`"hello"\` becomes \`['h', 'e', 'l', 'l', 'o']\`
2.  **\`.reverse()\`**: This array method reverses the order of the elements in the array in-place.
    -   The array becomes \`['o', 'l', 'l', 'e', 'h']\`
3.  **\`.join('')\`**: This array method joins all the elements back into a single string. The empty string argument means no separator is placed between them.
    -   The final result is \`"olleh"\`

### 📚 Key Concepts
- **String Manipulation**: The process of changing, editing, or analyzing strings.
- **Method Chaining**: Calling one method after another on the result of the previous one in a single statement.
`,
  // problem explanation--> 02
  'as-is-palindrome': `
### 💡 Problem Breakdown
A palindrome is a word or phrase that reads the same backward as forward. The task is to write a function that can verify if a given string is a palindrome. For this problem, we need to consider only alphanumeric characters and ignore case.

### ⚙️ Solution Walkthrough
A robust solution involves cleaning the string first, and then using a two-pointer technique to check for symmetry.
\`\`\`javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right = cleaned.length - 1;
    while(left < right) {
        if(cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
\`\`\`
1.  **Cleaning**: \`.toLowerCase()\` converts the string to lowercase. \`.replace(/[\W_]/g, "")\` uses a regular expression to remove all non-alphanumeric characters.
2.  **Two Pointers**: We set a \`left\` pointer at the start and a \`right\` pointer at the end.
3.  **Comparison**: We loop while \`left\` is less than \`right\`. If the characters at the two pointers ever don't match, we know it's not a palindrome and can return \`false\` immediately. Otherwise, we move the pointers closer to the center.
4.  **Result**: If the loop finishes without finding a mismatch, the string is a palindrome.

### 📚 Key Concepts
- **String Normalization**: Cleaning the string into a standard format is a crucial first step for many string problems.
- **Two-Pointer Technique**: An efficient pattern for checking symmetry or searching from both ends of a sequence.
`,
  // problem explanation--> 03
  'as-get-string-length': `
### 💡 Problem Breakdown
The task is to find the number of characters in a given string.

### ⚙️ Solution Walkthrough
JavaScript strings have a built-in \`.length\` property that directly provides this information.
\`\`\`javascript
function getLength(str) {
  return str.length;
}
getLength("JavaScript"); // 10
\`\`\`
This property is a simple and efficient way to determine the size of a string.

### 📚 Key Concepts
- **String Properties**: Built-in values associated with strings.
- **\`.length\`**: A property that returns the number of code units in the string.
`,
  // problem explanation--> 04
  'as-string-to-uppercase': `
### 💡 Problem Breakdown
The goal is to convert an entire string to its uppercase equivalent.

### ⚙️ Solution Walkthrough
The built-in \`.toUpperCase()\` method is used for this. It returns a new string and does not modify the original.
\`\`\`javascript
const greeting = "hello world";
const loudGreeting = greeting.toUpperCase(); // "HELLO WORLD"
\`\`\`
### 📚 Key Concepts
- **String Methods**: Built-in functions that operate on strings.
- **Immutability**: String methods in JavaScript do not change the original string; they return a new one.
`,
  // problem explanation--> 05
  'as-string-to-lowercase': `
### 💡 Problem Breakdown
The goal is to convert an entire string to its lowercase equivalent.

### ⚙️ Solution Walkthrough
The built-in \`.toLowerCase()\` method is the counterpart to \`.toUpperCase()\`.
\`\`\`javascript
const greeting = "HELLO WORLD";
const quietGreeting = greeting.toLowerCase(); // "hello world"
\`\`\`
### 📚 Key Concepts
- **String Methods**: Built-in functions that operate on strings.
`,
  // problem explanation--> 06
  'as-access-first-array-element': `
### 💡 Problem Breakdown
The task is to get the first element from an array.

### ⚙️ Solution Walkthrough
Arrays in JavaScript are zero-indexed, meaning the first element is at index \`0\`. You can access it using bracket notation.
\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits[0]; // "apple"
\`\`\`
It's important to handle the case of an empty array, where accessing index 0 would result in \`undefined\`.

### 📚 Key Concepts
- **Zero-based Indexing**: A fundamental concept where the first element of a sequence has an index of 0.
- **Bracket Notation**: The syntax for accessing array elements by their index.
`,
  // problem explanation--> 07
  'as-access-last-array-element': `
### 💡 Problem Breakdown
The task is to get the last element from an array.

### ⚙️ Solution Walkthrough
To get the last element, you need to combine the \`.length\` property with bracket notation. Since arrays are zero-indexed, the last element is always at the index \`length - 1\`.
\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];
const lastFruit = fruits[fruits.length - 1]; // "cherry"
\`\`\`
### 📚 Key Concepts
- **Zero-based Indexing**: Understanding that the last index is one less than the length is crucial.
`,
  // problem explanation--> 08
  'as-array-push': `
### 💡 Problem Breakdown
The \`.push()\` method is a fundamental array method used to add one or more elements to the **end** of an array. It modifies the array in place.

### ⚙️ Solution Walkthrough
The \`.push()\` method is called on the array with the new element as its argument.
\`\`\`javascript
const numbers = [1, 2, 3];
numbers.push(4);
// numbers is now [1, 2, 3, 4]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.push()\`**: A method for adding elements to the end of an array.
- **In-place Modification**: Methods that change the original array are said to modify it "in place".
`,
  // problem explanation--> 09
  'as-array-pop': `
### 💡 Problem Breakdown
The \`.pop()\` method is the counterpart to \`.push()\`. It removes the **last** element from an array and returns that element. It also modifies the array in place.

### ⚙️ Solution Walkthrough
The \`.pop()\` method is called on the array.
\`\`\`javascript
const numbers = [1, 2, 3];
const removedElement = numbers.pop();
// removedElement is 3
// numbers is now [1, 2]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.pop()\`**: A method for removing the last element from an array.
`,
  // problem explanation--> 10
  'as-array-shift': `
### 💡 Problem Breakdown
The \`.shift()\` method removes the **first** element from an array and returns that removed element. This method changes the length of the array.

### ⚙️ Solution Walkthrough
The method is called on an array with no arguments.
\`\`\`javascript
const letters = ['a', 'b', 'c'];
const first = letters.shift();
// first is 'a'
// letters is now ['b', 'c']
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.shift()\`**: A method for removing the first element of an array.
`,
  // problem explanation--> 11
  'as-array-unshift': `
### 💡 Problem Breakdown
The \`.unshift()\` method is the counterpart to \`.shift()\`. It adds one or more elements to the **beginning** of an array and returns the new length of the array.

### ⚙️ Solution Walkthrough
The method is called with the element(s) to add to the front.
\`\`\`javascript
const numbers = [2, 3, 4];
numbers.unshift(1);
// numbers is now [1, 2, 3, 4]
\`\`\`
### 📚 Key Concepts
- **\`Array.prototype.unshift()\`**: A method for adding elements to the beginning of an array.
`,
  // problem explanation--> 12
  'as-array-join': `
### 💡 Problem Breakdown
The \`.join()\` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

### ⚙️ Solution Walkthrough
The method is called on an array. The argument passed to \`.join()\` is the "separator" that will be placed between each element.
\`\`\`javascript
const elements = ['fire', 'air', 'water'];
elements.join();         // "fire,air,water"
elements.join('');       // "fireairwater"
elements.join(' - ');    // "fire - air - water"
\`\`\`
If no separator is provided, a comma is used by default.

### 📚 Key Concepts
- **\`Array.prototype.join()\`**: A method for converting an array into a string.
`,
  // problem explanation--> 13
  'as-string-split': `
### 💡 Problem Breakdown
The \`.split()\` method divides a string into an ordered list of substrings by searching for a separator pattern, puts these substrings into an array, and returns the array.

### ⚙️ Solution Walkthrough
The method is called on a sentence with a space character as the separator.
\`\`\`javascript
const str = "JavaScript is fun";
const words = str.split(' '); // ["JavaScript", "is", "fun"]
\`\`\`
This is a very common way to break a sentence into an array of words for further processing.

### 📚 Key Concepts
- **\`String.prototype.split()\`**: A method for converting a string into an array.
`,
  // problem explanation--> 14
  'as-find-max-in-array': `
### 💡 Problem Breakdown
The task is to find the largest number within an array of numbers.

### ⚙️ Solution Walkthrough
A simple approach is to iterate through the array and keep track of the largest number seen so far.
\`\`\`javascript
function findMax(arr) {
  if (arr.length === 0) return -Infinity; // Or handle error
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
\`\`\`
A more concise way in modern JavaScript is to use the spread syntax with \`Math.max()\`.
\`\`\`javascript
Math.max(...arr);
\`\`\`
### 📚 Key Concepts
- **Iteration**: The process of visiting each element in a collection.
- **Spread Syntax**: A concise way to pass array elements as arguments to a function.
`,
  // problem explanation--> 15
  'as-find-min-in-array': `
### 💡 Problem Breakdown
The task is to find the smallest number within an array of numbers.

### ⚙️ Solution Walkthrough
The logic is symmetrical to finding the maximum. Iterate and keep track of the minimum value seen so far.
\`\`\`javascript
function findMin(arr) {
  if (arr.length === 0) return Infinity; // Or handle error
  let min = arr[0];
  for (const num of arr) { // Using for...of
    if (num < min) {
      min = num;
    }
  }
  return min;
}
\`\`\`
The concise modern approach uses \`Math.min(...arr)\`.

### 📚 Key Concepts
- **Iteration**: The fundamental process for examining all elements in an array.
`,
  // problem explanation--> 16
  'as-sum-array-elements': `
### 💡 Problem Breakdown
The goal is to calculate the sum of all the numbers in a given array.

### ⚙️ Solution Walkthrough
A loop can be used to iterate through the array and accumulate the sum.
\`\`\`javascript
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
\`\`\`
The most idiomatic and concise way to do this is with the \`Array.prototype.reduce()\` method.
\`\`\`javascript
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
\`\`\`
### 📚 Key Concepts
- **Accumulator Pattern**: A common pattern where a variable accumulates a result over an iteration.
- **\`Array.prototype.reduce()\`**: A powerful higher-order function for aggregating array elements into a single value.
`,
  // problem explanation--> 17
  'as-count-characters': `
### 💡 Problem Breakdown
The task is to count the number of times a specific character appears within a string.

### ⚙️ Solution Walkthrough
A simple loop can solve this.
\`\`\`javascript
function countChar(str, char) {
  let count = 0;
  for (const c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}
\`\`\`
A clever, concise alternative is to use the \`.split()\` method.
\`\`\`javascript
str.split(char).length - 1;
\`\`\`
Splitting the string by the character will result in an array with \`N+1\` elements if the character appears \`N\` times.

### 📚 Key Concepts
- **Iteration**: The core of the straightforward solution.
- **String Methods**: Leveraging built-in methods can often lead to more concise code.
`,
  // problem explanation--> 18
  'as-remove-duplicates-from-array': `
### 💡 Problem Breakdown
The task is to take an array that may contain duplicate values and return a new array with all duplicates removed, so that every element appears only once.

### ⚙️ Solution Walkthrough
The most idiomatic and efficient way to solve this in modern JavaScript is to use the \`Set\` object. A \`Set\` is a collection that only stores unique values.
\`\`\`javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
\`\`\`
1.  **`new Set(arr)`**: Creates a new \`Set\` object from the array. The \`Set\` constructor automatically handles the removal of duplicate values.
2.  **`[...]`**: The spread syntax is then used to convert the \`Set\` object (which is iterable) back into an array.

### 📚 Key Concepts
- **\`Set\`**: A data structure for storing a collection of unique values.
- **Spread Syntax**: A concise way to convert an iterable into an array.
`,
  // problem explanation--> 19
  'as-array-slice': `
### 💡 Problem Breakdown
The \`.slice()\` array method returns a **shallow copy** of a portion of an array into a new array object. The original array is not modified.

### ⚙️ Solution Walkthrough
The method takes a start index and an optional end index.
\`\`\`javascript
const letters = ['a', 'b', 'c', 'd', 'e'];
// Extracts from index 1 up to (but not including) index 3
const sliced = letters.slice(1, 3); // ['b', 'c']
\`\`\`
- If the end index is omitted, it slices to the end of the array.
- If called with no arguments (\`letters.slice()\`), it creates a shallow copy of the entire array.

### 📚 Key Concepts
- **\`Array.prototype.slice()\`**: A non-mutating method for creating subarrays.
- **Immutability**: \`.slice()\` is a key tool for working with arrays in an immutable way.
`,
  // problem explanation--> 20
  'as-array-splice': `
### 💡 Problem Breakdown
The \`.splice()\` method is a powerful but complex method that **changes the contents** of an array by removing or replacing existing elements and/or adding new elements in place.

### ⚙️ Solution Walkthrough
The syntax is \`array.splice(start, deleteCount, item1, item2, ...)\`.
\`\`\`javascript
const letters = ['a', 'b', 'e', 'f'];
// At index 2, delete 0 elements, and insert 'c' and 'd'
const deletedElements = letters.splice(2, 0, 'c', 'd');
// letters is now ['a', 'b', 'c', 'd', 'e', 'f']
// deletedElements is [] (an array of what was removed)
\`\`\`
Because it modifies the original array, it can be a source of bugs if not used carefully.

### 📚 Key Concepts
- **\`Array.prototype.splice()\`**: A mutating method for changing an array's contents.
- **In-place Modification**: Methods that change the original array.
`,
  // problem explanation--> 21
  'as-fizzbuzz': `
### 💡 Problem Breakdown
FizzBuzz is a classic programming screening test. The task is to loop through numbers from 1 to N and print:
- "Fizz" for numbers divisible by 3.
- "Buzz" for numbers divisible by 5.
- "FizzBuzz" for numbers divisible by both 3 and 5.
- The number itself for all other cases.

### ⚙️ Solution Walkthrough
A \`for\` loop and \`if/else if/else\` statements are used. The key is to check for the "FizzBuzz" case (divisible by 15) *first*.
\`\`\`javascript
for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
\`\`\`
### 📚 Key Concepts
- **Conditional Logic**: The order of `if` statements is crucial to handle the combined case correctly.
- **Modulo Operator (%)**: The core tool for checking divisibility.
`,
  // problem explanation--> 22
  'as-vowels-counter': `
### 💡 Problem Breakdown
The task is to count the number of vowels (a, e, i, o, u) in a given string, ignoring case.

### ⚙️ Solution Walkthrough
An iterative approach is straightforward.
\`\`\`javascript
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
\`\`\`
A more concise solution uses a regular expression.
\`\`\`javascript
function countVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi); // g=global, i=case-insensitive
  return matches ? matches.length : 0;
}
\`\`\`
### 📚 Key Concepts
- **Iteration**: Looping through each character of a string.
- **Regular Expressions**: A powerful tool for pattern matching in strings.
`,
  // problem explanation--> 23
  'as-find-longest-word': `
### 💡 Problem Breakdown
The goal is to take a sentence, which is a string of space-separated words, and find the word with the greatest number of characters.

### ⚙️ Solution Walkthrough
The solution involves splitting the sentence and iterating to find the longest word.
\`\`\`javascript
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
\`\`\`
This can also be done concisely with the \`.reduce()\` method.

### 📚 Key Concepts
- **String Splitting**: Using `.split(' ')` to create an array of words.
- **Iteration and Comparison**: The core logic for finding the maximum value in a sequence.
`,
  // problem explanation--> 24
  'as-title-case-sentence': `
### 💡 Problem Breakdown
"Title casing" a sentence means capitalizing the first letter of each word and ensuring the rest of the letters are lowercase.

### ⚙️ Solution Walkthrough
The solution uses a chain of array and string methods.
\`\`\`javascript
function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
\`\`\`
1.  **`.toLowerCase()`**: Standardizes the case first.
2.  **`.split(' ')`**: Breaks the sentence into an array of words.
3.  **`.map()`**: Creates a new array by transforming each word. The transformation logic is:
    - **`word.charAt(0).toUpperCase()`**: Gets the first character and capitalizes it.
    - **`word.slice(1)`**: Gets the rest of the word from the second character onwards.
    - These are concatenated to form the title-cased word.
4.  **`.join(' ')`**: Joins the transformed words back into a single string.

### 📚 Key Concepts
- **Method Chaining**: A powerful and expressive way to perform a sequence of data transformations.
`,
  // problem explanation--> 25
  'as-array-map-double': `
### 💡 Problem Breakdown
The \`Array.prototype.map()\` method is a higher-order function that creates a **new array** populated with the results of calling a provided function on every element in the calling array. This problem uses it to double each number.

### ⚙️ Solution Walkthrough
The `.map()` method is called on the array, and it is given a callback function that performs the doubling.
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled is [2, 4, 6, 8]
// numbers is still [1, 2, 3, 4]
\`\`\`
The callback function `num => num * 2` is executed for each element, and the return value of each execution becomes an element in the new `doubled` array.

### 📚 Key Concepts
- **\`Array.prototype.map()\`**: A fundamental method in functional programming for transforming arrays.
- **Immutability**: `.map()` does not change the original array; it returns a new one.
`,
  // problem explanation--> 26
  'as-array-filter-evens': `
### 💡 Problem Breakdown
The \`Array.prototype.filter()\` method creates a **new array** with all elements that pass the test implemented by the provided function. The callback function must return a "truthy" value to keep the element, or a "falsy" value to discard it.

### ⚙️ Solution Walkthrough
The `.filter()` method is called with a predicate function that checks for evenness.
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
// evens is [2, 4, 6]
\`\`\`
The callback `num => num % 2 === 0` returns `true` for even numbers and `false` for odd numbers. Only the elements for which the callback returns `true` are included in the new `evens` array.

### 📚 Key Concepts
- **\`Array.prototype.filter()\`**: A core functional method for creating a subset of an array based on a condition.
- **Predicate Function**: A function that returns a boolean value, used as a test.
`,
  // problem explanation--> 27
  'as-array-reduce-sum': `
### 💡 Problem Breakdown
The \`Array.prototype.reduce()\` method is a powerful higher-order function that executes a "reducer" function on each element of the array, resulting in a single output value. It's used for "reducing" an array to a single value, like a sum, product, or a flattened object.

### ⚙️ Solution Walkthrough
The `.reduce()` method is used to calculate a sum.
\`\`\`javascript
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The '0' is the initial value
// sum is 100
\`\`\`
1.  **Reducer Callback**: `(accumulator, currentValue) => accumulator + currentValue` is the function that performs the aggregation.
2.  **`accumulator`**: The value resulting from the previous callback invocation (or the `initialValue` on the first call).
3.  **`currentValue`**: The current element being processed in the array.
4.  **`initialValue`**: The value to use as the first argument to the first call of the callback.

### 📚 Key Concepts
- **\`Array.prototype.reduce()\`**: A versatile method for array aggregation.
`,
  // problem explanation--> 28
  'as-array-find': `
### 💡 Problem Breakdown
The \`Array.prototype.find()\` method returns the **value** of the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, \`undefined\` is returned.

### ⚙️ Solution Walkthrough
The `.find()` method is used to find the first number greater than 10.
\`\`\`javascript
const numbers = [5, 8, 12, 4];
const found = numbers.find(num => num > 10);
// found is 12
\`\`\`
The method stops searching as soon as it finds a matching element, making it efficient.

### 📚 Key Concepts
- **\`Array.prototype.find()\`**: A method for finding the first element that matches a condition.
- **Short-circuiting**: The method does not necessarily visit every element.
`,
  // problem explanation--> 29
  'as-array-every': `
### 💡 Problem Breakdown
The \`Array.prototype.every()\` method tests whether **all elements** in the array pass the test implemented by the provided function. It returns a boolean value.

### ⚙️ Solution Walkthrough
The method checks if all numbers are positive.
\`\`\`javascript
const numbers = [1, 5, 9, 12];
const allPositive = numbers.every(num => num > 0); // true
\`\`\`
As soon as the predicate function returns \`false\` for any element, \`.every()\` immediately returns \`false\` and stops testing the rest of the elements (short-circuiting).

### 📚 Key Concepts
- **\`Array.prototype.every()\`**: A method for universal quantification ("for all").
- **Short-circuiting**: Provides efficiency by stopping at the first failure.
`,
  // problem explanation--> 30
  'as-array-some': `
### 💡 Problem Breakdown
The \`Array.prototype.some()\` method tests whether **at least one element** in the array passes the test implemented by the provided function. It returns a boolean value.

### ⚙️ Solution Walkthrough
The method checks if any number is negative.
\`\`\`javascript
const numbers = [1, 5, -9, 12];
const hasNegative = numbers.some(num => num < 0); // true
\`\`\`
As soon as the predicate function returns \`true\` for any element, \`.some()\` immediately returns \`true\` and stops testing the rest of the elements (short-circuiting).

### 📚 Key Concepts
- **\`Array.prototype.some()\`**: A method for existential quantification ("there exists").
- **Short-circuiting**: Provides efficiency by stopping at the first success.
`,
  // problem explanation--> 31
  'as-array-sort-numbers': `
### 💡 Problem Breakdown
The \`Array.prototype.sort()\` method sorts the elements of an array in place. By default, it sorts elements by converting them to strings and comparing their UTF-16 code unit values. This leads to incorrect results for numbers (e.g., 10 comes before 2). To sort numbers correctly, you must provide a **compare function**.

### ⚙️ Solution Walkthrough
A compare function \`(a, b) => a - b\` is provided to sort numbers in ascending order.
\`\`\`javascript
const numbers = [10, 5, 8, 2, 1];
numbers.sort((a, b) => a - b);
// numbers is now [1, 2, 5, 8, 10]
\`\`\`
- If `a - b` returns a negative value, `a` comes before `b`.
- If `a - b` returns a positive value, `b` comes before `a`.
- If it returns 0, their order is unchanged.

### 📚 Key Concepts
- **\`Array.prototype.sort()\`**: A mutating method for sorting arrays.
- **Compare Function**: Essential for correctly sorting numbers or custom objects.
`,
  // problem explanation--> 32
  'as-array-sort-strings': `
### 💡 Problem Breakdown
When the \`.sort()\` method is called on an array of strings without a compare function, it sorts them correctly in lexicographical (dictionary) order.

### ⚙️ Solution Walkthrough
`.sort()` is called with no arguments.
\`\`\`javascript
const fruits = ['cherry', 'apple', 'banana'];
fruits.sort();
// fruits is now ['apple', 'banana', 'cherry']
\`\`\`
Note that the default sort is case-sensitive, and uppercase letters come before lowercase letters.

### 📚 Key Concepts
- **Lexicographical Sort**: The default sorting behavior for strings.
`,
  // problem explanation--> 33
  'as-anagram-check': `
### 💡 Problem Breakdown
An anagram is a word formed by rearranging the letters of another. The task is to check if two strings are anagrams. If they are, they must contain the exact same characters with the exact same frequencies.

### ⚙️ Solution Walkthrough
The simplest approach is to create a "canonical" (standard) representation for both strings and compare them. Sorting the characters of the strings is a great way to do this.
\`\`\`javascript
function isAnagram(str1, str2) {
  const clean = s => s.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
  return clean(str1) === clean(str2);
}
\`\`\`
Another common solution is to use a frequency map to count the characters in the first string, and then loop through the second string, decrementing the counts.

### 📚 Key Concepts
- **Canonical Representation**: Transforming data into a standard form to make comparison easy.
`,
  // problem explanation--> 34
  'as-max-char': `
### 💡 Problem Breakdown
The goal is to find the character that appears most frequently in a string.

### ⚙️ Solution Walkthrough
A hash map (a plain object or \`Map\`) is the ideal data structure for this problem.
1.  **Build Frequency Map**: Create an empty map. Iterate through the string. For each character, increment its count in the map.
2.  **Find Max**: Iterate through the map's key-value pairs. Keep track of the character with the highest count seen so far.
3.  Return the character that had the maximum count.
\`\`\`javascript
function maxChar(str) {
  const charMap = {};
  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  let max = 0, maxChar = '';
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
\`\`\`
### 📚 Key Concepts
- **Frequency Counting**: A common pattern for character-based string problems.
`,
  // problem explanation--> 35
  'as-array-chunking': `
### 💡 Problem Breakdown
The task is to take a large array and split it into a new array of smaller, evenly-sized subarrays (chunks).

### ⚙️ Solution Walkthrough
An iterative approach works well.
\`\`\`javascript
function chunk(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}
\`\`\`
1.  **Initialize**: Create an empty \`chunked\` array to store the results.
2.  **Loop**: Use a \`for\` loop that increments its counter \`i\` by the \`size\` of the chunk in each step.
3.  **Slice**: In each iteration, use `.slice(i, i + size)` to extract the next chunk from the original array.
4.  **Push**: Push this new chunk into the \`chunked\` array.

### 📚 Key Concepts
- **Array Slicing**: The `.slice()` method is perfect for extracting portions of an array.
`,
  // problem explanation--> 36
  'as-move-zeroes': `
### 💡 Problem Breakdown
The task is to modify an array in-place by moving all the zero elements to the end, while preserving the relative order of the non-zero elements.

### ⚙️ Solution Walkthrough
An efficient solution uses a single loop and a "write pointer" to place non-zero elements.
1.  Initialize a \`writeIndex = 0\`. This pointer keeps track of the position where the next non-zero element should be placed.
2.  Iterate through the array with a `readIndex`.
3.  If the element at `readIndex` is **not** zero:
    - Swap the elements at `writeIndex` and `readIndex`.
    - Increment `writeIndex`.
4.  After this loop, all non-zero elements have been moved to the front, and the zeroes have been moved to the back.

### 📚 Key Concepts
- **In-place Algorithm**: An algorithm that transforms the input data without using significant extra space.
- **Two-Pointer Technique**: The `readIndex` and `writeIndex` act as two pointers to manage the rearrangement.
`,
  // problem explanation--> 37
  'as-array-flat': `
### 💡 Problem Breakdown
The \`Array.prototype.flat()\` method (ES2019) is a built-in way to create a new array with all sub-array elements concatenated into it recursively up to a specified depth.

### ⚙️ Solution Walkthrough
The `.flat()` method is called on a nested array.
\`\`\`javascript
const nested = [1, [2, 3], [4, [5]]];
nested.flat();       // [1, 2, 3, 4, [5]] (default depth is 1)
nested.flat(2);      // [1, 2, 3, 4, 5]
nested.flat(Infinity); // Flattens completely, regardless of depth
\`\`\`
The method takes an optional `depth` argument that specifies how deep a nested array structure should be flattened.

### 📚 Key Concepts
- **\`Array.prototype.flat()\`**: A modern, built-in method for flattening arrays.
`,
  // problem explanation--> 38
  'as-array-intersection': `
### 💡 Problem Breakdown
The intersection of two sets (or arrays) is the set of elements that are common to both. The task is to find these common elements.

### ⚙️ Solution Walkthrough
Using a `Set` provides a very efficient solution.
\`\`\`javascript
function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = [];
  for (const item of arr2) {
    if (set1.has(item)) {
      result.push(item);
    }
  }
  return [...new Set(result)]; // Ensure unique results
}
\`\`\`
1.  **Create a Set**: Convert the first array into a \`Set\` for fast O(1) average time lookups.
2.  **Iterate and Check**: Loop through the second array. For each element, check if it `.has()` been seen in the `set1`.
3.  **Collect**: If it exists in the set, it's part of the intersection, so add it to the result.

A concise version would use `.filter()`: `arr2.filter(item => set1.has(item))`.

### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for efficiently checking for the existence of an element.
`,
  // problem explanation--> 39
  'as-array-union': `
### 💡 Problem Breakdown
The union of two sets (or arrays) is the set of all distinct elements from both.

### ⚙️ Solution Walkthrough
A `Set` is again the perfect tool for this, as it automatically handles uniqueness.
\`\`\`javascript
function union(arr1, arr2) {
  const combined = [...arr1, ...arr2]; // Combine both arrays
  return [...new Set(combined)];      // Create a Set to get unique values, then convert back to array
}
\`\`\`
This concise solution leverages the spread syntax and the `Set` constructor to achieve the result in a very readable way.

### 📚 Key Concepts
- **\`Set\`**: The core data structure for automatically handling uniqueness.
- **Spread Syntax**: Used to combine the arrays and to convert the final `Set` back to an array.
`,
  // problem explanation--> 40
  'as-is-isogram': `
### 💡 Problem Breakdown
An isogram is a word with no repeating letters. The task is to check if a string is an isogram, ignoring case.

### ⚙️ Solution Walkthrough
A `Set` can be used to solve this very concisely.
\`\`\`javascript
function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  // If the size of the Set of characters is equal to the string's length,
  // it means there were no duplicates.
  return new Set(lowerStr).size === lowerStr.length;
}
\`\`\`
### 📚 Key Concepts
- **\`Set\`**: Used to get a collection of the unique characters in the string.
`,
  // problem explanation--> 41
  'as-group-anagrams': `
### 💡 Problem Breakdown
The task is to take an array of strings and group all the anagrams together. For example, \`["eat", "tea", "ate"]\` should be in one group.

### ⚙️ Solution Walkthrough
The solution uses a hash map where the key is a "canonical" representation of a word, and the value is the list of anagrams for that key. A sorted version of a word makes a perfect canonical key.
1.  **Initialize Map**: Create an empty \`Map\`.
2.  **Iterate Strings**: Loop through each string in the input array.
3.  **Create Key**: For each string, create its canonical key by splitting it into characters, sorting them, and joining them back. (e.g., "tea" -> "aet").
4.  **Group**:
    - If the key doesn't exist in the map, create a new entry with an empty array.
    - Push the original string into the array for that key.
5.  **Return**: The values of the map will be the arrays of grouped anagrams.

### 📚 Key Concepts
- **Hash Map (\`Map\`)**: The core data structure for grouping items.
- **Canonical Representation**: Using a sorted string as a unique key for all its anagrams.
`,
  // problem explanation--> 42
  'as-longest-substring-no-repeats': `
### 💡 Problem Breakdown
This is a classic "sliding window" problem. The goal is to find the length of the longest contiguous substring within a given string that contains no repeating characters.

### ⚙️ Solution Walkthrough
A sliding window approach with a \`Set\` is efficient.
1.  **Initialize**: Set \`left = 0\`, \`maxLength = 0\`, and an empty \`Set\` called \`seen\` to store the characters in the current window.
2.  **Expand Window**: Loop through the string with a \`right\` pointer from 0 to the end.
3.  **Check for Duplicates**: For each character \`str[right]\`, use a \`while\` loop to check if it's already in the \`seen\` set.
    - If it is, it means we have a duplicate. We must shrink the window from the left by deleting \`str[left]\` from the \`seen\` set and incrementing \`left\` until the duplicate is removed.
4.  **Add Character**: Add the current character \`str[right]\` to the \`seen\` set.
5.  **Update Max Length**: The current window \`[left, right]\` is now guaranteed to have no duplicates. Update \`maxLength = Math.max(maxLength, right - left + 1)\`.
6.  Return \`maxLength\`.

### 📚 Key Concepts
- **Sliding Window**: An efficient technique for problems involving contiguous subarrays or substrings.
- **`Set`**: Provides O(1) average time complexity for adding, deleting, and checking for characters, making the overall solution efficient (O(n)).
`,
  // problem explanation--> 43
  'as-two-sum': `
### 💡 Problem Breakdown
This is a very common interview question. Given an array of integers, you need to find the indices of two numbers that add up to a specific target value.

### ⚙️ Solution Walkthrough
A brute-force solution would use nested loops, which is O(n^2). A much more efficient O(n) solution uses a hash map.
1.  **Initialize Map**: Create an empty \`Map\` to store numbers we've seen and their indices.
2.  **Loop**: Iterate through the array with index \`i\`.
3.  **Calculate Complement**: For each number \`nums[i]\`, calculate the "complement" needed to reach the target: \`complement = target - nums[i]\`.
4.  **Check Map**: Check if this \`complement\` already exists as a key in the map.
    - If it does, we have found our pair. Return the index of the complement (which is \`map.get(complement)\`) and the current index \`i\`.
5.  **Store in Map**: If the complement is not found, store the current number and its index in the map: \`map.set(nums[i], i)\`. This makes it available for future iterations.

### 📚 Key Concepts
- **Hash Map (\`Map\`)**: The key to the O(n) solution, providing fast lookups for the complement of each number.
`,
  // problem explanation--> 44
  'as-container-with-most-water': `
### 💡 Problem Breakdown
You are given an array of heights representing vertical lines. The goal is to find two lines that, along with the x-axis, form a container that can hold the most water. The area of a container is \`width * height\`. The width is the distance between the lines, and the height is limited by the shorter of the two lines.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1.  **Initialize**: Set a \`left\` pointer at the beginning and a \`right\` pointer at the end of the array. Initialize \`maxArea = 0\`.
2.  **Loop**: Use a \`while\` loop that continues as long as \`left < right\`.
3.  **Calculate Area**:
    - \`width = right - left\`.
    - \`height = Math.min(heights[left], heights[right])\`.
    - \`area = width * height\`.
    - Update \`maxArea = Math.max(maxArea, area)\`.
4.  **Move Pointer**: This is the key insight. To have a chance of finding a larger area, we must move the pointer that points to the *shorter* of the two walls. Moving the taller wall's pointer will always result in a smaller or equal area, because the width will decrease and the height will be limited by the same short wall.
    - If \`heights[left] < heights[right]\`, increment \`left\`.
    - Otherwise, decrement \`right\`.
5.  Return \`maxArea\`.

### 📚 Key Concepts
- **Two-Pointer Technique**: The core of the efficient solution. The logic for which pointer to move is crucial.
`,
  // problem explanation--> 45
  'as-sliding-window-max-sum': `
### 💡 Problem Breakdown
This is a classic sliding window problem. The goal is to find the contiguous subarray of a fixed size \`k\` that has the highest sum.

### ⚙️ Solution Walkthrough
A sliding window approach is efficient, taking O(n) time.
1. **Initial Window**: Calculate the sum of the first \`k\` elements. This is the initial \`maxSum\`.
2. **Slide**: Loop from the \`k\`-th element to the end of the array.
3. In each iteration, "slide" the window one position to the right by:
   - Adding the new element at the end of the window to the running `sum`.
   - Subtracting the element that just left the window from the beginning.
4. **Update Max**: After each slide, compare the new window's `sum` with `maxSum` and update `maxSum` if it's larger.
5. Return the final `maxSum`.

### 📚 Key Concepts
- **Sliding Window**: The core technique for efficiently processing contiguous subarrays.
`,
  // problem explanation--> 46
  'as-kadanes-algorithm': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem: find the contiguous subarray within a one-dimensional array of numbers that has the largest sum. Kadane's Algorithm solves this in O(n) time.

### ⚙️ Solution Walkthrough
The algorithm uses a single pass through the array. It keeps track of two variables:
1. `maxEndingHere`: The maximum sum of a subarray ending at the current position.
2. `maxSoFar`: The overall maximum sum found anywhere in the array so far.

The logic for each element `num` is:
- `maxEndingHere = Math.max(num, maxEndingHere + num)`. This decides whether it's better to start a new subarray at the current element or to extend the previous subarray.
- `maxSoFar = Math.max(maxSoFar, maxEndingHere)`. This updates the overall best sum found.
\`\`\`javascript
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
\`\`\`
### 📚 Key Concepts
- **Kadane's Algorithm**: A dynamic programming approach where the solution for the current position is based on the solution for the previous position.
- **Dynamic Programming**: An optimization technique that solves complex problems by breaking them down into simpler subproblems.
`,
  // problem explanation--> 47
  'as-3sum': `
### 💡 Problem Breakdown
This is a common interview question that builds upon the "Two Sum" problem. The goal is to find all *unique* triplets `[nums[i], nums[j], nums[k]]` in an array that sum up to zero.

### ⚙️ Solution Walkthrough
An efficient solution involves sorting the array first and then using a two-pointer approach.
1. **Sort**: Sort the input array `nums`. This makes it easy to handle duplicates and use the two-pointer technique.
2. **Outer Loop**: Loop through the array with an index `i`. This `nums[i]` will be the first number in a potential triplet.
3. **Handle Duplicates**: If `nums[i]` is the same as `nums[i-1]`, skip it to avoid generating duplicate triplets.
4. **Two-Pointer Approach**: For each `nums[i]`, use a `left` pointer (starting at `i+1`) and a `right` pointer (starting at the end of the array) to find two other numbers that sum to `-nums[i]`.
   - While `left < right`:
     - If the sum is too small, move `left` pointer up.
     - If the sum is too large, move `right` pointer down.
     - If the sum is zero, you've found a triplet. Add it to the results. Then, move both pointers inward, making sure to skip any duplicate numbers to avoid duplicate triplets.

### 📚 Key Concepts
- **Sorting**: A crucial preprocessing step that enables the efficient two-pointer approach and duplicate handling.
- **Two-Pointer Technique**: Used within the main loop to efficiently search for the remaining two numbers.
`,
  // problem explanation--> 48
  'as-product-of-array-except-self': `
### 💡 Problem Breakdown
The task is to create a new array where each element `output[i]` is the product of all elements in the original array *except* for the one at index `i`. A key constraint is often to do this without using the division operator.

### ⚙️ Solution Walkthrough
A two-pass approach is very efficient and meets the no-division constraint.
1. **Initialize**: Create a `result` array of the same size, filled with 1s.
2. **Left-to-Right Pass (Prefix Products)**:
   - Initialize a `prefix` product variable to 1.
   - Loop through the array from left to right.
   - For each index `i`, set `result[i] = prefix`.
   - Then, update `prefix` by multiplying it with `nums[i]`.
   - After this pass, `result[i]` will contain the product of all elements to the left of `i`.
3. **Right-to-Left Pass (Postfix Products)**:
   - Initialize a `postfix` product variable to 1.
   - Loop through the array from right to left.
   - For each index `i`, multiply the existing `result[i]` by `postfix`.
   - Then, update `postfix` by multiplying it with `nums[i]`.
4. Return the `result` array.

### 📚 Key Concepts
- **Prefix/Postfix Products**: The core idea is that the desired product at index `i` is `(product of all elements to the left) * (product of all elements to the right)`. The two-pass approach calculates these efficiently.
`,
  // problem explanation--> 49
  'as-valid-parentheses': `
### 💡 Problem Breakdown
The task is to check if a string containing only brackets `()[]{}` is "valid". A string is valid if:
1. Open brackets are closed by the same type of bracket.
2. Open brackets are closed in the correct order.

### ⚙️ Solution Walkthrough
A **Stack** is the classic data structure for solving this problem.
1. **Initialize**: Create an empty `stack` and a `map` to store the matching pairs (e.g., `map = { '(': ')', '[': ']', '{': '}' }`).
2. **Loop**: Iterate through each character of the string.
3. **Logic**:
   - If the character is an **opening** bracket (a key in our map), push it onto the stack.
   - If the character is a **closing** bracket:
     - The stack cannot be empty (there must be an opening bracket to match). If it is, return `false`.
     - Pop the last opening bracket from the stack.
     - Check if the current closing bracket is the correct match for the popped opening bracket (using the map). If not, return `false`.
4. **Final Check**: After the loop, if the stack is empty, it means every opening bracket had a matching closing bracket. If the stack is not empty, it means there are unclosed opening brackets. Return `stack.length === 0`.

### 📚 Key Concepts
- **Stack (LIFO)**: The Last-In, First-Out nature of a stack is perfect for matching nested pairs, as the last opening bracket must be the first one to be closed.
`,
  // problem explanation--> 50
  'as-spiral-matrix-traversal': `
### 💡 Problem Breakdown
The task is to traverse a 2D array (matrix) in a spiral pattern, starting from the top-left corner and moving inward, and return the elements in a 1D array in the order they were visited.

### ⚙️ Solution Walkthrough
The solution uses four pointers to keep track of the boundaries of the current layer of the spiral.
1. **Initialize**:
   - Four boundary pointers: `top`, `bottom`, `left`, `right`.
   - An empty `result` array.
2. **Loop**: Use a `while` loop that continues as long as `top <= bottom` and `left <= right`.
3. **Traverse Layer**: Inside the loop, traverse the four sides of the current layer:
   - **Go Right**: Loop from `left` to `right`, adding `matrix[top][i]` to the result. Then, move the `top` boundary down (`top++`).
   - **Go Down**: Loop from `top` to `bottom`, adding `matrix[i][right]` to the result. Then, move the `right` boundary in (`right--`).
   - **Go Left**: Loop from `right` to `left` (backwards), adding `matrix[bottom][i]` to the result. Then, move the `bottom` boundary up (`bottom--`). Check `top <= bottom` before this step to handle single-row matrices.
   - **Go Up**: Loop from `bottom` to `top` (backwards), adding `matrix[i][left]` to the result. Then, move the `left` boundary in (`left++`). Check `left <= right` before this step to handle single-column matrices.
4. Return `result`.

### 📚 Key Concepts
- **Boundary Pointers**: The four pointers effectively shrink the matrix layer by layer.
- **Matrix Traversal**: A common pattern for processing 2D data structures.
`,
  // problem explanation--> 51
  'as-rotate-matrix': `
### 💡 Problem Breakdown
The task is to rotate an N x N matrix by 90 degrees clockwise, *in-place*.

### ⚙️ Solution Walkthrough
A clever two-step process can achieve this in-place.
1. **Transpose the Matrix**: First, transpose the matrix. A transposition swaps the element at `(r, c)` with the element at `(c, r)`. This can be done by iterating through the upper triangle of the matrix and swapping `matrix[r][c]` with `matrix[c][r]`.
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
- **In-place Algorithm**: The modification is done directly on the input matrix.
`,
  // problem explanation--> 52
  'as-set-matrix-zeroes': `
### 💡 Problem Breakdown
The task is to modify a matrix in-place. If any cell in the matrix is 0, its entire row and column should be set to 0.

### ⚙️ Solution Walkthrough
A naive approach of immediately setting rows/columns to zero when a zero is found will cause issues, as these new zeros will then cause other rows/columns to be zeroed out. An O(m+n) space solution is straightforward:
1. **First Pass (Identify)**: Create two `Set`s, `zeroRows` and `zeroCols`. Iterate through the entire matrix. If `matrix[r][c]` is 0, add `r` to `zeroRows` and `c` to `zeroCols`.
2. **Second Pass (Modify)**: Iterate through the matrix again. If the current row `r` is in the `zeroRows` set or the current column `c` is in the `zeroCols` set, set `matrix[r][c]` to 0.

An O(1) space solution is also possible. It involves using the first row and first column of the matrix itself as storage to mark which rows/columns need to be zeroed, with a couple of extra variables to handle the state of the first row/column themselves.

### 📚 Key Concepts
- **Two-Pass Algorithm**: A common pattern where the first pass gathers information and the second pass uses that information to perform modifications.
`,
  // problem explanation--> 53
  'as-word-search-matrix': `
### 💡 Problem Breakdown
This is a classic backtracking problem. Given a grid of characters, you need to find if a given `word` can be formed by starting at any cell and moving to adjacent cells (up, down, left, right), without reusing a cell in the same path.

### ⚙️ Solution Walkthrough
The solution uses Depth-First Search (DFS) with backtracking.
1. **Outer Loops**: Iterate through every cell `(r, c)` in the grid. If a cell matches the first letter of the `word`, start a DFS from there.
2. **DFS Helper Function `dfs(r, c, k)`**: This recursive function checks if the rest of the word (from index `k`) can be found starting at `(r, c)`.
   - **Base Cases**:
     - If `(r, c)` is out of bounds or the character at `grid[r][c]` doesn't match `word[k]`, this path fails, so return `false`.
     - If `k` reaches the end of the word, it means we've successfully matched all characters, so return `true`.
   - **Backtracking**:
     - To avoid reusing a cell, temporarily "mark" the current cell `(r, c)` as visited (e.g., by changing its character to a special symbol like `#`).
     - Make recursive calls to `dfs` for all four neighbors. If any of these calls return `true`, it means a path was found, so return `true`.
     - **"Un-mark"** the cell by restoring its original character. This is the crucial backtracking step, allowing the cell to be used in other potential paths.
   - If none of the recursive calls find a path, return `false`.

### 📚 Key Concepts
- **Backtracking**: The core algorithm for exploring all possible paths in the grid.
- **Depth-First Search (DFS)**: The recursive structure of the search.
`,
  // problem explanation--> 54
  'as-minimum-window-substring': `
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
  // problem explanation--> 55
  'as-trapping-rain-water': `
### 💡 Problem Breakdown
This is a challenging but classic interview problem. Given an array of heights representing an elevation map, you need to calculate the total volume of rainwater that can be trapped between the bars after a rainfall. The amount of water above any bar is limited by the height of the shortest of the two tallest walls to its left and right.

### ⚙️ Solution Walkthrough
An efficient O(n) solution uses the two-pointer technique.
1.  **Initialize**: Set a \`left\` pointer at the beginning and a \`right\` pointer at the end. Initialize \`leftMax\` and \`rightMax\` heights to 0. These will track the tallest bar seen so far from each side.
2.  **Loop**: Use a \`while\` loop that continues as long as \`left < right\`.
3.  **Process Shorter Wall**:
    - If \`heights[left]\` is shorter than \`heights[right]\`, the water level at this position is determined by \`leftMax\`. Update \`leftMax\` if the current wall is taller. The water trapped is \`leftMax - heights[left]\`. Add this to the total. Move the \`left\` pointer inward.
    - Otherwise, do the symmetric operations for the right side: update \`rightMax\`, calculate trapped water (\`rightMax - heights[right]\`), and move the \`right\` pointer inward.
4.  Return the total water after the loop finishes.

### 📚 Key Concepts
- **Two-Pointer Technique**: The key insight is that the water level at any point is limited by the shorter of the maximum walls to its left and right. The two-pointer approach efficiently tracks these maximums as it moves inward.
`,
  // problem explanation--> 56
  'as-text-justification': `
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
  // problem explanation--> 57
  'as-roman-to-integer': `
### 💡 Problem Breakdown
The task is to convert a Roman numeral string (e.g., "MCMXCIV") into its integer equivalent (1994). The key challenge is handling the subtractive notation where a smaller value before a larger one means subtraction (e.g., "IV" is 4, not 6).

### ⚙️ Solution Walkthrough
A single pass through the string from left to right can solve this.
1. Create a map of Roman numeral characters to their integer values.
2. Initialize `total` to 0.
3. Loop through the string. For each character `current`, also look at the next character `next`.
   - If `next` exists and its value is greater than `current`'s value, it's a subtractive case. Add `next_value - current_value` to the total and skip the next character (increment the loop counter by an extra 1).
   - Otherwise, just add the `current` value to the total.

A simpler logic is to iterate left-to-right and if `current < next`, subtract `current` from the total. Otherwise, add `current`.
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
  // problem explanation--> 58
  'as-integer-to-roman': `
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
  // problem explanation--> 59
  'as-longest-common-prefix': `
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
  // problem explanation--> 60
  'as-implement-strstr': `
### 💡 Problem Breakdown
This problem asks you to implement the functionality of the standard library function `strstr()` (or `.indexOf()` in JavaScript). You need to find the first occurrence of a "needle" string within a "haystack" string and return its starting index. If the needle is not found, return -1.

### ⚙️ Solution Walkthrough
The most straightforward solution is to use the built-in `String.prototype.indexOf()` method, as it does exactly this.
\`\`\`javascript
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}
\`\`\`
If you were to implement it manually, you would loop through the `haystack` and, for each position, check if the substring starting at that position matches the `needle`.

### 📚 Key Concepts
- **String Searching**: A fundamental string operation.
- **Built-in Methods**: Knowing and using the standard library effectively is a key skill.
`,
  // problem explanation--> 61
  'as-merge-sorted-arrays': `
### 💡 Problem Breakdown
You are given two sorted arrays, `nums1` and `nums2`. `nums1` has enough empty space at the end to hold all the elements of `nums2`. The task is to merge `nums2` into `nums1` to create a single sorted array, modifying `nums1` in-place.

### ⚙️ Solution Walkthrough
A common mistake is to merge from the beginning, which requires shifting elements constantly. The efficient solution is to merge from the **end** of the arrays backwards.
1. **Initialize Pointers**:
   - `i`: points to the last *actual* element in `nums1` (`m-1`).
   - `j`: points to the last element in `nums2` (`n-1`).
   - `k`: points to the last position in the combined `nums1` array (`m+n-1`).
2. **Loop**: Use a `while` loop that continues as long as there are elements left in `nums2` (`j >= 0`).
3. **Compare and Place**: In each iteration, compare `nums1[i]` and `nums2[j]`.
   - Place the larger of the two at `nums1[k]`.
   - Decrement the pointer (`i` or `j`) of the element you just placed.
   - Decrement `k`.
4. The loop automatically handles cases where one array is exhausted before the other.

### 📚 Key Concepts
- **Two-Pointer Technique**: The three pointers manage the in-place merge efficiently.
- **In-place Merge**: Modifying the array from the end avoids the need for extra space or costly element shifting.
`,
  // problem explanation--> 62
  'as-remove-duplicates-sorted-array-ii': `
### 💡 Problem Breakdown
This is a variation of the "Remove Duplicates" problem. Given a sorted array, you must remove duplicates in-place such that each unique element appears at most *twice*.

### ⚙️ Solution Walkthrough
An efficient solution uses a "write pointer" (`i`) to manage the modified part of the array.
1. **Edge Case**: If the array has 2 or fewer elements, no duplicates need to be removed.
2. **Initialize Write Pointer**: Set `i = 2`.
3. **Loop**: Iterate through the array with a "read pointer" `j`, starting from index 2.
4. **Check Condition**: The core logic is to check if the current element `nums[j]` is different from the element at `i-2`. If `nums[j] !== nums[i-2]`, it means we are not creating a sequence of more than two identical numbers.
   - If the condition is true, it's safe to place `nums[j]` at the `i`-th position: `nums[i] = nums[j]`.
   - Increment `i`.
5. The final value of `i` is the new length of the array.

### 📚 Key Concepts
- **Two-Pointer Technique**: The read (`j`) and write (`i`) pointers manage the in-place modification.
`,
  // problem explanation--> 63
  'as-plus-one': `
### 💡 Problem Breakdown
You are given an array of digits representing a large integer. The task is to increment this integer by one and return the new array of digits.

### ⚙️ Solution Walkthrough
The solution is to iterate through the array from right to left, simulating grade-school addition with a "carry".
1. Loop from the last digit to the first.
2. In each iteration:
   - If the current digit is less than 9, simply increment it by one and return the array immediately. The process is done.
   - If the current digit is 9, set it to 0 and continue the loop to handle the "carry-over" to the next digit to the left.
3. **Edge Case**: If the loop finishes (meaning all digits were 9, like in `[9, 9]`), it means you need to add a new leading 1. Use `.unshift(1)` to add a 1 to the beginning of the array.

### 📚 Key Concepts
- **Array Manipulation**: The problem is solved by iterating and modifying an array in-place.
- **Edge Case Handling**: The case where all digits are 9 needs to be handled specifically.
`,
  // problem explanation--> 64
  'as-length-of-last-word': `
### 💡 Problem Breakdown
The task is to find the length of the last word in a string that contains words and spaces.

### ⚙️ Solution Walkthrough
A simple solution uses built-in string methods.
1. **`.trim()`**: Use the `.trim()` method on the string to remove any leading or trailing spaces. This handles cases like `"  hello world  "`.
2. **`.split(' ')`**: Use the `.split(' ')` method to break the string into an array of words.
3. **Access Last Word**: Get the last element from the resulting array.
4. **`.length`**: Return the length of that last word.
\`\`\`javascript
function lengthOfLastWord(s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
}
\`\`\`
### 📚 Key Concepts
- **String Methods**: Leveraging built-in functions like `trim` and `split` makes the solution concise.
`,
  // problem explanation--> 65
  'as-rotate-array': `
### 💡 Problem Breakdown
The task is to rotate the elements of an array to the right by `k` steps in-place. For example, rotating `[1,2,3,4,5]` by 2 steps results in `[4,5,1,2,3]`.

### ⚙️ Solution Walkthrough
A clever and efficient in-place solution uses three array reversals.
1. **Normalize `k`**: First, take `k` modulo the array's length to handle cases where `k` is larger than the array size.
2. **Reverse the entire array**: Reverse all elements. `[1,2,3,4,5]` becomes `[5,4,3,2,1]`.
3. **Reverse the first `k` elements**: Reverse the subarray from index 0 to `k-1`. `[5,4,3,2,1]` becomes `[4,5,3,2,1]`.
4. **Reverse the remaining elements**: Reverse the subarray from index `k` to the end. `[4,5,3,2,1]` becomes `[4,5,1,2,3]`.
This three-step reversal process correctly rotates the array.

### 📚 Key Concepts
- **In-place Algorithm**: The solution modifies the array directly, achieving O(1) extra space complexity.
- **Array Reversal**: The core operation used to achieve the rotation.
`,
  // problem explanation--> 66
  'as-longest-palindromic-substring': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. The task is to find the longest contiguous substring of a given string that is also a palindrome.

### ⚙️ Solution Walkthrough
A common and intuitive approach is "Expand from Center."
1. Iterate through every character in the string. For each character, treat it as the potential "center" of a palindrome.
2. **Two Cases**: A palindrome can have an odd length (like "racecar", centered at 'e') or an even length (like "aabbaa", centered between the two 'b's). So, for each index `i`, we need to check both cases:
   - **Odd Length**: Expand outwards from the center `i`.
   - **Even Length**: Expand outwards from the "center" `i` and `i+1`.
3. **Expand Function**: Create a helper function that takes a center `left` and `right` index. Use a `while` loop to expand outwards as long as the pointers are in bounds and the characters match. Return the palindromic substring found.
4. **Track Longest**: In the main loop, keep track of the longest palindromic substring found so far.

### 📚 Key Concepts
- **Dynamic Programming**: While "Expand from Center" is more intuitive, a formal DP solution with a 2D table is also possible.
- **Palindrome Properties**: The solution leverages the symmetric nature of palindromes.
`,
  // problem explanation--> 67
  'as-zigzag-conversion': `
### 💡 Problem Breakdown
The task is to simulate writing a string in a zigzag pattern across a specified number of rows and then reading it out line by line.

### ⚙️ Solution Walkthrough
The solution involves creating an array of strings, where each string represents a row. We then iterate through the input string, appending each character to the correct row.
1. **Initialize**: Create an array of empty strings, with the size equal to `numRows`.
2. **Control Flow**: We need a way to track which row we're on (`currentRow`) and whether our direction is "going down" or "going up". A boolean flag `goingDown` can be used for this.
3. **Loop**: Iterate through each character of the input string.
   - Append the character to the string at `rows[currentRow]`.
   - **Change Direction**: If we are at the top row (`currentRow === 0`) or the bottom row (`currentRow === numRows - 1`), flip the `goingDown` flag.
   - **Move**: Update `currentRow` by adding 1 if `goingDown` is true, or subtracting 1 if it's false.
4. **Join**: After the loop, join the strings in the `rows` array to get the final result.

### 📚 Key Concepts
- **State Management**: The `currentRow` and `goingDown` variables are used to manage the state of the zigzag traversal.
`,
  // problem explanation--> 68
  'as-string-to-integer-atoi': `
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
  // problem explanation--> 69
  'as-jump-game': `
### 💡 Problem Breakdown
In this problem, you're on a path represented by an array. Each number in the array is the maximum number of steps you can take from that position. The goal is to determine if it's possible to reach the very last index.

### ⚙️ Solution Walkthrough
A greedy approach provides an efficient O(n) solution. We keep track of the `farthest` index we can possibly reach at any point.
1. Initialize `farthest = 0`.
2. Loop through the array with an index `i`.
3. **Check Reachability**: In each iteration, first check if the current index `i` is beyond the `farthest` point we could have reached. If `i > farthest`, it means we are stuck and can never reach the end, so return `false`.
4. **Update Farthest**: Update the `farthest` reachable point from the current position: `farthest = Math.max(farthest, i + nums[i])`.
5. If the loop completes, it means we were never stuck and could always advance. Therefore, the end is reachable. Return `true`.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, we make the greedy choice of updating our maximum possible reach. This is sufficient to determine if the end is reachable.
`,
  // problem explanation--> 70
  'as-find-all-duplicates': `
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
  // problem explanation--> 71
  'as-first-missing-positive': `
### 💡 Problem Breakdown
Given an unsorted array of integers (which can be positive, negative, or zero), the goal is to find the smallest positive integer (starting from 1) that is *not* present in the array. This should be done efficiently.

### ⚙️ Solution Walkthrough
A clever O(n) time and O(1) space solution uses the array itself as a hash map.
1.  **First Pass (Cleanup & Placement)**: Iterate through the array. The goal is to place each number `x` at the index `x-1` if possible. Use a `while` loop to keep swapping `nums[i]` into its correct position until the number at `nums[i]` is correct or out of range.
2.  **Second Pass (Finding)**: Iterate through the modified array one last time. The first index `i` where `nums[i]` is not equal to `i + 1` indicates that `i + 1` is the missing positive number.
3.  **Edge Case**: If the loop finishes and all numbers are in their correct places, the missing number is `n + 1`.

### 📚 Key Concepts
- **In-place Hashing / Cyclic Sort**: A pattern where you use the array's indices to sort or store information about its contents without using extra space.
`,
  // problem explanation--> 72
  'as-next-permutation': `
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
  // problem explanation--> 73
  'as-search-in-rotated-sorted-array': `
### 💡 Problem Breakdown
You are given a sorted array that has been rotated at some unknown pivot point (e.g., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`). The task is to search for a target value in this rotated array efficiently.

### ⚙️ Solution Walkthrough
A standard binary search won't work directly, but it can be modified. The key is that in any rotated sorted array, at least one of the two halves (from `left` to `mid`, or from `mid` to `right`) must still be sorted.
1. Use a `while` loop for binary search.
2. In each iteration, find the `mid` point.
3. Check if the left half (`nums[left]` to `nums[mid]`) is the sorted half.
   - If it is, check if the `target` lies within the range of this sorted half.
   - If yes, search in the left half. If no, search in the right half.
4. If the left half is not sorted, it means the right half (`nums[mid]` to `nums[right]`) must be.
   - Perform the same check: if the `target` is in the right half's range, search there. Otherwise, search in the left half.

### 📚 Key Concepts
- **Binary Search Modification**: Adapting the core binary search logic by first identifying which part of the array retains the sorted property.
`,
  // problem explanation--> 74
  'as-find-first-last-position-sorted-array': `
### 💡 Problem Breakdown
Given a sorted array that may contain duplicates, the task is to find the starting and ending index of a given target value.

### ⚙️ Solution Walkthrough
The solution requires two modified binary searches, one to find the leftmost occurrence and one to find the rightmost.
1. **Find Left Bound**: Perform a binary search. When you find the `target`, don't stop. Store the index and continue searching in the *left* half of the array (`right = mid - 1`) to see if an even earlier occurrence exists.
2. **Find Right Bound**: Perform another binary search. When you find the `target`, store the index and continue searching in the *right* half (`left = mid + 1`) to find a later occurrence.
3. Return the two bounds found.

### 📚 Key Concepts
- **Binary Search Modification**: The standard binary search algorithm is adapted to not stop at the first match, but to continue searching to find the boundaries of a target's occurrences.
`,
  // problem explanation--> 75
  'as-permutations': `
### 💡 Problem Breakdown
The task is to generate all possible orderings (permutations) of the elements in a given array of distinct numbers.

### ⚙️ Solution Walkthrough
This is a classic backtracking problem that is typically solved with a recursive helper function.
1. **`backtrack(currentPermutation, remainingNums)`**:
   - **Base Case**: If there are no `remainingNums`, it means `currentPermutation` is a complete permutation. Add a copy of it to the main results list.
   - **Recursive Step**: Loop through the `remainingNums`.
     - For each number, "choose" it by adding it to the `currentPermutation`.
     - Create a new list of remaining numbers that excludes the chosen one.
     - Make a recursive call: `backtrack(currentPermutation, newRemaining)`.
     - **"Un-choose"**: After the recursive call returns, remove the number from `currentPermutation`. This is the backtracking step that allows you to explore other paths.

### 📚 Key Concepts
- **Backtracking**: An algorithmic technique for solving problems recursively by trying to build a solution incrementally and "undoing" choices that don't lead to a solution.
`,
  // problem explanation--> 76
  'as-permutations-ii': `
### 💡 Problem Breakdown
This is a variation of the permutations problem where the input array may contain duplicate numbers. The task is to find all *unique* permutations.

### ⚙️ Solution Walkthrough
The backtracking approach is used again, but with an added condition to handle duplicates and avoid generating the same permutation multiple times.
1. **Sort**: Sort the input `nums` array first. This brings all duplicate numbers next to each other.
2. **Backtrack**: In the recursive helper function's loop:
   - **Skip Duplicates**: Add a condition: if the current element is the same as the previous element (`nums[i] === nums[i-1]`) and we are in the same level of recursion, skip it. This ensures that we only generate permutations starting with a duplicate number once.
   - The rest of the "choose, explore, un-choose" logic is the same as the standard permutations problem.

### 📚 Key Concepts
- **Backtracking with Constraints**: This is a more advanced backtracking problem where an additional constraint is added to prune duplicate branches from the search tree.
`,
  // problem explanation--> 77
  'as-combinations': `
### 💡 Problem Breakdown
The task is to find all possible combinations of size `k` from the numbers 1 to `n`. Unlike permutations, the order of elements in a combination does not matter, so `[1, 2]` is the same as `[2, 1]`.

### ⚙️ Solution Walkthrough
This is another backtracking problem.
1. **`backtrack(currentCombination, start)`**:
   - **Base Case**: If `currentCombination.length === k`, we have found a valid combination. Add a copy to the results list and return.
   - **Recursive Step**: Loop from the `start` number up to `n`.
     - "Choose" the current number by adding it to `currentCombination`.
     - Make a recursive call, but crucially, the next level of the search should start from `i + 1` to ensure we don't reuse the same number and we only generate combinations in increasing order (which prevents duplicates like `[1, 2]` and `[2, 1]`).
     - **"Un-choose"**: Backtrack by popping the number from `currentCombination`.

### 📚 Key Concepts
- **Backtracking**: The core algorithm for exploring the solution space.
- **Combinations vs. Permutations**: The key difference in the implementation is how the "remaining" elements are chosen for the next recursive step.
`,
  // problem explanation--> 78
  'as-combination-sum': `
### 💡 Problem Breakdown
Given a set of candidate numbers (which can be reused) and a target, find all unique combinations that sum up to the target.

### ⚙️ Solution Walkthrough
This is a backtracking problem similar to "Combinations," but with a few key differences.
1. **`backtrack(currentCombination, remainingSum, start)`**:
   - **Base Case (Success)**: If `remainingSum === 0`, we have found a valid combination.
   - **Base Case (Failure)**: If `remainingSum < 0`, this path is invalid.
   - **Recursive Step**: Loop through the `candidates` starting from the `start` index.
     - "Choose" the candidate `candidates[i]` by adding it to the current combination.
     - Make a recursive call. Crucially, the `start` index passed to the next call is `i`, not `i+1`. This is what allows us to reuse the same number.
     - "Un-choose" by popping the candidate from the combination.

### 📚 Key Concepts
- **Backtracking**: The core algorithm.
- **Reusing Elements**: The recursive call starting from `i` instead of `i+1` is the key to allowing numbers to be used multiple times in a combination.
`,
  // problem explanation--> 79
  'as-combination-sum-ii': `
### 💡 Problem Breakdown
This is a variation where the candidate numbers may contain duplicates, and each number can only be used once in each combination.

### ⚙️ Solution Walkthrough
This combines the logic from "Combinations" and "Permutations II."
1. **Sort**: Sort the `candidates` array to handle duplicates easily.
2. **`backtrack(currentCombination, remainingSum, start)`**:
   - **Recursive Step Loop**:
     - **Skip Duplicates**: Add a condition: if `i > start` and `candidates[i] === candidates[i-1]`, skip this iteration. This prevents creating duplicate combinations that use the same numbers in a different order.
     - "Choose" `candidates[i]`.
     - Make a recursive call with `start` index `i + 1` (because each number can only be used once).
     - "Un-choose" by backtracking.

### 📚 Key Concepts
- **Backtracking with Constraints**: A combination of the previous combination and duplicate-handling techniques.
`,
  // problem explanation--> 80
  'as-subsets': `
### 💡 Problem Breakdown
The goal is to generate the "power set" of a given set of unique numbers. The power set is the set of all possible subsets, including the empty set and the set itself.

### ⚙️ Solution Walkthrough
A backtracking approach is very clear.
1. **`backtrack(currentSubset, start)`**:
   - **Add to Results**: First, add a copy of the `currentSubset` to the main results list. This is because every state in our exploration (`[]`, `[1]`, `[1, 2]`, etc.) is a valid subset.
   - **Recursive Step**: Loop through the numbers starting from the `start` index.
     - "Choose" the number `nums[i]` by adding it to `currentSubset`.
     - Make a recursive call for the next level, starting from `i + 1`.
     - "Un-choose" by popping the number from `currentSubset`.

### 📚 Key Concepts
- **Backtracking**: The standard algorithm for generating combinatorial objects like subsets and permutations.
`,
  // problem explanation--> 81
  'as-reshape-matrix': `
### 💡 Problem Breakdown
The task is to take a 2D array (matrix) and reshape it into new dimensions (`r` rows and `c` columns), preserving the original order of the elements. If the reshape is not possible (i.e., the number of elements doesn't match), the original matrix should be returned.

### ⚙️ Solution Walkthrough
1. **Validation**: Check if the reshape is possible. The number of elements in the original matrix (`original_rows * original_cols`) must equal `r * c`. If not, return the original matrix.
2. **Flatten**: Create a one-dimensional array containing all the elements of the original matrix in order.
3. **Rebuild**: Create a new empty matrix. Use a loop to iterate `r` times (for each new row). In each iteration, `.slice()` the next `c` elements from the flattened array and push this new row into the result matrix.

### 📚 Key Concepts
- **Matrix Manipulation**: Transforming the structure of a 2D array.
- **Data Flattening**: A common intermediate step in reshaping data.
`,
  // problem explanation--> 82
  'as-toeplitz-matrix': `
### 💡 Problem Breakdown
A Toeplitz matrix is a special kind of matrix where every diagonal from top-left to bottom-right has the same elements. The task is to check if a given matrix has this property.

### ⚙️ Solution Walkthrough
The property can be checked with a single pass using nested loops. The condition is that for any element `matrix[r][c]`, it must be equal to the element to its bottom-right, `matrix[r+1][c+1]`.
1. **Loop**: Use nested loops to iterate through every element of the matrix. The loops should stop one row and one column early to avoid going out of bounds.
2. **Compare**: For each element `matrix[r][c]`, compare it with `matrix[r+1][c+1]`.
3. **Return \`false\`**: If at any point they are not equal, the matrix is not Toeplitz, so you can return \`false\` immediately.
4. **Return \`true\`**: If the loops complete without finding any mismatches, the matrix is Toeplitz.

### 📚 Key Concepts
- **Matrix Traversal**: The solution involves a systematic check of all relevant elements.
`,
  // problem explanation--> 83
  'as-flipping-an-image': `
### 💡 Problem Breakdown
The task involves a two-step transformation on a binary (0s and 1s) matrix:
1. **Flip Horizontally**: Reverse each row of the matrix.
2. **Invert**: Change all 0s to 1s and all 1s to 0s.

### ⚙️ Solution Walkthrough
The `.map()` array method can be used to perform this transformation concisely.
1. **Map Rows**: Use `.map()` on the outer array to process each `row`.
2. **Reverse**: Inside the map's callback, first call `.reverse()` on the `row`.
3. **Map and Invert**: Then, chain another `.map()` on the reversed row to process each `pixel`. In this inner map, invert the pixel. A simple way to invert a binary digit is with the XOR operator (`pixel ^ 1`).
4. The result of the outer map will be the new, transformed matrix.

### 📚 Key Concepts
- **Array Methods**: Using higher-order functions like `map` to perform data transformations.
- **Bitwise XOR (\`^\`)**: A concise way to flip a bit (0 becomes 1, 1 becomes 0).
`,
  // problem explanation--> 84
  'as-transpose-matrix': `
### 💡 Problem Breakdown
Transposing a matrix is the operation of swapping its rows and columns. The element at `(r, c)` in the original matrix moves to `(c, r)` in the transposed matrix.

### ⚙️ Solution Walkthrough
1. Determine the dimensions of the original matrix (`R` rows and `C` columns).
2. Create a new, empty matrix with the dimensions swapped (it will have `C` rows and `R` columns).
3. Use nested loops to iterate through the original matrix.
4. In each iteration, copy the element `matrix[r][c]` to `transposed[c][r]`.
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
  // problem explanation--> 85
  'as-valid-mountain-array': `
### 💡 Problem Breakdown
A "mountain array" has specific properties:
1. It must have a length of at least 3.
2. There must be a "peak" index where the array is strictly increasing before the peak and strictly decreasing after the peak.

### ⚙️ Solution Walkthrough
A single pass with a pointer (`i`) can validate the array.
1. **Walk Up**: Use a `while` loop to walk up the "mountain" as long as the array is strictly increasing (`arr[i] < arr[i+1]`).
2. **Check Peak**: After the loop, check if the peak is valid. The peak cannot be the first or last element, so `i` must be greater than 0 and less than `n-1`. If not, return `false`.
3. **Walk Down**: Use another `while` loop to walk down the rest of the mountain as long as it's strictly decreasing (`arr[i] > arr[i+1]`).
4. **Final Check**: If the array is a valid mountain, the pointer `i` should have successfully reached the last index of the array. Return `i === n - 1`.

### 📚 Key Concepts
- **Single Pass Algorithm**: The solution traverses the array at most once to validate its structure.
`,
  // problem explanation--> 86
  'as-sort-array-by-parity': `
### 💡 Problem Breakdown
The task is to rearrange an array so that all the even numbers come before all the odd numbers. The relative order of the even numbers (or odd numbers) among themselves does not matter.

### ⚙️ Solution Walkthrough
A two-pointer approach is efficient for this in-place sort.
1. **Initialize**: Set a `left` pointer at the start and a `right` pointer at the end of the array.
2. **Loop**: Use a `while` loop that continues as long as `left < right`.
3. **Compare and Swap**: If `nums[left]` is odd and `nums[right]` is even, swap them.
4. **Move Pointers**:
   - If `nums[left]` is even, move the `left` pointer forward.
   - If `nums[right]` is odd, move the `right` pointer backward.
The loop continues until the pointers cross, at which point the array will be partitioned correctly.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used here to partition an array based on a condition.
`,
  // problem explanation--> 87
  'as-squares-of-sorted-array': `
### 💡 Problem Breakdown
Given an array that is sorted (but may contain negative numbers), the task is to create a new array containing the square of each number, also in sorted order.

### ⚙️ Solution Walkthrough
The naive approach is to map each number to its square and then sort the result. This works but has a time complexity of O(n log n). An O(n) solution is possible with the two-pointer technique because the original array is sorted.
1. The largest squared numbers will be at the ends of the original array (e.g., -10 and 10).
2. **Initialize**: Set a `left` pointer at the start and a `right` pointer at the end. Create a `result` array of the same size.
3. **Loop**: Loop from the *end* of the `result` array backwards.
4. **Compare and Place**: In each iteration, compare the absolute value of the number at `left` with the number at `right`.
   - The larger of the two, when squared, will be the next largest number in the result.
   - Square this larger number and place it at the current position in the `result` array.
   - Move the corresponding pointer (`left` or `right`) inward.
5. Return the `result`.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used to efficiently build the sorted result array from the ends inward.
`,
  // problem explanation--> 88
  'as-k-diff-pairs': `
### 💡 Problem Breakdown
A "k-diff pair" is a pair of numbers in an array whose absolute difference is `k`. The task is to find the number of *unique* such pairs.

### ⚙️ Solution Walkthrough
A `Set` can be used to efficiently find the pairs.
1. Handle the edge case `k < 0` (return 0).
2. Create two `Set`s: `seen` to store the numbers we have iterated over, and `pairs` to store the starting number of each unique pair we find.
3. Loop through the array. For each `num`:
   - Check if `seen.has(num - k)`. If it does, we've found a pair. Add `num - k` to the `pairs` set.
   - Check if `seen.has(num + k)`. If it does, we've found a pair. Add `num` to the `pairs` set.
   - Add the current `num` to the `seen` set.
4. The final answer is the `.size` of the `pairs` set.

The case where `k=0` (finding duplicates) needs to be handled slightly differently, often by using a frequency map instead.

### 📚 Key Concepts
- **\`Set\`**: Used for efficient lookups of seen numbers and for storing the unique pairs.
`,
  // problem explanation--> 89
  'as-isomorphic-strings': `
### 💡 Problem Breakdown
Two strings are "isomorphic" if there's a one-to-one mapping between their characters. For example, "egg" and "add" are isomorphic because \`e -> a\` and \`g -> d\`. However, "foo" and "bar" are not, because \`o\` would have to map to both \`a\` and \`r\`. "badc" and "baba" are not, because \`d\` and \`b\` would both map to \`a\`.

### ⚙️ Solution Walkthrough
The key is to ensure a consistent, bijective (two-way) mapping. This can be checked using two maps.
1. Initialize two maps: `s_to_t` and `t_to_s`.
2. Loop through the strings by index `i`.
3. For each pair of characters `s[i]` and `t[i]`:
   - Check the forward mapping: If `s[i]` is already in `s_to_t` but maps to something different than `t[i]`, return `false`.
   - Check the backward mapping: If `t[i]` is already in `t_to_s` but maps to something different than `s[i]`, return `false`.
   - If the mappings are consistent (or new), update both maps.
4. If the loop completes, the strings are isomorphic.

### 📚 Key Concepts
- **Bijective Mapping**: A one-to-one and onto mapping, where each element in one set is paired with exactly one element in another set, and vice versa.
- **Hash Maps (\`Map\`)**: The ideal data structure for storing and checking the character mappings.
`,
  // problem explanation--> 90
  'as-word-pattern': `
### 💡 Problem Breakdown
This problem is very similar to "Isomorphic Strings," but the mapping is between the characters of a `pattern` string and the words of a sentence.

### ⚙️ Solution Walkthrough
The logic is nearly identical to the isomorphic strings problem, using two maps.
1. Split the sentence `s` into an array of `words`. Check if the length of the `pattern` and the `words` array are equal. If not, return `false`.
2. Initialize two maps: `pattern_to_word` and `word_to_pattern`.
3. Loop by index `i`.
4. For each pair of character `pattern[i]` and `words[i]`:
   - Check for mapping inconsistencies in both directions using the two maps. If an inconsistency is found, return `false`.
   - Update both maps.
5. If the loop completes, the pattern is followed.

### 📚 Key Concepts
- **Bijective Mapping**: The core requirement for the pattern to be valid.
`,
  // problem explanation--> 91
  'as-happy-number': `
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
  // problem explanation--> 92
  'as-contains-duplicate': `
### 💡 Problem Breakdown
The task is to check if an array contains any duplicate values.

### ⚙️ Solution Walkthrough
The most concise and efficient way to solve this is by using a `Set`. A `Set` only stores unique values.
1. Create a new `Set` from the input array. The `Set` constructor will automatically handle the removal of duplicates.
2. Compare the `.size` of the resulting `Set` with the original array's `.length`.
3. If the size is less than the length, it means some elements were discarded, so duplicates must have existed. Return `true`.
4. Otherwise, return `false`.
\`\`\`javascript
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
\`\`\`
### 📚 Key Concepts
- **\`Set\`**: The ideal data structure for problems involving uniqueness.
`,
  // problem explanation--> 93
  'as-contains-duplicate-ii': `
### 💡 Problem Breakdown
This is a variation of the duplicate problem. Here, we need to find if there are duplicate numbers where their indices are at most `k` positions apart.

### ⚙️ Solution Walkthrough
A `Map` can be used to store the most recently seen index of each number.
1. Initialize an empty `Map`.
2. Loop through the array with index `i`.
3. For each number `nums[i]`:
   - Check if the number is already in the map.
   - If it is, calculate the distance between the current index `i` and the stored index `map.get(nums[i])`.
   - If this distance is less than or equal to `k`, a valid pair has been found, so return `true`.
   - If not a valid pair, or if the number is new, update the map with the current number and its index: `map.set(nums[i], i)`.
4. If the loop completes, no such pair was found.

### 📚 Key Concepts
- **Hash Map (\`Map\`)**: Used to efficiently store and retrieve the last seen index of each number.
`,
  // problem explanation--> 94
  'as-add-digits': `
### 💡 Problem Breakdown
The task is to repeatedly sum the digits of a number until a single-digit result is obtained. This is also known as finding the "digital root".

### ⚙️ Solution Walkthrough
An outer `while` loop can be used to check if the number is still greater than 9. An inner `while` loop can be used to calculate the sum of the digits.
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
There's also a mathematical trick for this: for a positive integer, the digital root is `1 + (num - 1) % 9`.

### 📚 Key Concepts
- **Digital Root**: The single-digit value obtained by an iterative process of summing digits.
- **Nested Loops**: The iterative solution uses nested loops to handle the repeated summing process.
`,
  // problem explanation--> 95
  'as-ugly-number': `
### 💡 Problem Breakdown
An "ugly number" is a positive integer whose prime factors are limited to 2, 3, and 5. The task is to check if a given number is ugly.

### ⚙️ Solution Walkthrough
The solution is to repeatedly divide the number by 2, 3, and 5 as long as it's evenly divisible. If the number that remains at the end is 1, then its only prime factors could have been 2, 3, and 5.
1. Handle the edge case: numbers less than or equal to 0 are not ugly.
2. Use a loop (or separate loops) for each prime factor (2, 3, 5).
3. Inside each loop, as long as `n` is divisible by the factor, divide `n` by it.
4. After all divisions, check if the final `n` is equal to 1.

### 📚 Key Concepts
- **Prime Factorization**: The core mathematical concept behind the problem.
`,
  // problem explanation--> 96
  'as-first-unique-character': `
### 💡 Problem Breakdown
The goal is to find the very first character in a string that does not repeat anywhere else in the string and return its index.

### ⚙️ Solution Walkthrough
A two-pass approach using a hash map is efficient and easy to understand.
1.  **First Pass (Build Frequency Map)**: Use a `for` loop to iterate through the string once and build a map (a plain object or `Map`) that stores the frequency count of each character.
2.  **Second Pass (Find First Unique)**: Use a second `for` loop to iterate through the string again. For each character, look up its count in the map. The first character you find with a count of 1 is your answer. Return its index.
3.  If the second loop completes without finding a character with a count of 1, it means there are no unique characters, so return -1.

### 📚 Key Concepts
- **Hash Map**: The core data structure used to efficiently store and retrieve character counts.
`,
  // problem explanation--> 97
  'as-find-the-difference': `
### 💡 Problem Breakdown
You are given two strings, `s` and `t`, where `t` is a shuffled version of `s` with one extra character added. The task is to find that extra character.

### ⚙️ Solution Walkthrough
A simple and effective solution is to use character codes.
1. Initialize a `code` variable to 0.
2. Loop through the longer string `t`, adding each character's code to `code`.
3. Loop through the shorter string `s`, subtracting each character's code from `code`.
4. After the loops, all the matching characters will have cancelled each other out, leaving only the code of the single extra letter. Convert it back to a character and return.

A bitwise XOR approach is also very elegant and efficient.

### 📚 Key Concepts
- **Character Codes**: Using the numeric representation of characters to solve a problem with simple arithmetic.
`,
  // problem explanation--> 98
  'as-ransom-note': `
### 💡 Problem Breakdown
The task is to determine if a `ransomNote` string can be constructed using the letters from a `magazine` string. Each letter from the magazine can only be used once.

### ⚙️ Solution Walkthrough
A frequency map is the ideal data structure for this.
1. **Build Frequency Map**: Create a map of character counts for all the letters available in the `magazine`.
2. **Check Ransom Note**: Iterate through the `ransomNote` string.
3. For each character in the note:
   - Check if the character exists in the map and has a count greater than 0.
   - If not, it's impossible to construct the note, so return `false`.
   - If it is available, decrement its count in the map to "use it up".
4. If the loop completes, it means all characters were available. Return `true`.

### 📚 Key Concepts
- **Frequency Counting**: A common pattern for problems involving character availability or counts.
`,
  // problem explanation--> 99
  'as-longest-harmonious-subsequence': `
### 💡 Problem Breakdown
A "harmonious subsequence" is a subsequence where the difference between the maximum and minimum value is exactly 1. The task is to find the length of the longest such subsequence.

### ⚙️ Solution Walkthrough
This problem can be solved efficiently using a frequency map.
1. **Build Frequency Map**: Create a `Map` to store the frequency of each number in the input array.
2. **Iterate Map**: Loop through the entries of the map.
3. **Check for Harmony**: For each number `num` and its `count` in the map, check if `num + 1` also exists as a key in the map.
4. **Calculate Length**: If `num + 1` exists, the length of the harmonious subsequence formed by these two numbers is `count + map.get(num + 1)`.
5. **Find Maximum**: Keep track of the maximum length found during the iteration.

### 📚 Key Concepts
- **Frequency Counting**: The core of the solution is to efficiently count the occurrences of each number.
- **Subsequence**: Unlike a subarray, a subsequence does not have to be contiguous.
`,
  // problem explanation--> 100
  'as-set-mismatch': `
### 💡 Problem Breakdown
You are given an array that should contain all numbers from 1 to `n`, but one number is duplicated and one is missing. The task is to find both the duplicated and the missing number.

### ⚙️ Solution Walkthrough
There are several ways to solve this. A straightforward approach uses a `Set`.
1. Initialize a `Set` to track seen numbers, a `duplicate` variable, and a `sum` of the input array.
2. Loop through the input array.
   - If the current number is already in the `seen` set, it's the `duplicate`.
   - Add the number to the set and to the running `sum`.
3. **Find Missing**: Calculate the expected sum of numbers from 1 to `n` using Gauss's formula: `expectedSum = n * (n + 1) / 2`.
4. The sum of the numbers that *should* have been in the array is `expectedSum - missing`.
5. The sum of the numbers we actually *have* is `sum - duplicate`.
6. Therefore, `missing = expectedSum - (sum - duplicate)`.

### 📚 Key Concepts
- **Set for Duplicates**: A `Set` is used to easily find the duplicated number.
- **Summation Formula**: Gauss's formula is used to efficiently find the missing number.
`,
  // problem explanation--> 101
  'as-goat-latin': `
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
  // problem explanation--> 102
  'as-dutch-national-flag': `
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
  // problem explanation--> 103
  'as-find-all-anagrams': `
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
  // problem explanation--> 104
  'as-pascals-triangle-row': `
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
  // problem explanation--> 105
  'as-best-time-stock-ii': `
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
  // problem explanation--> 106
  'as-excel-column-number': `
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
  // problem explanation--> 107
  'as-excel-column-title': `
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
  // problem explanation--> 108
  'as-single-number': `
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
  // problem explanation--> 109
  'as-palindrome-number': `
### 💡 Problem Breakdown
The task is to check if an integer is a palindrome. A number is a palindrome if it reads the same backward as forward (e.g., 121). A key constraint is often to do this without converting the number to a string.

### ⚙️ Solution Walkthrough
The solution involves mathematically reversing the number and comparing it to the original.
1. Handle edge cases: Negative numbers are not palindromes. Numbers ending in 0 (except 0 itself) cannot be palindromes.
2. Initialize `reversed = 0`.
3. Use a `while` loop to reverse the second half of the number.
   - In each iteration, take the last digit of the original number (`n % 10`).
   - Append it to `reversed`.
   - Remove the last digit from the original number (`Math.floor(n / 10)`).
4. The loop stops when `reversed` becomes greater than or equal to `n`.
5. Compare `n` and `reversed`. They are equal if the number has an even number of digits. If it has an odd number, the middle digit will be left on `n`, so we also check if `n` equals `Math.floor(reversed / 10)`.

### 📚 Key Concepts
- **Integer Manipulation**: Using modulo and division to work with individual digits of a number.
`,
  // problem explanation--> 110
  'as-remove-element': `
### 💡 Problem Breakdown
Given an array and a target value, the task is to remove all instances of that value *in-place* and return the new length of the array. The order of the remaining elements can be changed.

### ⚙️ Solution Walkthrough
A simple and efficient solution uses a "write pointer".
1. Initialize a write pointer `i` to 0.
2. Loop through the array with a read pointer `j`.
3. If the element at `nums[j]` is **not** equal to the value to be removed:
   - Copy the element `nums[j]` to the position `nums[i]`.
   - Increment the write pointer `i`.
4. After the loop, the first `i` elements of the array will be the elements that were not removed. Return `i`.

### 📚 Key Concepts
- **Two-Pointer Technique**: The read pointer (`j`) scans the array, and the write pointer (`i`) keeps track of where to place the next valid element.
- **In-place Algorithm**: The array is modified directly.
`,
  // problem explanation--> 111
  'as-search-insert-position': `
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
  // problem explanation--> 112
  'as-battleships-in-board': `
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
  // problem explanation--> 113
  'as-shortest-distance-to-char': `
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
  // problem explanation--> 114
  'as-binary-gap': `
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
  // problem explanation--> 115
  'as-armstrong-number': `
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
  // problem explanation--> 116
  'as-find-pivot-index': `
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
  // problem explanation--> 117
  'as-kth-largest-element': `
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
  // problem explanation--> 118
  'as-top-k-frequent-elements': `
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
  // problem explanation--> 119
  'as-sort-chars-by-frequency': `
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
  // problem explanation--> 120
  'as-max-product-of-three': `
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
  // problem explanation--> 121
  'as-basic-calculator-ii': `
### 💡 Problem Breakdown
This problem requires evaluating a string expression containing numbers and the operators \`+\`, \`-\`, \`*\`, \`/\`. The key challenge is to handle operator precedence correctly (* and / must be evaluated before + and -).

### ⚙️ Solution Walkthrough
A stack-based approach is very effective. We can process the expression in a single pass.
1. **Initialize**: Create a stack, and set the current number (\`num\`) to 0 and the last operator (\`lastOp\`) to '+'.
2. **Loop**: Iterate through the string.
   - If the character is a digit, update \`num\`.
   - If the character is an operator (or we are at the end of the string), we need to process the previous \`num\` based on the \`lastOp\`.
     - If \`lastOp\` was '+': push \`num\` onto the stack.
     - If \`lastOp\` was '-': push \`-num\` onto the stack.
     - If \`lastOp\` was '*': pop from the stack, multiply it by \`num\`, and push the result back.
     - If \`lastOp\` was '/': pop, divide, truncate, and push back.
   - Update \`lastOp\` to the current operator and reset \`num\`.
3. **Final Sum**: After the loop, the stack contains only numbers that need to be added. Sum them up for the final result.

### 📚 Key Concepts
- **Stack**: The ideal data structure for evaluating expressions, especially for handling precedence.
- **Operator Precedence**: The logic correctly defers addition/subtraction by putting numbers on the stack, while evaluating multiplication/division immediately.
`,
  // problem explanation--> 122
  'as-longest-substring-with-at-most-two-distinct': `
### 💡 Problem Breakdown
This is a sliding window problem. The goal is to find the length of the longest substring that contains no more than *two* unique characters.

### ⚙️ Solution Walkthrough
A sliding window with a frequency map is used to track the distinct characters in the current window.
1. Initialize \`left = 0\`, \`maxLength = 0\`, and an empty \`Map\` to store character frequencies.
2. Loop through the string with a \`right\` pointer.
   - Add the character \`s[right]\` to the map, incrementing its count.
   - **Shrink Window**: Use a \`while\` loop to shrink the window from the left (\`left++\`) as long as the number of distinct characters in the map (\`map.size\`) is greater than 2. When shrinking, decrement the count of the character at \`s[left]\` and delete it from the map if its count becomes zero.
   - **Update Max Length**: After each expansion, the window is valid. Update \`maxLength\` with the current window size (\`right - left + 1\`).
3. Return \`maxLength\`.

### 📚 Key Concepts
- **Sliding Window**: The core technique for solving this problem efficiently in O(n) time.
- **Hash Map (\`Map\`)**: Used to efficiently keep track of the characters and their frequencies within the current window.
`,
  // problem explanation--> 123
  'as-encode-decode-tinyurl': `
### 💡 Problem Breakdown
This is a system design problem. The goal is to design a service that can take a long URL, generate a unique short URL for it, and then retrieve the long URL when given the short one.

### ⚙️ Solution Walkthrough
A simple and effective solution uses a hash map and an incrementing counter.
- **Data Structures**: Two hash maps are needed: one to map an incrementing integer ID to the long URL, and another to map the long URL back to its ID (to avoid creating new short URLs for the same long URL).
- **Encode**:
  1. When a long URL comes in, check if we've already encoded it. If so, return the existing short URL.
  2. If not, increment a counter to get a new unique ID.
  3. Store the mapping: \`id_to_url[counter] = longUrl\` and \`url_to_id[longUrl] = counter\`.
  4. Convert the counter ID to a short string. A base-62 encoding (using characters a-z, A-Z, 0-9) is a common way to do this.
  5. Return the base short URL plus this encoded string.
- **Decode**:
  1. Extract the short string from the short URL.
  2. Decode the base-62 string back to its integer ID.
  3. Look up this ID in the \`id_to_url\` map to get the original long URL.

### 📚 Key Concepts
- **System Design**: A common type of interview question that tests your ability to think about the components of a service.
- **Hashing/Mapping**: The core of the solution is the mapping between long URLs and short identifiers.
`,
  // problem explanation--> 124
  'as-longest-repeating-character-replacement': `
### 💡 Problem Breakdown
This is a challenging sliding window problem. You can change up to \`k\` characters in a string. The goal is to find the length of the longest possible substring that contains all the same letters after making these changes.

### ⚙️ Solution Walkthrough
The key insight is to maintain a window and check its validity. A window is valid if the number of characters we need to change to make it uniform is less than or equal to \`k\`. The number of changes needed is `window_length - frequency_of_most_common_character`.
1. Initialize a sliding window and a frequency map.
2. Expand the window with a `right` pointer. Update the frequency of the character at `s[right]`. Keep track of the frequency of the most common character in the current window.
3. **Check Validity**: After expanding, check if the window is valid using the formula `(right - left + 1) - maxFrequency <= k`.
4. **Shrink Window**: If the window is *not* valid, shrink it from the left by decrementing the frequency of the character at `s[left]` and incrementing the `left` pointer.
5. The length of the longest valid window found is the answer.

### 📚 Key Concepts
- **Sliding Window**: The algorithmic pattern used to efficiently check all substrings.
- **Frequency Counting**: Used to determine the `maxFrequency` in the current window.
`,
  // problem explanation--> 125
  'as-number-of-islands': `
### 💡 Problem Breakdown
This is a classic graph traversal problem on a 2D grid. An "island" is a group of connected '1's (land). The task is to count how many distinct islands there are.

### ⚙️ Solution Walkthrough
The solution is to iterate through the grid. Whenever we find a '1' that we haven't visited yet, we know we've found a new island. We then increment our island count and use a traversal algorithm (like Depth-First Search or Breadth-First Search) to find all parts of that same island, marking them as "visited" so we don't count them again.
1. Initialize `islandCount = 0`.
2. Use nested loops to iterate through every cell `(r, c)`.
3. If `grid[r][c]` is '1':
   - Increment `islandCount`.
   - Start a traversal (e.g., a recursive DFS) from `(r, c)`.
   - In the traversal, change every '1' you visit to a different character (e.g., '#') to mark it as visited. The traversal should explore up, down, left, and right.
4. Return `islandCount`.

### 📚 Key Concepts
- **Graph Traversal (DFS/BFS)**: The core algorithm for exploring the connected components (islands) of the grid.
`,
  // problem explanation--> 126
  'as-decode-string': `
### 💡 Problem Breakdown
This is a string parsing problem that involves handling nested structures, which makes it a great candidate for a stack-based solution. The encoding rule is `k[encoded_string]`, meaning the inner string is repeated `k` times.

### ⚙️ Solution Walkthrough
The solution uses two stacks: one for numbers (`countStack`) and one for strings (`stringStack`).
1. Loop through the input string.
   - If the character is a digit, build up the current number `k`.
   - If it's an opening bracket `[`: Push the current number `k` onto `countStack` and the current result string `res` onto `stringStack`. Reset `k` and `res`.
   - If it's a closing bracket `]`: Pop the repeat count from `countStack` and the previous string from `stringStack`. Repeat the current `res` string that many times and append it to the popped string.
   - If it's a letter, just append it to the current `res`.
2. The final `res` string is the answer.

### 📚 Key Concepts
- **Stack**: The LIFO nature of a stack is perfect for handling the nested `[ ... ]` structures.
`,
  // problem explanation--> 127
  'as-meeting-rooms-ii': `
### 💡 Problem Breakdown
This is a classic interval management problem. Given a list of meeting start and end times, the goal is to find the minimum number of conference rooms needed to accommodate all of them. This is equivalent to finding the maximum number of meetings that are happening concurrently at any single point in time.

### ⚙️ Solution Walkthrough
An efficient approach uses two separate sorted arrays for start and end times.
1. Create two arrays: one for all `start` times and one for all `end` times.
2. **Sort**: Sort both arrays in ascending order.
3. **Initialize**: Set `rooms = 0`, and use two pointers: `startPointer` and `endPointer`.
4. **Loop**: Iterate through the `start` times array with the `startPointer`.
   - In each iteration, we are "scheduling" a new meeting. Increment `rooms`.
   - Now, check if any previous meetings have ended by the time this new one starts. Compare the current `start` time with the time at the `endPointer`.
   - If `start_times[startPointer] >= end_times[endPointer]`, it means a room has freed up. Decrement `rooms` and advance the `endPointer`.
5. The answer is the maximum value that `rooms` reached during the process. A simpler way is to just keep track of the count and not decrement.

A Min-Heap based solution is also common and very intuitive.

### 📚 Key Concepts
- **Interval Problems**: A common category of problems solved by sorting events (start/end times).
`,
  // problem explanation--> 128
  'as-merge-intervals': `
### 💡 Problem Breakdown
The task is to take an array of intervals `[[start, end], ...]` and merge any that overlap. For example, `[[1,3],[2,6]]` should be merged into `[[1,6]]`.

### ⚙️ Solution Walkthrough
The solution involves sorting the intervals and then iterating through them to merge.
1. **Sort**: Sort the intervals array based on the start time of each interval. This is a crucial first step.
2. **Initialize**: Create a `merged` array and add the first interval from the sorted list to it.
3. **Loop**: Iterate through the rest of the sorted intervals.
4. **Compare and Merge**: For each interval, compare its start time with the end time of the *last* interval in the `merged` array.
   - If the current interval's start is less than or equal to the last merged interval's end, they overlap. Merge them by updating the end time of the last merged interval to be the maximum of the two end times.
   - If they don't overlap, simply push the current interval onto the `merged` array.
5. Return the `merged` array.

### 📚 Key Concepts
- **Sorting**: The key preprocessing step that makes the linear merge pass possible.
`,
  // problem explanation--> 129
  'as-letter-case-permutation': `
### 💡 Problem Breakdown
The task is to generate all possible strings that can be created by changing the case of the letters in an input string. Digits should remain unchanged. For "a1b2", the results are "a1b2", "a1B2", "A1b2", "A1B2".

### ⚙️ Solution Walkthrough
This is a classic backtracking problem. We can build the permutations recursively.
1. **`backtrack(index, currentString)`**:
   - **Base Case**: If `index` reaches the end of the string, we have a complete permutation. Add `currentString` to the results.
   - **Recursive Step**: Get the character at the current `index`.
     - If it's a digit, there's only one path. Append it to `currentString` and make a single recursive call for the next index.
     - If it's a letter, there are two paths. Make two recursive calls: one with the lowercase version of the letter appended, and one with the uppercase version appended.

### 📚 Key Concepts
- **Backtracking**: The algorithm explores the "decision tree" of all possible case combinations.
`,
  // problem explanation--> 130
  'as-longest-word-in-dictionary': `
### 💡 Problem Breakdown
The task is to find the longest word in a dictionary that can be "built" one character at a time from other, shorter words in the same dictionary. For example, "world" is a valid answer if "w", "wo", "wor", and "worl" are also in the dictionary.

### ⚙️ Solution Walkthrough
An efficient solution uses a `Set` for fast lookups.
1. **Sort**: Sort the dictionary array. A good sort order is first by length (ascending) and then lexicographically.
2. **Initialize**: Create a `Set` called `validWords` to store words that can be built.
3. **Loop**: Iterate through the sorted `words`.
4. **Check**: For each `word`:
   - If the word has length 1, it's buildable by default.
   - Otherwise, check if the prefix of the word (the word minus its last character) exists in our `validWords` set.
   - If a word is buildable, add it to the `validWords` set and update the `longestWord` found so far.
5. Return the final `longestWord`.

A Trie-based solution is also very efficient.

### 📚 Key Concepts
- **Set**: Provides O(1) average time lookups to check if a prefix word is valid.
- **Dynamic Programming**: The solution builds upon previous results. We know a word is valid only if its prefix has already been validated.
`,
  // problem explanation--> 131
  'as-word-break': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a string and a dictionary of words, you need to determine if the string can be completely segmented into a sequence of one or more words from the dictionary.

### ⚙️ Solution Walkthrough
A bottom-up dynamic programming approach is efficient.
1. **Initialize**: Create a boolean array `dp` of size `s.length + 1`, initialized to `false`. Set `dp[0] = true`, which represents that an empty string can always be formed.
2. **Outer Loop**: Loop `i` from 1 to `s.length`. `dp[i]` will represent whether the substring `s.substring(0, i)` can be broken.
3. **Inner Loop**: For each `i`, loop `j` from 0 to `i-1`.
4. **Check**: Inside the inner loop, check two conditions:
   - Is `dp[j]` true? (Meaning the substring up to `j` can be broken).
   - Is the remaining part, `s.substring(j, i)`, a word in the dictionary?
5. **Update DP**: If both are true, it means we can form the string up to `i`. Set `dp[i] = true` and `break` the inner loop to move to the next `i`.
6. The final answer is the value of `dp[s.length]`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for a longer string is built upon the solutions for its prefixes.
- **`dp[i]` State**: The state `dp[i]` represents whether the prefix of length `i` is breakable.
`,
  // problem explanation--> 132
  'as-combination-sum-iv': `
### 💡 Problem Breakdown
This is a dynamic programming problem. Given an array of distinct integers and a target, you need to find the number of *permutations* of the numbers that sum up to the target. The order matters, so `(1, 2, 1)` and `(1, 1, 2)` are different combinations.

### ⚙️ Solution Walkthrough
A bottom-up dynamic programming approach is effective.
1. **Initialize**: Create a `dp` array of size `target + 1`, initialized to zeros. Set `dp[0] = 1` (there is one way to make a sum of 0: by choosing no numbers).
2. **Outer Loop**: Loop `i` from 1 to `target`. `dp[i]` will store the number of ways to make the sum `i`.
3. **Inner Loop**: For each `i`, loop through each `num` in the input `nums` array.
4. **Update DP**: If `i - num >= 0`, it means we can form the sum `i` by taking a combination that sums to `i - num` and adding `num` to it. So, we add the number of ways to make `i - num` to our current count for `i`: `dp[i] += dp[i - num]`.
5. The final answer is `dp[target]`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for a target `i` is built by summing up the solutions for smaller targets (`i - num`).
`,
  // problem explanation--> 133
  'as-coin-change': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a set of coin denominations and an amount, the task is to find the *fewest* number of coins required to make that amount.

### ⚙️ Solution Walkthrough
A bottom-up dynamic programming approach is standard.
1. **Initialize**: Create a `dp` array of size `amount + 1`. Initialize `dp[0] = 0` (0 coins are needed to make 0). Fill the rest of the array with a large value, like `Infinity`, to represent that these amounts are not yet reachable.
2. **Outer Loop**: Loop `i` from 1 to `amount`. `dp[i]` will store the minimum coins needed for amount `i`.
3. **Inner Loop**: For each `i`, loop through each `coin` in the `coins` array.
4. **Update DP**: If a `coin` is less than or equal to the current amount `i`, we can potentially use it. The number of coins would be `1 + dp[i - coin]` (1 for the current coin, plus the minimum coins needed for the remaining amount).
   - We update `dp[i]` to be the minimum of its current value and this new potential value: `dp[i] = Math.min(dp[i], 1 + dp[i - coin])`.
5. The final answer is `dp[amount]`. If it's still `Infinity`, it means the amount cannot be made.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for an amount `i` is built by finding the minimum coins needed for smaller amounts.
`,
  // problem explanation--> 134
  'as-longest-increasing-subsequence': `
### 💡 Problem Breakdown
Given an array of numbers, the task is to find the length of the longest subsequence where the elements are in strictly increasing order. A subsequence does not have to be contiguous.

### ⚙️ Solution Walkthrough
An O(n^2) dynamic programming solution is a good starting point.
1. **Initialize**: Create a `dp` array of the same size as the input, with all values initialized to 1. `dp[i]` will store the length of the longest increasing subsequence that *ends* at index `i`.
2. **Outer Loop**: Loop `i` from 1 to the end of the array.
3. **Inner Loop**: For each `i`, loop `j` from 0 to `i-1`.
4. **Update DP**: If `nums[i] > nums[j]`, it means we can potentially extend the subsequence that ends at `j`. We update `dp[i]` to be the maximum of its current value and `1 + dp[j]`.
5. The final answer is the maximum value in the `dp` array.

An O(n log n) solution also exists, which is more advanced and involves maintaining a sorted list of the smallest tail elements for increasing subsequences of different lengths.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for the LIS ending at `i` depends on the solutions for all `j < i`.
`,
  // problem explanation--> 135
  'as-partition-equal-subset-sum': `
### 💡 Problem Breakdown
The task is to determine if an array can be partitioned into two subsets with an equal sum. This is a variation of the knapsack problem.
1. **Key Insight**: If the array can be partitioned this way, the sum of each subset must be `totalSum / 2`.
2. **Transformation**: The problem is transformed into: "Can we find a subset of the array that sums up to `totalSum / 2`?".

### ⚙️ Solution Walkthrough
A dynamic programming approach can solve this.
1. **Calculate Total Sum**: Find the sum of all numbers. If the sum is odd, it's impossible to partition, so return `false`.
2. **Target Sum**: The target for our subset sum problem is `target = totalSum / 2`.
3. **DP State**: Create a `dp` set (or boolean array) to store all the possible sums that can be made using the numbers seen so far. Initialize it with `0`.
4. **Loop**: Iterate through each `num` in the input array.
   - For each `num`, create a new set of sums by adding `num` to every existing sum in the `dp` set.
   - Merge these new sums back into the `dp` set.
5. After iterating through all numbers, check if the `target` sum exists in the final `dp` set.

### 📚 Key Concepts
- **Dynamic Programming / Subset Sum**: A classic DP problem. The state represents the set of all achievable sums.
`,
  // problem explanation--> 136
  'as-unique-paths': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. A robot on an `m x n` grid can only move right or down. The task is to find the total number of unique paths from the top-left corner to the bottom-right corner.

### ⚙️ Solution Walkthrough
1. **DP State**: Create a 2D `dp` grid of size `m x n`. `dp[r][c]` will store the number of unique paths to reach cell `(r, c)`.
2. **Initialization**: The first row and first column can only be reached in one way (by only moving right or only moving down). So, initialize `dp[r][0] = 1` for all rows and `dp[0][c] = 1` for all columns.
3. **Fill DP Table**: Use nested loops to iterate through the rest of the grid.
4. **Transition**: The number of ways to reach any cell `(r, c)` is the sum of the ways to reach the cell above it and the ways to reach the cell to its left: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`.
5. The final answer is the value in the bottom-right corner, `dp[m-1][n-1]`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution to the problem for a given cell is built from the solutions of its adjacent subproblems.
`,
  // problem explanation--> 137
  'as-unique-paths-ii': `
### 💡 Problem Breakdown
This is a variation of "Unique Paths" where the grid now contains obstacles. If a cell has an obstacle, no path can go through it.

### ⚙️ Solution Walkthrough
The dynamic programming approach is the same, but with an added condition for obstacles.
1. **DP State**: Create a 2D `dp` grid of size `m x n`.
2. **Initialization**: Initialize the starting cell `dp[0][0]` to 1 (unless it's an obstacle). The rest of the first row and column are filled based on whether the path is blocked by an obstacle. If `grid[r][0]` is an obstacle, `dp[r][0]` and all subsequent cells in that column become 0.
3. **Fill DP Table**: Use nested loops.
4. **Transition**:
   - If the current cell `grid[r][c]` is an obstacle, the number of paths to it is 0: `dp[r][c] = 0`.
   - Otherwise, the transition is the same as before: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`.
5. The final answer is `dp[m-1][n-1]`.

### 📚 Key Concepts
- **Dynamic Programming with Constraints**: The standard DP algorithm is adapted to handle the "obstacle" constraint.
`,
  // problem explanation--> 138
  'as-minimum-path-sum': `
### 💡 Problem Breakdown
This is another grid-based dynamic programming problem. The grid is filled with costs, and the goal is to find the path from top-left to bottom-right with the minimum total cost.

### ⚙️ Solution Walkthrough
The logic is very similar to "Unique Paths," but instead of summing the number of paths, we are summing the costs and finding the minimum.
1. **DP State**: We can modify the grid in-place. `grid[r][c]` will store the minimum cost to reach that cell.
2. **Initialization**: The first row is updated by adding the costs from the left. The first column is updated by adding the costs from above.
3. **Fill DP Table**: Use nested loops.
4. **Transition**: The minimum cost to reach cell `(r, c)` is its own cost plus the minimum of the costs from the cell above and the cell to the left: `grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1])`.
5. The final answer is the value in the bottom-right corner.

### 📚 Key Concepts
- **Dynamic Programming**: The optimal path to a cell must pass through one of its optimal-path neighbors.
`,
  // problem explanation--> 139
  'as-word-ladder': `
### 💡 Problem Breakdown
This is a shortest path problem on a graph. The words in the dictionary are the nodes of the graph. An edge exists between two words if they differ by only one letter. The task is to find the shortest path from a `beginWord` to an `endWord`.

### ⚙️ Solution Walkthrough
Breadth-First Search (BFS) is the standard algorithm for finding the shortest path in an unweighted graph.
1. **Setup**: Add the `beginWord` to a queue and a `visited` set. Keep track of the current path length (level).
2. **BFS Loop**: While the queue is not empty:
   - Process all nodes at the current level.
   - For each `word` dequeued:
     - If it's the `endWord`, return the current path length.
     - **Find Neighbors**: Generate all possible "neighbor" words by changing one letter at a time.
     - For each neighbor, if it's in the `wordList` and hasn't been visited, add it to the queue and the `visited` set.
   - Increment the path length.
3. If the queue becomes empty and the `endWord` was not found, there is no path.

### 📚 Key Concepts
- **Breadth-First Search (BFS)**: The core algorithm for finding the shortest path in an unweighted graph.
- **Graph Modeling**: The problem is solved by modeling the words and their relationships as a graph.
`,
  // problem explanation--> 140
  'as-maximal-square': `
### 💡 Problem Breakdown
This is a dynamic programming problem on a 2D grid. The goal is to find the largest square subgrid composed entirely of '1's and return its area.

### ⚙️ Solution Walkthrough
1. **DP State**: Create a `dp` table of the same size (plus one for padding). `dp[r][c]` will store the side length of the largest square whose **bottom-right corner** is at cell `(r-1, c-1)` in the original matrix.
2. **Initialization**: The first row and column of the DP table correspond to the original matrix.
3. **Fill DP Table**: Use nested loops.
4. **Transition**: If `matrix[r-1][c-1]` is a '1', the size of the square ending here is limited by the squares ending at its top, left, and top-left neighbors. The formula is: `dp[r][c] = 1 + Math.min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1])`.
   - If `matrix[r-1][c-1]` is '0', then `dp[r][c] = 0`.
5. **Track Max**: While filling the table, keep track of the maximum side length found.
6. The final answer is `maxSideLength * maxSideLength`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for a cell is built from the solutions of its three adjacent subproblems.
`,
  // problem explanation--> 141
  'as-serialize-deserialize-binary-tree': `
### 💡 Problem Breakdown
This is a data structure design problem.
- **Serialization**: The process of converting a tree structure into a string representation.
- **Deserialization**: The process of rebuilding the original tree structure from its string representation.

### ⚙️ Solution Walkthrough
A pre-order traversal (a form of Depth-First Search) is a very common and effective way to do this.
- **Serialize**:
  1. Perform a pre-order traversal.
  2. For each node, append its value to a string.
  3. If a node is `null`, append a special marker (like '#' or 'null').
  4. Join the values with a delimiter (like ',').
- **Deserialize**:
  1. Split the string into an array of values.
  2. Use a global pointer or a queue to keep track of the current value.
  3. Write a recursive `buildTree` function:
     - Get the next value from the queue.
     - If it's the null marker, return `null`.
     - Otherwise, create a new node with the value.
     - Recursively call `buildTree` to build the left child.
     - Recursively call `buildTree` to build the right child.
     - Return the created node.

### 📚 Key Concepts
- **Tree Traversal (DFS)**: Pre-order traversal ensures that a parent node is always processed before its children, which is essential for rebuilding the tree structure correctly.
- **Serialization**: A fundamental concept for storing or transmitting complex data structures.
`,
  // problem explanation--> 142
  'as-insert-delete-getrandom-o1': `
### 💡 Problem Breakdown
This is a data structure design problem. The challenge is to create a structure that supports insertion, deletion, and retrieving a random element, all in average O(1) time.

### ⚙️ Solution Walkthrough
The key is to use a combination of two data structures:
1. **An Array**: To store the elements. This provides O(1) time for `getRandom` (by picking a random index). Insertion at the end (`push`) is also O(1).
2. **A Hash Map (`Map`)**: To store each element and its corresponding *index* in the array. This provides O(1) time for looking up if an element exists and finding its position.

- **`insert(val)`**: If `val` is not in the map, append it to the array, and store its new index in the map.
- **`getRandom()`**: Pick a random index from 0 to `array.length - 1` and return the element at that index.
- **`remove(val)`**: This is the clever part. To achieve O(1) deletion from an array, we must avoid shifting elements.
  1. Look up the index of `val` in the map.
  2. Get the last element in the array.
  3. Move the last element to the position of the element being deleted.
  4. Update the map with the new index for the element that was moved.
  5. Pop the last element from the array (which is now a duplicate).
  6. Delete `val` from the map.

### 📚 Key Concepts
- **Data Structure Combination**: Using the strengths of multiple data structures to meet specific time complexity requirements.
`,
  // problem explanation--> 143
  'as-regular-expression-matching': `
### 💡 Problem Breakdown
This is a very difficult problem that involves implementing a simplified regular expression engine. The patterns to handle are:
- `.` which matches any single character.
- `*` which matches zero or more of the *preceding* element.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem, typically solved with a 2D DP table.
1. **DP State**: Create a 2D boolean table `dp`, where `dp[i][j]` is true if the first `i` characters of the string `s` match the first `j` characters of the pattern `p`.
2. **Initialization**: `dp[0][0] = true`. Handle the case where the pattern starts with `*`s, which can match an empty string.
3. **Fill DP Table**: Use nested loops. The logic for `dp[i][j]` depends on the character `p[j-1]`:
   - If `p[j-1]` is a normal character or `.`: `dp[i][j]` is true if `s[i-1]` matches and `dp[i-1][j-1]` was true.
   - If `p[j-1]` is `*`: This is the complex case. The `*` can match zero or more characters.
     - **Zero occurrences**: The match depends on `dp[i][j-2]` (we ignore the `*` and the character before it).
     - **One or more occurrences**: The match depends on `dp[i-1][j]` (we match the current character `s[i-1]` and stay at the same pattern position `j` to see if the `*` can match more).
4. The final answer is `dp[s.length][p.length]`.

### 📚 Key Concepts
- **Dynamic Programming**: The core of the solution.
- **State Transition Logic**: The rules for updating the DP table based on the characters and operators in the pattern are complex and require careful consideration.
`,
  // problem explanation--> 144
  'as-wildcard-matching': `
### 💡 Problem Breakdown
This is another difficult string matching problem, similar to regex matching but with different wildcard rules:
- `?` matches any single character.
- `*` matches any sequence of characters (including an empty sequence).

### ⚙️ Solution Walkthrough
A dynamic programming approach is possible, similar to the previous problem. An efficient greedy approach with two pointers is also common.
1. **Pointers**: Use a pointer for the string (`s_ptr`), a pointer for the pattern (`p_ptr`), a pointer to the last star in the pattern (`star_idx`), and a pointer to the position in the string that the star matched (`s_tmp_idx`).
2. **Loop**: Iterate through the string.
   - If the characters match or the pattern has a `?`, advance both pointers.
   - If the pattern has a `*`, store its position (`star_idx`) and the current string position (`s_tmp_idx`), and advance only the pattern pointer.
   - If there is a mismatch, but we have seen a `*` before (`star_idx` is not -1), it means the `*` can match one more character. We backtrack by resetting the pattern pointer to just after the star (`p_ptr = star_idx + 1`) and the string pointer to one position after the star's last match (`s_ptr = ++s_tmp_idx`).
   - If there's a mismatch and no `*` to backtrack to, the match fails.
3. **Final Check**: After the string is exhausted, any remaining characters in the pattern must be `*`s.

### 📚 Key Concepts
- **Greedy Algorithm with Backtracking**: The two-pointer approach greedily matches characters but uses the star's position to backtrack on a mismatch.
`,
  // problem explanation--> 145
  'as-largest-rectangle-in-histogram': `
### 💡 Problem Breakdown
This is a classic and difficult problem. Given an array of heights representing a histogram, the goal is to find the area of the largest rectangle that can be inscribed under the bars.

### ⚙️ Solution Walkthrough
The most efficient solution uses a **monotonic stack**. The stack will store the indices of the histogram bars in increasing order of their height.
1. Initialize `maxArea = 0` and an empty `stack`.
2. Loop through the `heights` array (conceptually appending a bar of height 0 at the end to flush the stack).
3. **`while` Loop**: For each bar `i`, while the stack is not empty and the current bar's height is less than the height of the bar at the index on top of the stack:
   - This means the bar at the top of the stack is the height of a potential rectangle.
   - Pop the index from the stack. Let this be `h`.
   - The width of the rectangle is from the new top of the stack to the current index `i`.
   - Calculate the `area = heights[h] * width` and update `maxArea`.
4. **Push**: After the `while` loop, push the current index `i` onto the stack.
5. Return `maxArea`.

### 📚 Key Concepts
- **Monotonic Stack**: A stack where elements are always in a specific order. It's used here to efficiently find the left and right boundaries for each bar as a potential height of the largest rectangle.
`,
  // problem explanation--> 146
  'as-maximal-rectangle': `
### 💡 Problem Breakdown
This problem extends the "Largest Rectangle in Histogram" problem to a 2D binary matrix. The goal is to find the largest rectangle containing only '1's.

### ⚙️ Solution Walkthrough
The key insight is to reduce this 2D problem to a series of 1D "Largest Rectangle in Histogram" problems.
1. Initialize `maxArea = 0`.
2. Create an array `heights` of the same width as the matrix, initialized to zeros.
3. **Loop through Rows**: Iterate through each `row` of the matrix.
4. **Build Histogram**: For each `row`, update the `heights` array. For each column `j`:
   - If `matrix[row][j]` is '1', increment `heights[j]`.
   - If `matrix[row][j]` is '0', reset `heights[j]` to 0.
   - This `heights` array now represents a histogram for the current row and all rows above it.
5. **Solve 1D Problem**: Call the "Largest Rectangle in Histogram" algorithm on the current `heights` array.
6. **Update Max**: Update the overall `maxArea` with the result from the 1D problem.
7. Return `maxArea` after processing all rows.

### 📚 Key Concepts
- **Problem Reduction**: Transforming a 2D problem into a series of 1D problems that can be solved with a known algorithm.
- **Dynamic Programming**: The `heights` array is a form of DP state that carries information from one row to the next.
`,
  // problem explanation--> 147
  'as-word-search-ii': `
### 💡 Problem Breakdown
This is a very advanced version of the "Word Search" problem. Given a grid and a dictionary of words, you need to find *all* the words from the dictionary that can be formed in the grid.

### ⚙️ Solution Walkthrough
A naive approach of searching for each word individually would be too slow. A highly efficient solution combines a **Trie** data structure with backtracking (DFS).
1. **Build Trie**: Insert all the words from the dictionary into a Trie. A Trie is a tree-like data structure that is very efficient for prefix searches. Mark the end of each word in the Trie.
2. **Backtracking on the Grid**:
   - Use nested loops to start a DFS from every cell `(r, c)` in the grid.
   - The DFS function will take the current cell and the current Trie node as arguments.
3. **DFS Logic**:
   - Check for out-of-bounds or if the current character's path doesn't exist in the Trie from the current Trie node. If so, return.
   - Move to the next Trie node corresponding to the current character.
   - If the new Trie node marks the end of a word, add that word to the results. To avoid duplicates, you might also "un-mark" it in the Trie.
   - Mark the current grid cell as visited.
   - Make recursive calls for all four neighbors.
   - Un-mark the grid cell (backtrack).

### 📚 Key Concepts
- **Trie (Prefix Tree)**: The core data structure that allows searching for all words simultaneously instead of one by one.
- **Backtracking / DFS**: The algorithm for exploring paths in the grid.
`,
  // problem explanation--> 148
  'as-basic-calculator-iii': `
### 💡 Problem Breakdown
This is the most advanced version of the basic calculator problem. It requires handling numbers, `+`, `-`, `*`, `/`, and nested parentheses.

### ⚙️ Solution Walkthrough
The standard algorithm for this is a variation of Dijkstra's "Shunting-yard algorithm" or simply using two stacks: one for numbers (`values`) and one for operators (`ops`).
1. Loop through the string.
   - If it's a digit, build the number.
   - If it's `(`: Push it onto the `ops` stack.
   - If it's `)`: Evaluate the expression inside the parentheses by repeatedly popping from `values` and `ops` and applying the operations until you find the matching `(`.
   - If it's an operator: While the `ops` stack is not empty and the operator at the top has higher or equal precedence, evaluate that operation first. Then, push the current operator onto the `ops` stack.
2. After the main loop, evaluate any remaining operations on the stacks.
3. The final result is the single number left on the `values` stack.

A recursive solution is also possible, where a function is called to evaluate the expression inside a pair of parentheses.

### 📚 Key Concepts
- **Stack**: The primary data structure for parsing and evaluating expressions with precedence and parentheses.
`,
  // problem explanation--> 149
  'as-sliding-window-median': `
### 💡 Problem Breakdown
This is a very advanced sliding window problem. As a window of size `k` slides across an array, you need to find the median of the elements in the window at each step.

### ⚙️ Solution Walkthrough
The key to an efficient solution is to maintain the window's elements in a sorted fashion so the median can be found quickly. The most efficient data structure for this is using **two heaps**:
1. A **Max-Heap** to store the smaller half of the numbers in the window.
2. A **Min-Heap** to store the larger half of the numbers in the window.

The heaps are kept balanced (or nearly balanced) in size. The median can then be calculated in O(1) time from the top elements of the heaps.
- As the window slides:
  - An element is removed from one of the heaps (O(log k)).
  - A new element is added to one of the heaps (O(log k)).
  - The heaps are re-balanced by moving an element from one to the other if their sizes differ by more than 1 (O(log k)).

### 📚 Key Concepts
- **Heaps (Priority Queues)**: The ideal data structure for maintaining an ordered collection and quickly accessing the min/max element.
- **Two-Heap Median**: A standard pattern for finding the median of a stream of numbers.
`,
  // problem explanation--> 150
  'as-longest-consecutive-sequence-ii': `
### 💡 Problem Breakdown
This is a graph traversal problem on a 2D grid. The task is to find the length of the longest path where each step moves to an adjacent cell (up, down, left, right) with a value that is exactly one greater.

### ⚙️ Solution Walkthrough
A Depth-First Search (DFS) with memoization is a good approach.
1. **Memoization**: Create a `memo` table of the same size as the grid to store the length of the longest path *starting* at each cell.
2. **Outer Loops**: Iterate through every cell `(r, c)` in the grid.
3. **DFS Function**: For each cell, call a `dfs(r, c)` helper function.
   - If the result for `(r, c)` is already in the `memo` table, return it.
   - Otherwise, initialize `maxLength = 1` (for the cell itself).
   - Check all four neighbors. If a neighbor `(nr, nc)` has a value of `grid[r][c] + 1`, it's a valid next step.
   - Make a recursive call: `1 + dfs(nr, nc)`. Update `maxLength` with the result.
   - Store the final `maxLength` in `memo[r][c]` and return it.
4. Keep track of the overall maximum length found from all starting DFS calls.

### 📚 Key Concepts
- **Depth-First Search (DFS)**: The core traversal algorithm.
- **Memoization / Dynamic Programming**: Caching the results for each cell is crucial to avoid re-computing paths and achieve an efficient solution.
`,
  // problem explanation--> 151
  'as-find-common-characters': `
### 💡 Problem Breakdown
The task is to find all characters that are present in *every single string* in an array of strings. The result should include duplicate characters. For example, if 'l' appears twice in every string, the result should contain 'l', 'l'.

### ⚙️ Solution Walkthrough
The solution can be built iteratively. We start with the character counts of the first word and then refine these counts with each subsequent word.
1.  **Initial Frequencies**: Create a frequency map (e.g., an array of 26 zeros for the alphabet) for the first word.
2.  **Loop Through Other Words**: Iterate through the rest of the words in the array.
3.  For each word, create a temporary frequency map for its characters.
4.  **Update Master Frequencies**: Now, update the master frequency map. For each character, its new count should be the *minimum* of its current count and its count in the temporary map. This ensures the character is common to all words seen so far.
5.  **Build Result**: After processing all words, the master frequency map holds the counts of the common characters. Build the final result array from this map.

### 📚 Key Concepts
- **Frequency Counting**: The core data structure used to track character occurrences.
- **Iterative Refinement**: The set of common characters is refined step-by-step by intersecting it with the characters of each subsequent word.
`,
  // problem explanation--> 152
  'as-valid-palindrome-ii': `
### 💡 Problem Breakdown
This problem asks if a string can become a palindrome by removing at most *one* character.

### ⚙️ Solution Walkthrough
A two-pointer approach is efficient. We scan the string from both ends.
1.  **Initialize**: Set a `left` pointer at the start and a `right` pointer at the end.
2.  **Loop**: While `left < right`:
    - If `s[left]` and `s[right]` are the same, they form a palindrome, so we can move the pointers inward.
    - If they are *different*, this is our one chance to make a deletion. The remaining string can only be a palindrome if either the substring *without* `s[left]` is a palindrome, OR the substring *without* `s[right]` is a palindrome.
    - We check both possibilities with a helper palindrome-checking function and return `true` if either one works.
3.  If the loop completes without finding any mismatches, the string was already a palindrome, which is also a valid case. Return `true`.

### 📚 Key Concepts
- **Two-Pointer Technique**: The primary method for scanning the string.
- **Case Analysis**: When a mismatch is found, the problem branches into two subproblems that must be checked.
`,
  // problem explanation--> 153
  'as-string-compression': `
### 💡 Problem Breakdown
The goal is to perform run-length encoding on a string. For example, 'aabcccccaaa' should be compressed to 'a2b1c5a3'.

### ⚙️ Solution Walkthrough
An iterative approach with a single pass is effective.
1.  **Initialize**: Create an empty result string.
2.  **Loop**: Iterate through the input string with a pointer `i`.
3.  **Count Runs**: For each character `str[i]`, use a nested `while` loop or another pointer `j` to count how many times that character repeats consecutively.
4.  **Append**: Append the character and its count to the result string.
5.  **Advance Pointer**: Move the main pointer `i` past the run of characters you just counted.
6.  Repeat until the end of the string.
7.  **Final Check**: A common variant of this problem asks to return the original string if the compressed version is not shorter.

### 📚 Key Concepts
- **Run-Length Encoding (RLE)**: A basic form of data compression.
- **Two-Pointer Technique**: The main loop pointer `i` and an inner pointer `j` can be used to track the start and end of a run of identical characters.
`,
  // problem explanation--> 154
  'as-one-edit-away': `
### 💡 Problem Breakdown
The task is to determine if two strings are "one edit away" from each other. An edit can be an insertion, a deletion, or a replacement of a single character.

### ⚙️ Solution Walkthrough
The solution involves analyzing the lengths of the strings first.
1.  **Length Check**: If the difference in lengths is greater than 1, it's impossible to make them the same with one edit, so return `false`.
2.  **Same Length (Replacement Check)**: If the lengths are the same, iterate through both strings simultaneously. Count the number of differing characters. If the difference count is 0 or 1, they are one edit away.
3.  **Different Length (Insert/Delete Check)**: If the lengths differ by 1, use two pointers, one for each string. Iterate through both. When you find a mismatch, advance the pointer of the *longer* string, effectively simulating a "deletion" from the longer string (or an "insertion" into the shorter one). Allow this to happen only once. If you find a second mismatch, return `false`.

### 📚 Key Concepts
- **Case Analysis**: The logic is broken down based on the difference in string lengths.
- **Two-Pointer Technique**: Used for the insertion/deletion check.
`,
  // problem explanation--> 155
  'as-rotate-string': `
### 💡 Problem Breakdown
A "left shift" or "rotation" on a string moves the first character to the end. The task is to check if one string can become another through some number of these rotations.

### ⚙️ Solution Walkthrough
There is a very clever and concise trick to solve this problem.
1.  **Length Check**: First, if the two strings do not have the same length, it's impossible, so return `false`.
2.  **Concatenation Trick**: Create a new string by concatenating the original string `s` with itself (`s + s`).
3.  **Check Inclusion**: Check if this new, doubled string contains the `goal` string. If it does, then `s` can be rotated to become `goal`.

Example: `s = "abcde"`, `goal = "cdeab"`.
`s + s` becomes `"abcdeabcde"`.
This new string clearly contains `"cdeab"` as a substring.

### 📚 Key Concepts
- **String Manipulation**: A clever trick that transforms the rotation problem into a simpler substring search problem.
`,
  // problem explanation--> 156
  'as-min-add-to-make-parentheses-valid': `
### 💡 Problem Breakdown
The goal is to find the minimum number of parentheses (`(` or `)`) that need to be added to a string to make it a valid parentheses string.

### ⚙️ Solution Walkthrough
A single pass through the string with a balance counter is very effective.
1.  **Initialize**: Set two counters, `open_needed` and `close_needed`, to 0. `close_needed` can also be thought of as the current balance of open parentheses.
2.  **Loop**: Iterate through the string.
    - If you see an opening parenthesis `(`, increment `close_needed`.
    - If you see a closing parenthesis `)`, decrement `close_needed`.
    - **Key Insight**: If `close_needed` ever becomes negative, it means we have an unmatched closing parenthesis. We must add an opening parenthesis to fix it. So, increment `open_needed` and reset `close_needed` back to 0.
3.  **Final Result**: After the loop, `open_needed` has the count of opening parentheses we had to add. `close_needed` has the count of any remaining open parentheses that need to be closed. The total additions needed is `open_needed + close_needed`.

### 📚 Key Concepts
- **Stack Simulation**: The `close_needed` variable effectively acts like a stack counter, tracking the balance of open parentheses.
`,
  // problem explanation--> 157
  'as-backspace-string-compare': `
### 💡 Problem Breakdown
The task is to compare two strings after processing backspaces (`#`). For example, "ab#c" becomes "ac".

### ⚙️ Solution Walkthrough
A simple approach is to build the final strings and then compare them.
1.  **Helper Function**: Create a helper function that takes a string and processes the backspaces.
2.  **Build Final String**: Inside the helper, iterate through the input string. Use a stack (or an array) to build the result.
    - If the character is not a `#`, push it onto the stack.
    - If the character is a `#` and the stack is not empty, pop from the stack.
3.  Join the characters in the stack to get the final string.
4.  **Compare**: Call the helper function on both input strings and compare their results.

An O(1) space solution is also possible by iterating through the strings *backwards* with two pointers, skipping characters as needed.

### 📚 Key Concepts
- **Stack**: A natural data structure for handling backspace operations.
`,
  // problem explanation--> 158
  'as-kth-missing-positive-number': `
### 💡 Problem Breakdown
Given a sorted array of positive integers, the task is to find the `k`-th positive integer that is missing from the sequence.

### ⚙️ Solution Walkthrough
A single pass through the array can solve this.
1.  **Initialize**: Keep track of the current positive number we expect to see, `current_num = 1`, and the count of missing numbers found so far, `missing_count = 0`.
2.  **Iterate**: Use a pointer `i` for the array.
3.  **Loop**: While `missing_count < k`:
    - If the number at `arr[i]` is equal to `current_num`, it means this number is present. Advance the array pointer `i`.
    - If it's not equal, it means `current_num` is missing. Increment `missing_count`.
    - In either case, increment `current_num` to check for the next positive integer.
4.  **Result**: When the loop terminates, `current_num - 1` will be the `k`-th missing positive number.

A binary search approach can provide a more efficient O(log n) solution.

### 📚 Key Concepts
- **Gap Analysis**: The solution works by finding the gaps between expected numbers and the numbers present in the array.
`,
  // problem explanation--> 159
  'as-max-consecutive-ones-iii': `
### 💡 Problem Breakdown
This is a sliding window problem. You are given a binary array and an integer `k`, which is the maximum number of zeros you are allowed to flip to ones. The goal is to find the length of the longest contiguous subarray of ones you can achieve.

### ⚙️ Solution Walkthrough
This is a classic sliding window problem where the window's validity is constrained by the number of zeros it contains.
1.  **Initialize**: Set `left = 0`, `maxLength = 0`, and `zeroCount = 0`.
2.  **Expand Window**: Loop through the array with a `right` pointer.
    - If `arr[right]` is a 0, increment `zeroCount`.
3.  **Shrink Window**: Use a `while` loop to shrink the window from the left as long as `zeroCount > k`.
    - If the character leaving the window, `arr[left]`, is a 0, decrement `zeroCount`.
    - Increment `left`.
4.  **Update Max Length**: After each expansion, the window is valid. Update `maxLength` with the current window size (`right - left + 1`).
5.  Return `maxLength`.

### 📚 Key Concepts
- **Sliding Window**: The core technique for solving this problem efficiently in O(n) time.
`,
  // problem explanation--> 160
  'as-find-numbers-with-even-digits': `
### 💡 Problem Breakdown
The task is to count how many numbers in an array have an even number of digits.

### ⚙️ Solution Walkthrough
A straightforward solution is to loop through the array and check each number.
1.  **Initialize**: `count = 0`.
2.  **Loop**: Iterate through each `num` in the array.
3.  **Check Digits**:
    - Convert the `num` to a string.
    - Get the length of the string.
    - Check if the length is even using the modulo operator (`% 2 === 0`).
4.  **Increment**: If the number of digits is even, increment `count`.
5.  Return `count`.

### 📚 Key Concepts
- **Type Conversion**: Converting a number to a string is the easiest way to count its digits.
`,
  // problem explanation--> 161
  'as-duplicate-zeros': `
### 💡 Problem Breakdown
The task is to modify a fixed-length array in-place. For every zero, you must duplicate it, shifting the subsequent elements to the right. Elements shifted off the end are lost.

### ⚙️ Solution Walkthrough
A naive approach of inserting zeros and shifting would be inefficient (O(n^2)). A better approach is a two-pass solution.
1.  **First Pass (Count Zeros)**: Loop through the array to count the number of zeros that will be duplicated within the final bounds of the array. This helps determine the final length of the content to be considered.
2.  **Second Pass (Write Backwards)**: Loop *backwards* from the end of the conceptual new length.
   - Use a "write pointer" starting at the end of the new conceptual length and a "read pointer" at the end of the original length.
   - Copy elements from the read pointer to the write pointer.
   - If the element at the read pointer is a zero, write it twice to the write positions and decrement the write pointer an extra time.
This backward pass prevents overwriting elements before they have been read and moved.

### 📚 Key Concepts
- **In-place Algorithm**: Modifying the array directly.
- **Two-Pass Algorithm**: The first pass gathers information, and the second pass performs the modification.
`,
  // problem explanation--> 162
  'as-check-if-n-and-double-exist': `
### 💡 Problem Breakdown
The task is to check if there are two numbers `N` and `M` in an array such that `N = 2 * M`.

### ⚙️ Solution Walkthrough
The most efficient solution uses a `Set` to keep track of the numbers seen so far.
1.  **Initialize**: Create an empty `Set` called `seen`.
2.  **Loop**: Iterate through each `num` in the array.
3.  **Check**: For each `num`, check if either its double (`num * 2`) or its half (`num / 2`) already exists in the `seen` set.
    - If either exists, you've found a valid pair, so return `true`.
4.  **Add to Set**: After checking, add the current `num` to the `seen` set for future checks.
5.  If the loop completes, no such pair was found. Return `false`.

### 📚 Key Concepts
- **`Set`**: Provides O(1) average time lookups, making the overall solution efficient (O(n)).
`,
  // problem explanation--> 163
  'as-replace-elements-with-greatest-on-right': `
### 💡 Problem Breakdown
The task is to modify an array in-place. Each element should be replaced by the largest element among all the elements to its right. The last element should be replaced with -1.

### ⚙️ Solution Walkthrough
A single pass through the array *backwards* is the most efficient way to solve this.
1.  **Initialize**: Keep track of the `maxSoFar` seen during the backward traversal. Initialize it to -1, which will be the value for the last element.
2.  **Loop Backwards**: Iterate through the array from the last element to the first.
3.  **Logic**: For each element at index `i`:
    - Store the current value `arr[i]` in a temporary variable.
    - Replace `arr[i]` with the current `maxSoFar`.
    - Update `maxSoFar` to be the maximum of its current value and the value you just replaced (`temp`).
4.  After the loop, the array will be correctly modified.

### 📚 Key Concepts
- **Backward Traversal**: Iterating from right to left is the key to solving this problem efficiently, as it allows you to easily keep track of the maximum element to the right.
`,
  // problem explanation--> 164
  'as-third-maximum-number': `
### 💡 Problem Breakdown
The goal is to find the third *distinct* maximum number in an array. If there is no third distinct maximum, the overall maximum number should be returned.

### ⚙️ Solution Walkthrough
A simple approach is to use a `Set` to get the unique numbers and then sort them.
1.  **Get Unique Numbers**: Create a `Set` from the input array to remove duplicates, then convert it back to an array.
2.  **Sort**: Sort the unique numbers array in descending order.
3.  **Check and Return**:
    - If the length of the unique sorted array is less than 3, it means there is no third maximum. Return the first element (the overall maximum).
    - Otherwise, return the element at index 2, which is the third maximum.

An O(n) solution is also possible by iterating through the array once while keeping track of the top three distinct maximums seen so far.

### 📚 Key Concepts
- **Uniqueness**: Using a `Set` is the easiest way to handle the "distinct" requirement.
- **Sorting**: A straightforward way to find the n-th largest element.
`,
  // problem explanation--> 165
  'as-generate-parentheses': `
### 💡 Problem Breakdown
This is a classic backtracking problem. The task is to generate all combinations of `n` pairs of well-formed (balanced) parentheses.

### ⚙️ Solution Walkthrough
A recursive backtracking function is used to build the parenthesis strings. The function needs to keep track of the number of open and close parentheses used so far.
1.  **`backtrack(currentString, openCount, closeCount)`**:
    - **Base Case**: If `currentString.length` equals `2 * n`, we have a complete and valid combination. Add it to the results.
    - **Recursive Steps**:
      - **Add an open parenthesis**: If we still have open parentheses left to use (`openCount < n`), we can add one. Make a recursive call with the updated string and `openCount`.
      - **Add a close parenthesis**: If the number of close parentheses is less than the number of open ones (`closeCount < openCount`), we can add one to maintain balance. Make a recursive call with the updated string and `closeCount`.

### 📚 Key Concepts
- **Backtracking**: The algorithm explores the decision tree of adding either an open or a close parenthesis at each step, pruning branches that would lead to an invalid string.
- **Constraints**: The two recursive calls are guarded by the constraints that ensure the resulting string is always well-formed.
`,
  // problem explanation--> 166
  'as-multiply-strings': `
### 💡 Problem Breakdown
The task is to multiply two large numbers that are represented as strings, avoiding the use of built-in BigInt libraries.

### ⚙️ Solution Walkthrough
The solution simulates grade-school multiplication.
1. **Initialize**: Create a `result` array of size `len1 + len2`, filled with zeros.
2. **Nested Loops**: Loop through the first number (`num1`) from right to left. Inside, loop through the second number (`num2`) from right to left.
3. **Multiply and Sum**: For each pair of digits, multiply them and add the result to the appropriate position in the `result` array. This involves handling a "carry" just like manual multiplication. The product of `num1[i]` and `num2[j]` will affect the positions `result[i + j]` and `result[i + j + 1]`.
4. **Final Result**: After the loops, the `result` array contains the digits of the product, but possibly with leading zeros and values greater than 9. Process this array to handle carries and format it as the final string.

### 📚 Key Concepts
- **Array as Number**: Using an array to handle arithmetic on numbers larger than the standard limits.
- **Manual Arithmetic Simulation**: The algorithm directly models the process of long multiplication taught in school.
`,
  // problem explanation--> 167
  'as-basic-calculator': `
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
  // problem explanation--> 168
  'as-find-the-celebrity': `
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
  // problem explanation--> 169
  'as-dot-product-of-two-sparse-vectors': `
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
  // problem explanation--> 170
  'as-pancake-sorting': `
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
  // problem explanation--> 171
  'as-reverse-words-in-a-string': `
### 💡 Problem Breakdown
The task is to take a string containing words separated by spaces and reverse the order of the words themselves, while handling extra spacing. For example, "  the sky is blue  " should become "blue is sky the".

### ⚙️ Solution Walkthrough
A clean solution uses built-in methods.
1.  **Trim**: Use \`.trim()\` to remove leading and trailing whitespace.
2.  **Split**: Use \`.split(/\s+/)\` with a regular expression for one or more whitespace characters. This splits the string into an array of words and handles multiple spaces between words correctly.
3.  **Reverse**: Use the array's \`.reverse()\` method to reverse the order of the words.
4.  **Join**: Use \`.join(' ')\` to join the words back into a single string with a single space between each.

### 📚 Key Concepts
- **String and Array Manipulation**: A good demonstration of how to chain methods for a concise solution.
- **Regular Expressions**: Used here to split the string robustly based on any amount of whitespace.
`,
  // problem explanation--> 172
  'as-reverse-words-in-a-string-ii': `
### 💡 Problem Breakdown
This is a different string reversal problem. You need to iterate through the string in chunks of size \`2k\`. For each chunk, you reverse the first \`k\` characters.

### ⚙️ Solution Walkthrough
1.  **Convert to Array**: Convert the string to an array of characters, as strings are immutable and arrays are easier to modify in place.
2.  **Loop in Chunks**: Use a \`for\` loop that increments its counter by \`2k\` in each step.
3.  **Define Subarray**: In each iteration, define the start and end indices of the part to be reversed. The start is \`i\`, and the end is \`Math.min(i + k - 1, arr.length - 1)\` to handle cases where the final chunk is smaller than \`k\`.
4.  **Reverse Subarray**: Use a two-pointer approach (or a helper function) to reverse the characters within these start and end bounds.
5.  **Join**: After the loop, join the character array back into a string.

### 📚 Key Concepts
- **Chunking**: Processing an array or string in fixed-size blocks.
- **In-place Subarray Reversal**: An efficient way to reverse a portion of an array.
`,
  // problem explanation--> 173
  'as-valid-word-abbreviation': `
### 💡 Problem Breakdown
The task is to check if a given abbreviation is valid for a word. The abbreviation can contain letters and numbers. A number represents a count of skipped characters. For example, "i12iz4n" is a valid abbreviation for "internationalization".

### ⚙️ Solution Walkthrough
A two-pointer approach is effective for scanning both the word and the abbreviation simultaneously.
1.  **Initialize**: Set pointers \`i\` (for word) and \`j\` (for abbreviation) to 0.
2.  **Loop**: While both pointers are within their respective string bounds:
    - If the character in the abbreviation is a letter, check if it matches the character in the word. If not, return \`false\`. Then, advance both pointers.
    - If the character is a digit (and not '0' at the start of a number), parse the entire number from the abbreviation. Advance the word pointer `i` by this number.
3.  **Final Check**: The abbreviation is valid only if both pointers have reached the end of their respective strings.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used to scan and compare two related sequences.
- **String Parsing**: The logic requires parsing numbers out of the abbreviation string.
`,
  // problem explanation--> 174
  'as-find-and-replace-pattern': `
### 💡 Problem Breakdown
This problem is another variation of "Isomorphic Strings". You need to find which words from a list follow the same character pattern as a given pattern string. For pattern "abb", the word "mee" matches, but "abc" does not.

### ⚙️ Solution Walkthrough
The solution involves creating a "canonical representation" for both the pattern and each word and then comparing them.
1.  **Canonical Function**: Create a helper function that takes a string and converts it to its canonical pattern. For "abb", it could be "0.1.1". For "mee", it's also "0.1.1". For "abc", it's "0.1.2".
    - This function uses a map to store the first seen index of each character. It builds the canonical string by appending these indices.
2.  **Filter Words**:
    - Calculate the canonical pattern for the input `pattern`.
    - Use the `.filter()` array method on the `words` list.
    - The filter condition is `getCanonical(word) === canonicalPattern`.

### 📚 Key Concepts
- **Canonical Representation**: Transforming data into a standard form to make comparison easy. This is a powerful technique for many problems.
`,
  // problem explanation--> 175
  'as-count-binary-substrings': `
### 💡 Problem Breakdown
The task is to count valid binary substrings. A valid substring has an equal number of 0s and 1s, and all the 0s and 1s are grouped consecutively (e.g., "0011", "10").

### ⚙️ Solution Walkthrough
An efficient solution involves counting the lengths of consecutive groups of identical characters.
1.  **Group Counts**: First, iterate through the string and create an array of the lengths of consecutive groups. For "00110011", this would be `[2, 2, 2, 2]`. For "10101", it would be `[1, 1, 1, 1, 1]`.
2.  **Count Substrings**: Iterate through this new `groups` array from the first element to the second-to-last.
3.  For each pair of adjacent group lengths `groups[i]` and `groups[i+1]`, the number of valid substrings they can form is `Math.min(groups[i], groups[i+1])`.
4.  Add this minimum to a running total.
5.  Return the total.

### 📚 Key Concepts
- **Data Transformation**: The problem is simplified by first transforming the raw string into a more abstract representation (the group lengths).
`,
  // problem explanation--> 176
  'as-reorganize-string': `
### 💡 Problem Breakdown
The goal is to rearrange a string so that no two adjacent characters are the same. If it's impossible, return an empty string.

### ⚙️ Solution Walkthrough
This is a greedy problem that can be solved efficiently with a frequency map and a max-heap, but a simpler greedy approach also works.
1.  **Frequency Map**: Create a frequency map of all characters.
2.  **Check Impossibility**: Find the most frequent character. If its count is more than half the string length rounded up, it's impossible to rearrange. Return "".
3.  **Greedy Placement**:
    - Sort the characters by frequency in descending order.
    - Create a result array.
    - Place the most frequent characters at the even indices first (0, 2, 4, ...).
    - Then, place the remaining characters at the odd indices (1, 3, 5, ...).
4.  This two-pass placement strategy ensures that the most frequent characters are separated as much as possible, guaranteeing a valid arrangement if one exists.
5.  Join the result array into a string.

### 📚 Key Concepts
- **Greedy Algorithm**: The strategy of placing the most frequent characters first in spaced-out positions is a greedy approach that leads to a solution.
`,
  // problem explanation--> 177
  'as-custom-sort-string': `
### 💡 Problem Breakdown
You are given a `order` string which defines a custom alphabetical order, and a second string `s`. You need to sort `s` according to the custom order defined by `order`. Characters not in `order` should be appended at the end in their original alphabetical order.

### ⚙️ Solution Walkthrough
A frequency map is a great way to handle this.
1.  **Frequency Map**: Create a frequency map of the characters in the string `s`.
2.  **Build Sorted String**:
    - Initialize an empty `result` string.
    - Iterate through the `order` string. For each character, if it exists in the frequency map, append it to the `result` that many times and then remove it from the map.
3.  **Append Remainder**: After the first loop, the map only contains characters from `s` that were not in `order`. Iterate through the remaining entries in the map (in alphabetical order) and append them to the `result` string.

### 📚 Key Concepts
- **Frequency Counting**: The core data structure for counting the characters to be sorted.
- **Custom Sorting**: The problem is a form of custom sorting where the sort order is externally defined.
`,
  // problem explanation--> 178
  'as-partition-labels': `
### 💡 Problem Breakdown
The task is to partition a string into the maximum number of parts, with the constraint that each letter can only appear in one part.

### ⚙️ Solution Walkthrough
A greedy approach with two passes can solve this efficiently.
1.  **First Pass (Last Occurrences)**: Create a map or array to store the last seen index of every character in the string.
2.  **Second Pass (Partitioning)**:
    - Initialize `start = 0` (start of the current partition) and `end = 0` (farthest reach of the current partition).
    - Iterate through the string with a pointer `i`.
    - For each character `s[i]`, update the `end` of the current partition to be the maximum of its current value and the last occurrence index of `s[i]` (from our map).
    - **Key Insight**: If the current index `i` has reached the `end` of the current partition, it means all characters within this partition have their last occurrences also within this partition. We have found a complete partition.
    - Record the size of this partition (`end - start + 1`) and update `start` to `i + 1` for the next partition.

### 📚 Key Concepts
- **Greedy Algorithm**: The greedy approach of extending the current partition to the farthest last occurrence of any character within it correctly identifies the smallest possible valid partitions.
`,
  // problem explanation--> 179
  'as-repeated-string-match': `
### 💡 Problem Breakdown
The task is to find the minimum number of times a string `a` must be repeated so that another string `b` becomes a substring of the repeated string.

### ⚙️ Solution Walkthrough
1.  **Initialize**: Create a temporary string `s` with the initial value of `a`, and a `count` of 1.
2.  **Loop**: Use a `while` loop to keep appending `a` to `s` as long as the length of `s` is less than the length of `b`. Increment `count` in each step.
3.  **Check**: After the loop, `s` is now at least as long as `b`. Check if `s` includes `b`.
    - If it does, `count` is the answer.
    - If it doesn't, there's one more possibility: `b` might span across the seam of two `a`'s. Append `a` one more time (`s + a`) and check again. If it's found now, the answer is `count + 1`.
4.  If it's still not found, it's impossible. Return -1.

### 📚 Key Concepts
- **String Building**: The solution involves iteratively building a larger string.
- **Edge Case Handling**: The check for `s + a` is crucial to handle cases where `b` is formed across the boundary of two repeated `a`'s.
`,
  // problem explanation--> 180
  'as-longest-uncommon-subsequence-i': `
### 💡 Problem Breakdown
A "subsequence" is a sequence that can be derived from another by deleting some characters without changing the order of the remaining ones. An "uncommon subsequence" is a subsequence of one string that is *not* a subsequence of the other. The task is to find the length of the longest such subsequence.

### ⚙️ Solution Walkthrough
This problem has a surprisingly simple trick.
1.  **Check for Equality**: If the two strings `a` and `b` are exactly the same, then any subsequence of `a` is also a subsequence of `b`. There is no uncommon subsequence. Return -1.
2.  **Return Max Length**: If the strings are different, then the longer of the two strings is itself a subsequence of itself, but it cannot be a subsequence of the shorter string. Therefore, the longest uncommon subsequence is simply the longer of the two strings. Return `Math.max(a.length, b.length)`.

### 📚 Key Concepts
- **Logical Reasoning**: The solution relies on a logical insight about the definition of a subsequence rather than a complex algorithm.
`,
  // problem explanation--> 181
  'as-verifying-an-alien-dictionary': `
### 💡 Problem Breakdown
The task is to check if a list of words is sorted lexicographically according to a given custom alphabet order.

### ⚙️ Solution Walkthrough
1.  **Create Order Map**: First, create a hash map that maps each character in the `order` string to its position (0, 1, 2, ...). This allows for O(1) lookups of a character's rank.
2.  **Loop Through Pairs**: Iterate through the `words` array, comparing each adjacent pair of words (`words[i]` and `words[i+1]`).
3.  **Compare Words**: For each pair, use a second loop to compare them character by character.
    - Find the first character where the two words differ.
    - Look up the rank of these differing characters in your order map.
    - If the rank of the character in the first word is greater than the rank in the second word, the list is not sorted. Return `false`.
    - If the rank in the first word is smaller, this pair is correctly ordered. Break the inner loop and check the next pair of words.
4.  **Prefix Check**: If the inner loop finishes without finding a difference, it means one word is a prefix of the other (e.g., "apple" and "app"). The list is only sorted if the shorter word comes first. Check for this case.
5.  If you get through all pairs without returning `false`, the list is sorted.

### 📚 Key Concepts
- **Lexicographical Sort**: The core concept, but with a custom alphabet.
- **Hash Map**: Used to make the character rank lookups efficient.
`,
  // problem explanation--> 182
  'as-remove-outermost-parentheses': `
### 💡 Problem Breakdown
A valid parentheses string can be decomposed into "primitive" strings (e.g., `(()())(())` is `(()())` + `(())`). A primitive string is a non-empty, valid parentheses string that cannot be split into two non-empty valid strings. The task is to remove the outermost parentheses of each primitive string in the decomposition.

### ⚙️ Solution Walkthrough
A single pass with a balance counter is effective.
1.  **Initialize**: `result` string and a `balance` counter.
2.  **Loop**: Iterate through the input string.
3.  **Logic**:
    - If the character is `(` and the `balance` is currently greater than 0, it means this is *not* an outermost opening parenthesis, so append it to the result.
    - If the character is `)` and the `balance` is greater than 1, it means this is *not* an outermost closing parenthesis, so append it to the result.
    - Update the `balance` counter for every character (`+1` for `(`, `-1` for `)`).
4.  Return the `result`.

### 📚 Key Concepts
- **Stack Simulation**: The `balance` counter tracks the nesting level, effectively simulating a stack to identify the outermost layers.
`,
  // problem explanation--> 183
  'as-reverse-only-letters': `
### 💡 Problem Breakdown
The task is to reverse a string, but only the English letters should be reversed. All other characters (like numbers, symbols, hyphens) must stay in their original positions.

### ⚙️ Solution Walkthrough
The two-pointer technique is a perfect fit for this in-place reversal.
1.  **Initialize**: Convert the string to an array of characters. Set a `left` pointer at the start and a `right` pointer at the end.
2.  **Loop**: While `left < right`:
    - Use a nested `while` loop to move the `left` pointer forward until it points to a letter.
    - Use another nested `while` loop to move the `right` pointer backward until it points to a letter.
    - **Swap**: Once both pointers are on letters, swap the characters at `arr[left]` and `arr[right]`.
    - **Advance**: Move both pointers inward (`left++`, `right--`).
3.  **Join**: Join the character array back into a string.

### 📚 Key Concepts
- **Two-Pointer Technique**: Ideal for in-place modifications and comparisons from both ends of a sequence.
- **Character Classification**: A helper function is needed to check if a character is an English letter.
`,
  // problem explanation--> 184
  'as-unique-email-addresses': `
### 💡 Problem Breakdown
The task is to count the number of unique email addresses that will actually receive mail, given a list of addresses and two special rules:
1.  Dots (`.`) in the "local name" part (before the `@`) are ignored.
2.  Anything after a plus sign (`+`) in the local name is ignored.

### ⚙️ Solution Walkthrough
The solution is to "normalize" each email address according to the rules and then count the number of unique normalized addresses using a `Set`.
1.  **Initialize**: Create an empty `Set` called `uniqueEmails`.
2.  **Loop**: Iterate through each `email` in the input list.
3.  **Normalize**: For each `email`:
    - Split it into `local` and `domain` parts at the `@`.
    - Split the `local` part at the `+` and take the first piece.
    - Remove all dots from this piece using a replace operation.
    - Recombine the normalized local part with the domain part.
4.  **Add to Set**: Add the normalized email address to the `uniqueEmails` set. The `Set` will automatically handle duplicates.
5.  **Return Size**: The final answer is the `.size` of the set.

### 📚 Key Concepts
- **String Normalization**: The core of the problem is converting various email strings into a single, canonical format.
- **`Set`**: The ideal data structure for counting unique items.
`,
  // problem explanation--> 185
  'as-reverse-string-ii': `
### 💡 Problem Breakdown
This is a string reversal problem. You need to iterate through the string in chunks of size \`2k\`. For each chunk, you reverse the first \`k\` characters.

### ⚙️ Solution Walkthrough
1.  **Convert to Array**: Convert the string to an array of characters, as strings are immutable and arrays are easier to modify in place.
2.  **Loop in Chunks**: Use a \`for\` loop that increments its counter by \`2k\` in each step.
3.  **Define Subarray**: In each iteration, define the start and end indices of the part to be reversed. The start is \`i\`, and the end is \`Math.min(i + k - 1, arr.length - 1)\` to handle cases where the final chunk is smaller than \`k\`.
4.  **Reverse Subarray**: Use a two-pointer approach (or a helper function) to reverse the characters within these start and end bounds.
5.  **Join**: After the loop, join the character array back into a string.

### 📚 Key Concepts
- **Chunking**: Processing an array or string in fixed-size blocks.
- **In-place Subarray Reversal**: An efficient way to reverse a portion of an array.
`,
  // problem explanation--> 186
  'as-add-strings': `
### 💡 Problem Breakdown
The task is to add two large numbers that are represented as strings, without using built-in BigInt libraries.

### ⚙️ Solution Walkthrough
The solution simulates grade-school addition from right to left.
1.  **Initialize**: Pointers `i` and `j` at the end of `num1` and `num2`, an empty `result` string, and a `carry` of 0.
2.  **Loop**: While there are still digits in either number or there's a carry:
    - Get the digit from `num1` (or 0 if `i` is out of bounds).
    - Get the digit from `num2` (or 0 if `j` is out of bounds).
    - Calculate the `sum` of these two digits plus the `carry`.
    - The new digit to be added to the result is `sum % 10`. Prepend it to the `result` string.
    - The new `carry` is `Math.floor(sum / 10)`.
    - Decrement the pointers `i` and `j`.
3.  Return the `result` string.

### 📚 Key Concepts
- **Manual Arithmetic Simulation**: The algorithm directly models the process of column-by-column addition taught in school.
`,
  // problem explanation--> 187
  'as-add-binary': `
### 💡 Problem Breakdown
This problem is very similar to "Add Strings," but the arithmetic is in base-2 (binary).

### ⚙️ Solution Walkthrough
The process is the same as decimal addition, but the sums and carries are calculated in binary.
1.  **Initialize**: Pointers `i` and `j` at the end of the binary strings, an empty `result` string, and a `carry` of 0.
2.  **Loop**: While there are digits or a carry:
    - Get the bit from `a` and `b` (as numbers 0 or 1).
    - Calculate `sum = bitA + bitB + carry`.
    - The new digit for the result is `sum % 2`. Prepend it.
    - The new carry is `Math.floor(sum / 2)`.
    - Decrement pointers.
3.  Return the `result`.

### 📚 Key Concepts
- **Base-2 Arithmetic**: The core logic is adapted for binary.
- **Manual Arithmetic Simulation**: The same right-to-left summation pattern applies.
`,
  // problem explanation--> 188
  'as-longest-common-substring': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. The goal is to find the longest substring that is common to two given strings. Unlike a subsequence, a substring must be contiguous.

### ⚙️ Solution Walkthrough
A 2D DP table is used to solve this.
1.  **DP State**: Create a table `dp` where `dp[i][j]` stores the length of the longest common substring that *ends* at `str1[i-1]` and `str2[j-1]`.
2.  **Initialization**: Fill the table with zeros. Keep a separate `maxLength` variable.
3.  **Fill DP Table**: Use nested loops to iterate through the strings.
4.  **Transition**:
    - If `str1[i-1] === str2[j-1]`: The common substring is extended by one. Set `dp[i][j] = 1 + dp[i-1][j-1]`. Update `maxLength` if this new length is greater.
    - If the characters do not match, the common substring ending at this point is broken. Set `dp[i][j] = 0`.
5.  The final answer is `maxLength`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds upon the results of smaller subproblems.
- **Substring vs. Subsequence**: The DP transition is different. For a substring, a mismatch resets the count to zero.
`,
  // problem explanation--> 189
  'as-kmp-string-search': `
### 💡 Problem Breakdown
The Knuth-Morris-Pratt (KMP) algorithm is a highly efficient string searching algorithm that achieves O(n+m) time complexity. It avoids redundant comparisons by preprocessing the "needle" (pattern) to understand its internal structure.

### ⚙️ Solution Walkthrough
The algorithm has two parts:
1.  **Preprocessing (LPS Array)**:
    - Create a "Longest Proper Prefix which is also a Suffix" (LPS) array for the pattern.
    - `lps[i]` stores the length of the longest proper prefix of `pattern[0...i]` which is also a suffix of `pattern[0...i]`.
    - This array tells us how many characters to "skip" forward on a mismatch.
2.  **Searching**:
    - Use two pointers, `i` for the text and `j` for the pattern.
    - If `text[i] === pattern[j]`, increment both.
    - If `j` reaches the end of the pattern, a match is found.
    - If a mismatch occurs after some characters have matched (`j > 0`), instead of resetting `j` to 0, we consult the LPS array: `j = lps[j-1]`. This moves the pattern pointer to the end of the prefix that we know already matches, avoiding re-checking those characters.

### 📚 Key Concepts
- **String Searching Algorithms**: KMP is a foundational algorithm in this area.
- **Prefix/Suffix Analysis**: The preprocessing step is the core innovation of the algorithm.
`,
  // problem explanation--> 190
  'as-rabin-karp-algorithm': `
### 💡 Problem Breakdown
The Rabin-Karp algorithm is another string-searching algorithm. Its key idea is to use **hashing** to quickly compare substrings. Instead of comparing characters one by one, it compares the hash value of the pattern with the hash value of substrings in the text.

### ⚙️ Solution Walkthrough
1.  **Hashing**: Choose a suitable hash function. A "rolling hash" is used, which allows the hash of the next substring to be calculated efficiently in O(1) time from the hash of the previous substring.
2.  **Calculate Pattern Hash**: Calculate the hash value for the `pattern`.
3.  **Slide and Compare**:
    - Calculate the hash for the first substring of the text.
    - Slide a window through the text. In each step, efficiently update the rolling hash.
    - If the hash of the current window matches the pattern's hash, it's a *potential* match.
    - **Collision Check**: Because different strings can have the same hash (a "collision"), you must then do a character-by-character comparison to confirm the match is real.

### 📚 Key Concepts
- **Hashing**: The core technique used for fast comparison.
- **Rolling Hash**: An efficient hash function that allows for O(1) updates as the window slides.
`,
  // problem explanation--> 191
  'as-manachers-algorithm': `
### 💡 Problem Breakdown
Manacher's algorithm is a highly advanced and clever algorithm that finds the longest palindromic substring in a string in O(n) linear time, which is an improvement over the O(n^2) "Expand from Center" approach.

### ⚙️ Solution Walkthrough
The algorithm is complex, but the core ideas are:
1.  **Transform String**: The input string is transformed to handle even-length palindromes easily. This is done by inserting a special character (like '#') between every character (e.g., "aba" -> "#a#b#a#"). Now, every palindrome has a unique center.
2.  **Palindrome Radii Array**: An array `P` is maintained, where `P[i]` stores the radius of the palindrome centered at `i` in the transformed string.
3.  **Leverage Symmetry**: The key insight is to reuse previous calculations. It keeps track of the `center` and `right` boundary of the palindrome found so far that extends farthest to the right. For a new position `i`, it can use the symmetry of palindromes to intelligently initialize the palindrome radius `P[i]` based on its mirror image, avoiding many redundant character comparisons.

### 📚 Key Concepts
- **Palindrome Symmetry**: The algorithm's efficiency comes from exploiting the symmetrical nature of palindromes.
`,
  // problem explanation--> 192
  'as-z-algorithm': `
### 💡 Problem Breakdown
The Z-Algorithm is a linear time string processing algorithm. It preprocesses a string `S` to create a "Z-array". The Z-array is an array `Z` where `Z[i]` is the length of the longest substring starting from `S[i]` which is also a prefix of `S`.

### ⚙️ Solution Walkthrough
The Z-array can be constructed in O(n) time by maintaining a "Z-box" `[L, R]`, which is the interval that corresponds to the prefix-substring with the rightmost endpoint found so far.
- When calculating `Z[i]`, if `i` is outside the current Z-box, a naive character-by-character comparison is done to find the new Z-box.
- If `i` is *inside* the Z-box, we can use the previously computed Z-values of its mirror position to initialize `Z[i]`, potentially avoiding many comparisons.

Once the Z-array is built for the string `pattern + '#' + text`, any position where the Z-value equals the length of the pattern indicates a match.

### 📚 Key Concepts
- **Z-array**: A data structure that encodes information about prefixes of a string.
- **String Searching**: The Z-algorithm is a powerful tool for efficient pattern matching.
`,
  // problem explanation--> 193
  'as-suffix-array-conceptual': `
### 💡 Problem Breakdown
A **Suffix Array** is a sorted array of all suffixes of a string. It's a powerful data structure for various string problems, simpler to implement than a Suffix Tree but still very capable.

### ⚙️ Solution Walkthrough
1.  **Generate Suffixes**: For a string "banana", the suffixes are: "banana", "anana", "nana", "ana", "na", "a".
2.  **Sort Suffixes**: Sort these suffixes lexicographically.
3.  **Store Indices**: The suffix array itself stores the starting indices of these sorted suffixes in the original string.
4.  **LCP Array**: It's often used alongside an LCP (Longest Common Prefix) array. The LCP array stores the length of the longest common prefix between adjacent suffixes in the sorted suffix array. The LCP array can be constructed in linear time.

These two arrays together can be used to solve problems like finding the longest repeated substring (the maximum value in the LCP array) or the longest common substring of two strings.

### 📚 Key Concepts
- **Suffix Array**: A data structure for advanced string processing.
- **LCP Array**: A companion array that enhances the power of the suffix array.
`,
  // problem explanation--> 194
  'as-suffix-tree-conceptual': `
### 💡 Problem Breakdown
A **Suffix Tree** is a more complex data structure than a Suffix Array but is extremely powerful. It is a compressed trie that contains all the suffixes of a given string.

### ⚙️ Solution Walkthrough
- Each path from the root to a leaf node represents one suffix of the string.
- The edges are labeled with substrings, not single characters, to achieve compression.
- A special character (like '$') is usually appended to the string to ensure every suffix ends at a leaf node.

Suffix Trees can be built in linear time using advanced algorithms like Ukkonen's algorithm. Once built, they can answer many complex string queries very quickly, such as finding the longest repeated substring, longest common substring, or longest palindromic substring, often in linear time relative to the query size.

### 📚 Key Concepts
- **Suffix Tree**: A compressed trie of all suffixes.
- **Advanced String Algorithms**: Represents the pinnacle of string processing data structures.
`,
  // problem explanation--> 195
  'as-aho-corasick-algorithm': `
### 💡 Problem Breakdown
The Aho-Corasick algorithm is a string-searching algorithm that is exceptionally efficient at finding all occurrences of multiple patterns (a dictionary of keywords) within a text simultaneously.

### ⚙️ Solution Walkthrough
The algorithm works by building a sophisticated state machine, which is essentially a Trie with additional "failure links."
1.  **Build Trie**: Insert all the keywords from the dictionary into a Trie.
2.  **Build Failure Links**: This is the key step. For each node in the Trie, a failure link points to the longest proper suffix of the string represented by that node which is also a prefix of some keyword. These links are built using a Breadth-First Search on the Trie.
3.  **Search**: Process the input text character by character through the state machine.
    - If the character matches a child of the current node, transition to that child.
    - If there's no match, follow the failure links until a match is found or you reach the root.
    - At each node you visit, check if it marks the end of a keyword. If so, you've found a match.

### 📚 Key Concepts
- **Aho-Corasick**: A dictionary-matching algorithm.
- **Trie**: The base data structure.
- **Finite Automata**: The algorithm effectively builds a finite automaton to recognize all keywords at once.
`,
  // problem explanation--> 196
  'as-longest-palindromic-subsequence': `
### 💡 Problem Breakdown
This is a dynamic programming problem. A "subsequence" does not have to be contiguous. The task is to find the longest subsequence of a string that is also a palindrome. For "bbbab", the longest palindromic subsequence is "bbbb" (length 4).

### ⚙️ Solution Walkthrough
The solution is a clever application of the "Longest Common Subsequence" (LCS) algorithm. The longest palindromic subsequence of a string `s` is the same as the longest common subsequence between `s` and its reverse, `reverse(s)`.
1.  **Reverse**: Create a reversed version of the input string `s`.
2.  **LCS**: Apply the standard LCS algorithm (using a 2D DP table) to the original string and the reversed string.
3.  The result of the LCS algorithm is the answer.

### 📚 Key Concepts
- **Problem Reduction**: Transforming the problem into another, well-known problem (LCS).
- **Dynamic Programming**: The underlying algorithm used to solve LCS.
`,
  // problem explanation--> 197
  'as-edit-distance': `
### 💡 Problem Breakdown
Edit distance (specifically, Levenshtein distance) is a measure of the difference between two strings. It's the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem.
1.  **DP State**: Create a 2D DP table, `dp`, where `dp[i][j]` is the edit distance between the first `i` characters of `word1` and the first `j` characters of `word2`.
2.  **Initialization**: Initialize the first row and column. The distance from an empty string to a string of length `j` is `j` insertions.
3.  **Fill DP Table**: Use nested loops.
4.  **Transition**:
    - If `word1[i-1] === word2[j-1]`, no operation is needed for these characters. The cost is the same as the cost for the strings without them: `dp[i][j] = dp[i-1][j-1]`.
    - If they are different, we must perform one operation. We take the minimum cost of the three possibilities:
      - Deletion: `dp[i-1][j]`
      - Insertion: `dp[i][j-1]`
      - Substitution: `dp[i-1][j-1]`
      And we add 1 for the cost of the operation.
5.  The final answer is `dp[word1.length][word2.length]`.

### 📚 Key Concepts
- **Dynamic Programming**: The optimal solution is built from the optimal solutions of its subproblems.
`,
  // problem explanation--> 198
  'as-longest-common-subsequence': `
### 💡 Problem Breakdown
The Longest Common Subsequence (LCS) problem is to find the longest subsequence common to two sequences (e.g., two strings). A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem solved with a 2D DP table.
1.  **DP State**: `dp[i][j]` will store the length of the LCS for `text1`'s prefix of length `i` and `text2`'s prefix of length `j`.
2.  **Fill DP Table**: Use nested loops.
3.  **Transition**:
    - If `text1[i-1] === text2[j-1]`, the last characters match. They are part of the LCS. So, `dp[i][j] = 1 + dp[i-1][j-1]`.
    - If they do not match, the LCS is the best we can do by either ignoring the last character of `text1` or ignoring the last character of `text2`. So, `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`.
4.  The final answer is the value in the bottom-right corner of the table.

### 📚 Key Concepts
- **Dynamic Programming**: A foundational DP problem with a clear recursive structure.
`,
  // problem explanation--> 199
  'as-minimum-ascii-delete-sum': `
### 💡 Problem Breakdown
Given two strings, the goal is to make them equal by deleting characters from either string. The cost of deleting a character is its ASCII value. The task is to find the minimum total cost of deletions to make the strings equal.

### ⚙️ Solution Walkthrough
This problem can be reframed. The characters that *remain* in both strings must form a common subsequence. To minimize the sum of deleted characters, we want to maximize the sum of the common subsequence that we *keep*.
1.  **Find LCS with Max ASCII Sum**: This is a variation of the Longest Common Subsequence problem. The DP state `dp[i][j]` will store the maximum ASCII sum of a common subsequence between prefixes of the two strings.
    - If characters match, `dp[i][j] = s1.charCodeAt(i-1) + dp[i-1][j-1]`.
    - If they don't match, `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`.
2.  **Calculate Total Sum**: Calculate the sum of ASCII values of all characters in both original strings.
3.  **Final Answer**: The minimum delete sum is `(totalSum) - 2 * (maxAsciiSumOfLCS)`. We multiply by 2 because each character in the common subsequence was counted once in each string's total sum.

### 📚 Key Concepts
- **Dynamic Programming**: An extension of the standard LCS problem.
- **Problem Reframing**: The insight is to switch from minimizing deletions to maximizing what is kept.
`,
  // problem explanation--> 200
  'as-integer-break': `
### 💡 Problem Breakdown
Given an integer `n`, the task is to break it into a sum of at least two positive integers, and then maximize the product of those integers.

### ⚙️ Solution Walkthrough
This problem can be solved with dynamic programming, but it also has a mathematical insight that leads to a greedy O(n) solution.
- The best numbers to break `n` into are 2s and 3s. Any number greater than 4 can be broken down into smaller parts that give a larger product (e.g., 6 is better as 3+3 (product 9) than 2+4 (product 8)). A 4 is equivalent to 2+2 (product 4).
- It's always better to use 3s than 2s where possible (e.g., for 6, 3+3 gives product 9, while 2+2+2 gives product 8).
- **Greedy Strategy**:
  1. Handle small base cases for n=2 and n=3.
  2. While `n > 4`, repeatedly subtract 3 and multiply the result by 3.
  3. The remaining `n` will be 2, 3, or 4. Multiply the result by this remaining `n`.

### 📚 Key Concepts
- **Dynamic Programming / Mathematical Insight**: A problem that can be solved with a standard DP approach but also has a more efficient greedy solution based on mathematical properties.
`,
};
