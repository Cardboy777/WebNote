import React, { Component } from 'react'
import NewFolderMenu from './NewFolderMenu'
import style from '../css/FolderList.module.css'

export default class FolderList extends Component {
  constructor(props){
    super(props)
    this.newFolder = this.newFolder.bind(this)
    this.state={
      showNewFolderMenu: false
    }
  }


  newFolder(){
    this.setState({
      showNewFolderMenu : !this.state.showNewFolderMenu
    })
  }

  render() {
    return (
      <div className={style.folderList}>
        <button className="btn btn-primary" onClick={this.newFolder}>+</button>
        {this.state.showNewFolderMenu === true ? 
            <NewFolderMenu {...this.props} closeMenu={this.newFolder}/>
          :
            <React.Fragment/>
        }
      </div>
    )
  }
}
