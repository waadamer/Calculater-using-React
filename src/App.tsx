import { useState } from 'react';
import './App.css'
import MathematicalOperation from './components/math.op/math.op';
import Number from './components/number/number';


function App() {

  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const Reset = () => {
    setInput("");
    setResult(null);
  }
  const handleNumberClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperationClick = (operation: string) => {
    setInput((prevInput) => prevInput + operation);
  };

  const handleCalculation = () => {
    let num1 = "";
    let num2 = "";
    let operation = "";

    for (let i = 0; i < input.length; i++) {
      if (["+", "-", "*", "/", "%"].includes(input[i])) {
        num1 = input.slice(0, i);
        num2 = input.slice(i + 1);
        operation = input[i];
        break;
      }
    }
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      alert("Invalid operation");
      Reset();
    }
    else {
      let calcResult: number = 0;
      switch (operation) {
        case "+": calcResult = number1 + number2; break;
        case "-": calcResult = number1 - number2; break;
        case "*": calcResult = number1 * number2; break;
        case "%": calcResult = number1 % number2; break;
        case "/":
          if (number2 !== 0) {
            calcResult = number1 / number2;
          }
          else {
            alert("Cannot divide by zero");
            Reset()
            return;
          }
          break;
        default: alert("Invalid operation");
          Reset()
          return;
      }

      setResult(calcResult.toString());
      setInput("")
    };

  }


  return (

    <div className='Calculater'>
      <div className='result'>{input == "" ? result : input}</div>

      <div>
        <hr />
        <button className='Reset' onClick={Reset}>Ac</button>
        <MathematicalOperation Op={' = '} onClick={handleCalculation} />
        <hr />
        <Number number={7} onClick={handleNumberClick} />
        <Number number={8} onClick={handleNumberClick} />
        <Number number={9} onClick={handleNumberClick} />
        <MathematicalOperation Op={' * '} onClick={handleOperationClick} />
        <hr />
        <Number number={4} onClick={handleNumberClick} />
        <Number number={5} onClick={handleNumberClick} />
        <Number number={6} onClick={handleNumberClick} />
        <MathematicalOperation Op={' - '} onClick={handleOperationClick} />
        <hr />
        <Number number={1} onClick={handleNumberClick} />
        <Number number={2} onClick={handleNumberClick} />
        <Number number={3} onClick={handleNumberClick} />
        <MathematicalOperation Op={' + '} onClick={handleOperationClick} />
        <hr />
        <Number number={0} onClick={handleNumberClick} />
        <Number number={"."} onClick={handleNumberClick} />
        <MathematicalOperation Op={' / '} onClick={handleOperationClick} />
        <MathematicalOperation Op={' % '} onClick={handleOperationClick} />


      </div>
    </div>

  )
}


export default App