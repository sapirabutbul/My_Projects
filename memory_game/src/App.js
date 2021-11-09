import React from 'react';
import './App.css';
import Superheroes from './components/Superheroes';
import NavBar from './components/NavBar'
import Card from './components/Card';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      topScore: 0,
      superArray: Superheroes
    }
  }

shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

clickedCard =(e)=>{
const{score, topScore, superArray} = this.state
superArray.forEach(element => {
    if (parseInt(e.target.id) === element.id) {
      if (element.clicked) {
        if (score > topScore) {
          this.setState({topScore:score})
        }

        this.setState({score:0})
        this.resetGame()
      }else{
        element.clicked = true
        this.setState({score:this.state.score+1})
      } 
    }
});
  this.shuffleArray(superArray)
}
resetGame = () => {
  this.state.superArray.forEach(element =>{
    element.clicked = false
  })
  this.setState({score:0})
}
componentDidUpdate(){
  if (this.state.score === 12) {
    this.setState({score:'you win!!'})
    this.setState({topScore:'12!!'})
    setTimeout(() => {
      this.resetGame()
    }, 500);
          
  }
}
     
render(){
  return (
    <div>
      <NavBar score={this.state.score} tScore={this.state.topScore}/>
      <div id='contBox'>
        {
          this.state.superArray.map(item=>{
            return <Card key={item.id} id={item.id} img={item.image} name={item.name} occup={item.occupation} clicked={item.clicked} clickCard={this.clickedCard} />  
            })
        }
      </div>
    </div>
  );
}
}
export default App;
