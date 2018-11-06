import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../../actions/index';
import './search_bar.scss';


class SearchBar extends Component {
    constructor(props) {
        super(props);
         
        this.state = { query: '' };
    };

    handleInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    handleButtonClick = (query) => {
        this.props.getNews(query);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.getNews(this.state.query);
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
                    {!this.props.searches.length ? "Search for a term and see your recent searches here." : 
                    this.props.searches.map((query, i) => 
                    <button
                    key={i}
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

const mapStateToProps = ({ news }) => ({ 
    searches: Object.keys(news.searches),
    news: news
  });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);