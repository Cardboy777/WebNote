import React, { Component } from 'react'
import style from '../css/NoteList.module.css'
import buttonStyle from '../css/NoteButton.module.css'
import NoteButton from './NoteButton'

export default class NoteList extends Component {

  constructor(props){
    super(props);
    this.addNewNote = this.addNewNote.bind(this)
    this.findFolder = this.findFolder.bind(this)
  }
  
  isFolderSelected(){
    return !(this.props.folder === null)
  }

  //adds new note object and updates database
  addNewNote(){
    let data = this.props.data
    let currentTime = new Date();

    let name = currentTime.toUTCString();
    let tCreated = currentTime.getTime();
    let tModified = tCreated;
    let content = "";

    let newNote={
        name: name,
        content: content,
        timeCreated: tCreated,
        lastModified: tModified,
        createdBy: this.props.user.uid,
        visibleBy: this.props.user.uid
    }
    let folderI= data.folders.findIndex(this.findFolder)
    data.folders[folderI].contents.push(newNote);
    this.props.updateData(data)
  }
  findFolder(a){
    return a === this.props.folder
  }

  render() {
    return (
      <div className={style.noteList}>
        {this.isFolderSelected() ?
          <React.Fragment>
            {this.props.folder.contents.map((i) =>
                <NoteButton key={i.name} data={i} setNote={this.props.setNote} isSelected={this.props.note === i}/>
            )}
            <div className={buttonStyle.panel} onClick={this.addNewNote}>
              Add Note +
            </div>
          </React.Fragment>
        :
          <h1>No folder Selected</h1>
        }
      </div>
    )
  }
}
