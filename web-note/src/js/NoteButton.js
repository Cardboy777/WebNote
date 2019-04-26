import React, { Component } from 'react'
import style from '../css/NoteButton.module.css'

export default class NoteButton extends Component {
  constructor(props){
    super(props)
    this.setNote=this.setNote.bind(this)
  }

  setNote(){
    this.props.setNote(this.props.data)
  }

  render() {
    return (
      this.props.isSelected ?
        <div className={style.panelSelected} onClick={this.setNote}>
          <h1 className={style.noteName}>{this.props.data.name}</h1>
          <p className={style.noteData}>{this.props.data.content}</p>
        </div>
      :
        <div className={style.panel} onClick={this.setNote}>
          <h1 className={style.noteName}>{this.props.data.name}</h1>
          <p className={style.noteData}>{this.props.data.content}</p>
        </div>
      )
  }
}
