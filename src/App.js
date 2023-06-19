import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Display from './Components/Display/Display';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      displayNumber: 0,
      prevDisplay: "",
      prevNumber: "",
      operation: "",
      didOperated: false
    }
  } 

  componentDidMount() {
    document.addEventListener("keydown", this.handleInsertKey)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleInsertKey)
  }

  handleInsertKey = (event) => {
    const key = event.key
    const windowSize = window.innerWidth >= 1200? 18: window.innerWidth >= 600? 14 : window.innerWidth >=400? 9 : 7 //pega o tamanho da tela para definir o numero máximo de caracteres na calculadura
    if (!isNaN(key)){ //validação feita para não inserir outros valores além de números
      if(this.state.displayNumber.length > windowSize && !this.state.didOperated){
        event.preventDefault()
      } else {
        this.setState({
          displayNumber: this.state.didOperated? key : this.state.displayNumber === 0? key: this.state.displayNumber + key, // primeiro checa se ja foi feita alguma operação, para não concatenar os valores, depois checa se o valor é 0, para trocá-lo pelo número
          didOperated: false
        })
      }
    } 
    else if (key.match(/[+\-*/]/)) {
      this.handleInsertOperation(key)
    }
    else if (key === "Escape" || key === "Backspace"){
      this.handleClear()
    }
    else if(key === "Enter" || key === "=") {
      this.handleEndOperation()
    }
  }

  handleInsertNumber = (value) => {
    const windowSize = window.innerWidth >= 1200? 18: window.innerWidth >= 600? 14 : window.innerWidth >=400? 9 : 7
    if(!(this.state.displayNumber.length > windowSize && !this.state.didOperated)){
      this.setState({
        displayNumber: this.state.didOperated? value : this.state.displayNumber === 0? value: this.state.displayNumber + value, // primeiro checa se ja foi feita alguma operação, para não concatenar os valores, depois checa se o valor é 0, para trocá-lo pelo número
        didOperated: false
      })
    }
  }

  handleClear () {
    this.setState({
      displayNumber: 0,
      prevDisplay: "",
      prevNumber: "",
      operation: "",
      didOperated: false
    })
  }

  handleInsertOperation = (value) => {
    this.setState({
      prevNumber: this.state.displayNumber,
      prevDisplay: this.state.displayNumber + value,
      operation: value,
      didOperated: true // serve para limpar o display ao inserir mais números após a operação
    })
  }

  handleEndOperation = () => {
    if (this.state.prevNumber === "" && this.state.operation === "") { // retorna
      this.setState({
        displayNumber: this.state.displayNumber
      })
    }
    else {
      switch (this.state.operation) {
        case '/': this.setState({ 
          displayNumber: parseFloat(this.state.prevNumber / this.state.displayNumber)
        })
        break;
        case '*': this.setState({ 
          displayNumber: parseFloat(this.state.prevNumber * this.state.displayNumber)
        })
        break;
        case '-': this.setState({ 
          displayNumber: parseFloat(this.state.prevNumber - this.state.displayNumber)
        })
        break;
        case '+': this.setState({ 
          displayNumber: parseFloat(this.state.prevNumber) + parseFloat(this.state.displayNumber)
        })
        break;
        default: this.setState({displayNumber: this.state.prevNumber})
      }
    }
    
    this.setState({
      prevDisplay: "",
      didOperated: true,
      prevNumber: ""
    })
  }

  render() {
      return (
      <div className="App">
        <Display previous={this.state.prevDisplay} atual={this.state.displayNumber}/>
        <div className="buttonList">
          <Button value =""/>
          <Button value =""/>
          <Button onClick ={this.handleClear.bind(this)} value ="C"/>
          <Button onClick ={() => this.handleInsertOperation("/")} value ="/"/>
          <Button onClick={() => this.handleInsertNumber("7")} value="7" />
          <Button onClick={() => this.handleInsertNumber("8")} value="8" />
          <Button onClick={() => this.handleInsertNumber("9")} value="9" />
          <Button onClick ={() => this.handleInsertOperation("*")} value ="x"/>
          <Button onClick={() => this.handleInsertNumber("4")} value ="4"/>
          <Button onClick={() => this.handleInsertNumber("5")} value ="5"/>
          <Button onClick={() => this.handleInsertNumber("6")} value ="6"/>
          <Button onClick ={() => this.handleInsertOperation("-")} value ="-"/>
          <Button onClick={() => this.handleInsertNumber("1")} value ="1"/>
          <Button onClick={() => this.handleInsertNumber("2")} value ="2"/>
          <Button onClick={() => this.handleInsertNumber("3")} value ="3" />
          <Button onClick ={() => this.handleInsertOperation("+")} value ="+" />
          <Button value ="" />
          <Button onClick={() => this.handleInsertNumber("0")} value ="0" />
          <Button value ="" />
          <Button onClick={this.handleEndOperation.bind(this)} value ="="/>
        </div>
      </div>
    );
  }
  
}

export default App;
