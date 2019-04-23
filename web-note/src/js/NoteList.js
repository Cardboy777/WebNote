import React, { Component } from 'react'
import style from '../css/NoteList.module.css'
import NodeButton from './NoteButton'
import NoteButton from './NoteButton';

export default class NoteList extends Component {

  isSelected(){
    return !(this.props.folderI === null)
  }

  render() {
    return (
      <div className={style.noteList}>
        {this.isSelected() ?
          this.props.data.folders[this.props.folderI].notes.map((i) =>
            <div key={i.timeCreated} className="panel col-md-6">
              <NoteButton data={i}/>
            </div>
          )
        :
          <h1>No folder Selected</h1>
        }
        
      </div>
    )
  }
}
