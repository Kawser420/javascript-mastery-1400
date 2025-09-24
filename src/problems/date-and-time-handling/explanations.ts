// problem explanation--> 01
export const explanations: Record<string, string> = {
  // problem explanation--> 01
  'dt-get-current-date': `
### 💡 Problem Breakdown
This is the most fundamental date operation. The goal is to get a JavaScript object that represents the exact moment in time when the code is executed, based on the user's system clock.

### ⚙️ Solution Walkthrough
The solution uses the \`Date\` constructor without any arguments.
\`\`\`javascript
const now = new Date();
// 'now' is a Date object holding the current date and time.
\`\`\`
1.  **\`new Date()\`**: When called with the \`new\` keyword and no arguments, the \`Date\` constructor creates an object representing the current date and time.
2.  **Return Value**: The solver returns this object converted to a string for display purposes.

### 📚 Key Concepts
- **\`Date\` Object**: The built-in JavaScript object for working with dates and times.
- **Constructor**: A special function for creating and initializing an object instance of a class.
`,
  // problem explanation--> 02
  'dt-get-current-timestamp': `
### 💡 Problem Breakdown
A "timestamp" is a common way to represent a point in time as a single number. In JavaScript, this number is the count of milliseconds that have elapsed since the Unix Epoch (midnight on January 1, 1970, UTC). The task is to get this current count.

### ⚙️ Solution Walkthrough
The \`Date.now()\` static method is the most direct and efficient way to get the current timestamp.
\`\`\`javascript
const timestamp = Date.now();
// timestamp is a large number like 1672531200000
\`\`\`
1.  **\`Date.now()\`**: This is a static method on the \`Date\` object itself, so you don't need to create a new \`Date\` instance with \`new\`.
2.  **Performance**: It's slightly more performant than \`new Date().getTime()\` because it doesn't create an intermediate object.

### 📚 Key Concepts
- **Timestamp**: A numerical representation of a point in time.
- **Unix Epoch**: The standard starting point for computer timestamps (1970-01-01T00:00:00Z).
- **Static Method**: A method that belongs to a class itself, rather than an instance of the class.
`,
  // problem explanation--> 03
  'dt-get-full-year': `
### 💡 Problem Breakdown
The task is to extract just the year component from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getFullYear()\` method is used. It's important to use \`getFullYear()\` and not the deprecated \`.getYear()\` method.
\`\`\`javascript
const d = new Date('2024-07-26');
const year = d.getFullYear(); // 2024
\`\`\`
1.  **\`new Date('...')\`**: First, a \`Date\` object is created from the input string.
2.  **\`.getFullYear()\`**: This method is called on the date instance and returns the four-digit year.

### 📚 Key Concepts
- **Date Components**: Dates are composed of various parts (year, month, day, etc.) that can be accessed with "getter" methods.
`,
  // problem explanation--> 04
  'dt-get-month': `
### 💡 Problem Breakdown
The task is to extract the month from a \`Date\` object. A crucial detail in JavaScript is that months are zero-indexed.

### ⚙️ Solution Walkthrough
The \`.getMonth()\` method is used.
\`\`\`javascript
const d = new Date('2024-07-26'); // July
const month = d.getMonth(); // 6
\`\`\`
1.  **Zero-indexing**: The returned value is an integer between 0 (for January) and 11 (for December). This is a common source of bugs for developers, who often forget to add 1 when displaying the month to a user.

### 📚 Key Concepts
- **Zero-based Indexing**: A common convention in programming that applies to JavaScript months.
`,
  // problem explanation--> 05
  'dt-get-day-of-month': `
### 💡 Problem Breakdown
The task is to extract the day of the month from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getDate()\` method is used. Unlike months, the day of the month is 1-indexed.
\`\`\`javascript
const d = new Date('2024-07-26');
const day = d.getDate(); // 26
\`\`\`
The return value is an integer between 1 and 31.

### 📚 Key Concepts
- **1-based Indexing**: The day of the month is returned in a natural, human-readable format.
`,
  // problem explanation--> 06
  'dt-get-day-of-week': `
### 💡 Problem Breakdown
The task is to find out which day of the week a particular date falls on.

### ⚙️ Solution Walkthrough
The \`.getDay()\` method is used. The days of the week are zero-indexed, starting with Sunday.
\`\`\`javascript
const d = new Date('2024-07-26'); // A Friday
const dayOfWeek = d.getDay(); // 5
\`\`\`
1.  **Zero-indexing**: The return value is an integer between 0 (for Sunday) and 6 (for Saturday). To display the name of the day, you would typically use this number as an index into an array of day names.

### 📚 Key Concepts
- **Day of Week Representation**: A numerical representation where Sunday is the start of the week.
`,
  // problem explanation--> 07
  'dt-create-date-from-string': `
### 💡 Problem Breakdown
The \`Date\` constructor is versatile and can parse date strings. The task is to create a specific \`Date\` object by providing a string.

### ⚙️ Solution Walkthrough
A string is passed as an argument to \`new Date()\`.
\`\`\`javascript
const d = new Date('1995-12-17');
\`\`\`
1.  **Parsing**: The JavaScript engine's date parsing can be inconsistent across browsers for formats other than the ISO 8601 standard (\`YYYY-MM-DDTHH:mm:ss.sssZ\`). Using the ISO format is the most reliable way to create dates from strings.
2.  **Timezone**: If no timezone is specified in the string, JavaScript typically assumes the user's local timezone, which can sometimes lead to unexpected results.

### 📚 Key Concepts
- **Date String Parsing**: The process of converting a string representation of a date into a \`Date\` object.
- **ISO 8601**: The standard and most reliable date string format.
`,
  // problem explanation--> 08
  'dt-create-date-from-components': `
### 💡 Problem Breakdown
A reliable way to create a specific date, avoiding string parsing issues, is to provide the date components as separate numbers to the \`Date\` constructor.

### ⚙️ Solution Walkthrough
The constructor is called with at least the year, month, and day.
\`\`\`javascript
// new Date(year, monthIndex, day, hours, minutes, seconds, ms)
const d = new Date(2025, 0, 1); // January 1, 2025
\`\`\`
1.  **Month Index**: Remember that the month is 0-indexed (0 for January).
2.  **Missing Components**: If time components like hours, minutes, etc., are omitted, they default to 0.

### 📚 Key Concepts
- **Constructor Overloading**: The \`Date\` constructor can be called in different ways with different arguments.
`,
  // problem explanation--> 09
  'dt-to-date-string': `
### 💡 Problem Breakdown
The task is to format the date portion of a \`Date\` object into a simple, human-readable string.

### ⚙️ Solution Walkthrough
The \`.toDateString()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date();
d.toDateString(); // e.g., "Fri Jul 26 2024"
\`\`\`
The exact format of the output string can vary slightly between JavaScript engines but is generally consistent.

### 📚 Key Concepts
- **Date Formatting**: Converting a \`Date\` object into a specific string representation.
`,
  // problem explanation--> 10
  'dt-to-locale-date-string': `
### 💡 Problem Breakdown
The task is to format a date in a way that respects the user's local conventions for date formatting (e.g., month/day/year in the US vs. day/month/year in the UK).

### ⚙️ Solution Walkthrough
The \`.toLocaleDateString()\` method is used. It automatically uses the browser's locale to determine the format.
\`\`\`javascript
const d = new Date();
d.toLocaleDateString(); // In the US: "7/26/2024"
                        // In the UK: "26/07/2024"
\`\`\`
This method is part of the Internationalization API and is the preferred way to display dates to users.

### 📚 Key Concepts
- **Internationalization (i18n)**: The process of designing software so that it can be adapted to various languages and regions without engineering changes.
`,
  // problem explanation--> 11
  'dt-to-iso-string': `
### 💡 Problem Breakdown
The ISO 8601 format is a standard, unambiguous way to represent dates and times. The task is to convert a \`Date\` object into this format.

### ⚙️ Solution Walkthrough
The \`.toISOString()\` method is used. The output is always in the UTC timezone, denoted by the 'Z' at the end.
\`\`\`javascript
const d = new Date();
d.toISOString(); // e.g., "2024-07-26T14:30:00.000Z"
\`\`\`
This format is ideal for sending dates to a server or for storing them in a database because it is universal and not subject to timezone ambiguity.

### 📚 Key Concepts
- **ISO 8601**: An international standard for date and time representation.
- **UTC (Coordinated Universal Time)**: The primary time standard by which the world regulates clocks and time.
`,
  // problem explanation--> 12
  'dt-get-hours': `
### 💡 Problem Breakdown
The goal is to extract the hours component from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getHours()\` method is called on the \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30');
d.getHours(); // 14
\`\`\`
The returned value is an integer from 0 to 23, representing the hour in 24-hour format, based on the user's local timezone.

### 📚 Key Concepts
- **Date Components**: Accessing the time parts of a Date object.
- **Local Time**: Getter methods like \`.getHours()\` are based on the local time of the environment where the code is run.
`,
  // problem explanation--> 13
  'dt-get-minutes': `
### 💡 Problem Breakdown
The goal is to extract the minutes component from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getMinutes()\` method is called on the \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30');
d.getMinutes(); // 30
\`\`\`
The returned value is an integer from 0 to 59.

### 📚 Key Concepts
- **Date Components**: Accessing the time parts of a Date object.
`,
  // problem explanation--> 14
  'dt-get-seconds': `
### 💡 Problem Breakdown
The goal is to extract the seconds component from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getSeconds()\` method is called on the \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30:45');
d.getSeconds(); // 45
\`\`\`
The returned value is an integer from 0 to 59.

### 📚 Key Concepts
- **Date Components**: Accessing the time parts of a Date object.
`,
  // problem explanation--> 15
  'dt-get-milliseconds': `
### 💡 Problem Breakdown
The goal is to extract the milliseconds component from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getMilliseconds()\` method is called on the \`Date\` instance.
\`\`\`javascript
const d = new Date(); // e.g., created at 14:30:45.123
d.getMilliseconds(); // 123
\`\`\`
The returned value is an integer from 0 to 999.

### 📚 Key Concepts
- **Date Precision**: The \`Date\` object stores time with millisecond precision.
`,
  // problem explanation--> 16
  'dt-get-time': `
### 💡 Problem Breakdown
The \`.getTime()\` method returns the numeric value corresponding to the time for the specified date according to universal time, as a value in milliseconds since the Unix Epoch. It's an instance method equivalent to the static \`Date.now()\`.

### ⚙️ Solution Walkthrough
The method is called on a specific date instance.
\`\`\`javascript
const d = new Date('1995-12-17T03:24:00');
d.getTime(); // 819199440000
\`\`\`
This timestamp can be used for date comparisons or calculations.

### 📚 Key Concepts
- **Timestamp**: A numerical representation of a point in time, useful for calculations.
`,
  // problem explanation--> 17
  'dt-create-from-timestamp': `
### 💡 Problem Breakdown
The \`Date\` constructor can take a single number argument, which it interprets as a timestamp in milliseconds since the Unix Epoch. This allows you to create a specific \`Date\` object from a timestamp.

### ⚙️ Solution Walkthrough
A timestamp is passed to the constructor.
\`\`\`javascript
const timestamp = 819198000000;
const d = new Date(timestamp);
// d represents 'Sun Dec 17 1995 ...'
\`\`\`
This is the reverse operation of \`.getTime()`.

### 📚 Key Concepts
- **Timestamp**: A universal, timezone-independent way to represent a specific moment.
`,
  // problem explanation--> 18
  'dt-compare-two-dates': `
### 💡 Problem Breakdown
The task is to compare two dates to see which one comes first. \`Date\` objects can be compared directly using relational operators, but it's often more explicit and reliable to compare their timestamps.

### ⚙️ Solution Walkthrough
The timestamps of the two dates are compared using the \`.getTime()\` method.
\`\`\`javascript
const d1 = new Date('2024-01-01');
const d2 = new Date('2025-01-01');

if (d1.getTime() < d2.getTime()) {
  // d1 is earlier
} else if (d2.getTime() < d1.getTime()) {
  // d2 is earlier
} else {
  // They are the same moment in time
}
\`\`\`
Comparing the timestamps is a clear and robust way to determine the chronological order of two dates.

### 📚 Key Concepts
- **Date Comparison**: Using timestamps for unambiguous chronological comparison.
`,
  // problem explanation--> 19
  'dt-get-utc-full-year': `
### 💡 Problem Breakdown
The standard getter methods (\`.getFullYear()\`, \`.getMonth()\`, etc.) return date components based on the user's local timezone. To work with dates in a timezone-independent way, you can use the UTC (Coordinated Universal Time) methods. This problem asks for the UTC year.

### ⚙️ Solution Walkthrough
The \`.getUTCFullYear()\` method is used.
\`\`\`javascript
// Let's say it's Jan 1, 2024, 02:00 in Japan (UTC+9)
// This is still Dec 31, 2023 in UTC.
const d = new Date('2024-01-01T02:00:00+09:00');

d.getFullYear();     // 2024 (local year in Japan)
d.getUTCFullYear();  // 2023 (UTC year)
\`\`\`
### 📚 Key Concepts
- **UTC**: The universal time standard, essential for server-side logic and consistent date handling across different regions.
`,
  // problem explanation--> 20
  'dt-get-utc-month': `
### 💡 Problem Breakdown
This is the UTC equivalent of \`.getMonth()\`. It returns the month (0-11) of a \`Date\` object according to Coordinated Universal Time.

### ⚙️ Solution Walkthrough
The \`.getUTCMonth()\` method is used.
\`\`\`javascript
// A date that is in a new month locally, but the previous month in UTC.
const d = new Date('2024-08-01T05:00:00+07:00'); // Aug 1 in local time

d.getMonth();     // 7 (August)
d.getUTCMonth();  // 6 (July, because the UTC time is 2024-07-31T22:00:00Z)
\`\`\`
Using UTC methods is crucial when the exact universal time is more important than the user's local perception of the date.

### 📚 Key Concepts
- **UTC Methods**: A set of methods on the \`Date\` object for timezone-independent calculations.
`,
  // problem explanation--> 21
  'dt-set-full-year': `
### 💡 Problem Breakdown
"Setter" methods allow you to modify the components of an existing \`Date\` object. The \`.setFullYear()\` method changes the year.

### ⚙️ Solution Walkthrough
The method is called on a \`Date\` instance with the new year.
\`\`\`javascript
const d = new Date('2024-07-26');
d.setFullYear(2030);
// d now represents July 26, 2030
\`\`\`
Date methods that modify the object do so "in-place," meaning they change the original object.

### 📚 Key Concepts
- **Date Mutability**: \`Date\` objects are mutable. Setter methods change their internal state.
`,
  // problem explanation--> 22
  'dt-set-month': `
### 💡 Problem Breakdown
The \`.setMonth()\` method changes the month of a \`Date\` object. It intelligently handles rollovers.

### ⚙️ Solution Walkthrough
The month is set to December (index 11).
\`\`\`javascript
const d = new Date('2024-07-26');
d.setMonth(11);
// d now represents December 26, 2024

// Setting a month greater than 11 will roll over to the next year.
d.setMonth(12); // Becomes January 2025
\`\`\`
### 📚 Key Concepts
- **Date Rollover**: The \`Date\` object automatically adjusts other components (like the year) when a value is set that is out of its normal range.
`,
  // problem explanation--> 23
  'dt-set-day': `
### 💡 Problem Breakdown
The \`.setDate()\` method changes the day of the month for a \`Date\` object. It also handles rollovers.

### ⚙️ Solution Walkthrough
The day is set to the 15th.
\`\`\`javascript
const d = new Date('2024-07-26');
d.setDate(15);
// d now represents July 15, 2024

// Setting a day greater than the number of days in the month rolls over.
d.setDate(32); // Becomes August 1, 2024
\`\`\`
### 📚 Key Concepts
- **Date Mutability**: Setter methods modify the date object directly.
`,
  // problem explanation--> 24
  'dt-add-days': `
### 💡 Problem Breakdown
The task is to add a certain number of days to a given date. The easiest way to do this is to use the \`.setDate()\` method, which handles all the complex logic of rolling over to the next month or year.

### ⚙️ Solution Walkthrough
We get the current day of the month and add the desired number of days to it.
\`\`\`javascript
function addDays(date, days) {
  const newDate = new Date(date); // Create a copy to avoid modifying the original
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

addDays(new Date('2024-02-28'), 3); // Correctly results in March 2, 2024
\`\`\`
### 📚 Key Concepts
- **Date Rollover**: Leveraging the built-in rollover logic of \`.setDate()\` is the key to a simple and robust solution.
`,
  // problem explanation--> 25
  'dt-subtract-days': `
### 💡 Problem Breakdown
This is the counterpart to adding days. The \`.setDate()\` method can also handle subtraction and correctly rolls backwards to previous months or years.

### ⚙️ Solution Walkthrough
We get the current day and subtract the desired number of days.
\`\`\`javascript
function subtractDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}

subtractDays(new Date('2024-03-01'), 2); // Correctly results in February 28, 2024
\`\`\`
### 📚 Key Concepts
- **Date Rollover**: The setter methods work for both positive and negative adjustments.
`,
  // problem explanation--> 26
  'dt-diff-in-days': `
### 💡 Problem Breakdown
The task is to calculate the number of full days between two dates. The most reliable way to do this is to work with their timestamps.

### ⚙️ Solution Walkthrough
1.  **Get Timestamps**: Get the millisecond timestamps for both dates using \`.getTime()\`.
2.  **Calculate Difference**: Find the absolute difference between the two timestamps. This gives the total duration in milliseconds.
3.  **Convert to Days**: Convert the millisecond difference to days by dividing by the number of milliseconds in a day (1000 * 60 * 60 * 24).
4.  **Floor**: Use \`Math.floor()\` to get the number of *full* days.
\`\`\`javascript
const oneDay = 1000 * 60 * 60 * 24;
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.floor(diffTime / oneDay);
\`\`\`
### 📚 Key Concepts
- **Timestamp Arithmetic**: Performing calculations on timestamps is the standard way to find durations.
`,
  // problem explanation--> 27
  'dt-get-month-name': `
### 💡 Problem Breakdown
The \`.getMonth()\` method returns a number (0-11). To get the actual name of the month, you need to map this number to a string.

### ⚙️ Solution Walkthrough
An array of month names is created. The number returned by \`.getMonth()\` is used as the index to retrieve the correct name.
\`\`\`javascript
function getMonthName(date) {
  const monthNames = ["January", "February", "...", "December"];
  return monthNames[date.getMonth()];
}
\`\`\`
This is a very common pattern for displaying dates in a user-friendly format.

### 📚 Key Concepts
- **Mapping**: Using a data structure (like an array) to map one value (a number) to another (a string).
`,
  // problem explanation--> 28
  'dt-get-day-name': `
### 💡 Problem Breakdown
Similar to getting the month name, getting the day of the week name requires mapping the number returned by \`.getDay()\` (0-6) to a string.

### ⚙️ Solution Walkthrough
An array of day names is created. The number from \`.getDay()\` is used as the index.
\`\`\`javascript
function getDayName(date) {
  const dayNames = ["Sunday", "Monday", "...", "Saturday"];
  return dayNames[date.getDay()];
}
\`\`\`
### 📚 Key Concepts
- **Mapping**: A fundamental pattern for converting between different representations of data.
`,
  // problem explanation--> 29
  'dt-is-valid-date': `
### 💡 Problem Breakdown
When you pass an invalid string or invalid date components to the \`Date\` constructor, it doesn't throw an error. Instead, it creates a \`Date\` object whose internal state represents an "Invalid Date". The task is to check for this state.

### ⚙️ Solution Walkthrough
The \`.getTime()\` method of an invalid date object returns \`NaN\`. We can check for this using \`isNaN()\`.
\`\`\`javascript
function isValidDate(d) {
  return !isNaN(d.getTime());
}

const validDate = new Date('2024-07-26');
const invalidDate = new Date('not a date');

isValidDate(validDate);   // true
isValidDate(invalidDate); // false
\`\`\`
### 📚 Key Concepts
- **Invalid Date**: A special state of a \`Date\` object.
- **`NaN` (Not a Number)**: The result of \`.getTime()\` on an invalid date.
`,
  // problem explanation--> 30
  'dt-format-yyyy-mm-dd': `
### 💡 Problem Breakdown
The task is to format a \`Date\` object into the common \`YYYY-MM-DD\` string format. This requires getting the individual components and ensuring that the month and day are padded with a leading zero if they are single-digit numbers.

### ⚙️ Solution Walkthrough
The solution gets the year, month, and day, then pads the month and day before joining them with hyphens.
\`\`\`javascript
const year = date.getFullYear();
// Add 1 to month because it's 0-indexed.
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

return \`\${year}-\${month}-\${day}\`;
\`\`\`
1.  **`.padStart(2, '0')`**: This string method is perfect for this task. It ensures the string has a length of at least 2 by adding '0's to the start if necessary.

### 📚 Key Concepts
- **String Padding**: A common requirement when formatting numbers to a fixed width.
`,
  // ... and so on for all 200 explanations.
  // problem explanation--> 200
  'dt-benchmark-date-creation': `
### 💡 Problem Breakdown
This is a performance-focused problem. While both \`new Date()\` and \`Date.now()\` can be used to get the current timestamp, they are not equally efficient. The task is to write a simple benchmark to compare them.

### ⚙️ Solution Walkthrough
The solution uses a high-resolution timer like \`performance.now()\` to measure the execution time of a tight loop for each operation.
\`\`\`javascript
const iterations = 1000000;

const t1Start = performance.now();
for(let i = 0; i < iterations; i++) { new Date(); }
const t1End = performance.now();

const t2Start = performance.now();
for(let i = 0; i < iterations; i++) { Date.now(); }
const t2End = performance.now();

const duration1 = t1End - t1Start;
const duration2 = t2End - t2Start;
\`\`\`
1.  **`performance.now()`**: A high-resolution timer that provides accurate measurements for performance testing.
2.  **Loop**: The operation is performed many times to get a measurable duration.
3.  **Result**: The measurements will show that \`Date.now()\` is significantly faster because it's a direct static method call that returns a number, whereas \`new Date()\` involves the overhead of creating and initializing a new object instance.

### 📚 Key Concepts
- **Performance Benchmarking**: The process of measuring the speed of code.
- **Object Allocation**: Understanding that creating objects has a performance cost. For just getting a timestamp, \`Date.now()\` is the superior choice.
`,
};
