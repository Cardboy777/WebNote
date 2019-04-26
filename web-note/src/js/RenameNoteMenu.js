import React, { Component } from 'react'
import style from '../css/PopupMenu.module.css'

export default class RenameNoteMenu extends Component {
    constructor(props){
        super(props);
        this.renameNote = this.renameNote.bind(this);
    }
    //Creates new folder and updates database
    renameNote(){
        let folderName = document.getElementById("noteName").value
        this.props.renameNote(folderName)
        this.props.closeMenu()
    }

    render() {
        return (
        <div className={style.fullscreen}>
            <div className={style.menu}>
                <h1 className={style.menuTitle}>Rename Note: {this.props.note.name}</h1>
                <div className={style.exitButton}>
                    <button className="btn btn-primary " onClick={this.props.closeMenu}>X</button>
                </div>
                <h2 className={style.inputLable}>
                    New Note Name:
                </h2>
                <input id='noteName' className={style.folderInput} placeholder='Enter Note Name Here...'/>
                <div className={style.submitButton}>
                    <button className="btn btn-primary " onClick={this.renameNote}>Rename</button>
                </div>
            </div>
        </div>
        )
    }
}
