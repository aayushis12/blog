//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
//import data from '../data.json';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {FullBlog} from './FullBlog.js';
import {Author} from './Author.js'


class ExpenseApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      list:[],
      repeat:[],
      requestSent:false
    }
    this.handleOnScroll=this.handleOnScroll.bind(this);
    this.querySearchResult=this.querySearchResult.bind(this);
    this.doQuery=this.doQuery.bind(this);
    this.createData=this.createData.bind(this);
    this.initFakeData=this.initFakeData.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleOnScroll);
    this.initFakeData();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleOnScroll);
  }

  initFakeData(){
    
    var data=this.createData(this.state.data,10);
    this.setState({data:data});
    
  }

  createData(data,counter){
    var i=0;
    
    var fakeData=[];
    var len=Object.keys(data).length;
    for(i=0;i<counter;i++){
      for(var j=0;j<len;j++){
        
        data[j].id=`${i}${j}`;
        fakeData.push(data[j]);
      }
    }
    console.log({fakeData});
    return fakeData;
  }

  querySearchResult(){
    console.log(this.state.data);
    if(this.state.requestSent){
      return;
    }
    setTimeout(this.doQuery,2000);
    this.setState({
      requestSent:true
    })
  }

  doQuery(){
    var self=this;
    $.ajax({
      url:'#',
      data:null,
      method:'GET',
      success:function(data,textStatus,jqXHR){
        console.log("mj");
        var fakeData=self.createData(self.state.data,5);
        var newData=self.state.data.concat(fakeData);
        self.setState({data:newData,requestSent:false});
      },//.bind(this),
      error: function(jqXHR, textStatus, errorThrown) {
        self.setState({requestSent: false});
      }//.bind(this)
    });
    
  }

  handleOnScroll() {
    
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.querySearchResult();
    }
  }

  render(){
    var data=this.state.data;
    var list=this.state.list;
     var len= Object.keys(data).length;
     ////console.log(data);
     var z=0;
    for(var i=0;i<len;i++){
      console.log(data[i]);
      list.push(<Author i={i} data={data[i]}/>);
        
    }

    return(
    <div>
      <div className="row">
        {list}
      </div>
      {(() => {
        <span>still loading</span>
          if (this.state.requestSent) {
            return(
              <div className="data-loading">
                <i className="fa fa-refresh fa-spin"></i>
              </div>
            );
          } else {
            return(
              <div className="data-loading"></div>
            );
          }
        })()}
        </div>
      )
  }
}

module.exports={
  ExpenseApp:ExpenseApp
}
