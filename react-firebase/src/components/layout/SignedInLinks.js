import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../store/actions/authaction' 

const SignedInLinks = (props) => {

  return (
      <ul className="right">
      <li><NavLink to= '/createproject'>New Project</NavLink></li>
      <li><a onClick={props.signout}>Log Out</a></li>
      <li><NavLink to= '/' className='btn btn-floating green lighten-1'>NN</NavLink></li>
      </ul>      
 )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: ()=> dispatch(signout())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)