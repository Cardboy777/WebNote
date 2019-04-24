import React, { Component } from 'react'
import style from '../css/NoteList.module.css'
import buttonStyle from '../css/NoteButton.module.css'
import NoteButton from './NoteButton'
import firebase from './firebase'

export default class NoteList extends Component {

  constructor(props){
    super(props);
    this.addNewNote = this.addNewNote.bind(this)
  }
  
  isFolderSelected(){
    return !(this.props.folder === null)
  }

  addNewNote(){
    let db = firebase.firestore();
        let currentTime = new Date();

        let name = currentTime.toUTCString();
        let tCreated = currentTime.getTime();
        let tModified = tCreated;
        let content = "";

        let newNote={
            name: name,
            content: content,
            timeCreated: tCreated,
            lastModified: tModified
        }

        let folderUnion={
          contents : [newNote],
          name: this.props.folder.name
        }

        db.collection("userData").doc(this.props.user.uid).update(
            {
                folders : firebase.firestore.FieldValue.arrayUnion(folderUnion)
            }
        )
        .then((res)=>{
            console.log('Note Created')
        }).catch((err)=>{
            console.log('Error')
        })
  }

  render() {
    return (
      <div className={style.noteList}>
        {this.isFolderSelected() ?
          <React.Fragment>
            {this.props.folder.contents.map((i) =>
                <NoteButton data={i} setNote={this.props.setNote}/>
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
