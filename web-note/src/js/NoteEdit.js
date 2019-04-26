import React, { Component } from 'react'
import style from '../css/NoteEdit.module.css';

export default class NoteEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorContent: null,
            lastKeyPressTime: Date.now(),
            currentNote : this.props.note
        }
        this.onChange = this.onChange.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.findFolder=this.findFolder.bind(this)
        this.findNote=this.findNote.bind(this)
    }

    componentDidMount(){
        if(this.props.note !== null){
            this.setState({
                editorContent: this.props.note.content
            })
            document.getElementById('noteEditor').value = this.props.note.content
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.note.content!==prevState.editorContent){
          return { editorContent: nextProps.note.content};
       }
       else return null;
    }

    onChange(e){
        this.setState({
            editorContent : e.target.value,
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
        let data = this.props.data
        let folderI = data.folders.findIndex(this.findFolder)
        let noteI = data.folders[folderI].contents.findIndex(this.findNote)
        data.folders[folderI].contents[noteI].content= this.state.editorContent
        this.props.updateData(data)
    }
    findFolder(a){
        return a === this.props.folder
    }
    findNote(a){
        return a === this.props.note
    }

    render() {

        return ( 
            <div className={ style.noteEdit }>
                <textarea id="noteEditor" className={style.noteArea} placeholder="Start Typing!" onChange={this.onChange}/>
                <div className={style.downLoadNoteButton} onClick={this.props.downloadNote}><i className="fas fa-download"></i></div>
            </div>
        )
    }
}