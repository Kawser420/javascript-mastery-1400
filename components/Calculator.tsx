
import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [expression, setExpression] = useState('');
    const [display, setDisplay] = useState('0');

    const handleInput = (value: string) => {
        if (display === 'Error' || (display === '0' && value !== '.')) {
             setDisplay(value);
             setExpression(value);
        } else {
            setDisplay(display + value);
            setExpression(expression + value);
        }
    };

    const handleOperator = (op: string) => {
        if (display === 'Error') return;
        const lastChar = expression.slice(-1);
        // Avoid double operators
        if (['+', '-', '*', '/'].includes(lastChar)) {
            setExpression(expression.slice(0, -1) + op);
             setDisplay(display.slice(0, -1) + op);
        } else {
            setExpression(expression + op);
            setDisplay(display + op);
        }
    };
    
    const handleFunction = (func: string) => {
        if (display === 'Error') return;
        let funcExpression = '';
        let funcDisplay = '';

        switch(func) {
            case 'sqrt':
                funcExpression = 'Math.sqrt(';
                funcDisplay = '√(';
                break;
            case 'sq':
                funcExpression = `Math.pow(${expression}, 2)`;
                funcDisplay = `sqr(${display})`;
                calculate(funcExpression, funcDisplay);
                return;
            case 'pow':
                funcExpression = '**';
                funcDisplay = '^';
                handleOperator(funcDisplay);
                return;
            case 'sin':
            case 'cos':
            case 'tan':
            case 'log':
            case 'ln':
                funcExpression = `Math.${func}(`;
                funcDisplay = `${func}(`;
                break;
            default:
                return;
        }

        if (display === '0') {
            setExpression(funcExpression);
            setDisplay(funcDisplay);
        } else {
            setExpression(expression + funcExpression);
            setDisplay(display + funcDisplay);
        }
    }


    const calculate = (exprToCalc = expression, displayToSet = '') => {
        if (!exprToCalc || display === 'Error') return;
        try {
            // Sanitize the expression for safety
            // Replace ^ with ** for exponentiation
            let safeExpr = exprToCalc.replace(/\^/g, '**');
            safeExpr = safeExpr.replace(/√/g, 'Math.sqrt');
            safeExpr = safeExpr.replace(/π/g, 'Math.PI');
            safeExpr = safeExpr.replace(/e/g, 'Math.E');
            safeExpr = safeExpr.replace(/ln/g, 'Math.log');
            safeExpr = safeExpr.replace(/log/g, 'Math.log10');


            // Use the Function constructor for safer evaluation than eval()
            const result = new Function(`return ${safeExpr}`)();

            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Invalid calculation");
            }
            
            const finalDisplay = displayToSet || String(result);
            setDisplay(finalDisplay);
            setExpression(String(result));
        } catch (error) {
            setDisplay('Error');
            setExpression('');
        }
    };
    
    const handleClear = () => {
        setDisplay('0');
        setExpression('');
    };
    
    const handleBackspace = () => {
        if (display === 'Error' || display.length === 1) {
            handleClear();
        } else {
            setDisplay(display.slice(0, -1));
            setExpression(expression.slice(0, -1));
        }
    };

    const renderButton = (label: string, onClick: () => void, className: string = "btn-ghost") => (
        <button onClick={onClick} className={`btn text-xl h-16 ${className}`}>
            {label}
        </button>
    );

    return (
        <section id="calculator" className="py-24 px-4 md:px-8 bg-base-100 scroll-mt-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">Scientific Calculator</h2>
                    <p className="mt-4 text-lg text-base-content/70">A powerful tool for your complex calculations.</p>
                </div>
                <div className="flex justify-center">
                    <div className="card w-full max-w-md bg-base-200 shadow-2xl p-4">
                        <div className="calculator-display bg-base-300 rounded-lg p-4 mb-4 text-right text-4xl font-mono overflow-x-auto break-all">
                            {display}
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {/* Row 1 */}
                            {renderButton('(', () => handleInput('('), 'btn-accent')}
                            {renderButton(')', () => handleInput(')'), 'btn-accent')}
                            {renderButton('√', () => handleFunction('sqrt'), 'btn-accent')}
                            {renderButton('x²', () => handleFunction('sq'), 'btn-accent')}
                            {renderButton('xʸ', () => handleFunction('pow'), 'btn-accent')}
                            
                             {/* Row 2 */}
                            {renderButton('sin', () => handleFunction('sin'), 'btn-accent')}
                            {renderButton('cos', () => handleFunction('cos'), 'btn-accent')}
                            {renderButton('tan', () => handleFunction('tan'), 'btn-accent')}
                            {renderButton('log', () => handleFunction('log'), 'btn-accent')}
                            {renderButton('ln', () => handleFunction('ln'), 'btn-accent')}

                            {/* Row 3 */}
                            {renderButton('AC', handleClear, 'btn-secondary')}
                            {renderButton('⌫', handleBackspace, 'btn-secondary')}
                            {renderButton('π', () => handleInput('π'), 'btn-ghost')}
                            {renderButton('e', () => handleInput('e'), 'btn-ghost')}
                            {renderButton('÷', () => handleOperator('/'), 'btn-primary')}
                            
                            {/* Row 4 */}
                            {renderButton('7', () => handleInput('7'))}
                            {renderButton('8', () => handleInput('8'))}
                            {renderButton('9', () => handleInput('9'))}
                            {renderButton('×', () => handleOperator('*'), 'btn-primary')}
                            
                            {/* Row 5 */}
                            {renderButton('4', () => handleInput('4'))}
                            {renderButton('5', () => handleInput('5'))}
                            {renderButton('6', () => handleInput('6'))}
                            {renderButton('-', () => handleOperator('-'), 'btn-primary')}

                            {/* Row 6 */}
                            {renderButton('1', () => handleInput('1'))}
                            {renderButton('2', () => handleInput('2'))}
                            {renderButton('3', () => handleInput('3'))}
                            {renderButton('+', () => handleOperator('+'), 'btn-primary')}
                            
                            {/* Row 7 */}
                            <button onClick={() => handleInput('0')} className="btn col-span-2 text-xl h-16 btn-ghost">0</button>
                            {renderButton('.', () => handleInput('.'))}
                            <button onClick={() => calculate()} className="btn h-16 btn-primary text-2xl">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
