export const solvers: Record<string, Function> = {
    'event-bubbling': () => `(Conceptual) Three nested divs. Clicking the innermost one would log messages in this order: 'Inner clicked', 'Middle clicked', 'Outer clicked'.`,
    'event-delegation': () => `(Conceptual) One listener on a UL element. Clicking any LI inside it would log the text of the specific LI that was clicked by checking event.target.`,
    'stop-propagation': () => `(Conceptual) Three nested divs. Clicking the innermost one would log 'Inner clicked' and 'Middle clicked', but the 'Outer' listener would NOT fire because the middle one called event.stopPropagation().`,
};