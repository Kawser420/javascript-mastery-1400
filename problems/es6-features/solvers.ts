
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers: Record<string, Function> = {
    'arrow-function-map': ({ arr }: { arr: string }) => JSON.stringify(window.parseNumberArray(arr).map(n => n * 2)),
    'template-literals': ({ name, item }: { name: string, item: string }) => `Hello, ${name}!\nYou have brought some ${item}.`,
    'array-destructuring': ({ arr }: { arr: string }) => {
        const [first, second, third] = window.parseStringArray(arr);
        return `First: ${first}, Second: ${second}, Third: ${third}`;
    },
    'object-destructuring': ({ json }: { json: string }) => {
        const { name, age } = window.parseJSON(json);
        return `Name: ${name}, Age: ${age}`;
    },
    'rest-parameters': ({ args }: { args: string }) => {
        const sum = (...numbers: number[]) => numbers.reduce((acc, val) => acc + val, 0);
        return sum(...window.parseNumberArray(args));
    },
    'spread-operator-arrays': ({ arr1, arr2 }: { arr1: string, arr2: string }) => {
        const combined = [...window.parseStringArray(arr1), ...window.parseStringArray(arr2)];
        return `[${combined.join(', ')}]`;
    },
};