import React, { Component } from "react";
import MinionCard from "./components/MinionCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Guess from "./components/Guess";
import minions from "./minions.json";

Array.prototype.shuffle = function () {
  let i = this.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));

    temp = this[j];
    this[j] = this[i];
    this[i] = temp;

  }
  return this;
}

class App extends Component {
  state = {
    minions,
    score: 0,
    topScore: 0,
    clickedArr: [],
    alert: false
  };

  handleAlert = () => {
    this.setState({
      guess: false,
      alert: false,
      score: 0,
      clickedArr: [],
    });
  }

  handleClick = id => {
    if (this.state.clickedArr.indexOf(id) === -1) {

      this.state.clickedArr.push(id);
      // question 1 why does not work:
      // const newArr = this.state.clickedArr.push(id);
      // this.setState(
      //   {
      //     clickedArr: newArr
      //   },

      // question 2 why use concat(id)? concat merges two arrays, id is array?
      // this.setState({ clickedArr: this.state.clickedArr.concat(id) });
      // console.log(this.state.clickedArr)

      this.setState(
        {
          score: this.state.score + 1,
          guess: true
        },

        // react setState callback documentation.
        () => {
          if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
          if (this.state.score === 12) {
            alert("you win");
            this.setState({
              score: 0,
              clickedArr: []
            });
          }
        }
      );
    }

    else {
      // alert("lose");
      this.setState({
        score: 0,
        clickedArr: [],
        alert: true,
        guess: false
      });
    }

    minions.shuffle();
    // this.handleShuffle();
  };

  // ======== shuffle way2 ========:
  // shuffleArr = (array) => {
  //   let i = array.length, j, temp;
  //   while (--i > 0) {
  //     j = Math.floor(Math.random() * (i + 1));

  //     temp = array[j];
  //     array[j] = array[i];
  //     array[i] = temp;
  //   }
  //   return array;
  // }
  // handleShuffle = () => {
  //   let shuffleMinions = this.shuffleMinions(minions);
  //   console.log(shuffleMinions)
  //   this.setState({ minions: shuffleMinions });
  // };

  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          topScore={this.state.topScore}
        />

        {this.state.minions.map(minion => (
          <MinionCard
            key={minion.id}
            id={minion.id}
            image={minion.image}
            handleClick={this.handleClick}
          />
        ))}

        {this.state.alert ? <Alert handleAlert={this.handleAlert} /> : console.log("no alert")}
        {this.state.guess ? <Guess guessRight={this.guess} /> : console.log("incorrect")}

        <Footer>Copyright © 2019 Jerry Dai</Footer>
      </Wrapper>
    );
  }
}

export default App;