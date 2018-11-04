import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
         
        this.state = { query: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleInputChange(event) {
        this.setState({ query: event.target.value });
    };

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.fetchNews(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="input-group">
                <input
                    placeholder="Get the latest from Hacker News based on your search"
                    name="main-search"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);