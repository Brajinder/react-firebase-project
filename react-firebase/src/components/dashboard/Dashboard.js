import React, { Component } from 'react';
import Notifications from './Notifications'
import Projectlist from '../projects/Projectlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render() {
    
       // console.log(this.props)
       const { projects,auth} =this.props 
       if (!auth.uid) return <Redirect to='/signin'/>
       return (
            <div className="dashboard container">
            <div className="row">

            <div className="col s12 m6 offset-s1">
            <Notifications />
            </div>
            </div>
            <div className="row">
            <div className="col s12 m6 ">
            <Projectlist projects={projects}/>
            </div>
            </div>

            </div>
        
        
        )
    }
}

const mapStateToProps =(state) => {
   console.log(state)
    return {
        projects : state.firestore.ordered.projects,
        auth: state.firebase.auth
    }


}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard)