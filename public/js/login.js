import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;


class Login extends React.Component{
	render(){
		var info=this.props.results;
		
		var List=Object.keys(info).map((k,idx)=>{
			if(idx!==0){
				return(
					<div className="sections" key={idx}><span>{k} </span><span>{info[k]}</span></div>
					)
				}
		});
		return(
			<div className="box">{List}</div>
			 )
	}

}

module.exports={
	Login:Login
}