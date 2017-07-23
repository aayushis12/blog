'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
//import data from '../data.json';
//import { withRouter, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FullBlog } from './FullBlog.js';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const { data } = this.state;
    content = (
      <div>
        <Link to={`/fullblog/${data.id}`} >
          <div className="box">
            <div>
              {this.props.data.id}
            </div>
            <div>
              {this.props.data.Author}
            </div>
            <div>
              {this.props.data.Book}
            </div>
          </div>
        </Link>
      </div>
    );

    return content;
  }
}

module.exports = {
  Author: Author
};
