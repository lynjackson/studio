import React from 'react';
import '../public/styles/app.css'
import '../public/styles/header.css'
import {Link} from 'react-router-dom';

export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      home: 1,
      spaces: {opacity: .56},
      services: {opacity: .56},
      kathy: {opacity: .56},
      current: 5
    }
  }
  render(){
    return(
      <div id='header'>
        <div id='header-content'>
          <a id='logo-link_header' href='/'><div id='pt-logo'></div></a>
          <div id='header-links'>
            <Link to='/spaces' className='header-link' style={this.state.spaces}>spaces</Link>
            <Link to='/services' className='header-link' style={{opacity: this.state.services.opacity}}>services</Link>
            <Link to='/kathy' className='header-link' style={this.state.kathy}>people</Link>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    if(window.location.pathname === '/spaces'){
      this.setState({spaces: {opacity: 1, borderBottom: '1px solid', borderBottomWidth:1}});
    }
    else if(window.location.pathname === '/kathy'){
      this.setState({kathy: {opacity: 1, width: 'auto', borderBottom: '1px solid', borderBottomWidth:1}});
    }
  }
  
}
