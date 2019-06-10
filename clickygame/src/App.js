import React from 'react';
import logo from './logo.svg';
import './App.css';
import characters from "./Chars.json";
import GameCard from "./components/GameCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state ={
    characters: characters,
    score: 0,
    topScore: 0,
    currentFriends: [],
    instructions: "Click an image to begin!"
  };

  componentDidMount() {
    this.shuffleChars();
  };
  
  shuffleChars = () => {
    const shuffledChars = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({characters: shuffledChars});
  }

  makeFriend = id => {
    this.shuffleChars();
    if (this.state.currentFriends !== id) {
      this.setState({currentFriends: id, score: this.state.score + 1, instructions: "You guessed correctly!"});
      
      if (this.state.topScore === this.state.score) {
        this.setState({topScore: this.state.topScore + 1})
      }
    } else {
      this.setState({currentFriends: [], score: 0, instructions: "You guessed incorrectly!"})
    };
  }

  render() {
    return (
      <div className="container">
        <Navbar score={this.state.score} topScore={this.state.topScore} instructions={this.state.instructions}/>
        <Jumbotron/>
        <div className="row border border-warning">
          {this.state.characters.map(character => 
            <GameCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              makeFriend={this.makeFriend}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App;
