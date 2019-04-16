import React, { Component } from 'react'
import firebase from './firebase';
import style from '../css/Header.module.css'

export default class Header extends Component {
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
      <div className={style.header}>
        <h1 className={style.PageTitle}>WebNote</h1>
        <button className={'btn btn-link ' + style.logout} onClick={this.signOut}>Sign-out</button>
      </div>
    )
  }
}
