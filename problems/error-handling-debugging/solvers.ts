
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers: Record<string, Function> = {
    'error-handling-try-catch': ({json}: { json: string }) => {
        try {
            const data = JSON.parse(json); // Use built-in parse to trigger error
            return `JSON is valid! Name: ${data.name}`;
        } catch(e: any) {
            return `Caught an error: ${e.message}`;
        }
    },
    'custom-error': ({num}: { num: any }) => {
        function checkPositive(n: number) {
            if (n < 0) throw new Error("Number cannot be negative.");
            return "Number is positive!";
        }
        try {
            return checkPositive(window.parseNumber(num));
        } catch(e: any) {
            return `Caught custom error: ${e.message}`;
        }
    },
};