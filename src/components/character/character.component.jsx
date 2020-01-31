import React, { Component } from "react";
import "./character.styles.css";
import Button from "../button/button.component";

class Character extends Component {
  constructor() {
    super();
    this.state = {
      homeworld: {},
      showHomeworld: false
    };
  }

  componentDidMount() {
    fetch(`${this.props.character.homeworld}`)
      .then(response => response.json())
      .then(homeworld => {
        this.setState({ homeworld: homeworld });
      });
  }
  handleClick = () => {
    this.setState(currentState => ({
      showHomeworld: !currentState.showHomeworld
    }));
  };
  render() {
    const { character, index } = this.props;
    return (
      <div className="character-container">
        <img
          alt="character"
          src={`https://robohash.org/${index}?set=set2&size=180x180`}
        />

        <h1>{character.name}</h1>
        <h2>Height: {character.height}</h2>
        <h2>Gender: {character.gender}</h2>

        <Button handleClick={() => this.handleClick()} />
        {this.state.showHomeworld && (
          <div>
            <h2>{this.state.homeworld.name}</h2>
            <h2>
              Pop:
              {this.state.homeworld.population.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default Character;
