import React, { Component } from 'react'
import style from '../css/LeftMenu.module.css'
import RenameFolderMenu from './RenameFolderMenu';
import RenameNoteMenu from './RenameNoteMenu';

export default class LeftMenu extends Component {

  constructor(props){
    super(props)
    this.renameFolder = this.renameFolder.bind(this)
    this.renameNote = this.renameNote.bind(this)
    this.state={
      showRenameFolderMenu: false,
      showRenameNoteMenu: false
    }
  }

  renameFolder(){
    if(this.props.folder === null){
      alert('No Folder has been Selected')
      return
    }
    this.setState({
      showRenameFolderMenu : !this.state.showRenameFolderMenu
    })
  }
  renameNote(){
    if(this.props.note === null){
      alert('No Note has been Selected')
      return
    }
    this.setState({
      showRenameNoteMenu : !this.state.showRenameNoteMenu
    })
  }

  render() {
    return (
      <div className={style.leftMenu}>
        {this.state.showRenameFolderMenu === true ? 
            <RenameFolderMenu {...this.props} closeMenu={this.renameFolder} folder={this.props.folder}/>
            :
            <React.Fragment/>
        }
        {this.state.showRenameNoteMenu === true ? 
            <RenameNoteMenu {...this.props} closeMenu={this.renameNote} note={this.props.note}/>
            :
            <React.Fragment/>
        }
        {/*
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-folder-plus"></i>New Folder</button>
        <button className={'btn btn-link '+style.menuItem} onClick={this.props.downloadFolder}><i className="fas fa-file-archive"></i>Download Folder</button>
        <button className={'btn btn-link '+style.menuItem}><i className="fas fa-copy"></i>New Note</button>
        
        */}
        <button className={'btn btn-link '+style.menuItem} onClick={this.renameFolder}><i className="fas fa-tools"></i>Rename Folder</button>
        <button className={'btn btn-link '+style.menuItem} onClick={this.renameNote}><i className="fas fa-edit"></i>Rename Note</button>
        <button className={'btn btn-link '+style.menuItem} onClick={this.props.downloadNote}><i className="fas fa-file-download"></i>Download Note</button>
      </div>
    )
  }
}
