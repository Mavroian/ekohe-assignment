import React, { Component } from "react";
import { connect } from "react-redux";
import { getPeopleAction } from "./redux/actions/people/people.actions";
import { SearchBox } from "./components/search-box/search-box.component";
import CharacterList from "./components/character-list/character-list.component";
import Loading from "./components/loading/loading.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: ""
    };
  }

  componentDidMount() {
    this.props.getPeople();
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { searchField } = this.state;
    const characters = this.props.characters;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        {this.props.isLoading ? (
          <Loading isLoading={this.props.isLoading} />
        ) : (
          <div>
            <SearchBox
              handleChange={this.handleChange}
              placeHolder={"Search Star Wars Characters"}
            />
            <CharacterList characters={filteredCharacters.slice(0, 8)} />
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = {
  getPeople: getPeopleAction
};

const mapStateToProps = ({ characters: { people, isLoading } }) => ({
  characters: people,
  isLoading: isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
