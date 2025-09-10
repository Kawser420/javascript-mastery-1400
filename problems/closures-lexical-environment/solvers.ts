export const solvers: Record<string, Function> = {
    // This needs to be defined at a higher scope to persist across clicks
    'closure-counter': (() => {
        let count = 0; // This variable is "closed over"
        const createCounter = () => {
            // This inner function has access to 'count'
            return () => `Counter is now: ${++count}`;
        };
        // We return the inner function itself, which will be assigned to 'solvers['closure-counter']'
        return createCounter();
    })(),

    'lexical-scope': () => {
        const outerVar = "I am outside!";
        function inner() {
            // Inner function has access to outerVar due to lexical scope
            return `Inner function can access: "${outerVar}"`;
        }
        return inner();
    },

    'private-data-closure': ({ initialName }) => {
        const createPerson = (name) => {
            let privateName = name; // Private variable

            return {
                getName: () => privateName,
                setName: (newName) => {
                    privateName = newName;
                },
            };
        };

        const person = createPerson(initialName);
        const result1 = `Initial name: ${person.getName()}`;
        person.setName('Jane');
        const result2 = `New name: ${person.getName()}`;
        return `${result1}\n${result2}`;
    },
};