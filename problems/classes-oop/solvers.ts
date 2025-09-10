
// This file MUST be pure JavaScript. No imports, no types.

// FIX: Cast window to any to attach property in non-module script context.
(window as any).classesOopSolvers = {
    'es6-classes': ({ name }: { name: string }) => {
        class Person {
            // FIX: Add property declaration
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            greet() {
                return `Hello, my name is ${this.name}.`;
            }
        }
        const p = new Person(name);
        return p.greet();
    },
    'class-inheritance': ({ name, subject }: { name: string, subject: string }) => {
        class Person {
            // FIX: Add property declaration
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            greet() {
                return `Hello, my name is ${this.name}.`;
            }
        }
        class Student extends Person {
            // FIX: Add property declaration
            subject: string;
            constructor(name: string, subject: string) {
                super(name);
                this.subject = subject;
            }
            study() {
                return `${this.name} is studying ${this.subject}.`;
            }
        }
        const s = new Student(name, subject);
        return `${s.greet()} ${s.study()}`;
    },
    'class-static-methods': () => {
        class MathHelper {
            static add(a: number, b: number) {
                return a + b;
            }
        }
        return `Result of static method MathHelper.add(5, 10): ${MathHelper.add(5, 10)}`;
    },
    'class-getters-setters': ({ firstName, lastName }: { firstName: string, lastName: string }) => {
        class Person {
            // FIX: Add property declarations
            firstName: string;
            lastName: string;
            constructor(firstName: string, lastName: string) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            get fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
            set fullName(name: string) {
                const parts = name.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }

        const p = new Person(firstName, lastName);
        const initialFullName = p.fullName;
        p.fullName = "Jane Smith";
        const newFullName = p.fullName;

        return `Initial: ${initialFullName}. After setting to 'Jane Smith', new name is: ${newFullName}`;
    },
};