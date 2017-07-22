import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
//import data from '../data.json';
//import { withRouter, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {Switch, BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {FullBlog} from './FullBlog.js'


class Author extends React.Component{
  constructor(props){

    super(props);
    this.state={
      data:this.props.data,
     }
    this.loadBlog=this.loadBlog.bind(this);
  }

  loadBlog(i){
    var data=this.state.data[i];
    this.setState({
     data:data, 
    })
   const {match}=this.props;
  }
  


  render(){
    //console.log(data);
   // console.log(this.state.data);
   let content=(<p></p>);
    //
    var data=this.state.data;
   
     content=( 
        <div>
      <Link to={`/fullblog/${data}`} /><div onClick={this.loadBlog.bind(this,this.props.i)} className="box">
       <div>{this.props.i}</div>
          <div>{this.props.data.Author}</div>
          <div>{this.props.data.Book}</div>
        </div>  
       </div>
        
     )
      

        return content;
    }
}


module.exports={
  Author:Author
}