import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }
    search() {
        this.props.onSearch(this.state.term);
    }
    onMouseUp() {
        const searchText = document.getElementById("searchBar");
          searchText.addEventListener("click", function(){
           this.setAttribute("placeholder", "Enter a Track...");
        });
    }
    onClick() {
        const searchText = document.getElementById("searchBar");
          searchText.addEventListener("click", function(){
           this.setAttribute("placeholder", " ");
        });
    }
    render() {
        return (
            <div className="SearchBar">
              <input onMouseUp={this.onMouseUp} onClick={this.onClick} id="searchBar" onChange={this.handleTermChange} placeholder="Enter a Track..." />
              <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}
export default SearchBar;