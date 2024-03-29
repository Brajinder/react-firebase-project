import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signin} from '../../store/actions/authaction'


export class SignIn extends Component {
  
  state ={
      email:'',
      password:''

  }
  handleChange= (e) => {
this.setState ({
    [e.target.id]: e.target.value
})
  }
  handleSubmit= (e) => {
      e.preventDefault();
this.props.signin(this.state);      
}
  
  
    render() {
      const { authError }=this.props;
//console.log(signin);
      return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="white">
      <h5 className="grey-text text-darken-3">Sign-In</h5>
      <div className="input-field">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={this.handleChange}/>
       </div>
      
       <div className="input-field">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={this.handleChange}/>
       </div>

       <div className="input-field">
       <button className="btn pink lighten-1 z-depth-0">Submit</button>
       <div className="red-text center">
       { authError ? <p>{ authError }</p> : null}

       </div>
       </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps =(state) => {
  return {
    authError:state.auth.authError
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    signin : (creds) => dispatch(signin(creds)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

