import React, { Component } from 'react'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NoteEdit from './NoteEdit'

export default class Notes extends Component {
  constructor(){
    super();
    this.state={
      selectedFolder: null,
      selectedNote: null
    }
    this.setFolder = this.setFolder.bind(this)
    this.setNote = this.setNote.bind(this)
  }

  setFolder(folder){
    this.setState({
      selectedFolder : folder,
      selectedNote: null
    })
  }
  setNote(note){
    this.setState({
      selectedNote : note
    })
  }

  render() {
    const wrapperDiv={
        margin: '0',
        padding: '0'
    };
    
    return (
      <div style={wrapperDiv}>
        <FolderList {...this.props} setFolder={this.setFolder} folder={this.state.selectedFolder}/>
        <NoteList {...this.props} folder={this.state.selectedFolder} setNote={this.setNote}/>
        <NoteEdit {...this.props} folder={this.state.selectedFolder} note={this.state.selectedNote}/>
      </div>
    )
  }
}
