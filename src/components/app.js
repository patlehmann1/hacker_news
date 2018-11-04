import React, { Component } from 'react';
import MainHeading from '../components/main_heading';
import SearchBar from '../containers/search_bar';
import SearchResults from '../containers/search_results';

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
