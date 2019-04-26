import React, { Component } from 'react'
import style from '../css/PopupMenu.module.css'

export default class RenameFolderMenu extends Component {
    constructor(props){
        super(props);
        this.renameFolder = this.renameFolder.bind(this);
    }
    //Creates new folder and updates database
    renameFolder(){
        let folderName = document.getElementById("folderName").value
        this.props.renameFolder(folderName)
        this.props.closeMenu()
    }

    render() {
        return (
        <div className={style.fullscreen}>
            <div className={style.menu}>
                <h1 className={style.menuTitle}>Rename Folder: {this.props.folder.name}</h1>
                <div className={style.exitButton}>
                    <button className="btn btn-primary " onClick={this.props.closeMenu}>X</button>
                </div>
                <h2 className={style.inputLable}>
                    New Folder Name:
                </h2>
                <input id='folderName' className={style.folderInput} placeholder='Enter Folder Name Here...'/>
                <div className={style.submitButton}>
                    <button className="btn btn-primary " onClick={this.renameFolder}>Rename</button>
                </div>
            </div>
        </div>
        )
    }
}
