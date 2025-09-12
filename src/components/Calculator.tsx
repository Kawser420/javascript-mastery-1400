import React, { useState } from 'react';

// Define components outside to prevent re-creation on render
const CalculatorButton: React.FC<{
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  span?: number;
}> = ({ onClick, className = "btn-ghost", children, span = 1 }) => (
  <button
    onClick={onClick}
    className={`btn h-16 text-xl ${className}`}
    style={{ gridColumn: `span ${span}` }}
  >
    {children}
  </button>
);

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');
    const [memory, setMemory] = useState(0);

    const handleInput = (value: string) => {
        if (display === 'Error') {
            setDisplay(value);
            setExpression(value);
            return;
        }
        if (display === '0' && value !== '.') {
            setDisplay(value);
            setExpression(value);
        } else {
            setDisplay(display + value);
            setExpression(expression + value);
        }
    };
    
    const handleOperator = (op: string) => {
        if (display === 'Error') return;
        const lastChar = expression.trim().slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            setExpression(expression.slice(0, -1) + op);
            setDisplay(display.slice(0, -1) + op);
        } else {
            setExpression(expression + op);
            setDisplay(display + op);
        }
    };
    
    const calculate = () => {
        if (!expression || display === 'Error') return;
        try {
            // A more controlled evaluation than new Function()
            // This is still not perfectly safe for production but better than direct eval
            let safeExpr = expression
                .replace(/π/g, 'Math.PI')
                .replace(/e/g, 'Math.E')
                .replace(/\^/g, '**')
                .replace(/√/g, 'Math.sqrt')
                .replace(/log/g, 'Math.log10')
                .replace(/ln/g, 'Math.log')
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan');
            
            // Basic sanitization
            if (/[^0-9\s()+\-*/.,%MathEPIsqrtpowlog10tan]/g.test(safeExpr)) {
                throw new Error("Invalid characters in expression");
            }
            
            const result = new Function(`return ${safeExpr}`)();

            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Invalid calculation");
            }
            
            setDisplay(String(result));
            setExpression(String(result));
        } catch (error) {
            setDisplay('Error');
            setExpression('');
        }
    };

    const handleFunction = (func: string) => {
        if (display === 'Error') return;
        try {
            const currentVal = parseFloat(display);
            if (isNaN(currentVal)) return;

            let result;
            switch(func) {
                case 'sqrt': result = Math.sqrt(currentVal); break;
                case 'sq': result = Math.pow(currentVal, 2); break;
                case 'inv': result = 1 / currentVal; break;
                case 'fact':
                    if (currentVal < 0 || !Number.isInteger(currentVal)) throw new Error("Factorial is for non-negative integers.");
                    let f = 1;
                    for (let i = 2; i <= currentVal; i++) f *= i;
                    result = f;
                    break;
                default: return;
            }
            setDisplay(String(result));
            setExpression(String(result));
        } catch (e: any) {
            setDisplay('Error');
            setExpression(e.message || '');
        }
    };
    
    const handleClear = () => { setDisplay('0'); setExpression(''); };
    const handleBackspace = () => {
        if (display === 'Error' || display.length === 1) {
            handleClear();
        } else {
            setDisplay(display.slice(0, -1));
            setExpression(expression.slice(0, -1));
        }
    };

    const handleMemory = (op: string) => {
        const currentVal = parseFloat(display);
        if (isNaN(currentVal) && op !== 'MR' && op !== 'MC') return;
        
        switch(op) {
            case 'M+': setMemory(memory + currentVal); break;
            case 'M-': setMemory(memory - currentVal); break;
            case 'MR': setDisplay(String(memory)); setExpression(String(memory)); break;
            case 'MC': setMemory(0); break;
        }
    };

    return (
        <section id="calculator" className="py-24 px-4 md:px-8 bg-base-100 scroll-mt-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">Scientific Calculator</h2>
                    <p className="mt-4 text-lg text-base-content/70">A powerful tool for your complex calculations.</p>
                </div>
                <div className="flex justify-center">
                    <div className="card w-full max-w-lg bg-base-200 shadow-2xl p-4">
                        <div className="calculator-display bg-base-300 rounded-lg p-4 mb-4 text-right text-5xl font-mono overflow-x-auto break-all">
                            {display}
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <CalculatorButton onClick={() => handleMemory('MC')} className="btn-accent">MC</CalculatorButton>
                            <CalculatorButton onClick={() => handleMemory('M+')} className="btn-accent">M+</CalculatorButton>
                            <CalculatorButton onClick={() => handleMemory('M-')} className="btn-accent">M-</CalculatorButton>
                            <CalculatorButton onClick={() => handleMemory('MR')} className="btn-accent">MR</CalculatorButton>
                            <CalculatorButton onClick={handleBackspace} className="btn-secondary">⌫</CalculatorButton>

                            <CalculatorButton onClick={() => handleInput('sin(')} className="btn-accent">sin</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('cos(')} className="btn-accent">cos</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('tan(')} className="btn-accent">tan</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('log(')} className="btn-accent">log</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('ln(')} className="btn-accent">ln</CalculatorButton>

                            <CalculatorButton onClick={() => handleFunction('sq')} className="btn-accent">x²</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('^')} className="btn-accent">xʸ</CalculatorButton>
                            <CalculatorButton onClick={() => handleFunction('sqrt')} className="btn-accent">√x</CalculatorButton>
                             <CalculatorButton onClick={() => handleFunction('inv')} className="btn-accent">1/x</CalculatorButton>
                            <CalculatorButton onClick={() => handleFunction('fact')} className="btn-accent">x!</CalculatorButton>
                            
                            <CalculatorButton onClick={() => handleInput('(')} className="btn-accent">(</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput(')')} className="btn-accent">)</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('π')} className="btn-ghost">π</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('e')} className="btn-ghost">e</CalculatorButton>
                            <CalculatorButton onClick={handleClear} className="btn-secondary">AC</CalculatorButton>

                            <CalculatorButton onClick={() => handleInput('7')}>7</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('8')}>8</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('9')}>9</CalculatorButton>
                            <CalculatorButton onClick={() => handleOperator('/')} className="btn-primary">÷</CalculatorButton>
                           
                            <CalculatorButton onClick={() => handleInput('4')}>4</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('5')}>5</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('6')}>6</CalculatorButton>
                            <CalculatorButton onClick={() => handleOperator('*')} className="btn-primary">×</CalculatorButton>

                            <CalculatorButton onClick={() => handleInput('1')}>1</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('2')}>2</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('3')}>3</CalculatorButton>
                            <CalculatorButton onClick={() => handleOperator('-')} className="btn-primary">-</CalculatorButton>
                            
                            <CalculatorButton onClick={() => handleInput('0')} span={2}>0</CalculatorButton>
                            <CalculatorButton onClick={() => handleInput('.')}>.</CalculatorButton>
                            <CalculatorButton onClick={() => handleOperator('+')} className="btn-primary">+</CalculatorButton>

                             <CalculatorButton onClick={calculate} className="btn-primary" span={5}>=</CalculatorButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
