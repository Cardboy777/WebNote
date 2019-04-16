import React, { Component } from 'react'
import firebase from './firebase';

export default class NotePage extends Component {

  signOut(e){
    e.preventDefault();
    firebase.auth().signOut()
    .then(
      () => {
        //logout successfull
      }
    )
  }

  render() {
    return (
      <div>
        This is the Notes Page
        <button className='btn btn-primary' onClick={this.signOut}>Sign-out</button>
      </div>
    )
  }
}
