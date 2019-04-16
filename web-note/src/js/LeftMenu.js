import React, { Component } from 'react'
import style from '../css/LeftMenu.module.css'

export default class LeftMenu extends Component {
  render() {
    return (
      <div className={style.leftMenu}>
        <button className={'btn btn-link '+style.menuItem}>New Note</button>
        <button className={'btn btn-link '+style.menuItem}>New Set Due Date</button>
        <button className={'btn btn-link '+style.menuItem}>Download note</button>
      </div>
    )
  }
}
