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
  }

  render() {
    const wrapperDiv={
        margin: '0',
        padding: '0'
    };
    
    return (
      <div style={wrapperDiv}>
        <FolderList {...this.props}/>
        <NoteList {...this.props} folderI={this.state.selectedFolder}/>
        <NoteEdit {...this.props} folderI={this.state.selectedFolder} noteI={this.state.selectedNote}/>
      </div>
    )
  }
}
