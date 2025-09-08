import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const handleDigitClick = (digit: string) => {
        if (waitingForOperand) {
            setDisplay(digit);
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? digit : display + digit);
        }
    };

    const handleDecimalClick = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
            return;
        }
        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleOperatorClick = (nextOperator: string) => {
        const inputValue = parseFloat(display);

        if (currentValue === null) {
            setCurrentValue(inputValue);
        } else if (operator) {
            const result = calculate(currentValue, inputValue, operator);
            setCurrentValue(result);
            setDisplay(String(result));
        }

        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (left: number, right: number, op: string): number => {
        switch (op) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return left / right;
            default: return right;
        }
    };

    const handleEqualsClick = () => {
        if (!operator || currentValue === null) return;
        
        const inputValue = parseFloat(display);
        const result = calculate(currentValue, inputValue, operator);
        
        setDisplay(String(result));
        setCurrentValue(result);
        setOperator(null);
        setWaitingForOperand(false);
    };
    
    const handleClear = () => {
        setDisplay('0');
        setCurrentValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    };

    const handleToggleSign = () => {
        setDisplay(String(parseFloat(display) * -1));
    };

    const handlePercent = () => {
        setDisplay(String(parseFloat(display) / 100));
    };


    const renderButton = (label: string, onClick: () => void, className: string = "btn-ghost") => (
        <button onClick={onClick} className={`btn text-2xl h-20 ${className}`}>
            {label}
        </button>
    );

    return (
        <section id="calculator" className="py-24 px-4 md:px-8 bg-base-100 scroll-mt-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">Scientific Calculator</h2>
                    <p className="mt-4 text-lg text-base-content/70">A handy tool for your quick calculations.</p>
                </div>
                <div className="flex justify-center">
                    <div className="card w-full max-w-sm bg-base-200 shadow-2xl p-4">
                        <div className="calculator-display bg-base-300 rounded-lg p-4 mb-4 text-right text-5xl font-mono overflow-x-auto">
                            {display}
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {renderButton(display !== '0' ? 'C' : 'AC', handleClear, 'btn-accent')}
                            {renderButton('±', handleToggleSign, 'btn-accent')}
                            {renderButton('%', handlePercent, 'btn-accent')}
                            {renderButton('÷', () => handleOperatorClick('/'), 'btn-primary')}
                            
                            {renderButton('7', () => handleDigitClick('7'))}
                            {renderButton('8', () => handleDigitClick('8'))}
                            {renderButton('9', () => handleDigitClick('9'))}
                            {renderButton('×', () => handleOperatorClick('*'), 'btn-primary')}

                            {renderButton('4', () => handleDigitClick('4'))}
                            {renderButton('5', () => handleDigitClick('5'))}
                            {renderButton('6', () => handleDigitClick('6'))}
                            {renderButton('-', () => handleOperatorClick('-'), 'btn-primary')}

                            {renderButton('1', () => handleDigitClick('1'))}
                            {renderButton('2', () => handleDigitClick('2'))}
                            {renderButton('3', () => handleDigitClick('3'))}
                            {renderButton('+', () => handleOperatorClick('+'), 'btn-primary')}
                            
                            <button onClick={() => handleDigitClick('0')} className="btn col-span-2 text-2xl h-20 btn-ghost">0</button>
                            {renderButton('.', handleDecimalClick)}
                            {renderButton('=', handleEqualsClick, 'btn-primary')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
