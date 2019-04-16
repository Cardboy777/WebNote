import React, { Component } from 'react'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NoteEdit from './NoteEdit'

export default class Notes extends Component {
  render() {
    const wrapperDiv={
        maring: '0',
        padding: '0'
    };
    
    return (
      <div style={wrapperDiv}>
        <FolderList/>
        <NoteList/>
        <NoteEdit/>
      </div>
    )
  }
}
