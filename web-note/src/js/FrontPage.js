import React, { Component } from 'react'
import firebase from './firebase'
import style from '../css/FrontPage.module.css'
import g from '../images/g.png'

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
      <div className={style.frontPageDiv}>
        <div className={style.contents}>
          <h1 className={style.title}>WebNote</h1>
          <p className={style.summary}>WebNote is a site for quickly and easily taking notes. Creating new Files and Folder is easier than ever. Disconnecting for a while? No worries! Simply download your notes for offline viewing.</p>
          <br/>
          <p className={style.loginPrompt}>Get Started by logging in via a Google Account:</p>
          <div className={style.loginButtonDiv}>
            <button className={style.loginButton} onClick={this.handleLoginButton}>Sign-in with <img className={style.imgG} src={g}/></button>
          </div>
        </div>

        <br/>
        <p className={style.credit}>WebNote was created by Reid Kippenbrock</p>
        
      </div>
    )
  }
}
