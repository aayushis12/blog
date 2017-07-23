'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class FullBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      likes: ''
    };
    this.add = this.add.bind(this);
  }
  add() {
    var likes = this.state.likes;
    //console.log(likes);
    var count = parseInt(likes);
    count += 1;
    this.setState({
      likes: count
    });
  }
  render() {
    console.log('this.props.match.params.book_id', this.props.match.params.book_id)
    return (
      <div>
        <div>
          {this.props.match.params.book_id}
          {/* {this.state.data.Content} */}
        </div>
        <div onClick={this.add}>
          {/* {this.state.likes} */}
        </div>
        <div>
          {/* {this.state.data.comments} */}
        </div>
      </div>
    );
  }
}

module.exports = {
  FullBlog: FullBlog
};
