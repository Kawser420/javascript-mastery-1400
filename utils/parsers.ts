
// This file MUST be pure JavaScript. No imports, no types.

const parseNumber = (input: any) => {
    const num = typeof input === 'string' ? parseFloat(input) : input;
    if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
    return num;
};

const parseNumberArray = (input: string) => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => parseNumber(item.trim()));
};

const parseStringArray = (input: string) => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    return input.split(',').map(item => item.trim());
};

const parseJSON = (input: string) => {
    try {
        return JSON.parse(input);
    } catch (e: any) {
        throw new Error(`Invalid JSON format: ${e.message}`);
    }
};

// Expose parsers on the window object so other scripts can use them without imports
// FIX: Cast window to any to attach properties in non-module script context.
(window as any).parseNumber = parseNumber;
(window as any).parseNumberArray = parseNumberArray;
(window as any).parseStringArray = parseStringArray;
(window as any).parseJSON = parseJSON;