import React, { Component } from 'react'
import style from '../css/NoteButton.module.css'

export default class NoteButton extends Component {
  render() {
    return (
      <div>
        {this.props.data.name}{this.props.data.content}{this.props.data.lastModified}{this.props.data.timeCreated}
      </div>
    )
  }
}
