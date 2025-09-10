
// FIX: Removed import from non-module script. Parsers are globally available on `window`.

export const solvers = {
    'reverse-string': ({ str }: { str: string }) => str.split('').reverse().join(''),
    'find-longest-word': ({ sentence }: { sentence: string }) => {
        return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
    },
    'remove-duplicates-from-array': ({ arr }: { arr: string }) => [...new Set(window.parseStringArray(arr))].join(', '),
    'array-chunking': ({ arr, size }: { arr: string, size: any }) => {
        const array = window.parseStringArray(arr);
        const s = window.parseNumber(size);
        if (s <= 0) throw new Error("Chunk size must be positive.");
        const chunked = [];
        for (let i = 0; i < array.length; i += s) {
            chunked.push(array.slice(i, i + s));
        }
        return JSON.stringify(chunked);
    },
};