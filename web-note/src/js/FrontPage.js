import React, { Component } from 'react'
import firebase from './firebase'

export default class FrontPage extends Component {
  constructor(){
    super();
  }

  handleLoginButton(e){
    e.preventDefault();
    //set auth to use device's default language
    firebase.auth().useDeviceLanguage();
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
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
