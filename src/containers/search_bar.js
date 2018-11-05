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
        this.handleButtonClick = this.handleButtonClick.bind(this);
    };

    handleInputChange(event) {
        this.setState({ query: event.target.value });
    };

    handleButtonClick(query) {
        this.props.fetchNews(query);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.fetchNews(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <div>
                <div className="search_bar">
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
                </div>
                <div className="recent_search"> 
                    <h5>Recent Searches</h5>
                    <span> 
                    {!this.props.search.length ? "Search for a term and see your recent searches here." : 
                    this.props.search.map(query => 
                    <button 
                    className="btn btn-primary" 
                    onClick={this.handleButtonClick.bind(this, query)}>{query}
                    </button> 
                    )}  
                    </span>
                </div>
            </div>
        );
    };
};

function mapStateToProps({ news, search }) {
    return { news, search };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);