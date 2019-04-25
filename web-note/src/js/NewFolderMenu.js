import React, { Component } from 'react'
import style from '../css/NewFolderMenu.module.css'
import firebase from './firebase'

export default class NewFolderMenu extends Component {
    constructor(props){
        super(props);
        this.createFolder = this.createFolder.bind(this);
    }
    //Creates new folder and updates database
    createFolder(){
        let folderName = document.getElementById("folderName").value
        console.log(folderName)
        let data= this.props.data

        let newFolder={
            name: folderName,
            contents: [],
            createdBy: this.props.user.uid,
            visibleBy: this.props.user.uid
        }
        data.folders.push(newFolder)
        this.props.updateData(data)

        this.props.closeMenu();
    }

    render() {
        return (
        <div className={style.fullscreen}>
            <div className={style.menu}>
                <h1 className={style.menuTitle}>New Folder</h1>
                <div className={style.exitButton}>
                    <button className="btn btn-primary " onClick={this.props.closeMenu}>X</button>
                </div>
                <h2 className={style.inputLable}>
                    Folder Name:
                </h2>
                <input id='folderName' className={style.folderInput} placeholder='Enter Folder Name Here...'/>
                <div className={style.submitButton}>
                    <button className="btn btn-primary " onClick={this.createFolder}>Create</button>
                </div>
            </div>
        </div>
        )
    }
}
