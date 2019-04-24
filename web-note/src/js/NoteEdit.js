import React, { Component } from 'react'
import style from '../css/NoteEdit.module.css';
import firebase from './firebase';

export default class NoteEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorState: null,
            noteData: null,
            lastKeyPressTime: Date.now()
        }
        this.onChange = this.onChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount(){
        if(this.props.note !== null){
            this.setState({
                editorState: this.props.note.content,
                noteData: this.props.data.folders,
            })
        }
    }

    onChange(value){
        let newData = this.state.noteData
        this.props.note.content = value;
        this.setState({
            content : value,
            noteData : newData,
            lastKeyPressTime: Date.now()
        });
        //Auto-save after 1 second of no typing
        setTimeout(()=>{
            if( (Date.now() - this.state.lastKeyPressTime) >= 1000 ){
                this.saveChanges();
            }
        }, 1000);
        
    }
    
    saveChanges(){
        console.log("Saving Changes...")
        firebase.firestore().collection("userData").doc(this.props.user.uid).update({
            folders: this.state.noteData
        }).then((res)=>{
            console.log("Saved")
        });
    }

    render() {

        return ( 
            <div className = { style.noteEdit } >
                {this.state.editorState !== null ?
                    <textarea className={style.noteArea} placeholder="Start Typing!" onChange={this.onChange}>{this.state.content}</textarea>
                :
                    <p>Select a Note to Edit</p>
            }
            </div>
        )
    }
}