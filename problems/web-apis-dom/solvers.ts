export const solvers: Record<string, Function> = {
    'dom-get-element-by-id': () => `(Conceptual) Would run: document.getElementById('some-id').textContent = 'New Text!';`,
    'dom-addeventlistener': () => `(Conceptual) A button would have a click listener attached. When clicked, it would trigger alert('Button clicked!');`,
    'dom-toggle-class': () => `(Conceptual) An element's classList would have the 'highlight' class toggled on each click.`,
    'localstorage-set-get': ({key, value}) => {
        try {
            localStorage.setItem(key, value);
            const retrieved = localStorage.getItem(key);
            return `Set '${key}' to '${value}'. Retrieved value is '${retrieved}'.`;
        } catch (e) {
            return `LocalStorage is not available in this environment.`;
        }
    },
};