import React, { Component } from 'react'
import firebase from './firebase'

export default class FrontPage extends Component {

  handleLoginButton(e){
    e.preventDefault();
    //set auth to use device's default language
    firebase.auth().useDeviceLanguage();
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
     
    }).catch(function(error) {
     
    });
  }

  render() {
    return (
      <div>
          <h1>This is the Front page</h1>
          <p>Login you freak</p>
          <button className='btn btn-primary' onClick={this.handleLoginButton}>Sign-in with Google</button>
      </div>
    )
  }
}
