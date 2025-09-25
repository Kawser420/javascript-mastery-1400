export const explanations: Record<string, string> = {
  // problem explanation--> 01
  "dt-get-current-date": `
### 💡 Problem Breakdown
This is the most fundamental date operation. The goal is to get a \`Date\` object that represents the exact moment the code is executed.

### ⚙️ Solution Walkthrough
The \`Date\` object is a built-in JavaScript object. To create a new instance representing the current date and time, you call its constructor with no arguments.
\`\`\`javascript
const now = new Date();
// 'now' holds the current date, time, and timezone information.
\`\`\`
The resulting object contains a timestamp and methods to access its components (like year, month, day, hours, etc.).

### 📚 Key Concepts
- **\`new Date()\`**: The constructor for creating \`Date\` objects. When called without arguments, it defaults to the current system time.
`,

  // problem explanation--> 02
  "dt-get-current-timestamp": `
### 💡 Problem Breakdown
A "timestamp" is a common way to represent a point in time as a single number. In JavaScript, this number is the milliseconds that have elapsed since the Unix Epoch (midnight on January 1, 1970, UTC). The task is to get this numeric value.

### ⚙️ Solution Walkthrough
The most direct and efficient way to get the current timestamp is by using the static method \`Date.now()\`.
\`\`\`javascript
const timestamp = Date.now();
// timestamp is a large number, e.g., 1721988000000
\`\`\`
This is more performant than \`new Date().getTime()\` because it doesn't require creating a new \`Date\` object instance.

### 📚 Key Concepts
- **\`Date.now()\`**: A static method on the \`Date\` constructor that returns the current timestamp.
- **Unix Epoch**: The standard starting point for time in many computing systems.
`,

  // problem explanation--> 03
  "dt-get-full-year": `
### 💡 Problem Breakdown
The task is to extract the 4-digit year from a given \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getFullYear()\` method is called on a \`Date\` instance. It reliably returns the full year (e.g., 2024, not 24).
\`\`\`javascript
const d = new Date('2024-07-26');
const year = d.getFullYear(); // 2024
\`\`\`
This is the standard method for retrieving the year. The older \`.getYear()\` method is deprecated and should not be used as it can return a 2-digit year.

### 📚 Key Concepts
- **\`.getFullYear()\`**: The standard method on a \`Date\` instance for getting the year.
`,

  // problem explanation--> 04
  "dt-get-month": `
### 💡 Problem Breakdown
The task is to extract the month from a \`Date\` object. A crucial point to remember is that the month is **zero-indexed** in JavaScript.

### ⚙️ Solution Walkthrough
The \`.getMonth()\` method is called on a \`Date\` instance. It returns an integer from 0 (January) to 11 (December).
\`\`\`javascript
const d = new Date('2024-07-26');
const month = d.getMonth(); // 6 (because July is the 7th month, which is index 6)
\`\`\`
When displaying the month to a user, you will almost always need to add 1 to this value.

### 📚 Key Concepts
- **\`.getMonth()\`**: The method for getting the month.
- **Zero-based Indexing**: A common source of bugs for developers new to the \`Date\` object.
`,

  // problem explanation--> 05
  "dt-get-day-of-month": `
### 💡 Problem Breakdown
The task is to extract the day of the month (1-31) from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getDate()\` method is called on a \`Date\` instance. Unlike the month, this method is **one-indexed**.
\`\`\`javascript
const d = new Date('2024-07-26');
const dayOfMonth = d.getDate(); // 26
\`\`\`

### 📚 Key Concepts
- **\`.getDate()\`**: The standard method for getting the day of the month.
`,

  // problem explanation--> 06
  "dt-get-day-of-week": `
### 💡 Problem Breakdown
The task is to extract the day of the week from a \`Date\` object. This is also **zero-indexed**.

### ⚙️ Solution Walkthrough
The \`.getDay()\` method is called on a \`Date\` instance. It returns an integer from 0 (Sunday) to 6 (Saturday).
\`\`\`javascript
const d = new Date('2024-07-26'); // This is a Friday
const dayOfWeek = d.getDay(); // 5
\`\`\`
To display the name of the day, you would use this number as an index into an array of day names.

### 📚 Key Concepts
- **\`.getDay()\`**: The method for getting the day of the week.
`,

  // problem explanation--> 07
  "dt-create-date-from-string": `
### 💡 Problem Breakdown
The \`Date\` constructor is versatile and can parse date strings in several formats. The most reliable format is the ISO 8601 standard (\`YYYY-MM-DDTHH:mm:ss.sssZ\`).

### ⚙️ Solution Walkthrough
A date string is passed directly to the constructor.
\`\`\`javascript
// ISO Format (most reliable)
const d1 = new Date('1995-12-17');

// Other formats (behavior can vary between browsers)
const d2 = new Date('December 17, 1995');
\`\`\`
It's a best practice to use the ISO format whenever possible to ensure consistent parsing across different JavaScript environments.

### 📚 Key Concepts
- **Date Parsing**: The process of converting a string representation of a date into a \`Date\` object.
- **ISO 8601**: An international standard for date and time representation.
`,

  // problem explanation--> 08
  "dt-create-date-from-components": `
### 💡 Problem Breakdown
You can create a specific date by passing its individual components (year, month, day, etc.) as numbers to the \`Date\` constructor.

### ⚙️ Solution Walkthrough
The components are passed as arguments. Remember that the month is zero-indexed.
\`\`\`javascript
// new Date(year, monthIndex, day, hours, minutes, seconds, ms)
const d = new Date(2025, 0, 1); // January 1st, 2025
\`\`\`
The constructor is very flexible. If you provide values that are out of the normal range (e.g., day 32), it will "roll over" to the next month.

### 📚 Key Concepts
- **Constructor Overloads**: The \`Date\` constructor can be called in different ways (with a string, with numbers, etc.).
`,

  // problem explanation--> 09
  "dt-to-date-string": `
### 💡 Problem Breakdown
The task is to get a simple, human-readable string representation of the date portion of a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.toDateString()\` method is called on a \`Date\` instance. The format is implementation-dependent but is typically in a format like "Fri Jul 26 2024".
\`\`\`javascript
const d = new Date();
const dateString = d.toDateString();
\`\`\`

### 📚 Key Concepts
- **Date Formatting**: Converting a \`Date\` object into a string for display.
`,

  // problem explanation--> 10
  "dt-to-locale-date-string": `
### 💡 Problem Breakdown
The goal is to format the date portion of a \`Date\` object in a way that respects the user's local conventions. For example, a user in the US might see "7/26/2024", while a user in Germany might see "26.7.2024".

### ⚙️ Solution Walkthrough
The \`.toLocaleDateString()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date();
const localDateString = d.toLocaleDateString();
\`\`\`
This method is part of the \`Intl\` (Internationalization) API family and is the preferred way to display dates to users.

### 📚 Key Concepts
- **Internationalization (i18n)**: The process of designing software so that it can be adapted to various languages and regions without engineering changes.
- **\`.toLocaleDateString()\`**: The standard method for locale-aware date formatting.
`,

  // problem explanation--> 11
  "dt-to-iso-string": `
### 💡 Problem Breakdown
The ISO 8601 format (\`YYYY-MM-DDTHH:mm:ss.sssZ\`) is a standard, unambiguous way to represent a date and time. The 'Z' at the end signifies UTC (Zulu time). This format is ideal for sending dates to servers or storing them in databases.

### ⚙️ Solution Walkthrough
The \`.toISOString()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date();
const isoString = d.toISOString();
\`\`\`
This method always returns the date and time in the UTC timezone.

### 📚 Key Concepts
- **ISO 8601**: A crucial standard for data interchange.
- **UTC (Coordinated Universal Time)**: The primary time standard by which the world regulates clocks and time.
`,

  // problem explanation--> 12
  "dt-get-hours": `
### 💡 Problem Breakdown
The task is to extract the hours component from a \`Date\` object. The hours are represented in 24-hour format (0-23).

### ⚙️ Solution Walkthrough
The \`.getHours()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30');
const hours = d.getHours(); // 14
\`\`\`
This method returns the hours based on the user's local timezone.

### 📚 Key Concepts
- **\`.getHours()\`**: The standard method for getting the local hours.
`,

  // problem explanation--> 13
  "dt-get-minutes": `
### 💡 Problem Breakdown
The task is to extract the minutes component (0-59) from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getMinutes()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30');
const minutes = d.getMinutes(); // 30
\`\`\`
This method returns the minutes based on the user's local timezone.

### 📚 Key Concepts
- **\`.getMinutes()\`**: The standard method for getting the local minutes.
`,

  // problem explanation--> 14
  "dt-get-seconds": `
### 💡 Problem Breakdown
The task is to extract the seconds component (0-59) from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getSeconds()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date('2024-07-26 14:30:45');
const seconds = d.getSeconds(); // 45
\`\`\`
This method returns the seconds based on the user's local timezone.

### 📚 Key Concepts
- **\`.getSeconds()\`**: The standard method for getting the local seconds.
`,

  // problem explanation--> 15
  "dt-get-milliseconds": `
### 💡 Problem Breakdown
The task is to extract the milliseconds component (0-999) from a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.getMilliseconds()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date(); // e.g., current time is ...:45.123
const ms = d.getMilliseconds(); // 123
\`\`\`
This method returns the milliseconds based on the user's local timezone.

### 📚 Key Concepts
- **\`.getMilliseconds()\`**: The standard method for getting the local milliseconds.
`,

  // problem explanation--> 16
  "dt-get-time": `
### 💡 Problem Breakdown
The \`.getTime()\` method returns the numeric value of the \`Date\` object as the number of milliseconds since the Unix Epoch. This is the same value returned by \`Date.now()\` if the object represents the current time.

### ⚙️ Solution Walkthrough
The method is called on a specific \`Date\` instance.
\`\`\`javascript
const d = new Date('1970-01-01T00:00:00Z');
const timestamp = d.getTime(); // 0
\`\`\`
This is very useful for comparing dates or calculating the difference between them.

### 📚 Key Concepts
- **\`.getTime()\`**: The standard method for getting a \`Date\` object's timestamp.
`,

  // problem explanation--> 17
  "dt-create-from-timestamp": `
### 💡 Problem Breakdown
The \`Date\` constructor can be called with a single numeric argument, which it will interpret as a timestamp (milliseconds since the epoch) to create a new \`Date\` object.

### ⚙️ Solution Walkthrough
A timestamp is passed to the constructor.
\`\`\`javascript
const timestamp = 819198000000; // Corresponds to Dec 17, 1995
const d = new Date(timestamp);
\`\`\`
This is the standard way to deserialize a date that has been stored or transmitted as a numeric timestamp.

### 📚 Key Concepts
- **Constructor Overloads**: The \`Date\` constructor can accept different types of arguments.
`,

  // problem explanation--> 18
  "dt-compare-two-dates": `
### 💡 Problem Breakdown
The goal is to determine which of two dates comes first. The most reliable way to compare \`Date\` objects is to compare their numeric timestamps.

### ⚙️ Solution Walkthrough
The dates are converted to timestamps using \`.getTime()\` and then compared as numbers.
\`\`\`javascript
function compareDates(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  
  if (d1.getTime() < d2.getTime()) {
    return 'Date 1 is earlier';
  } else if (d2.getTime() < d1.getTime()) {
    return 'Date 2 is earlier';
  } else {
    return 'Dates are the same';
  }
}
\`\`\`
You can also use the relational operators (\`<\`, \`>\`) directly on the \`Date\` objects, as they will be coerced to their primitive timestamp values for the comparison, but using \`.getTime()\` is more explicit.

### 📚 Key Concepts
- **Date Comparison**: Comparing timestamps is the most reliable method.
`,

  // problem explanation--> 19
  "dt-get-utc-full-year": `
### 💡 Problem Breakdown
The "UTC" methods on a \`Date\` object allow you to access its components relative to the UTC timezone, ignoring the user's local timezone. \`.getUTCFullYear()\` gets the 4-digit year in UTC.

### ⚙️ Solution Walkthrough
A local time near midnight is created to show the potential difference.
\`\`\`javascript
// e.g., In a -04:00 timezone
const d = new Date('2024-01-01T02:00:00-04:00'); // This is Jan 1st locally
// In UTC, this is 2023-12-31T22:00:00Z
d.getUTCFullYear(); // 2023
d.getFullYear(); // 2024
\`\`\`

### 📚 Key Concepts
- **UTC Methods**: A parallel set of getter and setter methods for working with UTC time.
`,

  // problem explanation--> 20
  "dt-get-utc-month": `
### 💡 Problem Breakdown
The \`.getUTCMonth()\` method returns the month (0-11) of a \`Date\` object according to the UTC timezone.

### ⚙️ Solution Walkthrough
The UTC month is retrieved.
\`\`\`javascript
const d = new Date();
const localMonth = d.getMonth();
const utcMonth = d.getUTCMonth();
// utcMonth may be different from localMonth if it's near the end/start of a month.
\`\`\`

### 📚 Key Concepts
- **UTC Methods**: Essential for server-side logic or any context where a consistent, timezone-independent time is required.
`,

  // problem explanation--> 21
  "dt-set-full-year": `
### 💡 Problem Breakdown
The \`set\` methods on a \`Date\` object allow you to modify its components. \`.setFullYear()\` changes the year of the date. This method modifies the \`Date\` object in place.

### ⚙️ Solution Walkthrough
The year of a date object is changed.
\`\`\`javascript
const d = new Date();
d.setFullYear(2030);
// The year of 'd' is now 2030
\`\`\`
You can also pass optional month and day arguments: \`d.setFullYear(2030, 0, 1)\`.

### 📚 Key Concepts
- **Setter Methods**: Methods for mutating a \`Date\` object.
`,

  // problem explanation--> 22
  "dt-set-month": `
### 💡 Problem Breakdown
The \`.setMonth()\` method changes the month (0-11) of a \`Date\` object, modifying it in place.

### ⚙️ Solution Walkthrough
The month is changed to December.
\`\`\`javascript
const d = new Date();
d.setMonth(11); // Set month to December
\`\`\`
This method intelligently handles date rollovers. For example, if the date was January 31st and you set the month to February (which has fewer days), the date will be adjusted (e.g., to Feb 28th or 29th).

### 📚 Key Concepts
- **Setter Methods**: For in-place modification of a date.
`,

  // problem explanation--> 23
  "dt-set-day": `
### 💡 Problem Breakdown
The \`.setDate()\` method changes the day of the month (1-31) of a \`Date\` object, modifying it in place.

### ⚙️ Solution Walkthrough
The day is changed to the 15th.
\`\`\`javascript
const d = new Date();
d.setDate(15);
\`\`\`
This method also handles rollovers. If you \`setDate(32)\` in January, the date will become February 1st. This behavior is useful for date arithmetic.

### 📚 Key Concepts
- **\`.setDate()\`**: A method for setting the day of the month.
`,

  // problem explanation--> 24
  "dt-add-days": `
### 💡 Problem Breakdown
The task is to add a number of days to a given date. The easiest way to do this reliably is to use the \`.setDate()\` method, which automatically handles rolling over to the next month and year.

### ⚙️ Solution Walkthrough
The current day of the month is retrieved, the number of days is added to it, and this new value is passed to \`.setDate()\`.
\`\`\`javascript
function addDays(date, days) {
  const newDate = new Date(date); // Create a copy to avoid mutation
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
addDays(new Date('2024-02-28'), 3); // Returns March 2nd, 2024
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: Using setter methods to perform calculations.
- **Immutability**: Creating a copy of the date object first is a good practice to avoid side effects.
`,

  // problem explanation--> 25
  "dt-subtract-days": `
### 💡 Problem Breakdown
This is the counterpart to adding days. The \`.setDate()\` method can also handle negative numbers, which makes subtracting days straightforward.

### ⚙️ Solution Walkthrough
The logic is identical to adding days, but with subtraction.
\`\`\`javascript
function subtractDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}
subtractDays(new Date('2024-03-01'), 2); // Returns February 28th, 2024
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: The flexibility of the \`set\` methods allows for easy date calculations.
`,

  // problem explanation--> 26
  "dt-diff-in-days": `
### 💡 Problem Breakdown
The task is to find the number of full days between two dates. This is best done by working with the numeric timestamps of the dates.

### ⚙️ Solution Walkthrough
1. Get the timestamps of both dates using \`.getTime()\`.
2. Find the absolute difference between the two timestamps. This result is in milliseconds.
3. Convert the milliseconds to days by dividing by the number of milliseconds in a day (1000 * 60 * 60 * 24).
4. Use \`Math.floor()\` to get the number of *full* days.
\`\`\`javascript
const oneDay = 1000 * 60 * 60 * 24;
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.floor(diffTime / oneDay);
\`\`\`

### 📚 Key Concepts
- **Timestamp Arithmetic**: The most reliable way to calculate durations.
`,

  // problem explanation--> 27
  "dt-get-month-name": `
### 💡 Problem Breakdown
The task is to get the full name of the month (e.g., "January", "February") from a \`Date\` object.

### ⚙️ Solution Walkthrough
There are two common ways to do this.
1. **Array Lookup**: Create an array of month names. Use the result of \`.getMonth()\` (which is 0-11) as the index to retrieve the name from the array.
2. **Intl API**: Use the \`Intl.DateTimeFormat\` object with the option \`{ month: 'long' }\`. This is the modern and preferred approach as it is locale-aware.
\`\`\`javascript
// Intl approach
const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
\`\`\`

### 📚 Key Concepts
- **Internationalization (\`Intl\`)**: Provides powerful, locale-aware formatting for dates, times, and numbers.
`,

  // problem explanation--> 28
  "dt-get-day-name": `
### 💡 Problem Breakdown
The task is to get the full name of the day of the week (e.g., "Sunday", "Monday") from a \`Date\` object.

### ⚙️ Solution Walkthrough
The approach is identical to getting the month name.
1. **Array Lookup**: Create an array of day names. Use the result of \`.getDay()\` (0-6) as the index.
2. **Intl API**: Use \`Intl.DateTimeFormat\` with the option \`{ weekday: 'long' }\`. This is the preferred method.
\`\`\`javascript
const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
\`\`\`

### 📚 Key Concepts
- **Internationalization (\`Intl\`)**: The standard API for formatting dates for user display.
`,

  // problem explanation--> 29
  "dt-is-valid-date": `
### 💡 Problem Breakdown
The \`Date\` constructor is very lenient. If you pass it an unparseable string (e.g., \`new Date("hello")\`), it doesn't throw an error. Instead, it creates a \`Date\` object whose internal state represents an "Invalid Date". The task is to check for this state.

### ⚙️ Solution Walkthrough
When a \`Date\` object is invalid, its timestamp is \`NaN\`. You can check for this by calling \`.getTime()\` and using \`isNaN()\`.
\`\`\`javascript
function isValidDate(d) {
  return !isNaN(d.getTime());
}
isValidDate(new Date("2024-02-30")); // false
isValidDate(new Date("2024-02-28")); // true
\`\`\`

### 📚 Key Concepts
- **Invalid Date**: A special state of a \`Date\` object.
- **\`isNaN()\`**: The standard way to check if a value is Not-a-Number.
`,

  // problem explanation--> 30
  "dt-format-yyyy-mm-dd": `
### 💡 Problem Breakdown
The goal is to format a \`Date\` object into the standard \`YYYY-MM-DD\` format. This often requires padding the month and day with a leading zero if they are single-digit numbers.

### ⚙️ Solution Walkthrough
1. Get the year, month, and day components. Remember to add 1 to the result of \`.getMonth()\`.
2. Convert the month and day to strings.
3. Use the \`.padStart(2, '0')\` string method to add a leading zero if the string's length is less than 2.
4. Combine the parts with hyphens using a template literal.
\`\`\`javascript
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const day = String(d.getDate()).padStart(2, '0');
return \`\${year}-\${month}-\${day}\`;
\`\`\`

### 📚 Key Concepts
- **String Padding (\`.padStart()\`)**: An ES2017 method that simplifies adding leading characters to a string.
`,

  // problem explanation--> 31
  "dt-get-start-of-day": `
### 💡 Problem Breakdown
The task is to take a \`Date\` object and get a new \`Date\` object representing the very beginning of that same day (midnight, or 00:00:00.000).

### ⚙️ Solution Walkthrough
The \`.setHours()\` method can be used to set the time components.
\`\`\`javascript
function getStartOfDay(date) {
  const newDate = new Date(date); // Create a copy
  newDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, ms
  return newDate;
}
\`\`\`
A more concise way that doesn't mutate is to create a new \`Date\` object using only the year, month, and day from the original.
\`\`\`javascript
const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
\`\`\`

### 📚 Key Concepts
- **\`.setHours()\`**: A versatile method for setting multiple time components at once.
`,

  // problem explanation--> 32
  "dt-get-end-of-day": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem. The task is to get a new \`Date\` object representing the very end of a given day (23:59:59.999).

### ⚙️ Solution Walkthrough
The \`.setHours()\` method is used again.
\`\`\`javascript
function getEndOfDay(date) {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}
\`\`\`

### 📚 Key Concepts
- **\`.setHours()\`**: Can be used to precisely set the time to the end of the day.
`,

  // problem explanation--> 33
  "dt-is-weekend": `
### 💡 Problem Breakdown
The goal is to check if a given date falls on a weekend day. In the standard JavaScript \`.getDay()\` method, Saturday is 6 and Sunday is 0.

### ⚙️ Solution Walkthrough
The \`.getDay()\` method is called, and its result is checked.
\`\`\`javascript
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
\`\`\`

### 📚 Key Concepts
- **\`.getDay()\`**: The method for getting the numeric representation of the day of the week.
`,

  // problem explanation--> 34
  "dt-get-days-in-month": `
### 💡 Problem Breakdown
The task is to find the total number of days in the month for a given date. This is tricky because different months have different numbers of days, and February changes in a leap year.

### ⚙️ Solution Walkthrough
There is a clever trick using the \`Date\` constructor's rollover behavior. To find the last day of month \`M\`, we can ask for the 0th day of the *next* month, \`M+1\`. The 0th day of a month is interpreted as the last day of the *previous* month.
\`\`\`javascript
function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  // Get the 0th day of the NEXT month
  const lastDay = new Date(year, month + 1, 0);
  return lastDay.getDate();
}
\`\`\`

### 📚 Key Concepts
- **Date Rollover**: A powerful behavior of the \`Date\` constructor and \`set\` methods that simplifies date arithmetic.
`,

  // problem explanation--> 35
  "dt-get-timezone-offset": `
### 💡 Problem Breakdown
The \`.getTimezoneOffset()\` method returns the difference, in minutes, between Coordinated Universal Time (UTC) and the user's local time. The sign is such that a positive value means the local time is *behind* UTC.

### ⚙️ Solution Walkthrough
The method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date();
const offset = d.getTimezoneOffset();
// e.g., For US Eastern Time (UTC-4 during DST), this returns 240.
\`\`\`
This value can change for the same location depending on whether Daylight Saving Time is in effect.

### 📚 Key Concepts
- **Timezones**: Understanding the difference between local time and UTC is crucial for many applications.
- **\`.getTimezoneOffset()\`**: The standard method for getting this difference.
`,

  // problem explanation--> 36
  "dt-format-12-hour-time": `
### 💡 Problem Breakdown
The task is to format a time into a 12-hour format with AM/PM. This requires converting the 24-hour value from \`.getHours()\`.

### ⚙️ Solution Walkthrough
The hours, minutes, and AM/PM are calculated manually.
\`\`\`javascript
function format12Hour(date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12' for 12 AM.
  
  return \`\${String(hours).padStart(2, '0')}:\${minutes} \${ampm}\`;
}
\`\`\`
The \`Intl.DateTimeFormat\` API is a much better way to do this for real applications as it handles locale differences automatically: \`new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(date)\`.

### 📚 Key Concepts
- **Time Formatting**: Manually converting from 24-hour to 12-hour format.
`,

  // problem explanation--> 37
  "dt-is-today": `
### 💡 Problem Breakdown
The goal is to check if a given \`Date\` object falls on the same calendar day as the current day. Simply comparing the objects won't work because they might have different time components.

### ⚙️ Solution Walkthrough
The most reliable way is to compare the string representation of just the date portion.
\`\`\`javascript
function isToday(date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}
\`\`\`
The \`.toDateString()\` method formats the date into a standard format like "Fri Jul 26 2024", ignoring the time. If these strings are equal for both dates, they are on the same day.

### 📚 Key Concepts
- **Date vs. DateTime**: The problem requires ignoring the time component and only comparing the date.
- **\`.toDateString()\`**: A useful method for getting a comparable representation of a date.
`,

  // problem explanation--> 38
  "dt-get-quarter-of-year": `
### 💡 Problem Breakdown
The task is to determine which of the four quarters of a year a given date falls into.
- Q1: Jan, Feb, Mar (months 0, 1, 2)
- Q2: Apr, May, Jun (months 3, 4, 5)
- Q3: Jul, Aug, Sep (months 6, 7, 8)
- Q4: Oct, Nov, Dec (months 9, 10, 11)

### ⚙️ Solution Walkthrough
A simple mathematical formula can be derived from the month index.
\`\`\`javascript
function getQuarter(date) {
  const month = date.getMonth(); // 0-11
  return Math.floor(month / 3) + 1;
}
\`\`\`
1. **Get Month**: Get the zero-indexed month.
2. **Divide**: Integer division by 3 groups the months into the correct quarters (0-2 -> 0, 3-5 -> 1, etc.).
3. **Add 1**: Add 1 to convert from a zero-indexed result to a one-indexed quarter (1-4).

### 📚 Key Concepts
- **Integer Arithmetic**: Using division to group a range of numbers.
`,

  // problem explanation--> 39
  "dt-get-start-of-month": `
### 💡 Problem Breakdown
The task is to take a date and get a new \`Date\` object representing the first day of that same month and year.

### ⚙️ Solution Walkthrough
The simplest way is to create a new \`Date\` object, providing the year and month from the original date, and setting the day to 1.
\`\`\`javascript
function getStartOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: Creating a new date from components of an existing one.
`,

  // problem explanation--> 40
  "dt-get-end-of-month": `
### 💡 Problem Breakdown
The task is to get a new \`Date\` object for the last day of the month of a given date.

### ⚙️ Solution Walkthrough
This uses the "0th day" trick. The last day of month \`M\` is the 0th day of the *next* month, \`M+1\`.
\`\`\`javascript
function getEndOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
\`\`\`
The \`Date\` constructor correctly handles the rollover from December (month 11) to the next year.

### 📚 Key Concepts
- **Date Rollover**: A key trick for date calculations.
`,

  // problem explanation--> 41
  "dt-diff-in-hours": `
### 💡 Problem Breakdown
The task is to find the number of full hours between two dates. This is best done by working with the numeric timestamps of the dates.

### ⚙️ Solution Walkthrough
1. Get the timestamps of both dates using \`.getTime()\`.
2. Find the absolute difference in milliseconds.
3. Convert the milliseconds to hours by dividing by (1000 * 60 * 60).
4. Use \`Math.floor()\` to get the number of *full* hours.
\`\`\`javascript
const oneHour = 1000 * 60 * 60;
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffHours = Math.floor(diffTime / oneHour);
\`\`\`

### 📚 Key Concepts
- **Timestamp Arithmetic**: The most reliable way to calculate durations.
`,

  // problem explanation--> 42
  "dt-is-date-in-range": `
### 💡 Problem Breakdown
The goal is to check if a specific date falls within a given date range, inclusive of the start and end dates.

### ⚙️ Solution Walkthrough
Comparing the timestamps is the most reliable way to handle this.
\`\`\`javascript
function isDateInRange(date, start, end) {
  const time = date.getTime();
  const startTime = start.getTime();
  const endTime = end.getTime();
  
  return time >= startTime && time <= endTime;
}
\`\`\`
This works correctly even if the dates have different time components.

### 📚 Key Concepts
- **Date Comparison**: Using timestamps for accurate range checks.
`,

  // problem explanation--> 43
  "dt-add-months": `
### 💡 Problem Breakdown
The task is to add a number of months to a date. The \`.setMonth()\` method is designed for this and will correctly handle rolling over to the next year.

### ⚙️ Solution Walkthrough
The current month is retrieved, the number of months is added, and this new value is passed to \`.setMonth()\`.
\`\`\`javascript
function addMonths(date, months) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}
addMonths(new Date('2024-10-15'), 5); // Returns March 15th, 2025
\`\`\`
**Note**: Be aware of edge cases like adding a month to January 31st, which may result in March 2nd or 3rd if February has 28 or 29 days. \`.setMonth()\` handles this by adjusting the day.

### 📚 Key Concepts
- **Date Arithmetic**: Using setter methods to perform calculations.
`,

  // problem explanation--> 44
  "dt-get-week-of-year": `
### 💡 Problem Breakdown
The task is to find the ISO 8601 week number for a given date. The ISO 8601 standard has specific rules:
- Weeks start on Monday.
- Week 1 of a year is the first week containing a Thursday.

### ⚙️ Solution Walkthrough
Implementing this from scratch is complex. A common approximation is shown in the solver, but for accurate results, especially around the new year, a dedicated library like \`date-fns\` is highly recommended. The logic involves finding the Thursday of the current week and then calculating its distance from the first Thursday of the year.

### 📚 Key Concepts
- **ISO 8601 Week Dates**: A specific international standard for week numbering.
`,

  // problem explanation--> 45
  "dt-parse-date-mmddyyyy": `
### 💡 Problem Breakdown
The \`MM/DD/YYYY\` format is common in the US but can be ambiguous and is not reliably parsed by \`new Date(string)\`. The task is to parse it manually and reliably.

### ⚙️ Solution Walkthrough
The solution is to split the string by the \`/\` delimiter and then pass the parts as numbers to the \`new Date(year, month, day)\` constructor.
\`\`\`javascript
function parseMMDDYYYY(dateStr) {
  const parts = dateStr.split('/'); // ["07", "26", "2024"]
  const month = parts[0];
  const day = parts[1];
  const year = parts[2];
  // Month is 0-indexed, so we subtract 1.
  return new Date(year, month - 1, day);
}
\`\`\`

### 📚 Key Concepts
- **String Parsing**: Manually deconstructing a string to extract its components.
`,

  // problem explanation--> 46
  "dt-time-ago-string": `
### 💡 Problem Breakdown
The goal is to create a user-friendly string that describes how long ago a past event occurred (e.g., "5 minutes ago").

### ⚙️ Solution Walkthrough
1. Calculate the difference between the current time and the past date in seconds.
2. Divide the total seconds by the number of seconds in a year, month, day, hour, and minute to find the largest unit of time that fits.
3. Check from the largest unit (year) down to the smallest (second). The first one that results in a value greater than or equal to 1 is the unit to use.
4. Return a formatted string with the calculated number and the unit.

### 📚 Key Concepts
- **Duration Calculation**: Converting a millisecond difference into human-readable units.
`,

  // problem explanation--> 47
  "dt-intl-datetimeformat-basic": `
### 💡 Problem Breakdown
The \`Intl\` (Internationalization) object provides access to language-sensitive functionality. \`Intl.DateTimeFormat\` is a constructor for objects that enable language-sensitive date and time formatting.

### ⚙️ Solution Walkthrough
A new formatter is created for a specific locale and used to format a date.
\`\`\`javascript
// Create a formatter for the German locale.
const formatter = new Intl.DateTimeFormat('de-DE');
const germanDate = formatter.format(new Date()); // e.g., "26.7.2024"
\`\`\`

### 📚 Key Concepts
- **Internationalization API (\`Intl\`)**: The standard API for creating locale-aware applications.
`,

  // problem explanation--> 48
  "dt-intl-datetimeformat-options": `
### 💡 Problem Breakdown
The \`Intl.DateTimeFormat\` constructor can take an optional second argument: an \`options\` object that allows you to customize the output format.

### ⚙️ Solution Walkthrough
An options object is used to request the full weekday and month names.
\`\`\`javascript
const options = {
  weekday: 'long', // "Friday"
  year: 'numeric', // "2024"
  month: 'long',   // "July"
  day: 'numeric'   // "26"
};
const formatter = new Intl.DateTimeFormat('en-US', options);
const fullDate = formatter.format(new Date()); // "Friday, July 26, 2024"
\`\`\`

### 📚 Key Concepts
- **Formatting Options**: The \`Intl\` API provides a rich set of options for detailed format control.
`,

  // problem explanation--> 49
  "dt-get-start-of-year": `
### 💡 Problem Breakdown
The task is to take a date and get a new \`Date\` object representing the first day of that same year (January 1st).

### ⚙️ Solution Walkthrough
The simplest way is to create a new \`Date\` object, providing the year from the original date, and setting the month and day to their starting values (0 for January, 1 for the day).
\`\`\`javascript
function getStartOfYear(date) {
  return new Date(date.getFullYear(), 0, 1);
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: Creating a new date from components of an existing one.
`,

  // problem explanation--> 50
  "dt-get-end-of-year": `
### 💡 Problem Breakdown
The task is to get a new \`Date\` object for the last day of the year of a given date (December 31st).

### ⚙️ Solution Walkthrough
A new \`Date\` object is created using the year from the original date, with the month set to 11 (December) and the day to 31.
\`\`\`javascript
function getEndOfYear(date) {
  return new Date(date.getFullYear(), 11, 31);
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: A direct way to create a specific date.
`,

  // problem explanation--> 51
  "dt-is-dst": `
### 💡 Problem Breakdown
The task is to determine if a given date falls within Daylight Saving Time (DST) for the user's local timezone. DST rules are complex and vary by region. The standard JavaScript \`Date\` object provides a way to infer this by comparing timezone offsets.

### ⚙️ Solution Walkthrough
A date's timezone offset changes when it enters or leaves DST. We can find the "standard" offset for a year by checking the offsets in winter (like January) and summer (like July) and taking the larger one (since offsets are minutes *behind* UTC, a smaller number means a time further ahead). If the given date's offset is smaller than the standard offset, it's in DST.
\`\`\`javascript
function isDST(date) {
  const jan = new Date(date.getFullYear(), 0, 1); // January 1st
  const jul = new Date(date.getFullYear(), 6, 1); // July 1st
  
  // Standard offset is the maximum of the two (e.g., winter time)
  const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  
  // If the current date's offset is less than the standard, it's DST.
  return date.getTimezoneOffset() < stdTimezoneOffset;
}
\`\`\`

### 📚 Key Concepts
- **\`.getTimezoneOffset()\`**: The core method used. It returns the difference in minutes between UTC and local time. This value changes with DST.
- **Timezone Logic**: This solution is a clever heuristic that works for most regions in the Northern and Southern hemispheres but may fail in edge cases.
`,

  // problem explanation--> 52
  "dt-find-next-friday-13": `
### 💡 Problem Breakdown
This is a fun problem that involves iterating through dates to find one that meets two specific criteria: the day of the month must be 13, and the day of the week must be Friday.

### ⚙️ Solution Walkthrough
The solution involves a loop that checks the 13th of each subsequent month.
1.  **Initialize**: Create a \`Date\` object for the current date.
2.  **Set Day**: Set the day of this date object to the 13th.
3.  **Loop**: Use a \`while(true)\` loop to check dates indefinitely.
    - Inside the loop, check if the current date's day of the week is Friday (\`.getDay() === 5\`).
    - If it is, we've found our date. Return it.
    - If not, advance the date to the 13th of the *next* month using \`.setMonth(d.getMonth() + 1)\`.

\`\`\`javascript
function findNextFriday13th() {
  const d = new Date();
  d.setDate(13);
  while (true) {
    if (d.getDay() === 5) { // 5 corresponds to Friday
      return d.toDateString();
    }
    d.setMonth(d.getMonth() + 1);
  }
}
\`\`\`

### 📚 Key Concepts
- **Date Iteration**: Using setter methods like \`.setMonth()\` in a loop to advance through time.
- **\`.getDay()\`**: The method used to check the day of the week.
`,

  // problem explanation--> 53
  "dt-format-rfc2822": `
### 💡 Problem Breakdown
RFC 2822 is a standard format for representing dates and times in text, commonly used in email headers. The task is to format a JavaScript \`Date\` object into this specific format.

### ⚙️ Solution Walkthrough
The \`.toUTCString()\` method in JavaScript produces a string that is compliant with the RFC 2822 standard (which updated the older RFC 822 format, which is what \`.toGMTString()\` was based on).
\`\`\`javascript
const d = new Date();
const rfcString = d.toUTCString();
// Example output: "Sat, 27 Jul 2024 10:30:00 GMT"
\`\`\`
This method is straightforward and provides a standardized way to represent a date, which is crucial for interoperability between different systems.

### 📚 Key Concepts
- **Date Formatting Standards**: RFC 2822 is one of several important standards for representing dates as strings.
- **\`.toUTCString()\`**: The standard \`Date\` method for producing a GMT/UTC formatted string.
`,

  // problem explanation--> 54
  "dt-diff-in-months": `
### 💡 Problem Breakdown
Calculating the difference between two dates in full months is trickier than in days or hours because months have varying lengths. A simple division of the timestamp difference will not be accurate.

### ⚙️ Solution Walkthrough
A reliable method involves calculating the difference in years and months separately and then combining them.
1.  **Year Difference**: Calculate the difference in years and multiply by 12.
2.  **Month Difference**: Subtract the start month from the end month.
3.  **Combine**: Add the two results together.
4.  **Adjust for Day**: A final adjustment is needed. If the end date's day of the month is less than the start date's day, it means a full month has not yet passed, so we subtract one from the total.
\`\`\`javascript
function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  if (d2.getDate() < d1.getDate()){
      months--;
  }
  return months <= 0 ? 0 : months;
}
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: Demonstrates the complexity of calendar calculations compared to simple time durations.
`,

  // problem explanation--> 55
  "dt-get-age": `
### 💡 Problem Breakdown
The task is to calculate a person's age in full years from their birthdate.

### ⚙️ Solution Walkthrough
A simple subtraction of years is a good start, but it needs an adjustment for whether the person's birthday has occurred yet in the current year.
1.  **Get Dates**: Create a \`Date\` object for the birthdate and for today.
2.  **Year Difference**: Calculate the initial age by subtracting the birth year from the current year.
3.  **Month/Day Adjustment**: Check if the current month is before the birth month, OR if it's the same month but the current day is before the birthday.
4.  If either condition is true, it means the birthday for this year hasn't happened yet, so we subtract 1 from the calculated age.
\`\`\`javascript
function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
\`\`\`

### 📚 Key Concepts
- **Date Comparison**: Involves comparing year, month, and day components to determine the correct age.
`,

  // problem explanation--> 56
  "dt-intl-relativetimeformat": `
### 💡 Problem Breakdown
The \`Intl.RelativeTimeFormat\` object is a modern (ES2020) API for creating language-sensitive relative time strings (e.g., "in 5 days", "2 months ago", "yesterday"). This is the standard way to create "time ago" strings.

### ⚙️ Solution Walkthrough
1. **Create Formatter**: Create an instance of \`Intl.RelativeTimeFormat\`, specifying a locale and options.
2. **Format**: Call the \`.format()\` method on the formatter, passing it the numeric value and the unit.
\`\`\`javascript
// Create a formatter for English, with automatic wording (e.g., "yesterday")
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

rtf.format(-1, 'day');  // "yesterday"
rtf.format(5, 'month'); // "in 5 months"
rtf.format(-2, 'year'); // "2 years ago"
\`\`\`

### 📚 Key Concepts
- **Internationalization API (\`Intl\`)**: A powerful set of tools for locale-aware formatting.
- **\`.RelativeTimeFormat\`**: The specific constructor for creating relative time formatters.
`,

  // problem explanation--> 57
  "dt-is-leap-year": `
### 💡 Problem Breakdown
The task is to write a function that checks if a given year is a leap year. The rules for a leap year in the Gregorian calendar are:
1. The year is evenly divisible by 4...
2. ...unless it is evenly divisible by 100...
3. ...unless it is also evenly divisible by 400.

### ⚙️ Solution Walkthrough
The rules can be translated directly into a boolean expression using logical operators.
\`\`\`javascript
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
\`\`\`
- \`(year % 4 === 0 && year % 100 !== 0)\`: This handles the general rule (divisible by 4 but not by 100).
- \`|| (year % 400 === 0)\`: This handles the exception for century years.

### 📚 Key Concepts
- **Logical Operators**: \`&&\` (AND) and \`||\` (OR) are used to combine the conditions.
- **Modulo Operator (%)\**: The core tool for checking divisibility.
`,

  // problem explanation--> 58
  "dt-add-business-days": `
### 💡 Problem Breakdown
The task is to add a number of "business days" (Monday to Friday) to a date, skipping over weekends (Saturday and Sunday).

### ⚙️ Solution Walkthrough
A \`while\` loop can be used to add one day at a time, only decrementing the counter if the day is a weekday.
1. Create a copy of the start date to avoid mutation.
2. Use a \`while\` loop that continues as long as there are business days left to add.
3. Inside the loop, add one calendar day to the date.
4. Check the day of the week for the new date (\`.getDay()\`). If it's not Saturday (6) or Sunday (0), decrement the business day counter.
5. The loop will finish once the required number of business days have been added.

### 📚 Key Concepts
- **Date Iteration**: Advancing a date one day at a time within a loop.
- **Conditional Logic**: Using \`.getDay()\` to distinguish between weekdays and weekends.
`,

  // problem explanation--> 59
  "dt-get-start-of-week": `
### 💡 Problem Breakdown
The goal is to find the date of the start of the week for any given date. The definition of the "start of the week" can vary (e.g., Sunday in the US, Monday in Europe). This solution assumes Sunday is the start.

### ⚙️ Solution Walkthrough
We can use the numeric day of the week (where Sunday is 0) to calculate the necessary offset.
\`\`\`javascript
function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const diff = d.getDate() - day; // The difference to get to the previous Sunday
  return new Date(d.setDate(diff));
}
\`\`\`
1. **Get Day**: Get the day of the week (0-6).
2. **Calculate Difference**: This number is exactly how many days we need to go back from the current date to reach Sunday. For example, if today is Tuesday (day 2), we need to go back 2 days.
3. **Set Date**: Use \`.setDate()\` with this difference to get the date of the start of the week.

### 📚 Key Concepts
- **Date Arithmetic**: Using the numeric day of the week to calculate offsets.
`,

  // problem explanation--> 60
  "dt-get-end-of-week": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem: find the date of the end of the week (assuming Saturday).

### ⚙️ Solution Walkthrough
The logic is similar to finding the start of the week.
\`\`\`javascript
function getEndOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 for Sunday, 6 for Saturday
  // Calculate the difference to get to the next Saturday
  const diff = d.getDate() - day + 6;
  return new Date(d.setDate(diff));
}
\`\`\`
1. **Get Day**: Get the day of the week (0-6).
2. **Calculate Difference**: The formula \`d.getDate() - day + 6\` calculates the date of the Saturday of the current week. For example, if today is Tuesday (day 2), the difference is \`date - 2 + 6 = date + 4\`, which is 4 days after Tuesday.
3. **Set Date**: Use \`.setDate()\` to get the final date.

### 📚 Key Concepts
- **Date Arithmetic**: Calculating date offsets.
`,

  // problem explanation--> 61
  "dt-diff-in-business-days": `
### 💡 Problem Breakdown
The task is to calculate the number of business days (Monday-Friday) between two dates.

### ⚙️ Solution Walkthrough
A straightforward approach is to iterate through each day in the range and count the ones that are not a Saturday or Sunday.
1.  **Initialize**: Create a \`count = 0\`. Create a new \`Date\` object from the start date to use as a loop cursor, to avoid mutating the original.
2.  **Loop**: Use a \`while\` loop that continues as long as the cursor date is less than or equal to the end date.
3.  **Check Day**: Inside the loop, get the day of the week (\`.getDay()\`). If it's not 0 (Sunday) or 6 (Saturday), increment the \`count\`.
4.  **Advance Date**: Advance the cursor to the next day using \`cursor.setDate(cursor.getDate() + 1)\`.
5.  Return \`count\`.

### 📚 Key Concepts
- **Date Iteration**: Stepping through a range of dates one day at a time.
- **Conditional Counting**: Counting items in a sequence that meet a specific criterion.
`,

  // problem explanation--> 62
  "dt-is-same-day": `
### 💡 Problem Breakdown
The goal is to check if two different \`Date\` objects fall on the same calendar day, ignoring their time components.

### ⚙️ Solution Walkthrough
The most reliable way is to compare the year, month, and day components of both dates.
\`\`\`javascript
function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}
\`\`\`
Comparing the output of \`.toDateString()\` is a simpler but slightly less direct way to achieve the same result.

### 📚 Key Concepts
- **Date Component Comparison**: The most explicit and reliable way to check for date equality without considering time.
`,

  // problem explanation--> 63
  "dt-format-unix-timestamp": `
### 💡 Problem Breakdown
A "Unix timestamp" typically refers to the number of **seconds** that have elapsed since the Unix Epoch. JavaScript's \`Date\` object and \`Date.now()\` work with **milliseconds**. The task is to convert a Unix timestamp (in seconds) to a human-readable date.

### ⚙️ Solution Walkthrough
1.  **Convert to Milliseconds**: Multiply the Unix timestamp by 1000 to convert it to the millisecond format that the \`Date\` constructor expects.
2.  **Create Date Object**: Pass this millisecond value to the \`new Date()\` constructor.
3.  **Format**: Use a formatting method like \`.toUTCString()\` or \`.toString()\` on the new date object to get a readable string.
\`\`\`javascript
const unixTimestamp = 1721988000;
const d = new Date(unixTimestamp * 1000);
console.log(d.toUTCString()); // "Fri, 26 Jul 2024 10:00:00 GMT"
\`\`\`

### 📚 Key Concepts
- **Timestamp Units**: A critical detail is knowing whether a timestamp is in seconds or milliseconds.
`,

  // problem explanation--> 64
  "dt-parse-iso-8601-utc": `
### 💡 Problem Breakdown
The ISO 8601 format is the standard for representing dates and times. A string ending in 'Z' explicitly denotes the UTC timezone. The task is to parse such a string and verify its UTC components.

### ⚙️ Solution Walkthrough
1.  **Parse**: The \`new Date()\` constructor reliably parses ISO 8601 strings.
2.  **Verify**: Use the UTC getter methods (\`.getUTCFullYear()\`, \`.getUTCMonth()\`, etc.) on the resulting \`Date\` object to confirm that it has been parsed correctly according to UTC, not the user's local timezone.
\`\`\`javascript
const d = new Date('2024-07-26T10:00:00.000Z');
d.getUTCHours(); // 10
d.getHours(); // A different value, depending on the local timezone
\`\`\`

### 📚 Key Concepts
- **ISO 8601**: The standard and most reliable format for date strings.
- **UTC Methods**: A parallel set of getters and setters for working with dates independently of the local timezone.
`,

  // problem explanation--> 65
  "dt-get-zodiac-sign": `
### 💡 Problem Breakdown
The task is to determine a person's Western astrological zodiac sign based on their birth date. This involves a series of conditional checks based on the month and day.

### ⚙️ Solution Walkthrough
A long \`if/else if\` chain is a straightforward way to implement the logic.
1. Get the month (0-11) and day (1-31) from the date object.
2. Write an \`if\` statement for each of the 12 signs. Each condition will check if the date falls within that sign's range. For example, for Aries (March 21 - April 19): \`if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) return "Aries";\`
3. Repeat this for all 12 signs.

### 📚 Key Concepts
- **Conditional Logic**: The problem is a direct application of conditional statements to map a date to a category.
`,

  // problem explanation--> 66
  "dt-time-duration-format": `
### 💡 Problem Breakdown
The goal is to convert a total number of seconds into a formatted \`HH:MM:SS\` string.

### ⚙️ Solution Walkthrough
This involves simple arithmetic to calculate the hours, minutes, and remaining seconds.
1.  **Hours**: \`hours = Math.floor(totalSeconds / 3600)\`
2.  **Minutes**: \`minutes = Math.floor((totalSeconds % 3600) / 60)\`
3.  **Seconds**: \`seconds = totalSeconds % 60\`
4.  **Padding**: Use the \`.padStart(2, '0')\` string method on each component to ensure they are two digits long.
5.  **Combine**: Join the formatted components with colons.

### 📚 Key Concepts
- **Integer Arithmetic**: Using division and modulo to convert a single unit of time into multiple larger units.
`,

  // problem explanation--> 67
  "dt-get-season": `
### 💡 Problem Breakdown
The task is to determine the meteorological season for a date in the Northern Hemisphere. The seasons are defined by three-month blocks:
- Winter: December, January, February
- Spring: March, April, May
- Summer: June, July, August
- Autumn: September, October, November

### ⚙️ Solution Walkthrough
1. Get the month index (0-11) from the date object.
2. Use an \`if/else if\` chain or a \`switch\` statement to check which range the month falls into and return the corresponding season name.
\`\`\`javascript
const month = date.getMonth(); // 0-11
if (month >= 2 && month <= 4) return "Spring";
// ...and so on for the other seasons
\`\`\`

### 📚 Key Concepts
- **Conditional Logic**: Mapping a numeric range to a categorical value.
`,

  // problem explanation--> 68
  "dt-get-fiscal-year": `
### 💡 Problem Breakdown
A fiscal year is a one-year period that companies and governments use for financial reporting. It doesn't always start on January 1st. The task is to calculate the fiscal year for a date, given that the fiscal year starts in October.

### ⚙️ Solution Walkthrough
If the fiscal year starts in October, then any date from October to December of a given calendar year belongs to the *next* fiscal year.
1. Get the month (0-11) and year from the date object.
2. Check if the month is October (9), November (10), or December (11).
3. If it is, the fiscal year is \`year + 1\`.
4. Otherwise, the fiscal year is the same as the calendar year.

### 📚 Key Concepts
- **Custom Logic**: Applying a specific business rule to a date calculation.
`,

  // problem explanation--> 69
  "dt-is-past-date": `
### 💡 Problem Breakdown
The task is to check if a given date and time is before the current moment.

### ⚙️ Solution Walkthrough
The most reliable way is to compare the numeric timestamps.
\`\`\`javascript
function isPast(date) {
  // Get the timestamp of the input date
  const pastTime = date.getTime();
  // Get the current timestamp
  const now = Date.now();
  
  return pastTime < now;
}
\`\`\`
A simpler way is to use the relational operators directly, which will coerce the \`Date\` objects to their timestamp values: \`date < new Date()\`.

### 📚 Key Concepts
- **Date Comparison**: Using timestamps for accurate comparison.
`,

  // problem explanation--> 70
  "dt-is-future-date": `
### 💡 Problem Breakdown
The task is to check if a given date and time is after the current moment.

### ⚙️ Solution Walkthrough
The logic is symmetrical to checking for a past date. We compare the timestamps.
\`\`\`javascript
function isFuture(date) {
  return date.getTime() > Date.now();
}
// Or more concisely:
// return date > new Date();
\`\`\`

### 📚 Key Concepts
- **Date Comparison**: Using timestamps for accurate comparison.
`,

  // problem explanation--> 71
  "dt-find-next-occurrence-of-weekday": `
### 💡 Problem Breakdown
The goal is to find the date of the next upcoming weekday. For example, if today is Wednesday and we ask for the next Monday, it should be the Monday of next week.

### ⚙️ Solution Walkthrough
We can use date arithmetic with the numeric day of the week.
1. Get the current day of the week (\`todayDay\`, 0-6) and the target day (\`targetDay\`, 0-6).
2. Calculate the difference in days. A simple formula is \`(targetDay - todayDay + 7) % 7\`. The \`+ 7\` handles cases where the target day is earlier in the week than today, and the \`% 7\` ensures the result is between 0 and 6.
3. If the difference is 0, it means today is the target day, so we add 7 to get the occurrence next week.
4. Add the calculated number of days to the current date.

### 📚 Key Concepts
- **Modulo Arithmetic**: A key tool for handling cyclical calculations like days of the week.
`,

  // problem explanation--> 72
  "dt-sort-dates-array": `
### 💡 Problem Breakdown
The task is to sort an array of date strings into chronological order (earliest to latest).

### ⚙️ Solution Walkthrough
The \`Array.prototype.sort()\` method is used with a custom compare function. The compare function should convert the date strings into a format that can be easily compared, such as their numeric timestamps.
\`\`\`javascript
const dateStrings = ["2025-01-01", "2023-05-10", "2024-12-25"];

dateStrings.sort((a, b) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return dateA.getTime() - dateB.getTime();
});
\`\`\`
Subtracting the timestamps in the compare function (\`dateA - dateB\`) will produce a negative number, zero, or a positive number, which is exactly what \`.sort()\` needs to order the elements correctly.

### 📚 Key Concepts
- **Custom Sort Function**: Providing a callback to \`.sort()\` allows you to define custom sorting logic.
`,

  // problem explanation--> 73
  "dt-get-day-of-year": `
### 💡 Problem Breakdown
The task is to find the "ordinal day" of the year for a given date. For example, January 1st is day 1, February 1st is day 32, and so on.

### ⚙️ Solution Walkthrough
A simple way to calculate this is to find the difference in time between the given date and the beginning of that year, and then convert that difference to days.
1. Create a \`Date\` object for the given date.
2. Create another \`Date\` object for the start of that same year (January 1st).
3. Get the timestamps of both dates using \`.getTime()\`.
4. Subtract the start-of-year timestamp from the given date's timestamp. The result is the difference in milliseconds.
5. Divide by the number of milliseconds in a day (86,400,000) and take the floor to get the number of full days that have passed. Add 1 to get the 1-indexed day of the year.

### 📚 Key Concepts
- **Timestamp Arithmetic**: Using timestamps to calculate the duration between two points in time.
`,

  // problem explanation--> 74
  "dt-get-last-day-of-previous-month": `
### 💡 Problem Breakdown
The task is to get a \`Date\` object representing the last day of the month that comes before a given date.

### ⚙️ Solution Walkthrough
This can be solved very concisely using the "0th day" trick with the \`Date\` constructor. The last day of the previous month is the 0th day of the *current* month.
\`\`\`javascript
function getLastDayOfPrevMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  
  // The 0th day of the current month is the last day of the previous one.
  return new Date(year, month, 0);
}
\`\`\`
For example, if the date is in July (month 6), \`new Date(year, 6, 0)\` will correctly give June 30th.

### 📚 Key Concepts
- **Date Rollover**: A powerful behavior of the \`Date\` constructor and \`set\` methods that simplifies date arithmetic.
`,

  // problem explanation--> 75
  "dt-list-all-sundays-in-month": `
### 💡 Problem Breakdown
The goal is to iterate through all the days of a specific month and year and collect the dates of all the days that are Sundays.

### ⚙️ Solution Walkthrough
1.  **Initialize**: Create an empty array to store the results. Create a \`Date\` object for the first day of the specified month and year.
2.  **Loop**: Use a \`while\` loop that continues as long as the loop's date is still within the target month (\`d.getMonth() === month\`).
3.  **Check Day**: Inside the loop, check if the current day of the week is Sunday (\`d.getDay() === 0\`).
4.  **Collect**: If it is a Sunday, add its day of the month (\`d.getDate()\`) to the results array.
5.  **Advance**: Advance the date to the next day using \`d.setDate(d.getDate() + 1)\`.
6.  Return the results array.

### 📚 Key Concepts
- **Date Iteration**: A common pattern of using a \`while\` loop and \`.setDate()\` to step through each day of a month.
`,

  // problem explanation--> 76
  "dt-date-object-keys-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the internal structure of \`Date\` objects. \`Date\` objects store their time value in an internal, non-enumerable property. They do not have any "own" enumerable properties.

### ⚙️ Solution Walkthrough
\`Object.keys()\` is a method that returns an array of an object's own **enumerable** property names. Since a \`Date\` instance has none, the result is an empty array.
\`\`\`javascript
const d = new Date();
Object.keys(d); // []
\`\`\`
All the useful methods like \`.getFullYear()\` are inherited from \`Date.prototype\`.

### 📚 Key Concepts
- **Own vs. Inherited Properties**: \`Object.keys()\` only considers own properties.
- **Enumerable Properties**: Not all properties are included in enumeration loops. Internal properties are typically non-enumerable.
`,

  // problem explanation--> 77
  "dt-date-prototype-methods-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem that reinforces JavaScript's prototypal inheritance. Methods like \`.getFullYear()\`, \`.getMonth()\`, etc., are not created individually on every \`Date\` object you make. Instead, they exist in one place: on the \`Date.prototype\` object.

### ⚙️ Solution Walkthrough
Every \`Date\` instance that you create with \`new Date()\` has an internal link to \`Date.prototype\`. When you call \`myDate.getFullYear()\`, the JavaScript engine doesn't find the method on \`myDate\` itself, so it looks up the prototype chain and finds it on \`Date.prototype\`.
\`\`\`javascript
const d = new Date();
d.hasOwnProperty('getFullYear'); // false
Date.prototype.hasOwnProperty('getFullYear'); // true
\`\`\`
This is a very memory-efficient design.

### 📚 Key Concepts
- **Prototypal Inheritance**: The core mechanism for sharing methods between object instances.
- **\`.prototype\` Property**: The object where shared methods for a constructor are stored.
`,

  // problem explanation--> 78
  "dt-get-utc-date": `
### 💡 Problem Breakdown
This is the UTC equivalent of \`.getDate()\`. The \`.getUTCDate()\` method returns the day of the month (1-31) of a \`Date\` object according to the UTC timezone.

### ⚙️ Solution Walkthrough
The UTC day is retrieved.
\`\`\`javascript
const d = new Date('2024-08-01T02:00:00+04:00'); // July 31st in UTC
d.getUTCDate(); // 31
d.getDate();    // 1 (for the local timezone)
\`\`\`

### 📚 Key Concepts
- **UTC Methods**: Essential for server-side logic or any context where a consistent, timezone-independent time is required.
`,

  // problem explanation--> 79
  "dt-set-utc-full-year": `
### 💡 Problem Breakdown
This is the UTC equivalent of \`.setFullYear()\`. The \`.setUTCFullYear()\` method sets the year for a specified date according to universal time, modifying the \`Date\` object in place.

### ⚙️ Solution Walkthrough
The UTC year of a date object is changed.
\`\`\`javascript
const d = new Date();
d.setUTCFullYear(2042);
// The timestamp of 'd' is now updated to reflect the year 2042 in UTC.
\`\`\`

### 📚 Key Concepts
- **UTC Setter Methods**: A parallel set of setter methods for working with UTC time.
`,

  // problem explanation--> 80
  "dt-to-gmt-string-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a legacy method. \`.toGMTString()\` was the original method for getting a date string formatted according to GMT (Greenwich Mean Time). The UTC standard has since replaced GMT as the primary time standard.

### ⚙️ Solution Walkthrough
For backward compatibility, \`.toGMTString()\` is still available in browsers, but it is a direct alias for \`.toUTCString()\`. They produce the exact same output.
\`\`\`javascript
const d = new Date();
d.toGMTString(); // "Sat, 27 Jul 2024 12:00:00 GMT"
d.toUTCString(); // "Sat, 27 Jul 2024 12:00:00 GMT"
\`\`\`
**Best Practice**: Always use \`.toUTCString()\` in modern code.

### 📚 Key Concepts
- **Deprecated Methods**: Understanding which parts of an API are considered obsolete.
- **UTC vs. GMT**: For most practical purposes in computing, they are interchangeable. UTC is the modern standard.
`,

  // problem explanation--> 81
  "dt-to-time-string": `
### 💡 Problem Breakdown
The task is to get a human-readable string representation of just the **time** portion of a \`Date\` object, based on the user's local timezone.

### ⚙️ Solution Walkthrough
The \`.toTimeString()\` method is called on a \`Date\` instance. The format is implementation-dependent but is typically in a format like "14:30:00 GMT-0400 (Eastern Daylight Time)".
\`\`\`javascript
const d = new Date();
const timeString = d.toTimeString();
\`\`\`

### 📚 Key Concepts
- **Date Formatting**: Converting a \`Date\` object into a string for display.
`,

  // problem explanation--> 82
  "dt-to-locale-time-string": `
### 💡 Problem Breakdown
The goal is to format the time portion of a \`Date\` object in a way that respects the user's local conventions (e.g., 12-hour vs. 24-hour clock).

### ⚙️ Solution Walkthrough
The \`.toLocaleTimeString()\` method is called on a \`Date\` instance.
\`\`\`javascript
const d = new Date();
const localTimeString = d.toLocaleTimeString(); // e.g., "2:30:00 PM" in the US
\`\`\`
This method is part of the \`Intl\` API family and is the preferred way to display times to users. You can also pass options to it for more control.

### 📚 Key Concepts
- **Internationalization (i18n)**: The process of designing software so that it can be adapted to various languages and regions.
- **\`.toLocaleTimeString()\`**: The standard method for locale-aware time formatting.
`,

  // problem explanation--> 83
  "dt-diff-in-weeks": `
### 💡 Problem Breakdown
The task is to find the number of full weeks between two dates. This is best done by working with the numeric timestamps.

### ⚙️ Solution Walkthrough
1. Get the timestamps of both dates using \`.getTime()\`.
2. Find the absolute difference in milliseconds.
3. Convert the milliseconds to weeks by dividing by the number of milliseconds in a week (1000 * 60 * 60 * 24 * 7).
4. Use \`Math.floor()\` to get the number of *full* weeks.
\`\`\`javascript
const oneWeek = 1000 * 60 * 60 * 24 * 7;
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffWeeks = Math.floor(diffTime / oneWeek);
\`\`\`

### 📚 Key Concepts
- **Timestamp Arithmetic**: The most reliable way to calculate durations.
`,

  // problem explanation--> 84
  "dt-is-same-month": `
### 💡 Problem Breakdown
The task is to check if two \`Date\` objects fall within the same calendar month and year.

### ⚙️ Solution Walkthrough
The solution involves comparing the year and month components of both dates.
\`\`\`javascript
function isSameMonth(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth();
}
\`\`\`
It's crucial to check both the year and the month. For example, March 2023 is not the same month as March 2024.

### 📚 Key Concepts
- **Date Component Comparison**: A precise way to check for date equality based on specific components.
`,

  // problem explanation--> 85
  "dt-is-same-year": `
### 💡 Problem Breakdown
The task is to check if two \`Date\` objects fall within the same calendar year.

### ⚙️ Solution Walkthrough
The solution is a simplified version of the previous problem, only comparing the years.
\`\`\`javascript
function isSameYear(d1, d2) {
  return d1.getFullYear() === d2.getFullYear();
}
\`\`\`

### 📚 Key Concepts
- **Date Component Comparison**: Using getters to compare specific parts of a date.
`,

  // problem explanation--> 86
  "dt-date-rollover-day": `
### 💡 Problem Breakdown
This problem demonstrates an important and useful behavior of the \`Date\` object. If you use \`.setDate()\` or the constructor with a day value that is larger than the number of days in that month, the date automatically "rolls over" to the next month.

### ⚙️ Solution Walkthrough
We try to create a date for January 32nd.
\`\`\`javascript
const d = new Date(2024, 0, 32); // 0 is January
// This is interpreted as 32 - 31 = 1 day after Jan 31st.
// The result is February 1st, 2024.
console.log(d.toDateString()); // "Thu Feb 01 2024"
\`\`\`
This feature is the basis for many date arithmetic calculations.

### 📚 Key Concepts
- **Date Rollover**: The automatic adjustment of date components when they are set to out-of-range values.
`,

  // problem explanation--> 87
  "dt-date-rollover-month": `
### 💡 Problem Breakdown
Similar to day rollover, if you set a month index greater than 11, the date automatically rolls over to the next year.

### ⚙️ Solution Walkthrough
We try to create a date for the 13th month (index 12).
\`\`\`javascript
const d = new Date(2024, 12, 1); // Month 12
// This is interpreted as the month after December 2024.
// The result is January 1st, 2025.
console.log(d.toDateString()); // "Wed Jan 01 2025"
\`\`\`

### 📚 Key Concepts
- **Date Rollover**: A consistent behavior across all date components.
`,

  // problem explanation--> 88
  "dt-human-readable-duration": `
### 💡 Problem Breakdown
The task is to convert a large number of milliseconds into a human-readable string that breaks the duration down into days, hours, and minutes.

### ⚙️ Solution Walkthrough
The solution involves a series of divisions and modulo operations to extract each time unit from the total duration.
1.  **Convert to Seconds**: First, convert the total milliseconds to seconds by dividing by 1000.
2.  **Calculate Days**: Divide the total seconds by the number of seconds in a day (86400) and take the floor to get the number of full days.
3.  **Calculate Hours**: Use the remainder from the previous step (\`seconds % 86400\`) to find the remaining seconds. Divide this by the number of seconds in an hour (3600) and take the floor to get the hours.
4.  **Calculate Minutes**: Use the remainder from the hours calculation and divide by 60 to get the minutes.
5.  **Format String**: Combine these calculated values into a formatted string.

### 📚 Key Concepts
- **Time Unit Conversion**: Using arithmetic to convert between different units of time (milliseconds, seconds, days, hours).
- **Modulo Operator (%)\**: Essential for finding the remaining duration after calculating a larger time unit.
`,

  // problem explanation--> 89
  "dt-get-unix-timestamp": `
### 💡 Problem Breakdown
A "Unix timestamp" typically refers to the number of **seconds** that have elapsed since the Unix Epoch (January 1, 1970, UTC). JavaScript's \`Date.now()\` and \`.getTime()\` methods work with **milliseconds**. The task is to convert from JavaScript's millisecond-based timestamp to the standard second-based Unix timestamp.

### ⚙️ Solution Walkthrough
1.  **Get Milliseconds**: Get the current timestamp in milliseconds using \`Date.now()\`.
2.  **Convert**: Divide the millisecond timestamp by 1000.
3.  **Floor**: Use \`Math.floor()\` to discard the fractional part, as a Unix timestamp is an integer.

\`\`\`javascript
const jsTimestamp = Date.now(); // e.g., 1721988000123
const unixTimestamp = Math.floor(jsTimestamp / 1000); // 1721988000
\`\`\`

### 📚 Key Concepts
- **Timestamp Units**: A critical detail is knowing whether a timestamp is in seconds or milliseconds. This is a common source of bugs when working with different systems.
`,

  // problem explanation--> 90
  "dt-is-am-or-pm": `
### 💡 Problem Breakdown
The task is to determine whether the time portion of a \`Date\` object is in the AM (ante meridiem, before midday) or PM (post meridiem, after midday) period.

### ⚙️ Solution Walkthrough
The \`.getHours()\` method returns the hour in 24-hour format (0-23). The logic is simple:
- Hours 0 (midnight) through 11 are AM.
- Hours 12 (noon) through 23 are PM.

\`\`\`javascript
function getAmPm(date) {
  const hours = date.getHours();
  return hours >= 12 ? 'PM' : 'AM';
}
\`\`\`
This uses a ternary operator for a concise solution.

### 📚 Key Concepts
- **Time Formatting**: Understanding the 24-hour clock and its relation to the 12-hour AM/PM system.
- **\`.getHours()\`**: The standard method for retrieving the hour from a \`Date\` object.
`,

  // problem explanation--> 91
  "dt-add-hours": `
### 💡 Problem Breakdown
The goal is to add a specific number of hours to a \`Date\` object, correctly handling rollovers to the next day.

### ⚙️ Solution Walkthrough
The \`.setHours()\` method is used. When you get the current hours and add to them, the \`Date\` object automatically handles any necessary rollovers of the day, month, and year.
\`\`\`javascript
function addHours(date, hours) {
  const newDate = new Date(date); // Create a copy
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
}

const d = new Date('2024-01-01 22:00:00');
addHours(d, 3); // Returns a Date object for 2024-01-02 01:00:00
\`\`\`

### 📚 Key Concepts
- **Date Rollover**: A key feature of \`Date\` setter methods that simplifies date arithmetic.
`,

  // problem explanation--> 92
  "dt-add-minutes": `
### 💡 Problem Breakdown
This is similar to adding hours. The task is to add a specific number of minutes to a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.setMinutes()\` method is used. It will automatically handle rollovers to the next hour and day if necessary.
\`\`\`javascript
function addMinutes(date, minutes) {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
}

const d = new Date('2024-01-01 10:45:00');
addMinutes(d, 30); // Returns a Date object for 2024-01-01 11:15:00
\`\`\`

### 📚 Key Concepts
- **Date Rollover**: \`setMinutes\` will correctly update the hour and day if the new minute value is 60 or greater.
`,

  // problem explanation--> 93
  "dt-date-from-parts-utc": `
### 💡 Problem Breakdown
This problem contrasts creating a date with \`new Date(y, m, d)\` (which uses the local timezone) and \`Date.UTC(y, m, d)\`. The \`Date.UTC()\` method takes the same date components but interprets them as being in the UTC timezone and returns a **timestamp** (a number), not a \`Date\` object.

### ⚙️ Solution Walkthrough
1.  **\`Date.UTC()\`**: Call \`Date.UTC()\` with the UTC year, month, day, etc., to get a millisecond timestamp.
2.  **\`new Date()\`**: Pass this timestamp to the \`new Date()\` constructor to create a \`Date\` object that represents that exact moment in time.
\`\`\`javascript
// Creates a timestamp for July 26, 2024, 10:00:00 UTC
const timestamp = Date.UTC(2024, 6, 26, 10, 0, 0);

// Creates a Date object representing that moment.
const date = new Date(timestamp);

// The output of .toString() will be in the user's local timezone,
// but the underlying timestamp is based on the UTC values provided.
\`\`\`

### 📚 Key Concepts
- **\`Date.UTC()\`**: A static method that returns a timestamp, not a \`Date\` object.
- **Timezones**: Understanding the difference between creating a date from local components versus UTC components.
`,

  // problem explanation--> 94
  "dt-get-next-month": `
### 💡 Problem Breakdown
The task is to get the date for the next month. A challenge arises on the last day of a month. For example, what is one month after January 31st? Since February doesn't have 31 days, the \`Date\` object will automatically roll over.

### ⚙️ Solution Walkthrough
The \`.setMonth()\` method with \`.getMonth() + 1\` handles this.
\`\`\`javascript
const d = new Date('2024-01-31');
d.setMonth(d.getMonth() + 1);
// The date becomes Feb 31st, which is invalid, so it rolls over.
// 2024 is a leap year, so Feb has 29 days.
// The result is March 2nd (31 - 29 = 2 days into March).
console.log(d.toDateString()); // "Sat Mar 02 2024"
\`\`\`
This demonstrates the automatic rollover behavior, which is important to be aware of.

### 📚 Key Concepts
- **Date Rollover**: The \`Date\` object's handling of invalid dates like "February 31st".
`,

  // problem explanation--> 95
  "dt-get-previous-month": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem: get the date for the previous month.

### ⚙️ Solution Walkthrough
The logic is symmetrical, using \`.setMonth(d.getMonth() - 1)\`.
\`\`\`javascript
const d = new Date('2024-03-31');
d.setMonth(d.getMonth() - 1);
// This becomes Feb 31st, 2024, which rolls over to March 2nd, 2024
console.log(d.toDateString()); // "Sat Mar 02 2024"
\`\`\`
Note the rollover behavior is the same. To get the last day of the previous month, a different technique is needed (the "0th day" trick).

### 📚 Key Concepts
- **Date Rollover**: A consistent behavior for both adding and subtracting months.
`,

  // problem explanation--> 96
  "dt-is-last-day-of-month": `
### 💡 Problem Breakdown
The task is to determine if a given date is the last day of its month.

### ⚙️ Solution Walkthrough
A clever way to check this is to get the date for the *next* day and see if its month is different.
1.  Create a copy of the date.
2.  Add one day to the copy using \`.setDate(d.getDate() + 1)\`.
3.  Check if the month of the copied date is now different from the month of the original date. If it is, the original date must have been the last day of the month.
\`\`\`javascript
function isLastDay(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
}
\`\`\`

### 📚 Key Concepts
- **Date Rollover**: This solution cleverly uses the rollover behavior to detect the end of a month.
`,

  // problem explanation--> 97
  "dt-format-with-ordinal": `
### 💡 Problem Breakdown
The task is to format the day of the month with its correct English ordinal suffix: "st" (1st, 21st, 31st), "nd" (2nd, 22nd), "rd" (3rd, 23rd), or "th" (all others).

### ⚙️ Solution Walkthrough
The logic requires checking the last digit of the day, with special handling for the "teen" numbers (11, 12, 13) which all use "th".
1.  Get the day of the month (1-31).
2.  **Handle Teens**: If the day is between 11 and 13 inclusive, the suffix is "th".
3.  **Check Last Digit**: Otherwise, use the modulo operator (\`day % 10\`) to get the last digit.
    - If it's 1, use "st".
    - If it's 2, use "nd".
    - If it's 3, use "rd".
    - For all other cases, use "th".

### 📚 Key Concepts
- **Conditional Logic**: A series of \`if/else\` or a \`switch\` statement is needed to apply the correct grammatical rule.
`,

  // problem explanation--> 98
  "dt-get-day-progress": `
### 💡 Problem Breakdown
The goal is to calculate what percentage of the current day has passed.

### ⚙️ Solution Walkthrough
The solution involves comparing the current timestamp with the timestamp for the start of the day.
1.  **Get "Now"**: Get the current \`Date\` object.
2.  **Get "Start of Day"**: Create a new \`Date\` object for the start of today by setting the hours, minutes, seconds, and milliseconds to zero.
3.  **Calculate Milliseconds Passed**: Get the timestamps (\`.getTime()\`) of both dates and find the difference.
4.  **Calculate Percentage**: Divide the milliseconds passed by the total number of milliseconds in a day (86,400,000) and multiply by 100.

### 📚 Key Concepts
- **Timestamp Arithmetic**: Using timestamps to calculate durations and percentages.
`,

  // problem explanation--> 99
  "dt-get-year-progress": `
### 💡 Problem Breakdown
Similar to the day progress problem, the goal here is to calculate what percentage of the current year has passed.

### ⚙️ Solution Walkthrough
1.  **Get "Now"**: Get the current \`Date\` object.
2.  **Get "Start of Year"**: Create a \`Date\` for January 1st of the current year.
3.  **Get "End of Year"**: Create a \`Date\` for January 1st of the *next* year.
4.  **Calculate Durations**:
    - \`totalYearMs = endOfYear.getTime() - startOfYear.getTime()\`
    - \`passedMs = now.getTime() - startOfYear.getTime()\`
5.  **Calculate Percentage**: Divide \`passedMs\` by \`totalYearMs\` and multiply by 100. This correctly handles leap years.

### 📚 Key Concepts
- **Timestamp Arithmetic**: A reliable way to handle date calculations, especially when leap years are involved.
`,

  // problem explanation--> 100
  "dt-get-earliest-date": `
### 💡 Problem Breakdown
The task is to find the earliest date from an array of dates (represented as strings or \`Date\` objects).

### ⚙️ Solution Walkthrough
The most efficient way is to convert all dates to their numeric timestamp representation and find the minimum.
1.  **Map to Timestamps**: Use the \`.map()\` method on the array to convert each date into its millisecond timestamp (\`new Date(d).getTime()\`).
2.  **Find Minimum**: Use \`Math.min()\` with the spread syntax (\`...\`) on the array of timestamps to find the smallest timestamp.
3.  **Convert Back to Date**: Create a new \`Date\` object from the minimum timestamp found.
\`\`\`javascript
const dateTimestamps = dateArray.map(d => d.getTime());
const minTimestamp = Math.min(...dateTimestamps);
const earliestDate = new Date(minTimestamp);
\`\`\`

### 📚 Key Concepts
- **Timestamp Comparison**: Converting dates to numbers makes them easy to compare and sort.
`,

  // problem explanation--> 101
  "dt-get-latest-date": `
### 💡 Problem Breakdown
This is the counterpart to the previous problem: find the latest (most recent) date in an array.

### ⚙️ Solution Walkthrough
The logic is identical to finding the earliest date, but using \`Math.max()\` instead of \`Math.min()\`.
1.  **Map to Timestamps**: Convert each date in the array to its millisecond timestamp.
2.  **Find Maximum**: Use \`Math.max()\` with the spread syntax to find the largest timestamp.
3.  **Convert Back to Date**: Create a new \`Date\` object from the maximum timestamp.
\`\`\`javascript
const maxTimestamp = Math.max(...dateArray.map(d => d.getTime()));
const latestDate = new Date(maxTimestamp);
\`\`\`

### 📚 Key Concepts
- **Timestamp Comparison**: The standard way to find the min/max of a set of dates.
`,

  // problem explanation--> 102
  "dt-list-dates-in-range": `
### 💡 Problem Breakdown
The goal is to generate an array of all the calendar dates between a start date and an end date, inclusive.

### ⚙️ Solution Walkthrough
An iterative approach is straightforward.
1.  **Initialize**: Create an empty \`dates\` array. Create a \`currentDate\` object initialized to the start date.
2.  **Loop**: Use a \`while\` loop that continues as long as \`currentDate\` is less than or equal to the end date.
3.  **Add to List**: Inside the loop, push a *copy* of the \`currentDate\` into the \`dates\` array.
4.  **Advance Date**: Increment the \`currentDate\` to the next day using \`currentDate.setDate(currentDate.getDate() + 1)\`.
5.  Return the \`dates\` array.

### 📚 Key Concepts
- **Date Iteration**: A common pattern for processing a range of dates.
`,

  // problem explanation--> 103
  "dt-add-years": `
### 💡 Problem Breakdown
The task is to add a specific number of years to a \`Date\` object.

### ⚙️ Solution Walkthrough
The \`.setFullYear()\` method is the correct tool for this. It handles the addition and also correctly adjusts for leap years if the original date was February 29th.
\`\`\`javascript
function addYears(date, years) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

const d = new Date('2024-02-29'); // Leap year
addYears(d, 1); // Returns a Date for 2025-02-28, as 2025 is not a leap year.
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: Using setter methods to modify date components.
`,

  // problem explanation--> 104
  "dt-diff-in-years": `
### 💡 Problem Breakdown
The goal is to calculate the number of full years between two dates, which is equivalent to calculating a person's age.

### ⚙️ Solution Walkthrough
A simple subtraction of years is a good start, but it needs an adjustment for whether the anniversary of the start date has occurred yet in the end date's year.
1.  **Year Difference**: Calculate the initial difference by subtracting the start year from the end year.
2.  **Month/Day Adjustment**: Check if the end date's month/day is before the start date's month/day.
3.  If it is, it means a full year has not yet passed, so we subtract 1 from the initial difference.

This is the same logic used in the "Calculate Age" problem.

### 📚 Key Concepts
- **Date Component Comparison**: The most reliable way to calculate calendar-based durations like years.
`,

  // problem explanation--> 105
  "dt-temporal-api-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about a future JavaScript feature. The built-in \`Date\` object is notoriously difficult to work with due to its mutability, its confusing API (e.g., month is 0-indexed), and poor timezone support. The **Temporal API** is a Stage 3 TC39 proposal to fix this.

### ⚙️ Solution Walkthrough
Temporal introduces a set of new, modern objects for date/time work:
- **Immutability**: All Temporal objects are immutable. Operations like \`.add()\` return a *new* object.
- **Clarity**: It provides separate objects for different concepts:
  - \`Temporal.PlainDate\`: A date without a time or timezone.
  - \`Temporal.PlainTime\`: A time without a date or timezone.
  - \`Temporal.PlainDateTime\`: A date and time combination.
  - \`Temporal.ZonedDateTime\`: A date/time in a specific timezone.
  - \`Temporal.Duration\`: For representing durations like "3 hours and 50 minutes".
- **Ergonomics**: The API is much cleaner and more predictable than the old \`Date\` object.

### 📚 Key Concepts
- **Future of JavaScript**: Temporal is expected to become the new standard for date/time manipulation.
`,

  // problem explanation--> 106
  "dt-get-daylight-saving-changes": `
### 💡 Problem Breakdown
This is a complex problem because Daylight Saving Time (DST) rules vary by jurisdiction and year. The task is to find the start and end dates of DST for a given year in the user's local timezone. A direct calculation is difficult, but we can detect it by observing changes in the timezone offset.

### ⚙️ Solution Walkthrough
The solution iterates through the year, checking the timezone offset at different points to find where it changes.
1.  **Get Standard Offset**: Get a baseline timezone offset from a date that is unlikely to be in DST (like January 1st).
2.  **Iterate Hours**: Loop through every hour of the given year.
3.  **Check for Change**: In each iteration, create a \`Date\` object and get its timezone offset using \`.getTimezoneOffset()\`.
4.  **Detect Start/End**:
    - The start of DST occurs when the offset decreases.
    - The end of DST (return to standard time) occurs when the offset increases.
5.  Record the dates when these changes are first detected.

### 📚 Key Concepts
- **\`.getTimezoneOffset()\`**: The core method used. It returns the difference in minutes between UTC and local time. This value changes when DST starts and ends.
- **Timezones**: A complex topic. This solution is specific to the user's local timezone settings.
`,

  // problem explanation--> 107
  "dt-format-to-parts": `
### 💡 Problem Breakdown
\`Intl.DateTimeFormat.formatToParts()\` is a powerful internationalization method. Instead of returning a single formatted string, it returns an array of objects, where each object represents a component of the formatted date (e.g., month, day, year, literal characters like '/').

### ⚙️ Solution Walkthrough
1.  **Create Formatter**: Create an instance of \`Intl.DateTimeFormat\`.
2.  **Call \`formatToParts\`**: Call the method on the formatter with a \`Date\` object.
3.  **Inspect Result**: The result is an array that you can inspect or use to build custom formatted strings.
\`\`\`javascript
const date = new Date(2024, 6, 26);
const formatter = new Intl.DateTimeFormat('en-US');
const parts = formatter.formatToParts(date);
// parts is an array like:
// [
//   { type: 'month', value: '7' },
//   { type: 'literal', value: '/' },
//   { type: 'day', value: '26' },
//   { type: 'literal', value: '/' },
//   { type: 'year', value: '2024' }
// ]
\`\`\`
This is extremely useful for when you need to style different parts of a date string (e.g., making the day bold).

### 📚 Key Concepts
- **Internationalization API (\`Intl\`)**: A standard library for locale-sensitive formatting.
- **Structured Data**: Returning an array of parts provides more flexibility than a single flat string.
`,

  // problem explanation--> 108
  "dt-validate-time-string": `
### 💡 Problem Breakdown
The task is to validate if a string conforms to the \`HH:MM\` 24-hour format and represents a real time (e.g., "25:00" is invalid).

### ⚙️ Solution Walkthrough
A regular expression is a great tool for this.
1.  **Regex Pattern**: The pattern \`/^([01]\\d|2[0-3]):([0-5]\\d)$/\` checks for the structure.
    - \`^\` and \`$\`: Anchor the pattern to the start and end of the string.
    - \`([01]\\d|2[0-3])\`: This part matches the hour. It allows a 0 or 1 followed by any digit OR a 2 followed by a digit from 0 to 3. This correctly covers hours 00-23.
    - \`:\`: Matches the literal colon.
    - \`([0-5]\\d)\`: Matches the minute, allowing a digit from 0-5 followed by any digit. This covers minutes 00-59.
2.  **Test**: Use the \`.test()\` method of the regex on the input string. It will return \`true\` if the string matches the pattern, and \`false\` otherwise.

### 📚 Key Concepts
- **Regular Expressions**: A powerful tool for pattern matching and validation in strings.
`,

  // problem explanation--> 109
  "dt-round-to-nearest-hour": `
### 💡 Problem Breakdown
The goal is to take a \`Date\` object and round its time to the nearest full hour. The standard rounding rule applies: if the minutes are 30 or more, round up to the next hour. Otherwise, round down.

### ⚙️ Solution Walkthrough
1.  **Check Minutes**: Get the minutes of the date using \`.getMinutes()\`.
2.  **Round Up**: If the minutes are 30 or greater, add one to the hour using \`.setHours(d.getHours() + 1)\`.
3.  **Round Down (Set to Zero)**: In either case, you need to set the minutes, seconds, and milliseconds to zero. Calling \`.setMinutes(0, 0, 0)\` does this. If you rounded the hour up, the \`Date\` object will correctly handle the rollover to the next day if necessary.

### 📚 Key Concepts
- **Date Arithmetic**: Using getter and setter methods to manipulate date components.
`,

  // problem explanation--> 110
  "dt-find-nth-weekday-of-month": `
### 💡 Problem Breakdown
This is a complex date calculation problem. The task is to find the date of a specific occurrence of a weekday within a month, such as the 3rd Friday of July 2024.

### ⚙️ Solution Walkthrough
An iterative approach is clear and reliable.
1.  **Initialize**: Create a \`Date\` object for the first day of the given month and year. Initialize an occurrence \`count\` to 0.
2.  **Loop**: Use a \`while\` loop to iterate through the days of the month.
3.  **Check Weekday**: In each iteration, check if the current date's day of the week (using \`.getDay()\`) matches the target weekday.
4.  **Count Occurrences**: If it's a match, increment the \`count\`.
5.  **Check Nth**: If the \`count\` now equals the target \`n\`, you have found the correct date. Return it.
6.  **Advance Date**: If it's not the one you're looking for, advance to the next day using \`d.setDate(d.getDate() + 1)\`.

### 📚 Key Concepts
- **Date Iteration**: A common pattern for finding specific dates that meet a certain criteria.
`,

  // problem explanation--> 111
  "dt-clone-date-object": `
### 💡 Problem Breakdown
\`Date\` objects are mutable. If you assign a date object to a new variable, you are only copying the reference. To create a true, independent copy (a clone), you need to create a new \`Date\` object.

### ⚙️ Solution Walkthrough
The easiest way to clone a \`Date\` object is to get its timestamp and pass it to a new \`Date\` constructor.
\`\`\`javascript
function cloneDate(date) {
  // .getTime() returns the numeric timestamp.
  // new Date(timestamp) creates a new object.
  return new Date(date.getTime());
}

const d1 = new Date();
const d2 = cloneDate(d1);
d2.setFullYear(1999); // This only affects d2

console.log(d1.getFullYear()); // The original year is unchanged.
\`\`\`

### 📚 Key Concepts
- **Mutability**: Understanding that objects are mutable is key to knowing when you need to create a copy.
- **Cloning**: The process of creating an independent copy of an object.
`,

  // problem explanation--> 112
  "dt-get-first-day-of-year": `
### 💡 Problem Breakdown
The task is to find out which day of the week (Sunday=0, Monday=1, etc.) a given year started on.

### ⚙️ Solution Walkthrough
1.  **Create Date**: Create a new \`Date\` object specifically for January 1st of the given year.
2.  **Get Day**: Call the \`.getDay()\` method on this new date object.
\`\`\`javascript
function getFirstDayOfYear(year) {
  // Month is 0-indexed, so 0 is January.
  const janFirst = new Date(year, 0, 1);
  return janFirst.getDay();
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: Creating a \`Date\` object for a specific moment in time.
`,

  // problem explanation--> 113
  "dt-get-last-day-of-year": `
### 💡 Problem Breakdown
The task is to find out which day of the week a given year ended on.

### ⚙️ Solution Walkthrough
1.  **Create Date**: Create a new \`Date\` object for December 31st of the given year.
2.  **Get Day**: Call the \`.getDay()\` method on this date.
\`\`\`javascript
function getLastDayOfYear(year) {
  // Month is 0-indexed, so 11 is December.
  const dec31st = new Date(year, 11, 31);
  return dec31st.getDay();
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: A direct application of the \`Date\` constructor.
`,

  // problem explanation--> 114
  "dt-set-time-to-noon": `
### 💡 Problem Breakdown
The task is to take a \`Date\` object, which represents a specific date and time, and modify it so that its time component is set to exactly noon (12:00:00.000).

### ⚙️ Solution Walkthrough
The \`.setHours()\` method can take multiple arguments to set the hours, minutes, seconds, and milliseconds all at once.
\`\`\`javascript
function setToon(date) {
  const newDate = new Date(date); // Work on a copy
  newDate.setHours(12, 0, 0, 0);
  return newDate;
}
\`\`\`

### 📚 Key Concepts
- **\`.setHours()\`**: A versatile method for setting all time components of a \`Date\` object.
`,

  // problem explanation--> 115
  "dt-get-time-period-of-day": `
### 💡 Problem Breakdown
The goal is to categorize a given hour of the day into one of four periods: Morning, Afternoon, Evening, or Night.

### ⚙️ Solution Walkthrough
An \`if...else if...else\` chain is a clear way to implement this logic.
1.  **Get Hour**: Get the hour (0-23) from the date.
2.  **Check Conditions**:
    - If the hour is between 5 and 11 (inclusive), it's "Morning".
    - Else if it's between 12 and 16, it's "Afternoon".
    - Else if it's between 17 and 20, it's "Evening".
    - Otherwise, it's "Night".
The order of the checks is important.

### 📚 Key Concepts
- **Conditional Logic**: Using an \`if\` chain to categorize a value.
`,

  // problem explanation--> 116
  "dt-add-weeks": `
### 💡 Problem Breakdown
The task is to add a specific number of weeks to a date. Since a week is a fixed duration of 7 days, this can be done by simply adding the corresponding number of days.

### ⚙️ Solution Walkthrough
1.  **Calculate Days**: Multiply the number of weeks by 7 to get the total number of days to add.
2.  **Add Days**: Use the \`.setDate()\` method with \`.getDate()\` to add this total number of days to the date object. The \`Date\` object will handle all month/year rollovers correctly.
\`\`\`javascript
function addWeeks(date, weeks) {
  date.setDate(date.getDate() + weeks * 7);
  return date;
}
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: Breaking down a larger time unit (weeks) into a smaller one (days) that the \`Date\` object can easily handle.
`,

  // problem explanation--> 117
  "dt-diff-in-minutes": `
### 💡 Problem Breakdown
The task is to calculate the total number of full minutes that have elapsed between two dates.

### ⚙️ Solution Walkthrough
The most reliable way to calculate a time difference is by using timestamps.
1.  **Get Timestamps**: Get the millisecond timestamp for both dates using the \`.getTime()\` method.
2.  **Calculate Difference**: Find the absolute difference between the two timestamps. This gives the total duration in milliseconds.
3.  **Convert to Minutes**: Divide the millisecond difference by the number of milliseconds in a minute (60,000).
4.  **Floor**: Use \`Math.floor()\` to get the number of *full* minutes.

### 📚 Key Concepts
- **Timestamp Arithmetic**: The standard and most reliable method for calculating precise durations between two moments in time.
`,

  // problem explanation--> 118
  "dt-get-gmt-offset-string": `
### 💡 Problem Breakdown
The default string representation of a \`Date\` object often includes information about the local timezone offset from GMT/UTC. The task is to extract this part of the string.

### ⚙️ Solution Walkthrough
This is a string parsing problem. A regular expression is a good tool for this.
1.  **Convert to String**: Call \`.toString()\` on a \`Date\` object.
2.  **Regex Match**: Use a regular expression like \`/GMT([+-]\\d{4})/\` to find the part of the string that starts with "GMT" followed by a sign and four digits.
3.  **Extract**: If a match is found, the desired string is in the first capture group.

### 📚 Key Concepts
- **String Parsing**: Using regular expressions to extract specific patterns from a string.
`,

  // problem explanation--> 119
  "dt-is-first-day-of-month": `
### 💡 Problem Breakdown
The task is to check if a given date is the first day of the month.

### ⚙️ Solution Walkthrough
This is a very simple check. The \`.getDate()\` method returns the day of the month as a number from 1 to 31. We just need to check if this value is 1.
\`\`\`javascript
function isFirstDay(date) {
  return date.getDate() === 1;
}
\`\`\`

### 📚 Key Concepts
- **\`.getDate()\`**: The standard method for getting the day of the month.
`,

  // problem explanation--> 120
  "dt-get-decade": `
### 💡 Problem Breakdown
The goal is to find the decade a given year belongs to. For example, any year from 1990 to 1999 belongs to the 1990s decade.

### ⚙️ Solution Walkthrough
This can be solved with simple integer arithmetic.
1.  **Get Year**: Get the full year from the date.
2.  **Calculate Decade**: Divide the year by 10, discard the remainder using \`Math.floor()\`, and then multiply by 10 again.
\`\`\`javascript
const year = 1995;
const decade = Math.floor(year / 10) * 10; // 199
\`\`\`

### 📚 Key Concepts
- **Integer Arithmetic**: Using division and flooring to categorize numbers.
`,

  // problem explanation--> 121
  "dt-get-century": `
### 💡 Problem Breakdown
The task is to calculate the century for a given year. The 20th century was 1901-2000, and the 21st century is 2001-2100.

### ⚙️ Solution Walkthrough
The logic involves division and rounding up.
1.  **Get Year**: Get the full year from the date.
2.  **Calculate Century**: Divide the year by 100 and take the ceiling of the result using \`Math.ceil()\`.
\`\`\`javascript
const year = 2024;
const century = Math.ceil(year / 100); // 21

const year2000 = 2000;
const century2000 = Math.ceil(year2000 / 100); // 20
\`\`\`
A common edge case is years like 1900 or 2000. \`Math.ceil()\` handles this correctly.

### 📚 Key Concepts
- **\`Math.ceil()\`**: The ceiling function is the key to correctly handling the boundary years of a century.
`,

  // problem explanation--> 122
  "dt-diff-in-seconds": `
### 💡 Problem Breakdown
The task is to calculate the total number of full seconds that have elapsed between two dates.

### ⚙️ Solution Walkthrough
This is another application of timestamp arithmetic.
1.  **Get Timestamps**: Get the millisecond timestamp for both dates using \`.getTime()\`.
2.  **Calculate Difference**: Find the absolute difference between the timestamps in milliseconds.
3.  **Convert to Seconds**: Divide the millisecond difference by 1000.
4.  **Floor**: Use \`Math.floor()\` to get the number of *full* seconds.

### 📚 Key Concepts
- **Timestamp Arithmetic**: The standard method for calculating precise durations.
`,

  // problem explanation--> 123
  "dt-format-custom-string": `
### 💡 Problem Breakdown
The goal is to format a \`Date\` object into a specific custom string format like \`MM/DD/YYYY, HH:mm\`. This requires manually extracting each component and padding it with leading zeros where necessary.

### ⚙️ Solution Walkthrough
1.  **Extract Components**: Use the getter methods (\`.getMonth()\`, \`.getDate()\`, etc.) to get each part of the date. Remember that \`.getMonth()\` is 0-indexed, so add 1.
2.  **Pad with Zeros**: Convert each component to a string. Use the \`.padStart(2, '0')\` string method to ensure that single-digit numbers (like month 7 or minute 5) are formatted with a leading zero.
3.  **Concatenate**: Combine the formatted components into the final string using a template literal.

### 📚 Key Concepts
- **String Padding**: \`.padStart()\` is a modern and clean way to format numbers with leading zeros.
- **Date Component Extraction**: Using the various getter methods of the \`Date\` object.
`,

  // problem explanation--> 124
  "dt-get-olympic-years": `
### 💡 Problem Breakdown
The Summer Olympic Games are held every 4 years (2020, 2024, 2028, etc.). The task is to write a function that, given a starting year, finds the next 5 Summer Olympic years.

### ⚙️ Solution Walkthrough
1.  **Find First Year**: Take the input \`startYear\`. Use a \`while\` loop to increment it until you find the first year that is a valid Olympic year (i.e., \`year % 4 === 0\`).
2.  **Generate Sequence**: Use a \`for\` loop that runs 5 times.
3.  In each iteration, add the current Olympic year to a results array and then add 4 to it to find the next one.
4.  Return the results array.

### 📚 Key Concepts
- **Sequence Generation**: Using a loop to generate a mathematical sequence.
`,

  // problem explanation--> 125
  "dt-get-last-weekday-occurrence": `
### 💡 Problem Breakdown
The task is to find the date of the *last* occurrence of a specific weekday within a given month and year (e.g., the last Friday of July 2024).

### ⚙️ Solution Walkthrough
An efficient way to do this is to start from the last day of the month and work backwards.
1.  **Find Last Day**: Create a \`Date\` object for the last day of the month. A trick for this is to get the "0th" day of the *next* month: \`new Date(year, month + 1, 0)\`.
2.  **Find Day of Week**: Get the day of the week for this last day.
3.  **Calculate Difference**: Calculate the difference between the last day's weekday and the target weekday.
4.  **Subtract**: Subtract this difference from the date of the last day to find the correct date. Handle the modulo arithmetic carefully to ensure you don't go too far back.

### 📚 Key Concepts
- **Date Arithmetic**: Using the "0th day" trick to find the end of a month.
- **Modulo Arithmetic**: Used to correctly calculate the difference in weekdays.
`,

  // problem explanation--> 126
  "dt-get-days-left-in-year": `
### 💡 Problem Breakdown
The task is to calculate the number of days remaining in the year from a given date.

### ⚙️ Solution Walkthrough
The solution involves finding the difference between the given date and the last day of that year.
1.  **Create End Date**: Create a \`Date\` object for December 31st of the same year as the given date.
2.  **Get Timestamps**: Get the millisecond timestamps for both the given date and the end-of-year date using \`.getTime()\`.
3.  **Calculate Difference**: Find the difference between the two timestamps in milliseconds.
4.  **Convert to Days**: Divide the millisecond difference by the number of milliseconds in one day (1000 * 60 * 60 * 24) and use \`Math.floor()\` to get the number of full days.

### 📚 Key Concepts
- **Timestamp Arithmetic**: A reliable way to calculate precise durations.
- **Date Construction**: Creating a specific date object for the end of the year.
`,

  // problem explanation--> 127
  "dt-get-days-passed-in-year": `
### 💡 Problem Breakdown
The task is to find which day of the year a given date is (e.g., February 1st is the 32nd day).

### ⚙️ Solution Walkthrough
1.  **Create Start Date**: Create a \`Date\` object for January 1st of the same year.
2.  **Get Timestamps**: Get the timestamps for both the given date and the start-of-year date.
3.  **Calculate Difference**: Find the difference in milliseconds.
4.  **Convert and Adjust**: Divide by the number of milliseconds in a day and add 1 (because January 1st is day 1, not day 0).

\`\`\`javascript
function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
\`\`\`

### 📚 Key Concepts
- **Timestamp Arithmetic**: The core of the calculation.
`,

  // problem explanation--> 128
  "dt-is-first-quarter": `
### 💡 Problem Breakdown
The goal is to check if a date falls within the first quarter of the year (January, February, March).

### ⚙️ Solution Walkthrough
1.  **Get Month**: Use \`.getMonth()\` to get the month of the date (0-11).
2.  **Check Range**: The first quarter consists of months 0, 1, and 2. Check if the month is less than or equal to 2.
\`\`\`javascript
function isFirstQuarter(date) {
  return date.getMonth() <= 2;
}
\`\`\`

### 📚 Key Concepts
- **\`.getMonth()\`**: The standard method for getting the month.
`,

  // problem explanation--> 129
  "dt-is-last-quarter": `
### 💡 Problem Breakdown
The task is to check if a date falls within the last quarter of the year (October, November, December).

### ⚙️ Solution Walkthrough
1.  **Get Month**: Use \`.getMonth()\` to get the month (0-11).
2.  **Check Range**: The last quarter consists of months 9, 10, and 11. Check if the month is greater than or equal to 9.
\`\`\`javascript
function isLastQuarter(date) {
  return date.getMonth() >= 9;
}
\`\`\`

### 📚 Key Concepts
- **\`.getMonth()\`**: The standard method for getting the month.
`,

  // problem explanation--> 130
  "dt-is-date-before": `
### 💡 Problem Breakdown
The goal is to determine if one date occurs chronologically before another.

### ⚙️ Solution Walkthrough
\`Date\` objects can be compared directly using relational operators. JavaScript will implicitly call the \`.valueOf()\` method (which is equivalent to \`.getTime()\`) on the objects, comparing their numeric timestamps.
\`\`\`javascript
function isBefore(date1, date2) {
  return date1 < date2;
}
\`\`\`

### 📚 Key Concepts
- **Date Comparison**: Direct comparison of \`Date\` objects works by comparing their internal timestamps.
`,

  // problem explanation--> 131
  "dt-is-date-after": `
### 💡 Problem Breakdown
The goal is to determine if one date occurs chronologically after another.

### ⚙️ Solution Walkthrough
Similar to checking if a date is before, you can use the \`>\` operator for a direct comparison of the dates' timestamps.
\`\`\`javascript
function isAfter(date1, date2) {
  return date1 > date2;
}
\`\`\`

### 📚 Key Concepts
- **Date Comparison**: Relational operators trigger a comparison of the numeric timestamps.
`,

  // problem explanation--> 132
  "dt-get-closest-date": `
### 💡 Problem Breakdown
Given a target date and an array of other dates, the task is to find which date in the array is closest in time to the target date.

### ⚙️ Solution Walkthrough
The solution involves calculating the time difference between the target and each date in the array and finding the minimum difference.
1.  **Get Target Timestamp**: Get the timestamp of the target date.
2.  **Reduce**: Use the \`.reduce()\` array method to find the closest date.
3.  The reducer's callback compares the absolute time difference of the \`previous\` closest date with the \`current\` date from the array. It returns whichever date has the smaller difference.

### 📚 Key Concepts
- **Timestamp Arithmetic**: Used to calculate the absolute difference in time.
- **\`Array.prototype.reduce()\`**: A powerful tool for iterating through an array to find a single resulting value (like the minimum or maximum).
`,

  // problem explanation--> 133
  "dt-date-from-julian-day": `
### 💡 Problem Breakdown
This is an advanced problem involving calendrical calculations. The Julian Day Number (JDN) is a continuous count of days since a remote epoch. The task is to convert a JDN back into a standard Gregorian date (year, month, day).

### ⚙️ Solution Walkthrough
This requires a standard, but complex, astronomical algorithm. It involves several steps of integer division and modulo arithmetic to extract the year, month, and day components from the single day count. This is almost always done using a well-tested library in production code.

### 📚 Key Concepts
- **Calendrical Algorithms**: The complex mathematical formulas used to convert between different calendar systems.
`,

  // problem explanation--> 134
  "dt-date-to-julian-day": `
### 💡 Problem Breakdown
This is the reverse of the previous problem: converting a Gregorian date into its corresponding Julian Day Number.

### ⚙️ Solution Walkthrough
This also requires a standard astronomical algorithm. The formula involves the year, month, and day, and a series of calculations to arrive at the continuous day count. Like the conversion from JDN, this is best handled by a specialized library.
\`\`\`javascript
// Simplified formula
JDN = (1461 * (Y + 4800 + (M - 14)/12))/4 + (367 * (M - 2 - 12 * ((M - 14)/12)))/12 - (3 * ((Y + 4900 + (M - 14)/12)/100))/4 + D - 32075
\`\`\`

### 📚 Key Concepts
- **Calendrical Algorithms**: A specialized area of mathematics and computer science.
`,

  // problem explanation--> 135
  "dt-get-age-in-days": `
### 💡 Problem Breakdown
The task is to calculate a person's age in total number of days.

### ⚙️ Solution Walkthrough
Timestamp arithmetic provides the most accurate way to do this.
1.  **Get Timestamps**: Get the timestamp for the birthdate and for the current date.
2.  **Calculate Difference**: Find the difference in milliseconds.
3.  **Convert to Days**: Divide the millisecond difference by the number of milliseconds in one day (1000 * 60 * 60 * 24).
4.  **Floor**: Use \`Math.floor()\` to get the number of full days that have passed.

### 📚 Key Concepts
- **Timestamp Arithmetic**: The standard method for calculating precise durations.
`,

  // problem explanation--> 136
  "dt-get-next-business-day": `
### 💡 Problem Breakdown
The task is to find the next business day (Monday-Friday) after a given date.

### ⚙️ Solution Walkthrough
1.  **Add a Day**: Start by adding one day to the given date.
2.  **Check Day of Week**: Get the day of the week for this new date using \`.getDay()\`.
3.  **Adjust for Weekend**:
    - If the new day is a Saturday (day 6), add two more days to get to Monday.
    - If the new day is a Sunday (day 0), add one more day to get to Monday.
4.  The resulting date is the next business day.

### 📚 Key Concepts
- **Date Arithmetic**: Using \`.setDate()\` and \`.getDate()\` to manipulate the date.
- **Conditional Logic**: Checking the day of the week to handle weekend adjustments.
`,

  // problem explanation--> 137
  "dt-get-previous-business-day": `
### 💡 Problem Breakdown
The task is to find the previous business day before a given date.

### ⚙️ Solution Walkthrough
The logic is symmetrical to finding the next business day.
1.  **Subtract a Day**: Start by subtracting one day from the given date.
2.  **Check Day of Week**: Get the day of the week for this new date.
3.  **Adjust for Weekend**:
    - If the new day is a Sunday (day 0), subtract two more days to get to Friday.
    - If the new day is a Saturday (day 6), subtract one more day to get to Friday.
4.  The resulting date is the previous business day.

### 📚 Key Concepts
- **Date Arithmetic**: Manipulating the date object.
- **Conditional Logic**: Handling the weekend cases.
`,

  // problem explanation--> 138
  "dt-format-milliseconds-to-hms": `
### 💡 Problem Breakdown
The goal is to convert a total number of milliseconds into a human-readable time format like "hh:mm:ss.ms".

### ⚙️ Solution Walkthrough
The solution involves calculating each time component using division and the modulo operator.
1.  **Calculate Total Seconds**: First, divide the milliseconds by 1000 to get the total number of seconds.
2.  **Calculate Hours**: The number of hours is \`floor(totalSeconds / 3600)\`.
3.  **Calculate Minutes**: The number of minutes is \`floor((totalSeconds % 3600) / 60)\`.
4.  **Calculate Seconds**: The remaining seconds is \`totalSeconds % 60\`.
5.  **Get Milliseconds**: The remaining milliseconds is \`ms % 1000\`.
6.  **Format**: Convert each component to a string and use \`.padStart()\` to ensure proper zero-padding, then join them with colons.

### 📚 Key Concepts
- **Integer Arithmetic**: Using division and modulo to extract time components from a total duration.
- **String Padding**: \`.padStart()\` is used for formatting the final string correctly.
`,

  // problem explanation--> 139
  "dt-get-first-day-of-month": `
### 💡 Problem Breakdown
The task is to find out which day of the week (Sunday=0, etc.) a specific month and year started on.

### ⚙️ Solution Walkthrough
1.  **Create Date**: Create a new \`Date\` object for the first day of the given month and year.
2.  **Get Day**: Call the \`.getDay()\` method on this new date object.
\`\`\`javascript
function getFirstDayOfMonth(year, month) {
  // 'month' is 0-indexed. 'day' is 1-indexed.
  const d = new Date(year, month, 1);
  return d.getDay();
}
\`\`\`

### 📚 Key Concepts
- **Date Construction**: A direct application of the \`Date\` constructor.
`,

  // problem explanation--> 140
  "dt-get-last-day-of-month": `
### 💡 Problem Breakdown
The task is to find out which day of the week a specific month and year ended on.

### ⚙️ Solution Walkthrough
A clever trick is used to find the last day of a month.
1.  **Create Date**: Create a \`Date\` object for the "0th" day of the *next* month. JavaScript correctly interprets this as the last day of the *previous* month.
2.  **Get Day**: Call the \`.getDay()\` method on this date.
\`\`\`javascript
function getLastDayOfMonth(year, month) {
  // month + 1 is the next month. Day 0 is the last day of the previous month.
  const d = new Date(year, month + 1, 0);
  return d.getDay();
}
\`\`\`

### 📚 Key Concepts
- **Date Arithmetic**: The "0th day" trick is a useful pattern for date calculations.
`,

  // problem explanation--> 141
  "dt-is-date-in-dst": `
  ### 💡 Problem Breakdown
  This is a complex problem because Daylight Saving Time (DST) rules vary. The task is to determine if a specific date falls within DST for the user's local timezone.

  ### ⚙️ Solution Walkthrough
  The solution compares the given date's timezone offset with the "standard" timezone offset for that location.
  1.  **Get Standard Offset**: The standard offset is the one used outside of DST. We can find it by getting the offsets for a date in January and a date in July of the same year and taking the *larger* of the two (since DST "springs forward," the offset in minutes from UTC decreases).
  2.  **Get Date's Offset**: Get the timezone offset for the specific date you are checking.
  3.  **Compare**: The date is in DST if its offset is *less than* the standard offset.

  ### 📚 Key Concepts
  - **\`.getTimezoneOffset()\`**: The core method used to detect DST.
  `,
  // problem explanation--> 142
  "dt-format-time-with-timezone": `
  ### 💡 Problem Breakdown
  The \`Intl.DateTimeFormat\` object provides powerful options for formatting dates, including displaying the timezone name.

  ### ⚙️ Solution Walkthrough
  The \`timeZoneName\` option is used in the options object passed to the formatter.
  \`\`\`javascript
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'long' // 'short', 'longOffset', etc. are also options
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  formatter.format(new Date());
  // e.g., "3:00 PM Pacific Daylight Time"
  \`\`\`
  ### 📚 Key Concepts
  - **\`Intl.DateTimeFormat\`**: The standard API for locale-sensitive date and time formatting.
  `,
  // problem explanation--> 143
  "dt-parse-date-with-timezone": `
  ### 💡 Problem Breakdown
  The \`new Date()\` constructor is capable of parsing date strings that follow the ISO 8601 standard, including those with timezone offsets like \`-04:00\` or the UTC indicator \`Z\`.

  ### ⚙️ Solution Walkthrough
  A valid ISO 8601 string is passed to the constructor.
  \`\`\`javascript
  const dateStr = "2024-07-26T12:00:00-04:00";
  const d = new Date(dateStr);
  // The Date object will represent this specific moment in time.
  // Its methods like .toUTCString() or .getTime() will be accurate.
  \`\`\`
  The JavaScript engine correctly interprets the offset and creates a Date object whose internal timestamp (milliseconds from UTC epoch) is correct.

  ### 📚 Key Concepts
  - **ISO 8601**: The international standard format for representing dates and times. It is the most reliable format for date string parsing.
  // `,
  // problem explanation--> 144
  "dt-get-date-without-time": `
  ### 💡 Problem Breakdown
  The task is to take a \`Date\` object and effectively "strip" the time component, creating a new \`Date\` object that represents the start of that day (midnight).

  ### ⚙️ Solution Walkthrough
  The most direct way is to create a new \`Date\` object using the year, month, and day components of the original.
  \`\`\`javascript
  function stripTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  \`\`\`
  Another common way is to use \`setHours(0, 0, 0, 0)\` on a clone of the date.

  ### 📚 Key Concepts
  - **Date Construction**: Creating a new date object from the components of an existing one.
  `,
  // problem explanation--> 145
  "dt-min-and-max-date": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about the limits of the JavaScript \`Date\` object. It can represent a very wide range of dates.

  ### ⚙️ Solution Walkthrough
  According to the ECMAScript specification, the \`Date\` object can represent any millisecond within **100,000,000 days** before or after January 1, 1970 UTC.
  - **Maximum Date**: \`new Date(8640000000000000)\` which is approximately the year 275,760.
  - **Minimum Date**: \`new Date(-8640000000000000)\` which is approximately the year -271,821.

  ### 📚 Key Concepts
  - **Data Type Limits**: Understanding the representable range of a data type.
  `,
  // problem explanation--> 146
  "dt-get-buddhist-year": `
  ### 💡 Problem Breakdown
  The Buddhist calendar used in Thailand is 543 years ahead of the Gregorian calendar. The task is to perform this simple conversion.

  ### ⚙️ Solution Walkthrough
  1.  Get the Gregorian year.
  2.  Add 543.
  \`\`\`javascript
  function toBuddhistYear(gregorianYear) {
    return gregorianYear + 543;
  }
  \`\`\`
  ### 📚 Key Concepts
  - **Calendar Systems**: A simple example of the differences between world calendar systems.
  `,
  // problem explanation--> 147
  "dt-is-date-equal": `
  ### 💡 Problem Breakdown
  The goal is to check if two \`Date\` objects represent the exact same moment in time. Using \`===\` will not work, as it compares object references.

  ### ⚙️ Solution Walkthrough
  The correct way is to compare their numeric timestamps.
  \`\`\`javascript
  function areDatesEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
  }
  \`\`\`
  The \`.getTime()\` method returns the number of milliseconds since the Unix epoch, providing a unique numerical representation for any moment in time.

  ### 📚 Key Concepts
  - **Object Comparison**: Objects are compared by reference, so you must compare their underlying values for equality.
  - **Timestamp**: A unique numeric representation of a date.
  `,
  // problem explanation--> 148
  "dt-get-time-in-different-timezone": `
  ### 💡 Problem Breakdown
  The \`Intl.DateTimeFormat\` object (and the related \`.toLocaleString()\` methods) can format a date for any specified IANA timezone.

  ### ⚙️ Solution Walkthrough
  The \`timeZone\` option is used.
  \`\`\`javascript
  function getTimeInZone(timezone) {
    try {
      return new Date().toLocaleTimeString('en-US', {
        timeZone: timezone
      });
    } catch (e) {
      return "Invalid timezone";
    }
  }
  getTimeInZone('Asia/Tokyo');
  \`\`\`
  The browser uses its internationalization data to correctly calculate and display the time in the requested zone.

  ### 📚 Key Concepts
  - **IANA Timezone Database**: A standardized database of timezone names used in computing.
  - **Internationalization API**: The standard way to handle timezone conversions and formatting.
  `,
  // problem explanation--> 149
  "dt-get-week-number-us": `
  ### 💡 Problem Breakdown
  This is a calendrical calculation problem. The US week number is calculated based on weeks starting on Sunday.

  ### ⚙️ Solution Walkthrough
  1.  **Find Day of Year**: Calculate which day of the year the given date is (1-366).
  2.  **Find Day of Week of Jan 1st**: Find the day of the week for January 1st of that year.
  3.  **Calculate**: The week number can be calculated with \`Math.ceil((dayOfYear + dayOfWeekOfJan1st) / 7)\`.

  ### 📚 Key Concepts
  - **Calendrical Algorithms**: The logic required to calculate specific calendar properties.
  `,
  // problem explanation--> 150
  "dt-diff-in-working-hours": `
  ### 💡 Problem Breakdown
  This is an advanced problem that combines date difference calculation with business logic. The task is to find the total number of hours between two datetimes, but only counting hours that fall within a "working" period (e.g., 9 AM - 5 PM on weekdays).

  ### ⚙️ Solution Walkthrough
  A robust solution requires iterating through the time period.
  1.  **Iterate Day by Day**: Loop from the start date to the end date, one day at a time.
  2.  **Full Days**: For each full day in between, if it's a weekday, add the total number of working hours (e.g., 8).
  3.  **Partial Start Day**: For the starting date, calculate the number of working hours from its time until the end of the workday (5 PM).
  4.  **Partial End Day**: For the ending date, calculate the number of working hours from the start of the workday (9 AM) until its time.
  5.  Sum up all the hours.

  ### 📚 Key Concepts
  - **Complex Date Logic**: Requires careful handling of full days, partial days, and weekends.
  `,
  // problem explanation--> 151
  "dt-parse-rfc1123": `
  ### 💡 Problem Breakdown
  RFC 1123 is a standard format for representing dates and times, commonly used in internet protocols like HTTP headers (e.g., in the \`Date\` header). The task is to parse a string in this format into a JavaScript \`Date\` object.

  ### ⚙️ Solution Walkthrough
  The JavaScript \`Date\` constructor is powerful and can parse this format directly.
  \`\`\`javascript
  const rfcString = "Sat, 27 Jul 2024 12:00:00 GMT";
  const date = new Date(rfcString);
  // The 'date' object will correctly represent this moment in time.
  \`\`\`
  The key is that the string is well-formatted according to a standard that JavaScript engines recognize. This is much more reliable than trying to parse ambiguous formats like "MM/DD/YYYY".

  ### 📚 Key Concepts
  - **Date String Parsing**: The ability of the \`Date\` constructor to interpret standardized date formats.
  - **RFC 1123**: A specific, well-defined date-time format.
  `,
  // problem explanation--> 152
  "dt-set-utc-hours": `
  ### 💡 Problem Breakdown
  The task is to set the time components (hours, minutes, seconds, milliseconds) of a \`Date\` object based on Coordinated Universal Time (UTC), not the user's local timezone.

  ### ⚙️ Solution Walkthrough
  The \`.setUTCHours()\` method is used for this. It modifies the date object in place.
  \`\`\`javascript
  const d = new Date();
  // Set the time to 12:30:00.000 UTC
  d.setUTCHours(12, 30, 0, 0);
  \`\`\`
  This is the UTC equivalent of the \`.setHours()\` method. Using UTC methods is crucial when you need to perform calculations or store dates that are independent of the user's local timezone.

  ### 📚 Key Concepts
  - **UTC vs. Local Time**: A fundamental distinction in date handling. UTC is a global time standard.
  - **\`.setUTCHours()\`**: A method for setting the time of a \`Date\` object based on the UTC timezone.
  `,
  // problem explanation--> 153
  "dt-find-next-full-moon": `
  ### 💡 Problem Breakdown
  This is an astronomical calculation problem. The time between one full moon and the next is called a synodic month, which is approximately 29.53 days. The task is to approximate the date of the next full moon.

  ### ⚙️ Solution Walkthrough
  A simple approximation can be done using a known past full moon as a reference point (an "epoch").
  1.  **Known Full Moon**: Start with a known date and time of a past full moon (e.g., January 25, 2024, 17:54 UTC).
  2.  **Synodic Period**: Define the length of a synodic month in milliseconds.
  3.  **Find Cycles**: Calculate how many full synodic cycles have passed between the known epoch and the current date.
  4.  **Calculate Next**: Use this to calculate the date of the last full moon, and then add one synodic period to find the date of the next one.

  ### 📚 Key Concepts
  - **Astronomical Cycles**: The solution is based on the predictable cycle of the moon's phases.
  - **Epoch**: A fixed point in time used as a reference for calculations.
  `,
  // problem explanation--> 154
  "dt-get-islamic-year": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about converting between calendar systems. The Islamic (Hijri) calendar is a purely lunar calendar, meaning its year is about 11 days shorter than the Gregorian solar year. This causes it to drift relative to the Gregorian calendar.

  ### ⚙️ Solution Walkthrough
  A very rough approximation can be calculated with a simple formula.
  1.  **Epoch Difference**: The Islamic calendar starts in 622 AD. So, the number of Gregorian years passed is \`GregorianYear - 622\`.
  2.  **Year Length Ratio**: The ratio of a Gregorian year to an Islamic year is approximately 1.0307.
  3.  **Formula**: \`IslamicYear ≈ (GregorianYear - 622) * 1.0307 + 1\`
  This is only a rough estimate. Accurate conversion requires a specialized library that handles the complex rules of the Islamic calendar.

  ### 📚 Key Concepts
  - **Lunar vs. Solar Calendars**: A key difference between calendar systems.
  - **Calendar Conversion**: A complex topic requiring specialized knowledge and tools for accuracy.
  `,
  // problem explanation--> 155
  "dt-is-date-between-exclusive": `
  ### 💡 Problem Breakdown
  The task is to check if a date falls within a range, but *excluding* the start and end dates of the range.

  ### ⚙️ Solution Walkthrough
  The solution uses the strict less than (\`<\`) and greater than (\`>\`) operators for comparison. JavaScript will compare the dates by their internal timestamp values.
  \`\`\`javascript
  function isBetween(date, start, end) {
    return date > start && date < end;
  }
  \`\`\`
  ### 📚 Key Concepts
  - **Date Comparison**: Relational operators trigger a comparison of the numeric timestamps.
  - **Inclusive vs. Exclusive Ranges**: A common detail in range-based logic.
  `,
  // problem explanation--> 156
  "dt-get-next-leap-year": `
  ### 💡 Problem Breakdown
  The task is to find the first leap year that occurs after a given date.

  ### ⚙️ Solution Walkthrough
  1.  **Get Start Year**: Get the year from the given date and add 1 to it.
  2.  **Loop**: Use a \`while\` loop that continues indefinitely (\`while (true)\`).
  3.  **Check**: In each iteration, check if the current \`year\` is a leap year using the standard formula: \`(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0\`.
  4.  **Return**: If it is a leap year, return it.
  5.  **Increment**: If not, increment the \`year\` and continue the loop.

  ### 📚 Key Concepts
  - **Leap Year Rules**: The core logic of the problem.
  - **Iterative Search**: The solution systematically searches forward in time until the condition is met.
  `,
  // problem explanation--> 157
  "dt-get-previous-leap-year": `
  ### 💡 Problem Breakdown
  The task is to find the most recent leap year that occurred before a given date.

  ### ⚙️ Solution Walkthrough
  The logic is symmetrical to finding the next leap year.
  1.  **Get Start Year**: Get the year from the given date and subtract 1.
  2.  **Loop**: Use a \`while\` loop.
  3.  **Check**: In each iteration, check if the current \`year\` is a leap year.
  4.  **Return**: If it is, return it.
  5.  **Decrement**: If not, decrement the \`year\` and continue looping backwards.

  ### 📚 Key Concepts
  - **Leap Year Rules**: The core logic of the problem.
  - **Iterative Search**: The solution systematically searches backward in time.
  `,
  // problem explanation--> 158
  "dt-get-time-until-new-year": `
  ### 💡 Problem Breakdown
  The goal is to calculate the remaining time until the next New Year's Day (January 1st).

  ### ⚙️ Solution Walkthrough
  1.  **Get Current Date**: Get the current date and time.
  2.  **Create New Year's Date**: Create a \`Date\` object for January 1st of the *next* year.
  3.  **Calculate Difference**: Get the timestamps for both dates and subtract the current timestamp from the New Year's timestamp to get the difference in milliseconds.
  4.  **Format**: Convert this millisecond difference into a human-readable format (e.g., days, hours, minutes).

  ### 📚 Key Concepts
  - **Timestamp Arithmetic**: Used to calculate the precise duration between two moments.
  `,
  // problem explanation--> 159
  "dt-get-day-of-week-for-any-date": `
### 💡 Problem Breakdown
The task is to calculate the day of the week (e.g., Monday, Tuesday) for any given Gregorian calendar date, but without relying on the built-in Date object's .getDay() method. This requires implementing a known calendrical algorithm that can mathematically derive the day of the week from the year, month, and day.
### ⚙️ Solution Walkthrough
The most famous algorithm for this is Zeller's congruence. It's a compact formula that takes the date components and returns a number from 0 to 6 corresponding to the day of the week.
The formula is:
h = (q + floor((13 * (m + 1)) / 5) + K + floor(K / 4) + floor(J / 4) - 2 * J) mod 7
Where:
h is the day of the week (0 = Saturday, 1 = Sunday, ..., 6 = Friday).
q is the day of the month.
m is the month (3 = March, ..., 12 = December). Crucially, January and February are counted as months 13 and 14 of the previous year.
Y is the year. If the month is January or February, you must use year - 1.
J is the century: floor(Y / 100).
K is the year of the century: Y mod 100.
Let's take July 4, 1776 as an example:
q = 4
m = 7 (July is the 7th month, no adjustment needed)
Y = 1776
J = floor(1776 / 100) = 17
K = 1776 % 100 = 76
Plugging into the formula:
h = (4 + floor((13 * (7+1)) / 5) + 76 + floor(76/4) + floor(17/4) - 2 * 17) mod 7
h = (4 + floor(104 / 5) + 76 + 19 + 4 - 34) mod 7
h = (4 + 20 + 76 + 19 + 4 - 34) mod 7
h = 89 mod 7
h = 5
Since Saturday is 0, a result of 5 corresponds to Thursday.
The implementation requires careful handling of the month and year adjustments for January and February before applying the formula.
### 📚 Key Concepts
Zeller's Congruence: A specific, well-known algorithm for calculating the day of the week from a date.
Modulo Arithmetic: The core of all calendrical calculations, used to handle repeating cycles like the 7-day week.
Date Algorithms: The underlying mathematical logic that date libraries use, which involves complex day-counting and leap year rules implicitly handled by this formula.
Conceptual Implementation: Understanding the formula and the steps to apply it is the main goal, as implementing it perfectly requires careful attention to its specific rules and definitions.
`,
  // problem explanation--> 160
  "dt-get-first-business-day-of-month": `
  ### 💡 Problem Breakdown
  The task is to find the date of the first business day (Monday-Friday) of a given month and year.

  ### ⚙️ Solution Walkthrough
  1.  **Create Date for the 1st**: Create a \`Date\` object for the first day of the given month.
  2.  **Get Day of Week**: Use \`.getDay()\` to find out what day of the week the 1st is.
  3.  **Adjust for Weekend**:
      - If the 1st is a Saturday (day 6), the first business day is the 3rd.
      - If the 1st is a Sunday (day 0), the first business day is the 2nd.
      - Otherwise, the 1st is the first business day.
  4.  Return the adjusted date.

  ### 📚 Key Concepts
  - **Date Construction and Manipulation**: Creating a date and adjusting it based on conditional logic.
  `,
  // problem explanation--> 161
  "dt-get-last-business-day-of-month": `
  ### 💡 Problem Breakdown
  The task is to find the date of the last business day of a given month and year.

  ### ⚙️ Solution Walkthrough
  1.  **Create Date for Last Day**: Find the last day of the month by creating a date for the "0th" day of the *next* month.
  2.  **Get Day of Week**: Use \`.getDay()\` on this date to find out what day of the week the last day is.
  3.  **Adjust for Weekend**:
      - If the last day is a Saturday (day 6), subtract one day to get Friday.
      - If the last day is a Sunday (day 0), subtract two days to get Friday.
      - Otherwise, the last day is a business day.
  4.  Return the adjusted date.

  ### 📚 Key Concepts
  - **Date Arithmetic**: The "0th day" trick is useful for finding the end of a month.
  `,
  // problem explanation--> 162
  "dt-get-calendar-week": `
  ### 💡 Problem Breakdown
  The task is to take a single date and generate an array of 7 \`Date\` objects representing the entire week that contains that date (e.g., from the preceding Sunday to the following Saturday).

  ### ⚙️ Solution Walkthrough
  1.  **Find Start of Week**: First, determine the date of the start of the week.
      - Get the day of the week for the given date (0 for Sunday, 1 for Monday, etc.).
      - Subtract this day number from the date's day of the month. This will give you the date of the preceding Sunday.
  2.  **Create Start Date Object**: Create a new \`Date\` object for this start-of-the-week date.
  3.  **Loop and Collect**: Use a \`for\` loop that runs 7 times. In each iteration, create a new \`Date\` object for the start date plus the loop index (\`i\`) and add it to a result array.

  ### 📚 Key Concepts
  - **Date Arithmetic**: The core of the solution is calculating the start of the week.
  `,
  // problem explanation--> 163
  "dt-format-duration-in-words": `
  ### 💡 Problem Breakdown
  The goal is to convert a large duration in milliseconds into a more human-readable string that breaks it down into larger units like weeks, days, and hours.

  ### ⚙️ Solution Walkthrough
  The solution involves progressively dividing the total duration by the size of each time unit.
  1.  **Define Units**: Define the number of milliseconds in a second, minute, hour, day, and week.
  2.  **Calculate Weeks**: Divide the total milliseconds by the number of milliseconds in a week and take the floor. This is the number of full weeks.
  3.  **Calculate Remainder**: Use the modulo operator to find the remaining milliseconds after accounting for the weeks.
  4.  **Repeat**: Repeat this process for days, hours, and minutes on the remainder from the previous step.
  5.  **Build String**: Construct the final string from the calculated components.

  ### 📚 Key Concepts
  - **Integer Arithmetic**: Using division and modulo to extract time components from a total duration.
  `,
  // problem explanation--> 164
  "dt-get-number-of-weekends": `
  ### 💡 Problem Breakdown
  The task is to count the total number of weekend days (Saturdays and Sundays) within a specific month and year.

  ### ⚙️ Solution Walkthrough
  1.  **Initialize**: Set a \`weekendDays\` counter to 0. Create a \`Date\` object for the first day of the given month.
  2.  **Loop**: Use a \`while\` loop that continues as long as the date's month is still the target month.
  3.  **Check Day**: Inside the loop, use \`.getDay()\` to check if the current day is a Saturday (6) or a Sunday (0).
  4.  **Increment**: If it is a weekend day, increment the counter.
  5.  **Advance Date**: Move to the next day by using \`date.setDate(date.getDate() + 1)\`.
  6.  Return the final \`weekendDays\` count.

  ### 📚 Key Concepts
  - **Iterative Date Processing**: Looping through each day of a month.
  `,
  // problem explanation--> 165
  "dt-get-easter-date": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about a classic calendrical calculation. The date of Easter is complex to calculate as it depends on the spring equinox and the phase of the moon.

  ### ⚙️ Solution Walkthrough
  There is no simple formula. The solution requires implementing a known algorithm called a **Computus**. One of the most common is the anonymous Gregorian algorithm (often attributed to Meeus/Jones/Butcher). It involves a series of about a dozen integer arithmetic steps using the year to calculate intermediate variables, which are then combined to find the final month and day of Easter for that year.

  ### 📚 Key Concepts
  - **Computus**: The specific name for the algorithm to calculate the date of Easter.
  - **Calendrical Algorithms**: A specialized area of mathematics.
  `,
  // problem explanation--> 166
  "dt-to-json-method": `
  ### 💡 Problem Breakdown
  This problem explores a specific method on the \`Date\` object's prototype. When you call \`JSON.stringify(dateObject)\`, it doesn't just store the internal timestamp. Instead, it first looks for a \`.toJSON()\` method on the object. The \`Date\` object has one, and this method is what gets called.

  ### ⚙️ Solution Walkthrough
  The \`Date.prototype.toJSON()\` method returns a string representation of the date in the ISO 8601 format (the same format returned by \`.toISOString()\`).
  \`\`\`javascript
  const d = new Date();
  JSON.stringify(d); // e.g., ""2024-07-26T10:00:00.000Z""
  d.toJSON();        // e.g., "2024-07-26T10:00:00.000Z"
  d.toISOString();   // e.g., "2024-07-26T10:00:00.000Z"
  \`\`\`
  This ensures that when a \`Date\` object is serialized to JSON, it's stored in a standard, unambiguous format.

  ### 📚 Key Concepts
  - **\`.toJSON()\`**: A special method that allows an object to customize its own JSON serialization.
  `,
  // problem explanation--> 167
  "dt-get-hebrew-year-conceptual": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about the Hebrew calendar. It is a **lunisolar** calendar, which is much more complex than the Gregorian (solar) or Islamic (lunar) calendars.

  ### ⚙️ Solution Walkthrough
  Accurate conversion requires a specialized library because:
  - **Lunisolar**: It tracks both the moon's phases for months and the solar year for seasons.
  - **Leap Months**: To keep aligned with the solar year, it adds an entire extra month (a "leap month") 7 times in a 19-year cycle.
  - **Complex Rules**: The rules for determining the length of years and the first day of the year are complex.
  A simple mathematical formula is not sufficient for accurate conversion.

  ### 📚 Key Concepts
  - **Lunisolar Calendar**: A calendar that combines lunar and solar cycles.
  `,
  // problem explanation--> 168
  "dt-get-chinese-zodiac": `
  ### 💡 Problem Breakdown
  The Chinese Zodiac is based on a 12-year cycle, with each year associated with an animal. The task is to find the animal for a given Gregorian year.

  ### ⚙️ Solution Walkthrough
  The solution uses modulo arithmetic. We need an anchor point. The year 1984, for example, was the year of the Rat. The cycle starts with the Rat.
  1.  **Define Cycle**: Create an array of the 12 animal names in their correct order.
  2.  **Calculate Offset**: The calculation is based on the remainder when the year is divided by 12. We need to adjust for the starting point of the cycle. A common epoch is 1924 (or any other Year of the Rat). The formula is \`(year - 1924) % 12\`.
  3.  **Find Animal**: Use the result of the modulo operation as the index to get the animal from the array.

  ### 📚 Key Concepts
  - **Modulo Arithmetic**: The core of solving problems based on repeating cycles.
  `,
  // problem explanation--> 169
  "dt-parse-date-from-text": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about Natural Language Processing (NLP). Parsing dates from unstructured text like "tomorrow at 5pm" or "next Tuesday" is a very complex task.

  ### ⚙️ Solution Walkthrough
  A simple solution can only handle a few cases with regular expressions. A robust solution requires an NLP library.
  - **Simple Approach**: Use regular expressions to find specific patterns like \`/\d{1,2}\/\d{1,2}\/\d{4}/\` or \`/tomorrow/i\`. This is very brittle.
  - **Advanced Approach**: Use a dedicated NLP library (like \`chrono-node\` in JavaScript). These libraries have sophisticated models that can:
    - Understand relative terms ("next", "last", "ago").
    - Infer context (if it's morning, "at 5" likely means 5 PM).
    - Handle ambiguous formats.

  ### 📚 Key Concepts
  - **Natural Language Processing (NLP)**: A field of AI focused on enabling computers to understand human language.
  `,
  // problem explanation--> 170
  "dt-format-with-time-ago-library": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about the benefits of using a date utility library. While you can write a simple "time ago" function, a library like \`date-fns\` or \`day.js\` provides a much more robust and feature-complete solution.

  ### ⚙️ Solution Walkthrough
  Benefits of using a library:
  - **Localization**: They can produce output in many different languages (e.g., "vor 5 Minuten", "il y a 5 minutes").
  - **Accuracy**: They handle all edge cases correctly (e.g., leap years, month lengths).
  - **Customization**: They provide options for controlling the level of detail (e.g., "about a minute" vs. "1 minute").
  - **Maintenance**: The library is maintained by the community, so you don't have to worry about updating the logic yourself.

  ### 📚 Key Concepts
  - **Code Reusability**: Leveraging the work of others by using well-maintained libraries.
  `,
  // problem explanation--> 171
  "dt-performance-date-vs-now": `
  ### 💡 Problem Breakdown
  This problem compares the performance of two ways to get the current timestamp.
  - **\`new Date().getTime()\`**: This creates a full \`Date\` object in memory, with all its methods and properties, and then retrieves the timestamp from it.
  - **\`Date.now()\`**: This is a static method that directly returns the current timestamp as a number, without creating an unnecessary \`Date\` object.

  ### ⚙️ Solution Walkthrough
  Because \`Date.now()\` avoids the overhead of object creation, it is significantly faster.
  The benchmark function runs each operation many times in a loop and measures the total elapsed time using \`performance.now()\` to show the difference. For performance-critical code where you only need the timestamp, \`Date.now()\` is always the better choice.

  ### 📚 Key Concepts
  - **Performance Optimization**: Choosing the more efficient method for a task.
  - **Object Creation Overhead**: Creating objects takes more time and memory than simple function calls that return a primitive.
  `,
  // problem explanation--> 172
  "dt-get-previous-nth-day": `
  ### 💡 Problem Breakdown
  The task is to find the date that was N days before the current date.

  ### ⚙️ Solution Walkthrough
  The solution uses the \`setDate()\` and \`getDate()\` methods. The \`setDate()\` method correctly handles rolling over to previous months and years.
  \`\`\`javascript
  function getNthDayAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d;
  }
  \`\`\`
  1.  **Get Today**: Create a \`Date\` object for the current date.
  2.  **Subtract Days**: Get the current day of the month using \`.getDate()\`, subtract \`n\` from it, and set this new value using \`.setDate()\`. The \`Date\` object will automatically adjust the month and year if necessary.

  ### 📚 Key Concepts
  - **Date Arithmetic**: The \`setDate\` method is robust and handles boundary conditions (like the beginning of a month) correctly.
  `,
  // problem explanation--> 173
  "dt-get-next-nth-day": `
  ### 💡 Problem Breakdown
  The task is to find the date that is N days in the future from the current date.

  ### ⚙️ Solution Walkthrough
  This is the counterpart to the previous problem. The \`setDate()\` method is used to add days.
  \`\`\`javascript
  function getNthDayFromNow(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d;
  }
  \`\`\`
  The \`Date\` object's internal logic will correctly handle rolling over to the next month or year.

  ### 📚 Key Concepts
  - **Date Arithmetic**: \`setDate\` correctly handles rollovers.
  `,
  // problem explanation--> 174
  "dt-create-calendar-month-grid": `
  ### 💡 Problem Breakdown
  This is a complex problem that involves generating a 2D array (an array of arrays) representing a calendar month view. This grid usually has 5 or 6 rows (weeks) and 7 columns (days), and it includes trailing days from the previous month and leading days from the next month to fill out the grid.

  ### ⚙️ Solution Walkthrough
  1.  **Find Start Day**: Determine the day of the week for the 1st of the given month.
  2.  **Find Calendar Start Date**: Use this information to find the date of the Sunday (or Monday, depending on convention) that starts the first week of the calendar view. This may be a date in the previous month.
  3.  **Loop and Build**: Create a loop that runs for the number of weeks needed (usually 5 or 6).
      - In each iteration, create a \`week\` array.
      - Use a nested loop that runs 7 times. In each iteration of the inner loop, add the current date to the \`week\` array and then advance the date by one day.
      - Add the completed \`week\` array to the main grid.
  4.  Return the final grid.

  ### 📚 Key Concepts
  - **Calendrical Algorithms**: The core of the solution is the logic to correctly calculate the starting date of the calendar grid.
  - **2D Array Manipulation**: The solution involves building a nested array structure.
  `,
  // problem explanation--> 175
  "dt-get-financial-quarter": `
  ### 💡 Problem Breakdown
  This problem is similar to finding the standard calendar quarter, but the definition of the quarters is different. The task is to return the financial quarter (Q1, Q2, Q3, Q4) for a given date.

  ### ⚙️ Solution Walkthrough
  1.  **Get Month**: Get the month of the date using \`.getMonth()\` (0-11).
  2.  **Conditional Logic**: Use an \`if/else if/else\` block or a \`switch\` statement to map the month to its correct quarter.
  \`\`\`javascript
  function getFinancialQuarter(date) {
    const month = date.getMonth();
    if (month <= 2) return 'Q1'; // Jan, Feb, Mar
    if (month <= 5) return 'Q2'; // Apr, May, Jun
    if (month <= 8) return 'Q3'; // Jul, Aug, Sep
    return 'Q4'; // Oct, Nov, Dec
  }
  \`\`\`
  ### 📚 Key Concepts
  - **Mapping**: The solution maps a range of input values (months) to a specific output value (the quarter).
  `,
  // problem explanation--> 176
  "dt-is-same-time": `
  ### 💡 Problem Breakdown
  The goal is to compare two \`Date\` objects to see if they have the exact same time of day (hours, minutes, seconds), regardless of what day, month, or year they are in.

  ### ⚙️ Solution Walkthrough
  The solution involves extracting and comparing each time component individually.
  \`\`\`javascript
  function isSameTime(date1, date2) {
    return date1.getHours() === date2.getHours() &&
           date1.getMinutes() === date2.getMinutes() &&
           date1.getSeconds() === date2.getSeconds();
  }
  \`\`\`
  This ensures that only the time part is considered in the comparison.

  ### 📚 Key Concepts
  - **Date Component Extraction**: Using methods like \`.getHours()\` to isolate specific parts of a date.
  `,
  // problem explanation--> 177
  "dt-timezone-conversion-library-conceptual": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about the difficulties of timezone conversions. The built-in JavaScript \`Date\` object is notoriously bad at this. It can only represent the user's local timezone and UTC. Converting between arbitrary timezones (e.g., converting a time in "America/New_York" to its equivalent in "Asia/Tokyo") is very complex.

  ### ⚙️ Solution Walkthrough
  A specialized library is necessary because:
  - **Daylight Saving Time (DST)**: Libraries have the full IANA timezone database, which includes all historical and future DST transition rules for every timezone.
  - **Historical Changes**: Timezone boundaries and rules change over time. Libraries keep this data updated.
  - **Clarity**: Libraries provide an immutable and explicit API (e.g., \`toZonedTime(date, 'Asia/Tokyo')\`) that is much less error-prone than trying to manipulate the native \`Date\` object.

  Popular libraries for this include \`date-fns-tz\`, \`day.js\` with its timezone plugin, and the upcoming \`Temporal\` API.

  ### 📚 Key Concepts
  - **IANA Timezone Database**: The standard source of truth for timezone information.
  - **Immutability**: Good date libraries provide immutable objects, which prevents bugs.
  `,
  // problem explanation--> 178
  "dt-get-start-of-quarter": `
  ### 💡 Problem Breakdown
  The task is to find the first day of the quarter that a given date belongs to. The quarters start in January, April, July, and October.

  ### ⚙️ Solution Walkthrough
  1.  **Get Quarter**: First, determine which quarter the date is in. This can be done with \`Math.floor(date.getMonth() / 3)\`.
  2.  **Calculate Start Month**: The starting month of that quarter is \`quarter * 3\`.
  3.  **Create New Date**: Create a new \`Date\` object for the first day of that starting month in the same year.
  \`\`\`javascript
  function getStartOfQuarter(date) {
    const quarter = Math.floor(date.getMonth() / 3);
    const startMonth = quarter * 3;
    return new Date(date.getFullYear(), startMonth, 1);
  }
  \`\`\`

  ### 📚 Key Concepts
  - **Integer Arithmetic**: Using division and multiplication to map a month to its quarter's starting month.
  `,
  // problem explanation--> 179
  "dt-get-end-of-quarter": `
  ### 💡 Problem Breakdown
  The task is to find the last day of the quarter that a given date belongs to.

  ### ⚙️ Solution Walkthrough
  1.  **Get Quarter**: Determine the quarter the date is in: \`Math.floor(date.getMonth() / 3)\`.
  2.  **Calculate End Month**: The starting month of the *next* quarter is \`quarter * 3 + 3\`.
  3.  **Create New Date**: Create a new \`Date\` object for the "0th" day of the next quarter's starting month. This trick gives you the last day of the desired quarter.
  \`\`\`javascript
  function getEndOfQuarter(date) {
    const quarter = Math.floor(date.getMonth() / 3);
    const nextQuarterStartMonth = quarter * 3 + 3;
    return new Date(date.getFullYear(), nextQuarterStartMonth, 0);
  }
  \`\`\`
  ### 📚 Key Concepts
  - **Date Arithmetic**: The "0th day" trick is a powerful pattern for finding the end of a month or period.
  `,
  // problem explanation--> 180
  "dt-humanize-date-difference": `
  ### 💡 Problem Breakdown
  This is a complex formatting problem. The goal is to find the difference between two dates and express it in a human-friendly way, breaking it down into years, months, and days.

  ### ⚙️ Solution Walkthrough
  A simple millisecond subtraction won't work because months and years have variable lengths. The calculation must be done component by component.
  1.  **Ensure Order**: Make sure the start date is before the end date.
  2.  **Calculate Years**: Get the full year difference.
  3.  **Calculate Months**: Get the month difference. If the end date's day is less than the start date's day, you need to "borrow" from the months.
  4.  **Calculate Days**: Calculate the remaining day difference, accounting for the borrowing and the number of days in the month.
  5.  **Build String**: Construct the final string from the calculated components, handling pluralization correctly.

  ### 📚 Key Concepts
  - **Complex Date Logic**: This type of calculation is complex and prone to edge cases, highlighting another area where date utility libraries are very helpful.
  `,
  // problem explanation--> 181
  "dt-iterate-over-months-in-range": `
  ### 💡 Problem Breakdown
  The task is to iterate through a date range and perform an action for each month that falls within that range.

  ### ⚙️ Solution Walkthrough
  1.  **Initialize**: Create a \`currentDate\` variable and set it to the start of the first month in the range.
  2.  **Loop**: Use a \`while\` loop that continues as long as \`currentDate\` is less than or equal to the \`endDate\`.
  3.  **Action**: Inside the loop, perform the desired action with the \`currentDate\` (e.g., call a callback).
  4.  **Advance**: Advance the \`currentDate\` to the start of the next month by using \`currentDate.setMonth(currentDate.getMonth() + 1)\`.

  ### 📚 Key Concepts
  - **Iterative Date Processing**: A pattern for stepping through a date range in units larger than a single day.
  `,
  // problem explanation--> 182
  "dt-get-age-with-months-days": `
  ### 💡 Problem Breakdown
  This is an advanced version of the age calculation problem, requiring a more precise result in years, months, and days.

  ### ⚙️ Solution Walkthrough
  This is a surprisingly complex calculation due to variable month lengths.
  1.  **Get End of Previous Month**: Create a helper to find the last day of the month before the end date.
  2.  **Calculate Days**: If the end day is less than the start day, you "borrow" the number of days from the previous month and decrement the month count. Otherwise, just subtract the days.
  3.  **Calculate Months**: If the end month (after potential borrowing) is less than the start month, you borrow 12 months from the year and decrement the year count. Otherwise, just subtract the months.
  4.  **Calculate Years**: Subtract the final year values.
  5.  Return the calculated years, months, and days.

  ### 📚 Key Concepts
  - **Complex Date Logic**: Demonstrates the difficulty of manual date calculations.
  `,
  // problem explanation--> 183
  "dt-parse-date-ddmmyyyy": `
  ### 💡 Problem Breakdown
  The \`new Date(string)\` constructor is notoriously unreliable for formats other than ISO 8601. Formats like \`DD-MM-YYYY\` can be parsed differently by different browsers. The task is to parse this format reliably.

  ### ⚙️ Solution Walkthrough
  The most reliable way is to parse the components manually and pass them to the \`Date\` constructor as numbers.
  \`\`\`javascript
  function parseDMY(dateStr) {
    const parts = dateStr.split('-');
    // new Date(year, monthIndex, day)
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
  \`\`\`
  1.  **Split**: Split the string by the delimiter.
  2.  **Construct**: Create a new \`Date\` object using the constructor that takes numeric components, ensuring you place the parts in the correct order (year, month, day) and that the month is 0-indexed.

  ### 📚 Key Concepts
  - **Date String Parsing**: Manual parsing is often safer than relying on the single-string constructor for non-standard formats.
  `,
  // problem explanation--> 184
  "dt-get-next-anniversary": `
  ### 💡 Problem Breakdown
  The task is to find the date of the next upcoming anniversary of a given date (e.g., a birthday).

  ### ⚙️ Solution Walkthrough
  1.  **Get Today's Date**: Get the current date.
  2.  **Get Anniversary Date Components**: Extract the month and day from the original anniversary date.
  3.  **Create This Year's Anniversary**: Create a new \`Date\` object for the anniversary in the *current* year.
  4.  **Compare**:
      - If this year's anniversary date is in the future (or is today), then that is the next anniversary.
      - If it has already passed this year, the next anniversary must be in the *next* year. Create a new \`Date\` object for the anniversary in the next year.
  5.  Handle the edge case of leap day anniversaries (February 29th).

  ### 📚 Key Concepts
  - **Conditional Logic**: The core of the solution is comparing this year's anniversary date with today's date.
  `,
  // problem explanation--> 185
  "dt-date-serialization-deserialization": `
  ### 💡 Problem Breakdown
  This problem covers the full round trip of serializing a \`Date\` object to JSON and then correctly deserializing it back into a \`Date\` object, not just a string.

  ### ⚙️ Solution Walkthrough
  - **Serialization**: \`JSON.stringify\` automatically calls the \`.toJSON()\` method on a \`Date\` object, which converts it to an ISO 8601 string.
  - **Deserialization**: To convert it back, you must use a "reviver" function in \`JSON.parse\`. The reviver checks if a value is a string that looks like a date and, if so, creates a \`new Date()\` from it.
  \`\`\`javascript
  const obj = { event: new Date() };
  const json = JSON.stringify(obj);

  const reviver = (key, value) => {
    // A simple regex to check for ISO date format
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (typeof value === 'string' && isoRegex.test(value)) {
      return new Date(value);
    }
    return value;
  };
  const parsedObj = JSON.parse(json, reviver);
  // parsedObj.event is now a Date object again.
  \`\`\`
  ### 📚 Key Concepts
  - **Serialization**: The process of converting an object to a string.
  - **Deserialization**: The process of converting a string back to an object.
  - **Reviver Function**: A powerful feature of \`JSON.parse\` for transforming data during parsing.
  `,
  // problem explanation--> 186
  "dt-get-islamic-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Islamic calendar.

  ### ⚙️ Solution Walkthrough
  The Islamic calendar is purely lunar, with 12 months that are either 29 or 30 days long. The start of a month is traditionally determined by the sighting of the new moon. Because the year is only 354 or 355 days long, it is not synchronized with the solar seasons. Accurate conversion is complex and requires a library that implements the algorithmic rules or uses lookup tables.

  ### 📚 Key Concepts
  - **Lunar Calendar**: A calendar based on the cycles of the Moon's phases.
  `,
  // problem explanation--> 187
  "dt-get-hebrew-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Hebrew calendar.

  ### ⚙️ Solution Walkthrough
  The Hebrew calendar is a lunisolar calendar. It uses lunar months but adds an extra "leap month" in certain years of a 19-year cycle to ensure that festivals like Passover stay in the spring. The rules for determining the start of the year (Rosh Hashanah) are also complex. A specialized library is required for accurate conversion.

  ### 📚 Key Concepts
  - **Lunisolar Calendar**: A calendar that synchronizes with both the lunar and solar cycles.
  `,
  // problem explanation--> 188
  "dt-get-persian-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Persian calendar (Solar Hijri).

  ### ⚙️ Solution Walkthrough
  The Persian calendar is a solar calendar and one of the most accurate in the world. Its new year (Nowruz) begins on the vernal equinox. Its leap year rule is more complex than the Gregorian rule, based on a 33-year cycle, which keeps it better aligned with the solar year. A library is needed for accurate conversion.

  ### 📚 Key Concepts
  - **Solar Calendar**: A calendar based on the Earth's revolution around the Sun.
  `,
  // problem explanation--> 189
  "dt-get-indian-national-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Indian National Calendar (Saka calendar).

  ### ⚙️ Solution Walkthrough
  This is the official civil calendar in India. It is a solar calendar. The year count starts from the Saka Era (78 AD). The lengths of the months are fixed, with the first six having 31 days and the last six having 30, with adjustments in leap years. Conversion requires mapping the months and adjusting for the different epoch.

  ### 📚 Key Concepts
  - **Solar Calendar**: The basis of the Saka calendar.
  `,
  // problem explanation--> 190
  "dt-get-coptic-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Coptic calendar.

  ### ⚙️ Solution Walkthrough
  The Coptic calendar is a solar calendar derived from the ancient Egyptian calendar. It has 12 months of exactly 30 days each, followed by a 5- or 6-day "intercalary" month at the end of the year. Its epoch is different from the Gregorian calendar. Conversion requires a library.

  ### 📚 Key Concepts
  - **Solar Calendar**: A calendar with a fixed number of days per year (with leap adjustments).
  `,
  // problem explanation--> 191
  "dt-get-ethiopian-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Ethiopian calendar.

  ### ⚙️ Solution Walkthrough
  The Ethiopian calendar is very similar to the Coptic calendar, with 12 months of 30 days and a 5- or 6-day intercalary month. A key difference is the names of the months. It is also about 7 to 8 years behind the Gregorian calendar due to a different calculation for the epoch (the birth year of Jesus). Conversion requires a library.

  ### 📚 Key Concepts
  - **Calendar Systems**: Highlighting the different epochs and structures used worldwide.
  `,
  // problem explanation--> 192
  "dt-get-julian-calendar-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Julian calendar.

  ### ⚙️ Solution Walkthrough
  The Julian calendar was the predecessor to the Gregorian calendar. Its only leap year rule was a leap day every 4 years. This was slightly too long, causing the calendar to drift over centuries. Conversion between Julian and Gregorian dates involves calculating the number of days from a common epoch and accounting for the different number of leap years that have occurred.

  ### 📚 Key Concepts
  - **Calendar Reform**: The historical reason for the switch from Julian to Gregorian.
  `,
  // problem explanation--> 193
  "dt-get-mayan-calendar-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Mayan calendar system.

  ### ⚙️ Solution Walkthrough
  The Mayan system is extremely complex and consists of multiple, interlocking calendars, including:
  - **Tzolk'in**: A 260-day sacred calendar.
  - **Haab'**: A 365-day solar calendar.
  - **Long Count**: A continuous count of days from a mythological starting point (similar to a Julian Day Number).
  Conversion is a highly specialized task requiring dedicated astronomical and calendrical libraries.

  ### 📚 Key Concepts
  - **Complex Calendar Systems**: An example of a non-Western calendar with a very different structure.
  `,
  // problem explanation--> 194
  "dt-get-french-republican-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the French Republican Calendar.

  ### ⚙️ Solution Walkthrough
  This was a calendar used in France from 1793 to 1805. It was an attempt to decimalize time. It had 12 months of 30 days each, divided into three 10-day weeks. The remaining 5 or 6 days were placed at the end of the year as holidays. Conversion is a historical curiosity and requires a specialized library.

  ### 📚 Key Concepts
  - **Historical Calendars**: An example of a calendar with a unique structure.
  `,
  // problem explanation--> 195
  "dt-get-byzantine-date-conceptual": `
  ### 💡 Problem Breakdown
  Conceptual problem about the Byzantine calendar.

  ### ⚙️ Solution Walkthrough
  The Byzantine calendar was the official calendar of the Byzantine Empire. It was based on the Julian calendar but used a different epoch, the Anno Mundi ("year of the world"), which placed creation at 5509 BC. The new year started on September 1st. Conversion involves adjusting for the different year number and start of the year.

  ### 📚 Key Concepts
  - **Epoch**: The starting point of a calendar era.
  `,
  // problem explanation--> 196
  "dt-get-world-clock": `
  ### 💡 Problem Breakdown
  The task is to display the current time in several different major cities around the world.

  ### ⚙️ Solution Walkthrough
  This is a perfect use case for the \`Intl.DateTimeFormat\` object or the related \`Date.prototype.toLocaleString()\` method, which can format a date for any specified IANA timezone.
  1.  **Get Current Date**: Create a single \`new Date()\` object. This object represents a single moment in time, which is the same everywhere.
  2.  **Define Timezones**: Create a list or object of the IANA timezone names for the cities you want to display (e.g., 'America/New_York', 'Europe/London', 'Asia/Tokyo').
  3.  **Loop and Format**: Loop through your list of timezones. In each iteration, call \`date.toLocaleString()\` with the desired locale (e.g., 'en-US') and an options object that specifies the \`timeZone\`.
  4.  Combine the formatted strings for display.

  ### 📚 Key Concepts
  - **IANA Timezone Database**: A standardized database of timezone names used in computing.
  - **Internationalization API**: The standard way to handle timezone conversions and formatting.
  `,
  // problem explanation--> 197
  "dt-get-astronomical-julian-date": `
  ### 💡 Problem Breakdown
  The Julian Date (JD) is a continuous count of days and fractions since noon Universal Time on January 1, 4713 BC (in the proleptic Julian calendar). It is used heavily in astronomy to simplify calculations involving different calendar systems.

  ### ⚙️ Solution Walkthrough
  A standard formula is used to convert from a JavaScript timestamp (milliseconds since Jan 1, 1970 UTC) to a Julian Date.
  \`\`\`javascript
  function toJulianDate(date) {
    const timestamp = date.getTime();
    // Milliseconds in a day
    const msInDay = 86400000;
    // The Julian Date for the JavaScript epoch (1970-01-01T00:00:00Z)
    const jsEpochJD = 2440587.5;

    return (timestamp / msInDay) + jsEpochJD;
  }
  \`\`\`

  ### 📚 Key Concepts
  - **Julian Date**: A standard timekeeping system in astronomy.
  - **Epoch Conversion**: The formula works by converting from one epoch (JavaScript's) to another (the Julian Date epoch).
  `,
  // problem explanation--> 198
  "dt-get-modified-julian-date": `
  ### 💡 Problem Breakdown
  The Modified Julian Date (MJD) is a variation of the Julian Date, introduced to use smaller numbers for modern dates. The MJD is defined as \`MJD = JD - 2400000.5\`.

  ### ⚙️ Solution Walkthrough
  1.  **Calculate Julian Date**: First, calculate the standard Julian Date (JD) as in the previous problem.
  2.  **Subtract Constant**: Subtract the constant value \`2400000.5\` from the JD.
  \`\`\`javascript
  function toModifiedJulianDate(date) {
    const jd = (date.getTime() / 86400000) + 2440587.5;
    return jd - 2400000.5;
  }
  \`\`\`

  ### 📚 Key Concepts
  - **Modified Julian Date**: A modern convention in astronomy for a simpler day count.
  `,
  // problem explanation--> 199
  "dt-calculate-sunrise-sunset-conceptual": `
  ### 💡 Problem Breakdown
  This is a conceptual problem about a very complex set of calculations. Determining sunrise and sunset times for a specific location and date is not trivial. It depends on the Earth's axial tilt, its elliptical orbit, the observer's latitude and longitude, and atmospheric refraction.

  ### ⚙️ Solution Walkthrough
  A high-level overview of the steps involved:
  1.  Calculate the day of the year.
  2.  Calculate the solar declination, which depends on the day of the year.
  3.  Calculate the hour angle, which depends on the solar declination and the observer's latitude.
  4.  Use the hour angle to find the time of solar noon.
  5.  Sunrise and sunset times are derived from solar noon and the hour angle.
  6.  Apply corrections for atmospheric refraction (which makes the sun appear higher than it is) and the sun's angular size.

  Due to this complexity, it is almost always recommended to use a well-tested astronomical library like **SunCalc.js**.

  ### 📚 Key Concepts
  - **Spherical Trigonometry and Astronomy**: The underlying mathematics required for the calculation.
  `,
  // problem explanation--> 200
  "dt-get-day-of-week-from-non-date-conceptual": `
  ### 💡 Problem Breakdown
  This is a conceptual math problem. If you know the day of the week for a specific, known date, you can calculate the day of the week for any other date without creating a \`Date\` object, by using modulo arithmetic.

  ### ⚙️ Solution Walkthrough
  The algorithm works as follows:
  1.  **Known Anchor**: You need a known date and its day of the week. For example, January 1, 2000 was a Saturday (day 6).
  2.  **Calculate Difference**: Find the total number of days between your known date and the target date. This is the most complex part, as it requires accurately counting the number of days in each month and accounting for all leap years between the two dates.
  3.  **Modulo 7**: Take the difference in days and find its value modulo 7. This gives you the net shift in the day of the week.
  4.  **Final Calculation**: Add this shift to the known day of the week and take the result modulo 7 to get the final day of the week for the target date.
  \`\`\`javascript
  // Simplified example
  // Known: Today is Wednesday (3)
  // Target: 10 days from now
  // diff = 10
  // finalDay = (3 + 10) % 7 = 13 % 7 = 6 (Saturday)
  \`\`\`
  ### 📚 Key Concepts
  - **Modulo Arithmetic**: The core of all calendar calculations.
  - **Date Algorithms**: The underlying logic that date libraries use, which involves complex day-counting and leap year rules.
  `,
};
