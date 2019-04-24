import React, { Component } from 'react'
import style from '../css/NoteButton.module.css'

export default class NoteButton extends Component {

  setNote(){
    this.props.setNote(this.props.data)
  }

  render() {
    return (
      <div className={style.panel} onClick={this.setNote}>
        {this.props.data.name}{this.props.data.content}{this.props.data.lastModified}{this.props.data.timeCreated}
      </div>
    )
  }
}
