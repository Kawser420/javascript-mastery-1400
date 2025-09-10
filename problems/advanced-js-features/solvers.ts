export const solvers: Record<string, Function> = {
    'generators-basic': () => {
        function* numberGenerator() {
            yield 1;
            yield 2;
            yield 3;
        }
        const gen = numberGenerator();
        const results = [
            `First .next(): ${JSON.stringify(gen.next())}`,
            `Second .next(): ${JSON.stringify(gen.next())}`,
            `Third .next(): ${JSON.stringify(gen.next())}`,
            `Fourth .next(): ${JSON.stringify(gen.next())}`,
        ];
        return results.join('\n');
    },
    'symbol-data-type': () => {
        const id = Symbol('id');
        const user = { 
            name: 'Test',
            [id]: 123 
        };
        const result1 = `Value of symbol property: ${user[id]}`;
        const result2 = `Object.keys() doesn't see symbols: ${Object.keys(user)}`;
        const result3 = `JSON.stringify() ignores symbols: ${JSON.stringify(user)}`;
        return `${result1}\n${result2}\n${result3}`;
    },
    'proxy-basic': () => {
        const target = {
            message: "hello",
        };

        const handler = {
            get(target, prop, receiver) {
                console.log(`GET operation on property: ${prop}`);
                return `Logged GET on '${prop}', value is: ${target[prop]}`;
            },
            set(target, prop, value) {
                console.log(`SET operation on property: ${prop} to value: ${value}`);
                target[prop] = value;
                return true; // Indicates success
            }
        };

        const proxy = new Proxy(target, handler);
        const getResult = proxy.message; // Triggers the 'get' trap
        proxy.message = "world"; // Triggers the 'set' trap
        const getResult2 = proxy.message;
        
        return `${getResult}\nAfter setting: ${getResult2}`;
    },
};