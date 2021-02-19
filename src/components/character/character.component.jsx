import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
  _isMounted = false;
  async componentDidMount() {
    this._isMounted = true;
    const planet = this.props.character.homeworld
    try {
      const responseJson = await fetch(
        `https://swapi-deno.azurewebsites.net/api/planets/${planet}`
      ).then(response => response.json());
      if (this._isMounted) {
        this.setState({ homeworld: responseJson });
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleClick = () => {
    this.setState(currentState => ({
      showHomeworld: !currentState.showHomeworld
    }));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

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
            <Helmet>
              <title>{character.name}</title>
            </Helmet>
          </div>
        )}
      </div>
    );
  }
}

export default Character;
