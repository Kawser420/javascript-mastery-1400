import { Problem } from "@/types";

export const problems: Problem[] = [
  // problem--> 01
  {
    id: "dt-get-current-date",
    title: "Get Current Date Object",
    description:
      "Create a new `Date` object representing the current date and time.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Date",
    difficulty: "Beginner",
  },
  // problem--> 02
  {
    id: "dt-get-current-timestamp",
    title: "Get Current Timestamp",
    description:
      "Use `Date.now()` to get the current timestamp (milliseconds since the Unix Epoch).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Timestamp",
    difficulty: "Beginner",
  },
  // problem--> 03
  {
    id: "dt-get-full-year",
    title: "Get the Full Year",
    description:
      "From a given date, extract the four-digit year using `.getFullYear()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Year",
    difficulty: "Beginner",
  },
  // problem--> 04
  {
    id: "dt-get-month",
    title: "Get the Month",
    description:
      "From a given date, extract the month (0-11) using `.getMonth()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Month",
    difficulty: "Beginner",
  },
  // problem--> 05
  {
    id: "dt-get-day-of-month",
    title: "Get the Day of the Month",
    description:
      "From a given date, extract the day of the month (1-31) using `.getDate()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Day",
    difficulty: "Beginner",
  },
  // problem--> 06
  {
    id: "dt-get-day-of-week",
    title: "Get the Day of the Week",
    description:
      "From a given date, extract the day of the week (0 for Sunday, 1 for Monday, etc.) using `.getDay()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Day of Week",
    difficulty: "Beginner",
  },
  // problem--> 07
  {
    id: "dt-create-date-from-string",
    title: "Create a Date from a String",
    description:
      "Create a specific `Date` object by passing a date string to the `new Date()` constructor.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String (e.g., YYYY-MM-DD)",
        type: "text",
        defaultValue: "1995-12-17",
      },
    ],
    buttonText: "Create Date",
    difficulty: "Beginner",
  },
  // problem--> 08
  {
    id: "dt-create-date-from-components",
    title: "Create a Date from Components",
    description:
      "Create a specific `Date` object by passing year, month, and day as numbers to the `new Date()` constructor.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2025 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 0 },
      { id: "day", label: "Day", type: "number", defaultValue: 1 },
    ],
    buttonText: "Create Date",
    difficulty: "Beginner",
  },
  // problem--> 09
  {
    id: "dt-to-date-string",
    title: "Format as Date String",
    description:
      'Use the `.toDateString()` method to format a date into a human-readable string (e.g., "Fri Jul 26 2024").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format Date",
    difficulty: "Beginner",
  },
  // problem--> 10
  {
    id: "dt-to-locale-date-string",
    title: "Format as Locale Date String",
    description:
      'Use the `.toLocaleDateString()` method to format a date according to the user\'s local conventions (e.g., "7/26/2024").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format Date Locally",
    difficulty: "Beginner",
  },
  // problem--> 11
  {
    id: "dt-to-iso-string",
    title: "Format as ISO 8601 String",
    description:
      'Use the `.toISOString()` method to get the date in the standard ISO 8601 format (e.g., "2024-07-26T10:00:00.000Z").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format to ISO",
    difficulty: "Beginner",
  },
  // problem--> 12
  {
    id: "dt-get-hours",
    title: "Get the Hours",
    description:
      "From a given date, extract the hours (0-23) using `.getHours()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String (YYYY-MM-DD HH:mm)",
        type: "text",
        defaultValue: "2024-07-26 14:30",
      },
    ],
    buttonText: "Get Hours",
    difficulty: "Beginner",
  },
  // problem--> 13
  {
    id: "dt-get-minutes",
    title: "Get the Minutes",
    description:
      "From a given date, extract the minutes (0-59) using `.getMinutes()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String (YYYY-MM-DD HH:mm)",
        type: "text",
        defaultValue: "2024-07-26 14:30",
      },
    ],
    buttonText: "Get Minutes",
    difficulty: "Beginner",
  },
  // problem--> 14
  {
    id: "dt-get-seconds",
    title: "Get the Seconds",
    description:
      "From a given date, extract the seconds (0-59) using `.getSeconds()`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String (YYYY-MM-DD HH:mm:ss)",
        type: "text",
        defaultValue: "2024-07-26 14:30:45",
      },
    ],
    buttonText: "Get Seconds",
    difficulty: "Beginner",
  },
  // problem--> 15
  {
    id: "dt-get-milliseconds",
    title: "Get the Milliseconds",
    description:
      "From a given date, extract the milliseconds (0-999) using `.getMilliseconds()`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Milliseconds",
    difficulty: "Beginner",
  },
  // problem--> 16
  {
    id: "dt-get-time",
    title: "Get Timestamp with `.getTime()`",
    description:
      "Use the `.getTime()` method on a date object to get its timestamp (milliseconds since epoch).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "1970-01-01",
      },
    ],
    buttonText: "Get Timestamp",
    difficulty: "Beginner",
  },
  // problem--> 17
  {
    id: "dt-create-from-timestamp",
    title: "Create a Date from a Timestamp",
    description:
      "Create a `Date` object from a given timestamp in milliseconds.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "timestamp",
        label: "Timestamp (ms)",
        type: "number",
        defaultValue: 819198000000,
      },
    ],
    buttonText: "Create Date",
    difficulty: "Beginner",
  },
  // problem--> 18
  {
    id: "dt-compare-two-dates",
    title: "Compare Two Dates",
    description:
      "Write a function that takes two date strings, creates `Date` objects, and returns which date is earlier.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2025-01-01",
      },
    ],
    buttonText: "Compare",
    difficulty: "Beginner",
  },
  // problem--> 19
  {
    id: "dt-get-utc-full-year",
    title: "Get UTC Year",
    description:
      "From a given date, extract the four-digit UTC year using `.getUTCFullYear()`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get UTC Year",
    difficulty: "Beginner",
  },
  // problem--> 20
  {
    id: "dt-get-utc-month",
    title: "Get UTC Month",
    description:
      "From a given date, extract the UTC month (0-11) using `.getUTCMonth()`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get UTC Month",
    difficulty: "Beginner",
  },
  // problem--> 21
  {
    id: "dt-set-full-year",
    title: "Set the Full Year",
    description: "Use `.setFullYear()` to change the year of a date object.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "New Year", type: "number", defaultValue: 2030 },
    ],
    buttonText: "Set Year",
    difficulty: "Beginner",
  },
  // problem--> 22
  {
    id: "dt-set-month",
    title: "Set the Month",
    description: "Use `.setMonth()` to change the month of a date object.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "month",
        label: "New Month (0-11)",
        type: "number",
        defaultValue: 11,
      },
    ],
    buttonText: "Set Month",
    difficulty: "Beginner",
  },
  // problem--> 23
  {
    id: "dt-set-day",
    title: "Set the Day of the Month",
    description:
      "Use `.setDate()` to change the day of the month of a date object.",
    category: "Date and Time Handling",
    inputs: [{ id: "day", label: "New Day", type: "number", defaultValue: 15 }],
    buttonText: "Set Day",
    difficulty: "Beginner",
  },
  // problem--> 24
  {
    id: "dt-add-days",
    title: "Add Days to a Date",
    description:
      "Write a function that takes a date and a number of days to add, and returns the new date. Handle month and year rollovers.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-02-28",
      },
      { id: "days", label: "Days to Add", type: "number", defaultValue: 3 },
    ],
    buttonText: "Add Days",
    difficulty: "Intermediate",
  },
  // problem--> 25
  {
    id: "dt-subtract-days",
    title: "Subtract Days from a Date",
    description:
      "Write a function that takes a date and a number of days to subtract, returning the new date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-03-01",
      },
      {
        id: "days",
        label: "Days to Subtract",
        type: "number",
        defaultValue: 2,
      },
    ],
    buttonText: "Subtract Days",
    difficulty: "Intermediate",
  },
  // problem--> 26
  {
    id: "dt-diff-in-days",
    title: "Difference Between Two Dates in Days",
    description:
      "Write a function that calculates the number of full days between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-07-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-07-11",
      },
    ],
    buttonText: "Calculate Difference",
    difficulty: "Intermediate",
  },
  // problem--> 27
  {
    id: "dt-get-month-name",
    title: "Get Month Name",
    description:
      'Write a function that takes a date and returns the full name of the month (e.g., "July").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Name",
    difficulty: "Beginner",
  },
  // problem--> 28
  {
    id: "dt-get-day-name",
    title: "Get Day of the Week Name",
    description:
      'Write a function that takes a date and returns the full name of the day of the week (e.g., "Friday").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Name",
    difficulty: "Beginner",
  },
  // problem--> 29
  {
    id: "dt-is-valid-date",
    title: "Check for Valid Date",
    description:
      'Write a function that checks if a `Date` object represents a valid date (e.g., `new Date("invalid-string")` is invalid).',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "2024-02-30",
      },
    ],
    buttonText: "Validate Date",
    difficulty: "Intermediate",
  },
  // problem--> 30
  {
    id: "dt-format-yyyy-mm-dd",
    title: "Format Date as YYYY-MM-DD",
    description:
      "Write a function to format a `Date` object into a `YYYY-MM-DD` string, ensuring months and days are zero-padded.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 31
  {
    id: "dt-get-start-of-day",
    title: "Get Start of Day",
    description:
      "Write a function that takes a date and returns a new `Date` object set to the beginning of that day (00:00:00).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Start",
    difficulty: "Intermediate",
  },
  // problem--> 32
  {
    id: "dt-get-end-of-day",
    title: "Get End of Day",
    description:
      "Write a function that takes a date and returns a new `Date` object set to the end of that day (23:59:59.999).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get End",
    difficulty: "Intermediate",
  },
  // problem--> 33
  {
    id: "dt-is-weekend",
    title: "Check if a Date is a Weekend",
    description:
      "Write a function that returns `true` if a given date falls on a Saturday or Sunday.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-27",
      },
    ],
    buttonText: "Check Weekend",
    difficulty: "Beginner",
  },
  // problem--> 34
  {
    id: "dt-get-days-in-month",
    title: "Get Number of Days in a Month",
    description:
      "Write a function that returns the total number of days in the month of a given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-02-15",
      },
    ],
    buttonText: "Get Days",
    difficulty: "Intermediate",
  },
  // problem--> 35
  {
    id: "dt-get-timezone-offset",
    title: "Get Timezone Offset",
    description:
      "Use `.getTimezoneOffset()` to find the difference, in minutes, between UTC and the local time of the user's browser.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Offset",
    difficulty: "Beginner",
  },
  // problem--> 36
  {
    id: "dt-format-12-hour-time",
    title: "Format as 12-Hour Time with AM/PM",
    description:
      "Write a function that takes a date and returns the time formatted as `HH:MM AM/PM`.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date/Time String",
        type: "text",
        defaultValue: "2024-07-26 14:30",
      },
    ],
    buttonText: "Format Time",
    difficulty: "Intermediate",
  },
  // problem--> 37
  {
    id: "dt-is-today",
    title: "Check if a Date is Today",
    description:
      "Write a function that returns `true` if a given date is the same day as today.",
    category: "Date and Time Handling",
    inputs: [
      { id: "dateStr", label: "Date String", type: "text", defaultValue: "" },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 38
  {
    id: "dt-get-quarter-of-year",
    title: "Get Quarter of the Year",
    description:
      "Write a function that takes a date and returns the quarter of the year (1, 2, 3, or 4).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-08-15",
      },
    ],
    buttonText: "Get Quarter",
    difficulty: "Beginner",
  },
  // problem--> 39
  {
    id: "dt-get-start-of-month",
    title: "Get Start of Month",
    description:
      "Write a function that takes a date and returns a new `Date` object for the first day of that month.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Start of Month",
    difficulty: "Intermediate",
  },
  // problem--> 40
  {
    id: "dt-get-end-of-month",
    title: "Get End of Month",
    description:
      "Write a function that takes a date and returns a new `Date` object for the last day of that month.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get End of Month",
    difficulty: "Intermediate",
  },
  // problem--> 41
  {
    id: "dt-diff-in-hours",
    title: "Difference Between Two Dates in Hours",
    description:
      "Write a function to calculate the total number of hours between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-07-26 10:00:00",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-07-27 12:00:00",
      },
    ],
    buttonText: "Calculate Hours",
    difficulty: "Intermediate",
  },
  // problem--> 42
  {
    id: "dt-is-date-in-range",
    title: "Check if Date is in a Range",
    description:
      "Write a function that checks if a given date falls within a specified start and end date (inclusive).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateToCheck",
        label: "Date to Check",
        type: "text",
        defaultValue: "2024-05-15",
      },
      {
        id: "startDate",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "endDate",
        label: "End Date",
        type: "text",
        defaultValue: "2024-12-31",
      },
    ],
    buttonText: "Check Range",
    difficulty: "Intermediate",
  },
  // problem--> 43
  {
    id: "dt-add-months",
    title: "Add Months to a Date",
    description:
      "Use `.setMonth()` to add a number of months to a date, correctly handling year rollovers.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-10-15",
      },
      { id: "months", label: "Months to Add", type: "number", defaultValue: 5 },
    ],
    buttonText: "Add Months",
    difficulty: "Intermediate",
  },
  // problem--> 44
  {
    id: "dt-get-week-of-year",
    title: "Get Week of the Year",
    description:
      "Write a function to calculate the ISO 8601 week number for a given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2025-01-01",
      },
    ],
    buttonText: "Get Week",
    difficulty: "Advanced",
  },
  // problem--> 45
  {
    id: "dt-parse-date-mmddyyyy",
    title: "Parse MM/DD/YYYY Date String",
    description:
      "Write a function that reliably parses a date string in `MM/DD/YYYY` format into a `Date` object.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "07/26/2024",
      },
    ],
    buttonText: "Parse Date",
    difficulty: "Intermediate",
  },
  // problem--> 46
  {
    id: "dt-time-ago-string",
    title: 'Create a "Time Ago" String',
    description:
      'Write a function that takes a past date and returns a relative time string like "5 minutes ago", "2 hours ago", "3 days ago".',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Past Date/Time",
        type: "text",
        defaultValue: "",
      },
    ],
    buttonText: "Get Relative Time",
    difficulty: "Advanced",
  },
  // problem--> 47
  {
    id: "dt-intl-datetimeformat-basic",
    title: "Basic Formatting with `Intl.DateTimeFormat`",
    description:
      "Use the `Intl.DateTimeFormat` object to format a date for a specific locale (e.g., 'de-DE' for German).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "locale",
        label: "Locale Code",
        type: "text",
        defaultValue: "de-DE",
      },
    ],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 48
  {
    id: "dt-intl-datetimeformat-options",
    title: "`Intl.DateTimeFormat` with Options",
    description:
      "Use the options argument of `Intl.DateTimeFormat` to customize the output (e.g., showing the full month name and weekday).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format with Options",
    difficulty: "Intermediate",
  },
  // problem--> 49
  {
    id: "dt-get-start-of-year",
    title: "Get Start of Year",
    description:
      "Write a function that takes a date and returns a new `Date` object for the first day of that year.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Start of Year",
    difficulty: "Intermediate",
  },
  // problem--> 50
  {
    id: "dt-get-end-of-year",
    title: "Get End of Year",
    description:
      "Write a function that takes a date and returns a new `Date` object for the last day of that year.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get End of Year",
    difficulty: "Intermediate",
  },
  // problem--> 51
  {
    id: "dt-is-dst",
    title: "Check for Daylight Saving Time",
    description:
      "Write a function to determine if a given date is currently in Daylight Saving Time for the user's timezone.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Check DST",
    difficulty: "Advanced",
  },
  // problem--> 52
  {
    id: "dt-find-next-friday-13",
    title: "Find the Next Friday the 13th",
    description:
      "Write a function that finds the date of the next Friday the 13th from today.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Find Date",
    difficulty: "Advanced",
  },
  // problem--> 53
  {
    id: "dt-format-rfc2822",
    title: "Format to RFC2822",
    description:
      "Format a Date object into the RFC2822 string format commonly used in email headers.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 54
  {
    id: "dt-diff-in-months",
    title: "Difference Between Two Dates in Months",
    description: "Calculate the number of full months between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-01-15",
      },
      {
        id: "date2",
        label: "End Date",
        type: "text",
        defaultValue: "2025-03-10",
      },
    ],
    buttonText: "Calculate Months",
    difficulty: "Advanced",
  },
  // problem--> 55
  {
    id: "dt-get-age",
    title: "Calculate Age",
    description:
      "Write a function that calculates a person's age based on their birthdate.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "birthdate",
        label: "Birthdate (YYYY-MM-DD)",
        type: "text",
        defaultValue: "1990-05-20",
      },
    ],
    buttonText: "Calculate Age",
    difficulty: "Intermediate",
  },
  // problem--> 56
  {
    id: "dt-intl-relativetimeformat",
    title: "Relative Time with `Intl.RelativeTimeFormat`",
    description:
      'Use the `Intl.RelativeTimeFormat` object to create relative time strings like "in 5 days" or "2 months ago".',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "days",
        label: "Days from now (+/-)",
        type: "number",
        defaultValue: -2,
      },
    ],
    buttonText: "Format Relative",
    difficulty: "Intermediate",
  },
  // problem--> 57
  {
    id: "dt-is-leap-year",
    title: "Check if a Year is a Leap Year",
    description:
      "Write a function that checks if a given year is a leap year. A leap year occurs every 4 years, except for years divisible by 100 but not by 400.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2000 }],
    buttonText: "Check Leap Year",
    difficulty: "Intermediate",
  },
  // problem--> 58
  {
    id: "dt-add-business-days",
    title: "Add Business Days",
    description:
      "Write a function that adds a specified number of business days (Mon-Fri) to a given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-07-25",
      }, // A Thursday
      {
        id: "days",
        label: "Business Days to Add",
        type: "number",
        defaultValue: 3,
      },
    ],
    buttonText: "Add Business Days",
    difficulty: "Advanced",
  },
  // problem--> 59
  {
    id: "dt-get-start-of-week",
    title: "Get Start of Week",
    description:
      "Write a function that takes a date and returns the date of the preceding Sunday (assuming week starts on Sunday).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Start of Week",
    difficulty: "Intermediate",
  },
  // problem--> 60
  {
    id: "dt-get-end-of-week",
    title: "Get End of Week",
    description:
      "Write a function that takes a date and returns the date of the following Saturday.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get End of Week",
    difficulty: "Intermediate",
  },
  // problem--> 61
  {
    id: "dt-diff-in-business-days",
    title: "Difference in Business Days",
    description:
      "Calculate the number of business days (Mon-Fri) between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-07-22",
      },
      {
        id: "date2",
        label: "End Date",
        type: "text",
        defaultValue: "2024-08-01",
      },
    ],
    buttonText: "Calculate",
    difficulty: "Advanced",
  },
  // problem--> 62
  {
    id: "dt-is-same-day",
    title: "Check if Two Dates are the Same Day",
    description:
      "Write a function to check if two `Date` objects fall on the exact same day, ignoring the time component.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01 08:00:00",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-01-01 23:00:00",
      },
    ],
    buttonText: "Check Same Day",
    difficulty: "Intermediate",
  },
  // problem--> 63
  {
    id: "dt-format-unix-timestamp",
    title: "Format Unix Timestamp",
    description:
      "Convert a Unix timestamp (seconds since epoch) to a human-readable date string.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "unix",
        label: "Unix Timestamp (seconds)",
        type: "number",
        defaultValue: 1721988000,
      },
    ],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 64
  {
    id: "dt-parse-iso-8601-utc",
    title: "Parse ISO 8601 UTC String",
    description:
      "Create a Date object from a full ISO 8601 string and verify its UTC components.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "isoStr",
        label: "ISO String",
        type: "text",
        defaultValue: "2024-07-26T10:00:00.000Z",
      },
    ],
    buttonText: "Parse and Verify",
    difficulty: "Intermediate",
  },
  // problem--> 65
  {
    id: "dt-get-zodiac-sign",
    title: "Get Zodiac Sign",
    description:
      "Write a function that takes a date and returns the corresponding Western zodiac sign.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "1999-08-23",
      },
    ],
    buttonText: "Get Sign",
    difficulty: "Advanced",
  },
  // problem--> 66
  {
    id: "dt-time-duration-format",
    title: "Format Duration in Seconds",
    description:
      "Write a function that takes a total number of seconds and formats it into a `HH:MM:SS` string.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "seconds",
        label: "Total Seconds",
        type: "number",
        defaultValue: 3661,
      },
    ],
    buttonText: "Format Duration",
    difficulty: "Intermediate",
  },
  // problem--> 67
  {
    id: "dt-get-season",
    title: "Get Meteorological Season",
    description:
      "Write a function to determine the meteorological season (Spring, Summer, Autumn, Winter) for a given date in the Northern Hemisphere.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-09-01",
      },
    ],
    buttonText: "Get Season",
    difficulty: "Intermediate",
  },
  // problem--> 68
  {
    id: "dt-get-fiscal-year",
    title: "Calculate Fiscal Year",
    description:
      "Write a function that calculates the fiscal year for a given date, assuming the fiscal year starts in October.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-11-15",
      },
    ],
    buttonText: "Get Fiscal Year",
    difficulty: "Intermediate",
  },
  // problem--> 69
  {
    id: "dt-is-past-date",
    title: "Check if a Date is in the Past",
    description:
      "Write a function that returns `true` if a given date is before the current moment.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2000-01-01",
      },
    ],
    buttonText: "Check Past",
    difficulty: "Beginner",
  },
  // problem--> 70
  {
    id: "dt-is-future-date",
    title: "Check if a Date is in the Future",
    description:
      "Write a function that returns `true` if a given date is after the current moment.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2099-01-01",
      },
    ],
    buttonText: "Check Future",
    difficulty: "Beginner",
  },
  // problem--> 71
  {
    id: "dt-find-next-occurrence-of-weekday",
    title: "Find Next Occurrence of a Weekday",
    description:
      "Write a function that finds the date of the next occurrence of a specific weekday (e.g., the next Monday).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "weekday",
        label: "Weekday (0-6, Sun=0)",
        type: "number",
        defaultValue: 1,
      },
    ],
    buttonText: "Find Next Monday",
    difficulty: "Intermediate",
  },
  // problem--> 72
  {
    id: "dt-sort-dates-array",
    title: "Sort an Array of Dates",
    description:
      "Given an array of date strings, sort them in chronological order.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dates",
        label: "Dates (comma-separated)",
        type: "text",
        defaultValue: "2025-01-01,2023-05-10,2024-12-25",
      },
    ],
    buttonText: "Sort Dates",
    difficulty: "Beginner",
  },
  // problem--> 73
  {
    id: "dt-get-day-of-year",
    title: "Get Day of the Year",
    description:
      "Write a function that takes a date and returns which day of the year it is (1-366).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-12-31",
      },
    ],
    buttonText: "Get Day Number",
    difficulty: "Intermediate",
  },
  // problem--> 74
  {
    id: "dt-get-last-day-of-previous-month",
    title: "Get Last Day of Previous Month",
    description:
      "Write a function that returns the `Date` object for the last day of the month prior to the given date.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Date",
    difficulty: "Intermediate",
  },
  // problem--> 75
  {
    id: "dt-list-all-sundays-in-month",
    title: "List All Sundays in a Month",
    description:
      "Write a function that takes a year and month and returns an array of all dates that are Sundays.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 6 },
    ],
    buttonText: "List Sundays",
    difficulty: "Intermediate",
  },
  // problem--> 76
  {
    id: "dt-date-object-keys-conceptual",
    title: "`Date` Object Keys (Conceptual)",
    description:
      "Explain that a `Date` object has no enumerable own properties, so `Object.keys(new Date())` is empty.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 77
  {
    id: "dt-date-prototype-methods-conceptual",
    title: "`Date` Prototype Methods (Conceptual)",
    description:
      "Explain that methods like `.getFullYear()` are not on the date instance itself but on `Date.prototype`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 78
  {
    id: "dt-get-utc-date",
    title: "Get UTC Day of Month",
    description:
      "From a given date, extract the UTC day of the month (1-31) using `.getUTCDate()`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get UTC Day",
    difficulty: "Beginner",
  },
  // problem--> 79
  {
    id: "dt-set-utc-full-year",
    title: "Set UTC Year",
    description:
      "Use `.setUTCFullYear()` to change the UTC year of a date object.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "New UTC Year", type: "number", defaultValue: 2042 },
    ],
    buttonText: "Set UTC Year",
    difficulty: "Beginner",
  },
  // problem--> 80
  {
    id: "dt-to-gmt-string-conceptual",
    title: "`.toGMTString()` (Conceptual)",
    description:
      "Explain that `.toGMTString()` is a deprecated alias for `.toUTCString()`.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain and Format",
    difficulty: "Intermediate",
  },
  // problem--> 81
  {
    id: "dt-to-time-string",
    title: "Format as Time String",
    description:
      "Use `.toTimeString()` to get a human-readable string for the time portion of a date.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format Time",
    difficulty: "Beginner",
  },
  // problem--> 82
  {
    id: "dt-to-locale-time-string",
    title: "Format as Locale Time String",
    description:
      "Use `.toLocaleTimeString()` to get a time string formatted for the user's locale.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format Time Locally",
    difficulty: "Beginner",
  },
  // problem--> 83
  {
    id: "dt-diff-in-weeks",
    title: "Difference Between Dates in Weeks",
    description:
      "Write a function to calculate the number of full weeks between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-01-22",
      },
    ],
    buttonText: "Calculate Weeks",
    difficulty: "Intermediate",
  },
  // problem--> 84
  {
    id: "dt-is-same-month",
    title: "Check if Two Dates are in the Same Month",
    description:
      "Write a function to check if two `Date` objects fall in the same month and year.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-03-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-03-31",
      },
    ],
    buttonText: "Check Same Month",
    difficulty: "Intermediate",
  },
  // problem--> 85
  {
    id: "dt-is-same-year",
    title: "Check if Two Dates are in the Same Year",
    description:
      "Write a function to check if two `Date` objects fall in the same year.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-12-31",
      },
    ],
    buttonText: "Check Same Year",
    difficulty: "Beginner",
  },
  // problem--> 86
  {
    id: "dt-date-rollover-day",
    title: "Date Rollover (Day)",
    description:
      "Demonstrate how setting a day greater than the number of days in a month rolls over to the next month.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Test Day Rollover",
    difficulty: "Intermediate",
  },
  // problem--> 87
  {
    id: "dt-date-rollover-month",
    title: "Date Rollover (Month)",
    description:
      "Demonstrate how setting a month greater than 11 rolls over to the next year.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Test Month Rollover",
    difficulty: "Intermediate",
  },
  // problem--> 88
  {
    id: "dt-human-readable-duration",
    title: "Human-Readable Duration",
    description:
      'Write a function that takes a duration in milliseconds and formats it into a string like "2 days, 5 hours, 30 minutes".',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "ms",
        label: "Milliseconds",
        type: "number",
        defaultValue: 200000000,
      },
    ],
    buttonText: "Format Duration",
    difficulty: "Advanced",
  },
  // problem--> 89
  {
    id: "dt-get-unix-timestamp",
    title: "Get Unix Timestamp (Seconds)",
    description:
      "Convert a JavaScript timestamp (milliseconds) to a Unix timestamp (seconds).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Unix Timestamp",
    difficulty: "Beginner",
  },
  // problem--> 90
  {
    id: "dt-is-am-or-pm",
    title: "Check if Time is AM or PM",
    description: 'Write a function that takes a date and returns "AM" or "PM".',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date/Time",
        type: "text",
        defaultValue: "2024-07-26 17:00:00",
      },
    ],
    buttonText: "Check AM/PM",
    difficulty: "Beginner",
  },
  // problem--> 91
  {
    id: "dt-add-hours",
    title: "Add Hours to a Date",
    description:
      "Write a function to add a specified number of hours to a date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date/Time",
        type: "text",
        defaultValue: "2024-01-01 22:00:00",
      },
      { id: "hours", label: "Hours to Add", type: "number", defaultValue: 3 },
    ],
    buttonText: "Add Hours",
    difficulty: "Intermediate",
  },
  // problem--> 92
  {
    id: "dt-add-minutes",
    title: "Add Minutes to a Date",
    description:
      "Write a function to add a specified number of minutes to a date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date/Time",
        type: "text",
        defaultValue: "2024-01-01 10:45:00",
      },
      {
        id: "minutes",
        label: "Minutes to Add",
        type: "number",
        defaultValue: 30,
      },
    ],
    buttonText: "Add Minutes",
    difficulty: "Intermediate",
  },
  // problem--> 93
  {
    id: "dt-date-from-parts-utc",
    title: "Create a Date from UTC Components",
    description:
      "Use `Date.UTC()` to create a timestamp from UTC date components, then create a Date object from it.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Create UTC Date",
    difficulty: "Intermediate",
  },
  // problem--> 94
  {
    id: "dt-get-next-month",
    title: "Get Next Month",
    description:
      "Write a function that takes a date and returns a new date object for the same day in the next month.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-01-31",
      },
    ],
    buttonText: "Get Next Month's Date",
    difficulty: "Intermediate",
  },
  // problem--> 95
  {
    id: "dt-get-previous-month",
    title: "Get Previous Month",
    description:
      "Write a function that takes a date and returns a new date object for the same day in the previous month.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-03-31",
      },
    ],
    buttonText: "Get Previous Month's Date",
    difficulty: "Intermediate",
  },
  // problem--> 96
  {
    id: "dt-is-last-day-of-month",
    title: "Check if Last Day of Month",
    description:
      "Write a function that checks if a given date is the last day of its month.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-02-29",
      },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 97
  {
    id: "dt-format-with-ordinal",
    title: "Format Day with Ordinal Suffix",
    description:
      'Write a function that takes a date and returns the day of the month with its ordinal suffix (e.g., "1st", "2nd", "23rd").',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-08-23",
      },
    ],
    buttonText: "Format Day",
    difficulty: "Intermediate",
  },
  // problem--> 98
  {
    id: "dt-get-day-progress",
    title: "Get Day Progress",
    description:
      "Write a function that returns the percentage of the day that has passed.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Calculate Progress",
    difficulty: "Intermediate",
  },
  // problem--> 99
  {
    id: "dt-get-year-progress",
    title: "Get Year Progress",
    description:
      "Write a function that returns the percentage of the year that has passed.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Calculate Progress",
    difficulty: "Intermediate",
  },
  // problem--> 100
  {
    id: "dt-get-earliest-date",
    title: "Find Earliest Date in an Array",
    description:
      "Given an array of date strings, find and return the earliest date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dates",
        label: "Dates (comma-separated)",
        type: "text",
        defaultValue: "2025-01-01,2023-05-10,2024-12-25",
      },
    ],
    buttonText: "Find Earliest",
    difficulty: "Beginner",
  },
  // problem--> 101
  {
    id: "dt-get-latest-date",
    title: "Find Latest Date in an Array",
    description:
      "Given an array of date strings, find and return the latest date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dates",
        label: "Dates (comma-separated)",
        type: "text",
        defaultValue: "2025-01-01,2023-05-10,2024-12-25",
      },
    ],
    buttonText: "Find Latest",
    difficulty: "Beginner",
  },
  // problem--> 102
  {
    id: "dt-list-dates-in-range",
    title: "List All Dates in a Range",
    description:
      "Write a function that returns an array of all dates between a start and end date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "startDate",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-03-28",
      },
      {
        id: "endDate",
        label: "End Date",
        type: "text",
        defaultValue: "2024-04-02",
      },
    ],
    buttonText: "List Dates",
    difficulty: "Intermediate",
  },
  // problem--> 103
  {
    id: "dt-add-years",
    title: "Add Years to a Date",
    description:
      "Write a function to add a specified number of years to a date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-02-29",
      },
      { id: "years", label: "Years to Add", type: "number", defaultValue: 1 },
    ],
    buttonText: "Add Years",
    difficulty: "Intermediate",
  },
  // problem--> 104
  {
    id: "dt-diff-in-years",
    title: "Difference Between Dates in Years",
    description: "Calculate the number of full years between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Start Date",
        type: "text",
        defaultValue: "2020-01-15",
      },
      {
        id: "date2",
        label: "End Date",
        type: "text",
        defaultValue: "2024-01-14",
      },
    ],
    buttonText: "Calculate Years",
    difficulty: "Advanced",
  },
  // problem--> 105
  {
    id: "dt-temporal-api-conceptual",
    title: "The Temporal API (Conceptual)",
    description:
      "Explain the purpose of the upcoming `Temporal` API and how it aims to solve the shortcomings of the `Date` object.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain Temporal",
    difficulty: "Advanced",
  },
  // problem--> 106
  {
    id: "dt-get-daylight-saving-changes",
    title: "Find Daylight Saving Changes",
    description:
      "Write a function for a given year to find the start and end dates of Daylight Saving Time in the user's local timezone.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Find DST Dates",
    difficulty: "Advanced",
  },
  // problem--> 107
  {
    id: "dt-format-to-parts",
    title: "Format to Parts",
    description:
      "Use `Intl.DateTimeFormat.formatToParts()` to get an array of objects representing the formatted date string in parts.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format to Parts",
    difficulty: "Advanced",
  },
  // problem--> 108
  {
    id: "dt-validate-time-string",
    title: "Validate a 24-Hour Time String",
    description:
      "Write a function that validates if a string is in the format `HH:MM` and represents a valid time.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "timeStr",
        label: "Time String",
        type: "text",
        defaultValue: "23:59",
      },
    ],
    buttonText: "Validate",
    difficulty: "Intermediate",
  },
  // problem--> 109
  {
    id: "dt-round-to-nearest-hour",
    title: "Round to Nearest Hour",
    description:
      "Write a function that rounds a `Date` object to the nearest hour.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date/Time",
        type: "text",
        defaultValue: "2024-07-26 14:31:00",
      },
    ],
    buttonText: "Round Time",
    difficulty: "Intermediate",
  },
  // problem--> 110
  {
    id: "dt-find-nth-weekday-of-month",
    title: "Find Nth Weekday of a Month",
    description:
      "Write a function to find the date of the Nth occurrence of a specific weekday in a given month (e.g., the 3rd Friday of July 2024).",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 6 },
      {
        id: "day",
        label: "Day of Week (0-6)",
        type: "number",
        defaultValue: 5,
      },
      { id: "n", label: "Nth Occurrence", type: "number", defaultValue: 3 },
    ],
    buttonText: "Find Date",
    difficulty: "Advanced",
  },
  // problem--> 111
  {
    id: "dt-clone-date-object",
    title: "Clone a Date Object",
    description:
      "Create a function that takes a `Date` object and returns a new `Date` object with the same time value, demonstrating how to avoid mutation.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Clone Date",
    difficulty: "Beginner",
  },
  // problem--> 112
  {
    id: "dt-get-first-day-of-year",
    title: "Get First Day of Year",
    description:
      "Write a function that takes a date and returns the day of the week (0-6) for January 1st of that year.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2025 }],
    buttonText: "Get Day",
    difficulty: "Intermediate",
  },
  // problem--> 113
  {
    id: "dt-get-last-day-of-year",
    title: "Get Last Day of Year",
    description:
      "Write a function that takes a date and returns the day of the week (0-6) for December 31st of that year.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Get Day",
    difficulty: "Intermediate",
  },
  // problem--> 114
  {
    id: "dt-set-time-to-noon",
    title: "Set Time to Noon",
    description:
      "Write a function that takes a date object and sets its time to exactly noon (12:00:00.000).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Set to Noon",
    difficulty: "Beginner",
  },
  // problem--> 115
  {
    id: "dt-get-time-period-of-day",
    title: "Get Time Period of Day",
    description:
      'Write a function that returns "Morning", "Afternoon", "Evening", or "Night" based on the hour of a given date.',
    category: "Date and Time Handling",
    inputs: [
      { id: "hour", label: "Hour (0-23)", type: "number", defaultValue: 14 },
    ],
    buttonText: "Get Period",
    difficulty: "Beginner",
  },
  // problem--> 116
  {
    id: "dt-add-weeks",
    title: "Add Weeks to a Date",
    description:
      "Write a function that adds a specified number of weeks to a date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-07-01",
      },
      { id: "weeks", label: "Weeks to Add", type: "number", defaultValue: 4 },
    ],
    buttonText: "Add Weeks",
    difficulty: "Intermediate",
  },
  // problem--> 117
  {
    id: "dt-diff-in-minutes",
    title: "Difference Between Dates in Minutes",
    description:
      "Write a function to calculate the total number of minutes between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-07-26 10:00:00",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-07-26 11:30:00",
      },
    ],
    buttonText: "Calculate Minutes",
    difficulty: "Intermediate",
  },
  // problem--> 118
  {
    id: "dt-get-gmt-offset-string",
    title: "Get GMT Offset String",
    description:
      'Extract the GMT offset string (e.g., "GMT-0400") from a date\'s string representation.',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get GMT String",
    difficulty: "Intermediate",
  },
  // problem--> 119
  {
    id: "dt-is-first-day-of-month",
    title: "Check if First Day of Month",
    description:
      "Write a function that checks if a given date is the first day of its month.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-08-01",
      },
    ],
    buttonText: "Check",
    difficulty: "Intermediate",
  },
  // problem--> 120
  {
    id: "dt-get-decade",
    title: "Get the Decade",
    description:
      "Write a function that takes a date and returns the decade (e.g., 1990 for any year from 1990-1999).",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 1995 }],
    buttonText: "Get Decade",
    difficulty: "Beginner",
  },
  // problem--> 121
  {
    id: "dt-get-century",
    title: "Get the Century",
    description:
      "Write a function that takes a date and returns the century it belongs to (e.g., 21 for the year 2024).",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2024 }],
    buttonText: "Get Century",
    difficulty: "Beginner",
  },
  // problem--> 122
  {
    id: "dt-diff-in-seconds",
    title: "Difference Between Dates in Seconds",
    description:
      "Write a function to calculate the total number of seconds between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-07-26 10:00:00",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-07-26 10:01:30",
      },
    ],
    buttonText: "Calculate Seconds",
    difficulty: "Intermediate",
  },
  // problem--> 123
  {
    id: "dt-format-custom-string",
    title: "Format a Custom Date String",
    description:
      'Write a function that formats a date into a custom string like "MM/DD/YYYY, HH:mm".',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 124
  {
    id: "dt-get-olympic-years",
    title: "Get Next 5 Summer Olympic Years",
    description:
      "Write a function that returns an array of the next 5 Summer Olympic years from a given year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Start Year", type: "number", defaultValue: 2024 },
    ],
    buttonText: "Get Years",
    difficulty: "Intermediate",
  },
  // problem--> 125
  {
    id: "dt-get-last-weekday-occurrence",
    title: "Get Last Weekday of Month",
    description:
      "Write a function to find the date of the last occurrence of a specific weekday in a given month (e.g., the last Friday of July 2024).",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 6 },
      {
        id: "day",
        label: "Day of Week (0-6)",
        type: "number",
        defaultValue: 5,
      },
    ],
    buttonText: "Find Last Friday",
    difficulty: "Advanced",
  },
  // problem--> 126
  {
    id: "dt-get-days-left-in-year",
    title: "Get Days Left in Year",
    description:
      "Write a function that calculates how many days are left in the year from a given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-12-25",
      },
    ],
    buttonText: "Calculate Days",
    difficulty: "Intermediate",
  },
  // problem--> 127
  {
    id: "dt-get-days-passed-in-year",
    title: "Get Days Passed in Year",
    description:
      "Write a function that calculates how many days have passed in the year up to a given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-01-10",
      },
    ],
    buttonText: "Calculate Days",
    difficulty: "Intermediate",
  },
  // problem--> 128
  {
    id: "dt-is-first-quarter",
    title: "Check if in First Quarter",
    description:
      "Write a function to check if a date is in the first quarter of the year.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-02-15",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 129
  {
    id: "dt-is-last-quarter",
    title: "Check if in Last Quarter",
    description:
      "Write a function to check if a date is in the last quarter of the year.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-11-15",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 130
  {
    id: "dt-is-date-before",
    title: "Is Date Before Another",
    description:
      "Write a function that returns true if the first date is chronologically before the second date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2023-12-31",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-01-01",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 131
  {
    id: "dt-is-date-after",
    title: "Is Date After Another",
    description:
      "Write a function that returns true if the first date is chronologically after the second date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2025-01-01",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-12-31",
      },
    ],
    buttonText: "Check",
    difficulty: "Beginner",
  },
  // problem--> 132
  {
    id: "dt-get-closest-date",
    title: "Get Closest Date",
    description:
      "Write a function that takes a target date and an array of dates, and returns the date from the array that is closest to the target.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "targetDate",
        label: "Target Date",
        type: "text",
        defaultValue: "2024-07-01",
      },
      {
        id: "dates",
        label: "Dates (comma-separated)",
        type: "text",
        defaultValue: "2024-01-10,2024-06-25,2024-08-05",
      },
    ],
    buttonText: "Find Closest",
    difficulty: "Intermediate",
  },
  // problem--> 133
  {
    id: "dt-date-from-julian-day",
    title: "Convert from Julian Day Number",
    description:
      "Write a function to convert a Julian Day Number to a Gregorian Date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "jdn",
        label: "Julian Day Number",
        type: "number",
        defaultValue: 2451545,
      },
    ],
    buttonText: "Convert",
    difficulty: "Advanced",
  },
  // problem--> 134
  {
    id: "dt-date-to-julian-day",
    title: "Convert to Julian Day Number",
    description:
      "Write a function to convert a Gregorian Date to its Julian Day Number.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2000-01-01",
      },
    ],
    buttonText: "Convert",
    difficulty: "Advanced",
  },
  // problem--> 135
  {
    id: "dt-get-age-in-days",
    title: "Calculate Age in Days",
    description:
      "Write a function that calculates a person's age in days from their birthdate.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "birthdate",
        label: "Birthdate",
        type: "text",
        defaultValue: "1990-05-20",
      },
    ],
    buttonText: "Calculate Days",
    difficulty: "Intermediate",
  },
  // problem--> 136
  {
    id: "dt-get-next-business-day",
    title: "Get Next Business Day",
    description:
      "Write a function that takes a date and returns the next business day (skips weekends).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-26",
      },
    ],
    buttonText: "Get Next Business Day",
    difficulty: "Intermediate",
  },
  // problem--> 137
  {
    id: "dt-get-previous-business-day",
    title: "Get Previous Business Day",
    description:
      "Write a function that takes a date and returns the previous business day.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-29",
      },
    ], // A Monday
    buttonText: "Get Previous Business Day",
    difficulty: "Intermediate",
  },
  // problem--> 138
  {
    id: "dt-format-milliseconds-to-hms",
    title: "Format Milliseconds to H:M:S",
    description:
      'Write a function to convert milliseconds into a human-readable "hh:mm:ss.ms" format.',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "ms",
        label: "Milliseconds",
        type: "number",
        defaultValue: 1234567,
      },
    ],
    buttonText: "Format",
    difficulty: "Intermediate",
  },
  // problem--> 139
  {
    id: "dt-get-first-day-of-month",
    title: "Get First Day of the Month",
    description:
      "Write a function that returns the day of the week (0-6) for the first day of a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Get Day",
    difficulty: "Intermediate",
  },
  // problem--> 140
  {
    id: "dt-get-last-day-of-month",
    title: "Get Last Day of the Month",
    description:
      "Write a function that returns the day of the week (0-6) for the last day of a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Get Day",
    difficulty: "Intermediate",
  },
  // problem--> 141
  {
    id: "dt-is-date-in-dst",
    title: "Check if Date is in DST",
    description:
      "Write a function to determine if a given date falls within Daylight Saving Time for the local timezone.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-07-01",
      },
    ],
    buttonText: "Check DST",
    difficulty: "Advanced",
  },
  // problem--> 142
  {
    id: "dt-format-time-with-timezone",
    title: "Format Time with Timezone Name",
    description:
      'Use `Intl.DateTimeFormat` to format a date and include the long-form timezone name (e.g., "Pacific Daylight Time").',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Format with Timezone",
    difficulty: "Intermediate",
  },
  // problem--> 143
  {
    id: "dt-parse-date-with-timezone",
    title: "Parse a Date String with Timezone",
    description:
      "Create a Date object from a string that includes a timezone offset and verify its timestamp.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String with Offset",
        type: "text",
        defaultValue: "2024-07-26T12:00:00-04:00",
      },
    ],
    buttonText: "Parse",
    difficulty: "Intermediate",
  },
  // problem--> 144
  {
    id: "dt-get-date-without-time",
    title: "Get Date without Time",
    description:
      "Write a function that takes a Date object and returns a new Date object with the time components (hours, minutes, seconds, ms) set to zero.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Strip Time",
    difficulty: "Intermediate",
  },
  // problem--> 145
  {
    id: "dt-min-and-max-date",
    title: "Minimum and Maximum Date Values",
    description:
      "Demonstrate the representable range of the JavaScript `Date` object.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Show Range",
    difficulty: "Intermediate",
  },
  // problem--> 146
  {
    id: "dt-get-buddhist-year",
    title: "Get Buddhist Year",
    description:
      "Write a function that takes a Gregorian year and converts it to the Buddhist calendar year (Gregorian year + 543).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "year",
        label: "Gregorian Year",
        type: "number",
        defaultValue: 2024,
      },
    ],
    buttonText: "Convert",
    difficulty: "Beginner",
  },
  // problem--> 147
  {
    id: "dt-is-date-equal",
    title: "Check if Two Dates are Equal",
    description:
      "Write a function to check if two `Date` objects represent the exact same moment in time.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01T12:00:00Z",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2024-01-01T12:00:00Z",
      },
    ],
    buttonText: "Check Equality",
    difficulty: "Beginner",
  },
  // problem--> 148
  {
    id: "dt-get-time-in-different-timezone",
    title: "Get Time in a Different Timezone",
    description:
      "Use `toLocaleString` with a `timeZone` option to display the current time in a different timezone (e.g., Tokyo).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "timezone",
        label: "Timezone (e.g., Asia/Tokyo)",
        type: "text",
        defaultValue: "Asia/Tokyo",
      },
    ],
    buttonText: "Get Time",
    difficulty: "Intermediate",
  },
  // problem--> 149
  {
    id: "dt-get-week-number-us",
    title: "Get US Week Number",
    description:
      "Write a function to get the US-style week number (where Week 1 starts on the first Sunday of the year).",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-01-10",
      },
    ],
    buttonText: "Get Week",
    difficulty: "Advanced",
  },
  // problem--> 150
  {
    id: "dt-diff-in-working-hours",
    title: "Difference in Working Hours",
    description:
      "Calculate the number of working hours (e.g., 9 AM to 5 PM, Mon-Fri) between two dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Start Date/Time",
        type: "text",
        defaultValue: "2024-07-26 10:00:00",
      },
      {
        id: "date2",
        label: "End Date/Time",
        type: "text",
        defaultValue: "2024-07-29 14:00:00",
      },
    ],
    buttonText: "Calculate Hours",
    difficulty: "Advanced",
  },
  // problem--> 151
  {
    id: "dt-parse-rfc1123",
    title: "Parse RFC 1123 String",
    description:
      'Create a Date object from a string in RFC 1123 format (e.g., "Sat, 27 Jul 2024 12:00:00 GMT").',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "RFC 1123 String",
        type: "text",
        defaultValue: "Sat, 27 Jul 2024 12:00:00 GMT",
      },
    ],
    buttonText: "Parse",
    difficulty: "Intermediate",
  },
  // problem--> 152
  {
    id: "dt-set-utc-hours",
    title: "Set UTC Hours",
    description:
      "Use `.setUTCHours()` to set the hour, minute, second, and millisecond for a specified date according to universal time.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Set UTC Time",
    difficulty: "Intermediate",
  },
  // problem--> 153
  {
    id: "dt-find-next-full-moon",
    title: "Find Next Full Moon (Approximate)",
    description:
      "Implement a simple algorithm to approximate the date of the next full moon.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Find Date",
    difficulty: "Advanced",
  },
  // problem--> 154
  {
    id: "dt-get-islamic-year",
    title: "Convert to Islamic Year (Approximate)",
    description:
      "Write a function to approximate the Islamic calendar year from a Gregorian date.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Convert Year",
    difficulty: "Advanced",
  },
  // problem--> 155
  {
    id: "dt-is-date-between-exclusive",
    title: "Check if Date is in Range (Exclusive)",
    description:
      "Write a function to check if a date is between two other dates, excluding the start and end dates.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateToCheck",
        label: "Date to Check",
        type: "text",
        defaultValue: "2024-05-15",
      },
      {
        id: "startDate",
        label: "Start Date",
        type: "text",
        defaultValue: "2024-01-01",
      },
      {
        id: "endDate",
        label: "End Date",
        type: "text",
        defaultValue: "2024-12-31",
      },
    ],
    buttonText: "Check Range",
    difficulty: "Intermediate",
  },
  // problem--> 156
  {
    id: "dt-get-next-leap-year",
    title: "Find Next Leap Year",
    description:
      "Write a function that finds the next leap year after a given date.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Find Year",
    difficulty: "Intermediate",
  },
  // problem--> 157
  {
    id: "dt-get-previous-leap-year",
    title: "Find Previous Leap Year",
    description:
      "Write a function that finds the previous leap year before a given date.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Find Year",
    difficulty: "Intermediate",
  },
  // problem--> 158
  {
    id: "dt-get-time-until-new-year",
    title: "Time Until New Year",
    description:
      "Write a function to calculate the time remaining until the next New Year's Day.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Calculate Time",
    difficulty: "Intermediate",
  },
  // problem--> 159
  {
    id: "dt-get-day-of-week-for-any-date",
    title: "Day of Week for Any Date",
    description:
      "Implement an algorithm (like Zeller's congruence) to determine the day of the week for any given date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "1776-07-04",
      },
    ],
    buttonText: "Get Day",
    difficulty: "Advanced",
  },
  // problem--> 160
  {
    id: "dt-get-first-business-day-of-month",
    title: "Get First Business Day of Month",
    description:
      "Write a function to find the date of the first business day (Mon-Fri) of a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 8 }, // September
    ],
    buttonText: "Find Date",
    difficulty: "Intermediate",
  },
  // problem--> 161
  {
    id: "dt-get-last-business-day-of-month",
    title: "Get Last Business Day of Month",
    description:
      "Write a function to find the date of the last business day (Mon-Fri) of a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 10 }, // November
    ],
    buttonText: "Find Date",
    difficulty: "Intermediate",
  },
  // problem--> 162
  {
    id: "dt-get-calendar-week",
    title: "Get Calendar Week View",
    description:
      "Write a function that, given a date, returns an array of 7 Date objects representing that entire week (e.g., from Sunday to Saturday).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Week",
    difficulty: "Intermediate",
  },
  // problem--> 163
  {
    id: "dt-format-duration-in-words",
    title: "Format Duration in Words",
    description:
      'Write a function that formats a duration in milliseconds into a detailed string like "2 weeks, 3 days, 5 hours".',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "ms",
        label: "Milliseconds",
        type: "number",
        defaultValue: 1500000000,
      },
    ],
    buttonText: "Format",
    difficulty: "Advanced",
  },
  // problem--> 164
  {
    id: "dt-get-number-of-weekends",
    title: "Number of Weekends in Month",
    description:
      "Write a function to count the number of weekend days (Saturdays and Sundays) in a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 7 },
    ],
    buttonText: "Count Weekends",
    difficulty: "Intermediate",
  },
  // problem--> 165
  {
    id: "dt-get-easter-date",
    title: "Calculate Easter Date",
    description:
      "Implement an algorithm (like the Computus algorithm) to calculate the date of Easter for a given year.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 2025 }],
    buttonText: "Calculate",
    difficulty: "Advanced",
  },
  // problem--> 166
  {
    id: "dt-to-json-method",
    title: "The `.toJSON()` Method",
    description:
      "Demonstrate how `.toJSON()` is called by `JSON.stringify`, and that it returns an ISO 8601 string.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Test .toJSON()",
    difficulty: "Intermediate",
  },
  // problem--> 167
  {
    id: "dt-get-hebrew-year",
    title: "Convert to Hebrew Year (Conceptual)",
    description:
      "Explain the concept and complexity of converting a Gregorian date to the Hebrew calendar year.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 168
  {
    id: "dt-get-chinese-zodiac",
    title: "Get Chinese Zodiac Animal",
    description:
      "Write a function that takes a year and returns the corresponding Chinese Zodiac animal.",
    category: "Date and Time Handling",
    inputs: [{ id: "year", label: "Year", type: "number", defaultValue: 1990 }],
    buttonText: "Get Animal",
    difficulty: "Intermediate",
  },
  // problem--> 169
  {
    id: "dt-parse-date-from-text",
    title: "Parse Date from Natural Text",
    description:
      'Conceptually explain the challenges and strategies (using regular expressions or NLP libraries) for parsing dates from natural language text like "next Tuesday at 5pm".',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 170
  {
    id: "dt-format-with-time-ago-library",
    title: 'Using a "Time Ago" Library (Conceptual)',
    description:
      'Explain the benefits of using a library like `date-fns` or `day.js` for creating complex, localized "time ago" strings.',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Intermediate",
  },
  // problem--> 171
  {
    id: "dt-performance-date-vs-now",
    title: "Performance: `new Date()` vs `Date.now()`",
    description:
      "Write a function to benchmark the performance difference between creating a new Date object and just getting the timestamp.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Run Benchmark",
    difficulty: "Advanced",
  },
  // problem--> 172
  {
    id: "dt-get-previous-nth-day",
    title: "Get Previous Nth Day",
    description:
      "Write a function that takes a date and returns the date N days ago.",
    category: "Date and Time Handling",
    inputs: [
      { id: "days", label: "Days Ago", type: "number", defaultValue: 90 },
    ],
    buttonText: "Get Date",
    difficulty: "Intermediate",
  },
  // problem--> 173
  {
    id: "dt-get-next-nth-day",
    title: "Get Next Nth Day",
    description:
      "Write a function that takes a date and returns the date N days from now.",
    category: "Date and Time Handling",
    inputs: [
      { id: "days", label: "Days from Now", type: "number", defaultValue: 100 },
    ],
    buttonText: "Get Date",
    difficulty: "Intermediate",
  },
  // problem--> 174
  {
    id: "dt-create-calendar-month-grid",
    title: "Create Calendar Month Grid",
    description:
      "Write a function that generates a 2D array representing a calendar grid for a given month and year.",
    category: "Date and Time Handling",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2024 },
      { id: "month", label: "Month (0-11)", type: "number", defaultValue: 7 }, // August
    ],
    buttonText: "Generate Grid",
    difficulty: "Advanced",
  },
  // problem--> 175
  {
    id: "dt-get-financial-quarter",
    title: "Get Financial Quarter",
    description:
      "Write a function that takes a date and returns the financial quarter (Q1, Q2, Q3, Q4) it belongs to.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Get Quarter",
    difficulty: "Beginner",
  },
  // problem--> 176
  {
    id: "dt-is-same-time",
    title: "Check if Two Dates Have the Same Time",
    description:
      "Write a function to check if two `Date` objects have the same time component (HH:MM:SS), ignoring the date.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Date 1",
        type: "text",
        defaultValue: "2024-01-01 14:30:00",
      },
      {
        id: "date2",
        label: "Date 2",
        type: "text",
        defaultValue: "2025-12-25 14:30:00",
      },
    ],
    buttonText: "Check Time",
    difficulty: "Intermediate",
  },
  // problem--> 177
  {
    id: "dt-timezone-conversion-library-conceptual",
    title: "Timezone Conversion with Libraries (Conceptual)",
    description:
      'Explain why converting dates between arbitrary timezones (e.g., "America/New_York" to "Asia/Tokyo") is complex and best handled by libraries that use the IANA timezone database.',
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 178
  {
    id: "dt-get-start-of-quarter",
    title: "Get Start of Quarter",
    description:
      "Write a function that takes a date and returns a new `Date` for the first day of that quarter.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-05-20",
      },
    ],
    buttonText: "Get Start",
    difficulty: "Intermediate",
  },
  // problem--> 179
  {
    id: "dt-get-end-of-quarter",
    title: "Get End of Quarter",
    description:
      "Write a function that takes a date and returns a new `Date` for the last day of that quarter.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date",
        type: "text",
        defaultValue: "2024-05-20",
      },
    ],
    buttonText: "Get End",
    difficulty: "Intermediate",
  },
  // problem--> 180
  {
    id: "dt-humanize-date-difference",
    title: "Humanize Date Difference",
    description:
      'Write a function that returns a human-friendly string describing the difference between two dates (e.g., "2 years, 3 months, and 5 days").',
    category: "Date and Time Handling",
    inputs: [
      {
        id: "date1",
        label: "Start Date",
        type: "text",
        defaultValue: "2022-04-20",
      },
      {
        id: "date2",
        label: "End Date",
        type: "text",
        defaultValue: "2024-07-25",
      },
    ],
    buttonText: "Humanize",
    difficulty: "Advanced",
  },
  // problem--> 181
  {
    id: "dt-iterate-over-months-in-range",
    title: "Iterate Over Months in a Date Range",
    description:
      "Write a function that takes a start and end date and calls a callback for each month within that range.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Iterate Months",
    difficulty: "Intermediate",
  },
  // problem--> 182
  {
    id: "dt-get-age-with-months-days",
    title: "Calculate Precise Age",
    description:
      "Write a function that calculates a person's precise age in years, months, and days.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "birthdate",
        label: "Birthdate",
        type: "text",
        defaultValue: "1990-05-20",
      },
    ],
    buttonText: "Calculate Age",
    difficulty: "Advanced",
  },
  // problem--> 183
  {
    id: "dt-parse-date-ddmmyyyy",
    title: "Parse DD-MM-YYYY Date String",
    description:
      "Write a function that reliably parses a date string in `DD-MM-YYYY` format.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Date String",
        type: "text",
        defaultValue: "26-07-2024",
      },
    ],
    buttonText: "Parse Date",
    difficulty: "Intermediate",
  },
  // problem--> 184
  {
    id: "dt-get-next-anniversary",
    title: "Get Next Anniversary",
    description:
      "Write a function that takes a date (e.g., a birthdate) and finds the date of its next anniversary.",
    category: "Date and Time Handling",
    inputs: [
      {
        id: "dateStr",
        label: "Anniversary Date",
        type: "text",
        defaultValue: "2000-02-29",
      },
    ],
    buttonText: "Find Next",
    difficulty: "Intermediate",
  },
  // problem--> 185
  {
    id: "dt-date-serialization-deserialization",
    title: "Date Serialization & Deserialization",
    description:
      "Demonstrate how to properly serialize a Date object to JSON and deserialize it back into a Date object using a reviver function.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Serialize & Deserialize",
    difficulty: "Intermediate",
  },
  // problem--> 186
  {
    id: "dt-get-islamic-date-conceptual",
    title: "Get Islamic Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Islamic Hijri calendar, which is a lunar calendar, and why a library is needed.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 187
  {
    id: "dt-get-hebrew-date-conceptual",
    title: "Get Hebrew Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Hebrew calendar, which is a lunisolar calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 188
  {
    id: "dt-get-persian-date-conceptual",
    title: "Get Persian Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Solar Hijri (Persian) calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 189
  {
    id: "dt-get-indian-national-date-conceptual",
    title: "Get Indian National Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Indian National (Saka) calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 190
  {
    id: "dt-get-coptic-date-conceptual",
    title: "Get Coptic Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Coptic calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 191
  {
    id: "dt-get-ethiopian-date-conceptual",
    title: "Get Ethiopian Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the Ethiopian calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 192
  {
    id: "dt-get-julian-calendar-date-conceptual",
    title: "Get Julian Calendar Date (Conceptual)",
    description:
      "Explain the difference between the Julian calendar and the Gregorian calendar and the challenges in converting between them.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 193
  {
    id: "dt-get-mayan-calendar-date-conceptual",
    title: "Get Mayan Calendar Date (Conceptual)",
    description:
      "Explain the extreme complexity of converting a Gregorian date to the Mayan Long Count calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 194
  {
    id: "dt-get-french-republican-date-conceptual",
    title: "Get French Republican Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the historical French Republican calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 195
  {
    id: "dt-get-byzantine-date-conceptual",
    title: "Get Byzantine Date (Conceptual)",
    description:
      "Explain the challenges of converting a Gregorian date to the historical Byzantine calendar.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 196
  {
    id: "dt-get-world-clock",
    title: "World Clock Display",
    description:
      "Write a function that displays the current time in multiple major cities (e.g., New York, London, Tokyo) simultaneously.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Show World Clock",
    difficulty: "Advanced",
  },
  // problem--> 197
  {
    id: "dt-get-astronomical-julian-date",
    title: "Get Astronomical Julian Date",
    description:
      "Write a function to calculate the Astronomical Julian Date, which is a continuous count of days and fractions from noon Universal Time on January 1, 4713 BC.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Calculate JD",
    difficulty: "Advanced",
  },
  // problem--> 198
  {
    id: "dt-get-modified-julian-date",
    title: "Get Modified Julian Date",
    description:
      "Write a function to calculate the Modified Julian Date (MJD), which is JD - 2400000.5.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Calculate MJD",
    difficulty: "Advanced",
  },
  // problem--> 199
  {
    id: "dt-calculate-sunrise-sunset-conceptual",
    title: "Calculate Sunrise/Sunset (Conceptual)",
    description:
      "Explain the complex astronomical calculations required to determine sunrise and sunset times for a given date and location (latitude/longitude).",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
  // problem--> 200
  {
    id: "dt-get-day-of-week-from-non-date-conceptual",
    title: "Day of Week from Non-Date Info (Conceptual)",
    description:
      "Explain how, given a known date and its day of the week, you can calculate the day of the week for any other date using modulo arithmetic without creating a Date object.",
    category: "Date and Time Handling",
    inputs: [],
    buttonText: "Explain",
    difficulty: "Advanced",
  },
];
