
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers: Record<string, Function> = {
    'factorial-of-number-recursive': ({ num }: { num: any }) => {
        const n = window.parseNumber(num);
        if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
        
        function factorial(x: number): number {
            // Base case
            if (x === 0) {
                return 1;
            }
            // Recursive case
            return x * factorial(x - 1);
        }

        return factorial(n);
    },
    'fibonacci-sequence-recursive': ({ count }: { count: any }) => {
        const n = window.parseNumber(count);
        if (n < 0) throw new Error("Input must be a non-negative integer.");

        function fib(x: number): number {
            // Base cases
            if (x <= 1) {
                return x;
            }
            // Recursive case
            return fib(x - 1) + fib(x - 2);
        }

        return fib(n);
    },
    'sum-array-recursive': ({ arr }: { arr: string }) => {
        const numbers = window.parseNumberArray(arr);

        function sum(array: number[]): number {
            // Base case
            if (array.length === 0) {
                return 0;
            }
            // Recursive case
            return array[0] + sum(array.slice(1));
        }

        return sum(numbers);
    },
};