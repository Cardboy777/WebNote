import React, { Component } from 'react';
import NotePage from './NotePage';
import FrontPage from './FrontPage'
import firebase from './firebase';
import styles from '../css/WebNote.module.css'

class WebNote extends Component {
  constructor(){
    super();
    this.state={
      uAuth: null,
      uData: null,
      isAuthenticating: true
    }
    this.handleLoggedinUser = this.handleLoggedinUser.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  //Starts the process of authenticating the current user (checking if a user is logged in)
  Authentification(){
    this.getUserFromLocalStorage()
    if(this.state.isAuthenticating){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //user is logged in
          this.handleLoggedinUser(user)
        }
        else{
          //No user is logged in
          localStorage.removeItem('uAuth');
          localStorage.removeItem('uData');
          this.setState({
            uAuth: null,
            uData: null,
            isAuthenticating: false
          })
        }
      });
    }
  }

	componentDidMount(){
    this.Authentification();
  }

  //retrieves user data from local storage, if any
  getUserFromLocalStorage() {
    const uAuth = localStorage.getItem('uAuth');
    const uData = localStorage.getItem('uData');
    if (!uAuth || !uData){
      return;
    }
    this.setState(
      { uAuth: uAuth,
        uData: uData
      });
  }

  //simple get function that checks if a user is logged in and the appropriate local variables are set
  isLoggedIn(){
    if(!this.state.isAuthenticating && this.state.uAuth){
      return true;
    }
    return false;
  }

  //Handles getting user data from the database, sets local storage variables for the user auth and user data objects
  handleLoggedinUser(user){
    const db = firebase.firestore();
    db.collection("userData").doc(user.uid).get()
      .then( (userdoc) => {
        if (userdoc.exists) {
          localStorage.setItem('uAuth', user);
          localStorage.setItem('uData', userdoc.data());
          this.setState({
            uAuth : user,
            uData : userdoc.data(),
            isAuthenticating: false
          });
        } else {
          this.setState({
            uAuth : user,
            uData : null,
            isAuthenticating: false
          });
          console.log('No user data available for '+ this.state.uAuth.uid);
        }
      })
      .catch( (error) => {
        this.setState({
          uAuth : user,
          uData : null,
          isAuthenticating: false
        });
          console.log("Error getting User Data:\n" + error);
      });
  }

  render() {
    return (
      <div className={styles.webnotePage}>
        { this.state.isAuthenticating ?
          <div>Loading Page and Checking Login Status</div>
          :
          <div>
            {this.isLoggedIn() ?
            <div>
              <NotePage/>
            </div>
            :
            <div>
              <FrontPage/>
            </div>
            }
          </div>
          
        }
      </div>
    );
  }
}

export default WebNote;
