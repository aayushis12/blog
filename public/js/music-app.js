//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
import {Login} from './login.js'
var decycle=require('json-decycle').decycle;

class MusicApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false,
            results:{},
            keys:[]
        }
        this.login=this.login.bind(this);
    }
    login(){
        var email=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        //{"user": { "email": "test001@test.com",  "password":"passwod1"}}// this is what i want to pass 
        var that = this;
        var user_details={
            'email':email,
            'password':password
        }
        $.ajax({
            type:'POST',
            url:'/newuser',
            data:{
                user:{
                    'email':$("#username").val(),
                    'password':$("#password").val()
                }
            },
            dataType:"json",
            success:function (result) {
                var id=result["ops"][0]["_id"];
               
               $.ajax({
                type:'POST',
                url:'/checkuser',
                data:{
                   id:id
                },
                success:function(results){
                    console.log(results.user.username);
                    var username=results.user.username;
                    $.ajax({
                        type:'POST',
                        url:'/getdetails',
                        data:{
                            username:username
                        },
                        success:function(results){
                            console.log(results)
                            if(results){
                                console.log(Object.keys(results));
                                that.setState({
                                     isLoggedin:true,
                                     results:results,
                                     //keys:keys
                                })
                            }
                        }
                    })
                    
                }
               })
                
            }
        })
    }
    render(){
        if(this.state.isLoggedin){
            return(
                <Login results={this.state.results}/>
                )
        }else{
        return(
            <div className="login-box">
               <span>Username: <input type='text' id='username' className="text"/></span>
              <span>Password: <input type='password' id='password' className="text"/></span>
             <span><button onClick={this.login} className="text btn-default">Login</button></span>
            </div>
            )
    }
    }
}

ReactDom.render(<MusicApp/>, document.getElementById("container"));
