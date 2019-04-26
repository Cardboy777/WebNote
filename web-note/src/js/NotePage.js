import React, { Component } from 'react'
import Header from './Header'
import Notes from './Notes'

export default class NotePage extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Notes {...this.props} />
      </div>
    )
  }
}
