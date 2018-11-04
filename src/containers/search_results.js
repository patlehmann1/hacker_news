import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchResults extends Component {

    renderNews(data){
        const title = data.title;
        const index = data.created_at_i;
        const author = data.author;
        const url = data.url;

        return (
            <tr key={index}>
                <td>{title}</td>
                <td>{author}</td>
                <td><a href={url}>{url}</a></td>
            </tr>
        )
    }

    render() {
        return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>URL</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.news.map(this.renderNews)}
            </tbody>
          </table>
        );
    };

};

    function mapStateToProps({ news }) {
        return { news };
    }

export default connect(mapStateToProps)(SearchResults);
