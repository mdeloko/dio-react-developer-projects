import Button from "./components/Button"
import Screen from "./components/Screen"

import './App.css'
import { useState } from "react"

function App() {
  const [firstNumber,setFirstNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operation,setOperation] = useState('');

  function concatNumber(number){
    setCurrentNumber(prev =>`${prev==='0'?number:prev+number}`);
  }
  function eraseAll(){
    setOperation('');
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  function eraseLast(){
    setCurrentNumber(currentNumber.length==1?'0':currentNumber.slice(0,currentNumber.length-1))
  }
  function addNumber(){
    if(firstNumber==='0' && operation===''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber)+Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  function subNumber(){
    if(firstNumber==='0' && operation===''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber)-Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  function mulNumber(){
    if(firstNumber==='0' && operation===''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const sum = Number(firstNumber)*Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  function divNumber(){
    if(firstNumber==='0' && operation===''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber)/Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  function equals(){
    switch(operation){
      case '+':
        addNumber()
        break;
      case '-':
        subNumber();
        break;
      case '*':
        mulNumber()
        break;
      case '/':
        divNumber()
        break;
      default:
        break;
    }
  }
  
  return (
  <div className="container">
    <h1>Calculadora em React!</h1>
    <Screen value={currentNumber}/>
    <div className="inline-buttons">
      <Button label='C' handle={()=>eraseAll()}/>
      <Button label='BkSpc' handle={()=>eraseLast()}/>
    </div>
    <div className="keyboard">
      <Button label="7" handle={()=>concatNumber('7')}/>
      <Button label="8" handle={()=>concatNumber('8')}/>
      <Button label="9" handle={()=>concatNumber('9')}/>
      <Button label="/" handle={()=>divNumber()}/>
      <Button label="4" handle={()=>concatNumber('4')}/>
      <Button label="5" handle={()=>concatNumber('5')}/>
      <Button label="6" handle={()=>concatNumber('6')}/>
      <Button label="*" handle={()=>mulNumber()}/>
      <Button label="1" handle={()=>concatNumber('1')}/>
      <Button label="2" handle={()=>concatNumber('2')}/>
      <Button label="3" handle={()=>concatNumber('3')}/>
      <Button label="-" handle={()=>subNumber()}/>
      <Button label="0" handle={()=>concatNumber('0')}/>
      <Button label="," handle={()=>concatNumber(',')}/>
      <Button label="=" handle={()=>equals()}/>
      <Button label="+" handle={()=>addNumber()}/>
    </div>
  </div>
  )
}

export default App
