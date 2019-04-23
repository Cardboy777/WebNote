import React, { Component } from 'react'
import style from '../css/NewFolderMenu.module.css'
import firebase from './firebase'

export default class NewFolderMenu extends Component {
    constructor(props){
        super(props);
        this.createFolder = this.createFolder.bind(this);
    }


    createFolder(){
        let db = firebase.firestore();
        let folderName = document.getElementById('folderInput').value
        db.collection("userData").doc(this.props.user.uid).set({
            folders: {
                [folderName] : {
                    name: folderName
                }
            }
        })
        .then((res)=>{
            console.log(res)
            console.log('Folder Created')
        }).catch((err)=>{
            console.log(err)
            console.log('Error')
        })

        
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
                <input className={style.folderInput} placeholder='Enter Folder Name Here...'/>
                <div className={style.submitButton}>
                    <button id='folderInput' className="btn btn-primary " onClick={this.createFolder}>Create</button>
                </div>
            </div>
        </div>
        )
    }
}
