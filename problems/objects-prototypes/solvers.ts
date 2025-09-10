
// FIX: Removed import from non-module script. `parseJSON` is globally available on `window`.

export const solvers = {
    'simple-object-access': ({ json, key }: { json: string, key: string }) => {
        const obj = window.parseJSON(json);
        if (key in obj) {
            return obj[key];
        }
        throw new Error(`Key "${key}" not found in object.`);
    },
    'get-object-keys': ({ json }: { json: string }) => Object.keys(window.parseJSON(json)).join(', '),
    'get-object-values': ({ json }: { json: string }) => Object.values(window.parseJSON(json)).join(', '),
    'merge-objects': ({ json1, json2 }: { json1: string, json2: string }) => JSON.stringify({ ...window.parseJSON(json1), ...window.parseJSON(json2) }),
};