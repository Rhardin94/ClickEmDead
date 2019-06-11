import React from 'react';
import './App.css';
import characters from "./Chars.json";
import GameCard from "./components/GameCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  state ={
    characters: characters,
    score: 0,
    topScore: 0,
    currentFriends: [],
    instructions: "Click an image to begin, but only once!"
  };

  componentDidMount() {
    this.shuffleChars();
  };
  
  shuffleChars = () => {
    const shuffledChars = this.state.characters.sort(() => Math.random() - 0.5);
    this.setState({characters: shuffledChars});
  }

  makeFriend = id => {
    let currentFriends = this.state.currentFriends;
    this.shuffleChars();
    if (id === 10) {
      this.setState({currentFriends: [], score: 0, instructions: "You picked Toby...never pick Toby!"});
    } else if (!this.state.currentFriends.includes(id)) {
      this.setState({score: this.state.score + 1, instructions: "You guessed correctly!"});
      currentFriends.push(id);
      if (this.state.topScore === this.state.score) {
        this.setState({topScore: this.state.topScore + 1})
      }
    } else {
      this.setState({currentFriends: [], score: 0, instructions: "You guessed incorrectly!"})
    };
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} instructions={this.state.instructions}/>
        <div className="container">
          <div className="row border bg-dark m-1">
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
        <Footer/>
      </div>
    )
  }
}

export default App;
