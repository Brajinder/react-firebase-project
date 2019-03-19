import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Projectdetails from './components/projects/Projectdetails'
import SignIn from './components/auth/SignIn' 
import SignUp from './components/auth/SignUp' 
import Createproject from './components/projects/Createproject' 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ Dashboard }/>
        <Route path='/project/:id' component={ Projectdetails }/>
        <Route path='/signin' component={ SignIn }/>
        <Route path='/signup' component={ SignUp }/>
        <Route path='/createproject' component={ Createproject }/>


        

      </Switch>
      
       </div>
       </BrowserRouter>
    );
  }
}
export default App;