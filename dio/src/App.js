import { Container, Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
     setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')                             //SOMA
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleSubtracionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')                             //SUBTRAÇÃO
      setOperation('-')
    }else {
      const subtracion = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtracion));
    }
  }

  

  const handleMultiplicationNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')                             //MULTIPLICAÇÃOO
      setOperation('*')
    }else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')                             //DIVISAO
      setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
    }
  }
  const handleRemove = () => {
    if(currentNumber.length > 1){
      setCurrentNumber(currentNumber.slice(0, -1));
    } else{
      setCurrentNumber('0')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' &&  operation !== '' && currentNumber !== ''){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleSubtracionNumbers();
            break;
          case '*':
            handleMultiplicationNumbers();
            break;
          case '/':
            handleDivisionNumbers();
            break;
          default:
          break;
        } 
    }
  }


  return (
    <>
      <Container>
        <Content>
          <Input  value={currentNumber}/>
          <Row>
            <Button label="*" onclick={handleMultiplicationNumbers} />
            <Button label="/" onclick={handleDivisionNumbers}/>
            <Button label="C" onclick={handleOnClear}/>
            <Button label="<" onclick={handleRemove} />
          </Row>
          <Row>
            <Button label="7" onclick={() => handleAddNumber('7')}/>
            <Button label="8" onclick={() => handleAddNumber('8')}/>
            <Button label="9" onclick={() => handleAddNumber('9')}/>
            <Button label="-" onclick={handleSubtracionNumbers}/>
          </Row>
          <Row>
            <Button label="4" onclick={() => handleAddNumber('4')}/>
            <Button label="5" onclick={() => handleAddNumber('5')}/>
            <Button label="6" onclick={() => handleAddNumber('6')}/>
            <Button label="+" onclick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="1" onclick={() => handleAddNumber('1')}/>
            <Button label="2" onclick={() => handleAddNumber('2')}/>
            <Button label="3" onclick={() => handleAddNumber('3')}/>
            <Button label="=" onclick={handleEquals}/>
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default App;
