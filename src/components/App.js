import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList"
import FilterHogs from './FilterHogs'

class App extends Component {

  state = {
    greased: false,
    sortByName: false,
    sortByWeight: false
  }

  handleGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  handleSortName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  handleSortWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterHogs 
          handleGreased={this.handleGreased}
          greased={this.state.greased}
          handleSortName={this.handleSortName}
          sortByName={this.state.sortByName}
          handleSortWeight={this.handleSortWeight}
          sortByWeight={this.state.sortByWeight}
        />
        <HogList 
          hogs={hogs}
          greased={this.state.greased}
          sortByName={this.state.sortByName}
          sortByWeight={this.state.sortByWeight}
        />
      </div>
    );
  }
}

export default App;
