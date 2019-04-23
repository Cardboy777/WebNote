import React, { Component } from 'react'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Notes from './Notes'

export default class NotePage extends Component {

  render() {
    return (
      <div>
        <Header/>
        <LeftMenu/>
        <Notes {...this.props} />
      </div>
    )
  }
}
