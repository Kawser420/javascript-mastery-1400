
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers = {
    'fp-map-double': ({ arr }: { arr: string }) => {
        const numbers = window.parseNumberArray(arr);
        const doubler = (n: number) => n * 2;
        return `[${numbers.map(doubler).join(', ')}]`;
    },
    'fp-filter-even': ({ arr }: { arr: string }) => {
        const numbers = window.parseNumberArray(arr);
        const isEven = (n: number) => n % 2 === 0;
        return `[${numbers.filter(isEven).join(', ')}]`;
    },
    'fp-reduce-sum': ({ arr }: { arr: string }) => {
        const numbers = window.parseNumberArray(arr);
        const sumReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
        return numbers.reduce(sumReducer, 0);
    },
    'currying-simple': ({num1, num2}: { num1: any, num2: any }) => {
        const add = (a: number) => (b: number) => a + b;
        return `Result of add(${num1})(${num2}) is ${add(window.parseNumber(num1))(window.parseNumber(num2))}`;
    },
};