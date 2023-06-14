import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Display from './Components/Display/Display';

const App = () => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [prevDisplay, setPrevDisplay] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [didOperated, setDidOperated] = useState(false);

  const handleInsertNumber = (value) => {
    setDisplayNumber(didOperated ? value : displayNumber === 0 ? value : displayNumber + value); //primeiro checa se ja foi feita alguma operação, para não concatenar os valores, depois checa se o valor é 0, para trocá-lo pelo número
    setDidOperated(false);
  };

  const handleClear = () => {
    setDisplayNumber(0);
    setPrevDisplay('');
    setPrevNumber('');
    setOperation('');
    setDidOperated(false);
  };

  const handleInsertOperation = (value) => {
    setPrevNumber(displayNumber);
    setPrevDisplay(displayNumber + value);
    setOperation(value);
    setDidOperated(true); // serve para limpar o display ao inserir mais números após a operação
  };

  const handleEndOperation = () => {
    if (prevNumber === '' && operation === '') {
      setDisplayNumber(displayNumber);
    } else {
      switch (operation) {
        case '/':
          setDisplayNumber(parseFloat(prevNumber / displayNumber));
          break;
        case 'x':
          setDisplayNumber(parseFloat(prevNumber * displayNumber));
          break;
        case '-':
          setDisplayNumber(parseFloat(prevNumber - displayNumber));
          break;
        case '+':
          setDisplayNumber(parseFloat(prevNumber) + parseFloat(displayNumber));
          break;
        default:
          setDisplayNumber(prevNumber);
      }
    }

    setPrevDisplay('');
    setDidOperated(true);
    setPrevNumber('');
  };

  return (
    <div className="App">
      <Display previous={prevDisplay} atual={displayNumber} />
      <div className="buttonList">
        <Button value="" />
        <Button value="" />
        <Button onClick={handleClear} value="C" />
        <Button onClick={() => handleInsertOperation('/')} value="/" />
        <Button onClick={() => handleInsertNumber('7')} value="7" />
        <Button onClick={() => handleInsertNumber('8')} value="8" />
        <Button onClick={() => handleInsertNumber('9')} value="9" />
        <Button onClick={() => handleInsertOperation('x')} value="x" />
        <Button onClick={() => handleInsertNumber('4')} value="4" />
        <Button onClick={() => handleInsertNumber('5')} value="5" />
        <Button onClick={() => handleInsertNumber('6')} value="6" />
        <Button onClick={() => handleInsertOperation('-')} value="-" />
        <Button onClick={() => handleInsertNumber('1')} value="1" />
        <Button onClick={() => handleInsertNumber('2')} value="2" />
        <Button onClick={() => handleInsertNumber('3')} value="3" />
        <Button onClick={() => handleInsertOperation('+')} value="+" />
        <Button value="" />
        <Button onClick={() => handleInsertNumber('0')} value="0" />
        <Button value="" />
        <Button onClick={handleEndOperation} value="=" />
      </div>
    </div>
  );
};

export default App;