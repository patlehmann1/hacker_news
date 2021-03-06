import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner';
import './search_results.scss';


class SearchResults extends Component {

    renderNews(data, index) {
        const { title, author, url, points, num_comments } = data;

        return (
            <tr key={index}>
                <td>{title}</td>
                <td>{author}</td>
                <td><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></td>
                <td>{points}</td>
                <td>{num_comments}</td>
            </tr>
        )
    }

    render() {
        return (
            <div className="search_results">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>URL</th>
                            <th>Points</th>
                            <th># of Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.loading ? <Spinner /> :
                            this.props.news.news.map(this.renderNews)}
                    </tbody>
                </table>
            </div>
        );
    };

};

function mapStateToProps({ news }) {
    return { news };
}

export default connect(mapStateToProps)(SearchResults);
