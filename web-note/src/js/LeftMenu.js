import React, { Component } from 'react'
import style from '../css/LeftMenu.module.css'

export default class LeftMenu extends Component {
  render() {
    return (
      <div className={style.leftMenu}>
        {/*
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-folder-plus"></i>New Folder</button>
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-tools"></i>Rename Folder</button>
        <button className={'btn btn-link '+style.menuItem} onClick={this.props.downloadFolder}><i className="fas fa-file-archive"></i>Download Folder</button>
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-copy"></i>New Note</button>
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-edit"></i>Rename Note</button>
        */}
        <button className={'btn btn-link '+style.menuItem} onClick={this.props.downloadNote}><i className="fas fa-file-download"></i>Download Note</button>
      </div>
    )
  }
}
