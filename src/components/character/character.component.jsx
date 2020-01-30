import React, { Component } from 'react';
import './character.styles.css'
import Button from "../button/button.component"

class Character extends Component {
  constructor() {
    super();
    this.state = {
      homeworld: {},
      showHomewolrd: false
    }
  }

  componentDidMount() {
    fetch(`${this.props.character.homeworld}`).then(response => response.json()).then(homeworld => {
      this.setState({ homeworld: homeworld })
    })
  }
  handleClick = () => {
    this.setState({ showHomewolrd: true })
  }
  render() {
    const { character, index } = this.props
    return (
      <div className="character-container">
        <img alt="character" src={`https://robohash.org/${index}?set=set2&size=180x180`} />
        <h1>{character.name}</h1>
        <h2>Height: {character.height}</h2>
        <h2>Gender: {character.gender}</h2>
        <Button handleClick={this.handleClick} />
        {
          this.state.showHomewolrd ?
            (
              <div>
                <h2>{this.state.homeworld.name}</h2>
                <h2>{this.state.homeworld.population}</h2>
              </div>
            ) : null
        }
      </div>
    )
  }
}

export default Character