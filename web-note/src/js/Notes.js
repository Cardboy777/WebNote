import React, { Component } from 'react'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NoteEdit from './NoteEdit'
import LeftMenu from './LeftMenu'
import {saveAs} from 'file-saver'
import noteEditStyle from '../css/NoteEdit.module.css'

export default class Notes extends Component {
  constructor(){
    super();
    this.state={
      selectedFolder: null,
      selectedNote: null
    }
    this.setFolder = this.setFolder.bind(this)
    this.setNote = this.setNote.bind(this)
    this.downloadNote = this.downloadNote.bind(this)
    this.downloadFolder = this.downloadFolder.bind(this)
    this.createDownloadableNote = this.createDownloadableNote.bind(this)
    this.renameFolder = this.renameFolder.bind(this)
    this.renameNote = this.renameNote.bind(this)
  }

  setFolder(folder){
    if(this.state.selectedFolder !== folder){
      this.setState({
        selectedFolder : folder,
        selectedNote: null
      })
    }
  }
  setNote(note){
    this.setState({
      selectedNote : note
    })
  }

  renameFolder(newFolderName){
    let data = this.props.data;

    let i =data.folders.findIndex((e)=>{
      return e === this.state.selectedFolder
    })

    data.folders[i].name = newFolderName;
    this.setState({
      selectedFolder: data.folders[i]
    })

    this.props.updateData(data)
  }

  renameNote(newNoteName){
    let data = this.props.data;

    let i =data.folders.findIndex((e)=>{
      return e === this.state.selectedFolder
    })
    let ni=data.folders[i].contents.findIndex((e)=>{
      return e === this.state.selectedNote
    })

    data.folders[i].contents[ni].name = newNoteName;
    this.setState({
      selectedNote: data.folders[i].contents[ni]
    })
    this.props.updateData(data)
  }

  downloadNote(){
    if(this.state.selectedNote === null){
      alert('No Note Is Selected')
      return
    }
    this.fetchDownloadNote(this.state.selectedNote)
  }
  downloadFolder(){
    if(this.state.selectedFolder === null){
      alert('No Folder Is Selected')
      return
    }
    let files = []
    this.state.selectedFolder.contents.forEach((elem)=>{
      files.push(this.createDownloadableNote(elem))
    })
    let file = new File([files], this.state.selectedFolder.name, { type: 'application/zip' });
    saveAs(file)
  }

  fetchDownloadNote(note){
    let file = this.createDownloadableNote(note)
    saveAs(file)
  }

  createDownloadableNote(note){
    return new File([note.content], (note.name +'.txt'), {type: "text/plain;charset=utf-8"})
  }

  render() {
    const wrapperDiv={
        margin: '0',
        padding: '0'
    };
    
    return (
      <div style={wrapperDiv}>
        <LeftMenu renameFolder={this.renameFolder} renameNote={this.renameNote}  downloadFolder={this.downloadFolder} downloadNote={this.downloadNote} folder={this.state.selectedFolder} note={this.state.selectedNote}/>
        <FolderList {...this.props} setFolder={this.setFolder} folder={this.state.selectedFolder}/>
        <NoteList {...this.props} folder={this.state.selectedFolder} setNote={this.setNote}/>
        {this.state.selectedNote !== null ?
          <NoteEdit {...this.props} folder={this.state.selectedFolder} note={this.state.selectedNote} downloadNote={this.downloadNote}/>
          :
          <div className={noteEditStyle.noteEdit}>Select Note to Edit</div>
        }
        
      </div>
    )
  }
}
