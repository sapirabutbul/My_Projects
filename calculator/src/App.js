import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calculation: 0,
      currentNum: 0,
      operator: false,
      equalIsOn: false,
    };
  }

  //// event of numbers and dot- '.'
  handleNumber = (e) => {
    if (this.state.equalIsOn) {
      this.setState({ equalIsOn: false });
      this.setState({ currentNum: e.target.innerText });
      this.setState({ calculation: e.target.innerText });
    } else {
      if (this.state.operator) {
        this.setState({ currentNum: e.target.innerText });
        this.setState({
          calculation: this.state.calculation + e.target.innerText,
        });
        this.setState({ operator: false });
        console.log("num", this.state.currentNum);
      } else {
        if (this.state.currentNum === 0 && e.target.innerText === ".") {
          this.setState({
            currentNum: this.state.currentNum + e.target.innerText,
          });
          this.setState({
            calculation: this.state.calculation + e.target.innerText,
          });
        } else if (this.state.currentNum === 0) {
          this.setState({ currentNum: e.target.innerText });
          this.setState({ calculation: e.target.innerText });
        } else {
          this.setState({
            currentNum: this.state.currentNum + e.target.innerText,
          });
          this.setState({
            calculation: this.state.calculation + e.target.innerText,
          });
        }
      }
    }
  };

  //// event of operators
  handleOperator = (e) => {
    if (this.state.operator) {
      return null;
    } else {
      this.setState({ operator: true });
      if (this.state.currentNum === 0) {
        return null;
      } else {
        switch (e.target.innerText) {
          case "÷":
            this.setState({ calculation: this.state.calculation + "/" });
            break;
          case "×":
            this.setState({ calculation: this.state.calculation + "*" });
            break;
          case "+":
            this.setState({ calculation: this.state.calculation + "+" });
            break;
          case "-":
            this.setState({ calculation: this.state.calculation + "-" });
            break;

          default:
            break;
        }
      }
    }
  };

  //// event of reset - AC button
  handleReset = () => {
    this.setState({ calculation: 0, currentNum: 0 });
    this.setState({ operator: false });
    this.setState({ equalIsOn: false });
  };

  //// event of equal- calculate the result
  handleEqual = () => {
    if (this.state.equalIsOn) {
      return null;
    } else {
      this.setState({ equalIsOn: true });
      let num = eval(this.state.calculation);
      let answer;
      if (num % 1 != 0) {
        answer = num.toFixed(2);
      } else {
        answer = num;
      }
      this.setState({
        calculation: this.state.calculation + "=" + answer,
      });
      this.setState({ currentNum: answer });
    }
  };

  render() {
    return (
      <div className="bodyDiv">
        {console.log("opratrroeref", this.state.equalIsOn)}
        <header>
          <h1>Welcome To My Calculator</h1>
          <h2 className="head">Made with React</h2>
        </header>
        <div className="calculator">
          <div className="display">
            <h4>{this.state.calculation}</h4>
            <h2>{this.state.currentNum}</h2>
          </div>
          <div className="container">
            <button onClick={this.handleReset} className="ac">
              AC
            </button>
            <button onClick={this.handleOperator} className="operator">
              ÷
            </button>
            <button onClick={this.handleOperator} className="operator">
              ×
            </button>
            <button onClick={this.handleNumber}>7</button>
            <button onClick={this.handleNumber}>8</button>
            <button onClick={this.handleNumber}>9</button>
            <button onClick={this.handleOperator} className="operator">
              -
            </button>
            <button onClick={this.handleNumber}>4</button>
            <button onClick={this.handleNumber}>5</button>
            <button onClick={this.handleNumber}>6</button>
            <button onClick={this.handleOperator} className="operator">
              +
            </button>
            <button onClick={this.handleNumber}>1</button>
            <button onClick={this.handleNumber}>2</button>
            <button onClick={this.handleNumber}>3</button>
            <button onClick={this.handleEqual} className="equal operator">
              =
            </button>
            <button onClick={this.handleNumber} className="zero">
              0
            </button>
            <button onClick={this.handleNumber}>.</button>
          </div>
        </div>
        <h3>Made With &hearts; By Sapir Abutbul</h3>
      </div>
    );
  }
}

export default App;
