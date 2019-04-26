import React, { Component } from 'react'
import NewFolderMenu from './NewFolderMenu'
import FolderTab from './FolderTab'
import style from '../css/FolderList.module.css'
import tabStyle from '../css/FolderTab.module.css'

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
        {this.state.showNewFolderMenu === true ? 
            <NewFolderMenu {...this.props} closeMenu={this.newFolder}/>
            :
            <React.Fragment/>
        }
        {this.props.data.folders.map((i)=>
          <FolderTab key={i.name} folder={i} setFolder={this.props.setFolder} isSelected={i === this.props.folder}/>
        )}
        <div className={tabStyle.tab} onClick={this.newFolder}><i className="fas fa-plus"></i></div>
      </div>
    )
  }
}
