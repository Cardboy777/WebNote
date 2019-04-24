import React, { Component } from 'react'
import style from '../css/FolderTab.module.css'

export default class FolderTab extends Component {
    constructor(props){
        super(props)
        this.select =this.select.bind(this)
    }

    select(){
        this.props.setFolder(this.props.folder)
    }

    render() {
        return (
            <div>
                {this.props.isSelected === false ?
                    <div className={style.tab} onClick={this.select}>
                        {this.props.folder.name}
                    </div>
                    :
                    <div className={style.tab+" "+style.isSelected} onClick={this.select}>
                        {this.props.folder.name}
                    </div>
                }
            </div>
        )
    }
}
