import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = { term: "" };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) this.search();
  }
  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.search} className="SearchButton">
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;