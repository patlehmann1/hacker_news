import React, { Component } from 'react';
import MainHeading from './main_heading/main_heading';
import SearchBar from '../containers/search_bar/search_bar';
import SearchResults from '../containers/search_results/search_results';


export default class App extends Component {
  render() {
    return (
      <div>
        <MainHeading />
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
